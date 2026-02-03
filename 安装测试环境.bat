@echo off
chcp 65001 >nul
echo ========================================
echo PowerVerse Chain 自动化测试环境安装
echo ========================================
echo.

echo [1/3] 检查Node.js安装...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 未检测到Node.js，请先安装Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)
echo ✅ Node.js 已安装
node --version

echo.
echo [2/3] 安装npm依赖...
call npm install
if errorlevel 1 (
    echo ❌ npm安装失败
    pause
    exit /b 1
)
echo ✅ 依赖安装完成

echo.
echo [3/3] 安装Playwright浏览器...
call npx playwright install chromium
if errorlevel 1 (
    echo ❌ Playwright安装失败
    pause
    exit /b 1
)
echo ✅ Playwright安装完成

echo.
echo ========================================
echo ✅ 安装完成！
echo ========================================
echo.
echo 下一步：
echo 1. 启动服务器: python -m http.server 8000
echo 2. 运行测试: npm test
echo.
pause
