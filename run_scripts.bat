@echo off
chcp 65001 >nul
echo ========================================
echo PowerVerse Chain 图片生成工具
echo ========================================
echo.

echo [1/2] 提取PDF内容...
python extract_pdf.py
echo.

echo [2/2] 生成应用场景图片...
python generate_images_advanced.py
echo.

echo ========================================
echo 完成！
echo ========================================
pause
