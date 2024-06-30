import React from 'react'
import styles from './style.module.css'
import Bardge from '../Bardge'
import { CiStar } from "react-icons/ci";
export default function EmailLi({ image, name, title, time, icon, num = 0 }) {
    return (
        <div className={styles.layout}>
            <img className={styles.img} src={image} alt="" />
            <div className={styles.divContent}>
                <p>{name}</p>
                <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.right}>
                <p >{time}</p>
                {num ? <Bardge>{num}</Bardge> : <p  >{icon}</p>}
            </div>

        </div>
    )
}
