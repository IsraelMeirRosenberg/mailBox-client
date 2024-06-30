import React, { useContext } from 'react'
import styles from './style.module.css'
import { FaStar } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiSpamLine } from "react-icons/ri";
import EmailTitle from '../../components/EmailTitle'
import MsgLi from '../../components/MsgLi'
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa";
import { CiTextAlignLeft } from "react-icons/ci";
import { BsTextRight } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import SendBtn from '../../components/SendBtn'
import { BsSend } from "react-icons/bs";
import Popup from '../../components/Popup'
import { popupContext } from '../Layout';
export default function EmailId() {
    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laudantium maiores aliquid illum magnam, earum temporibus delectus at neque explicabo fuga quos aliquam similique. Itaque, rem commodi? Ea quia at provident reiciendis accusantium, architecto dolore ab adipisci facere, placeat alias?'

    const [component, setComponent] = useContext(popupContext)
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.main}>
                    <div className={styles.top}>
                        <div className={styles.nameTag}>permission offers</div>
                        <div className={styles.listBtns}>
                            <button title='Favorites' className={styles.optionBtn}><FaStar /></button>
                            <button title='Print' className={styles.optionBtn}><FaPrint /></button>
                            <button onClick={() => setComponent(<>jhjh</>)} title='Delete' className={styles.optionBtn}><MdDelete /></button>
                            <button title='report spam' className={styles.optionBtn}><RiSpamLine /></button>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.title}>
                            <EmailTitle date={'04/04/2024 16:00'} title={'meeting with new teacher'} />
                        </div>

                        <div className={styles.listEmails}>
                            <div className={styles.msg}>
                                <MsgLi msg={{ from: '1234', content: content }} image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} date={'04/04/2024'} time={'16:20'} user={{ email: '1234' }} />
                            </div>
                            <div className={styles.msg}>
                                <MsgLi msg={{ from: '123', content: content }} image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} date={'04/04/2024'} time={'16:20'} user={{ email: '1234' }} />
                            </div>
                            <div className={styles.msg}>
                                <MsgLi msg={{ from: '1234', content: content }} image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} date={'04/04/2024'} time={'16:20'} user={{ email: '1234' }} />
                            </div>
                            <div className={styles.msg}>
                                <MsgLi msg={{ from: '1234', content: content }} image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} date={'04/04/2024'} time={'16:20'} user={{ email: '1234' }} />
                            </div>
                            <div className={styles.msg}>
                                <MsgLi msg={{ from: '1234', content: content }} image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} date={'04/04/2024'} time={'16:20'} user={{ email: '1234' }} />
                            </div>
                            <div className={styles.msg}>
                                <MsgLi msg={{ from: '1234', content: content }} image={'https://www.pc.co.il/wp-content/uploads/2016/03/karmi600-600x416.jpg'} name={'israel'} date={'04/04/2024'} time={'16:20'} user={{ email: '1234' }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <form >
                            <div className={styles.input}>
                                <textarea name="message" id="message" required cols="30" rows="7"></textarea>
                            </div>
                            <div className={styles.listTextBtns}>
                                <div className={styles.fontText}>

                                    <div className={styles.btnsText}>
                                        <button><FaBold /></button>
                                    </div>
                                    <div className={styles.btnsText}>
                                        <button><FaItalic /></button>
                                    </div>
                                    <div className={styles.btnsText}>
                                        <button><FaUnderline /></button>
                                    </div>
                                </div>
                                <div className={styles.listBtnsSideText}>
                                    <div className={styles.btnSideText}>
                                        <button> <CiTextAlignLeft /></button>
                                    </div>
                                    <div className={styles.btnSideText}>
                                        <button> <BsTextRight /></button>
                                    </div>
                                    <div className={styles.btnSideText}>
                                        <button> <BsTextCenter /></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className={styles.divSendBtn}>
                            <div className={styles.left}>
                                <AiOutlineFile />
                                <BsFillImageFill />
                            </div>
                            <div className={styles.right}>
                                <MdDelete />
                                <div className={styles.sendBtn}>
                                    <SendBtn icon={<BsSend />} text={'send'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
