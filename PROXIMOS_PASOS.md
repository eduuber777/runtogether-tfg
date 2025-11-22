# 🎯 PRÓXIMOS PASOS - PROYECTO EN GITHUB

## ✅ COMPLETADO

- ✅ Proyecto subido a GitHub
- ✅ Repositorio: https://github.com/eduuber777/runtogether-tfg
- ✅ Código completo disponible

---

## 🚀 SIGUIENTE: DESPLEGAR EN NETLIFY

### Opción 1: Deploy desde GitHub (RECOMENDADO)

1. **Ve a Netlify:**
   - https://app.netlify.com/

2. **Conecta con GitHub:**
   - Click "Add new site" → "Import an existing project"
   - Selecciona "GitHub"
   - Autoriza Netlify
   - Busca: `runtogether-tfg`

3. **Configuración del build:**
   ```
   Base directory: frontend
   Build command: npm run build
   Publish directory: frontend/dist
   ```

4. **Variables de entorno:**
   - Click "Show advanced"
   - Añade: `VITE_API_URL` = `https://tu-backend-url.com`
   - (Por ahora puedes dejarlo vacío o usar un backend de prueba)

5. **Deploy:**
   - Click "Deploy site"
   - ¡Espera 2-3 minutos!
   - Tu sitio estará en: `https://random-name.netlify.app`

---

### Opción 2: Deploy Manual (Rápido)

1. **Build local:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **Subir a Netlify:**
   - Ve a: https://app.netlify.com/drop
   - Arrastra la carpeta `dist`
   - ¡Listo!

---

## 📝 MEJORAR EL README DE GITHUB

Tu README actual es básico. Te sugiero mejorarlo con:

### Añadir al README.md:

```markdown
# 🏃 RunTogether

> Plataforma web para la gestión de eventos de running

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-green)](https://www.mongodb.com/)

## 🎓 Proyecto Académico

Trabajo Final de Grado - Ingeniería Informática  
Universidad Oberta de Catalunya (UOC) - 2025

## ✨ Características

- 🔐 Autenticación JWT
- 📅 Gestión de eventos de running
- 🏃 Sistema de inscripciones
- 👥 Roles (Organizador/Corredor)
- 📱 Diseño responsive
- 🎨 UI moderna con Tailwind CSS

## 🚀 Demo

[Ver Demo en Netlify](#) ← Añade tu link cuando despliegues

## 📦 Tecnologías

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- React Router DOM

**Backend:**
- Node.js + Express
- Prisma ORM
- MongoDB
- JWT + bcryptjs

## 🛠️ Instalación

Ver [INICIO_RAPIDO.md](./INICIO_RAPIDO.md)

## 📚 Documentación

- [Inicio Rápido](./INICIO_RAPIDO.md)
- [Instrucciones de Despliegue](./INSTRUCCIONES_DESPLIEGUE.md)
- [Usuarios de Prueba](./USUARIOS_PRUEBA.md)

## 👨‍💻 Autor

Eduard Berlanga - [@eduuber777](https://github.com/eduuber777)

## 📄 Licencia

MIT License - Proyecto Académico
```

---

## 🎨 AÑADIR TOPICS AL REPOSITORIO

En GitHub, ve a tu repositorio y añade estos topics:

```
react
nodejs
express
mongodb
prisma
tailwindcss
jwt
running
events
tfg
uoc
fullstack
```

**Cómo añadirlos:**
1. Ve a tu repo en GitHub
2. Click en el ⚙️ junto a "About"
3. En "Topics" añade los tags
4. Guarda

---

## 📸 AÑADIR SCREENSHOT

Toma una captura de pantalla de tu app y súbela:

1. Crea carpeta `screenshots` en tu repo
2. Sube una imagen: `home.png`
3. Añade al README:
   ```markdown
   ## 📸 Screenshots
   
   ![Home](./screenshots/home.png)
   ```

---

## 🔧 CONFIGURAR NETLIFY.TOML

Ya tienes el archivo `netlify.toml` en tu frontend. Verifica que esté correcto:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## ✅ CHECKLIST FINAL

- [x] Código en GitHub
- [ ] README mejorado
- [ ] Topics añadidos
- [ ] Screenshot añadido
- [ ] Desplegado en Netlify
- [ ] Link de demo en README
- [ ] Variables de entorno configuradas

---

## 🎯 RESULTADO FINAL

Cuando termines tendrás:

1. ✅ Repositorio profesional en GitHub
2. ✅ Aplicación desplegada en Netlify
3. ✅ README atractivo con badges
4. ✅ Documentación completa
5. ✅ Listo para presentar como TFG

---

## 📧 COMPARTIR

Podrás compartir:
- **Código:** https://github.com/eduuber777/runtogether-tfg
- **Demo:** https://tu-app.netlify.app (cuando despliegues)
- **Documentación:** Todos los archivos .md en el repo

---

**¡Tu proyecto está casi listo! 🎉**

Siguiente paso: Desplegar en Netlify
