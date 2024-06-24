import { atom } from 'recoil'
import { TeaConfigData, TeaDetails } from './Type'

export const teaDetailState = atom<TeaDetails & { loading: boolean }>({
    key: 'teaDetailState',
    default: {
        loading: true,
        title: '',
        fields: {
            ten_tra: '',
            location: '',
            tea_price: '',
            overview_bg: '',
            menu: '',
            origin_button_bg: '',
            materials_button_bg: '',
            method_button_bg: '',
            origins_content: [],
            material_desxription: '',
            galleries: [],
            origin_background: '',
            origin_head_title: '',
            method_step: []
        }
    },
})

export const langState = atom<string>({
    key: 'langStateKey',
    default: localStorage.getItem('i18nextLng') || 'vi',
})

export const configState = atom<TeaConfigData>({
    key: 'configState',
    default: {
        home_bg: 'images/bg-welcome.png',
        language_background: 'images/bg-language.png',
        regular_bg: 'images/bg-traquy.png',
        "location-bg": '/images/bg-location.png',
        reqular_list: [],
    },
})
