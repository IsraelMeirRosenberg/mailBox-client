import React from 'react'
import styles from './style.module.css'
export default function Bardge({ children }) {
    return (
        <span className={styles.container}>
            {children}
        </span>
    )
}
