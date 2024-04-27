import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import style from "./findMoreCard.module.css"


const FindMoreCard = ({ btnColor, titlePosition, img,cardWidth,Text,desc,onclick })=> {
 
  return (
    <div className={`${style.findMoreCard} ${style[cardWidth]}`}>
      <div className={style.findMoreCard_box}>
        <span className={style.findMoreCard_box_shadow}></span>
        <img src={img} alt="" className={style.findMoreCard_box_img}/>
        <div className={`${style.findMoreCard_box_title} ${style[titlePosition]}`}>
        <p className={style.findMoreCard_box_title_name}>{Text}</p>
        <p className={style.findMoreCard_box_title_desc}>{desc}</p>
        <button className={`${style[btnColor]} ${style.findMoreCard_box_title_btn}`}onClick={onclick}>Find More <IoIosArrowForward /></button>
        </div>
      </div> 
    </div>
  )
}

export default FindMoreCard