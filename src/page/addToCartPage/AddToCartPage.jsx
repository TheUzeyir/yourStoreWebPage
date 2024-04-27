import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../redux/cardSlice';
import Swal from 'sweetalert2'
import HeaderResponsive from '../../layout/headerResponsive/HeaderResponsive';
import Footer from '../../layout/footer/Footer';
import { BsTrash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import style from "./addToCartPage.module.css";

const AddToCartPage = () => {
  const navigate = useNavigate();   
  const addedProducts = useSelector((state) => state.card.value);
  const dispatch = useDispatch();
  const productCount = addedProducts ? addedProducts.reduce((total, item) => total + item.count, 0) : 0;

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  }; 

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };
 
  const totalPrice = addedProducts ? addedProducts.reduce((total, item) => {
    return total + (item.price * item.count);
  }, 0).toFixed(2) : 0;

  const handleDeleteProduct=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success"
        });
        dispatch(removeItem(id))
      }
    });
  }

  return (
    <div className={style.addToCartPage}>
      <HeaderResponsive productCount={productCount} />
      <div className="container">
        <p className={style.addToCartPage_goBack} onClick={() => navigate(-1)}><IoIosArrowBack />Go Back</p>
        <p className={style.addToCartPage_headText}>Your Cart</p>
        {addedProducts && addedProducts.map((item) => (
          <div key={item.id} className={style.addToCartPage_main}>
            <div className={style.addToCartPage_main_product_boxs}>
              <div className={style.addToCartPage_main_product_box}>
                <img src={item.thumbnail} alt="" className={style.addToCartPage_main_product_box_img} />
                <div className={style.addToCartPage_main_product_box_infoBox}>
                  <span className={style.addToCartPage_main_product_box_infoBox_categoryText}>{item.category}</span>
                  <span className={style.addToCartPage_main_product_box_infoBox_productName}>{item.title}</span>
                </div>
                <div className={style.priceBox}>
                  <div className={style.addToCartPage_main_product_box_counterBox}>
                    <span className={style.addToCartPage_main_product_box_counterBox_incr} onClick={() => handleDecrease(item.id)}>-</span>
                    <span className={style.addToCartPage_main_product_box_counterBox_count}>{item.count}</span>
                    <span className={style.addToCartPage_main_product_box_counterBox_decr} onClick={() => handleIncrease(item.id)}>+</span>
                  </div>
                  <div className={style.addToCartPage_main_product_box_priceBox}>
                    <span className={style.addToCartPage_main_product_box_priceBox}>Price</span>
                    <span className={style.addToCartPage_main_product_box_priceBox_price}>{(item.price * item.count).toFixed(2)} $</span>
                  </div>
                </div>
                <BsTrash className={style.addToCartPage_main_product_box_icon} onClick={() =>dispatch(handleDeleteProduct(item.id))} />
              </div>
            </div>
          </div> 
        ))}
        <div className={style.addToCartPage_main_countCard}>
          <div className={style.addToCartPage_main_countCard_box}>
            <span>Products in the basket:</span>
            <span className={style.addToCartPage_main_countCard_box_totalProduct}>{productCount} products</span>
          </div>
          <div className={style.addToCartPage_main_countCard_box}>
            <span>Total:</span>
            <span className={style.addToCartPage_main_countCard_box_totalPrice}>{totalPrice} $</span>
          </div>
          <button className={style.addToCartPage_main_countCard_btn}>Complete the order</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AddToCartPage;
