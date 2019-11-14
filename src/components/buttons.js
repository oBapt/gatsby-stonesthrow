import React from "react"

const Buttons = props => {
  const { onPlayPauseIcon, isPlaying, onNext } = props

  return (
    <div className="buttons">
      <button
        onClick={onPlayPauseIcon}
        className={isPlaying ? "pause" : "play"}
      ></button>
      <button onClick={onNext} className="next"></button>
    </div>
  )
}

export default Buttons
