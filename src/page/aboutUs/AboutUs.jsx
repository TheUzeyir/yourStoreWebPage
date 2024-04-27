import React,{useRef,useState} from "react";
import mainTeamIMg from "../../assets/img/aboutUS/teamIMg.webp"
import teamIMg2 from "../../assets/img/aboutUS/teamIMg2.webp"
import compMg from "../../assets/img/aboutUS/compIMg.webp"
import style from "./aboutUs.module.css"
import { Footer, Header } from '../main'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate=useNavigate()
  return (
    <div className={style.abouts}>
        <Header/>
        <div className={style.contackUS_mainImgBox}>
            <img src={mainTeamIMg} alt=""className={style.contackUS_mainImg}/>
            <h2 className={style.contackUS_mainImg_text}>About Us</h2>
        </div>
        <div className="container">            
            <div className={style.abouts_mainBox}>
            <i className={style.abouts_mainText}>Good customer service is the lifeblood of any business. To ensure a successful and profitable business,
                always strive to exceed customer expectations with excellent service and support.</i>
            <div className={style.abouts_mainBox_up}>
                <img src={compMg} alt="" className={style.abouts_mainBox_img}/>
                <div className={style.abouts_mainBox_up_textBox}>
                    <h2 className={style.abouts_mainBox_title}>Best Quality</h2>
                    <p className={style.abouts_mainBox_desc}>We are constantly seeking to improve our methods of production and services through research and development
                        while maintaining the highest standards of quality. Our goal is to provide our customers with the best service 
                        possible and to ensure that each job is completed accurately and efficiently.</p>
                    <p className={style.abouts_mainBox_btn} onClick={()=>navigate('/AboutkUsProducts')}><span className={style.abouts_mainBox_btnText}>Find More</span> <MdKeyboardArrowRight/></p>
                </div>
            </div>
            <div className={style.abouts_mainBox_bottom}>
                <div className={style.abouts_mainBox_bottom_textBox}>
                    <h2 className={style.abouts_mainBox_bottom_title}>Customer Care</h2>
                    <p className={style.abouts_mainBox_bottom_desc}>Our experienced staff have an eye for detail and consistently strive for excellence in everything they do.
                        We understand that the success of our business depends entirely upon the satisfaction of our customers.</p>
                    <p className={style.abouts_mainBox_btn} onClick={()=>navigate('/COntackUs')}><span className={style.abouts_mainBox_btnText}>Contack US </span><MdKeyboardArrowRight/></p>
                </div>
                <img src={teamIMg2} alt="" className={style.abouts_mainBox_img}/>
            </div>
            </div>
        </div>
        <div className={style.mapBox}>
          <div className={style.mapBox_card}>
            <p className={style.mapBox_card_headText}>Visit us</p>
            <p className={style.mapBox_card_mainText}>Monday - Friday: 10AM - 9PM</p>
            <p className={style.mapBox_card_mainText}>Saturday: 11AM - 9PM</p>
            <p className={style.mapBox_card_mainText}>Sunday: Closed</p>
            <button className={style.mapBox_card_btn}>Get Directions</button>
          </div>
          <iframe className={style.map} width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" 
            marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=toronto+(My%20Business%20Adress)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs
