import axios from 'axios'
import { useState, useEffect } from 'react'

const ResidentsInfo = ({ url }) => {

    const [resident, setResident] = useState({})

    useEffect(() => {

        axios
            .get(url)
            .then(resp => setResident(resp.data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div className="resident-card">
            <h1>{resident.name}</h1>
            <img src={resident.image} alt='' />
        </div>
    )
}
export default ResidentsInfo