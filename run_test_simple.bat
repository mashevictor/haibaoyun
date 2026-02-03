@echo off
chcp 65001 >nul
echo ========================================
echo PowerVerse Chain 自动化测试
echo ========================================
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

echo 检查依赖...
if not exist node_modules (
    echo 正在安装依赖...
    call npm install
    echo.
)

echo 检查服务器...
curl -s http://localhost:8000 >nul 2>&1
if errorlevel 1 (
    echo ⚠️  服务器未运行，正在启动...
    start /B python -m http.server 8000
    timeout /t 3 >nul
    echo ✅ 服务器已启动
    echo.
) else (
    echo ✅ 服务器正在运行
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
echo.
pause
