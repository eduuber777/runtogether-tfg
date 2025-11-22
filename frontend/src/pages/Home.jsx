import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bienvenido a RunTogether
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            La plataforma que conecta corredores con eventos de running. 
            Encuentra tu próxima carrera o crea tu propio evento.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/events"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Ver Eventos
            </Link>
            <Link
              to="/register"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué RunTogether?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-semibold mb-2">Encuentra Eventos</h3>
              <p className="text-gray-600">
                Descubre carreras y eventos de running cerca de ti
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Organiza Carreras</h3>
              <p className="text-gray-600">
                Crea y gestiona tus propios eventos deportivos
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
              <p className="text-gray-600">
                Conecta con otros corredores y organizadores
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
