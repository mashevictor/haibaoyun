@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo.
echo ═══════════════════════════════════════════
echo    正在启动本地服务器...
echo ═══════════════════════════════════════════
echo.

REM 检查 Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：未找到 Python
    echo 请先安装 Python: https://www.python.org/downloads/
    pause
    exit /b 1
)

echo ✓ Python 已安装
echo.

REM 检查 index.html
if not exist "index.html" (
    echo ❌ 警告：未找到 index.html 文件
    echo 当前目录：%CD%
    echo.
)

REM 启动服务器
echo 正在启动服务器...
echo 服务器地址：http://localhost:8000
echo.
echo 提示：
echo   - 在浏览器中访问：http://localhost:8000
echo   - 按 Ctrl+C 可以停止服务器
echo   - 硬件工厂页面：http://localhost:8000/pages/hardware-factory.html
echo.
echo ═══════════════════════════════════════════
echo.

start http://localhost:8000
timeout /t 2 /nobreak > nul

python -m http.server 8000
