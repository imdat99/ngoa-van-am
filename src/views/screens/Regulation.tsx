import useWindowSize from 'hook/useWindowSize'
import { paths } from 'lib/constant'
import { useTranslation } from 'react-i18next'
import Welcome from 'views/components/Welcome'

const regularList = [
    {
        title: "Regulation.Booking",
        svg: "svg/booking.svg",
    },
    {
        title: "Regulation.NoPerfume",
        svg: "svg/no-perfume.svg",
    },
    {
        title: "Regulation.NoFood",
        svg: "svg/no-food.svg",
    },
    {
        title: "Regulation.NoPhoto",
        svg: "svg/no-photo.svg",
    },
    {
        title: "Regulation.ZondisconsTime",
        svg: "svg/zondiscons-time.svg",
    },
]

const Language = () => {
    const { t } = useTranslation()
    const { height } = useWindowSize()
    return (
        <Welcome
            background={'images/bg-traquy.png'}
            btnType="both"
            nextPath={paths.tea.root}
        >
            <div className="h-full flex px-4 bg-[#C59D5F40]">
                <div className="w-full bg-white/10 mt-[42%] mb-auto rounded-2xl">
                    <h1 className="lora font-bold text-2xl text-[#E2CEAF] text-center mt-10">
                        {t('Regulation.Title')}
                    </h1>
                    <div className="px-4 my-10 space-y-5 overflow-y-auto" style={height < 780 ? {
                        height: '300px',
                    } : {}}>
                        {regularList.map(({title, svg}, index) => (
                            <div key={index} className='flex w-full'>
                                <img src={svg} alt={title} className='flex-shrink-0 my-auto mr-3'/>
                                <p className="text-white my-auto text-lg text-justify">{t(title)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Welcome>
    )
}

export default Language
