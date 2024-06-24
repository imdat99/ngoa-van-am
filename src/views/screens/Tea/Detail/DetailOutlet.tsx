import { client } from 'lib/client'
import { langState, teaDetailState } from 'lib/store'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import useSWR from 'swr'

const DetailOutlet = () => {
    const lang = useRecoilValue(langState)
    const setTeaData = useSetRecoilState(teaDetailState)
    const { slug } = useParams<'slug'>()
    useSWR({ lang, slug }, (params) =>
        client
            .get('get', { params })
            .then((r) => {
                setTeaData({
                    loading: false,
                    ...r.data
                })
            })
    )
    return <Outlet />
}

export default DetailOutlet
