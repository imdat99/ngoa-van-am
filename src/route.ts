import { paths } from 'lib/constant'
import { createElement as _c } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Layout from 'views/components/Layout'
import TeaLayout from 'views/components/TeaLayout'
import HomePage from 'views/screens/HomePage'
import Language from 'views/screens/Language'
import NotFound from 'views/screens/NotFound'
import Regulation from 'views/screens/Regulation'
import Tea from 'views/screens/Tea'
import DetailOutlet from 'views/screens/Tea/Detail/DetailOutlet'

const router = createBrowserRouter([
    {
        path: '/',
        element: _c(Layout),
        errorElement: _c(NotFound),
        children: [
            {
                index: true,
                element: _c(HomePage),
            },
            {
                path: paths.language,
                element: _c(Language),
            },
            {
                path: paths.regulation,
                element: _c(Regulation),
            },
            {
                path: paths.tea.root,
                element: _c(TeaLayout),
                children: [
                    {
                        index: true,
                        element: _c(Tea),
                    },
                    {
                        path: 'detail/:slug',
                        element: _c(
                            RecoilRoot,
                            null,
                            _c(DetailOutlet)
                        ),
                        children: [
                            {
                                index: true,
                                lazy: async () => ({
                                    Component: (
                                        await import(
                                            'views/screens/Tea/Detail/Intro'
                                        )
                                    ).default,
                                }),
                            },
                            {
                                path: paths.tea.detail.discover,
                                lazy: async () => ({
                                    Component: (
                                        await import(
                                            'views/screens/Tea/Detail/Discover'
                                        )
                                    ).default,
                                }),
                            },
                            {
                                path: paths.tea.detail.Origin,
                                lazy: async () => ({
                                    Component: (
                                        await import(
                                            'views/screens/Tea/Detail/Origin'
                                        )
                                    ).default,
                                }),
                            },
                            {
                                path: paths.tea.detail.Materials,
                                lazy: async () => ({
                                    Component: (
                                        await import(
                                            'views/screens/Tea/Detail/Materials'
                                        )
                                    ).default,
                                }),
                            },
                            {
                                path: paths.tea.detail.Method,
                                lazy: async () => ({
                                    Component: (
                                        await import(
                                            'views/screens/Tea/Detail/Method'
                                        )
                                    ).default,
                                }),
                            },
                        ],
                    },
                    {
                        path: paths.tea.vietnam.split('/').at(-1),
                        lazy: async () => ({
                            Component: (
                                await import('views/screens/Tea/Vietnam')
                            ).default,
                        }),
                    },
                    {
                        path: paths.tea.japan.split('/').at(-1),
                        lazy: async () => ({
                            Component: (await import('views/screens/Tea/Japan')).default,
                        }),
                    },
                    {
                        path: paths.tea.taiwan.split('/').at(-1),
                        lazy: async () => ({
                            Component: (await import('views/screens/Tea/Taiwan')).default,
                        }),
                    },
                    {
                        path: paths.tea.china.split('/').at(-1),
                        lazy: async () => ({
                            Component: (await import('views/screens/Tea/China')).default,
                        }),
                    },
                ],
            },
        ],
    },
])

export default router
