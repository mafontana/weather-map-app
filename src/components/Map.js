
import React, {Component} from 'react'
import ReactMapGL, {NavigationControl, FullscreenControl} from 'react-map-gl'


const TOKEN = "pk.eyJ1IjoibWFmb250YW5hIiwiYSI6ImNqcXptcnRucDA0bngzeW94Y3lvNm9hOWQifQ.Da7mHzfQYcdq9eXABgNPQQ"

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
  }

  const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  }

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
        viewport: {
            latitude: 39.742043,
            longitude: -104.991531,
            zoom: 10,
            bearing: 0,
            pitch: 0
          },
      clickedLatitude: 0,
      clickedLongitude: 0,
      weatherData: 0
    };
  }

 getWeather = async () => {
    const weatherApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.clickedLatitude}&lon=${this.state.clickedLongitude}&APPID=4b7f4d52b065c583304a7bf33bc7a01d&units=imperial`)
    const json = await weatherApiCall.json()
    this.setState({
        weatherData: json.main.temp
    })
    console.log("weather data", json);
  } 

  _updateViewport = (viewport) => {
    this.setState({viewport})
  }

  handleMapClick = (e) => {
    var newLatLng = e.lngLat
    console.log(e.lngLat);
    this.setState({
        clickedLongitude: newLatLng[0],
        clickedLatitude: newLatLng[1]
    })

    console.log(this.state.weatherData)
    this.getWeather()
    // this.setState({
    //     weatherData: 
    // })
  }

  render() {

    const {viewport} = this.state

    return (
        <div>
        <p>latitude:{this.state.clickedLatitude}</p>
        <p>longitude: {this.state.clickedLongitude}</p>
        <p>temperature: {this.state.weatherData} degrees Farenheit</p>
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mafontana/cjuubnuzvhdnz1fmqsgojz8s3"
        onViewportChange={this._updateViewport}
        onClick={this.handleMapClick}
        >
            <div className="nav" style={navStyle}>
                <NavigationControl onViewportChange={this._updateViewport} />
            </div>
            <div className="fullscreen" style={fullscreenControlStyle}>
                <FullscreenControl />
            </div>
      </ReactMapGL>
      </div>
    );
  }
}

export default Map


