import React from "react"

const Dropdown = props => {
  const { artists, onSelectArtist } = props
  const list = ["All Artists", ...artists]

  return (
    <select className="select" onChange={onSelectArtist}>
      {list.map(element => (
        <option key={element} value={element}>
          {element}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
