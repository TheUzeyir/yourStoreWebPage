import React from 'react'
import HeaderResponsive from '../../layout/headerResponsive/HeaderResponsive'
import notFoundImg from "../../assets/img/mainPage/notProductsFound.png"
import style from "./notFound.module.css"

const NotFound = () => {
  return (
    <div className="notFoundPage">
    <HeaderResponsive/>
      <div className={style.notFound}>
        <div className={style.notFound_imgBox}>
        <img src={notFoundImg} alt="" className={style.notFound_imgBox_img}/>
        </div>
        <h2>No Poduct Found</h2>
      </div>
    </div>
  )
}

export default NotFound
