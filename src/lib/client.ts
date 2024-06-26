import axios from "axios"
export const PageUrl = 'https://ngoavanam-demo.minastik.com/wp-json'
export const client = axios.create({
    baseURL: [PageUrl, "tea"].join("/"),
})
