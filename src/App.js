import React, {useState} from 'react'
import Searchbar from './SearchCity';
import 'bootstrap/dist/css/bootstrap.min.css'
import AirQualityCard from './AirQualityCard';
import PollutantInfo from './pollutantInfo';
import './App.css';
import AirQualityLevelTable from './AirQualityTable';


function App() {
  // initialise state *first is the variable and the second element is what we call to update that function
const [airQualityData, setAirQualityData] = useState()
const [error, seterror] = useState(null)


  const getAircondition = async(city)=>{
    try {
      const response = await fetch(`http://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQTOKEN}`)
      const data = await response.json()
      console.log(data);
      if (response.ok && data.status ==='ok') {
        setAirQualityData ( data.data)
        seterror( null)
      }else{
      seterror('Sorry results not found. you check your  spelling and try again')
      setAirQualityData(null)
      }
    } catch (err) {
      console.error('network error:',err);
      //set error state
      seterror('server couldnt be reached')
      // set air quality data to null
      setAirQualityData(null)
    }
    }
  return (
    <div className='container'>
   <h1 className='mt-5 mb-3'>Air quality index</h1>
   <Searchbar getAircondition={getAircondition}/>
   {error &&(//using the && means if error display it else do not do any thing at all
    <div className='alert alert-danger ' role='alert'>
      {error}
    </div>
    )}
    {airQualityData &&(
      <>
      <AirQualityCard data={airQualityData}/>
      <PollutantInfo pollutant={airQualityData.dominentpol}/>
      </>
      )}
      <AirQualityLevelTable />
   </div>
  );
}

export default App;
