import React from 'react'
import { MovieDisplayCard } from './MovieDisplayCard'
import './Movies.css'

export const MovieDisplay = ({ result }) => {
  return (
    <div className='list-item'>
      { result.map( item => {
        return item.results.map( provider => <MovieDisplayCard key={provider.id} item={provider} /> )
      })}
    </div>
  )
}
