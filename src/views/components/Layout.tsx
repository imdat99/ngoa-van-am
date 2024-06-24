import i18n from 'i18n'
import { configState, langState } from 'lib/store'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import ListenDevice from './ListenDevice'
import { client } from 'lib/client'

const Layout = () => {
    const lang = useRecoilValue(langState)
    const setConfig = useSetRecoilState(configState)
    React.useEffect(() => {
        i18n.changeLanguage(lang)
        client
            .get('config', {
                params: {
                    lang,
                },
            })
            .then((r) => r.data)
            .then(setConfig)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang])
    return (
        <div className="flex min-h-svh flex-col bg-background w-full">
            {!import.meta.env.DEV && <ListenDevice />}
            <div className="flex-1 max-h-[930px]">
                <div className="max-w-[430px] mx-auto bg-repeat bg-contain relative">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
