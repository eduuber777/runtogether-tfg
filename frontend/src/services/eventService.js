import { api } from './api'

export const eventService = {
  async getEvents() {
    return api.get('/api/events')
  },

  async getEvent(id) {
    return api.get(`/api/events/${id}`)
  },

  async createEvent(eventData) {
    return api.post('/api/events', eventData)
  },

  async updateEvent(id, eventData) {
    return api.put(`/api/events/${id}`, eventData)
  },

  async deleteEvent(id) {
    return api.delete(`/api/events/${id}`)
  },

  async registerForEvent(eventId) {
    return api.post('/api/registrations', { eventId })
  },

  async getMyRegistrations() {
    return api.get('/api/registrations')
  },

  async cancelRegistration(registrationId) {
    return api.delete(`/api/registrations/${registrationId}`)
  },
}
