@echo off
chcp 65001 > nul
echo ====================================
echo     视频压缩工具
echo ====================================
echo.

REM 检查是否拖入了文件
if "%~1"=="" (
    echo 使用方法：
    echo 1. 将要压缩的视频文件拖放到这个批处理文件上
    echo 2. 或者在命令行中运行：压缩视频.bat "视频文件路径"
    echo.
    echo 按任意键退出...
    pause > nul
    exit /b
)

REM 获取输入文件信息
set "INPUT_FILE=%~1"
set "INPUT_DIR=%~dp1"
set "INPUT_NAME=%~n1"
set "INPUT_EXT=%~x1"

REM 生成输出文件名
set "OUTPUT_FILE=%INPUT_DIR%%INPUT_NAME%_compressed%INPUT_EXT%"

echo 输入文件: %INPUT_FILE%
echo 输出文件: %OUTPUT_FILE%
echo.
echo 开始压缩...
echo 这可能需要几分钟，请耐心等待...
echo.

REM 使用 ffmpeg 压缩视频（压缩到原来的 1/2 大小）
REM CRF 值：18-28，越小质量越好，文件越大
REM 这里使用 CRF=25 来达到约 1/2 的文件大小
ffmpeg -i "%INPUT_FILE%" -c:v libx264 -crf 25 -preset medium -c:a aac -b:a 128k -movflags +faststart -y "%OUTPUT_FILE%"

if errorlevel 1 (
    echo.
    echo 压缩失败！请检查：
    echo 1. ffmpeg 是否已正确安装
    echo 2. 输入文件是否存在且格式正确
    echo 3. 是否有足够的磁盘空间
    echo.
) else (
    echo.
    echo ====================================
    echo     压缩完成！
    echo ====================================
    echo.
    echo 输出文件: %OUTPUT_FILE%
    echo.
    
    REM 显示文件大小对比
    for %%A in ("%INPUT_FILE%") do set INPUT_SIZE=%%~zA
    for %%A in ("%OUTPUT_FILE%") do set OUTPUT_SIZE=%%~zA
    
    echo 原始大小: %INPUT_SIZE% 字节
    echo 压缩后大小: %OUTPUT_SIZE% 字节
    echo.
)

echo 按任意键退出...
pause > nul
