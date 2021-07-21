import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'HTTP://127.0.0.1:8000', 
    timeout: 9000000,
})

export { getAPI }