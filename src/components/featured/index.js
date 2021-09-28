import React from 'react'
import Carousel from './Carousel'
import TimeUntil from './timeUntil'

const Featured = () => {
  return (
    <div className="featured_container">
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Youshuke & Nastumi</div>
      </div>
      <TimeUntil />
    </div>
  )
}

export default Featured
