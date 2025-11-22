import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { eventService } from '../services/eventService'

export default function Profile() {
  const { user } = useAuth()
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadRegistrations()
  }, [])

  const loadRegistrations = async () => {
    try {
      const data = await eventService.getMyRegistrations()
      setRegistrations(data)
    } catch (err) {
      console.error('Error al cargar inscripciones:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCancelRegistration = async (registrationId) => {
    if (!confirm('¿Seguro que quieres cancelar esta inscripción?')) return

    try {
      await eventService.cancelRegistration(registrationId)
      loadRegistrations()
    } catch (err) {
      alert('Error al cancelar inscripción')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Mi Perfil</h1>
          <div className="space-y-2">
            <p><span className="font-semibold">Nombre:</span> {user?.name}</p>
            <p><span className="font-semibold">Email:</span> {user?.email}</p>
            <p><span className="font-semibold">Rol:</span> {user?.role === 'ORGANIZER' ? 'Organizador' : 'Corredor'}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Mis Inscripciones</h2>
          
          {loading ? (
            <p>Cargando...</p>
          ) : registrations.length === 0 ? (
            <p className="text-gray-600">No tienes inscripciones activas</p>
          ) : (
            <div className="space-y-4">
              {registrations.map((reg) => (
                <div key={reg.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">{reg.event?.title}</h3>
                  <p className="text-gray-600">{reg.event?.location}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(reg.event?.date).toLocaleDateString('es-ES')}
                  </p>
                  <button
                    onClick={() => handleCancelRegistration(reg.id)}
                    className="mt-2 text-red-600 hover:text-red-700"
                  >
                    Cancelar Inscripción
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
