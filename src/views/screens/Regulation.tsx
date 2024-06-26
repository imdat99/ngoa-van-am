import { paths } from 'lib/constant'
import { configState } from 'lib/store'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import Welcome from 'views/components/Welcome'

const Language = () => {
    const { t } = useTranslation();
    const pageConfig = useRecoilValue(configState)
    
    return (
        <Welcome
            background={pageConfig.regular_bg}
            btnType="both"
            nextPath={paths.tea.root}
        >
            <div className="flex px-4">
                <div className="w-full bg-white/10 mt-[42%] mb-auto rounded-2xl backdrop-blur-sm">
                    <h1 className="lora font-bold text-2xl text-[#E2CEAF] text-center mt-10">
                        {t('Regulation.Title')}
                    </h1>
                    <div className="px-4 my-10 space-y-5 overflow-y-auto" >
                        {pageConfig.reqular_list.map(({content, icon}, index) => (
                            <div key={index} className='flex w-full'>
                                <img src={icon} alt={content} className='flex-shrink-0 my-auto mr-3'/>
                                <p className="text-white my-auto text-lg text-justify">{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Welcome>
    )
}

export default Language
