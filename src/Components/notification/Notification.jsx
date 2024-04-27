import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import style from "./notification.module.css"

const Notification = () => {
  return (
    <figure className={style.notification}>
        <div className={style.notification_body}>
          <FcCheckmark className={style.notification_icon}/>
          Your product added
        </div>
        <div className={style.notification_progress}></div>
    </figure>
  )
}

export default Notification
