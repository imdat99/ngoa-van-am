import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '../ui/drawer'
import { paths } from 'lib/constant'
import { useTranslation } from 'react-i18next'
import React from 'react'

const footerItems = [
    {
        title:"instagram",
        svg:"/svg/icon-ig.svg",
        link:"https://www.instagram.com/traquyvietnam/"
    },
    {
        title:"facebook",
        svg:"/svg/icon-fb.svg",
        link:"https://www.facebook.com/traquyvietnam/"
    },
    {
        title: "zalo",
        svg: "/svg/icon-zl.svg",
        link: "https://zalo.me/traquyvietnam"
    }
]

const menuItems = [
    {
        title: "Regulation.Title",
        link: paths.regulation
    },
    {
        title: "Tea.VNTea",
        link: paths.tea.vietnam
    },
    {
        title: "Tea.JPTea",
        link: paths.tea.japan
    },
    {
        title: "Tea.TWTea",
        link: paths.tea.taiwan
    },
    {
        title: "Tea.CNTea",
        link: paths.tea.china
    }
]

const Menu = () => {
    const { t } = useTranslation()
    const [open, setOpen] = React.useState(false)
    const location = useLocation()
    React.useEffect(() => {
        setOpen(false)
    }, [location])
    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild >
                <Button className="my-auto bg-transparent rounded-full data-[hidden=true]:hidden transition-colors duration-200 ease-in-out hover:bg-transparent hover:text-orange-200 focus:outline-none hover:outline-none focus-visible:outline-none focus-within:outline-none">
                    <svg
                        width="30"
                        height="26"
                        viewBox="0 0 30 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.75 6.5H26.25M3.75 13H26.25M3.75 19.5H26.25"
                            stroke="#C59D5F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full rounded-none bg-[#C59D5F]">
                <DrawerHeader className="border-b-2">
                    <div className="flex justify-between">
                        <DrawerTitle className="text-2xl text-white font-bold my-3 mx-3">
                            Menu
                        </DrawerTitle>
                        <DrawerClose>
                            <Button variant="link">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.503525 0.503525C0.662733 0.343915 0.851865 0.21728 1.06009 0.130877C1.26831 0.0444739 1.49154 0 1.71698 0C1.94241 0 2.16564 0.0444739 2.37386 0.130877C2.58209 0.21728 2.77122 0.343915 2.93043 0.503525L12.0004 9.57698L21.0705 0.503525C21.2298 0.344173 21.419 0.217767 21.6272 0.131526C21.8354 0.0452851 22.0586 0.000897348 22.2839 0.000897348C22.5093 0.000897348 22.7324 0.0452851 22.9406 0.131526C23.1488 0.217767 23.338 0.344173 23.4974 0.503525C23.6567 0.662878 23.7831 0.852056 23.8694 1.06026C23.9556 1.26846 24 1.49162 24 1.71698C24 1.94233 23.9556 2.16549 23.8694 2.37369C23.7831 2.58189 23.6567 2.77107 23.4974 2.93043L14.4239 12.0004L23.4974 21.0705C23.6567 21.2298 23.7831 21.419 23.8694 21.6272C23.9556 21.8354 24 22.0586 24 22.2839C24 22.5093 23.9556 22.7324 23.8694 22.9406C23.7831 23.1488 23.6567 23.338 23.4974 23.4974C23.338 23.6567 23.1488 23.7831 22.9406 23.8694C22.7324 23.9556 22.5093 24 22.2839 24C22.0586 24 21.8354 23.9556 21.6272 23.8694C21.419 23.7831 21.2298 23.6567 21.0705 23.4974L12.0004 14.4239L2.93043 23.4974C2.77107 23.6567 2.58189 23.7831 2.37369 23.8694C2.16549 23.9556 1.94233 24 1.71698 24C1.49162 24 1.26846 23.9556 1.06026 23.8694C0.852056 23.7831 0.662878 23.6567 0.503525 23.4974C0.344173 23.338 0.217767 23.1488 0.131526 22.9406C0.0452851 22.7324 0.000897348 22.5093 0.000897348 22.2839C0.000897348 22.0586 0.0452851 21.8354 0.131526 21.6272C0.217767 21.419 0.344173 21.2298 0.503525 21.0705L9.57698 12.0004L0.503525 2.93043C0.343915 2.77122 0.21728 2.58209 0.130877 2.37386C0.0444739 2.16564 0 1.94241 0 1.71698C0 1.49154 0.0444739 1.26831 0.130877 1.06009C0.21728 0.851865 0.343915 0.662733 0.503525 0.503525Z"
                                        fill="#FAFAFA"
                                    />
                                </svg>
                            </Button>
                        </DrawerClose>
                    </div>
                </DrawerHeader>
                <div className='ms-4 mt-6'>
                    {
                        menuItems.map(({title, link}, index) => (
                            <Link to={link} key={index} className="block text-white font-semibold text-2xl p-4 border-b-2 border-[#C59D5F]">
                                {t(title)}
                            </Link>
                        ))
                    }
                </div>
                <DrawerFooter className='flex-row justify-center space-x-3 mb-16'>
                    {
                        footerItems.map(({title, svg, link}, index) => (
                            <Link to={link} key={index} className="flex justify-center items-center w-fit">
                                <img src={svg} alt={title} className="w-8 h-8"/>
                            </Link>
                        ))
                    }
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Menu
