import React,{ useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import{ Header,Footer} from "./index"
import {Slider,AutoSlider,HandleSlide,FindMoreCard,TimerCard,ToggleClickPhoto,AllProduct,AutoPlayMethods,VideoCart} from "./index"
import { FaTruckFast } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosArrowUp,IoIosArrowForward } from "react-icons/io";
import{findPhotoImg,findLaptopImg,findHeadPhoneImg,findSmartWatchImg,findGaminImg,findVRImg} from "./index"
import style from "./main.module.css"
import SimpleProductCard from '../../Components/simpleProductCard/SimpleProductCard';
import LoginCard from '../../Components/loginCard/LoginCard';

const MainPage = () => {

  const navigate=useNavigate()
  const handleClickCategory = (category) => {
    navigate(`/shop-page/${category}`);
  };

  const handleClickProduct = (product) => {
    navigate(`/shop-page/category/${product}`);
  };

  const handleClickAllProduct = () => {
    navigate(`/shop-page/`); 
  };

  const AutoVideoComponent = useMemo(() => {
    return  <div className={style.autoVideo_container}>
      <div className={style.autoVideo}>
        <div className={style.autoVideo_card1}>
          <img src={findVRImg} alt="" className={style.autoVideo_card_img}/>
          <p className={style.autoVideo_card_title}>Unbound XR is Europe's leading 'one-stop shop' for XR professionals with the most up-to-date and with highly knowledgeable business integrations.</p>
        </div>
        <div className={style.autoVideo_card2}>
          <img src={findLaptopImg} alt="" className={style.autoVideo_card_img}/>
          <p className={style.autoVideo_card_title}>Shop Best Buy for laptops. Let us help you find the best laptop for you with our selection of laptop computers for work & play.</p>
        </div>
        <div className={style.autoVideo_card3}>
          <img src={findSmartWatchImg} alt="" className={style.autoVideo_card_img}/>
          <p className={style.autoVideo_card_title}>Shop Best Buy for a great selection of smartwatches from popular brands that match your lifestyle.</p>
        </div>
        <div className={style.autoVideo_card4}>
          <img src={findHeadPhoneImg} alt="" className={style.autoVideo_card_img}/>
          <p className={style.autoVideo_card_title}>Headfoneshop specializes in mid-high end earphones, headphones, DAC/AMP, digital audio players and music servers for the music enthusiast.</p>
        </div>
      </div>
        <button className={style.autoVideo_btn} onClick={()=>handleClickAllProduct('')}><span className={style.autoVideo_btn_span}>Show More</span></button>
    </div>
}, []);

const  AutpPlayProductSlider = useMemo(()=>{
  return <AutoPlayMethods/>
})
const  AutoVideoCard = useMemo(()=>{
  return <VideoCart/>
})

const topScrollBtn=()=>{
  window.scrollTo(0,0)
}

  return (<div className={style.mainPage}>
      <Header/>
      <Slider/>
        <div className="container">
          <AllProduct/>
        </div>
      <ToggleClickPhoto/>
      <SimpleProductCard/>
      <AutoSlider/>
     <div className={style.findMoreCard}>
        <div className={style.findMoreCard_firstBox}>
          <FindMoreCard onclick={()=>handleClickProduct("")} Text="Digital Cameras" desc="Capture Lifes Moments with High-Quality Digital Cameras."
           btnColor="findMoreCard_box_title_btn-purple" titlePosition="findMoreCard_box_title-bottom" img={findPhotoImg} cardWidth="findMoreCard-main"/>
        </div>
        <div className={style.findMoreCard_secondBox}>
          <FindMoreCard onclick={()=>handleClickCategory("Laptop")} Text="Laptop" desc="Unlock Limitless Possibilities with High-Performance Laptops."
           btnColor="findMoreCard_box_title_btn-white" titlePosition="findMoreCard_box_title-center" img={findLaptopImg} cardWidth="findMoreCard-k" />
          <FindMoreCard onclick={()=>handleClickProduct("Headset")} Text="Headphones" desc="Discover a New Level of Audio Immersion with our Permium Headphones."
           btnColor="findMoreCard_box_title_btn-lightblue" titlePosition="findMoreCard_box_title-center" img={findHeadPhoneImg} cardWidth="findMoreCard-k" />
        </div>
        <div className={style.findMoreCard_thirdBox}>
          <FindMoreCard onclick={()=>handleClickProduct("")} Text="Smartwatches" desc="Experience the Power of Smartwatches for Efficient Time Managment"
           btnColor="findMoreCard_box_title_btn-darkgray" titlePosition="findMoreCard_box_title-center" img={findGaminImg} cardWidth="findMoreCard-s" />
          <FindMoreCard onclick={()=>handleClickCategory("Accessories")} Text="Gaming" desc="Unleash Your Gaming Potential with Cutting-Edge Technology"
           btnColor="findMoreCard_box_title_btn-darkgray" titlePosition="findMoreCard_box_title-end" img={findSmartWatchImg} cardWidth="findMoreCard-s" />
          <FindMoreCard onclick={()=>handleClickProduct("")} Text="VR" desc="Explore the Boundless Possibilities of VR Technology"
           btnColor="findMoreCard_box_title_btn-darkgray" titlePosition="findMoreCard_box_title-bottom" img={findVRImg} cardWidth="findMoreCard-s" />
        </div>
    </div>
    {AutoVideoComponent}
    <div className="container">
      {AutpPlayProductSlider}
    </div>
    {AutoVideoCard}
     <TimerCard hours={23} minutes={10} seconds={0}/>
      <LoginCard/>
     <HandleSlide/>
     <div className="container">
      <div className={style.miniInfoCard}>
        <div className={style.miniInfoCard_box}><FaTruckFast/> Free Shipping Over $50</div>
        <div className={style.miniInfoCard_box}><LuMessageSquare/>24/7 Premium Support</div>
        <div className={style.miniInfoCard_box}><CiFaceSmile/>Hassle Free Returns</div>
      </div>
    </div>
    <div className={style.footer_nav} >
        <p className={style.footer_nav_text} onClick={topScrollBtn}>Back To Top<IoIosArrowUp/></p>
            <Footer/>  
      </div>
  </div>
  )
}

export default MainPage