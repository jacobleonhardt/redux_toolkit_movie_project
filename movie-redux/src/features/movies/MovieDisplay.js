import React from 'react'
import './Movies.css'

export const MovieDisplay = (list) => {
  return (
    <div className='list-item'>{list.results.map(item => {
      return <span>ITEM: {item.provider}</span>
    })}</div>
  )
}
