import React, { useState } from 'react';
import style from "./loginCard.module.css";
import { FaArrowRight } from "react-icons/fa6";
import img from "../../assets/img/mainPage/loginImg.webp";

const LoginCard = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted email:", email);
    };

    return ( 
        <div className={style.loginCard}>
            <img src={img} alt="" className={style.loginCard_img} />
            <div className={style.loginCard_box}>
                <p className={style.loginCard_box_headTitle}>Subscribe to the latest updates</p>
                <p className={style.loginCard_box_mainTitle}>Newsletter</p>
                <form onSubmit={handleSubmit} className={style.loginCard_box_formCard}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className={style.loginCard_box_formCard_input}
                        required
                    />
                    <button type="submit" className={style.loginCard_box_formCard_button}>
                        <FaArrowRight className={style.loginCard_box_formCard_button_icon} />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginCard;
