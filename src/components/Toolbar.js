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
        <nav className="toolbarNavigation">
            <img src={require("./weather_app_logo.png")} className="logo"></img>
            <h1>World Weather App</h1>
            <div className="toolbarNavigationItems">
                    <ul>
                        <li><button onClick={this.props.toggleExtendedToolbar}>Today's Weather</button></li>
                        <li><button>5 day Forecast</button></li>
                    </ul>
            </div>
        </nav>
      
    
        </header>
      </div>
    );
  }
}

export default Toolbar