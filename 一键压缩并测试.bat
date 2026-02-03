@echo off
chcp 65001 > nul
title 网站视频压缩 + 启动服务

cls
echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║        嗨豹云网站 - 视频压缩 + 服务启动               ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 功能：
echo  ✓ 压缩 video 文件夹中的所有视频
echo  ✓ 保持原始尺寸（分辨率不变）
echo  ✓ 极致压缩，适合网站快速加载
echo  ✓ 自动启动本地服务器
echo  ✓ 在浏览器中对比压缩效果
echo.
echo ════════════════════════════════════════════════════════
echo.

REM 检查 ffmpeg 是否安装
ffmpeg -version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：未找到 ffmpeg！
    echo.
    echo 请先安装 ffmpeg：
    echo   1. 双击运行 install_ffmpeg.py
    echo   2. 或运行 install-ffmpeg.bat
    echo.
    pause
    exit /b 1
)

echo ✓ FFmpeg 已安装
echo.
echo ════════════════════════════════════════════════════════
echo.
echo [步骤 1/3] 开始压缩视频...
echo.

REM 运行压缩脚本
python 压缩网站视频.py

if errorlevel 1 (
    echo.
    echo ❌ 压缩过程出现问题！
    echo.
    pause
    exit /b 1
)

echo.
echo ════════════════════════════════════════════════════════
echo.
echo [步骤 2/3] 启动本地 HTTP 服务器...
echo.

REM 查找可用端口
set PORT=8000
netstat -ano | findstr ":8000" >nul
if not errorlevel 1 (
    set PORT=8001
    echo 端口 8000 被占用，使用端口 8001
)

REM 启动服务器（在新窗口）
start "嗨豹云本地服务器 - 端口 %PORT%" cmd /k "python -m http.server %PORT%"

REM 等待服务器启动
echo 等待服务器启动...
timeout /t 3 /nobreak > nul

echo.
echo ════════════════════════════════════════════════════════
echo.
echo [步骤 3/3] 打开浏览器测试...
echo.

REM 打开测试页面
start http://localhost:%PORT%/测试视频加载.html

REM 等待一下
timeout /t 2 /nobreak > nul

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║                  ✓ 全部完成！                         ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 服务已启动，浏览器已打开！
echo.
echo 访问地址:
echo   • 测试页面: http://localhost:%PORT%/测试视频加载.html
echo   • 网站首页: http://localhost:%PORT%/index.html
echo.
echo 压缩后的视频:
echo   • 位置: video 文件夹
echo   • 命名: 原文件名_web.mp4
echo.
echo 提示:
echo   • 在测试页面可以对比压缩前后的加载速度
echo   • 服务器在另一个窗口运行，关闭那个窗口可停止服务
echo   • 压缩后的视频已优化，支持快速加载和预加载
echo.
echo ════════════════════════════════════════════════════════
echo.
echo 按任意键关闭此窗口（服务器会继续运行）...
pause > nul
