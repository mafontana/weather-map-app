
import React, { useState} from 'react'
import ReactMapGL from 'react-map-gl';

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
        >
 
        </ReactMapGL>
      
      
      </div>
    )
  }















// class Map extends Component {
    
//     componentDidMount() {
//         var map = new mapboxgl.Map({
//             ...this.props,
//             container: this.container
//         })
//     }
    

//     render(){
//       return (
//         <div ref={(x) => {this.container = x}}>
        
        
        
        
//         </div>
//       );
//     }
//   }





// const Map = () => {
//     var map = new mapboxgl.Map({
//         style: 'mapbox://styles/mapbox/light-v9',
//         center: [-74.0066, 40.7135],
//         zoom: 15,
//         container: 'map'

//    })
// }












// export default Map;



