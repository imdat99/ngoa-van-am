import { paths } from 'lib/constant'
import { teaDetailState } from 'lib/store'
import { isImage } from 'lib/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const buttonList = [
    {
        title: 'Origin',
        key: 'origin_button_bg',
        to: paths.tea.detail.Origin,
        isActive: true,
    },
    {
        title: 'Materials',
        key: 'materials_button_bg',
        to: paths.tea.detail.Materials,
        isActive: false,
    },
    {
        title: 'Method',
        key: 'method_button_bg',
        to: paths.tea.detail.Method,
        isActive: false,
    },
]
const Discover = () => {
    const teaData = useRecoilValue(teaDetailState)
    const { t } = useTranslation()
    return teaData.loading? <div>Loading...</div> : (
        <div className="h-full w-full bg-no-repeat bg-contain relative">
            <div className="absolute">
                {isImage(teaData.fields.menu) ? (
                    <img
                        src={teaData.fields.menu}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <video autoPlay muted loop playsInline id="myVideo" className="mt-14">
                        <source src={teaData.fields.menu} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                )}
            </div>
            <div className="flex flex-col items-center justify-end h-full relative">
                <div className="bg-white rounded-t-[30px] w-full py-7">
                    <div className="flex items-center justify-between mb-7 mx-7">
                        <div className="block">
                            <p className="lora text-2xl">
                                {teaData.fields.origin_head_title}{" "}
                                {teaData.fields.ten_tra}
                            </p>
                            <div className="flex">
                                <img src="/svg/position.svg" />
                                <p className="ml-1 text-gray-600">
                                    {teaData.fields.location}
                                </p>
                            </div>
                        </div>
                        <p className="lora italic text-2xl font-semibold text-[#C59D5F] ml-auto">
                            {teaData.fields.tea_price}
                        </p>
                    </div>
                    <div className="flex space-x-5 overflow-y-auto [&>*:first-child]:ml-7 [&>*:last-child]:!mr-7">
                        {buttonList.map((item, index) => (
                            <div
                                key={index}
                                className="text-white bg-no-repeat cursor-pointer rounded-3xl h-[271px] aspect-[212/271] flex flex-col-reverse p-5 bg-cover bg-current"
                                style={{
                                    backgroundImage: `url(${
                                        (teaData.fields as any)[item.key]
                                    })`,
                                }}
                            >
                                <Link
                                    to={'../' + item.to}
                                    className="flex justify-between"
                                >
                                    <p className="my-auto">{t(item.title)}</p>
                                    <svg
                                        width="34"
                                        height="34"
                                        viewBox="0 0 34 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="34"
                                            height="34"
                                            rx="17"
                                            fill="#C59D5F"
                                        />
                                        <path
                                            d="M20.5 14.5L23 17M23 17L20.5 19.5M23 17H11"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
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
