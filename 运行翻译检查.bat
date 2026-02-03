@echo off
chcp 65001 >nul
echo ========================================
echo PowerVerse Chain 翻译检查
echo ========================================
echo.

echo 检查服务器是否运行...
curl -s http://localhost:8000 >nul 2>&1
if errorlevel 1 (
    echo ⚠️  服务器未运行，正在启动...
    start /B python -m http.server 8000
    timeout /t 3 >nul
    echo ✅ 服务器已启动
) else (
    echo ✅ 服务器正在运行
)

echo.
echo 开始检查翻译...
echo.

python check_translation.py

echo.
echo ========================================
echo 检查完成！
echo ========================================
echo.
echo 查看报告: test-results\translation_report.txt
echo.
pause
