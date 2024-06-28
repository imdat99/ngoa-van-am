import { paths } from 'lib/constant'
import { configState } from 'lib/store'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import ArrowBtn from 'views/components/ArrowBtn'

const locationList = [
    {
        title: 'Location.Vietnam',
        svg: '/svg/flag-vn-big.svg',
        path: paths.tea.vietnam,
    },
    {
        title: 'Location.Japan',
        svg: '/svg/flag-jp-big.svg',
        path: paths.tea.japan,
    },
    {
        title: 'Location.Taiwan',
        svg: '/svg/flag-tw-big.svg',
        path: paths.tea.taiwan,
    },
    {
        title: 'Location.China',
        svg: '/svg/flag-cn-big.svg',
        path: paths.tea.china,
    },
]

const Tea = () => {
    const { t } = useTranslation()
    const pageConfig = useRecoilValue(configState)
    return (
        <>
            <div
                className="w-full bg-re bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${pageConfig['location-bg']})`,
                }}
            >
                <div className="flex bg-[#C59D5F4D] w-full h-full">
                    <div className="m-auto px-4 w-full">
                        <h6 className='lora font-bold text-2xl text-[#674D25] text-center mb-10'>{t('TeaType')}</h6>
                        <div className="grid grid-cols-2 gap-4">
                            {locationList.map(({ title, svg, path }) => (
                                <div className="flex" key={path}>
                                    <Link
                                        to={path}
                                        className="block w-fit m-auto"
                                    >
                                        <img
                                            src={svg}
                                            alt={title}
                                            className="flex-shrink-0"
                                        />
                                        <p className="text-[#674D25] font-semibold my-auto text-lg text-center">
                                            {t(title)}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full">
                    <ArrowBtn type="prev" />
                </div>
            </div>
        </>
    )
}

export default Tea

