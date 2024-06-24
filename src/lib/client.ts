import axios from "axios"
export const client = axios.create({
    baseURL: "https://ngoavanam-demo.minastik.com/wp-json/tea",
})
