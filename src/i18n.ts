// import i18n from "i18next";
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend, { HttpBackendOptions } from 'i18next-http-backend'
import { PageUrl } from 'lib/client'
import { loadPath, languages } from 'lib/constant'
import { initReactI18next } from 'react-i18next'
declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false
    }
}
const i18n = i18next.createInstance()

const backendOptions: HttpBackendOptions = {
    loadPath: [PageUrl, "lang/getAll?language={{lng}}"].join('/'),
    request: (_options, url, _payload, callback) => {
        try {
            fetch(url).then((res) =>
                res.json().then((r) => {
                    callback(null, {
                        data: JSON.stringify(r),
                        status: 200,
                    });
                })
            );
        } catch (e) {
            console.log(e, "error from language");
            callback(null, {
                status: 500,
                data: "",
            });
        }
    },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: languages[0],
        supportedLngs: languages,
        ns: ["translation"],
        defaultNS: "translation",
        preload: languages,
        keySeparator: "=",
        debug: false,
        returnNull: false,
        interpolation: {
            escapeValue: false,
        },
        backend: backendOptions
    }).then()
export default i18n
