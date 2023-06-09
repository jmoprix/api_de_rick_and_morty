
const ResidentInfoDos = ({ residentData }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={residentData.image}
          alt=""
        />
      </div>
      <div className="card-text">
        <div className="card-date">
          <div className="card-date-1">
            <div className="card-title">
              <h1>{residentData.name}</h1>
            </div>
            <div className="card-info">
              <ul className="card-1">
                <p> Raza</p>
                <p> Origen</p>
                <p> Apariciones</p>
              </ul>
              <ul className="card-2">
                <p> {residentData.status}</p>
                <p> {residentData.origin.name}</p>
                <p> {residentData.episode.length}</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
export default ResidentInfoDos