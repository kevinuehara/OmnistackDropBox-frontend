import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-kevin.herokuapp.com'
})

export default api;