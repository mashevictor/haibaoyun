@echo off
chcp 65001 > nul

REM 切换到脚本所在目录
cd /d "%~dp0"

REM 检查 Python
python --version >nul 2>&1
if errorlevel 1 (
    echo 错误：未找到 Python！
    echo 请双击运行 使用Node启动.bat 或用 npm 安装后运行 npx serve
    pause
    exit /b 1
)

REM 检查 index.html
if not exist "index.html" (
    echo 错误：未找到 index.html！请在正确的项目目录中运行此脚本。
    pause
    exit /b 1
)

REM 检测可用端口（8000 或 8001）
set PORT=8000
netstat -ano | findstr ":8000 " >nul 2>&1
if not errorlevel 1 (
    set PORT=8001
    echo 端口 8000 已被占用，使用端口 8001
)

REM 启动服务器（在新窗口，保持窗口不关）
start "嗨豹云网站服务器" cmd /k "cd /d "%~dp0" && echo. && echo 网站地址: http://localhost:%PORT%/index.html && echo. && echo 按 Ctrl+C 可停止服务器 && echo. && python -m http.server %PORT%"

REM 等待 5 秒让服务器启动
echo 正在启动服务器（约 5 秒）...
timeout /t 5 /nobreak >nul

REM 打开浏览器（必须带端口号）
echo 正在打开浏览器...
start http://localhost:%PORT%/index.html

echo.
echo 完成！
echo.
echo 若浏览器未打开，请手动在地址栏输入（必须带端口）：
echo   http://localhost:%PORT%/index.html
echo.
echo 注意：不能只输入 localhost，必须带 :%PORT% 和 /index.html
echo.
timeout /t 3 /nobreak >nul
exit
