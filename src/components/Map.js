
import React, {Component} from 'react'
import ReactMapGL, {NavigationControl, GeolocateControl, Popup} from 'react-map-gl'


const TOKEN = "pk.eyJ1IjoibWFmb250YW5hIiwiYSI6ImNqcXptcnRucDA0bngzeW94Y3lvNm9hOWQifQ.Da7mHzfQYcdq9eXABgNPQQ"

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
  }

  const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10
  }

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
        viewport: {
            latitude: 39.742043,
            longitude: -104.991531,
            zoom: 3,
            bearing: 0,
            pitch: 0
          },
      clickedLatitude: 0,
      clickedLongitude: 0,
      currentTemp: 0,
      minTemp: 0,
      maxTemp: 0,
      currentWeather: "",
      currentWindSpeed:0,
      currentHumidity: 0,
      currentLat: 0,
      currentLng: 0,
      cityName: "",
      country: ""
    };
  }

  componentDidMount() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                        currentLat: coords.latitude,
                        currentLng: coords.longitude
                })
            })
        }
  }

  
 getWeather = async () => {
    const weatherApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.clickedLatitude}&lon=${this.state.clickedLongitude}&APPID=4b7f4d52b065c583304a7bf33bc7a01d&units=imperial`)
    const json = await weatherApiCall.json()
    this.setState({
        currentTemp: json.main.temp,
        minTemp: json.main.temp_min,
        maxTemp: json.main.temp_max,
        currentWeather: json.weather[0].description,
        currentWindSpeed: json.wind.speed,
        currentHumidity: json.main.humidity,
        cityName: json.name,
        country: json.sys.country
    })
    console.log("weather data", json);
  } 

  updateViewport = (viewport) => {
    this.setState({viewport})
  }

  handleMapClick = (e) => {
    var newLatLng = e.lngLat
    console.log(e.lngLat);
    this.setState({
        clickedLongitude: newLatLng[0],
        clickedLatitude: newLatLng[1]
    })

    console.log(this.state.currentTemp)
    this.getWeather()

  }

  render() {

    const {viewport} = this.state

    return (
        <div>
        <p>latitude:{this.state.clickedLatitude}</p>
        <p>longitude: {this.state.clickedLongitude}</p>
        <p>temperature: {this.state.currentTemp} degrees Farenheit</p>
        <div className="map">
          <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/mafontana/cjuubnuzvhdnz1fmqsgojz8s3"
          onViewportChange={this.updateViewport}
          onClick={this.handleMapClick}
          >
              <div className="nav" style={navStyle}>
                  <NavigationControl onViewportChange={this.updateViewport} />
              </div>
              <GeolocateControl
              style={geolocateStyle}
              onViewportChange={this._onViewportChange}
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
            /> 
              <Popup 
              longitude={this.state.clickedLongitude}
              latitude={this.state.clickedLatitude}
              tipSize={40} 
              closeButton={false}
              dynamicPosition={true}>
              {this.state.currentTemp}<p>degrees Farenheit</p>
              </Popup>
        </ReactMapGL>
      </div>
      </div>
    );
  }
}

export default Map


