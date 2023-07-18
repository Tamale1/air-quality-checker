const AirQualityLevelTable =()=>{
    const levels = [
    {range: '0-50', level: 'Good', warning: 'Air quality is considered satisfactory. There is little to no health risk'},
    
    {range: '51-100 ', level: 'Moderate', warning: 'Some pollutants may be present, but they are not likely to cause significant health problems for most individuals.'},
    
    {range: '101-150', level: 'Unhealthy for Sensitive Groups', warning:'Everyone may begin to experience adverse health effects. People with respiratory or heart diseases, the elderly, and children may experience health effects.'},
    
    {range: '201-300', level: 'Very Unhealthy',  warning: ' The entire population is likely to be affected. Serious health effects may occur, even for healthy individuals'},
   
    {range: '301+', level: 'Hazardous',warning: 'Emergency conditions exist, and everyone may experience more serious health effects.'}
    
    ];
    return(
        <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Air Quality Levels</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
                <th scope="col">AQI Range</th>
                <th scope="col">Health Level</th>
                <th scope="col">Health Concern</th>
                </tr>
                </thead>
                <tbody>
                    {levels.map(({range, level, warning},index)=>(
                    <tr key={index}>
                        <td>{range}</td>
                        <td>{level}</td>
                        <td>{warning}</td>
                    </tr>
                 ))}
                </tbody>
            

        </table>

        </div>
        </div>
        )
}
export default AirQualityLevelTable