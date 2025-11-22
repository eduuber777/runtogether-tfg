import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { eventService } from '../services/eventService'

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = async () => {
    try {
      const data = await eventService.getEvents()
      setEvents(data)
    } catch (err) {
      setError('Error al cargar eventos')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Cargando eventos...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Eventos de Running</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            No hay eventos disponibles
          </p>
          <Link
            to="/create-event"
            className="text-blue-600 hover:text-blue-500"
          >
            Crea el primer evento
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {event.description}
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>📅 {new Date(event.date).toLocaleDateString('es-ES')}</p>
                <p>📍 {event.location}</p>
                <p>🏃 {event.distance} km</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
