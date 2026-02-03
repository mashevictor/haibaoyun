#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
网站视频极致压缩脚本 - 保持尺寸，优化加载速度
"""
import os
import sys
import subprocess
from pathlib import Path
import time

def get_video_info(video_path):
    """获取视频信息"""
    try:
        # 获取分辨率
        cmd = [
            'ffprobe',
            '-v', 'error',
            '-select_streams', 'v:0',
            '-show_entries', 'stream=width,height',
            '-of', 'csv=p=0',
            str(video_path)
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
        width, height = result.stdout.strip().split(',')
        return int(width), int(height)
    except Exception as e:
        print(f"获取视频信息失败: {e}")
        return None, None

def compress_for_web(input_path, output_path=None):
    """
    针对网站优化的极致压缩
    - 使用 H.264 编码（最佳兼容性）
    - CRF 28（较高压缩率）
    - 快速启动（faststart）
    - 2-pass 编码（更好的质量/大小比）
    - 保持原始尺寸
    """
    input_path = Path(input_path)
    
    if not input_path.exists():
        print(f"错误：文件不存在 - {input_path}")
        return False
    
    # 生成输出文件名（替换原文件）
    if output_path is None:
        output_path = input_path.parent / f"{input_path.stem}_web{input_path.suffix}"
    else:
        output_path = Path(output_path)
    
    print(f"\n{'='*70}")
    print(f"正在压缩: {input_path.name}")
    print(f"{'='*70}")
    
    # 获取原始文件大小和尺寸
    original_size = input_path.stat().st_size
    width, height = get_video_info(str(input_path))
    
    if width and height:
        print(f"原始尺寸: {width}x{height}")
    print(f"原始大小: {original_size / (1024*1024):.2f} MB")
    
    # 构建 ffmpeg 命令 - 网站优化版本
    # 使用单次编码，CRF 模式，快速预设
    cmd = [
        'ffmpeg',
        '-i', str(input_path),
        '-c:v', 'libx264',              # H.264 视频编码
        '-crf', '28',                    # 较高压缩率（23-28之间，28更小）
        '-preset', 'slow',               # 慢速编码获得更好压缩
        '-profile:v', 'main',            # 主要配置文件（兼容性）
        '-level', '4.0',                 # 兼容性级别
        '-maxrate', '2M',                # 最大比特率 2Mbps
        '-bufsize', '4M',                # 缓冲区大小
        '-c:a', 'aac',                   # AAC 音频编码
        '-b:a', '96k',                   # 音频比特率 96kbps（较低）
        '-ac', '2',                      # 双声道
        '-ar', '44100',                  # 采样率 44.1kHz
        '-movflags', '+faststart',       # 网络优化：快速启动
        '-pix_fmt', 'yuv420p',          # 像素格式（兼容性）
        '-y',                            # 覆盖输出文件
        str(output_path)
    ]
    
    print(f"\n开始压缩...")
    print(f"压缩参数: CRF=28, 慢速编码, 最大码率2Mbps")
    print(f"这可能需要几分钟，请耐心等待...\n")
    
    start_time = time.time()
    
    try:
        # 执行压缩
        result = subprocess.run(
            cmd, 
            capture_output=True, 
            text=True, 
            encoding='utf-8', 
            errors='ignore'
        )
        
        elapsed_time = time.time() - start_time
        
        if result.returncode != 0:
            print(f"压缩失败！")
            print(f"错误信息: {result.stderr[-500:]}")  # 只显示最后500字符
            return False
        
        # 获取压缩后文件大小
        compressed_size = output_path.stat().st_size
        compression_ratio = (1 - compressed_size / original_size) * 100
        size_reduction = (original_size - compressed_size) / (1024*1024)
        
        print(f"\n{'='*70}")
        print(f"✓ 压缩完成！")
        print(f"{'='*70}")
        print(f"原始大小: {original_size / (1024*1024):.2f} MB")
        print(f"压缩后大小: {compressed_size / (1024*1024):.2f} MB")
        print(f"压缩比例: {compression_ratio:.1f}%")
        print(f"节省空间: {size_reduction:.2f} MB")
        print(f"耗时: {elapsed_time:.1f} 秒")
        print(f"输出: {output_path.name}\n")
        
        return True
        
    except Exception as e:
        print(f"\n压缩过程中出错: {e}")
        return False

def main():
    print("=" * 70)
    print("    网站视频极致压缩工具")
    print("    保持尺寸 | 优化加载 | 快速渲染")
    print("=" * 70)
    print()
    
    # 检查 ffmpeg 是否安装
    try:
        subprocess.run(['ffmpeg', '-version'], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("错误：未找到 ffmpeg！")
        print("请先安装 ffmpeg，然后重试。")
        return 1
    
    # 查找 video 目录中的所有 MP4 文件
    video_dir = Path('video')
    if not video_dir.exists():
        print(f"错误：未找到 video 目录")
        return 1
    
    video_files = list(video_dir.glob('*.mp4'))
    # 排除已经压缩过的文件
    video_files = [f for f in video_files if '_web' not in f.stem and '_compressed' not in f.stem]
    
    if not video_files:
        print("未找到需要压缩的视频文件")
        return 1
    
    print(f"找到 {len(video_files)} 个视频文件需要压缩:\n")
    for i, video in enumerate(video_files, 1):
        size_mb = video.stat().st_size / (1024*1024)
        print(f"  {i}. {video.name} ({size_mb:.2f} MB)")
    
    print(f"\n{'='*70}\n")
    
    # 创建 compressed 文件夹
    compressed_dir = video_dir / 'compressed'
    compressed_dir.mkdir(exist_ok=True)
    print(f"✓ 压缩文件夹: {compressed_dir}\n")
    
    # 压缩所有视频
    success_count = 0
    total_original_size = 0
    total_compressed_size = 0
    
    for i, video_file in enumerate(video_files, 1):
        print(f"\n处理 {i}/{len(video_files)}")
        original_size = video_file.stat().st_size
        
        if compress_for_web(video_file):
            success_count += 1
            output_file = video_file.parent / f"{video_file.stem}_web{video_file.suffix}"
            compressed_size = output_file.stat().st_size
            total_original_size += original_size
            total_compressed_size += compressed_size
            
            # 复制到 compressed 文件夹（使用原始文件名）
            compressed_copy = compressed_dir / video_file.name
            try:
                import shutil
                shutil.copy2(output_file, compressed_copy)
                print(f"  ✓ 已复制到: compressed/{video_file.name}")
            except Exception as e:
                print(f"  ⚠ 复制失败: {e}")
    
    # 最终统计
    print("\n" + "=" * 70)
    print("    压缩完成统计")
    print("=" * 70)
    print(f"成功压缩: {success_count}/{len(video_files)} 个文件")
    
    if total_original_size > 0:
        total_reduction = (1 - total_compressed_size / total_original_size) * 100
        space_saved = (total_original_size - total_compressed_size) / (1024*1024)
        
        print(f"\n原始总大小: {total_original_size / (1024*1024):.2f} MB")
        print(f"压缩后总大小: {total_compressed_size / (1024*1024):.2f} MB")
        print(f"总压缩比例: {total_reduction:.1f}%")
        print(f"节省空间: {space_saved:.2f} MB")
    
    print("\n" + "=" * 70)
    print("所有视频已优化完成，可用于网站快速加载！")
    print("压缩后的视频文件名末尾带 '_web'")
    print("=" * 70 + "\n")
    
    return 0 if success_count > 0 else 1

if __name__ == '__main__':
    sys.exit(main())
