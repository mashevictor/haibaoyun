#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
视频压缩脚本 - 压缩视频到原来的 1/2 大小
"""
import os
import sys
import subprocess
import argparse
from pathlib import Path

def get_video_bitrate(video_path):
    """获取视频的比特率"""
    try:
        cmd = [
            'ffprobe',
            '-v', 'error',
            '-select_streams', 'v:0',
            '-show_entries', 'stream=bit_rate',
            '-of', 'default=noprint_wrappers=1:nokey=1',
            video_path
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
        if result.stdout.strip():
            return int(result.stdout.strip())
        else:
            # 如果无法获取比特率，尝试获取文件大小和时长来估算
            return estimate_bitrate(video_path)
    except Exception as e:
        print(f"获取比特率失败: {e}")
        return None

def estimate_bitrate(video_path):
    """通过文件大小和时长估算比特率"""
    try:
        # 获取时长
        cmd = [
            'ffprobe',
            '-v', 'error',
            '-show_entries', 'format=duration',
            '-of', 'default=noprint_wrappers=1:nokey=1',
            video_path
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
        duration = float(result.stdout.strip())
        
        # 获取文件大小（字节）
        file_size = os.path.getsize(video_path)
        
        # 计算比特率 (bits per second)
        bitrate = int((file_size * 8) / duration)
        
        return bitrate
    except Exception as e:
        print(f"估算比特率失败: {e}")
        return None

def get_video_info(video_path):
    """获取视频信息"""
    try:
        cmd = [
            'ffprobe',
            '-v', 'error',
            '-show_entries', 'format=duration,size,bit_rate',
            '-show_entries', 'stream=width,height,codec_name',
            '-of', 'default=noprint_wrappers=1',
            video_path
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
        return result.stdout
    except Exception as e:
        print(f"获取视频信息失败: {e}")
        return None

def compress_video(input_path, output_path=None, target_size_ratio=0.5, crf=23):
    """
    压缩视频到目标大小
    
    参数:
        input_path: 输入视频路径
        output_path: 输出视频路径（如果为 None，自动生成）
        target_size_ratio: 目标大小比例（0.5 表示压缩到原来的 1/2）
        crf: 压缩质量参数（18-28，越小质量越好，23 是默认值）
    """
    input_path = Path(input_path)
    
    if not input_path.exists():
        print(f"错误：文件不存在 - {input_path}")
        return False
    
    # 生成输出文件名
    if output_path is None:
        output_path = input_path.parent / f"{input_path.stem}_compressed{input_path.suffix}"
    else:
        output_path = Path(output_path)
    
    print("=" * 60)
    print("    视频压缩工具")
    print("=" * 60)
    print(f"\n输入文件: {input_path}")
    print(f"输出文件: {output_path}")
    print(f"目标大小: 原文件的 {target_size_ratio * 100}%")
    
    # 获取原始文件大小
    original_size = input_path.stat().st_size
    print(f"\n原始文件大小: {original_size / (1024*1024):.2f} MB")
    
    # 获取视频比特率
    print("\n正在分析视频...")
    original_bitrate = get_video_bitrate(str(input_path))
    
    if original_bitrate is None:
        print("无法获取视频比特率，使用默认 CRF 压缩方式")
        target_bitrate = None
    else:
        # 计算目标比特率（减少到原来的 target_size_ratio）
        target_bitrate = int(original_bitrate * target_size_ratio)
        print(f"原始比特率: {original_bitrate / 1000:.0f} kbps")
        print(f"目标比特率: {target_bitrate / 1000:.0f} kbps")
    
    # 构建 ffmpeg 命令
    print(f"\n开始压缩...")
    print("这可能需要几分钟时间，请耐心等待...\n")
    
    if target_bitrate:
        # 使用比特率控制
        cmd = [
            'ffmpeg',
            '-i', str(input_path),
            '-c:v', 'libx264',           # 使用 H.264 编码
            '-b:v', f'{target_bitrate}', # 设置目标比特率
            '-preset', 'medium',         # 编码速度预设（fast/medium/slow）
            '-c:a', 'aac',               # 音频编码
            '-b:a', '128k',              # 音频比特率
            '-movflags', '+faststart',   # 优化网络播放
            '-y',                        # 覆盖输出文件
            str(output_path)
        ]
    else:
        # 使用 CRF 质量控制
        cmd = [
            'ffmpeg',
            '-i', str(input_path),
            '-c:v', 'libx264',           # 使用 H.264 编码
            '-crf', str(crf),            # 质量参数（18-28）
            '-preset', 'medium',         # 编码速度预设
            '-c:a', 'aac',               # 音频编码
            '-b:a', '128k',              # 音频比特率
            '-movflags', '+faststart',   # 优化网络播放
            '-y',                        # 覆盖输出文件
            str(output_path)
        ]
    
    try:
        # 执行压缩
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='ignore')
        
        if result.returncode != 0:
            print(f"压缩失败！")
            print(f"错误信息: {result.stderr}")
            return False
        
        # 获取压缩后文件大小
        compressed_size = output_path.stat().st_size
        compression_ratio = (1 - compressed_size / original_size) * 100
        
        print("\n" + "=" * 60)
        print("    压缩完成！")
        print("=" * 60)
        print(f"\n原始大小: {original_size / (1024*1024):.2f} MB")
        print(f"压缩后大小: {compressed_size / (1024*1024):.2f} MB")
        print(f"压缩比例: {compression_ratio:.1f}%")
        print(f"实际大小比: {(compressed_size / original_size):.2%}")
        print(f"\n输出文件: {output_path}")
        
        return True
        
    except Exception as e:
        print(f"\n压缩过程中出错: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(
        description='视频压缩工具 - 压缩视频到指定大小',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 压缩单个视频到原来的 1/2 大小
  python compress_video.py input.mp4
  
  # 压缩到原来的 1/3 大小
  python compress_video.py input.mp4 -r 0.33
  
  # 指定输出文件名
  python compress_video.py input.mp4 -o output.mp4
  
  # 使用更高质量（CRF 值越小质量越好，18-28）
  python compress_video.py input.mp4 --crf 20
        """
    )
    
    parser.add_argument('input', help='输入视频文件路径')
    parser.add_argument('-o', '--output', help='输出视频文件路径（可选）')
    parser.add_argument('-r', '--ratio', type=float, default=0.5,
                       help='目标大小比例（默认: 0.5，即 1/2 大小）')
    parser.add_argument('--crf', type=int, default=23,
                       help='CRF 质量参数，18-28，越小质量越好（默认: 23）')
    
    args = parser.parse_args()
    
    # 检查 ffmpeg 是否安装
    try:
        subprocess.run(['ffmpeg', '-version'], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("错误：未找到 ffmpeg！")
        print("请先安装 ffmpeg，然后重试。")
        print("\n在 Windows 上，可以运行以下命令安装：")
        print("  python install_ffmpeg.py")
        return 1
    
    # 执行压缩
    success = compress_video(
        args.input,
        args.output,
        target_size_ratio=args.ratio,
        crf=args.crf
    )
    
    return 0 if success else 1

if __name__ == '__main__':
    sys.exit(main())
