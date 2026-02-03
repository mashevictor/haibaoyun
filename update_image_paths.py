#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新HTML文件中的图片路径，指向压缩后的文件
"""

import re
from pathlib import Path

def update_image_paths(html_file, compressed_dir='compressed'):
    """更新HTML文件中的图片路径"""
    html_path = Path(html_file)
    if not html_path.exists():
        print(f"文件不存在: {html_file}")
        return False
    
    content = html_path.read_text(encoding='utf-8')
    original_content = content
    
    # 更新图片路径
    # 匹配 src="images/..." 或 src='images/...'
    patterns = [
        (r'src=["\']images/([^"\']+)["\']', f'src="images/{compressed_dir}/\\1"'),
        (r'src=["\']\.\./images/([^"\']+)["\']', f'src="../images/{compressed_dir}/\\1"'),
        (r'url\(["\']?images/([^"\')]+)["\']?\)', f'url("images/{compressed_dir}/\\1")'),
        (r'url\(["\']?\.\./images/([^"\')]+)["\']?\)', f'url("../images/{compressed_dir}/\\1")'),
    ]
    
    # 处理PNG转JPG的情况
    for pattern, replacement in patterns:
        def replace_func(match):
            path = match.group(1)
            # 如果是PNG，替换为JPG
            if path.endswith('.png'):
                path = path[:-4] + '.jpg'
            return replacement.replace('\\1', path)
        
        content = re.sub(pattern, replace_func, content)
    
    # 检查压缩后的文件是否存在
    compressed_images_dir = Path('images') / compressed_dir
    if compressed_images_dir.exists():
        # 验证路径是否正确
        for match in re.finditer(r'src=["\']\.\./images/compressed/([^"\']+)["\']', content):
            img_path = compressed_images_dir / match.group(1)
            if not img_path.exists():
                # 尝试JPG版本
                if match.group(1).endswith('.png'):
                    jpg_path = compressed_images_dir / (match.group(1)[:-4] + '.jpg')
                    if jpg_path.exists():
                        # 路径已经是正确的，不需要修改
                        pass
    
    # 更新视频路径
    video_patterns = [
        (r'src=["\']video/([^"\']+)["\']', f'src="video/{compressed_dir}/\\1"'),
        (r'src=["\']\.\./video/([^"\']+)["\']', f'src="../video/{compressed_dir}/\\1"'),
    ]
    
    for pattern, replacement in video_patterns:
        content = re.sub(pattern, replacement, content)
    
    if content != original_content:
        html_path.write_text(content, encoding='utf-8')
        print(f"✓ 已更新: {html_file}")
        return True
    else:
        print(f"- 无需更新: {html_file}")
        return False

def main():
    """主函数"""
    print("=" * 60)
    print("更新HTML文件中的图片路径")
    print("=" * 60)
    
    # 更新index.html
    if Path('index.html').exists():
        update_image_paths('index.html')
    
    # 更新pages目录下的所有HTML文件
    pages_dir = Path('pages')
    if pages_dir.exists():
        html_files = list(pages_dir.glob('*.html'))
        for html_file in html_files:
            update_image_paths(html_file, compressed_dir='compressed')
    
    print("\n" + "=" * 60)
    print("更新完成！")
    print("=" * 60)
    print("\n注意: 如果压缩后的文件是JPG格式（原PNG），")
    print("路径已自动更新。请检查压缩后的文件是否存在。")

if __name__ == '__main__':
    main()
