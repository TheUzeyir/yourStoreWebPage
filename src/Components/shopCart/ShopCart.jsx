import React from 'react'
import { Link } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom';
import Header from '../../layout/header/Header';
import data from "../../json/dummy.json"
import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/img/mainPage/laptopFind.avif"
import style from "./shopCart.module.css"


const ShopCart = () => {
    const navigate = useNavigate();
    const handleClickProduct = (product) => {
        navigate(`/shop-page/${product}`);
    };
    const myData = [...data];
  const selectedItems = [];
  const numberOfItemsToSelect = 9; 
  while (selectedItems.length < numberOfItemsToSelect) {
    const randomIndex = Math.floor(Math.random() * myData.length);
    const selectedItem = myData[randomIndex];

    if (!selectedItems.includes(selectedItem)) {
      selectedItems.push(selectedItem);
    }
  }

  return (
    <div className={style.shopCart_Box}>
        <Header/>
        <div className="container">
            <p className={style.shopCart_headTitle}>Most Popular Product</p>
            <div className={style.shopCart}>
                <div className={style.shopCart_productBox_cards}>
                    {
                    selectedItems.map((item)=>(
                    <div className={style.shopCart_productBox} key={item.id}>
                            <img src={item.thumbnail} alt="" className={style.shopCart_productBox_imgBox_img}/>
                        <p className={style.shopCart_productBox_title}>{item.title}</p>
                        <p className={style.shopCart_productBox_price}>From Price ${item.price}</p>
                        <Link to={`/product-details/${item.id}`} className={style.productLink}>
                            <button className={style.shopCart_productBox_btn}><span className={style.shopCart_productBox_btn_text}>Quick Shop</span></button>
                        </Link>
                    </div>  
                    ))
                    }
                </div>
            <div className={style.shopCart_mainBox}>
                <img src={img} alt="" className={style.shopCart_mainBox_img}/>
                <div className={style.shopCart_mainBox_textCard}>
                    <p className={style.shopCart_mainBox_textCard_mainText}>Hot Now</p>
                    <p className={style.shopCart_mainBox_textCard_desc}>Explore our best-seeling products!</p>
                    <button className={style.shopCart_mainBox_textCard_btn} onClick={()=>handleClickProduct("Laptop")}>Shop All<IoIosArrowForward/></button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShopCart