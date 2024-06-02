import 'assets/index.css'
import i18n from 'i18n'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import router from 'route'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <I18nextProvider i18n={i18n}>
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    </I18nextProvider>
)
