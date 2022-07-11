import React from 'react'
import './Movies.css'

export const NoResult = (term) => {
  return (
    <div className='no-result'>
      <p>¯\_(ツ)_/¯</p>
      <h4>Search Term: {term.term}</h4>
      <p>Hmmm, can't find anything with that name.</p>
    </div>
  )
}
