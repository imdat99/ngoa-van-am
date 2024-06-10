import { Outlet } from 'react-router-dom'
import { headContex as HeaderContex } from "./Header/Context"
import Header from './Header'
import React from 'react'

const TeaLayout = () => {
    return (
        <HeaderContex.Provider value={React.useState('')}>
            <div className="h-svh flex relative">
                <Header/>
                <Outlet />
            </div>
        </HeaderContex.Provider>
    )
}

export default TeaLayout
