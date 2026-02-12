@echo off
chcp 65001 > nul

REM 切换到脚本所在目录
cd /d "%~dp0"

REM 检查 Python（优先 py 启动器，其次 python）
set PYCMD=python
py --version >nul 2>&1
if not errorlevel 1 set PYCMD=py
if "%PYCMD%"=="python" python --version >nul 2>&1
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

REM 检测可用端口（5500 或 5501）
set PORT=5500
netstat -ano | findstr ":5500 " >nul 2>&1
if not errorlevel 1 (
    set PORT=5501
    echo 端口 5500 已被占用，改用端口 5501
)
echo 使用端口 %PORT% 启动...
echo.

REM 新窗口先 chcp 65001 再启动，避免中文乱码；窗口内用英文提示
start "WebServer" cmd /k "chcp 65001 >nul && cd /d ""%~dp0"" && echo. && echo Website: http://localhost:%PORT%/index.html && echo. && echo Press Ctrl+C to stop server && echo. && %PYCMD% -m http.server %PORT%"

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
echo 要看 Logo/视频 像素位置调试，请访问：
echo   http://localhost:%PORT%/index.html?debug=rect
echo.
echo 注意：不能只输入 localhost，必须带 :%PORT% 和 /index.html
echo.
timeout /t 3 /nobreak >nul
exit
