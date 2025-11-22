# 🚀 INSTRUCCIONES DE DESPLIEGUE - RunTogether TFG

## 📦 CONTENIDO DEL PROYECTO

Este proyecto contiene:
- ✅ **Frontend completo** (PEC3) - React + Vite + Tailwind
- ✅ **Backend completo** (PEC2) - Node.js + Express + Prisma + MongoDB
- ✅ **Configuración para Netlify** incluida

---

## 🌐 OPCIÓN 1: DESPLEGAR FRONTEND EN NETLIFY

### Paso 1: Preparar el Frontend

```bash
cd RunTogether-TFG/frontend
npm install
npm run build
```

### Paso 2: Desplegar en Netlify

**Opción A - Drag & Drop:**
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `dist` generada
3. ¡Listo!

**Opción B - Desde Git:**
1. Sube el proyecto a GitHub
2. Conecta con Netlify
3. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** `frontend`

### Paso 3: Configurar Variables de Entorno en Netlify

En Netlify Dashboard → Site settings → Environment variables:

```
VITE_API_URL=https://tu-backend-url.com
```

---

## 🖥️ OPCIÓN 2: EJECUTAR LOCALMENTE

### Backend (PEC2)

```bash
cd RunTogether-TFG/backend
npm install
```

Crea `.env`:
```
DATABASE_URL="mongodb://localhost:27017/runtogether"
JWT_SECRET="tu-secreto-super-seguro-aqui"
PORT=3000
```

Inicia el servidor:
```bash
npx prisma generate
npm run dev
```

### Frontend (PEC3)

```bash
cd RunTogether-TFG/frontend
npm install
```

Crea `.env`:
```
VITE_API_URL=http://localhost:3000
```

Inicia la aplicación:
```bash
npm run dev
```

Abre: http://localhost:5173

---

## 🔧 CONFIGURACIÓN PARA PRODUCCIÓN

### Backend en Render/Railway/Heroku

1. **Variables de entorno necesarias:**
   ```
   DATABASE_URL=mongodb+srv://...
   JWT_SECRET=tu-secreto-produccion
   PORT=3000
   NODE_ENV=production
   ```

2. **Build command:**
   ```bash
   npm install && npx prisma generate
   ```

3. **Start command:**
   ```bash
   npm start
   ```

### Frontend en Netlify

El archivo `netlify.toml` ya está configurado:
- Redirecciones SPA ✅
- Build optimizado ✅
- Rutas configuradas ✅

---

## ✅ CHECKLIST PRE-DESPLIEGUE

### Frontend:
- [ ] `npm install` ejecutado
- [ ] `npm run build` funciona sin errores
- [ ] Variable `VITE_API_URL` configurada
- [ ] Archivo `netlify.toml` presente

### Backend:
- [ ] MongoDB configurado
- [ ] Variables de entorno definidas
- [ ] `npx prisma generate` ejecutado
- [ ] Endpoints probados con Postman

---

## 🎯 URLS IMPORTANTES

- **Frontend local:** http://localhost:5173
- **Backend local:** http://localhost:3000
- **API Docs:** http://localhost:3000/api

---

## 📝 NOTAS IMPORTANTES

1. **CORS:** El backend ya tiene CORS configurado
2. **Autenticación:** Usa JWT con localStorage
3. **Base de datos:** Requiere MongoDB (local o Atlas)
4. **Netlify:** Soporta SPA routing automáticamente

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot connect to database"
- Verifica que MongoDB esté corriendo
- Revisa la variable `DATABASE_URL`

### Error: "API request failed"
- Verifica que `VITE_API_URL` apunte al backend correcto
- Revisa la configuración de CORS en el backend

### Error en build de Netlify
- Asegúrate de que `Base directory` sea `frontend`
- Verifica que todas las dependencias estén en `package.json`

---

## 📧 SOPORTE

Proyecto académico TFG - UOC 2025
Autor: Eduard Berlanga

¡Listo para desplegar! 🚀
