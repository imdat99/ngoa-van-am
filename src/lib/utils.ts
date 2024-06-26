import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const parseParams = (requestUrl: string) => {
    const params = new URL(requestUrl).searchParams

    const obj: Record<string, any> = {}
    for (const key of params.keys()) {
        if (params.getAll(key).length > 1) {
            if (params.get(key) !== 'undefined') {
                obj[key] = params.getAll(key)
            }
        } else {
            if (params.get(key) !== 'undefined') {
                obj[key] = params.get(key)
            }
            if (typeof params.get(key) === 'boolean') {
                obj[key] = params.get(key)
            }
            if (params.get(key) === 'false' || params.get(key) === 'true') {
                obj[key] = JSON.parse(params.get(key) as any)
            }
        }
    }
    return obj
}

export const repairUrl = (url: string) => {
    if (!url.includes('http')) {
        url = `http://${url}`
    }
    return url
        .replace(/\/\//g, '/')
        .replace('http:/', 'http://')
        .replace('https:/', 'https://')
}

export const fillNumber = (num: number | string) => num.toString().padStart(2, '0')

export function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

export function isImage(url: string) {
    if (!url) return false;
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

export function getImgMaincolor(imageLink: string): Promise<string> {
    return new Promise((resolve) => {
        const myImg = new Image()
        myImg.src = imageLink
        myImg.onload = function () {
            const canvas = document.createElement('canvas')
            //@ts-ignore
            canvas.width = this.width
            //@ts-ignore
            canvas.height = this.height
            const context = canvas.getContext('2d')
            //@ts-ignore
            context.drawImage(myImg, 0, 0)
            //@ts-ignore
            const { data } = context.getImageData(
                //@ts-ignore
                Math.floor(this.width / 2),
                //@ts-ignore
                this.height - 1,
                1,
                1
            )
            let r = data[0].toString(16)
            let g = data[1].toString(16)
            let b = data[2].toString(16)
            if (r.length == 1) r = '0' + r
            if (g.length == 1) g = '0' + g
            if (b.length == 1) b = '0' + b
            const imageColor = r + g + b
            resolve(imageColor)
        }
        myImg.onerror = function () {
            resolve('')
        }
    })
}
