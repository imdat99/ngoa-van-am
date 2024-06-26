import { paths } from 'lib/constant'
import { configState, langState } from 'lib/store'
import { useTranslation } from 'react-i18next'
import { useRecoilState, useRecoilValue } from 'recoil'
import Welcome from 'views/components/Welcome'
import { RadioGroup, RadioGroupItem } from 'views/components/ui/radio-group'

const langList = [
    {
        id: 'vi',
        name: 'Vietnamese',
        icon: 'svg/vn-flag.svg',
    },
    {
        id: 'ja',
        name: 'Japanese',
        icon: 'svg/jp-flag.svg',
    },
    {
        id: 'zh',
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
    const [lang, setLang] = useRecoilState(langState);
    const configData = useRecoilValue(configState)

    return (
        <Welcome
            background={configData.language_background}
            btnType="both"
            nextPath={paths.regulation}
        >
            <div className="my-auto flex px-4 absolute h-svh w-full top-0">
                <div className="w-full bg-secondary/10 my-auto rounded-2xl backdrop-blur-sm">
                    <h1 className="lora font-bold text-2xl text-[#E2CEAF] text-center mt-10">
                        {t('Language.Title')}
                    </h1>
                    <div className="px-8 my-10">
                        <RadioGroup defaultValue={lang} className='space-y-5 text-lg' onValueChange={setLang}>
                            {langList.map((lang, index) => (
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    key={index}
                                >
                                    <label
                                        htmlFor={lang.id}
                                        className="text-white flex cursor-pointer"
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
