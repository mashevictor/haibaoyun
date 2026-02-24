@echo off
title Start Web Server
cd /d "%~dp0"

set PYCMD=python
py --version >nul 2>&1
if not errorlevel 1 set PYCMD=py
if "%PYCMD%"=="python" python --version >nul 2>&1
if errorlevel 1 (
    echo Python not found. Please run "use Node start.bat" or install Python.
    pause
    exit /b 1
)

if not exist "index.html" (
    echo index.html not found. Run this bat in the project folder.
    pause
    exit /b 1
)

set PORT=5500
netstat -ano | findstr ":5500 " >nul 2>&1
if not errorlevel 1 (
    set PORT=5501
    echo Port 5500 in use, using 5501
)
echo Starting server on port %PORT%...
echo.

start "WebServer" cmd /k "cd /d ""%~dp0"" && echo Website: http://127.0.0.1:%PORT%/index.html && echo Press Ctrl+C to stop && %PYCMD% -m http.server %PORT% --bind 127.0.0.1"

echo Waiting 5 sec...
timeout /t 5 /nobreak >nul

echo Opening browser...
start http://127.0.0.1:%PORT%/index.html

echo.
echo Done. Open in browser: http://127.0.0.1:%PORT%/index.html
echo Press any key to close this window.
pause >nul
