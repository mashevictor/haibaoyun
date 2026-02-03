@echo off
chcp 65001 >nul
echo ========================================
echo 正在启动 Web 服务器...
echo ========================================
echo.

cd /d "%~dp0"

echo 检查 Python 环境...
python --version
if errorlevel 1 (
    echo 错误: 未找到 Python！
    echo 请先安装 Python 3.x
    pause
    exit /b 1
)

echo.
echo 检查端口 8000 是否被占用...
netstat -ano | findstr :8000 >nul
if not errorlevel 1 (
    echo 警告: 端口 8000 已被占用！
    echo 尝试使用端口 8080...
    echo.
    echo ========================================
    echo Web 服务器已启动！
    echo ========================================
    echo 服务器地址: http://localhost:8080
    echo 主页地址: http://localhost:8080/index.html
    echo ========================================
    echo 按 Ctrl+C 停止服务器
    echo ========================================
    echo.
    python -m http.server 8080
) else (
    echo 端口 8000 可用
    echo.
    echo ========================================
    echo Web 服务器已启动！
    echo ========================================
    echo 服务器地址: http://localhost:8000
    echo 主页地址: http://localhost:8000/index.html
    echo ========================================
    echo 按 Ctrl+C 停止服务器
    echo ========================================
    echo.
    python -m http.server 8000
)

pause
