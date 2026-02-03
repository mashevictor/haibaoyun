#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片质量优化工具
- 提升图片清晰度
- 优化压缩质量
- 保持合理文件大小
"""
import os
import sys
from pathlib import Path
from PIL import Image
import shutil

def optimize_image(input_path, output_path=None, quality=90):
    """
    优化图片质量
    
    参数:
        input_path: 输入图片路径
        output_path: 输出图片路径（如果为 None，覆盖原文件）
        quality: JPEG 质量 (1-100，推荐 85-95)
    """
    try:
        input_path = Path(input_path)
        
        if output_path is None:
            output_path = input_path
        else:
            output_path = Path(output_path)
        
        # 获取原始文件大小
        original_size = input_path.stat().st_size
        
        # 打开图片
        img = Image.open(input_path)
        
        # 转换为 RGB（如果是 PNG 带透明度）
        if img.mode in ('RGBA', 'LA', 'P'):
            # 如果是 PNG 且需要保留透明度
            if input_path.suffix.lower() == '.png':
                # 优化 PNG
                img.save(output_path, 'PNG', optimize=True, quality=quality)
            else:
                # 转换为 RGB 用于 JPEG
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                background.save(output_path, 'JPEG', quality=quality, optimize=True)
        elif img.mode == 'RGB' or img.mode == 'L':
            # 保存为高质量 JPEG
            if output_path.suffix.lower() in ['.jpg', '.jpeg']:
                img.save(output_path, 'JPEG', quality=quality, optimize=True)
            else:
                img.save(output_path, 'PNG', optimize=True, quality=quality)
        else:
            img = img.convert('RGB')
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
        
        # 获取优化后的文件大小
        optimized_size = output_path.stat().st_size
        
        return {
            'success': True,
            'original_size': original_size,
            'optimized_size': optimized_size,
            'ratio': (1 - optimized_size / original_size) * 100 if original_size > 0 else 0,
            'resolution': f"{img.width}x{img.height}"
        }
        
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

def process_directory(directory, quality=90, dry_run=False):
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
    
    # 排除 compressed 文件夹中的文件
    image_files = [f for f in image_files if 'compressed' not in str(f)]
    
    if not image_files:
        print(f"未找到图片文件")
        return
    
    print(f"\n找到 {len(image_files)} 个图片文件")
    print(f"{'='*80}\n")
    
    total_original_size = 0
    total_optimized_size = 0
    success_count = 0
    failed_files = []
    
    for i, img_file in enumerate(image_files, 1):
        print(f"[{i}/{len(image_files)}] {img_file.name}")
        
        # 备份原文件
        backup_path = img_file.parent / f"{img_file.stem}_backup{img_file.suffix}"
        
        if not dry_run:
            try:
                # 备份
                shutil.copy2(img_file, backup_path)
                
                # 优化
                result = optimize_image(img_file, quality=quality)
                
                if result['success']:
                    original_mb = result['original_size'] / (1024 * 1024)
                    optimized_mb = result['optimized_size'] / (1024 * 1024)
                    
                    print(f"  尺寸: {result['resolution']}")
                    print(f"  原始: {original_mb:.2f} MB")
                    print(f"  优化: {optimized_mb:.2f} MB")
                    
                    # 如果优化后的文件更大，恢复原文件
                    if result['optimized_size'] > result['original_size']:
                        print(f"  ⚠ 优化后更大，保留原文件")
                        shutil.copy2(backup_path, img_file)
                    else:
                        print(f"  ✓ 减小: {result['ratio']:.1f}%")
                    
                    # 删除备份
                    backup_path.unlink()
                    
                    total_original_size += result['original_size']
                    total_optimized_size += min(result['optimized_size'], result['original_size'])
                    success_count += 1
                else:
                    print(f"  ✗ 失败: {result['error']}")
                    failed_files.append(str(img_file))
                    # 恢复原文件
                    if backup_path.exists():
                        backup_path.unlink()
            except Exception as e:
                print(f"  ✗ 错误: {e}")
                failed_files.append(str(img_file))
                # 恢复原文件
                if backup_path.exists():
                    shutil.copy2(backup_path, img_file)
                    backup_path.unlink()
        else:
            # 只显示信息，不实际处理
            result = optimize_image(img_file, quality=quality)
            if result['success']:
                print(f"  尺寸: {result['resolution']}")
                print(f"  当前: {result['original_size'] / (1024 * 1024):.2f} MB")
        
        print()
    
    # 统计信息
    if not dry_run:
        print(f"\n{'='*80}")
        print(f"优化完成统计")
        print(f"{'='*80}")
        print(f"成功处理: {success_count}/{len(image_files)} 个文件")
        
        if total_original_size > 0:
            total_saved = (total_original_size - total_optimized_size) / (1024 * 1024)
            print(f"原始总大小: {total_original_size / (1024 * 1024):.2f} MB")
            print(f"优化后大小: {total_optimized_size / (1024 * 1024):.2f} MB")
            print(f"节省空间: {total_saved:.2f} MB")
        
        if failed_files:
            print(f"\n失败的文件 ({len(failed_files)}):")
            for f in failed_files:
                print(f"  - {f}")
        
        print(f"\n{'='*80}\n")

def main():
    print("=" * 80)
    print("    图片质量优化工具")
    print("    提升清晰度 | 优化压缩 | 保持合理大小")
    print("=" * 80)
    print()
    
    # 检查 PIL 是否安装
    try:
        from PIL import Image
    except ImportError:
        print("错误：未安装 Pillow 库")
        print("\n请运行以下命令安装：")
        print("  pip install Pillow")
        return 1
    
    print("配置:")
    print("  - JPEG 质量: 90 (高质量)")
    print("  - PNG: 优化压缩")
    print("  - 自动选择最优方案")
    print()
    
    # 处理 images 目录
    images_dir = Path('images')
    if not images_dir.exists():
        print("错误：未找到 images 目录")
        return 1
    
    print(f"正在优化 {images_dir} 目录下的所有图片...")
    print("注意：原文件将被优化后的版本替换")
    print()
    
    # 询问是否继续
    response = input("是否继续? (y/n): ").strip().lower()
    if response != 'y':
        print("已取消")
        return 0
    
    print()
    
    # 处理图片
    process_directory(images_dir, quality=90, dry_run=False)
    
    print("✓ 所有图片已优化！")
    print("\n提示：")
    print("  - 如果某些图片仍然模糊，可能需要更高分辨率的原图")
    print("  - 建议使用至少 2x 分辨率的图片用于高清屏幕")
    print()
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
