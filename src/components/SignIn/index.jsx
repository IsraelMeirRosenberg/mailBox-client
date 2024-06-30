import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import { Link, Navigate, json, useNavigate } from 'react-router-dom'
import { userContext } from '../../Pages/Layout'
import AxiosReq from '../../functions/AxiosReq'
export default function SignIn() {
    const { user, setUser } = useContext(userContext)
    const [isError, setIsError] = useState()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const fd = new FormData(e.target)
            const data = Object.fromEntries(fd)
            const res = await AxiosReq('user/login', 'POST', data)
            localStorage.token = res.data.token
            localStorage.user = JSON.stringify(res.data.user)
            localStorage.chatsNotRead = JSON.stringify(res.data.chatsNotReadOb)
            setUser(res.data.user)
            navigate('/u', { replace: true })
        } catch (error) {
            setIsError(error.response.data.msg)
        }
    }
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form} >
                    <h1 className={styles.title}>Welcome To MailBox </h1>
                    <div className={styles.divInput}>
                        <label className={styles.lable} htmlFor="email">Email <span className={styles.asterisk}>*</span></label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className={styles.divInput}>
                        <label className={styles.lable} htmlFor="password">Password <span className={styles.asterisk}>*</span></label>
                        <input className={styles.PassInupt} type="password" name="password" id="password" required />
                        {isError ? <p>{isError}</p> : ''}
                    </div>
                    <div className={styles.divBtn}>
                        <button type='submit' className={styles.loginBtn}>Login</button>
                        <p className={styles.forgotPassword}>Forgot Password?</p>
                    </div>
                    <div className={styles.divRegister}>
                        <p>Don't have an account? </p>
                        <Link to={'/register'} className={styles.forgotPassword} > Register Here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
