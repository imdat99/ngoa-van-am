import { TeaInfo } from 'lib/Type'
import { detailDefault } from 'lib/constant'
import { teaDetailState } from 'lib/store'
import { getImgMaincolor } from 'lib/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import TeaComponent from 'views/components/TeaComponent'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from 'views/components/ui/dropdown-menu'
interface TeaMapProps {
    title: string
    bgUrl: string
    teaList: TeaInfo[]
}
const TeaMap: React.FC<TeaMapProps> = ({ title, bgUrl, teaList }) => {
    const { t } = useTranslation()
    const setDetail = useSetRecoilState(teaDetailState);
    const na = useNavigate()
    React.useEffect(() => {
        setDetail(detailDefault);
    }, [])
    React.useEffect(() => {
        const bgContent = document.querySelector('#main-content');
        getImgMaincolor(bgUrl).then((color) => {
            if (bgContent) {
                (bgContent as HTMLElement).style.backgroundColor = '#'+color
            }
        })
        return () => {
            if (bgContent) {
                (bgContent as HTMLElement).removeAttribute('style')
            }
        }
    }, [bgUrl])
    return (
        <TeaComponent title={t(title)} bgUrl={''}>
            <div className="relative">
                <img src={bgUrl} alt="map" className="w-full h-full" />
                <>
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
                                            {item.children
                                                .sort((a, b) =>
                                                    t(
                                                        'Location.' + a.name
                                                    ).localeCompare(
                                                        t('Location.' + b.name)
                                                    )
                                                )
                                                .map((c) => (
                                                    <DropdownMenuItem
                                                        className="font-light text-[#674D25]"
                                                        onClick={() => {
                                                            na(
                                                                '/tea/detail/' +
                                                                    c.slug
                                                            )
                                                        }}
                                                        key={c.slug}
                                                    >
                                                        {t(
                                                            'Location.' + c.name
                                                        )}
                                                    </DropdownMenuItem>
                                                ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>
                            ) : (
                                <div
                                    onClick={() => {
                                        na('/tea/detail/' + item.slug)
                                    }}
                                >
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
                </>
            </div>
        </TeaComponent>
    )
}

export default TeaMap
