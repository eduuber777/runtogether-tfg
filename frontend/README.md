# RunTogether Frontend - PEC3

Frontend de la aplicación RunTogether desarrollado con React + Vite.

## 🚀 Tecnologías

- React 18
- Vite
- React Router DOM
- Tailwind CSS

## 📦 Instalación

```bash
npm install
```

## 🔧 Configuración

Crea un archivo `.env` basado en `.env.example`:

```bash
VITE_API_URL=http://localhost:3000
```

## 💻 Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

## 🌐 Despliegue en Netlify

1. Conecta tu repositorio con Netlify
2. Configura las variables de entorno:
   - `VITE_API_URL`: URL de tu backend
3. El archivo `netlify.toml` ya está configurado
4. Deploy automático

## 📁 Estructura

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── services/      # Servicios API
├── context/       # Context API
└── App.jsx        # Componente principal
```

## ✨ Funcionalidades

- ✅ Registro e inicio de sesión
- ✅ Listado de eventos
- ✅ Detalle de eventos
- ✅ Creación de eventos (organizadores)
- ✅ Inscripción a eventos
- ✅ Gestión de perfil
- ✅ Diseño responsive

## 📝 Autor

Eduard Berlanga - TFG UOC 2025
