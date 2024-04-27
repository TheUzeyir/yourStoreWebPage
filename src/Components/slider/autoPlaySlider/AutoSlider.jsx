import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import style from "./autoSlider.module.css"

const AutoSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay: true,
        speed: 5000,
        cssEase: "linear",
        arrows: false,
        autoplaySpeed: 0, 
        pauseOnHover: false
      };

  return (
    <Slider className={style.autoSlider} {...settings}>
      <div className={style.autoSlider_item}>
        <h3>Free Shipping Over $100</h3>
      </div>
      <div className={style.autoSlider_item}>
        <h3>Free 2-day Delivery</h3>
      </div>
      <div className={style.autoSlider_item}>
        <h3>Free Shipping Over $100</h3>
      </div>
      <div className={style.autoSlider_item}>
        <h3>Free 2-day Delivery</h3>
      </div>
      <div className={style.autoSlider_item}>
        <h3>Free Shipping Over $100</h3>
      </div>
      <div className={style.autoSlider_item}>
        <h3>Free 2-day Delivery</h3>
      </div>
    </Slider>
  )
}

export default AutoSlider
