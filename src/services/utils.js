import axios from 'axios'

const API_URL = "https://rickandmortyapi.com/api";
const API_BACK = "http://localhost:4000/api"


export const apiRick = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type": "application/json"
    }
})

export const backApi = axios.create({
    baseURL: API_BACK,
    headers: {
        "Content-Type": "application/json"
    }
})