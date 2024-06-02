// import i18n from "i18next";
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { loadPath, languages } from 'lib/constant'
import { initReactI18next } from 'react-i18next'
declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false
    }
}
const i18n = i18next.createInstance()

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: languages[0],
        supportedLngs: languages,
        ns: ["translation"],
        defaultNS: "translation",
        preload: languages.splice(0,2),
        debug: false,
        returnNull: false,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath,
        },
    })
export default i18n
