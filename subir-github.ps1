# Script interactivo para subir RunTogether a GitHub
# Autor: Eduard Berlanga - TFG UOC 2025

Clear-Host
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                            ║" -ForegroundColor Cyan
Write-Host "║        🚀 SUBIR RUNTOGETHER A GITHUB 🚀                   ║" -ForegroundColor Cyan
Write-Host "║                                                            ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Verificar que estamos en la carpeta correcta
if (-not (Test-Path "package.json" -PathType Leaf) -and -not (Test-Path "frontend" -PathType Container)) {
    Write-Host "❌ Error: No estás en la carpeta RunTogether-TFG" -ForegroundColor Red
    Write-Host "Por favor, ejecuta este script desde la carpeta del proyecto" -ForegroundColor Yellow
    Read-Host "Presiona Enter para salir"
    exit
}

Write-Host "✅ Carpeta del proyecto verificada" -ForegroundColor Green
Write-Host ""

# PASO 1: Configurar identidad de Git
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  PASO 1: CONFIGURAR TU IDENTIDAD EN GIT" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

$nombre = Read-Host "📝 Ingresa tu nombre completo (ej: Eduard Berlanga)"
$email = Read-Host "📧 Ingresa tu email de GitHub (ej: tu-email@gmail.com)"

Write-Host ""
Write-Host "Configurando Git..." -ForegroundColor Cyan

git config --global user.name "$nombre"
git config --global user.email "$email"

Write-Host "✅ Identidad configurada correctamente" -ForegroundColor Green
Write-Host "   Nombre: $nombre" -ForegroundColor White
Write-Host "   Email: $email" -ForegroundColor White
Write-Host ""

Start-Sleep -Seconds 1

# PASO 2: Crear commit
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  PASO 2: CREAR COMMIT INICIAL" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Write-Host "Creando commit..." -ForegroundColor Cyan
git commit -m "Initial commit: RunTogether TFG - Frontend + Backend completo"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit creado exitosamente" -ForegroundColor Green
} else {
    Write-Host "❌ Error al crear commit" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit
}

Write-Host ""
Start-Sleep -Seconds 1

# PASO 3: Crear repositorio en GitHub
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  PASO 3: CREAR REPOSITORIO EN GITHUB" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Write-Host "⚠️  IMPORTANTE: Ahora debes crear el repositorio en GitHub" -ForegroundColor Yellow
Write-Host ""
Write-Host "Sigue estos pasos:" -ForegroundColor White
Write-Host "  1. Ve a: https://github.com/new" -ForegroundColor Cyan
Write-Host "  2. Nombre del repositorio: RunTogether-TFG" -ForegroundColor Cyan
Write-Host "  3. Descripción: Plataforma de eventos de running - TFG UOC 2025" -ForegroundColor Cyan
Write-Host "  4. Selecciona: Público o Privado (tu elección)" -ForegroundColor Cyan
Write-Host "  5. ❌ NO marques 'Add a README file'" -ForegroundColor Red
Write-Host "  6. ❌ NO marques 'Add .gitignore'" -ForegroundColor Red
Write-Host "  7. Click en 'Create repository'" -ForegroundColor Cyan
Write-Host ""

# Abrir navegador automáticamente
Write-Host "¿Quieres que abra GitHub en tu navegador? (s/n): " -NoNewline -ForegroundColor Yellow
$abrirNav = Read-Host

if ($abrirNav -eq "s" -or $abrirNav -eq "S") {
    Start-Process "https://github.com/new"
    Write-Host "✅ Navegador abierto" -ForegroundColor Green
}

Write-Host ""
Write-Host "Cuando hayas creado el repositorio, presiona Enter para continuar..." -ForegroundColor Yellow
Read-Host

# PASO 4: Conectar con GitHub
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  PASO 4: CONECTAR CON GITHUB" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

$usuario = Read-Host "👤 Ingresa tu usuario de GitHub"

Write-Host ""
Write-Host "Conectando con GitHub..." -ForegroundColor Cyan

git remote add origin "https://github.com/$usuario/RunTogether-TFG.git"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Repositorio remoto configurado" -ForegroundColor Green
} else {
    Write-Host "⚠️  El remote ya existe, actualizando..." -ForegroundColor Yellow
    git remote set-url origin "https://github.com/$usuario/RunTogether-TFG.git"
}

