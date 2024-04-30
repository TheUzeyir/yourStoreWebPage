import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineClear } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { AiOutlinePartition } from "react-icons/ai";
import { TbDeviceImacSearch } from "react-icons/tb";
import style from "./headerMenu.module.css";

const HeaderMenu = ({ isOpen, onClose }) => {
    const navigate=useNavigate()
    const handleClickCategory = (category) => {
      navigate(`/shop-page/${category}`);
    }; 
    
    const handleClickProduct = (product) => {
      navigate(`/shop-page/category/${product}`);
    };
    
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            onClose(); 
        } 
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); 
    const menuRef = useRef();

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isHeaderSliderBarVisible, setIsHeaderSliderBarVisible] = useState(true);

    const toggleCloseProductname1 = () => {
        setIsOpen1(prev => !prev);
    }

    const toggleCloseProductname2 = () => {
        setIsOpen2(prev => !prev);
    }

    const toggleCloseProductname3 = () => {
        setIsOpen3(prev => !prev);
    }

    const toggleHeaderSliderBarVisibility = () => {
      setIsHeaderSliderBarVisible(prev => !prev);
      onClose();
  }

    return (
        <div ref={menuRef}> 
            <div className={`${style.header_slideBar} ${isOpen ? "" : style.header_slideBar_displayNone}`}>
            <div className={style.header_slideBar_title} onClick={toggleHeaderSliderBarVisibility}>Menu <MdOutlineClear className={`${style.header_slideBar_title_icon}`} /></div>
                <div className={style.header_slideBar_card}>
                    <div className={style.header_slideBar_card_product}>
                        <div className={style.header_slideBar_card_product_name}><FaComputer/><span onClick={()=>handleClickProduct('PC')}>Computer</span><IoIosArrowDown className={`${style.header_slideBar_card_product_name_icon} ${isOpen1 ? "" : style.header_slideBar_card_product_name_icon_rotate}`} onClick={toggleCloseProductname1} /></div>
                        <div className={`${style.header_slideBar_card_product_data} ${isOpen1 ? "" : style.header_slideBar_card_product_data_displayBlock}`}>
                            <p className={style.header_slideBar_card_product_data_productName}onClick={()=>handleClickProduct('PC')} >PC</p>
                            <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Laptop')}>Laptop </p>
                        </div>
                    </div>
                </div>
                        <div className={style.header_slideBar_card}>
          <div className={style.header_slideBar_card_product}>
            <div className={style.header_slideBar_card_product_name}><AiOutlinePartition/><span  onClick={()=>handleClickCategory('Computer parts')}>Computer parts</span> <IoIosArrowDown className={`${style.header_slideBar_card_product_name_icon} ${isOpen2 ? "" : style.header_slideBar_card_product_name_icon_rotate}`} onClick={toggleCloseProductname2} /></div>
            <div className={`${style.header_slideBar_card_product_data} ${isOpen2 ? "" : style.header_slideBar_card_product_data_displayBlock}`}>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Case for the system block')}>Case for the system block</p>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('SSD and HDD')}>SSD and HDD</p>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Graphics Card')}>Graphics Card </p>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Motherboard')}>Motherboard</p>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Prosessor')}>Processor</p>
            </div>
          </div>
        </div>
        <div className={style.header_slideBar_card}>
          <div className={style.header_slideBar_card_product}>
            <div className={style.header_slideBar_card_product_name}><TbDeviceImacSearch/><span onClick={()=>handleClickCategory('Accessories')}>Accessories</span> <IoIosArrowDown className={`${style.header_slideBar_card_product_name_icon} ${isOpen3 ? "" : style.header_slideBar_card_product_name_icon_rotate}`} onClick={toggleCloseProductname3} /></div>
            <div className={`${style.header_slideBar_card_product_data} ${isOpen3 ? "" : style.header_slideBar_card_product_data_displayBlock}`}>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Keyboard')}>Keyboard</p>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Mice')}>Mouse</p>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Headset')}>Headset</p>
              <p className={style.header_slideBar_card_product_data_productName} onClick={()=>handleClickProduct('Monitor')}>Monitor</p>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
}

export default HeaderMenu;