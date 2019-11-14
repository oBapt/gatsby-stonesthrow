import React from "react"

const TrackInfo = props => {
  return (
    <div className="overlay">
      <h1 className="track-info">{props.info}</h1>
    </div>
  )
}

export default TrackInfo
