import React from 'react'
import styles from './style.module.css'
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
import { MdDelete } from "react-icons/md";
export default function NewMsg() {
    return (
        <div className={styles.layout}>
            <div className={styles.title}>
                <p>Send new message</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.content}>
                    <div className={styles.inputs}>
                        <div className={styles.oneInput}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name='subject' id='subject' placeholder='subject...' />
                        </div>
                        <div className={styles.oneInput}>
                            <label htmlFor="to">To</label>
                            <div style={{ width: '100%' }}>
                                <input type="text" id='to' name='to' />
                                <button className={styles.addBtn}>Add</button>
                            </div>
                        </div>
                    </div>
                    <p className={styles.p}>Message</p>
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
    )
}
