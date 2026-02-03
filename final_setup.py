#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""最终设置脚本 - 生成图片和提取PDF"""
import os
import subprocess
import sys

def run_cmd(cmd):
    """运行命令"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, encoding='utf-8')
        return result.returncode == 0, result.stdout, result.stderr
    except:
        return False, "", ""

print("="*60)
print("PowerVerse Chain 图片和PDF处理")
print("="*60)

# 1. 安装依赖
print("\n[1/3] 安装依赖...")
for pkg in ['Pillow', 'pdfplumber']:
    try:
        if pkg == 'Pillow':
            import PIL
        else:
            import pdfplumber
        print(f"  ✓ {pkg} 已安装")
    except:
        print(f"  安装 {pkg}...")
        run_cmd(f'{sys.executable} -m pip install {pkg} -q')

# 2. 生成图片
print("\n[2/3] 生成应用场景图片...")
from PIL import Image, ImageDraw
os.makedirs('images/scenarios', exist_ok=True)

scenarios = {
    'ai': (0, 212, 255),
    'science': (0, 102, 255),
    'render': (255, 107, 107),
    'edge': (0, 255, 136),
    'blockchain': (255, 215, 0),
    'bigdata': (157, 78, 221)
}

for key, color in scenarios.items():
    img = Image.new('RGB', (1200, 600), (10, 14, 39))
    draw = ImageDraw.Draw(img)
    # 渐变
    for i in range(600):
        r = int(10 + color[0] * 0.25 * (i/600))
        g = int(14 + color[1] * 0.25 * (i/600))
        b = int(39 + color[2] * 0.25 * (i/600))
        draw.line([(0, i), (1200, i)], fill=(r, g, b))
    # 装饰圆
    cx, cy = 600, 300
    for i in range(8):
        r = 40 + i * 35
        a = int(40 * (1 - i * 0.1))
        c = tuple(min(255, x + a) for x in color)
        draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=c, width=2)
    img.save(f'images/scenarios/scenario-{key}.jpg', 'JPEG', quality=95)
    print(f"  ✓ scenario-{key}.jpg")

# 3. 提取PDF
print("\n[3/3] 提取PDF内容...")
try:
    import pdfplumber
    with pdfplumber.open('宣传册.pdf') as pdf:
        pages_text = []
        for i, page in enumerate(pdf.pages[:20]):
            text = page.extract_text()
            if text:
                pages_text.append(f"=== 第{i+1}页 ===\n{text}\n")
        full_text = "\n".join(pages_text)
        with open('pdf_content.txt', 'w', encoding='utf-8') as f:
            f.write(full_text)
        print(f"  ✓ pdf_content.txt ({len(full_text)} 字符)")
        if len(full_text) > 0:
            print(f"\n  预览: {full_text[:300]}...")
except Exception as e:
    print(f"  ⚠ PDF提取失败: {e}")

print("\n" + "="*60)
print("完成！")
print("="*60)
print("\n下一步：")
print("1. 图片已生成在 images/scenarios/ 目录")
print("2. 要生成真实AI图片，运行: python generate_images_api.py")
print("3. 需要设置 OPENAI_API_KEY 或 HUGGINGFACE_API_KEY")
