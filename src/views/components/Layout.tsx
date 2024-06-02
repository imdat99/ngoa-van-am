import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex min-h-svh flex-col bg-background">
            <div className="flex-1">
                <div className="max-w-[500px] mx-auto bg-repeat bg-contain relative">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
