import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './style.module.css'
import { IoIosArrowBack } from "react-icons/io";
import NewMsgBtn from '../../components/NewMsgBtn'
import EmailType from '../../components/EmailType'
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoIosSend } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { RiSpamLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { userContext } from '../Layout';
export default function Types() {
    const { user, setUser } = useContext(userContext)
    const [chatsNotRead, setChatsNotRead] = useState({})

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        setChatsNotRead(JSON.parse(localStorage.getItem('chatsNotRead')))
    }, [])
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.main}>
                <div className={styles.divExternalTop}>
                    <div className={styles.mailBox}>
                        <button onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                        <h1>Mailbox</h1>
                    </div>
                </div>
                <div className={styles.ExternalListTypesEmails}>
                    <div className={styles.divExternalBtn}>
                        <Link className={styles.newMsgBtn} to={'newMessage'}>
                            <NewMsgBtn />
                        </Link>
                    </div>
                </div>
                <div className={styles.listTypesEmails}>
                    <div className={styles.divTypeEmail}>
                        <NavLink to={':inbox'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailType num={chatsNotRead.isRecieved} text={'Inbox'} icon={<HiInboxArrowDown />} />
                        </NavLink>
                        <NavLink to={':sent'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailType num={chatsNotRead.isSent} text={'Sent Emails'} icon={<IoIosSend />} />
                        </NavLink>
                        <NavLink to={':favorites'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailType num={chatsNotRead.isFavorite} text={'Favorites'} icon={<FaStar />} />
                        </NavLink>
                        <NavLink to={':drafts'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailType num={chatsNotRead.isDraft} text={'Drafts'} icon={<GoPencil />} />
                        </NavLink>
                        <NavLink to={':deleted'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailType num={chatsNotRead.isDeleted} text={'Deleted'} icon={<MdDelete />} />
                        </NavLink>
                        <NavLink to={':spam'} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}>
                            <EmailType num={chatsNotRead.isSpam} text={'Spam'} icon={<RiSpamLine />} />
                        </NavLink>

                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
