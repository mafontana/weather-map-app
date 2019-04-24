
import React, {Component} from 'react'
import ReactMapGL, {NavigationControl, GeolocateControl, Marker, Popup} from 'react-map-gl'


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
            zoom: 10,
            bearing: 0,
            pitch: 0
          },
      clickedLatitude: 0,
      clickedLongitude: 0,
      weatherData: 0,
      currentLat: 0,
      currentLng: 0
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
        weatherData: json.main.temp
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

    console.log(this.state.weatherData)
    this.getWeather()


    // const popupInfo = this.state.popupInfo

    // return popupInfo && (
    //   <Popup tipSize={5}
    //     anchor="top"
    //     longitude={this.state.clickedLongitude}
    //     latitude={this.state.clickedLongitude}
    //     closeOnClick={false}
    //     onClose={() => this.setState({popupInfo: null})} >
    //     <CityInfo info={popupInfo} />
    //   </Popup>
    // );
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
          {this.state.weatherData} degrees Farenheit
        </Popup>

      </ReactMapGL>
      </div>
    );
  }
}

export default Map


