@echo off
chcp 65001 > nul
echo ====================================
echo     FFmpeg 自动安装脚本
echo ====================================
echo.

echo [1/5] 正在下载 FFmpeg...
powershell -Command "Invoke-WebRequest -Uri 'https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip' -OutFile '%TEMP%\ffmpeg.zip'"

if errorlevel 1 (
    echo 下载失败！请检查网络连接。
    pause
    exit /b 1
)

echo [2/5] 下载完成！
echo.

echo [3/5] 正在解压 FFmpeg...
powershell -Command "Expand-Archive -Path '%TEMP%\ffmpeg.zip' -DestinationPath '%TEMP%\ffmpeg-extract' -Force"

if errorlevel 1 (
    echo 解压失败！
    pause
    exit /b 1
)

echo [4/5] 正在安装 FFmpeg...
if exist "C:\ffmpeg" rd /s /q "C:\ffmpeg"
for /d %%i in (%TEMP%\ffmpeg-extract\ffmpeg-*) do (
    move "%%i" "C:\ffmpeg"
)

echo [5/5] 正在设置环境变量...
setx PATH "%PATH%;C:\ffmpeg\bin"

echo.
echo ====================================
echo     安装完成！
echo ====================================
echo.
echo FFmpeg 已安装到: C:\ffmpeg
echo.
echo 请关闭并重新打开命令提示符窗口，然后运行以下命令验证安装：
echo ffmpeg -version
echo.

echo 正在清理临时文件...
del "%TEMP%\ffmpeg.zip" 2>nul
rd /s /q "%TEMP%\ffmpeg-extract" 2>nul

echo.
echo 按任意键退出...
pause > nul
