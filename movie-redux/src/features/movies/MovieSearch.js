import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMovie, addMovieToList } from './movieSlice'
import styles from './Movies.module.css'

export const MovieSearch = () => {
  const dispatch = useDispatch()
  const [movieTitle, setMovieTitle] = useState('')
  // const searchableTitle = movieTitle.join('-').toLowerCase()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getMovie(movieTitle))
  }

  return (
    <div className='movie-search-form'>
      <h1>Movie Search</h1>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input type='text' placeholder='Title' onChange={(e) => setMovieTitle(e.target.value)}></input>
        <input type='submit' value='Find Movie'/>
      </form>
    </div>
  )
}
