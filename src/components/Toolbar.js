import React, {Component} from 'react'
import ExtendedToolbarWeather from './ExtendedToolbarWeather';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        extendedToolbarOpen: false
    }
  }

  toggleExtendedToolbar = () => {
    this.setState((prevState) => {
      return {extendedToolbarOpen: !prevState.extendedToolbarOpen}
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
                        <li><button onClick={this.toggleExtendedToolbar}>Today's Weather Details</button></li>
                        <li><button>5 day Forecast</button></li>
                    </ul>
            </div>
        </nav>
      
        <ExtendedToolbarWeather 
            show={this.state.extendedToolbarOpen}
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
    );
  }
}

export default Toolbar