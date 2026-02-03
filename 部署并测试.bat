@echo off
chcp 65001 >nul
echo ========================================
echo PowerVerse Chain - 部署与测试
echo ========================================
echo.

echo 检查Python...
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未找到Python，请先安装Python
    pause
    exit /b 1
)

echo ✅ Python 已安装
echo.

echo 检查Node.js...
where node >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未找到Node.js，请先安装Node.js
    pause
    exit /b 1
)

echo ✅ Node.js 已安装
echo.

echo 开始部署和测试...
echo ========================================
echo.

python deploy_and_test.py

echo.
pause
