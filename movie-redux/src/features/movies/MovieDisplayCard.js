import React from 'react'

export const MovieDisplayCard = (item) => {
  return (
    <div className='list-item-card'>
      <>
        <img src={item.item.picture} alt='movie or tv show stillframe' />
        <span>{item.item.name}</span>
      </>
    </div>
  )
}
