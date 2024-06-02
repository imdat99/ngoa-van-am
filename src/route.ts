import { createBrowserRouter } from 'react-router-dom'
import { createElement as _c } from 'react'
import Layout from 'Layout'
import welcome from 'views/screens/welcome'
const router = createBrowserRouter([
    {
        path: '/',
        element: _c(Layout),
        children: [
            {
                index: true,
                element: _c(welcome),
            },
        ],
    },
])

export default router
