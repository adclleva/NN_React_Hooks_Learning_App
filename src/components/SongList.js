import React, { useState } from 'react'
import uuid from 'uuid'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memry gospel', id: 2},
    { title: 'this wild darkness', id: 3}
  ])

  const addSong = () => {
    setSongs([...songs, {
      title: 'new song',
      id: uuid.v4() // this generates a random id
    }])
  }

  const displaySongs = songs.map(song => {
    const { title, id } = song

    return(
    <li key={id}>{title}</li>
    )
  })

  return (
    <div className="song-list">
      <ul>
       {displaySongs} 
      </ul>
      <button onClick={() => addSong()}>Add Song</button>
    </div>
  )
}

export default SongList;
