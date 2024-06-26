import { atom, selector } from 'recoil'
import { TeaConfigData, TeaDetails } from './Type'
import { isImage } from './utils'
import { detailDefault } from './constant'

export const teaDetailState = atom<TeaDetails & { loading: boolean }>({
    key: 'teaDetailState',
    default: detailDefault,
})

export const ImgListState = selector<string[]>({
    key: 'ImgListState/default',
    get: ({ get }) => {
        const teaDetail = get(teaDetailState)
        const configData = get(configState)
        const imgs = Object.values(teaDetail.fields).filter(
            (v) => typeof v === 'string' && isImage(v)
        )
        Object.values(configData)
            .filter((v) => typeof v === 'string' && isImage(v))
            .forEach((v) => imgs.push(v))
        teaDetail.fields.method_step.forEach((step) => {
            imgs.push(step.background)
        })
        return imgs
    },
})

export const langState = atom<string>({
    key: 'langStateKey',
    default: localStorage.getItem('i18nextLng') || 'vi',
})

export const configState = atom<TeaConfigData & {loading: boolean}>({
    key: 'configState',
    default: {
        home_bg: '',
        language_background: '',
        regular_bg: '',
        "location-bg": '',
        reqular_list: [],
        loading: true,
    },
})
