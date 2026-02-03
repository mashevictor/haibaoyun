@echo off
chcp 65001 > nul
echo ====================================
echo     网站视频压缩 + 启动服务
echo ====================================
echo.

echo [1/2] 正在压缩视频到极致...
echo 这可能需要几分钟，请耐心等待...
echo.

python 压缩网站视频.py

if errorlevel 1 (
    echo.
    echo 压缩过程出现问题！
    pause
    exit /b 1
)

echo.
echo [2/2] 启动本地服务器...
echo.

REM 启动 HTTP 服务器
start "嗨豹云网站服务器" python -m http.server 8000

REM 等待服务器启动
timeout /t 3 /nobreak > nul

REM 打开浏览器
echo 正在打开浏览器...
start http://localhost:8000

echo.
echo ====================================
echo     服务已启动！
echo ====================================
echo.
echo 本地地址: http://localhost:8000
echo.
echo 提示：
echo - 压缩后的视频文件名带 '_web' 后缀
echo - 你可以在浏览器中测试视频加载速度
echo - 按 Ctrl+C 可停止服务器
echo.
echo 正在监听服务器日志...
echo.

REM 保持窗口打开
pause
