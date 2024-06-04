import { createBrowserRouter } from 'react-router-dom'
import { createElement as _c } from 'react'
import Layout from 'views/components/Layout'
import HomePage from 'views/screens/HomePage'
import { paths } from 'lib/constant'
import Language from 'views/screens/Language'
import Regulation from 'views/screens/Regulation'
import TeaLayout from 'views/components/TeaLayout'
import Tea from 'views/screens/Tea'

const router = createBrowserRouter([
    {
        path: '/',
        element: _c(Layout),
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
                        path: paths.tea.vietnam.split('/').at(-1),
                        lazy: async () => ({
                            Component: (await import('views/screens/Tea/Vietnam')).default,
                        }),        
                    },
                    {
                        path: paths.tea.japan.split('/').at(-1),
                        lazy: async () => ({
                            Component: (await import('views/screens/Tea/Vietnam')).default,
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
                            Component: (await import('views/screens/Tea/Vietnam')).default,
                        }),        
                    },
                ]
            }
        ],
    },
])

export default router
