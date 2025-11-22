import { api } from './api'

export const authService = {
  async login(email, password) {
    const data = await api.post('/api/auth/login', { email, password })
    if (data.token) {
      localStorage.setItem('token', data.token)
    }
    return data
  },

  async register(userData) {
    const data = await api.post('/api/auth/register', userData)
    if (data.token) {
      localStorage.setItem('token', data.token)
    }
    return data
  },

  async getProfile() {
    return api.get('/api/auth/profile')
  },

  logout() {
    localStorage.removeItem('token')
  },
}
