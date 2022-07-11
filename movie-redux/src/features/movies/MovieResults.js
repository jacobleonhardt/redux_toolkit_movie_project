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
      {console.log('>>>>>>', resultList[0])}
      { emptyList ? "Let's find a movie!" : <MovieDisplay result={resultList[0]} /> }
    </div>
  )
}
