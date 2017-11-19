import axios from 'axios'
import { baseUrl as API_ROOT } from './config'

const encode = encodeURIComponent

axios.defaults.baseURL = API_ROOT

let axiosInstance = axios.create({
  baseURL: API_ROOT,
  timeout: 30000
})

axiosInstance.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem('token')
    return config
  },
  error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

const User = {
  current: () => axiosInstance.get('/api/user/'),
  update: body => axiosInstance.put('/api/user', body),
  register: body => axiosInstance.post('/api/users', { user: body }),
  login: body => axiosInstance.post('api/users,login', { user: body })
}

const Place = {
  board: () => axiosInstance.get('/api/place'),
  pixelDetail: (x, y) => axiosInstance.get(`/api/placepixel?x=${x}&y=${y}`),
  draw: body => axiosInstance.post('/api/place/draw', body)
}

export default {
  User,
  Place
}
