import { Outlet } from 'react-router-dom'
import { headContex as HeaderContex } from "./Header/Context"
import Header from './Header'
import React from 'react'

const TeaLayout = () => {
    return (
        <HeaderContex.Provider value={React.useState('')}>
            <div className="h-svh flex relative !max-h-[930px] overflow-y-hidden">
                <Header/>
                <Outlet />
            </div>
        </HeaderContex.Provider>
    )
}

export default TeaLayout
