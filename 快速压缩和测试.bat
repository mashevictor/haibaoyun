@echo off
chcp 65001 >nul
echo ========================================
echo 快速压缩和性能测试
echo ========================================
echo.

echo [1/3] 压缩图片和视频...
python compress_media.py
if errorlevel 1 (
    echo 警告: 压缩过程出现错误
    pause
)

echo.
echo [2/3] 更新HTML文件中的图片路径...
python update_image_paths.py

echo.
echo [3/3] 运行性能测试...
echo 请确保服务器正在运行: python -m http.server 8000
echo.
pause

npx playwright test tests/performance.spec.js --config=playwright.config.performance.js

echo.
echo 测试完成！查看报告: playwright-report-performance\index.html
pause
