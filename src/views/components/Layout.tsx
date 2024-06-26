import useWaitImageLoad from 'hook/useWaitImageLoad'
import i18n from 'i18n'
import { client } from 'lib/client'
import { configState, langState } from 'lib/store'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import ListenDevice from './ListenDevice'
import LoadingScreen from './LoadingScreen'

const Layout = () => {
    const lang = useRecoilValue(langState)
    const setConfig = useSetRecoilState(configState)
    const loading = useWaitImageLoad()
    // console.log("Layout", loading)
    React.useEffect(() => {
        setConfig((c) => ({...c, loading: true}))
        i18n.changeLanguage(lang)
        client
            .get('config', {
                params: {
                    lang,
                },
            })
            .then((r) => {setConfig({...r.data, loading: false})}).finally(() => {
                setConfig((c) => ({...c, loading: false}))
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang])
    return (
        <div className="flex min-h-dvh flex-col bg-background w-full">
            {!import.meta.env.DEV && <ListenDevice />}
            <LoadingScreen loading={loading} />
            {!loading && <div className="flex-1">
                <div className="max-w-[430px] mx-auto bg-repeat bg-contain relative" id="main-content">
                    <Outlet />
                </div>
            </div>}
        </div>
    )
}

export default Layout
