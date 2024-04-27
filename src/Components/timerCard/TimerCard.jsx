import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import timerImg from "../../assets/img/mainPage/timerImg.webp"
import style from "./timerCard.module.css"


const TimerCard = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const navigate=useNavigate()
  const handleClickProduct = () => {
    navigate(`/shop-page/`); 
  };
  const [initialTime, setInitialTime] = useState({ 
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });

  const [time, setTime] = useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });

  useEffect(() => {
    const storedInitialTime = JSON.parse(localStorage.getItem('initialTime'));
    if (storedInitialTime) {
      setInitialTime(storedInitialTime);
      setTime(storedInitialTime); 
    }
  }, []);

  useEffect(() => {
    console.log('initialTime:', initialTime);
    localStorage.setItem('initialTime', JSON.stringify(initialTime));
  }, [initialTime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearTimeout(timer);
        return;
      }
      if (time.seconds === 0) {
        if (time.minutes === 0) {
          setTime({
            hours: time.hours - 1,
            minutes: 59,
            seconds: 59,
          });
        } else {
          setTime({
            hours: time.hours,
            minutes: time.minutes - 1,
            seconds: 59,
          });
        }
      } else {
        setTime({
          hours: time.hours,
          minutes: time.minutes,
          seconds: time.seconds - 1,
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className={style.timerCard_box}>
        <img src={timerImg} alt="" className={style.timerCard_box_img}/>
        <div className={style.timerCard_box_card}>
            <p className={style.timerCard_box_card_title}>Don't Miss the Deal !</p>
            <p className={style.timerCard_box_card_text}>Score Big Savings on All Your Favorites</p>
        <p className={style.timerCard_box_card_timer}>
            {time.hours.toString().padStart(2, '0')}:
            {time.minutes.toString().padStart(2, '0')}:
            {time.seconds.toString().padStart(2, '0')}
        </p>
        <button className={style.timerCard_box_card_btn} onClick={()=>handleClickProduct("")}><span className={style.timerCard_box_card_btn_text}>Shop Now</span><IoIosArrowForward/></button>
        </div>
    </div>
  );
};

export default TimerCard;
