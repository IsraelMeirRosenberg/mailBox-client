import React, { useState } from 'react'
import style from './style.module.css'
export default function MsgLi({ msg, user, image, name, date, time }) {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className={style.layout} >
            <div onClick={() => setIsShow(p => !p)} className={style.title}>

                {msg.from == user.email ? (
                    <div className={style.holdYou}>
                        <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 3.80869V1.24969C7.99968 1.05207 7.94087 0.858961 7.83098 0.694706C7.72109 0.530452 7.56504 0.4024 7.3825 0.326688C7.19996 0.250975 6.99909 0.23099 6.8052 0.269251C6.61132 0.307512 6.4331 0.402307 6.293 0.541689L0 6.74969L6.293 12.9567C6.38565 13.0499 6.49581 13.1238 6.61715 13.1743C6.73848 13.2247 6.86859 13.2507 7 13.2507C7.13141 13.2507 7.26152 13.2247 7.38285 13.1743C7.50419 13.1238 7.61435 13.0499 7.707 12.9567C7.79991 12.8639 7.87361 12.7537 7.92389 12.6324C7.97416 12.511 8.00003 12.381 8 12.2497V9.76069C10.75 9.82869 13.755 10.3267 16 13.7497V12.7497C16 8.11669 12.5 4.30669 8 3.80869Z"
                                fill="#A2AAB4"
                            />
                        </svg>
                        <p>you</p>
                    </div>
                ) : (
                    <div className={style.holdShe}>
                        <img
                            className={style.photo}
                            src={image}
                            alt=""
                        />
                        {name}
                    </div>
                )}
                <div className={style.contentTitle}>
                    {isShow ? '' : msg.content}
                </div>
                <div className={style.holdTime}>
                    <p>{date}</p> <p>{time}</p>
                </div>

            </div>
            <div className={`${style.content} ${isShow === true ? style.show : isShow === false ? style.noShow : ""}`}>
                {!isShow ? '' : msg.content}
            </div>
        </div>
    );
}