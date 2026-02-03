@echo off
chcp 65001 >nul
echo ========================================
echo 页面性能和多语言测试
echo ========================================
echo.

echo 步骤1: 检查Python环境...
python --version
if errorlevel 1 (
    echo 错误: Python未安装或不在PATH中
    pause
    exit /b 1
)

echo.
echo 步骤2: 安装必要的Python包...
pip install Pillow -q
if errorlevel 1 (
    echo 警告: Pillow安装失败，图片压缩可能无法使用
)

echo.
echo 步骤3: 压缩图片和视频...
python compress_media.py
if errorlevel 1 (
    echo 警告: 压缩过程出现错误
)

echo.
echo 步骤4: 启动测试服务器...
start /B python -m http.server 8000
timeout /t 3 /nobreak >nul

echo.
echo 步骤5: 运行性能测试...
npx playwright test tests/performance.spec.js --config=playwright.config.performance.js

echo.
echo 步骤6: 查看测试报告...
echo 测试报告已生成在 playwright-report-performance 目录中
echo.

pause
