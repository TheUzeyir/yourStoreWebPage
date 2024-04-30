import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowBack, IoIosArrowUp } from 'react-icons/io';
import data from '../../json/dummy.json';
import HeaderResponsive from '../../layout/headerResponsive/HeaderResponsive';
import FilterBox from '../../Components/filterBox/FilterBox';
import Notification from "../../Components/notification/Notification"
import Footer from '../../layout/footer/Footer';
import { IoCheckmark } from 'react-icons/io5';
import { addItem } from '../../redux/cardSlice';
import { addLikedProduct } from '../../redux/likedSlice';
import { updateFilteredProducts } from '../../redux/filterSliderSlice';
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import notHaveProducts from "../../assets/img/mainPage/notProductsFound.png";
import style from './shopPaage.module.scss';  
import FilterBoxResponsive from '../../Components/FilterBoxResponsive/FilterBoxResponsive';

const ShopPage = () => { 
  const { category, product } = useParams();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedDropdown, setSelectedDropdown] = useState("Featured");  
  const filteredProducts = useSelector((state) => state.filterSlider.filteredProducts);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    let categoryProducts = data;

    if (category) {
      categoryProducts = categoryProducts.filter((productItem) => productItem.category === category);
    }

    if (product) {
      categoryProducts = categoryProducts.filter((productItem) => productItem.product === product);
    }

    categoryProducts = categoryProducts.filter((productItem) => productItem.price <= maxPrice);

    dispatch(updateFilteredProducts({ category: category, products: categoryProducts }));
  }, [category, product, maxPrice, dispatch]);

  const toggleClose3 = () => {
    setIsOpen3((prev) => !prev);
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    setMaxPrice(newMaxPrice);
  };

  const handleAddToCart = (productItem) => {
    dispatch(addItem(productItem));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 1400); 
  };
  const productPriceLowToHigh = () => {
    const sortedProducts = filteredProducts.slice().sort((a, b) => a.price - b.price); 
    dispatch(updateFilteredProducts({ category: category, products: sortedProducts }));
  }
  
  const productPriceHighToLow = () => {
    const sortedProducts = filteredProducts.slice().sort((a, b) => b.price - a.price); 
    dispatch(updateFilteredProducts({ category: category, products: sortedProducts }));
  }

  const handleSelectedDropdown = (value) => {
    setSelectedDropdown(value);
    if (value === 'Featured') {
      let categoryProducts = data;
      categoryProducts=categoryProducts.filter((productItem)=>productItem.category===category)
    } else if (value === 'Price high to low') {
      productPriceHighToLow();
    } else if (value === 'Price low to high') {
      productPriceLowToHigh();
    }
  }
  const toggleLiked = (productItem) => {
    const isLiked = likedProducts.some((likedProduct) => likedProduct.id === productItem.id);
    let updatedLikedProducts;
    if (isLiked) {
      dispatch(addLikedProduct(productItem));
      updatedLikedProducts = likedProducts.filter((likedProduct) => likedProduct.id !== productItem.id);
    } else {
      dispatch(addLikedProduct(productItem));
      updatedLikedProducts = [...likedProducts, productItem];
    }
    setLikedProducts(updatedLikedProducts);
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
  };
  useEffect(() => {
    const likedProductsFromStorage = localStorage.getItem('likedProducts');
    if (likedProductsFromStorage) {
      setLikedProducts(JSON.parse(likedProductsFromStorage));
    }
  }, []); 
   
   return (
    <div className={style.shopPage}>
      <HeaderResponsive/>
      {showNotification && <Notification />}
      <div className={style.shopPage_header}>
        <div className={style.shopPage_header_left}>
          {filteredProducts.length} Products
        </div>
        <div className={style.shopPage_header_right}>
          <div className={style.shopPage_header_right_title}>
            Sort by: {selectedDropdown}
            <IoIosArrowUp
              className={`${style.shopPage_header_right_title_icon} ${isOpen3 ? '' : style.shopPage_header_right_title_icon_displayRotate}`}
              onClick={toggleClose3}
            />
          </div>
        </div>
      </div>
      <div className={`${style.shopPage_header_right_card} ${isOpen3 ? '' : style.shopPage_header_right_card_displayNone}`}>
          <span className={style.shopPage_header_right_card_box_title}></span>
          <IoCheckmark className={style.shopPage_header_right_card_box_icon} />
        <div className={style.shopPage_header_right_card_box}>
          <p className={style.shopPage_header_right_card_box_title} onClick={() => handleSelectedDropdown('Featured')}>Featured</p>
          <p className={style.shopPage_header_right_card_box_title} onClick={() => handleSelectedDropdown('Price high to low')}>Price high to low</p>
          <p className={style.shopPage_header_right_card_box_title} onClick={() => handleSelectedDropdown('Price low to high')}>Price low to high</p>
        </div>
      </div>
      <div className="container">
        <div className={style.shopPage_main_header}>
          <p className={style.shopPage_goBack} onClick={() => navigate(-1)}><IoIosArrowBack />Go Back</p>
          <div className={style.filertBox_responsive}><FilterBoxResponsive/></div>
        </div>
        <div className={style.shopPage_main}>
          <div className={style.shopPage_main_filter}>
            <FilterBox handleMaxPriceChange={handleMaxPriceChange} />
          </div>
          <div className={style.shopPage_main_products}> 
            {filteredProducts.length > 0 ? (
              filteredProducts.map((productItem) => (
                <div className={style.productCard} key={productItem.id}>
                    <div className={style.productCard_imgBox}>
                    {likedProducts.some((likedProduct) => likedProduct.id === productItem.id) ? (
                  <BsFillHeartFill
                    className={style.shopPage_main_products_img_likeBTN}
                    onClick={() => toggleLiked(productItem)}
                  />
                ) : (
                  <FaRegHeart
                    className={style.shopPage_main_products_img_likeBTN}
                    onClick={() => toggleLiked(productItem)}
                  />
                )}
                  <img src={productItem.thumbnail} alt="" className={style.shopPage_main_products_img} />
                    </div>
                  <Link to={`/product-details/${productItem.id}`} className={style.productLink}>
                    <p className={style.shopPage_main_products_title}>{productItem.title}</p>
                    <p className={style.shopPage_main_products_price}>From {productItem.price}$</p>
                  </Link>
                  <button className={style.shopPage_main_products_btn} onClick={() => handleAddToCart(productItem)}>
                    Add To Cart
                    <span className={style.shopPage_main_products_btn_span}></span>
                    <span className={style.shopPage_main_products_btn_span}></span>
                    <span className={style.shopPage_main_products_btn_span}></span>
                    <span className={style.shopPage_main_products_btn_span}></span>
                    <span className={style.shopPage_main_products_btn_span}></span>
                    <span className={style.shopPage_main_products_btn_span}></span>
                  </button>
                </div>
              ))
            ) : (
              <div className={style.notProductFoundCard}>
                <div className={style.notProductFoundCard_imgBox}>
                  <img src={notHaveProducts} alt="" className={style.notProductFoundCard_imgBox_img}/>
                </div>
                <p className={style.notProductFoundCard_text}>No Products Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ShopPage;