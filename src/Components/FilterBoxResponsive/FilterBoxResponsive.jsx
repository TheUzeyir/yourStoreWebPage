import React,{useState} from 'react'
import style from "./filterBoxResponsive.module.css"
import { MdOutlineFilterList } from "react-icons/md";
import { GrCheckbox } from "react-icons/gr";

const FilterBoxResponsive = () => {
  const[isOpen2,setIsOpen2]=useState(true)
  const toggleFilterBox2=()=>{
    setIsOpen2((prev)=>!prev)
  }

  return (
    <div className={style.FilterBoxResponsive_container}>
        <div className={style.FilterBoxResponsive}>
            <MdOutlineFilterList className={style.FilterBoxResponsive_icon}/><span className={style.FilterBoxResponsive_title}>Filter</span>
        </div>
        <div className={style.FilterBoxResponsive_box}>
            <div className={style.FilterBoxResponsive_box_priceCard}>
                <div className={style.FilterBoxResponsive_box_priceCard_inputBox}>
                    <span>Min</span>
                    <input type="text" />
                </div>
                <div className={style.FilterBoxResponsive_box_priceCard_inputBox}>
                    <span>Max</span>
                    <input type="text" />
                </div>
            </div>
            <div className={style.FilterBoxResponsive_box_productInfo}>
                <div className={`${style.shopPage_main_filter_storage_card} ${isOpen2 ? "" : style.shopPage_main_filter_storage_card_displayNone}`}>
                    <div className={style.shopPage_main_filter_storage_card_box}>
                        <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon} />
                        <span>16 GB</span>
                    </div>
                    <div className={style.shopPage_main_filter_storage_card_box}>
                        <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon} />
                        <span>32 GB</span>
                    </div>
                    <div className={style.shopPage_main_filter_storage_card_box}>
                        <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon} />
                        <span>64 GB</span>
                    </div>
                    <div className={style.shopPage_main_filter_storage_card_box}>
                        <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon} />
                        <span>128 GB</span>
                    </div>
                    <div className={style.shopPage_main_filter_storage_card_box}>
                        <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon} />
                        <span>256 GB</span>
                    </div>
                    <div className={style.shopPage_main_filter_storage_card_box}>
                        <GrCheckbox className={style.shopPage_main_filter_storage_card_box_icon} />
                        <span>512 GB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterBoxResponsive
