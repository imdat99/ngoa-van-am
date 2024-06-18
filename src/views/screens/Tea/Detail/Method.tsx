import { fillNumber } from 'lib/utils'
import { Button } from 'views/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    useCarousel,
    useCarouselApi,
} from 'views/components/ui/carousel'

const steps = [
    {
        title: 'Bước 1',
        content: '3-5 gr trà, tráng nóng ấm chén.\nĐổ trà vào ấm thức hương',
        image: '/images/taxua-cachpha1.png',
    },
    {
        title: 'Bước 2',
        content: `Nước pha trà 90-95 độ C tráng nhanh tay. \nTuần 1 ủ trà 15-30s tùy khẩu vị đậm nhạt.\n Uống được khoảng 5-7 tuần trà.`,
        image: '/images/taxua-cachpha2.png',
    },
]

const MethodInfo = () => {
    const { api } = useCarousel()
    const { selectedIndex, onDotButtonClick } = useCarouselApi(api)
    return (
        <div className="flex flex-col justify-between h-2/5 p-7">
            <div>
                <p className="lora text-2xl">
                    {steps[selectedIndex]?.title || ''}
                </p>
                <p className="text-gray-600 my-5 whitespace-pre">
                    {steps[selectedIndex]?.content || ''}
                </p>
            </div>
            <div className="flex space-x-3 justify-between">
                <div className="flex">
                    {steps.map((_item, index) => (
                        <Button
                            key={index}
                            variant="link"
                            onClick={() => {
                                onDotButtonClick(index)
                            }}
                        >
                            <p
                                className="lora data-[active=true]:text-[#C59D5F] data-[active=true]:text-[1.5rem] text-base cursor-pointer"
                                data-active={selectedIndex === index}
                            >
                                {fillNumber(index + 1)}
                            </p>
                        </Button>
                    ))}
                </div>
                <div className="my-auto mx overflow-hidden">
                    <svg
                        height="1"
                        viewBox="0 0 199 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="4.37114e-08"
                            y1="0.5"
                            x2="199"
                            y2="0.500017"
                            stroke="#D7D7D7"
                        />
                    </svg>
                </div>
                <CarouselNext variant="link">
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-atuo cursor-pointer"
                    >
                        <rect width="34" height="34" rx="17" fill="#C59D5F" />
                        <path
                            d="M20.5 14.5L23 17M23 17L20.5 19.5M23 17H11"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </CarouselNext>
            </div>
        </div>
    )
}

const Method = () => {
    return (
        <Carousel className="h-full w-full bg-no-repeat bg-contain relative">
            <div className="flex flex-col h-full w-full rounded-[30px]">
                <div className="h-3/5 overflow-hidden rounded-es-[30px]">
                    <CarouselContent>
                        {steps.map((item, index) => (
                            <CarouselItem key={index}>
                                <img
                                    src={item.image}
                                    className="h-full w-full object-cover"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>
                <MethodInfo />
            </div>
        </Carousel>
    )
}

export default Method
