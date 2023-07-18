import React from "react";

//we are not passing useState because this is a use only it does not manage a thing
const getCardColor=(aqi)=>{
if (aqi<=50) {
    return 'bg-success text-white'
}else if (aqi<=100) {
   return 'bg-warning' 
}
else if (aqi<=150) {
    return 'bg-orenge'
}else if (aqi<=200) {
    return 'bg-danger text-white'
}else if (aqi<=300) {
    return 'bg-very-unhealthy text-white'
}else  {
   return'bg-hazardous' 
}
}

const AirQualityCard = ({data}) =>{
    const {aqi, city, dominentpol, time} = data
    const cardColor = getCardColor(aqi)
return(
    <div className={`card mb-4 ${cardColor}`}>
        <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <h6 className="card-subtittle mb-2">Air quality index: {aqi}</h6>
        <p className="card-text">Dominant pollutant: {dominentpol}</p>
        <p className="card-text">Last update: {time.s}</p>
        </div>
    </div>
)
}
export  default AirQualityCard