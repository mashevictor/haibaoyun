@echo off
title 嗨豹云网站服务器
chcp 65001 > nul
cls

echo.
echo ════════════════════════════════════════
echo     嗨豹云网站 - 启动服务器
echo ════════════════════════════════════════
echo.
echo 正在启动服务器...
echo.

REM 切换到当前目录
cd /d "%~dp0"

REM 显示当前目录
echo 当前目录: %CD%
echo.

REM 启动 HTTP 服务器
echo 启动 Python HTTP 服务器（端口 8000）...
echo.
echo ════════════════════════════════════════
echo     服务器已启动！
echo ════════════════════════════════════════
echo.
echo 网站地址：
echo   http://localhost:8000/index.html
echo.
echo 视频测试页面：
echo   http://localhost:8000/测试视频加载.html
echo.
echo ════════════════════════════════════════
echo.
echo 提示：
echo   • 服务器正在运行，请勿关闭此窗口
echo   • 在浏览器中访问上面的地址
echo   • 按 Ctrl+C 可以停止服务器
echo.
echo ════════════════════════════════════════
echo.

REM 启动服务器
python -m http.server 8000
