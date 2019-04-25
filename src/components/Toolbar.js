import React, {Component} from 'react'
import ExtendedToolbarWeather from './ExtendedToolbarWeather';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
        <div className="toolbar">
        <header>
            <div className="toolbarHeader">
                <img src={require("./weather_app_logo.png")} className="logo"></img>
                <div className="toolbarText">
                    <h1>World Weather App</h1>
                    <p>Click on the map to get started</p>
                </div>
            </div>
            
            <ExtendedToolbarWeather 
                showToolbar={this.props.showToolbar}
                cityName={this.props.cityName} 
                currentTemp={this.props.currentTemp}
                minTemp={this.props.minTemp}
                maxTemp={this.props.maxTemp}
                currentWeather={this.props.currentWeather}
                currentWindSpeed={this.props.currentWindSpeed}
                currentHumidity={this.props.currentHumidity}
            />
        </header>
      </div>
    )
  }
}

export default Toolbar