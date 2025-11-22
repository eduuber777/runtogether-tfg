# 👥 USUARIOS DE PRUEBA - RUNTOGETHER

## 🔐 CREDENCIALES PARA TESTING

La aplicación **NO tiene usuarios predefinidos**. Debes registrarte para crear una cuenta.

---

## ✅ CÓMO CREAR USUARIOS DE PRUEBA

### Opción 1: Registro Manual

1. Abre la aplicación
2. Click en "Registrarse"
3. Completa el formulario:
   - Nombre: Tu nombre
   - Email: tu-email@ejemplo.com
   - Contraseña: tu-contraseña
   - Rol: Corredor o Organizador

---

## 📝 USUARIOS SUGERIDOS PARA TESTING

Puedes crear estos usuarios para probar la aplicación:

### Usuario 1 - Organizador
```
Nombre: Juan Organizador
Email: organizador@test.com
Contraseña: Test123456
Rol: ORGANIZADOR
```

**Funcionalidades:**
- ✅ Crear eventos
- ✅ Editar sus eventos
- ✅ Eliminar sus eventos
- ✅ Ver inscripciones a sus eventos

---

### Usuario 2 - Corredor
```
Nombre: María Corredora
Email: corredor@test.com
Contraseña: Test123456
Rol: USER (Corredor)
```

**Funcionalidades:**
- ✅ Ver eventos disponibles
- ✅ Inscribirse a eventos
- ✅ Ver sus inscripciones
- ✅ Cancelar inscripciones

---

### Usuario 3 - Otro Corredor
```
Nombre: Pedro Runner
Email: pedro@test.com
Contraseña: Test123456
Rol: USER (Corredor)
```

---

## 🧪 FLUJO DE PRUEBA COMPLETO

### 1. Crear Organizador
```
1. Registrarse como "Juan Organizador"
2. Rol: ORGANIZADOR
3. Login
```

### 2. Crear Evento
```
1. Click en "Crear Evento"
2. Título: "Carrera Popular 10K"
3. Descripción: "Carrera por el parque central"
4. Fecha: [Fecha futura]
5. Ubicación: "Parque Central, Madrid"
6. Distancia: 10 km
7. Máx. Participantes: 50
8. Guardar
```

### 3. Crear Corredor
```
1. Logout
2. Registrarse como "María Corredora"
3. Rol: USER (Corredor)
4. Login
```

### 4. Inscribirse al Evento
```
1. Ver eventos disponibles
2. Click en "Carrera Popular 10K"
3. Click en "Inscribirse al Evento"
4. Verificar inscripción en "Mi Perfil"
```

### 5. Verificar como Organizador
```
1. Logout
2. Login como "Juan Organizador"
3. Ver evento creado
4. Verificar inscripciones
```

---

## 🔑 NOTAS IMPORTANTES

### Contraseñas
- **Mínimo:** 6 caracteres
- **Recomendado para testing:** Test123456
- **Producción:** Usa contraseñas seguras

### Emails
- Deben ser únicos
- Formato válido requerido
- No se envían emails reales (es solo para testing)

### Roles
- **USER:** Puede inscribirse a eventos
- **ORGANIZER:** Puede crear y gestionar eventos
- **ADMIN:** (No implementado en esta versión)

---

## 🗄️ BASE DE DATOS

Los usuarios se guardan en MongoDB con:
- ✅ Contraseñas hasheadas (bcrypt)
- ✅ Tokens JWT para autenticación
- ✅ Validación de emails únicos

---

## 🔄 RESETEAR DATOS

Si quieres empezar de cero:

### Opción 1: Borrar base de datos
```bash
# En MongoDB
use runtogether
db.users.deleteMany({})
db.events.deleteMany({})
db.registrations.deleteMany({})
```

### Opción 2: Crear nueva base de datos
Cambia el nombre en `.env`:
```
DATABASE_URL="mongodb://localhost:27017/runtogether_test"
```

---

## 📧 EMAILS DE PRUEBA SUGERIDOS

Para testing local, usa estos emails:
- organizador1@test.com
- organizador2@test.com
- corredor1@test.com
- corredor2@test.com
- corredor3@test.com
- admin@test.com

---

## ✅ CHECKLIST DE PRUEBAS

### Como Organizador:
- [ ] Registrarse
- [ ] Login
- [ ] Crear evento
- [ ] Editar evento propio
- [ ] Eliminar evento propio
- [ ] Ver inscripciones a mis eventos
- [ ] Logout

### Como Corredor:
- [ ] Registrarse
- [ ] Login
- [ ] Ver lista de eventos
- [ ] Ver detalle de evento
- [ ] Inscribirse a evento
- [ ] Ver mis inscripciones en perfil
- [ ] Cancelar inscripción
- [ ] Logout

### Validaciones:
- [ ] No puedo inscribirme dos veces al mismo evento
- [ ] No puedo editar eventos de otros
- [ ] No puedo eliminar eventos de otros
- [ ] Email debe ser único
- [ ] Contraseña mínimo 6 caracteres

---

## 🎯 DATOS DE EJEMPLO PARA EVENTOS

### Evento 1:
```
Título: Carrera Popular 10K
Descripción: Carrera por el parque central de la ciudad
Fecha: 2025-06-15 09:00
Ubicación: Parque Central, Madrid
Distancia: 10 km
Máx. Participantes: 100
```

### Evento 2:
```
Título: Media Maratón Ciudad
Descripción: Media maratón por las calles principales
Fecha: 2025-07-20 08:00
Ubicación: Plaza Mayor, Barcelona
Distancia: 21.1 km
Máx. Participantes: 500
```

### Evento 3:
```
Título: Trail Running Montaña
Descripción: Carrera de montaña nivel intermedio
Fecha: 2025-08-10 07:00
Ubicación: Sierra de Guadarrama
Distancia: 15 km
Máx. Participantes: 50
```

---

## 🚀 INICIO RÁPIDO

**Para empezar a probar en 2 minutos:**

1. Inicia el backend y frontend
2. Abre http://localhost:5173
3. Click "Registrarse"
4. Crea usuario organizador
5. Crea un evento
6. Logout
7. Registra usuario corredor
8. Inscríbete al evento
9. ¡Listo! ✅

---

**Recuerda:** Esta es una aplicación de prueba académica. En producción deberías implementar:
- Verificación de email
- Recuperación de contraseña
- Autenticación de dos factores
- Límites de intentos de login
- Captcha en registro
