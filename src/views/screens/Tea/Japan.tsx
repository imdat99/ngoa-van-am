import React from 'react'
import TeaMap from './TeaMap'

const Japan = () => {
    return (
        <TeaMap
            title="Tea.JPTea"
            bgUrl="/images/bg-japan.png"
            teaList={[
                {
                    name: 'Kyoto',
                    position: {
                        left: '35%',
                        top: '55%',
                    },
                    slug: '',
                    children: [
                        {
                            name: 'LieuAnhVien',
                            slug: 'lieu-anh-vien',
                        },
                        {
                            name: 'ThuongLamXuanTung',
                            slug: 'thuong-lam-xuan-tung',
                        }
                    ],
                },
            ] as any}
        />
    )
}

export default Japan
