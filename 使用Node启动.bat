@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo.
echo 使用 Node 启动本地服务器（端口 8080）...
echo 若未安装 Node，请先安装 https://nodejs.org
echo.

REM 检查 Node
where npx >nul 2>&1
if errorlevel 1 (
    echo 错误：未找到 npx/Node，请安装 Node.js 后重试。
    pause
    exit /b 1
)

if not exist "index.html" (
    echo 错误：未找到 index.html，请在项目目录运行。
    pause
    exit /b 1
)

echo 启动后请在浏览器访问：
echo   http://localhost:8080
echo   http://localhost:8080/index.html
echo.
echo 按 Ctrl+C 可停止服务器
echo.

npx -y serve -l 8080

pause
