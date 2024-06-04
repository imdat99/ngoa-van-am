import { Outlet } from 'react-router-dom'
import { headContex as HeaderContex } from "./Header/Context"
import Header from './Header'
import React from 'react'

const TeaLayout = () => {
    return (
        <HeaderContex.Provider value={React.useState('')}>
            <Header/>
            <div className="h-[calc(100svh-3.5rem)] flex relative">
                <Outlet />
            </div>
        </HeaderContex.Provider>
    )
}

export default TeaLayout
