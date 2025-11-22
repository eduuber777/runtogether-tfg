# 🚀 PASOS RÁPIDOS PARA SUBIR A GITHUB

## ✅ YA HECHO:
- ✅ Git inicializado
- ✅ Archivos añadidos

## 📝 SIGUIENTE: EJECUTA ESTOS COMANDOS

### Opción 1: Usar el Script Automático (RECOMENDADO)

```powershell
.\configurar-git.ps1
```

El script te guiará paso a paso.

---

### Opción 2: Comandos Manuales

**1. Configura tu identidad:**
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@gmail.com"
```

**2. Haz el commit:**
```bash
git commit -m "Initial commit: RunTogether TFG completo"
```

**3. Crea el repositorio en GitHub:**
- Ve a https://github.com/new
- Nombre: `RunTogether-TFG`
- NO marques "Add README" ni ".gitignore"
- Click "Create repository"

**4. Conecta y sube:**
```bash
git remote add origin https://github.com/TU-USUARIO/RunTogether-TFG.git
git push -u origin main
```

---

## 🔑 SI TE PIDE CONTRASEÑA

GitHub ya no acepta contraseñas. Necesitas un **Personal Access Token**:

1. Ve a https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Nombre: `RunTogether-TFG`
4. Marca: `repo` (todos los permisos)
5. Click "Generate token"
6. **COPIA EL TOKEN** (solo se muestra una vez)
7. Úsalo como contraseña cuando Git te lo pida

---

## ✨ DESPUÉS DE SUBIR

Tu proyecto estará en:
```
https://github.com/TU-USUARIO/RunTogether-TFG
```

Podrás:
- ✅ Compartir el link
- ✅ Conectar con Netlify
- ✅ Tener backup en la nube
- ✅ Colaborar con otros

---

## 🆘 PROBLEMAS COMUNES

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/RunTogether-TFG.git
```

### "failed to push"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

**¡Listo! Sigue los pasos y tu proyecto estará en GitHub** 🎉
