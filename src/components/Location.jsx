const Location = ({ residentData }) => {
    return (
        <div className="resident-card">
            <h1>{residentData.name}</h1>
            <ul>
                <li>{residentData.dimension}</li>
                <li>{residentData.tipo}</li>
                <li>{residentData.length}</li>
                <img src={residentData.image} alt="" />
            </ul>
        </div>
    )
}
export default Location