import { teaDetailState } from 'lib/store'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import TeaComponent from 'views/components/TeaComponent'
import { Button } from 'views/components/ui/button'

const Intro = () => {
    const { t } = useTranslation()
    const teaData = useRecoilValue(teaDetailState);
    const na = useNavigate()
    return (
        <TeaComponent title="" bgUrl={teaData.fields.overview_bg}>
            <div className="h-full w-full bg-gradient-to-t from-15% from-black/90 via-transparent px-12">
                <div className="flex flex-col items-center justify-end h-full">
                    <p className="lora text-white text-[2.2rem] mb-16 leading-[3rem] text-center">
                        {teaData.title}
                    </p>
                    <Button
                        asChild
                        className="mb-12 bg-[#C59D5F] hover:bg-yellow-600 rounded-xl w-full"
                    >
                        <div onClick={() => na('discover')} className="text-white">
                            {t('Detail.DiscoverNow')}
                        </div>
                    </Button>
                </div>
            </div>
        </TeaComponent>
    )
}

export default Intro
