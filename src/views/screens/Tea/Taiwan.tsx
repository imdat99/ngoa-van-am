import TeaMap from './TeaMap'

const twTeaList = [
    {
        children: [],
        name: 'TanTruc',
        slug: 'tan-truc',
        position: {
            left: '40%',
            top: '15%',
        },
    },
    {
        children: [],
        name: 'Dongting',
        slug: 'dong-dinh',
        position: {
            left: '34%',
            top: '30%',
        },
    },
    {
        children: [],
        name: 'LeShan',
        slug: 'le-son',
        position: {
            left: '40%',
            top: '43%',
        },
    },
    {
        name: 'Alishan',
        position: {
            left: '20%',
            top: '40%',
        },
        slug: '',
        children: [
            {
                name: 'KimTuyen',
                slug: 'kim-tuyen',
            },
            {
                name: 'CaoSon',
                slug: 'cao-son',
            },
            {
                name: 'ThuyTien',
                slug: 'thuy-tien',
            },
        ],
    },
]

const TWTea = () => {
    return (
        <TeaMap
            title="Tea.TWTea"
            bgUrl="/images/bg-taiwan.png"
            teaList={twTeaList as any}
        />
    )
}

export default TWTea