Write-Host ""
Start-Sleep -Seconds 1

# PASO 5: Subir código
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  PASO 5: SUBIR CÓDIGO A GITHUB" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Write-Host "⚠️  IMPORTANTE: Autenticación" -ForegroundColor Yellow
Write-Host ""
Write-Host "Si te pide contraseña, necesitas un Personal Access Token:" -ForegroundColor White
Write-Host "  1. Ve a: https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host "  2. Click 'Generate new token (classic)'" -ForegroundColor Cyan
Write-Host "  3. Nombre: RunTogether-TFG" -ForegroundColor Cyan
Write-Host "  4. Marca: 'repo' (todos los permisos)" -ForegroundColor Cyan
Write-Host "  5. Click 'Generate token'" -ForegroundColor Cyan
Write-Host "  6. COPIA EL TOKEN (solo se muestra una vez)" -ForegroundColor Red
Write-Host "  7. Úsalo como contraseña cuando Git te lo pida" -ForegroundColor Cyan
Write-Host ""

Write-Host "¿Quieres que abra la página de tokens? (s/n): " -NoNewline -ForegroundColor Yellow
$abrirTokens = Read-Host

if ($abrirTokens -eq "s" -or $abrirTokens -eq "S") {
    Start-Process "https://github.com/settings/tokens"
    Write-Host "✅ Página de tokens abierta" -ForegroundColor Green
    Write-Host ""
    Write-Host "Cuando tengas tu token, presiona Enter para continuar..." -ForegroundColor Yellow
    Read-Host
}

Write-Host ""
Write-Host "Subiendo código a GitHub..." -ForegroundColor Cyan
Write-Host ""

git push -u origin main

Write-Host ""

if ($LASTEXITCODE -eq 0) {
    Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║                                                            ║" -ForegroundColor Green
    Write-Host "║              🎉 ¡ÉXITO! PROYECTO EN GITHUB 🎉             ║" -ForegroundColor Green
    Write-Host "║                                                            ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    Write-Host "✅ Tu proyecto está disponible en:" -ForegroundColor Green
    Write-Host "   https://github.com/$usuario/RunTogether-TFG" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Ahora puedes:" -ForegroundColor White
    Write-Host "  ✓ Compartir el link con tu tutor" -ForegroundColor Green
    Write-Host "  ✓ Conectar con Netlify para deploy automático" -ForegroundColor Green
    Write-Host "  ✓ Colaborar con otros" -ForegroundColor Green
    Write-Host "  ✓ Tener backup en la nube" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "¿Quieres abrir tu repositorio en el navegador? (s/n): " -NoNewline -ForegroundColor Yellow
    $abrirRepo = Read-Host
    
    if ($abrirRepo -eq "s" -or $abrirRepo -eq "S") {
        Start-Process "https://github.com/$usuario/RunTogether-TFG"
    }
    
} else {
    Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Red
    Write-Host "║                                                            ║" -ForegroundColor Red
    Write-Host "║              ⚠️  ERROR AL SUBIR CÓDIGO ⚠️                 ║" -ForegroundColor Red
    Write-Host "║                                                            ║" -ForegroundColor Red
    Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Red
    Write-Host ""
    Write-Host "Posibles causas:" -ForegroundColor Yellow
    Write-Host "  • Necesitas un Personal Access Token (no contraseña)" -ForegroundColor White
    Write-Host "  • El repositorio no existe en GitHub" -ForegroundColor White
    Write-Host "  • El nombre de usuario es incorrecto" -ForegroundColor White
    Write-Host "  • Problemas de conexión a internet" -ForegroundColor White
    Write-Host ""
    Write-Host "Solución:" -ForegroundColor Yellow
    Write-Host "  1. Verifica que creaste el repositorio en GitHub" -ForegroundColor White
    Write-Host "  2. Obtén un Personal Access Token en:" -ForegroundColor White
    Write-Host "     https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host "  3. Vuelve a ejecutar: git push -u origin main" -ForegroundColor White
    Write-Host ""
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "Presiona Enter para salir..." -ForegroundColor White
Read-Host
