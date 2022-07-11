import React from 'react'

export const MovieDisplayCard = (item) => {
  return (
    <div className='list-item-card'>
        <img src={item.item.picture} alt='movie or tv show stillframe' />
        <h3>{item.item.name}</h3>
        <div className='provider-icons'>
          {item.item.locations.map( provider => <img key={provider.id} src={provider.icon} alt='streaming provider icon' />)}
        </div>
    </div>
  )
}
