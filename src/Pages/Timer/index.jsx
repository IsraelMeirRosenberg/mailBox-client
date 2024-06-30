import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Timer() {
    return (
        <>
            <div>
                timer
            </div>
            <Outlet />
        </>
    )
}
