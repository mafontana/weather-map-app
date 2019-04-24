import React, {Component} from 'react';
import './App.css';
import Map from "./components/Map"
import Toolbar from "./components/Toolbar"

class App extends Component {

render() {

  return (
    <div className="App">
    <Toolbar />
    <Map />
     
    </div>
  );
}
}

export default App;
