import React from 'react'
import { selectMovie } from './movieSlice'
import { useSelector } from 'react-redux'
import './Movies.module.css'

export const MovieDisplay = () => {

  const results = useSelector(selectMovie)

  return (
    <div className='movie-search-results'>{results.map(result => {
      return <div key={result.id}>{result.locations}</div>
    })}</div>
  )
}
