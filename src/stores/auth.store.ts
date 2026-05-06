import { defineStore } from 'pinia'
import api from '@/services/api.service'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { email: string },
    token: null as string | null
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

        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))

      } catch (err) {
        console.error('Login error', err)
      }
    },

    logout() {
      this.user = null
      this.token = null

      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },

    loadUser() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')

      if (token && user) {
        this.token = token
        this.user = JSON.parse(user)
      }
    }
  }
})