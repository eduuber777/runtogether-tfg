const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const api = {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token')
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${API_URL}${endpoint}`, config)
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Error en la petición')
    }

    return response.json()
  },

  get(endpoint) {
    return this.request(endpoint)
  },

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },

  delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    })
  },
}
