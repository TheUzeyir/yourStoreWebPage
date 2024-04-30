import React, { useState } from 'react';
import { GrCheckbox } from "react-icons/gr";
import { IoIosArrowUp } from 'react-icons/io';
import style from './filterBox.module.css';

const FilterBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  const[isOpen2,setIsOpen2]=useState(true)
  const [priceValue, setPriceValue] = useState(2000);

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value);
  };

  const toggleFilterBox = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleFilterBox2=()=>{
    setIsOpen2((prev)=>!prev)
  }

  return (
    <div className={style.shopPage_filterBox}>
      <div className={style.shopPage_main_filter_priceCard}>
        <div
          className={style.shopPage_main_filter_priceCard_header}
          onClick={toggleFilterBox}
        >
          <p className={style.shopPage_main_filter_priceCard_header_title}>
            Price
          </p>
          <IoIosArrowUp
            className={`${style.shopPage_main_filter_priceCard_header_icon} ${
              isOpen ? '' : style.shopPage_main_filter_priceCard_header_icon_displayRotate
            }`}
          />
        </div> 
        {isOpen && (
          <div className={style.shopPage_main_filter_priceCard_filterBox}>
            <div className={style.shopPage_main_filter_priceCard_filterBox_titleBox}>
              <span>$0</span>
              <span>${priceValue}</span>
            </div>
            <input id="input"type="range" min="0" max="2000" value={priceValue} onChange={handlePriceChange} className={style.shopPage_main_filter_priceCard_filterBox_input}/>
          </div>
        )}
      </div>
          <div className={style.shopPage_main_filter_storage_header}>
      <p className={style.shopPage_main_filter_storage_header_title}>Storage</p>
      <IoIosArrowUp className={`${style.shopPage_main_filter_storage_header_icon} ${isOpen2 ? "":style.shopPage_main_filter_storage_header_icon_displayRotate}`} onClick={toggleFilterBox2}/>
    </div> 
      <div className={`${style.shopPage_main_filter_storage_card} ${isOpen2 ? "":style.shopPage_main_filter_storage_card_displayNone}`}>
    <div className={style.shopPage_main_filter_storage_card_box}>
      <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon}/>
      <span>16 GB</span>
    </div>
    <div className={style.shopPage_main_filter_storage_card_box}>
      <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon}/>
      <span>32 GB</span>
    </div>
    <div className={style.shopPage_main_filter_storage_card_box}>
      <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon}/>
      <span>64 GB</span>
    </div>
    <div className={style.shopPage_main_filter_storage_card_box}>
      <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon}/>
      <span>128 GB</span>
    </div>
    <div className={style.shopPage_main_filter_storage_card_box}>
      <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon}/>
      <span>256 GB</span>
    </div>
    <div className={style.shopPage_main_filter_storage_card_box}>
      <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon}/>
      <span>512 GB</span>
    </div>
    </div> 
    </div>
  );
};

export default FilterBox;
