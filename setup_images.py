#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
一键生成应用场景图片
"""
import os
import sys

def install_requirements():
    """安装必要的库"""
    print("检查并安装必要的库...")
    try:
        import PIL
        print("✓ PIL/Pillow 已安装")
    except ImportError:
        print("安装 Pillow...")
        os.system(f"{sys.executable} -m pip install Pillow -q")
    
    try:
        import pdfplumber
        print("✓ pdfplumber 已安装")
    except ImportError:
        print("安装 pdfplumber...")
        os.system(f"{sys.executable} -m pip install pdfplumber -q")

def create_images():
    """创建图片"""
    from PIL import Image, ImageDraw
    
    os.makedirs('images/scenarios', exist_ok=True)
    
    scenarios = {
        'ai': {'title': 'AI模型训练', 'color': (0, 212, 255)},
        'science': {'title': '科学计算', 'color': (0, 102, 255)},
        'render': {'title': '渲染服务', 'color': (255, 107, 107)},
        'edge': {'title': '边缘计算', 'color': (0, 255, 136)},
        'blockchain': {'title': '区块链应用', 'color': (255, 215, 0)},
        'bigdata': {'title': '大数据分析', 'color': (157, 78, 221)}
    }
    
    print("\n生成图片...")
    for key, info in scenarios.items():
        width, height = 1200, 600
        img = Image.new('RGB', (width, height), color=(10, 14, 39))
        draw = ImageDraw.Draw(img)
        
        # 渐变背景
        for i in range(height):
            ratio = i / height
            r = int(10 * (1 - ratio) + info['color'][0] * ratio * 0.3)
            g = int(14 * (1 - ratio) + info['color'][1] * ratio * 0.3)
            b = int(39 * (1 - ratio) + info['color'][2] * ratio * 0.3)
            draw.line([(0, i), (width, i)], fill=(r, g, b))
        
        # 添加装饰性元素
        center_x, center_y = width // 2, height // 2
        for i in range(5):
            radius = 50 + i * 30
            alpha = int(50 * (1 - i * 0.2))
            color = tuple(min(255, c + alpha) for c in info['color'])
            draw.ellipse([center_x - radius, center_y - radius, 
                         center_x + radius, center_y + radius], 
                        outline=color, width=2)
        
        filename = f'images/scenarios/scenario-{key}.jpg'
        img.save(filename, 'JPEG', quality=95)
        print(f"  ✓ {filename}")
    
    print("\n图片生成完成！")

def extract_pdf():
    """提取PDF内容"""
    try:
        import pdfplumber
        pdf_path = '宣传册.pdf'
        if os.path.exists(pdf_path):
            print("\n提取PDF内容...")
            with pdfplumber.open(pdf_path) as pdf:
                text_content = []
                for i, page in enumerate(pdf.pages[:20]):
                    text = page.extract_text()
                    if text:
                        text_content.append(f"=== 第 {i+1} 页 ===\n{text}\n")
                
                full_text = "\n".join(text_content)
                with open('pdf_content.txt', 'w', encoding='utf-8') as f:
                    f.write(full_text)
                print(f"✓ PDF内容已保存到 pdf_content.txt ({len(full_text)} 字符)")
                print(f"\n预览（前500字符）：")
                print("-" * 50)
                print(full_text[:500])
        else:
            print(f"\n⚠ PDF文件不存在: {pdf_path}")
    except Exception as e:
        print(f"\n⚠ PDF提取失败: {e}")

if __name__ == '__main__':
    print("=" * 60)
    print("PowerVerse Chain 图片和PDF处理工具")
    print("=" * 60)
    
    install_requirements()
    create_images()
    extract_pdf()
    
    print("\n" + "=" * 60)
    print("完成！")
    print("=" * 60)
    print("\n提示：")
    print("- 图片已生成在 images/scenarios/ 目录")
    print("- 要生成真实AI图片，请运行: python generate_images_advanced.py")
    print("- 需要配置 OPENAI_API_KEY 环境变量")
