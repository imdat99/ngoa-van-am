import { teaDetailState } from "lib/store";
import React from "react"
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { Carousel, CarouselContent, CarouselItem } from "views/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'

const Materials = () => {
    const { t } = useTranslation();
    const teaData = useRecoilValue(teaDetailState);
    const contentRef = React.useRef<HTMLDivElement>(null)
    const [divHeight, setDivHeight] = React.useState(0)
    const convertGalleries = React.useMemo(() => {
        const galleries = teaData.fields.galleries;
        const slides = (galleries.length % 4) + Math.floor(galleries.length / 4)
        return Array.from({ length: slides }, (_v, i) => {
            return Array.from({ length: 4 }).map((_u, idx) => {
                const index = (i * 4 + idx);
                const item = galleries.at(index);
                return {
                    src: item?.sizes.thumbnail,
                    id: item?.id,
                }
            })
        }).filter(item => item.some(v => v.src))
    }, [teaData.fields.galleries])
    React.useEffect(() => {
        if (contentRef.current) {
            setDivHeight(contentRef.current.clientHeight)
        }
    }, [teaData.loading])
    const openGallery = (id: number) => {
        const img = teaData.fields.galleries.find((item) => item.id === id)
        img && window.open(img.url)
    }
    return !teaData.loading ? (
        <div className="h-full w-full bg-no-repeat bg-contain relative">
            <div className="absolute w-full">
                <img
                    src={teaData.fields.materials_button_bg}
                    className="h-full w-full object-cover"
                />
            </div>
            <div style={{
                height: Math.round(divHeight / 2),
            }}></div>
            <div className="flex flex-col items-center justify-end h-full">
                <div className="bg-white w-full py-7 relative">
                    <div className="items-center justify-between mb-7 mx-7 shadow-xl rounded-[30px] absolute bg-white" ref={contentRef} style={{
                        top: -Math.round(divHeight / 2),
                    }}>
                        <div className="p-6">
                            <h2 className="lora font-semibold text-2xl">
                                {t('Materials')}
                            </h2>
                            <p className="my-6 whitespace-pre-line">
                                {teaData.fields.material_desxription}
                            </p>
                        </div>
                    </div>
                    <div style={{
                        height: Math.round(divHeight / 2),
                    }} />
                    <p className="lora ml-7 my-3">{t('Galleries')}</p>
                    <Carousel className="w-full bg-no-repeat bg-contain relative" opts={{
                        loop: true
                    }} 
                    plugins={[Autoplay({playOnInit: true, delay: 2500})]}
                    >
                        <div className="flex flex-col h-full w-full px-7">
                            <div className="h-3/5 overflow-hidden">
                                <CarouselContent className='h-full'>
                                    {convertGalleries.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div
                                                key={index}
                                                className="grid grid-cols-2 gap-4"
                                            >
                                                {item?.map(((el, idx) => <img key={index*4+idx}
                                                    onClick={() => {
                                                        el?.id && openGallery(el.id)
                                                    }}
                                                    src={el.src}
                                                    style={
                                                        !el.src
                                                            ? { visibility: 'hidden' }
                                                            : {}
                                                    }
                                                    className="aspect-square w-full rounded-md"
                                                />))}
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    ) : <div>Loading...</div>
}

export default Materials
