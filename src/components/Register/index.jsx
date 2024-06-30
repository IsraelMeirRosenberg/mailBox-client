import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { userContext } from '../../Pages/Layout'
import AxiosReq from '../../functions/AxiosReq'
export default function Register() {
    const [user, setUser] = useContext(userContext)
    const [firstPass, setFirstPass] = useState()
    const [secendPass, setSecendPass] = useState()
    const [dataUser, setDataUser] = useState({ firstName: '', lastName: '', password: '', email: '' })
    const [isError, setIsError] = useState()
    const navigate = useNavigate()
    const handleChangePass = (e) => {
        setFirstPass(e.target.value)

    }
    const handleChangePass2 = (e) => {
        setSecendPass(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const fd = new FormData(e.target)
            const data = Object.fromEntries(fd)
            const res = await AxiosReq('user', 'POST', data)
            if (res.status == 200) {
                try {
                    const dataLogin = { "email": data.email, "password": data.password }
                    const resLogin = await AxiosReq('user/login', 'POST', dataLogin)
                    if (resLogin.status == 200) {
                        localStorage.token = resLogin.data.token
                        setUser(resLogin.data.user)
                        navigate('/u', { replace: true })
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            if (error.response.status == 401) setIsError(error.response.data)
        }
    }

    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form} >
                    <h1 className={styles.title}>your first MailBox is here </h1>
                    <div className={styles.divInput}>
                        <label className={styles.lable} htmlFor="firstName">First Name <span className={styles.asterisk}>*</span></label>
                        <input type="text" name="firstName" id="firstName" required />
                    </div>
                    <div className={styles.divInput}>
                        <label className={styles.lable} htmlFor="LastName">Last Name <span className={styles.asterisk}>*</span></label>
                        <input className={styles.PassInupt} type="text" name="lastName" id="LastName" required />
                    </div>
                    <div className={styles.divInput}>

                        <label className={styles.lable} htmlFor="password">Password <span className={styles.asterisk}>*</span></label>
                        <input onChange={(e) => handleChangePass(e)} className={styles.PassInupt} type="password" name="password" id="password" required />
                        {firstPass == secendPass ? '' : 'The passwords do not match'}
                    </div>
                    <div className={styles.divInput}>
                        <label className={styles.lable} htmlFor="confirmPassword">Confirm Password <span className={styles.asterisk}>*</span></label>
                        <input onChange={(e) => handleChangePass2(e)} className={styles.PassInupt} type="password" name="confirmPassword" id="confirmPassword" required />
                    </div>
                    <div className={styles.divInput}>
                        <label className={styles.lable} htmlFor="email">Our Email Address <span className={styles.asterisk}>*</span></label>
                        <input className={styles.PassInupt} type="email" name="email" id="email" required />
                        {isError ? <p>{isError}</p> : ''}
                    </div>
                    <div className={styles.divBtn}>
                        <button type='submit' className={styles.loginBtn}>Register</button>
                    </div>
                    <div className={styles.divRegister}>
                        <p>Already have an account? </p>
                        <Link to={'/'} className={styles.forgotPassword}  > Login Here</Link>
                    </div>
                    <div className={styles.divRegister}>
                        <p> By registering, you agree to our </p>
                        <p className={styles.forgotPassword}>Terms of Use.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
