@echo off
chcp 65001 >nul
echo ========================================
echo 重启Web服务器
echo ========================================
echo.

echo 正在停止现有服务器进程...
for /f "tokens=2" %%a in ('netstat -ano ^| findstr :8000 ^| findstr LISTENING') do (
    echo 发现进程 %%a，正在终止...
    taskkill /F /PID %%a >nul 2>&1
)

timeout /t 2 >nul

echo.
echo 正在启动新服务器...
start /B python start_server.py

timeout /t 3 >nul

echo.
echo ========================================
echo ✅ 服务器已重启！
echo ========================================
echo.
echo 服务器地址: http://localhost:8000
echo 主页地址: http://localhost:8000/index.html
echo.
echo 按任意键退出...
pause >nul
