@echo off
chcp 65001 >nul
echo ========================================
echo 批量压缩图片/视频并运行性能测试
echo ========================================
echo.

echo [1/4] 检查并安装依赖...
python --version >nul 2>&1
if errorlevel 1 (
    echo 错误: Python未安装
    pause
    exit /b 1
)

pip install Pillow -q
if errorlevel 1 (
    echo 警告: Pillow安装失败
)

echo.
echo [2/4] 压缩图片和视频...
python compress_media.py
if errorlevel 1 (
    echo 警告: 压缩过程出现错误，继续执行...
)

echo.
echo [3/4] 更新HTML文件中的图片路径...
python update_image_paths.py
if errorlevel 1 (
    echo 警告: 路径更新失败
)

echo.
echo [4/4] 启动服务器并运行性能测试...
start /B python -m http.server 8000
timeout /t 3 /nobreak >nul

echo 运行性能测试...
npx playwright test tests/performance.spec.js --config=playwright.config.performance.js

echo.
echo ========================================
echo 测试完成！
echo ========================================
echo.
echo 查看测试报告:
echo   - HTML报告: playwright-report-performance\index.html
echo   - JSON结果: test-results\performance-results.json
echo.

pause
