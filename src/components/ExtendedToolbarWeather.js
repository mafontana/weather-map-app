import React from 'react'

const ExtendedToolbarWeather = props => {

let toolbarClassName = "closed"
if (props.show) {
    toolbarClassName = "open"
}
    return (
    <div className={toolbarClassName}>
        
       <h1>Today's weather conditions:</h1>
       <div className="toolbarData">
       <p>City Name: {props.cityName}</p>
       <p>Current Temperature: {props.currentTemp}</p>
       <p>Today's High: {props.maxTemp}</p>
       <p>Today's Low: {props.minTemp}</p>
       <p>Current Wind Speed: {props.currentWindSpeed}</p>
       <p>Current Humidity: {props.currentHumidity}</p>

       </div>
    </div>
    )
}

export default ExtendedToolbarWeather