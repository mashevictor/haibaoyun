@echo off
chcp 65001 >nul
title PowerVerse Chain - 自动打开并录制

echo ========================================
echo PowerVerse Chain 网站自动启动
echo ========================================
echo.

cd /d "%~dp0"

REM 检查Python是否安装
python --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到Python
    echo 请先安装Python: https://www.python.org/
    pause
    exit /b
)

echo 正在启动服务器和浏览器...
echo.

REM 启动Python脚本
python "自动打开并录制.py"

pause
