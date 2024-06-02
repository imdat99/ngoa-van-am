import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <div className="flex-1">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 bg-repeat bg-contain">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
