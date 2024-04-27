import React from 'react';
import style from "./simpleProductCard.module.css";
import data from "../../json/dummy.json";
import { Link } from 'react-router-dom';

const SimpleProductCard = () => {
  const selectedItems = data.filter((item)=>item.category==="Laptop");

  return (
    <div className={style.card_container}>
        <h2 className={style.cardContainer_headText}>You wanna Laptop?</h2>
      <div className={style.cards}>
        {selectedItems.map((item) => (
          <Link to={`/product-details/${item.id}`}>
            <div className={style.card} key={item.id}>
              <div className={style.content}>
                <div className={style.back}>
                  <div className={style.backContent}>
                    <img src={item.thumbnail} alt="" className={style.backContent_img}/>
                    <p className={style.backContent_text}>{item.title}</p>
                  </div>
                </div>
                <div className={style.front}>
                  <div className={style.img}>
                    <div className={style.circle}></div>
                    <div className={style.circle} id="right"></div>
                    <div className={style.circle} id="bottom"></div>
                  </div>
                  <div className={style.frontContent}>
                    <small className={style.badge}>{item.category}</small>
                    <img src={item.thumbnail} alt="" className={style.frontContent_img}/>
                    <div className={style.description}>
                      <div className={style.title}>
                        <p className={style.title}><strong>{item.title}</strong>
                        </p>
                      </div>
                      <p className={style.cardFooter}>$ {item.price} &nbsp; | &nbsp; {item.product}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SimpleProductCard;