import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import data from "../../json/dummy.json";
import imgToggle from "../../assets/img/mainPage/comp.toggle.webp";
import style from "./toggleClickImg.module.css";

const ToggleClickPhoto = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleImgClick = (id) => {
        setSelectedItem(prevItem => (prevItem === id ? null : id));
        console.log(id);
    }
     
    return (
        <div className={style.imgBox}>
            <p className={style.imgBox_headText}>Ultimate Performance</p>
            <h2 className={style.imgBox_title}> The <span className={style.imgBox_title_span}> Best </span>Setup
            </h2>
            <img src={imgToggle} alt="" className={style.imgBox_img}/> 
            <CiCirclePlus className={style.imgBox_icon_monitor} onClick={() => handleImgClick(19)} />
            <CiCirclePlus className={style.imgBox_icon_mice} onClick={() => handleImgClick(39)}/>
            <CiCirclePlus className={style.imgBox_icon_keyboard} onClick={() => handleImgClick(34)}/>
            <CiCirclePlus className={style.imgBox_icon_headset} onClick={() => handleImgClick(44)}/>
            <CiCirclePlus className={style.imgBox_icon_laptop} onClick={() => handleImgClick(2)} />
            {selectedItem === 19 && ( 
                <div className={style.monitorBox}>
                    <Link to={`/product-details/${data.find(item => item.id === 19)?.id}`} className={style.productLink}>
                        <img src={data.find(item => item.id === 19)?.thumbnail} alt="" className={style.handleClick_img}/>
                        <div className={style.handleClick_text}>
                            <span className={style.handleClick_text_name}>{data.find(item => item.id === 19)?.title}</span>
                            <span className={style.handleClick_text_price}>{data.find(item => item.id === 19)?.price} $</span>
                        </div>
                    </Link>
                </div>
            )}  
            {selectedItem === 39 && (
                <div className={style.miceBox}>
                    <Link to={`/product-details/${data.find(item => item.id === 39)?.id}`} className={style.productLink}>
                        <img src={data.find(item => item.id === 39).thumbnail} alt="" className={style.handleClick_img}/>
                        <div className={style.handleClick_text}>
                            <span className={style.handleClick_text_name}>{data.find(item => item.id === 39).title}</span>
                            <span className={style.handleClick_text_price}>{data.find(item => item.id === 39).price} $</span>
                        </div>
                    </Link>
                </div>
            )}
            {selectedItem === 34 && (
                <div className={style.keyboardBox}>
                    <Link to={`/product-details/${data.find(item => item.id === 34)?.id}`} className={style.productLink}>
                        <img src={data.find(item => item.id === 34).thumbnail} alt="" className={style.handleClick_img}/>
                        <div className={style.handleClick_text}>
                            <span className={style.handleClick_text_name}>{data.find(item => item.id === 34).title}</span>
                            <span className={style.handleClick_text_price}>{data.find(item => item.id === 34).price} $</span>
                        </div>
                    </Link>
                </div>
            )}
            {selectedItem === 44 && ( 
                <div className={style.headsetBox}>
                    <Link to={`/product-details/${data.find(item => item.id === 44)?.id}`} className={style.productLink}>
                        <img src={data.find(item => item.id === 44).thumbnail} alt="" className={style.handleClick_img}/>
                        <div className={style.handleClick_text}>
                            <span className={style.handleClick_text_name}>{data.find(item => item.id === 44).title}</span>
                            <span className={style.handleClick_text_price}>{data.find(item => item.id === 44).price} $</span>
                        </div>
                    </Link>
                </div>
            )}
            {selectedItem === 2 && (
                <div className={style.laptopBox}>
                    <Link to={`/product-details/${data.find(item => item.id === 2)?.id}`} className={style.productLink}>
                        <img src={data.find(item => item.id === 2).thumbnail} alt="" className={style.handleClick_img}/>
                        <div className={style.handleClick_text}>
                            <span className={style.handleClick_text_name}>{data.find(item => item.id === 2).title}</span>
                            <span className={style.handleClick_text_price}>{data.find(item => item.id === 2).price} $</span>
                        </div>
                    </Link>
                </div>
            )}
        </div> 
    );
}

export default ToggleClickPhoto;
