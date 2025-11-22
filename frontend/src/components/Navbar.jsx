import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            RunTogether
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/events" className="hover:text-blue-200 transition">
              Eventos
            </Link>

            {isAuthenticated ? (
              <>
                {user?.role === 'ORGANIZER' && (
                  <Link to="/create-event" className="hover:text-blue-200 transition">
                    Crear Evento
                  </Link>
                )}
                <Link to="/profile" className="hover:text-blue-200 transition">
                  Perfil
                </Link>
                <button
                  onClick={logout}
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-200 transition">
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
