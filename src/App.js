import React, {Component} from 'react';
import './App.css';
import Map from "./components/Map"
import Toolbar from "./components/Toolbar"
import ExtendedToolbarWeather from './components/ExtendedToolbarWeather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

 

render() {


  return (
    <div className="App">
   
    <Map />
     
    </div>
    )
  }
}

export default App;
