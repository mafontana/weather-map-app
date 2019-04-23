
import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';

export default function Map() {

    const TOKEN = "pk.eyJ1IjoibWFmb250YW5hIiwiYSI6ImNqcXptcnRucDA0bngzeW94Y3lvNm9hOWQifQ.Da7mHzfQYcdq9eXABgNPQQ"
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 39.742043,
        longitude: -104.991531,
        zoom: 10
      })

    return (
      <div>
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mafontana/cjuubnuzvhdnz1fmqsgojz8s3"
        onViewportChange={viewport => {
            setViewport(viewport)
        }}
        >
        </ReactMapGL>
    
      </div>
    )
  }




