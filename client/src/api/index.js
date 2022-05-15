import axios from 'axios'
import { getAuthToken } from '@/jwt'

export function initApiUrl(baseURL) {
    axios.defaults.baseURL = baseURL
}

export function setApiHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getAuthToken()}`
}

export function removeApiHeader() {
    delete axios.defaults.headers.common['Authorization']
}

export function login (userData) {
    return axios.post('/login', userData)
}

export function register (userData) {
    return axios.post('/register', userData)
}