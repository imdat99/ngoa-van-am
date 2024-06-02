import { paths } from 'lib/constant'
import { useTranslation } from 'react-i18next'
import Welcome from 'views/components/Welcome'
import { RadioGroup, RadioGroupItem } from 'views/components/ui/radio-group'

const langList = [
    {
        id: 'vi',
        name: 'Vietnamese',
        icon: 'svg/vn-flag.svg',
    },
    {
        id: 'jp',
        name: 'Japanese',
        icon: 'svg/jp-flag.svg',
    },
    {
        id: 'cn',
        name: 'Chinese',
        icon: 'svg/cn-flag.svg',
    },
    {
        id: 'en',
        name: 'English',
        icon: 'svg/en-flag.svg',
    }
]

const Language = () => {
    const { t } = useTranslation()
    return (
        <Welcome
            background={'images/bg-traquy.png'}
            btnType="both"
            nextPath={paths.regulation}
        >
            <div className="h-full flex px-4">
                <div className="w-full bg-white/10 my-auto rounded-2xl">
                    <h1 className="lora font-bold text-2xl text-[#E2CEAF] text-center mt-10">
                        {t('Regulation.Title')}
                    </h1>
                    <div className="px-8 my-10">
                        <RadioGroup defaultValue="vi" className='space-y-5 text-lg'>
                            {langList.map((lang, index) => (
                                <div
                                    className="flex items-center justify-between"
                                    key={index}
                                >
                                    <label
                                        htmlFor={lang.id}
                                        className="text-white flex"
                                    >
                                        <img src={lang.icon} alt={lang.name} className='my-auto mr-3'/>
                                        <span className='my-auto'>{t('Language.'+lang.name)}</span>
                                    </label>
                                    <RadioGroupItem
                                        className="text-white ring-white ring-1 ring-opacity-50 border-white"
                                        value={lang.id}
                                        id={lang.id}
                                    />
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </Welcome>
    )
}

export default Language
