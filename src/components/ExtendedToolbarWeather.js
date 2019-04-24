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
            <p>Current Temperature: {props.currentTemp} &deg;F</p>
            <p>Current Weather: {props.currentWeather} </p>
            <p>Today's High: {props.maxTemp}&deg;F</p>
            <p>Today's Low: {props.minTemp}&deg;F</p>
            <p>Current Wind Speed: {props.currentWindSpeed} mph</p>
            <p>Current Humidity: {props.currentHumidity}%</p>
       </div>
    </div>
    )
}

export default ExtendedToolbarWeather