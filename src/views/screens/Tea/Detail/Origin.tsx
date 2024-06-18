import { cn } from 'lib/utils'
import TeaComponent from 'views/components/TeaComponent'

const listSubcontent = [
    {
        icon: '/svg/origin-icon.svg',
        content: 'Xuất xứ: thuộc xã Tà Xùa, huyện Bắc Yên, Sơn La có độ cao 1700m so với mực nước biển'
    },
    {
        icon: '/svg/sub-info.svg',
        content: 'Trong tiếng H’mong, Tà Xùa có nghĩa là đỉnh núi có nhiều nguồn thảo dược quý hiếm'
    },
    {
        icon: '/svg/climate.svg',
        content: 'Tà Xùa có khí hậu trong lành, sườn núi đón gió tạo nên những lớp mây bồng bềnh'
    },
    {
        icon: '/svg/smell.svg',
        content: 'Nhờ có độ cao địa hình và đặc điểm khí hậu, nơi đây đem lại cho trà xanh Tà Xùa một hương vị độc đáo và khác biệt so với các loại trà xanh khác của Việt Nam'
    },
]

const Origin = () => {
    return (
        <TeaComponent title="" bgUrl="/images/taxua-origin.png">
            <div className="h-full w-full bg-[#2121218F]/20 px-12 pt-14">
                <div className="flex flex-col items-center my-6">
                    <p className='lora mr-auto text-white text-[2.2rem] leading-[3rem]'>
                        Trà xanh
                    </p>
                    <p className="lora text-[#C59D5F] text-7xl my-3 font-bold drop-shadow-lg">
                        Tà Xùa
                    </p>
                    <p className='lora ml-auto text-white text-[2.2rem] leading-[3rem]'>
                        Bắc Yên, Sơn La
                    </p>
                </div>
                <div className="flex flex-col items-center mt-5 space-y-6 overflow-y-auto h-[calc(100%-280px)]">
                    {
                        listSubcontent.map((item, index) => (
                            <div key={index} className="flex items-center even:flex-row-reverse">
                                <img src={item.icon} className={cn("w-10 h-10", index%2 ? 'ml-5' : 'mr-5')} />
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
