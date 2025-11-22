# ⚡ INICIO RÁPIDO - RunTogether TFG

## 🎯 OPCIÓN 1: DESPLEGAR EN NETLIFY (5 MINUTOS)

### Paso 1: Instalar dependencias
```bash
cd RunTogether-TFG/frontend
npm install
```

### Paso 2: Crear build de producción
```bash
npm run build
```

### Paso 3: Desplegar
Ve a https://app.netlify.com/drop y arrastra la carpeta `dist`

**¡LISTO! Tu app está en línea** 🎉

---

## 💻 OPCIÓN 2: EJECUTAR LOCALMENTE (10 MINUTOS)

### Terminal 1 - Backend

```bash
cd RunTogether-TFG/backend
npm install
```

Crea archivo `.env`:
```
DATABASE_URL="mongodb://localhost:27017/runtogether"
JWT_SECRET="mi-secreto-123"
PORT=3000
```

Inicia el servidor:
```bash
npx prisma generate
npm run dev
```

✅ Backend corriendo en http://localhost:3000

---

### Terminal 2 - Frontend

```bash
cd RunTogether-TFG/frontend
npm install
```

Crea archivo `.env`:
```
VITE_API_URL=http://localhost:3000
```

Inicia la app:
```bash
npm run dev
```

✅ Frontend corriendo en http://localhost:5173

---

## 🧪 PROBAR LA APLICACIÓN

1. Abre http://localhost:5173
2. Haz clic en "Registrarse"
3. Crea una cuenta como "Organizador"
4. Crea un evento
5. Cierra sesión
6. Regístrate como "Corredor"
7. Inscríbete al evento

**¡Funciona!** ✨

---

## 📋 REQUISITOS PREVIOS

- Node.js 18+ instalado
- MongoDB instalado (para local)
- npm o yarn

---

## 🆘 PROBLEMAS COMUNES

### "Cannot find module"
```bash
npm install
```

### "MongoDB connection failed"
Asegúrate de que MongoDB esté corriendo:
```bash
mongod
```

### "Port 3000 already in use"
Cambia el puerto en `.env`:
```
PORT=3001
```

---

## 📚 MÁS INFORMACIÓN

- `LEEME_PRIMERO_RunTogether.md` - Guía completa
- `INSTRUCCIONES_DESPLIEGUE.md` - Despliegue detallado
- `PROYECTO_COMPLETO_RESUMEN.md` - Resumen técnico

---

**¡Listo para correr! 🏃‍♂️💨**
