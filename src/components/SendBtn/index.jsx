import React from 'react'
import styles from './style.module.css'
export default function SendBtn({ icon, text }) {


    return (
        <>
            <button className={styles.sendBtn}>{text}
                <div>{icon}</div>
            </button>
        </>
    )
}
