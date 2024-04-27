import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeLikedProduct } from '../../redux/likedSlice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Footer from '../../layout/footer/Footer';
import Header from "../../layout/header/Header";
import { BsTrash } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import style from "./likedPage.module.css";
 
const LikedPage = () => {
  const navigate = useNavigate(); 
  const likedProducts = useSelector((state) => state.likedProducts.items);
  const dispatch = useDispatch();

  const handleRemoveLikedProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete this product?",
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
        dispatch(removeLikedProduct(id));
      }
    });
  };

  return (
    <div className={style.addToCartPage}>
      <Header />
      <div className="container">
        <p className={style.addToCartPage_goBack} onClick={() => navigate(-1)}><IoIosArrowBack />Go Back</p>
        <p className={style.addToCartPage_headText}>Your Liked Products</p>
        {likedProducts.length > 0 ? (
          likedProducts.map((item) => (
            <div key={item.id} className={style.addToCartPage_main}>
            <div className={style.addToCartPage_main_product_boxs}>
              <div className={style.addToCartPage_main_product_box}>
                <Link to={`/product-details/${item.id}`} className={style.addToCartPage_main_product_box_linkBox}>
                <img src={item.thumbnail} alt="" className={style.addToCartPage_main_product_box_img} />
                <div className={style.addToCartPage_main_product_box_infoBox}>
                  <span className={style.addToCartPage_main_product_box_infoBox_categoryText}>{item.category}</span>
                  <span className={style.addToCartPage_main_product_box_infoBox_productName}>{item.title}</span>
                </div>
                  <div className={style.addToCartPage_main_product_box_priceBox}>
                    <span className={style.addToCartPage_main_product_box_priceBox}>Price</span>
                    <span className={style.addToCartPage_main_product_box_priceBox_price}>{(item.price * item.quantity).toFixed(2)} $</span>
                  </div>
                </Link>
                <BsTrash className={style.addToCartPage_main_product_box_icon} onClick={() => dispatch(handleRemoveLikedProduct(item.id))} />
              </div>
            </div>
          </div> 
          ))
        ) : (
          <div className={style.noLikedProducts}>
            <p className={style.noLikedProducts_text}>You haven't liked any products yet.</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
 
export default LikedPage;