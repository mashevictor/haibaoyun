@echo off
chcp 65001 >nul
echo ========================================
echo 从PDF提取内容并填充到白皮书网页
echo ========================================
echo.
python fill_whitepaper_from_pdf.py
echo.
pause
