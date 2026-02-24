@echo off
title Open page
cd /d "%~dp0"
echo Current folder: %cd%
echo.
if not exist "index.html" (
    echo index.html not found.
    goto :end
)
echo Opening index.html in browser...
start "" "%~dp0index.html"
echo Done.
:end
echo Press any key to close...
pause >nul
