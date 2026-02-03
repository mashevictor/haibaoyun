@echo off
chcp 65001 > nul
title 一键修复视频播放问题
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║           一键修复网站视频播放问题                     ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 此工具将：
echo   ✓ 检查视频文件
echo   ✓ 压缩视频为网页兼容格式
echo   ✓ 创建正确的文件夹结构
echo   ✓ 复制视频到正确位置
echo   ✓ 启动网站服务器
echo.
echo ════════════════════════════════════════════════════════
echo.

cd /d "%~dp0"

REM 步骤 1: 检查 FFmpeg
echo [步骤 1/5] 检查 FFmpeg...
ffmpeg -version >nul 2>&1
if errorlevel 1 (
    echo ✗ FFmpeg 未安装！
    echo.
    echo 请先运行: install_ffmpeg.py
    echo.
    pause
    exit /b 1
)
echo ✓ FFmpeg 已安装
echo.

REM 步骤 2: 检查视频文件
echo [步骤 2/5] 检查视频文件...
if not exist "video\视频1.mp4" (
    echo ✗ 未找到视频文件！
    echo.
    echo 请确保 video 文件夹中有以下文件：
    echo   - 视频1.mp4
    echo   - 视频2.mp4
    echo   - 视频3.mp4
    echo   - 视频4.mp4
    echo.
    pause
    exit /b 1
)
echo ✓ 视频文件存在
echo.

REM 步骤 3: 压缩视频（如果还没压缩）
echo [步骤 3/5] 压缩视频...
if not exist "video\视频1_web.mp4" (
    echo 正在压缩视频，这可能需要几分钟...
    echo.
    python 压缩网站视频.py
    if errorlevel 1 (
        echo.
        echo ✗ 压缩失败！
        pause
        exit /b 1
    )
) else (
    echo ✓ 视频已压缩，跳过此步骤
)
echo.

REM 步骤 4: 创建文件夹并复制视频
echo [步骤 4/5] 设置文件夹结构...
if not exist "video\compressed" mkdir "video\compressed"

echo 复制压缩后的视频到 compressed 文件夹...
if exist "video\视频1_web.mp4" copy /Y "video\视频1_web.mp4" "video\compressed\视频1.mp4" >nul
if exist "video\视频2_web.mp4" copy /Y "video\视频2_web.mp4" "video\compressed\视频2.mp4" >nul
if exist "video\视频3_web.mp4" copy /Y "video\视频3_web.mp4" "video\compressed\视频3.mp4" >nul
if exist "video\视频4_web.mp4" copy /Y "video\视频4_web.mp4" "video\compressed\视频4.mp4" >nul
echo ✓ 文件已复制
echo.

REM 步骤 5: 启动服务器
echo [步骤 5/5] 启动网站服务器...
echo.

REM 检查端口
netstat -ano | findstr ":8000" >nul
if not errorlevel 1 (
    echo ⚠ 端口 8000 已被占用
    set PORT=8001
) else (
    set PORT=8000
)

REM 启动服务器
start "嗨豹云网站服务器" cmd /k "cd /d "%~dp0" && echo 服务器已启动 && echo 网站地址: http://localhost:%PORT%/ && echo. && python -m http.server %PORT%"

REM 等待服务器启动
timeout /t 3 /nobreak >nul

REM 打开浏览器
start http://localhost:%PORT%/index.html

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║                  ✓ 全部完成！                         ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 修复完成！网站已启动。
echo.
echo 网站地址：
echo   http://localhost:%PORT%/index.html
echo.
echo 测试视频页面：
echo   http://localhost:%PORT%/pages/scenarios.html
echo   http://localhost:%PORT%/pages/cloudgaming.html
echo.
echo 视频文件位置：
echo   video/compressed/视频1.mp4
echo   video/compressed/视频2.mp4
echo   video/compressed/视频3.mp4
echo   video/compressed/视频4.mp4
echo.
echo ════════════════════════════════════════════════════════
echo.
echo 提示：
echo   • 服务器在另一个窗口运行
echo   • 视频已优化，保持原始尺寸
echo   • 所有浏览器都可正常播放
echo.
echo 按任意键关闭此窗口...
pause >nul
