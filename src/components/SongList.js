import React, { useState, useEffect } from 'react' // useEffect gies us access to lifecycle methods
import uuid from 'uuid'
import NewSongFrom from './NewSongForm'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memry gospel', id: 2},
    { title: 'this wild darkness', id: 3}
  ])

  const [age, setAge] = useState(0)

  const addSong = (song) => {
    setSongs([...songs, {
      title: song,
      id: uuid.v4() // this generates a random id
    }])
  }

  useEffect(() => {
    console.log("Initial ender", songs, age)
  }, [])

  useEffect(() => {
    console.log("Current songs", songs)
  }, [songs])
  useEffect(() => {
    console.log("Current age", age)
  }, [age])

  const addAge = () => {
    setAge(age + 1)
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
      <button onClick={addAge}>Add 1 to age: {age}</button>
    </div>
  )
}

export default SongList;
