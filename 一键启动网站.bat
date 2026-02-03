@echo off
chcp 65001 > nul

REM 切换到脚本所在目录
cd /d "%~dp0"

REM 检查 Python
python --version >nul 2>&1
if errorlevel 1 (
    echo 错误：未找到 Python！
    echo 请确保已安装 Python 并添加到系统 PATH。
    pause
    exit /b 1
)

REM 检查 index.html
if not exist "index.html" (
    echo 错误：未找到 index.html！
    echo 请确保在正确的目录中运行此脚本。
    pause
    exit /b 1
)

REM 启动服务器（在新窗口）
start "嗨豹云网站服务器" cmd /k "cd /d "%~dp0" && echo 服务器正在启动... && echo. && echo 网站地址: http://localhost:8000/index.html && echo. && echo 按 Ctrl+C 可停止服务器 && echo. && python -m http.server 8000"

REM 等待 3 秒让服务器启动
echo 等待服务器启动...
timeout /t 3 /nobreak >nul

REM 打开浏览器
echo 正在打开浏览器...
start http://localhost:8000/index.html

echo.
echo ✓ 完成！
echo.
echo 服务器已在另一个窗口启动
echo 浏览器应该会自动打开网站
echo.
echo 如果浏览器没有自动打开，请手动访问：
echo http://localhost:8000/index.html
echo.

REM 延迟 2 秒后自动关闭
timeout /t 2 /nobreak >nul
exit
