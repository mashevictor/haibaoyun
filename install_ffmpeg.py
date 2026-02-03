#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
FFmpeg 自动下载和安装脚本
"""
import os
import sys
import urllib.request
import zipfile
import shutil
import winreg

def download_file(url, dest_path):
    """下载文件并显示进度"""
    print(f"正在从 {url} 下载...")
    print("这可能需要几分钟，请耐心等待...")
    
    def reporthook(count, block_size, total_size):
        if total_size > 0:
            percent = int(count * block_size * 100 / total_size)
            sys.stdout.write(f"\r下载进度: {percent}% ")
            sys.stdout.flush()
    
    urllib.request.urlretrieve(url, dest_path, reporthook)
    print("\n下载完成！")

def extract_zip(zip_path, extract_to):
    """解压 ZIP 文件"""
    print(f"正在解压到 {extract_to}...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to)
    print("解压完成！")

def add_to_path(new_path):
    """将路径添加到系统 PATH 环境变量"""
    try:
        # 打开注册表
        key = winreg.OpenKey(
            winreg.HKEY_CURRENT_USER,
            r'Environment',
            0,
            winreg.KEY_READ | winreg.KEY_WRITE
        )
        
        # 读取当前 PATH
        try:
            current_path, _ = winreg.QueryValueEx(key, 'PATH')
        except WindowsError:
            current_path = ''
        
        # 检查路径是否已存在
        if new_path.lower() not in current_path.lower():
            # 添加新路径
            new_path_value = current_path + ';' + new_path if current_path else new_path
            winreg.SetValueEx(key, 'PATH', 0, winreg.REG_EXPAND_SZ, new_path_value)
            print(f"已将 {new_path} 添加到 PATH")
        else:
            print(f"{new_path} 已经在 PATH 中")
        
        winreg.CloseKey(key)
        
        # 更新当前进程的环境变量
        os.environ['PATH'] = os.environ['PATH'] + ';' + new_path
        
        return True
    except Exception as e:
        print(f"添加到 PATH 失败: {e}")
        return False

def main():
    print("=" * 50)
    print("    FFmpeg 自动下载和安装脚本")
    print("=" * 50)
    print()
    
    # FFmpeg 下载链接
    ffmpeg_url = "https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip"
    
    # 设置路径
    temp_dir = os.path.join(os.environ['TEMP'], 'ffmpeg_install')
    zip_path = os.path.join(temp_dir, 'ffmpeg.zip')
    extract_path = temp_dir
    install_path = r'C:\ffmpeg'
    
    try:
        # 创建临时目录
        os.makedirs(temp_dir, exist_ok=True)
        
        # 步骤 1: 下载
        print("[1/5] 下载 FFmpeg")
        if not os.path.exists(zip_path):
            download_file(ffmpeg_url, zip_path)
        else:
            print("发现已下载的文件，跳过下载步骤")
        
        # 步骤 2: 解压
        print("\n[2/5] 解压 FFmpeg")
        extract_zip(zip_path, extract_path)
        
        # 步骤 3: 查找解压后的目录
        print("\n[3/5] 查找 FFmpeg 目录")
        extracted_dirs = [d for d in os.listdir(extract_path) 
                         if d.startswith('ffmpeg-') and os.path.isdir(os.path.join(extract_path, d))]
        
        if not extracted_dirs:
            print("错误：未找到解压后的 FFmpeg 目录")
            return
        
        source_dir = os.path.join(extract_path, extracted_dirs[0])
        print(f"找到目录: {source_dir}")
        
        # 步骤 4: 移动到安装目录
        print(f"\n[4/5] 安装 FFmpeg 到 {install_path}")
        if os.path.exists(install_path):
            print("删除旧的安装...")
            shutil.rmtree(install_path)
        
        shutil.move(source_dir, install_path)
        print(f"FFmpeg 已安装到: {install_path}")
        
        # 步骤 5: 添加到 PATH
        print("\n[5/5] 配置环境变量")
        bin_path = os.path.join(install_path, 'bin')
        if add_to_path(bin_path):
            print("环境变量配置成功！")
        
        # 清理临时文件
        print("\n清理临时文件...")
        try:
            shutil.rmtree(temp_dir)
            print("临时文件已清理")
        except:
            pass
        
        # 验证安装
        print("\n" + "=" * 50)
        print("    安装完成！")
        print("=" * 50)
        print(f"\nFFmpeg 已安装到: {install_path}")
        print(f"可执行文件位置: {bin_path}")
        print("\n请重新打开命令行窗口，然后运行以下命令验证安装：")
        print("  ffmpeg -version")
        print()
        
    except Exception as e:
        print(f"\n安装过程中出错: {e}")
        import traceback
        traceback.print_exc()
        return 1
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
