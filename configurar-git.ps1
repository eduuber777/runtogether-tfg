# Script para configurar Git y subir a GitHub

Write-Host "=== CONFIGURACIÓN DE GIT Y GITHUB ===" -ForegroundColor Green
Write-Host ""

# Paso 1: Configurar identidad
Write-Host "Paso 1: Configurar tu identidad en Git" -ForegroundColor Cyan
$nombre = Read-Host "Ingresa tu nombre completo (ej: Eduard Berlanga)"
$email = Read-Host "Ingresa tu email de GitHub (ej: tu-email@gmail.com)"

git config --global user.name "$nombre"
git config --global user.email "$email"

Write-Host "✅ Identidad configurada" -ForegroundColor Green
Write-Host ""

# Paso 2: Hacer commit
Write-Host "Paso 2: Creando commit inicial..." -ForegroundColor Cyan
git commit -m "Initial commit: RunTogether TFG - Frontend + Backend completo"
Write-Host "✅ Commit creado" -ForegroundColor Green
Write-Host ""

# Paso 3: Conectar con GitHub
Write-Host "Paso 3: Conectar con GitHub" -ForegroundColor Cyan
Write-Host ""
Write-Host "IMPORTANTE: Primero crea el repositorio en GitHub:" -ForegroundColor Yellow
Write-Host "1. Ve a https://github.com/new" -ForegroundColor White
Write-Host "2. Nombre: RunTogether-TFG" -ForegroundColor White
Write-Host "3. NO marques 'Add README' ni '.gitignore'" -ForegroundColor White
Write-Host "4. Click en 'Create repository'" -ForegroundColor White
Write-Host ""

$continuar = Read-Host "¿Ya creaste el repositorio en GitHub? (s/n)"

if ($continuar -eq "s" -or $continuar -eq "S") {
    $usuario = Read-Host "Ingresa tu usuario de GitHub"
    
    Write-Host ""
    Write-Host "Conectando con GitHub..." -ForegroundColor Cyan
    git remote add origin "https://github.com/$usuario/RunTogether-TFG.git"
    
    Write-Host ""
    Write-Host "Subiendo código a GitHub..." -ForegroundColor Cyan
    Write-Host ""
    Write-Host "NOTA: Si te pide contraseña, usa un Personal Access Token" -ForegroundColor Yellow
    Write-Host "Créalo en: https://github.com/settings/tokens" -ForegroundColor White
    Write-Host ""
    
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "🎉 ¡ÉXITO! Tu proyecto está en GitHub" -ForegroundColor Green
        Write-Host ""
        Write-Host "Ver tu repositorio en:" -ForegroundColor Cyan
        Write-Host "https://github.com/$usuario/RunTogether-TFG" -ForegroundColor White
    } else {
        Write-Host ""
        Write-Host "⚠️ Hubo un error al subir. Posibles causas:" -ForegroundColor Yellow
        Write-Host "- Necesitas un Personal Access Token (no contraseña)" -ForegroundColor White
        Write-Host "- El repositorio no existe en GitHub" -ForegroundColor White
        Write-Host "- El nombre de usuario es incorrecto" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "Cuando hayas creado el repositorio, ejecuta:" -ForegroundColor Cyan
    Write-Host "git remote add origin https://github.com/TU-USUARIO/RunTogether-TFG.git" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
}

Write-Host ""
Write-Host "Presiona Enter para salir..."
Read-Host
