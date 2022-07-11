import React from 'react'
import { MovieDisplayCard } from './MovieDisplayCard'
import './Movies.css'

export const MovieDisplay = (result) => {
  return (
    <div className='list-item'>
      {result.result.results.map(item => {
        return <MovieDisplayCard key={item.id} item={item} />
      })}</div>
  )
}
