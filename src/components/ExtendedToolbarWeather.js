import React from 'react'

const ExtendedToolbarWeather = props => {

let toolbarClassName = props.showToolbar ? "open" : "closed"



return (
    <div className={toolbarClassName}>
       <h1>Today's weather conditions:</h1>
       <div className="toolbarData">
            <div className="toolbarItem">
                <h2>City Name:</h2>
                <p>{props.cityName}</p>
            </div>
            <div className="toolbarItem">
                <h2>Current Temperature:</h2>
                <p>{props.currentTemp} &deg;F</p>
            </div>
            <div className="toolbarItem">
                <h2>Current Weather:</h2>
                <p>{props.currentWeather}</p>
            </div>
            <div className="toolbarItem">
                <h2>Today's High:</h2>
                <p>{props.maxTemp}&deg;F</p>
            </div>
            <div className="toolbarItem">
                <h2>Today's Low:</h2>
                <p>{props.minTemp}&deg;F</p>
            </div>
            <div className="toolbarItem">
                <h2>Current Wind Speed:</h2>
                <p>{props.currentWindSpeed} mph</p>
            </div>
            <div className="toolbarItem">
                <h2>Current Humidity:</h2>
                <p>{props.currentHumidity}%</p>
            </div>
            
            
            
            
            
            
       </div>
    </div>
    )
}

export default ExtendedToolbarWeather