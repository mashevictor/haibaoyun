#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片和视频压缩脚本
压缩所有图片和视频文件以优化页面加载速度
"""

import os
import sys
from pathlib import Path
from PIL import Image
import subprocess

def compress_image(input_path, output_path, quality=80, max_size=(1200, 600)):
    """压缩图片"""
    try:
        img = Image.open(input_path)
        original_size = os.path.getsize(input_path)
        
        # 转换为RGB模式（如果是RGBA）
        if img.mode in ('RGBA', 'LA', 'P'):
            # 创建白色背景
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 调整大小（如果太大）
        if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # 确保输出目录存在
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        # 保存压缩后的图片
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        
        compressed_size = os.path.getsize(output_path)
        compression_ratio = (1 - compressed_size / original_size) * 100
        
        return {
            'success': True,
            'original_size': original_size,
            'compressed_size': compressed_size,
            'compression_ratio': compression_ratio
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

def compress_video(input_path, output_path, crf=28):
    """压缩视频（需要ffmpeg）"""
    try:
        # 检查ffmpeg是否可用
        try:
            subprocess.run(['ffmpeg', '-version'], 
                         capture_output=True, check=True)
        except (subprocess.CalledProcessError, FileNotFoundError):
            print(f"警告: ffmpeg未安装，跳过视频压缩: {input_path}")
            return {
                'success': False,
                'error': 'ffmpeg not found'
            }
        
        # 使用ffmpeg压缩视频
        cmd = [
            'ffmpeg', '-i', str(input_path),
            '-c:v', 'libx264',
            '-crf', str(crf),
            '-preset', 'medium',
            '-c:a', 'aac',
            '-b:a', '128k',
            '-y',  # 覆盖输出文件
            str(output_path)
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            original_size = os.path.getsize(input_path)
            compressed_size = os.path.getsize(output_path)
            compression_ratio = (1 - compressed_size / original_size) * 100
            
            return {
                'success': True,
                'original_size': original_size,
                'compressed_size': compressed_size,
                'compression_ratio': compression_ratio
            }
        else:
            return {
                'success': False,
                'error': result.stderr
            }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

def process_directory(directory, output_dir=None, image_quality=80, video_crf=28):
    """处理目录中的所有图片和视频"""
    directory = Path(directory)
    if output_dir:
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
    else:
        output_dir = directory / 'compressed'
        output_dir.mkdir(parents=True, exist_ok=True)
    
    # 支持的图片格式
    image_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.webp'}
    # 支持的视频格式
    video_extensions = {'.mp4', '.avi', '.mov', '.mkv', '.webm'}
    
    results = {
        'images': {'total': 0, 'success': 0, 'failed': 0, 'total_original': 0, 'total_compressed': 0},
        'videos': {'total': 0, 'success': 0, 'failed': 0, 'total_original': 0, 'total_compressed': 0}
    }
    
    # 处理图片
    for img_file in directory.rglob('*'):
        if img_file.suffix.lower() in image_extensions:
            # 跳过已压缩的文件
            if 'compressed' in str(img_file):
                continue
            
            results['images']['total'] += 1
            relative_path = img_file.relative_to(directory)
            output_path = output_dir / relative_path
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            # PNG转换为JPG以减小文件大小（保留透明度信息会丢失）
            if img_file.suffix.lower() == '.png':
                output_path = output_path.with_suffix('.jpg')
                print(f"  注意: PNG将转换为JPG格式")
            
            print(f"压缩图片: {img_file} -> {output_path}")
            result = compress_image(img_file, output_path, quality=image_quality)
            
            if result['success']:
                results['images']['success'] += 1
                results['images']['total_original'] += result['original_size']
                results['images']['total_compressed'] += result['compressed_size']
                print(f"  成功: {result['compression_ratio']:.1f}% 压缩率")
            else:
                results['images']['failed'] += 1
                print(f"  失败: {result.get('error', 'Unknown error')}")
    
    # 处理视频
    for vid_file in directory.rglob('*'):
        if vid_file.suffix.lower() in video_extensions:
            # 跳过已压缩的文件
            if 'compressed' in str(vid_file):
                continue
            
            results['videos']['total'] += 1
            relative_path = vid_file.relative_to(directory)
            output_path = output_dir / relative_path
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            print(f"压缩视频: {vid_file} -> {output_path}")
            result = compress_video(vid_file, output_path, crf=video_crf)
            
            if result['success']:
                results['videos']['success'] += 1
                results['videos']['total_original'] += result['original_size']
                results['videos']['total_compressed'] += result['compressed_size']
                print(f"  成功: {result['compression_ratio']:.1f}% 压缩率")
            else:
                results['videos']['failed'] += 1
                print(f"  失败: {result.get('error', 'Unknown error')}")
    
    return results

def main():
    """主函数"""
    # 压缩images目录
    print("=" * 60)
    print("开始压缩图片...")
    print("=" * 60)
    images_dir = Path('images')
    if images_dir.exists():
        # 创建压缩输出目录
        compressed_dir = images_dir / 'compressed'
        image_results = process_directory(images_dir, output_dir=compressed_dir, image_quality=80)
        print("\n图片压缩结果:")
        print(f"  总计: {image_results['images']['total']}")
        print(f"  成功: {image_results['images']['success']}")
        print(f"  失败: {image_results['images']['failed']}")
        if image_results['images']['total_original'] > 0:
            total_ratio = (1 - image_results['images']['total_compressed'] / image_results['images']['total_original']) * 100
            print(f"  总压缩率: {total_ratio:.1f}%")
            print(f"  原始大小: {image_results['images']['total_original'] / 1024 / 1024:.2f} MB")
            print(f"  压缩后: {image_results['images']['total_compressed'] / 1024 / 1024:.2f} MB")
    
    # 压缩video目录
    print("\n" + "=" * 60)
    print("开始压缩视频...")
    print("=" * 60)
    video_dir = Path('video')
    if video_dir.exists():
        # 创建压缩输出目录
        compressed_dir = video_dir / 'compressed'
        video_results = process_directory(video_dir, output_dir=compressed_dir, video_crf=28)
        print("\n视频压缩结果:")
        print(f"  总计: {video_results['videos']['total']}")
        print(f"  成功: {video_results['videos']['success']}")
        print(f"  失败: {video_results['videos']['failed']}")
        if video_results['videos']['total_original'] > 0:
            total_ratio = (1 - video_results['videos']['total_compressed'] / video_results['videos']['total_original']) * 100
            print(f"  总压缩率: {total_ratio:.1f}%")
            print(f"  原始大小: {video_results['videos']['total_original'] / 1024 / 1024:.2f} MB")
            print(f"  压缩后: {video_results['videos']['total_compressed'] / 1024 / 1024:.2f} MB")
    
    print("\n" + "=" * 60)
    print("压缩完成！")
    print("=" * 60)

if __name__ == '__main__':
    main()
