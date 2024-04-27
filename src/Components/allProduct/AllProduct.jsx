import React from 'react';
import style from "./allProduct.module.css";
import { useNavigate } from 'react-router-dom';
import controlerImg from "../../assets/img/mainPage/controler.jpg"
import componentsImg from "../../assets/img/mainPage/components.jpg"
import headsetImg from "../../assets/img/mainPage/headset.webp"
import homeAudioImg from "../../assets/img/mainPage/homeAudio.jpg"
import laptopImg from "../../assets/img/mainPage/laptop.jpg"
import monitorImg from "../../assets/img/mainPage/monitor.jpg"
import peripheralsImg from "../../assets/img/mainPage/peripherals.webp"
import smartWatchImg from "../../assets/img/mainPage/smartWatch.webp"
import tvImg from "../../assets/img/mainPage/tv.jpg"
import wrImg from "../../assets/img/mainPage/wr.jpg"

const AllProduct = () => {
  const navigate = useNavigate();

  const handleClickCategory = (category) => {
    navigate(`/shop-page/${category}`);
  }; 
  
  const handleClickProduct = (product) => {
    navigate(`/shop-page/category/${product}`);
  };
  
  return (
    <div className={style.simpleProductCard_box}>
      <div className={style.simpleProductCard_box_header}>
        <p className={style.simpleProductCard_box_header_headText}>All Products in One Place</p>
        <p className={style.simpleProductCard_box_header_mainText}>Featured Categories</p>
      </div>
      <div className={style.simpleProductCard_box_product}>
          <div className={style.simpleProductCard_box_product_card} onClick={() => handleClickCategory('Computer parts')}>
            <img src={componentsImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>Components</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickCategory('Controlers')}>
            <img src={controlerImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>Controlers</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickProduct('Headset')}>
            <img src={headsetImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>Headset</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickCategory('Home Audio')}>
            <img src={homeAudioImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>Home Audio</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickProduct('Laptop')}>
            <img src={laptopImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>Laptop</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickProduct('Monitor')}>
            <img src={monitorImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>Monitor</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickCategory('Peripherals')}>
            <img src={peripheralsImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>Peripherals</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickCategory('SmartWatch')}>
            <img src={smartWatchImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>SmartWatch</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickCategory('TV')}>
            <img src={tvImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>TV</p>
          </div> 
          <div className={style.simpleProductCard_box_product_card}  onClick={() => handleClickCategory('VR Headset')}>
            <img src={wrImg} alt="" className={style.simpleProductCard_img}/>
            <p className={style.simpleProductCard_title}>VR Headset</p>
          </div> 
      </div>
    </div>
  );
};

export default AllProduct;
