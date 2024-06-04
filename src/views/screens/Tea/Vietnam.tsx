import { useTranslation } from "react-i18next"
import TeaComponent from "views/components/TeaComponent"

const VNTea = () => {
    const {t} = useTranslation()
    return (
        <TeaComponent
            title={t("Tea.VNTea")}
            bgUrl="/images/bg-vietnam.png"
        >
            <div className="absolute left-40 top-60 w-fit flex flex-col">
                <p className="text-xl text-[#4A5E6D] font-bold text-center">
                    {t("Location.Taxua")}
                </p>
                <img src="/images/point.png" alt="ta-xua" className="mx-auto"/>
            </div>
            <div className="absolute right-20 bottom-80 w-fit flex flex-col">
                <p className="text-xl text-[#4A5E6D] font-bold text-center">
                    {t("Location.Hue")}
                </p>
                <img src="/images/point.png" alt="Hue" className="mx-auto"/>
            </div>
        </TeaComponent>
    )
}

export default VNTea
