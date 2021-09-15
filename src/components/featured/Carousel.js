import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import carouselImages from '../../constants/carouselImages'

const Carousel = () => {
  const setting = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  const carouselItem = (imageInfo, index) => (
    <div key={index}>
      <div
        className="carrousel_image"
        style={{
          background: `url(${imageInfo.url})`,
          height: `${window.innerHeight}px`
        }}
      />
    </div>
  )

  return (
    <div
      className="carousel_wrapper"
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...setting}>
        {carouselImages.map((imageInfo, index) =>
          carouselItem(imageInfo, index)
        )}
      </Slider>
    </div>
  )
}

export default Carousel
