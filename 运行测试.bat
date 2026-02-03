@echo off
chcp 65001 >nul
echo ========================================
echo 运行自动化测试
echo ========================================
echo.

echo 检查服务器是否运行...
curl -s http://localhost:8000 >nul 2>&1
if errorlevel 1 (
    echo ⚠️  服务器未运行
    echo.
    echo 请先运行 "启动测试服务器.bat" 启动服务器
    echo 或者运行 "部署并测试.bat" 自动启动服务器并测试
    echo.
    pause
    exit /b 1
)

echo ✅ 服务器正在运行
echo.

echo 检查Node.js...
where node >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未找到Node.js，请先安装Node.js
    echo.
    echo 💡 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js 已安装
node --version
echo.

echo 检查npm...
where npm >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未找到npm
    pause
    exit /b 1
)

echo ✅ npm 已安装
npm --version
echo.

echo 检查依赖...
if not exist node_modules (
    echo 正在安装依赖...
    call npm install
    echo.
)

echo 开始运行测试...
echo ========================================
echo.

call npm test

echo.
echo ========================================
echo 测试完成！
echo ========================================
echo.
echo 查看详细报告: npm run test:report
echo 或打开: playwright-report\index.html
echo.
pause
