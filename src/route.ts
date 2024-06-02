import { createBrowserRouter } from 'react-router-dom'
import { createElement as _c } from 'react'
import Layout from 'views/components/Layout'
import HomePage from 'views/screens/HomePage'
import { paths } from 'lib/constant'
import Language from 'views/screens/Language'
import Regulation from 'views/screens/Regulation'

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
        ],
    },
])

export default router
