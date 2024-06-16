import TeaComponent from 'views/components/TeaComponent'

const listSubcontent = [
    {
        icon: '/svg/origin-icon.svg',
        content: 'Xuất xứ: Là một loại oolong nổi tiếng của Đài Loan, người Đài thường gọi là Bạch Hào Olong .'
    },
    {
        icon: '/svg/origin-icon.svg',
        content: 'Là cái tên được nữ hoàng Anh Elizabeth II đặt cho loại trà này sau khi bà được mời thưởng thức.'
    },
    {
        icon: '/svg/origin-icon.svg',
        content: 'Khí hậu hải đảo, nhiều núi cao, thời tiết sương mù sinh ra loại rầy xanh cắn lá non của cây trà.'
    },
    {
        icon: '/svg/origin-icon.svg',
        content: 'Hương vị của ĐPMN Đài Loan khác biệt so với ĐPMN sản xuất ngoài Đài Loan. Nước trà màu đỏ cam, hương mật ong và trái cây chín nồng nàn, êm dịu.'
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
                                <img src={item.icon} className="w-10 h-10 mr-5" />
                                <p className="text-white">{item.content}</p>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </TeaComponent>
    )
}
export default Origin
