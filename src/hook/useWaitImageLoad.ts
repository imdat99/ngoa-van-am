import { ImgListState } from 'lib/store'
import React from 'react'
import { useRecoilValue } from 'recoil'

const useWaitImageLoad = () => {
    const [loading, setLoading] = React.useState(true)
    const imgs = React.useRef<HTMLImageElement[]>([])
    const imgSrcList = useRecoilValue(ImgListState)
    React.useEffect(() => {
        if (!imgSrcList.length) {
            setLoading(true)
            return
        }
        const imgPromises = imgSrcList.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                imgs.current.push(img)
                img.onload = () => resolve(null)
                img.onerror = () => reject()
                img.src = src
            })
        })
        Promise.all(imgPromises).finally(() => {
            setLoading(false)
        })
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            imgs.current.forEach((img) => {
                img.remove()
            })
        }
    }, [imgSrcList])
    return loading
}

export default useWaitImageLoad
