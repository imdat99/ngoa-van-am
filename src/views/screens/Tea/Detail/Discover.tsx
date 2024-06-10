import { Link } from "react-router-dom"

const buttonList = [
    {
        title: 'Xuất xứ',
        icon: '/images/button.png',
        isActive: true,
    },
    {
        title: 'Đánh giá',
        icon: '/images/button.png',
        isActive: false,
    },
    {
        title: 'Khám phá',
        icon: '/images/button.png',
        isActive: false,
    }
]
const Discover = () => {
    return (
        <div
            className="h-full w-full bg-no-repeat bg-contain"
            style={{
                backgroundImage: `url('/images/discover-bg.png')`,
            }}
        >
            <div className="flex flex-col items-center justify-end h-full">
                <div className="bg-white rounded-t-[30px] w-full py-7">
                    <div className="flex items-center justify-between mb-7 mx-7">
                        <div className="block">
                            <p className="lora text-2xl">
                                Trà xanh Tà Xùa
                            </p>
                            <div className="flex">
                                <img src="/svg/position.svg" />
                                <p className="ml-1 text-gray-600">Bắc Yên, Sơn La</p>
                            </div>
                        </div>
                        <p className="lora italic text-2xl font-semibold text-[#C59D5F] ml-auto">200k/ấm</p>
                    </div>
                    <div className="flex space-x-5 overflow-y-auto [&>*:first-child]:ml-7 [&>*:last-child]:!mr-7">
                        {buttonList.map((item, index) => (
                            <div
                                key={index}
                                className="text-white bg-no-repeat cursor-pointer rounded-3xl h-[271px] aspect-[212/271] flex flex-col-reverse p-5"
                                style={{
                                    backgroundImage: `url('/images/button.png')`,
                                }}
                            >
                                {/* <img src={item.icon} className="w-full h-auto object-cover"/> */}
                                <Link to="#" className="flex justify-between">
                                    <p className="my-auto">{item.title}</p>
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="34" height="34" rx="17" fill="#C59D5F"/>
                                        <path d="M20.5 14.5L23 17M23 17L20.5 19.5M23 17H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover
