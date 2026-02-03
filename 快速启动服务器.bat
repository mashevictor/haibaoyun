@echo off
chcp 65001 > nul
cls
echo.
echo ════════════════════════════════════════
echo     嗨豹云网站 - 本地服务器
echo ════════════════════════════════════════
echo.

REM 检查端口是否被占用
netstat -ano | findstr ":8000" >nul
if not errorlevel 1 (
    echo ⚠ 端口 8000 已被占用
    echo.
    echo 正在尝试使用端口 8001...
    set PORT=8001
) else (
    set PORT=8000
)

echo ✓ 启动服务器在端口 %PORT%...
echo.

REM 启动服务器
start "嗨豹云本地服务器" cmd /k "cd /d "%~dp0" && python -m http.server %PORT%"

REM 等待服务器启动
timeout /t 2 /nobreak > nul

echo ✓ 服务器已启动！
echo.
echo ════════════════════════════════════════
echo.
echo 网站地址：
echo   • 首页: http://localhost:%PORT%/index.html
echo   • 视频测试: http://localhost:%PORT%/测试视频加载.html
echo.
echo ════════════════════════════════════════
echo.

REM 打开浏览器
echo 正在打开浏览器...
start http://localhost:%PORT%/index.html

echo.
echo ✓ 完成！
echo.
echo 提示：
echo   • 服务器在另一个窗口运行
echo   • 关闭那个窗口可以停止服务
echo   • 本窗口可以关闭
echo.
pause
