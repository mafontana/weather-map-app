import React, {Component} from 'react'
import ExtendedToolbarWeather from './ExtendedToolbarWeather';
import ExtendedToolbarForecast from './ExtendedToolbarForecast';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        extendedToolbarWeatherOpen: false,
        extendedToolbarForecastOpen: false
    }
  }

  toggleExtendedWeatherToolbar = () => {
    this.setState((prevState) => {
      return {extendedToolbarWeatherOpen: !prevState.extendedToolbarWeatherOpen}
    })
  }

  toggleExtendedForecastToolbar = () => {
    this.setState((prevState) => {
      return {extendedToolbarForecastOpen: !prevState.extendedToolbarForecastOpen}
    })
  }

  render() {

    return (
        <div className="toolbar">
      
        <header>
        <nav className="toolbarNavigation">
            <img src={require("./weather_app_logo.png")} className="logo"></img>
            <h1>World Weather App</h1>
            <div className="toolbarNavigationItems">
                    <ul>
                        <li><button onClick={this.toggleExtendedWeatherToolbar}>Today's Weather Details</button></li>
                        <li><button onClick={this.toggleExtendedForecastToolbar}>5 day Forecast</button></li>
                    </ul>
            </div>
        </nav>
      
        <ExtendedToolbarWeather 
            show={this.state.extendedToolbarWeatherOpen}
            cityName={this.props.cityName} 
            currentTemp={this.props.currentTemp}
            minTemp={this.props.minTemp}
            maxTemp={this.props.maxTemp}
            currentWeather={this.props.currentWeather}
            currentWindSpeed={this.props.currentWindSpeed}
            currentHumidity={this.props.currentHumidity}
        />
        <ExtendedToolbarForecast
            show={this.state.extendedToolbarForecastOpen}/>
        
        </header>
      </div>
    );
  }
}

export default Toolbar