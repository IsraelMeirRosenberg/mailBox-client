import React from 'react'
import styles from './style.module.css'
export default function InputSearch() {
    const icon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16L12.6221 12.6221M12.6221 12.6221C13.1999 12.0444 13.6583 11.3584 13.971 10.6035C14.2837 9.84856 14.4446 9.03944 14.4446 8.22231C14.4446 7.40519 14.2837 6.59606 13.971 5.84114C13.6583 5.08621 13.1999 4.40027 12.6221 3.82247C12.0444 3.24468 11.3584 2.78635 10.6035 2.47365C9.84856 2.16094 9.03944 2 8.22231 2C7.40519 2 6.59606 2.16094 5.84114 2.47365C5.08621 2.78635 4.40027 3.24468 3.82247 3.82247C2.65556 4.98938 2 6.57205 2 8.22231C2 9.87257 2.65556 11.4552 3.82247 12.6221C4.98938 13.7891 6.57205 14.4446 8.22231 14.4446C9.87257 14.4446 11.4552 13.7891 12.6221 12.6221Z" stroke="#B3BDCC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <div>
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder='Search...' />
                <button className={styles.btn}>{icon}</button>
            </form>
        </div>
    )
}
