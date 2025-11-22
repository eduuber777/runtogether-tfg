# 🍃 DESPLIEGUE CON MONGODB ATLAS (GRATIS)

## ✅ Decisión: Mantener MongoDB

Mantenemos MongoDB para ser coherentes con la documentación del PEC2 que especifica:
- **Prisma ORM 6.6.0** ✅
- **MongoDB** como base de datos ✅

---

## 📋 PASO 1: Crear Cuenta en MongoDB Atlas (5 minutos)

### 1.1 Registrarse
1. Ve a: https://www.mongodb.com/cloud/atlas/register
2. Regístrate con tu email o Google
3. Completa el formulario básico

### 1.2 Crear Cluster Gratuito
1. Selecciona **"M0 Free"** (512 MB gratis para siempre)
2. Provider: **AWS**
3. Region: Elige la más cercana (ej: Frankfurt, Ireland)
4. Cluster Name: `runtogether-cluster`
5. Click en **"Create Cluster"** (tarda 3-5 minutos)

### 1.3 Configurar Acceso
Mientras se crea el cluster:

**A) Crear Usuario de Base de Datos:**
1. En el menú lateral: **Database Access**
2. Click **"Add New Database User"**
3. Authentication Method: **Password**
4. Username: `runtogether_user`
5. Password: Genera una contraseña segura (guárdala)
6. Database User Privileges: **Read and write to any database**
7. Click **"Add User"**

**B) Configurar IP Whitelist:**
1. En el menú lateral: **Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

⚠️ **Nota:** En producción real, deberías restringir las IPs específicas.

---

## 📋 PASO 2: Obtener Connection String

### 2.1 Copiar URL de Conexión
1. Ve a **Database** en el menú lateral
2. Click en **"Connect"** en tu cluster
3. Selecciona **"Connect your application"**
4. Driver: **Node.js**
5. Version: **5.5 or later**
6. Copia la connection string:

```
mongodb+srv://runtogether_user:<password>@runtogether-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 2.2 Personalizar Connection String
Reemplaza:
- `<password>` → Tu contraseña real
- Agrega el nombre de la base de datos después de `.net/`:

```
mongodb+srv://runtogether_user:TU_PASSWORD@runtogether-cluster.xxxxx.mongodb.net/runtogether?retryWrites=true&w=majority
```

---

## 📋 PASO 3: Configurar Render con MongoDB Atlas

### 3.1 Actualizar Variable de Entorno en Render
1. Ve a: https://dashboard.render.com
2. Selecciona tu servicio backend
3. Ve a **"Environment"** en el menú lateral
4. Busca la variable **DATABASE_URL**
5. Click en **"Edit"**
6. Pega tu connection string de MongoDB Atlas
7. Click **"Save Changes"**

### 3.2 Eliminar PostgreSQL Database (Opcional)
1. En el Dashboard de Render
2. Ve a **"Databases"**
3. Selecciona la base de datos PostgreSQL
4. Settings → **"Delete Database"**

---

## 📋 PASO 4: Hacer Commit y Push

```powershell
cd RunTogether-TFG
git add backend/prisma/schema.prisma
git commit -m "Revertir a MongoDB para coherencia con PEC2"
git push origin main
```

Render detectará el cambio y hará rebuild automáticamente.

---

## 📋 PASO 5: Verificar Despliegue

### 5.1 Esperar Rebuild (2-3 minutos)
Ve a: https://dashboard.render.com/web/runtogether-backend-kh2u

Espera a ver: **"Build successful ✅"** y **"Deploy live ✅"**

### 5.2 Verificar que Funciona
Visita: https://runtogether-backend-kh2u.onrender.com

Deberías ver:
```json
{"message": "RunTogether API"}
```

Sin errores de Prisma.

### 5.3 Probar Endpoints
```bash
# Registrar usuario
curl -X POST https://runtogether-backend-kh2u.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123!","firstName":"Test","lastName":"User"}'

# Ver eventos
curl https://runtogether-backend-kh2u.onrender.com/api/events
```

---

## 📋 PASO 6: Desplegar Frontend en Netlify

### 6.1 Configurar Variable de Entorno
En `RunTogether-TFG/frontend/.env`:

```env
VITE_API_URL=https://runtogether-backend-kh2u.onrender.com
```

### 6.2 Commit y Push
```powershell
cd RunTogether-TFG
git add frontend/.env
git commit -m "Configurar URL del backend para producción"
git push origin main
```

### 6.3 Desplegar en Netlify
1. Ve a: https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Conecta con GitHub
4. Selecciona: `eduuber777/runtogether-tfg`
5. Configura:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist`
6. Environment variables:
   - Key: `VITE_API_URL`
   - Value: `https://runtogether-backend-kh2u.onrender.com`
7. Click **"Deploy site"**

---

## 🎯 Checklist Final

- [ ] Cuenta MongoDB Atlas creada
- [ ] Cluster M0 Free configurado
- [ ] Usuario de base de datos creado
- [ ] IP Whitelist configurada (0.0.0.0/0)
- [ ] Connection string obtenida
- [ ] DATABASE_URL actualizada en Render
- [ ] Schema revertido a MongoDB
- [ ] Commit y push realizados
- [ ] Render rebuild completado
- [ ] Backend funciona sin errores
- [ ] Frontend desplegado en Netlify
- [ ] Aplicación completa funcional

---

## 📊 Ventajas de MongoDB Atlas

✅ **Gratis para siempre** (512 MB)
✅ **Backups automáticos**
✅ **Monitoreo incluido**
✅ **Escalable** cuando lo necesites
✅ **Coherente con tu PEC2**

---

## 🔗 URLs Importantes

- **MongoDB Atlas:** https://cloud.mongodb.com
- **Backend Render:** https://runtogether-backend-kh2u.onrender.com
- **Dashboard Render:** https://dashboard.render.com
- **Dashboard Netlify:** https://app.netlify.com
- **Repositorio GitHub:** https://github.com/eduuber777/runtogether-tfg

---

## 🆘 Solución de Problemas

### Error: "Authentication failed"
- Verifica que la contraseña en el connection string sea correcta
- Asegúrate de que el usuario tiene permisos de lectura/escritura

### Error: "IP not whitelisted"
- Ve a Network Access en MongoDB Atlas
- Agrega 0.0.0.0/0 para permitir todas las IPs

### Error: "Cannot connect to MongoDB"
- Verifica que el connection string esté completo
- Asegúrate de que incluye el nombre de la base de datos
- Revisa que DATABASE_URL esté configurada en Render

---

## 🎉 ¡Listo!

Tu aplicación ahora usa MongoDB Atlas (gratis) y es coherente con tu documentación del PEC2.
