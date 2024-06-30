import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './style.module.css'
import InputSearch from '../../components/InputSearch'
import EmailLi from '../../components/EmailLi'
export default function MessagePage() {
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.main}>

                    <div className={styles.divSearch}>
                        <InputSearch />
                    </div>

                    <div className={styles.listEmails}>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':456'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':789'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':012'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':345'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':678'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':901'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':234'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':567'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':890'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                        <NavLink to={':123'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailLi image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} title={'test'} time={'08:50'} />
                        </NavLink>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
