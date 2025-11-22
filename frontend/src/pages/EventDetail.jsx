import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { eventService } from '../services/eventService'
import { useAuth } from '../context/AuthContext'

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [registering, setRegistering] = useState(false)

  useEffect(() => {
    loadEvent()
  }, [id])

  const loadEvent = async () => {
    try {
      const data = await eventService.getEvent(id)
      setEvent(data)
    } catch (err) {
      setError('Error al cargar el evento')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    setRegistering(true)
    try {
      await eventService.registerForEvent(id)
      alert('¡Inscripción exitosa!')
      loadEvent()
    } catch (err) {
      alert(err.message || 'Error al inscribirse')
    } finally {
      setRegistering(false)
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando...</div>
  }

  if (error || !event) {
    return <div className="container mx-auto px-4 py-8 text-red-600">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600 mb-6">{event.description}</p>
        
        <div className="space-y-3 mb-6">
          <p className="flex items-center">
            <span className="font-semibold mr-2">📅 Fecha:</span>
            {new Date(event.date).toLocaleDateString('es-ES')}
          </p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">📍 Ubicación:</span>
            {event.location}
          </p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">🏃 Distancia:</span>
            {event.distance} km
          </p>
          {event.maxParticipants && (
            <p className="flex items-center">
              <span className="font-semibold mr-2">👥 Participantes:</span>
              {event.maxParticipants}
            </p>
          )}
        </div>

        {isAuthenticated && user?.role === 'USER' && (
          <button
            onClick={handleRegister}
            disabled={registering}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {registering ? 'Inscribiendo...' : 'Inscribirse al Evento'}
          </button>
        )}
      </div>
    </div>
  )
}
