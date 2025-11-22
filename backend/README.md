# RunTogether Backend - PEC2

Backend de la aplicación RunTogether desarrollado con Node.js, Express, Prisma y MongoDB.

## 🚀 Tecnologías

- Node.js
- Express
- Prisma ORM
- MongoDB
- JWT Authentication
- bcryptjs

## 📦 Instalación

```bash
npm install
```

## 🔧 Configuración

Crea un archivo `.env` basado en `.env.example`:

```bash
DATABASE_URL="mongodb://localhost:27017/runtogether"
JWT_SECRET="tu-secreto-super-seguro"
PORT=3000
```

## 🗄️ Base de Datos

Genera el cliente de Prisma:

```bash
npm run prisma:generate
```

Sincroniza el esquema con MongoDB:

```bash
npm run prisma:push
```

## 💻 Desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📡 Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `GET /api/auth/profile` - Obtener perfil (requiere auth)

### Eventos
- `GET /api/events` - Listar eventos
- `GET /api/events/:id` - Obtener evento
- `POST /api/events` - Crear evento (requiere auth)
- `PUT /api/events/:id` - Actualizar evento (requiere auth)
- `DELETE /api/events/:id` - Eliminar evento (requiere auth)

### Inscripciones
- `POST /api/registrations` - Inscribirse a evento (requiere auth)
- `GET /api/registrations` - Mis inscripciones (requiere auth)
- `DELETE /api/registrations/:id` - Cancelar inscripción (requiere auth)

## 📁 Estructura

```
src/
├── config/         # Configuración (Prisma)
├── controllers/    # Lógica de negocio
├── middleware/     # Middleware (auth, validación)
├── routes/         # Definición de rutas
└── server.js       # Punto de entrada
```

## 📝 Autor

Eduard Berlanga - TFG UOC 2025
