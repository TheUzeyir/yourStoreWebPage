import React from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../../../json/dummy.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./autoPlayProductSlide.module.css";

function AutoPlayMethods({ filterProduct,id }) {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const location = useLocation();
  const isDetailPage = location.pathname.includes(`/product-details/${id}`);
  const myData = [...data];
  const selectedItems = [];
  const numberOfItemsToSelect = 10;
  while (selectedItems.length < numberOfItemsToSelect) {
    const randomIndex = Math.floor(Math.random() * myData.length);
    const selectedItem = myData[randomIndex];

    if (!selectedItems.includes(selectedItem)) {
      selectedItems.push(selectedItem);
    }
  }

  if (!isDetailPage) {
    return (
      <div className="slider-container">
        {selectedItems && (
          <Slider {...settings}>
            {selectedItems.map((data) => (
              <div className={style.slider_productBox} key={data.id}>
                <img src={data.thumbnail} alt="" className={style.slider_productBox_img} />
                <p className={style.slider_productBox_title}>{data.title}</p>
                <p className={style.slider_productBox_price}>Price: {data.price}$</p>
                <Link to={`/product-details/${data.id}`} className={style.productLink}>
                  <div className={style.buttons}>
                    <button className={style.btn}>
                      <span></span>
                      <p data-start="good luck!" data-text="Show More" data-title="Add To Cart"></p>
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </div>
    );
  } else {
    return (
      <div className="slider-container">
        {filterProduct && (
          <Slider {...settings}>
            {filterProduct.map((data) => (
              <div className={style.slider_productBox} key={data.id}>
                <img src={data.thumbnail} alt="" className={style.slider_productBox_img} />
                <p className={style.slider_productBox_title}>{data.title}</p>
                <p className={style.slider_productBox_price}>Price: {data.price}$</p>
                <Link to={`/product-details/${data.id}`} className={style.productLink}>
                  <div className={style.buttons}>
                    <button className={style.btn}>
                      <span></span>
                      <p data-start="good luck!" data-text="Show More" data-title="Add To Cart"></p>
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </div>
    );
  }
  
}

export default AutoPlayMethods;
