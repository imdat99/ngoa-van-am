import { MethodStep } from 'lib/Type'
import { teaDetailState } from 'lib/store'
import { fillNumber } from 'lib/utils'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { Button } from 'views/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    useCarousel,
    useCarouselApi,
} from 'views/components/ui/carousel'

const MethodInfo = ({ steps }: { steps: MethodStep[] }) => {
    const { t } = useTranslation()
    const { api } = useCarousel()
    const { selectedIndex, onDotButtonClick } = useCarouselApi(api)
    return (
        <div className="flex flex-col justify-between h-2/5 p-7">
            <div>
                <p className="lora text-2xl">
                    {t('Step')} {selectedIndex + 1}
                </p>
                <p
                    className="text-gray-600 my-5"
                    style={{
                        wordBreak: 'break-word',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {steps[selectedIndex]?.method_content || ''}
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
    const teaData = useRecoilValue(teaDetailState)
    return teaData.loading ? (
        <div>Loading...</div>
    ) : (
        <Carousel className="h-full w-full bg-no-repeat bg-contain relative">
            <div className="flex flex-col h-full w-full">
                <div className="h-3/5 overflow-hidden">
                    <CarouselContent className='h-full'>
                        {teaData.fields.method_step
                            .map((e) => ({ ...e }))
                            .map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className='w-auto h-full max-w-[430px]'>
                                        <img
                                            src={item.background}
                                            className="w-auto h-full object-cover rounded-es-[30px]"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                </div>
                <MethodInfo
                    steps={teaData.fields.method_step.map((e) => ({ ...e }))}
                />
            </div>
        </Carousel>
    )
}

export default Method
