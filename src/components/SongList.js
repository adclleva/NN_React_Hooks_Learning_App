import React, { useState } from 'react'
import uuid from 'uuid'
import NewSongFrom from './NewSongForm'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memry gospel', id: 2},
    { title: 'this wild darkness', id: 3}
  ])

  const addSong = (song) => {
    setSongs([...songs, {
      title: song,
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
      <NewSongFrom addSong={addSong}/>
    </div>
  )
}

export default SongList;
