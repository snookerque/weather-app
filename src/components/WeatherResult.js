import React from 'react';
const WeatherResult = (props) => {
  return(
    <div className="resultText">
	  <p>Temperature: {props.temperature} </p>
	  <p>Humidity: {props.humidity} </p>
	  <p>Forecast: {props.forecast} </p>      
    </div>
  )
}
export default WeatherResult;