# 📤 GUÍA: SUBIR RUNTOGETHER A GITHUB

## 🎯 PASOS PARA SUBIR TU PROYECTO

### Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `RunTogether-TFG`
3. Descripción: `Plataforma web para gestión de eventos de running - TFG UOC 2025`
4. Selecciona: **Público** o **Privado** (tu elección)
5. **NO marques** "Add a README file" (ya lo tienes)
6. **NO marques** "Add .gitignore" (ya lo tienes)
7. Click en **"Create repository"**

---

### Paso 2: Comandos en tu Terminal

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Navega a la carpeta del proyecto
cd RunTogether-TFG

# Inicializa Git
git init

# Añade todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit: RunTogether TFG - Frontend + Backend completo"

# Conecta con tu repositorio de GitHub (CAMBIA 'tu-usuario' por tu usuario de GitHub)
git remote add origin https://github.com/tu-usuario/RunTogether-TFG.git

# Sube el código
git push -u origin main
```

**IMPORTANTE:** Reemplaza `tu-usuario` con tu nombre de usuario de GitHub.

---

### Paso 3: Si te pide autenticación

GitHub ya no acepta contraseñas. Necesitas un **Personal Access Token**:

1. Ve a https://github.com/settings/tokens
2. Click en "Generate new token" → "Generate new token (classic)"
3. Nombre: `RunTogether-TFG`
4. Selecciona: `repo` (todos los permisos de repositorio)
5. Click en "Generate token"
6. **COPIA EL TOKEN** (solo se muestra una vez)
7. Usa el token como contraseña cuando Git te lo pida

---

### Paso 4: Verificar que se subió

1. Ve a `https://github.com/tu-usuario/RunTogether-TFG`
2. Deberías ver todos tus archivos
3. ¡Listo! 🎉

---

## 🔄 COMANDOS ÚTILES PARA EL FUTURO

### Subir cambios nuevos:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

### Ver estado de los archivos:
```bash
git status
```

### Ver historial de commits:
```bash
git log --oneline
```

---

## 📝 DESCRIPCIÓN SUGERIDA PARA GITHUB

Copia esto en la descripción de tu repositorio:

```
🏃 RunTogether - Plataforma de Eventos de Running

Trabajo Final de Grado - Ingeniería Informática
Universidad Oberta de Catalunya (UOC) - 2025

🚀 Stack:
- Frontend: React 18 + Vite + Tailwind CSS
- Backend: Node.js + Express + Prisma + MongoDB
- Auth: JWT + bcryptjs

✨ Funcionalidades:
- Gestión de eventos de running
- Sistema de inscripciones
- Autenticación de usuarios
- Panel de organizadores
- Diseño responsive

📦 Listo para desplegar en Netlify
```

---

## 🏷️ TOPICS SUGERIDOS PARA GITHUB

Añade estos topics a tu repositorio (en Settings):

- `react`
- `nodejs`
- `express`
- `mongodb`
- `prisma`
- `tailwindcss`
- `jwt`
- `running`
- `events`
- `tfg`
- `uoc`

---

## 📄 CREAR README.md ATRACTIVO (OPCIONAL)

Si quieres un README más visual, puedes añadir badges:

```markdown
# 🏃 RunTogether

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-green)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Plataforma web para la gestión de eventos de running

[Ver Demo](#) | [Documentación](./INSTRUCCIONES_DESPLIEGUE.md) | [Reportar Bug](../../issues)

## 🚀 Características

- ✅ Gestión completa de eventos
- ✅ Sistema de inscripciones
- ✅ Autenticación JWT
- ✅ Diseño responsive
- ✅ Panel de organizadores

## 📦 Instalación

Ver [INICIO_RAPIDO.md](./INICIO_RAPIDO.md)

## 🎓 Proyecto Académico

TFG - Ingeniería Informática - UOC 2025
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/tu-usuario/RunTogether-TFG.git
```

### Error: "failed to push"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Olvidaste añadir .gitignore
Ya está incluido, pero si necesitas actualizarlo:
```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

---

## ✅ CHECKLIST

- [ ] Repositorio creado en GitHub
- [ ] Git inicializado localmente
- [ ] Archivos añadidos con `git add .`
- [ ] Primer commit realizado
- [ ] Remote origin configurado
- [ ] Código subido con `git push`
- [ ] Verificado en GitHub
- [ ] Descripción añadida
- [ ] Topics añadidos

---

**¡Listo! Tu proyecto está en GitHub** 🎉

Ahora puedes:
- Compartir el link con tu tutor
- Conectarlo con Netlify para deploy automático
- Colaborar con otros
- Tener backup en la nube
