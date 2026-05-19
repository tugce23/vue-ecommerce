import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5095/api'
})

// REQUEST INTERCEPTOR (JWT)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// RESPONSE INTERCEPTOR (optional ama önerilir)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // global error handling (401 vs ileride kullanacağız)
    if (error.response?.status === 401) {
      console.warn('Unauthorized - token expired or invalid')
    }

    return Promise.reject(error)
  }
)

export default api