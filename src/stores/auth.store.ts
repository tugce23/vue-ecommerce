import { defineStore } from 'pinia'
import api from '@/services/api.service'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { email: string },
    token: null as string | null,
    role: null as string | null
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const res = await api.post('/auth/login', {
          email,
          password
        })

        this.token = res.data.token
        this.user = { email }
        const payload = JSON.parse(atob(this.token.split('.')[1]))
        console.log(payload)
        this.role =payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        console.log(this.role)
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))
        localStorage.setItem('role', this.role!)
      } catch (err) {
        console.error('Login error', err)
      }
    },

    logout() {
      this.user = null
      this.token = null
        this.role = null

      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('role')
    },

    loadUser() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      const role = localStorage.getItem('role')

      if (token && user && role) {
        this.token = token
        this.user = JSON.parse(user)
        this.role = role
      }
    }
  }
})