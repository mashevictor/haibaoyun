@echo off
chcp 65001 > nul
title 图片质量优化工具
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║              图片质量优化工具                          ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 功能说明：
echo   ✓ 提升图片清晰度
echo   ✓ 使用高质量压缩（JPEG 90%%）
echo   ✓ 优化 PNG 文件
echo   ✓ 自动保持合理文件大小
echo.
echo ════════════════════════════════════════════════════════
echo.

cd /d "%~dp0"

REM 检查 Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：未找到 Python！
    echo.
    pause
    exit /b 1
)
echo [1/3] ✓ Python 已安装
echo.

REM 检查 Pillow 库
echo [2/3] 检查 Pillow 库...
python -c "from PIL import Image" >nul 2>&1
if errorlevel 1 (
    echo ⚠ Pillow 未安装，正在安装...
    echo.
    pip install Pillow
    if errorlevel 1 (
        echo.
        echo ❌ 安装失败！
        echo 请手动运行: pip install Pillow
        pause
        exit /b 1
    )
    echo ✓ Pillow 已安装
) else (
    echo ✓ Pillow 已安装
)
echo.

REM 检查 images 目录
echo [3/3] 检查图片目录...
if not exist "images" (
    echo ❌ 错误：未找到 images 目录！
    pause
    exit /b 1
)
echo ✓ images 目录存在
echo.

echo ════════════════════════════════════════════════════════
echo.
echo 准备优化图片...
echo.
echo 警告：
echo   • 原图片将被优化后的版本替换
echo   • 建议先备份重要图片
echo.

REM 运行优化脚本
python 优化图片质量.py

if errorlevel 1 (
    echo.
    echo ❌ 优化失败！
    pause
    exit /b 1
)

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║              ✓ 优化完成！                             ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 图片已优化，现在可以：
echo   1. 双击运行"一键启动网站.bat"查看效果
echo   2. 在浏览器中刷新页面（Ctrl+F5 强制刷新）
echo.
echo ════════════════════════════════════════════════════════
echo.
pause
