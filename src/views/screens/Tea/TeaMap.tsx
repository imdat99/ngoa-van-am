import { TeaInfo } from 'lib/Type'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import TeaComponent from 'views/components/TeaComponent'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from 'views/components/ui/dropdown-menu'
interface TeaMapProps {
    title: string;
    bgUrl: string;
    teaList: TeaInfo[]
}
const TeaMap: React.FC<TeaMapProps> = ({
    title, bgUrl, teaList
}) => {
    const { t } = useTranslation()
    const na = useNavigate()
    return (
        <TeaComponent title={t(title)} bgUrl={bgUrl}>
            {teaList.map((item) => (
                <div
                    key={item.name}
                    className="absolute w-fit flex flex-col"
                    style={{
                        ...item.position,
                    }}
                >
                    {item.children.length ? (
                        <>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <p className="text-[16px] text-[#4A5E6D] font-bold text-center">
                                        {t('Location.' + item.name)}
                                    </p>
                                    <img
                                        src="/images/point.png"
                                        alt={item.name}
                                        className="mx-auto"
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {item.children.map((c) => (
                                        <DropdownMenuItem onClick={() => {
                                            na('/tea/detail/'+c.slug)
                                        }} key={c.slug}>{t('Location.'+c.name)}</DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <div onClick={() => {
                            na('/tea/detail/'+item.slug)
                        }}>
                            <p className="text-[16px] text-[#4A5E6D] font-bold text-center">
                                {t('Location.' + item.name)}
                            </p>
                            <img
                                src="/images/point.png"
                                alt={item.name}
                                className="mx-auto"
                            />
                        </div>
                    )}
                </div>
            ))}
        </TeaComponent>
    )
}

export default TeaMap
