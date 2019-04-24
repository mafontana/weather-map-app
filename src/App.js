import React, {Component} from 'react';
import './App.css';
import Map from "./components/Map"
import Toolbar from "./components/Toolbar"
import ExtendedToolbarWeather from './components/ExtendedToolbarWeather';

class App extends Component {
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

  let extendedToolbar = null

  if (this.state.extendedToolbarOpen) {
    extendedToolbar = <ExtendedToolbarWeather  />
  } 

  return (
    <div className="App">
      <div className="toolbars"> 
        <Toolbar  toggleExtendedToolbar={this.toggleExtendedToolbar}/>
        {extendedToolbar}
      </div>
   
    <Map />
     
    </div>
    )
  }
}

export default App;
