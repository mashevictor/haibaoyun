@echo off
chcp 65001 > nul
cls

echo.
echo ════════════════════════════════════════
echo     修复视频播放问题
echo ════════════════════════════════════════
echo.

cd /d "%~dp0"

REM 创建 compressed 文件夹
if not exist "video\compressed" (
    echo [1] 创建 compressed 文件夹...
    mkdir "video\compressed"
    echo ✓ 文件夹已创建
) else (
    echo [1] compressed 文件夹已存在
)
echo.

REM 复制压缩后的视频到 compressed 文件夹
echo [2] 复制压缩后的视频文件...
echo.

if exist "video\视频1_web.mp4" (
    copy /Y "video\视频1_web.mp4" "video\compressed\视频1.mp4" >nul
    echo ✓ 视频1 已复制
) else (
    echo ⚠ 视频1_web.mp4 不存在，跳过
)

if exist "video\视频2_web.mp4" (
    copy /Y "video\视频2_web.mp4" "video\compressed\视频2.mp4" >nul
    echo ✓ 视频2 已复制
) else (
    echo ⚠ 视频2_web.mp4 不存在，跳过
)

if exist "video\视频3_web.mp4" (
    copy /Y "video\视频3_web.mp4" "video\compressed\视频3.mp4" >nul
    echo ✓ 视频3 已复制
) else (
    echo ⚠ 视频3_web.mp4 不存在，跳过
)

if exist "video\视频4_web.mp4" (
    copy /Y "video\视频4_web.mp4" "video\compressed\视频4.mp4" >nul
    echo ✓ 视频4 已复制
) else (
    echo ⚠ 视频4_web.mp4 不存在，跳过
)

echo.
echo ════════════════════════════════════════
echo.
echo ✓ 修复完成！
echo.
echo 压缩后的视频已复制到：
echo   video/compressed/ 文件夹
echo.
echo 现在视频应该可以正常播放了！
echo.
echo 下一步：
echo   1. 双击运行"一键启动网站.bat"
echo   2. 在浏览器中访问网站
echo   3. 测试视频播放
echo.
echo ════════════════════════════════════════
echo.
pause
