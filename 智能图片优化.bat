@echo off
chcp 65001 > nul
title 智能图片优化工具
cls

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║                                                        ║
echo ║            智能图片优化工具                            ║
echo ║                                                        ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo 此工具可以：
echo   ✓ 分析图片质量问题
echo   ✓ 自动选择最佳优化方案
echo   ✓ 提升清晰度
echo   ✓ 保持合理文件大小
echo.
echo ════════════════════════════════════════════════════════
echo.

cd /d "%~dp0"

echo 请选择优化方案：
echo.
echo [1] 快速优化 - 提升现有图片质量（推荐）
echo     • 使用高质量压缩（JPEG 90%%）
echo     • 保持原始尺寸
echo     • 处理时间：1-2 分钟
echo.
echo [2] 深度优化 - 提升图片分辨率到 2x
echo     • 适合高清屏幕
echo     • 图片放大到 2x
echo     • 处理时间：3-5 分钟
echo     • 文件会变大
echo.
echo [3] 全面优化 - 两者都做
echo     • 先提升分辨率
echo     • 再优化压缩质量
echo     • 处理时间：5-8 分钟
echo.
echo [0] 取消
echo.
set /p choice="请输入选项 (0-3): "

if "%choice%"=="0" (
    echo.
    echo 已取消
    pause
    exit /b 0
)

if "%choice%"=="1" goto fast_optimize
if "%choice%"=="2" goto upscale
if "%choice%"=="3" goto full_optimize

echo.
echo 无效选项！
pause
exit /b 1

:fast_optimize
echo.
echo ════════════════════════════════════════════════════════
echo.
echo 正在执行快速优化...
echo.
python 优化图片质量.py
goto done

:upscale
echo.
echo ════════════════════════════════════════════════════════
echo.
echo 正在提升图片分辨率...
echo.
python 提升图片分辨率.py
goto done

:full_optimize
echo.
echo ════════════════════════════════════════════════════════
echo.
echo [步骤 1/2] 提升图片分辨率...
echo.
python 提升图片分辨率.py
if errorlevel 1 (
    echo.
    echo ❌ 分辨率提升失败！
    pause
    exit /b 1
)

echo.
echo ════════════════════════════════════════════════════════
echo.
echo [步骤 2/2] 优化图片质量...
echo.
python 优化图片质量.py
goto done

:done
if errorlevel 1 (
    echo.
    echo ❌ 优化失败！
    echo.
    echo 可能的原因：
    echo   1. Python 未安装
    echo   2. Pillow 库未安装
    echo   3. 图片文件问题
    echo.
    echo 解决方法：
    echo   1. 确保 Python 已安装
    echo   2. 运行: pip install Pillow
    echo.
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
echo 下一步：
echo   1. 启动网站：双击"一键启动网站.bat"
echo   2. 在浏览器中按 Ctrl+F5 强制刷新
echo   3. 检查图片是否更清晰
echo.
echo ════════════════════════════════════════════════════════
echo.
pause
