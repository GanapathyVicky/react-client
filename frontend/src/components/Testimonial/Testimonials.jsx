import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
  const settings={
    dots:true,
    infinite:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint:992,
        settings:{
          slideToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
        {
          breakpoint:576,
          settings:{
            slideToShow:1,
            slidesToScroll:1,
            
          },
      },
    ]
  }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p>Best travel agency in town... <br/>
        Easily approachable and had best hospitality ever so far..<br/>
        if you're planning for family or girls trip then Nellai tourism <br/>
        is the best for affordable price and Safe trip. I am Looking for another trip to GOA </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
        <div>
          <h6 className='mb-0 mt3'>Mattai</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p>Best travel agency in town... <br/>
        Easily approachable and had best hospitality ever so far..<br/>
        if you're planning for family or girls trip then Nellai tourism <br/>
        is the best for affordable price and Safe trip. I am Looking for another trip to GOA </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
        <div>
          <h6 className='mb-0 mt3'>Madan</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p>Best travel agency in town... <br/>
        Easily approachable and had best hospitality ever so far..<br/>
        if you're planning for family or girls trip then Nellai tourism <br/>
        is the best for affordable price and Safe trip. I am Looking for another trip to GOA </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
        <div>
          <h6 className='mb-0 mt3'>jeo</h6>
          <p>Customer</p>
        </div>
      </div>

    </div>

    <div className="testimonial py-4 px-3">
      <p>Best travel agency in town... <br/>
        Easily approachable and had best hospitality ever so far..<br/>
        if you're planning for family or girls trip then Nellai tourism <br/>
        is the best for affordable price and Safe trip. I am Looking for another trip to GOA </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
        <div>
          <h6 className='mb-0 mt3'>Mattai</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
  </Slider>
}

export default Testimonials
