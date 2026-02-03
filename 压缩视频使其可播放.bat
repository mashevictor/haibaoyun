@echo off
chcp 65001 > nul
title 视频压缩 - 保持尺寸，适配网页播放
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║        视频压缩工具 - 让网页视频正常播放               ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 功能说明：
echo   ✓ 保持视频原始尺寸（分辨率不变）
echo   ✓ 使用 H.264 编码（所有浏览器兼容）
echo   ✓ 优化为网页播放格式
echo   ✓ 支持快速加载和流式播放
echo.
echo ════════════════════════════════════════════════════════
echo.

REM 切换到脚本目录
cd /d "%~dp0"

REM 检查 FFmpeg
echo [检查] 验证 FFmpeg 安装...
ffmpeg -version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ 错误：未找到 FFmpeg！
    echo.
    echo 请先安装 FFmpeg：
    echo   1. 双击运行 install_ffmpeg.py
    echo   2. 或运行 install-ffmpeg.bat
    echo.
    pause
    exit /b 1
)
echo ✓ FFmpeg 已安装
echo.

REM 检查 video 文件夹
if not exist "video" (
    echo ❌ 错误：未找到 video 文件夹！
    echo.
    pause
    exit /b 1
)

REM 检查是否有视频文件
dir /b "video\*.mp4" >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：video 文件夹中没有 MP4 文件！
    echo.
    pause
    exit /b 1
)

echo [扫描] 找到以下视频文件：
echo.
dir /b "video\*.mp4" | findstr /v "_web.mp4" | findstr /v "_compressed.mp4"
echo.
echo ════════════════════════════════════════════════════════
echo.

REM 运行压缩脚本
echo [压缩] 开始压缩视频...
echo.
echo 这可能需要几分钟，请耐心等待...
echo.

python 压缩网站视频.py

if errorlevel 1 (
    echo.
    echo ❌ 压缩失败！
    echo.
    echo 可能的原因：
    echo   1. Python 未安装
    echo   2. 视频文件损坏
    echo   3. 磁盘空间不足
    echo.
    pause
    exit /b 1
)

echo.
echo ════════════════════════════════════════════════════════
echo.
echo ✓ 压缩完成！
echo.
echo 压缩后的视频保存在 video 文件夹中
echo 文件名格式：原文件名_web.mp4
echo.
echo 例如：
echo   视频1.mp4  →  视频1_web.mp4
echo.
echo ════════════════════════════════════════════════════════
echo.
echo 下一步：
echo   1. 双击运行"一键启动网站.bat"启动网站
echo   2. 或访问测试页面查看效果
echo.
pause
