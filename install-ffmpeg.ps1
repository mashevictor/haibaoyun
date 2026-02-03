# FFmpeg 自动下载和安装脚本

Write-Host "正在下载 FFmpeg..." -ForegroundColor Green

# 创建临时目录
$tempDir = "$env:TEMP\ffmpeg-install"
New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

# 下载 FFmpeg
$ffmpegUrl = "https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip"
$zipPath = "$tempDir\ffmpeg.zip"
$extractPath = "C:\ffmpeg"

try {
    # 下载文件
    Write-Host "正在从 $ffmpegUrl 下载..." -ForegroundColor Yellow
    Invoke-WebRequest -Uri $ffmpegUrl -OutFile $zipPath -UseBasicParsing
    Write-Host "下载完成！" -ForegroundColor Green

    # 解压文件
    Write-Host "正在解压 FFmpeg..." -ForegroundColor Yellow
    Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force
    
    # 找到解压后的文件夹
    $extractedFolder = Get-ChildItem -Path $tempDir -Directory | Where-Object { $_.Name -like "ffmpeg-*" } | Select-Object -First 1
    
    # 移动到目标位置
    if (Test-Path $extractPath) {
        Write-Host "移除旧的 FFmpeg 安装..." -ForegroundColor Yellow
        Remove-Item -Path $extractPath -Recurse -Force
    }
    
    Move-Item -Path $extractedFolder.FullName -Destination $extractPath
    Write-Host "FFmpeg 已安装到: $extractPath" -ForegroundColor Green

    # 添加到系统环境变量
    $ffmpegBinPath = "$extractPath\bin"
    $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
    
    if ($currentPath -notlike "*$ffmpegBinPath*") {
        Write-Host "正在添加 FFmpeg 到系统 PATH..." -ForegroundColor Yellow
        [Environment]::SetEnvironmentVariable("Path", "$currentPath;$ffmpegBinPath", "User")
        $env:Path = "$env:Path;$ffmpegBinPath"
        Write-Host "FFmpeg 已添加到系统 PATH！" -ForegroundColor Green
    } else {
        Write-Host "FFmpeg 已经在系统 PATH 中" -ForegroundColor Green
    }

    # 清理临时文件
    Write-Host "正在清理临时文件..." -ForegroundColor Yellow
    Remove-Item -Path $tempDir -Recurse -Force

    Write-Host "`n安装完成！请重新打开 PowerShell 或运行以下命令来验证安装：" -ForegroundColor Green
    Write-Host "ffmpeg -version" -ForegroundColor Cyan

} catch {
    Write-Host "安装过程中出现错误: $_" -ForegroundColor Red
    exit 1
}
