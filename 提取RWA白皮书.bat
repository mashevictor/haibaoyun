@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo 正在提取算力RWA白皮书PDF内容...
echo ========================================
echo.
python 提取RWA白皮书内容.py
echo.
echo ========================================
echo 提取完成！
echo ========================================
echo.
echo 生成的文件：
echo   1. 算力RWA白皮书内容.txt - 完整的PDF文字内容
echo   2. 算力RWA白皮书关键内容.txt - 算力港和XAI相关内容
echo.
pause
