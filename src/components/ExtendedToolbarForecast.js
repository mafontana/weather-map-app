import React from 'react'

const ExtendedToolbarForecast = props => {

let toolbarClassName = "closed"
if (props.show) {
    toolbarClassName = "open"
}
    return (
    <div className={toolbarClassName}>
       <h1>5 day forecast:</h1>
       <div className="toolbarData">
            
       </div>
    </div>
    )
}

export default ExtendedToolbarForecast