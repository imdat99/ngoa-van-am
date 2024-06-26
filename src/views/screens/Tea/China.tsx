import TeaMap from './TeaMap'

const teaList = [
    {
        children: [],
        name: 'HaNam',
        slug: 'ha-nam',
        position: {
            left: '40%',
            top: '15%',
        },
    },
    {
        children: [],
        name: 'TuXuyen',
        slug: 'tu-xuyen',
        position: {
            left: '4%',
            top: '28%',
        },
    },
    {
        children: [],
        name: 'GiangTo',
        slug: 'giang-to',
        position: {
            right: '6%',
            top: '10%',
        },
    },
    {
        children: [],
        name: 'HangChau',
        slug: 'hang-chau',
        position: {
            right: '5%',
            top: '25%',
        },
    },
    {
        children: [],
        name: 'QuangDong',
        slug: 'quang-dong',
        position: {
            left: '45%',
            top: '45%',
        },
    },
    {
        name: 'VanNam',
        position: {
            left: '5%',
            top: '45%',
        },
        slug: '',
        children: [
            {
                name: 'PhoNhiSong',
                slug: 'pho-nhi-song',
            },
            {
                name: 'PhoNhiChin',
                slug: 'pho-nhi-chin',
            }
        ],
    },
    {
        name: 'PhucKien',
        position: {
            right: '2%',
            top: '40%',
        },
        slug: '',
        children: [
            {
                name: 'CaoSonVanVu',
                slug: 'cao-son-van-vu',
            },
            {
                name: 'ChinhSonTieuChung',
                slug: 'chinh-son-tieu-chung',
            },
            {
                name: 'ThietQuanAmThuCong',
                slug: 'thiet-quan-am-thu-cong',
            },
            {
                name: 'ThietQuanAmBoiHoa',
                slug: "thiet-quan-am-boi-hoa"
            },
            {
                name: "NhamTraVuDi",
                slug: "nham-tra-vu-di"
            }
        ],
    },
]

const CnTea = () => {
    return (
        <TeaMap
            title="Tea.CNTea"
            bgUrl="/images/bg-china.png"
            teaList={teaList as any}
        />
    )
}

export default CnTea
