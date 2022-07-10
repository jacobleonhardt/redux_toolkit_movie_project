import React from 'react'
import { selectMovie } from './movieSlice'
import { useSelector } from 'react-redux'
import styles from './Movies.module.css'

export const MovieDisplay = () => {

  const movie = useSelector(selectMovie)

  return (
    <div className='movie-search-results'>{movie}</div>
  )
}
