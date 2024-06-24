import { teaDetailState } from 'lib/store'
import { cn } from 'lib/utils'
import { useRecoilValue } from 'recoil'
import TeaComponent from 'views/components/TeaComponent'

const Origin = () => {
    const teaData = useRecoilValue(teaDetailState);
    return teaData.loading ? <div>Loading...</div> : (
        <TeaComponent title="" bgUrl={teaData.fields.origin_background}>
            <div className="h-full w-full bg-[#2121218F]/20 px-12 pt-14">
                <div className="flex flex-col items-center my-6">
                    <p className='lora mr-auto text-white text-[2.2rem] leading-[3rem]'>
                        {teaData.fields.origin_head_title}
                    </p>
                    <p className="lora text-[#C59D5F] text-7xl my-3 font-bold drop-shadow-lg">
                        {teaData.fields.ten_tra}
                    </p>
                    <p className='lora ml-auto text-white text-[2.2rem] leading-[3rem]'>
                        {teaData.fields.location}
                    </p>
                </div>
                <div className="flex flex-col items-center mt-5 space-y-6 overflow-y-auto h-[calc(100%-280px)]">
                    {
                        teaData.fields.origins_content.map((item, index) => (
                            <div key={index} className="flex items-center even:flex-row-reverse">
                                <img src={item.origin_icon} className={cn("w-10 h-10", index%2 ? 'ml-5' : 'mr-5')} />
                                <p className="text-white text-justify">{item.content}</p>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </TeaComponent>
    )
}
export default Origin
