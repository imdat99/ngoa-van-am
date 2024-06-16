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
