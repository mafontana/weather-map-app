import React, {Component} from 'react'


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
                        <li>How to Use</li>
                        <li>Today's Forecast</li>
                        <li>5 day Forecast</li>
                    </ul>
            </div>
        </nav>
        </header>
      </div>
    );
  }
}

export default Toolbar