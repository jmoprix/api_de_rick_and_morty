import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
//import ResidentsInfo from './components/ResidentsInfo'
import ResidentInfoDos from './components/ResidentInfoDos'

function App() {

  const [location, setLocation] = useState({})
  const [residents, setResidents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [idLocation, setIdLocation] = useState(3)

  useEffect(() => {

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(resp => {
        //console.log(resp.data)
        setLocation(resp.data)
        //setResidents(resp.data.residents)
        getResidentsData(resp.data.residents)
      })
      .catch((error) => console.error(error))
  }, [idLocation])

  const getResidentsData = residentsArray => {

    const idArray = residentsArray.map(url => url.split("/")[5])

    axios
      .get(`https://rickandmortyapi.com/api/character/${idArray}`)
      .then(resp => {
        //console.log(resp.data)
        setResidents(resp.data)
      })
      .catch((error) => console.error(error))
  }

  const residentPerPage = 10
  const indexOfLastResident = residentPerPage * currentPage
  const indexOfFirstResident = indexOfLastResident - residentPerPage
  const currenResidents = residents.slice(
    indexOfFirstResident,
    indexOfLastResident
  )

  const lastPage = Math.ceil(residents.length / residentPerPage)

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const [locationResults, setLocationResults] = useState([])

  const getLocationsFiltered = (searchValue) => {
    axios
      .get(`https://rickandmortyapi.com/api/location?name=${searchValue}`)
      .then((resp) => {
        console.log(resp.data)
        setLocationResults(resp.data.results)
      })
      .catch((error) =>{ 
        console.error(error) 
        setLocationResults([])
      })      
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <input
        type='text'
        onChange={e => getLocationsFiltered(e.target.value)}
      />
      <select
        name='locations'
        id='locations'
        onChange={e => setIdLocation(e.target.value)}
      >
        {
          locationResults.map((location) => (
            <option value={location.id}>{location.name}</option>
          ))
        }
      </select>
      {/*
        residents.map(resident => (
          <ResidentsInfo
            key={resident}
            url={resident}
          />
        ))
        */}
      {
        currenResidents.map(resident => (
          <ResidentInfoDos
            key={resident.id}
            residentData={resident}
          />
        ))
      }

      <button
        onClick={() => pagination(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {/*[1, 2, 3].map((number) => (<button>{number}</button>))*/}

      <button
        onClick={() => pagination(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        Next
      </button>
    </div >
  )
}

export default App
