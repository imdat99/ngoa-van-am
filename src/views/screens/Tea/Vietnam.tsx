import TeaMap from './TeaMap'
const teaList = [
    {
        children: [],
        name: 'Taxua',
        slug: 'ta-xua',
        position: {
            left: '38%',
            top: '23%',
        },
    },
    {
        children: [],
        name: 'Hue',
        slug: 'hue',
        position: {
            left: '62%',
            top: '44%',
        },
    },
]
const VNTea = () => {
    return <TeaMap
        title="Tea.VNTea"
        bgUrl="/images/bg-vietnam.png"
        teaList={teaList as any}
    />
}

export default VNTea
