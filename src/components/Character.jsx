import React from 'react'

const Character = ({nombres}) => {
  return (
    <div>
      <h2>{nombres.name}</h2>
      <h3 className='btn btn-primary'>{nombres.status}</h3>
      <h4 className='btn btn-primary'>{nombres.species}</h4>
      <h5 className='btn btn-primary'>{nombres.gender}</h5>
      <img src={nombres.image} alt={nombres.name} />
  </div>
  )
}

export default Character