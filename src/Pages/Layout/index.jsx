import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../components/SignIn'
import Register from '../../components/Register'
import MainBar from '../MainBar'
import Types from '../Types'
import MessagePage from '../MessagePage'
import EmailId from '../EmailId'
import NewMsg from '../NewMsg'
import Popup from '../../components/Popup'
export const popupContext = createContext()
export const userContext = createContext()
export default function Layout() {
    const [component, setComponent] = useState(null)
    const [user, setUser] = useState()
    return (
        <userContext.Provider value={{ user, setUser }}>
            <popupContext.Provider value={[component, setComponent]} >
                <div>
                    <Routes>
                        <Route path='/' element={<SignIn />} />
                        <Route path='register' element={<Register />} />
                        <Route path='u' element={<MainBar />}>
                            <Route path='chats' element={<Types />} >
                                <Route path='newMessage' element={<NewMsg />} />
                                <Route path=':type' element={<MessagePage />}>
                                    <Route path=':chatId' element={<EmailId />} />
                                </Route>
                            </Route>
                        </Route>
                    </Routes>
                    {component !== null && <Popup component={component} setComponent={setComponent} >{component}</Popup>}
                </div>
            </popupContext.Provider>
        </userContext.Provider>
    )
}

