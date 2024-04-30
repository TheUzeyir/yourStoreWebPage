import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import data from "../../../json/dummy.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./handleSlide.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black", color: "#fff", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black", color: "#fff", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const HandleSlide = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state) => state.cardReducer);
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      }
    ]
  };

  return (
    <div className={style.sliderBox}>
      <Slider {...settings} className={style.slider}>
        {selectedItems.map((data) => (
          <div className={style.slider_productBox} key={data.id}>
            <img src={data.thumbnail} alt="" className={style.slider_productBox_img} />
            <p className={style.slider_productBox_title}>{data.title}</p>
            <p className={style.slider_productBox_price}>Price: {data.price}$</p>
            <Link to={`/product-details/${data.id}`} className={style.productLink}>
              <div className={style.buttons}>
              <button className={style.btn}><span></span><p data-start="good luck!" data-text="Show More" data-title="Add To Cart"></p></button>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HandleSlide;
