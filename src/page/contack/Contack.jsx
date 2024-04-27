import React,{useState} from 'react'
import { Footer, Header } from '../main'
import style from "./contack.module.css"
import img1 from "../../assets/img/contackUS/contackUs.webp"
import { MdKeyboardArrowRight } from "react-icons/md";

const Contack = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
        message: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
  return (
    <div className={style.contackUS}>
        <Header/>
        <div className={style.contackUS_container}>
            <h2>Contact Us</h2>
            <p className={style.contackUS_title}>Do you have a question or comment about our products or services? We'd love to hear from you! Contact us
                anytime – our friendly customer service team is available to assist you.</p>
            <div className={style.messageBox}>
                <img src={img1} alt="" className={style.messageBox_img}/>
                <div className={style.messageBox_formCard}>
                    <h2 className={style.messageBox_formCard_title}>Need Help?</h2>
                    <form className={style.messageBox_formCard_form} onSubmit={handleSubmit}>
                        <div className={style.messageBox_formCard_formBox}>
                            <div className={style.messageBox_formCard_formBox_card}>
                                <p htmlFor="name" className={style.messageBox_formCard_formBox_card_title}>Name</p>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className={style.messageBox_formCard_formBox_input}
                                />
                            </div>
                            <div className={style.messageBox_formCard_formBox_card}>
                                <p htmlFor="email" className={style.messageBox_formCard_formBox_card_title}>Email</p>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className={style.messageBox_formCard_formBox_input}
                                />
                            </div>
                        </div>
                        <div className={style.messageBox_formCard_formBox_card}>
                            <p htmlFor="nubmer" className={style.messageBox_formCard_formBox_card_title}>Phone number</p>
                            <input
                                type="text"
                                id="text"
                                name="text"
                                value={formData.text}
                                onChange={handleInputChange}
                                required
                                className={style.messageBox_formCard_formBox_input}
                            />
                        </div>
                        <div className={style.messageBox_formCard_formBox_card}>
                            <p htmlFor="message" className={style.messageBox_formCard_formBox_card_title}>Message</p>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className={style.messageBox_formCard_formBox_input}
                            ></textarea>
                        </div>
                        <button className={style.messageBox_formCard_formBtn} type="submit">Send Message<MdKeyboardArrowRight/></button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contack

