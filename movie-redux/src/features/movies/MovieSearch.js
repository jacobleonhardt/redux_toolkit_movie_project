import React from 'react'
import { useState } from 'react'
import { getMovie } from './movieSlice'

export const MovieSearch = () => {

  const [movieTitle, setMovieTitle] = useState('')
  const movieTitleString = String(movieTitle) || '';

  const onSubmit = (e) => {
    e.preventDefault()
    getMovie(movieTitleString)
  }

  return (
    <div>
      <h1>Movie Search</h1>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input type='text' placeholder='Title' onChange={(e) => setMovieTitle(e.target.value)}></input>
        <button type='submit'>Find Movie</button>
      </form>
    </div>
  )
}
