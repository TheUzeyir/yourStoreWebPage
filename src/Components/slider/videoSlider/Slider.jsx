import React from 'react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import video1 from "../../../assets/img/mainPage/laptopFind.avif";
import video2 from "../../../assets/img/mainPage/laptopFind.avif";
import video3 from "../../../assets/img/mainPage/laptopFind.avif";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from "./slider.module.css";

const Slider = () => {
  const navigate = useNavigate();
  const handleClickProduct = (product) => {
    navigate(`/shop-page/category/${product}`);
  };
  

  return (
    <div className={style.slider}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        effect='fade'
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      > 
        <SwiperSlide className={style.video_slider_box}>
          <img src={video1} className={style.video_slider_box_video}></img>
          <button className={style.video_slider_box_btn} onClick={() => handleClickProduct('Monitor')}>Shop Monitors</button>
        </SwiperSlide>
        <SwiperSlide className={style.video_slider_box}>
          <img src={video2}className={style.video_slider_box_video}></img>
          <button className={style.video_slider_box_btn} onClick={() => handleClickProduct('Headset')}>Shop Headsets</button>
        </SwiperSlide>
        <SwiperSlide className={style.video_slider_box}>
          <img src={video3} className={style.video_slider_box_video}></img>
          <button className={style.video_slider_box_btn} onClick={() => handleClickProduct('Laptop')}>Shop Laptops</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
