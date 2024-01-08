import React from 'react'


const CarItem = (props) => {
    const [images, names, price] = props.data
  return (
    <div className='home7'>
        <div>{images}</div>
        <p>{names}</p>
        <p>Rs{price}</p>
    </div>
  )
}

export default CarItem