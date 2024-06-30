import React from 'react'
import styles from './style.module.css'
import Bardge from '../Bardge'
export default function EmailType({ num, icon, text }) {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <div>
                    {icon}
                </div>
                <p className={styles.text}>
                    {text}
                </p>
            </div>
            <div className={styles.divBardge}>
                {num && <Bardge>{num > 99 ? '99+' : num}</Bardge>}
            </div>
        </div>
    )
}
