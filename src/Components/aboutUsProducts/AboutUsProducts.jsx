import React,{useState} from 'react'
import { Footer, Header } from '../../page/main'
import {productCardData} from "./productCard"
import style from "./aboutUsProducts.module.css"
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";

const AboutUsProducts = () => {
    const navigate=useNavigate()
    const [color, setColor] = useState(false);
    const [counter, setCounter] = useState(1); 
    const handleClickCategory = (category) => {
        navigate(`/shop-page/${category}`);
      }; 

    const sliceCards = (counter) => {
        const start = (counter - 1) * 8;
        const end = counter * 8;
        return productCardData.slice(start, end);
      };

      const handleNext = () => {
        if (counter < Math.ceil(productCardData.length / 8)) {
          setCounter((prevCounter) => prevCounter + 1);
          setColor(true);
        }
      };

      const handlePrevious = () => {
        if (counter > 1) {
          setCounter((prevCounter) => prevCounter - 1);
          setColor(false)
        }
      };

  return (
    <div>
      <Header/>
      <div className="container">
        <p className={style.AboutUsProducts_title} onClick={()=>navigate(-1)}><MdKeyboardArrowLeft/>Go Back</p>
        <div className={style.productCard_container}>
            <div className={style.productCard}>
                {
                    sliceCards(counter).map((item)=>(
                        <div className={style.productCard_box} key={item.id} onClick={()=>handleClickCategory(`${item.product}`)}>
                            <img src={item.img} alt="" className={style.productCard_box_img}/>
                            <p className={style.productCard_box_title}>{item.product}</p>
                        </div>
                    ))
                }
            </div>
            <div className={style.productCard_counter}>
                <div className={style.productCard_counter_count} 
                style={{ backgroundColor: color ? 'white' : 'purple', color: color ? 'purple' : 'white' }}
                onClick={handlePrevious}>1</div>
                <div className={style.productCard_counter_count} 
                style={{ backgroundColor: color ? 'purple' : 'white',color:color? 'white':'purple' }}
                onClick={handleNext}>2</div>
            </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AboutUsProducts
