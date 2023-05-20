
const ResidentInfoDos = ({ residentData }) => {
  return (
    <div className="resident-card">
      <h1>{residentData.name}</h1>
      <img src={residentData.image} alt=""/>
    </div>
  )
}
export default ResidentInfoDos