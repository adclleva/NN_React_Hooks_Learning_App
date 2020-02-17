import React, { useState } from 'react';

const NewSongFrom = ({ addSong }) => { // desctructured from the props
  const [song, setSong] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    addSong(song)
    setSong('')
  }

  const handleChange = (event) => {
    setSong(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name: </label>
      <input 
        type="text" 
        value={song} 
        onChange={handleChange}
        required
        />
      <input type="submit" value="add song"/>
    </form>
  )
}

export default NewSongFrom