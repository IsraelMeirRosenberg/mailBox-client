import React, { useState } from 'react'
import styles from './style.module.css'
export default function Popup({ children, component, setComponent }) {
    return (
        <>

            <div
                onClick={() => setComponent(false)}
                className={`${styles.Popup} ${component !== false ? styles.show : styles.noShow}`}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    )
}
