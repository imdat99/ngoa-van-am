import { useTranslation } from 'react-i18next'
import useSWR from 'swr'
import { Link } from 'react-router-dom'
import TeaComponent from 'views/components/TeaComponent'
import { Button } from 'views/components/ui/button'
import { fetcher } from 'lib/utils'

const Intro = () => {
    const { t } = useTranslation()
    const {data} = useSWR([39, 'vi'], fetcher) 
    console.log("data", data)
    return (
        <TeaComponent title="" bgUrl="/images/taxua-bg.png">
            <div className="h-full w-full bg-gradient-to-t from-15% from-black/90 via-transparent px-12">
                <div className="flex flex-col items-center justify-end h-full">
                    <p className="lora text-white text-[2.2rem] mb-16 leading-[3rem] text-center">
                        Trà xanh Tà Xùa, Bắc Yên, Sơn La
                    </p>
                    <Button
                        asChild
                        className="mb-12 bg-[#C59D5F] hover:bg-yellow-600 rounded-xl w-full"
                        onClick={() => {
                            // setParams({ step: '1' })
                        }}
                    >
                        <Link to="discover" className="text-white">
                            {t('Detail.DiscoverNow')}
                        </Link>
                    </Button>
                </div>
            </div>
        </TeaComponent>
    )
}

export default Intro
