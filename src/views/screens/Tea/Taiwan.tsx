import { useTranslation } from 'react-i18next'
import TeaComponent from 'views/components/TeaComponent'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from 'views/components/ui/dropdown-menu'

const TWTea = () => {
    const { t } = useTranslation()
    return (
        <TeaComponent title={t('Tea.TWTea')} bgUrl="/images/bg-taiwan.png">
            <div className="absolute left-40 top-60 w-fit flex flex-col">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <p className="text-xl text-[#4A5E6D] font-bold text-center">
                            {t('Location.Tantruc')}
                        </p>
                        <img
                            src="/images/point.png"
                            alt="ta-xua"
                            className="mx-auto"
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="absolute right-20 bottom-80 w-fit flex flex-col">
                <p className="text-xl text-[#4A5E6D] font-bold text-center">
                    {t('Location.Hue')}
                </p>
                <img src="/images/point.png" alt="Hue" className="mx-auto" />
            </div>
        </TeaComponent>
    )
}

export default TWTea
