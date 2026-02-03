@echo off
chcp 65001 > nul
cls

echo.
echo ════════════════════════════════════════
echo     网站问题诊断工具
echo ════════════════════════════════════════
echo.

REM 1. 检查当前目录
echo [检查 1] 当前目录
cd /d "%~dp0"
echo 目录: %CD%
echo.

REM 2. 检查 index.html 是否存在
echo [检查 2] 检查 index.html 文件
if exist "index.html" (
    echo ✓ index.html 存在
) else (
    echo ✗ 错误：index.html 不存在！
)
echo.

REM 3. 检查 Python 是否安装
echo [检查 3] 检查 Python
python --version 2>nul
if errorlevel 1 (
    echo ✗ 错误：Python 未安装或不在 PATH 中
) else (
    echo ✓ Python 已安装
)
echo.

REM 4. 检查端口 8000 是否被占用
echo [检查 4] 检查端口 8000
netstat -ano | findstr ":8000" >nul
if errorlevel 1 (
    echo ✓ 端口 8000 未被占用，可以使用
) else (
    echo ⚠ 端口 8000 已被占用
    echo 正在使用该端口的进程：
    netstat -ano | findstr ":8000"
)
echo.

REM 5. 列出当前目录的主要文件
echo [检查 5] 当前目录文件列表
echo 主要文件：
dir /b index.html 2>nul
dir /b video 2>nul
dir /b *.bat 2>nul | findstr "启动"
echo.

echo ════════════════════════════════════════
echo     诊断完成
echo ════════════════════════════════════════
echo.
echo 下一步操作：
echo   1. 如果上面所有检查都通过，双击运行"启动网站.bat"
echo   2. 等待服务器启动完成
echo   3. 在浏览器中访问：http://localhost:8000/index.html
echo.
echo 如果仍有问题，请截图此窗口内容
echo.
pause
