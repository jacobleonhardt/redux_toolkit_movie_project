import React from 'react'

export const MovieDisplayCard = (item) => {
  return (
    <div className='list-item-card'>
      <img src={item.item.picture} />
      <span>{item.item.name}</span>
    </div>
  )
}
