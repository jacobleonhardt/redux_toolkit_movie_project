import React from 'react'
import { selectMovie } from './movieSlice'
import { useSelector } from 'react-redux'
import { MovieDisplay } from './MovieDisplay'
import './Movies.css'

export const MovieResults = () => {

  const resultList = useSelector(selectMovie)
  const emptyList = resultList.length === 0
  return (
    <div className='movie-search-results'>
      { emptyList ? "Let's find a movie!" : resultList.map(result => {
        return <MovieDisplay key={0} list={result} />
      }) }
    </div>
  )
}
