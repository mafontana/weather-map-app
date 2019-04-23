
import React, {Component} from 'react'
import ReactMapGL, {NavigationControl, FullscreenControl} from 'react-map-gl'


const TOKEN = "pk.eyJ1IjoibWFmb250YW5hIiwiYSI6ImNqcXptcnRucDA0bngzeW94Y3lvNm9hOWQifQ.Da7mHzfQYcdq9eXABgNPQQ"

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
  }

  const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
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
          }
      
    };
  }

  _updateViewport = (viewport) => {
    this.setState({viewport})
  }

  render() {

    const {viewport} = this.state

    return (
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mafontana/cjuubnuzvhdnz1fmqsgojz8s3"
        onViewportChange={this._updateViewport}
      >
        <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this._updateViewport} />
        </div>
        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
      </ReactMapGL>
    );
  }
}

export default Map


