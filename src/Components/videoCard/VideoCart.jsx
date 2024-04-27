import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import video from "../../assets/img//mainPage/laptopFind.avif";
import style from "./videoCart.module.css";

const VideoCart = () => {
    const navigate=useNavigate()
    const handleClickCategory = (category) => {
        navigate(`/shop-page/${category}`);
      }; 
  return (
    <div className={style.videoCart}>
      <img src={video} className={style.videoCart_video}></img>
      <div className={style.videoCart_textCart}>
        <p className={style.videoCart_textCart_headText}>Player Ready</p>
        <p className={style.videoCart_textCart_purpleText}>The Next Level</p>
        <p className={style.videoCart_textCart_infoText}>Unleash the Ultimate Gaming Experience!</p>
        <div className={style.videoCart_textCart_btnBox}>
          <button className={style.videoCart_textCart_btnBox_btn}><span className={style.videoCart_textCart_btnBox_btn_text} onClick={()=>handleClickCategory('Computer parts')}>Components</span> <IoIosArrowForward/></button>
          <button className={style.videoCart_textCart_btnBox_btn}><span className={style.videoCart_textCart_btnBox_btn_text} onClick={()=>handleClickCategory('Accessories')}>Accessories</span> <IoIosArrowForward/></button>
        </div>
        <p className={style.videoCart_textCart_productText}>Demo video by Unreal Engine™</p>
      </div>
    </div>
  );
};

export default VideoCart;
