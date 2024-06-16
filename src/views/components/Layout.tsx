import { Outlet } from 'react-router-dom'
import ListenDevice from './ListenDevice'

const Layout = () => (
    <div className="flex min-h-svh flex-col bg-background w-full">
        <ListenDevice/>
        <div className="flex-1 max-h-[930px]">
            <div className="max-w-[430px] mx-auto bg-repeat bg-contain relative">
                <Outlet />
            </div>
        </div>
    </div>
)

export default Layout
