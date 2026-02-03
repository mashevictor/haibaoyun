#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片分辨率提升工具
- 将图片放大到 2x 分辨率（用于高清屏）
- 使用高质量重采样算法
- 优化压缩保持文件大小合理
"""
import os
import sys
from pathlib import Path
from PIL import Image
import shutil

def upscale_image(input_path, output_path=None, scale=2, quality=90):
    """
    提升图片分辨率
    
    参数:
        input_path: 输入图片路径
        output_path: 输出图片路径
        scale: 放大倍数（1.5, 2, 等）
        quality: 输出质量
    """
    try:
        input_path = Path(input_path)
        
        if output_path is None:
            output_path = input_path.parent / f"{input_path.stem}_2x{input_path.suffix}"
        else:
            output_path = Path(output_path)
        
        # 打开图片
        img = Image.open(input_path)
        original_size = input_path.stat().st_size
        original_width, original_height = img.size
        
        # 计算新尺寸
        new_width = int(original_width * scale)
        new_height = int(original_height * scale)
        
        # 使用高质量重采样
        # LANCZOS 是最高质量的重采样算法
        img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # 保存
        if output_path.suffix.lower() in ['.jpg', '.jpeg']:
            # 转换为 RGB
            if img_resized.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img_resized.size, (255, 255, 255))
                if img_resized.mode == 'P':
                    img_resized = img_resized.convert('RGBA')
                background.paste(img_resized, mask=img_resized.split()[-1] if img_resized.mode == 'RGBA' else None)
                img_resized = background
            img_resized.save(output_path, 'JPEG', quality=quality, optimize=True)
        else:
            # PNG 保留透明度
            img_resized.save(output_path, 'PNG', optimize=True)
        
        new_size = output_path.stat().st_size
        
        return {
            'success': True,
            'original_resolution': f"{original_width}x{original_height}",
            'new_resolution': f"{new_width}x{new_height}",
            'original_size': original_size,
            'new_size': new_size,
            'scale': scale
        }
        
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

def process_directory(directory, scale=2, quality=90, output_suffix='_2x'):
    """
    处理目录中的所有图片
    """
    directory = Path(directory)
    
    if not directory.exists():
        print(f"错误：目录不存在 - {directory}")
        return
    
    # 查找所有图片文件
    image_extensions = ['.jpg', '.jpeg', '.png']
    image_files = []
    
    for ext in image_extensions:
        image_files.extend(directory.rglob(f'*{ext}'))
        image_files.extend(directory.rglob(f'*{ext.upper()}'))
    
    # 排除已经处理过的文件和 compressed 文件夹
    image_files = [f for f in image_files 
                   if output_suffix not in f.stem 
                   and 'compressed' not in str(f)
                   and '_backup' not in f.stem]
    
    if not image_files:
        print(f"未找到图片文件")
        return
    
    print(f"\n找到 {len(image_files)} 个图片文件")
    print(f"将放大到 {scale}x 分辨率")
    print(f"{'='*80}\n")
    
    success_count = 0
    failed_files = []
    
    for i, img_file in enumerate(image_files, 1):
        print(f"[{i}/{len(image_files)}] {img_file.name}")
        
        # 创建输出路径
        output_path = img_file.parent / f"{img_file.stem}{output_suffix}{img_file.suffix}"
        
        result = upscale_image(img_file, output_path, scale=scale, quality=quality)
        
        if result['success']:
            print(f"  原始: {result['original_resolution']}")
            print(f"  新尺寸: {result['new_resolution']}")
            print(f"  原始文件: {result['original_size'] / (1024 * 1024):.2f} MB")
            print(f"  新文件: {result['new_size'] / (1024 * 1024):.2f} MB")
            print(f"  ✓ 完成")
            success_count += 1
        else:
            print(f"  ✗ 失败: {result['error']}")
            failed_files.append(str(img_file))
        
        print()
    
    # 统计信息
    print(f"\n{'='*80}")
    print(f"处理完成")
    print(f"{'='*80}")
    print(f"成功: {success_count}/{len(image_files)} 个文件")
    
    if failed_files:
        print(f"\n失败的文件 ({len(failed_files)}):")
        for f in failed_files:
            print(f"  - {f}")
    
    print(f"\n提示：")
    print(f"  • 高分辨率图片已保存为 *{output_suffix}.jpg/png")
    print(f"  • 可以替换原图或保留两个版本")
    print(f"\n{'='*80}\n")

def main():
    print("=" * 80)
    print("    图片分辨率提升工具")
    print("    放大到 2x | 高质量重采样 | 适配高清屏")
    print("=" * 80)
    print()
    
    # 检查 PIL
    try:
        from PIL import Image
    except ImportError:
        print("错误：未安装 Pillow 库")
        print("\n请运行以下命令安装：")
        print("  pip install Pillow")
        return 1
    
    print("配置:")
    print("  - 放大倍数: 2x")
    print("  - 重采样算法: LANCZOS (最高质量)")
    print("  - JPEG 质量: 90")
    print()
    
    # 处理 images 目录
    images_dir = Path('images')
    if not images_dir.exists():
        print("错误：未找到 images 目录")
        return 1
    
    print(f"将处理 {images_dir} 目录下的所有图片")
    print("新图片将保存为 *_2x.jpg/png")
    print()
    
    # 询问是否继续
    response = input("是否继续? (y/n): ").strip().lower()
    if response != 'y':
        print("已取消")
        return 0
    
    print()
    
    # 处理图片
    process_directory(images_dir, scale=2, quality=90, output_suffix='_2x')
    
    print("✓ 处理完成！")
    print("\n下一步：")
    print("  1. 检查生成的 *_2x 图片")
    print("  2. 如果满意，可以替换原图")
    print("  3. 在 HTML 中使用新图片")
    print()
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
