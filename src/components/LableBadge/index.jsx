import React from 'react'
import styles from './style.module.css'
export default function LableBadge({ text, color, width, x }) {

    return (
        <div className={styles.main} style={{ backgroundColor: color, width: width }}>
            <div className={styles.text}>{text}</div>
            <div className={styles.x}>{x && 'x'}</div>
            <div className={styles.in} style={{ backgroundColor: color }}></div>
        </div>
    )
}
