import React from 'react'
import styles from './style.module.css'
export default function EmailTitle({ date, title }) {
    return (
        <>
            <div className={styles.main}>

                <div className={styles.line}></div>
                <div className={styles.secendery}>{date}</div>
                <div className={styles.praimery}>{title}</div>
            </div>
        </>
    )
}
