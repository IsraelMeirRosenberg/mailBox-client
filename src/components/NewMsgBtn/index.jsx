import React from 'react'
import styles from './style.module.css'
export default function NewMsgBtn() {
    const icon = <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3.535V13C20 13.7652 19.7077 14.5015 19.1827 15.0583C18.6578 15.615 17.9399 15.9501 17.176 15.995L17 16H3C2.23479 16 1.49849 15.7077 0.941739 15.1827C0.384993 14.6578 0.0498925 13.9399 0.00500011 13.176L0 13V3.535L9.445 9.832L9.561 9.898C9.69771 9.9648 9.84785 9.99952 10 9.99952C10.1522 9.99952 10.3023 9.9648 10.439 9.898L10.555 9.832L20 3.535Z" fill="white" />
        <path d="M16.9999 0C18.0799 0 19.0269 0.57 19.5549 1.427L9.99995 7.797L0.444946 1.427C0.695676 1.01977 1.04016 0.678401 1.44965 0.431383C1.85915 0.184364 2.32178 0.0388562 2.79895 0.00699997L2.99995 0H16.9999Z" fill="white" />
    </svg>

    return (
        <button className={styles.layout} >
            {icon}
            New message
        </button>
    )
}
