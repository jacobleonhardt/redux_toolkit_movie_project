import React from 'react'
import { MovieDisplayCard } from './MovieDisplayCard'
import { NoResult } from './NoResult'
import './Movies.css'

export const MovieDisplay = ({ result }) => {


  return (
    <div className='list-items'>
      { result.map( item => {
        if(Object.keys(item.results).length === 0) {
          return <NoResult term={item.term} />
        }

        return item.results.map( provider => <MovieDisplayCard key={provider.id} item={provider} /> )
      })}
    </div>
  )
}
