import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import TeaComponent from 'views/components/TeaComponent'

const VNTea = () => {
    const { t } = useTranslation()
    const na = useNavigate()
    return (
        <TeaComponent
            title={t('Tea.VNTea')}
            bgUrl="/images/bg-vietnam.png"
        >
            
            <div
                className="absolute w-fit flex flex-col"
                style={{
                    left: '38%',
                    top: '23%',
                }}
                onClick={() => {
                    na('/tea/detail/ta-xua')
                }}
            >
                <p className="text-xl text-[#4A5E6D] font-bold text-center">
                    {t('Location.Taxua')}
                </p>
                <img src="/images/point.png" alt="ta-xua" className="mx-auto" />
            </div>
            <div
                className="absolute w-fit flex flex-col"
                style={{
                    left: '62%',
                    top: '44%',
                }}
            >
                <p className="text-xl text-[#4A5E6D] font-bold text-center">
                    {t('Location.Hue')}
                </p>
                <img src="/images/point.png" alt="Hue" className="mx-auto" />
            </div>
        </TeaComponent>
    )
}

export default VNTea
