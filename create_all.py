# -*- coding: utf-8 -*-
import os
import sys

# 安装依赖
for pkg in ['Pillow', 'pdfplumber', 'requests']:
    try:
        __import__(pkg.lower().replace('-', '_'))
    except:
        os.system(f'{sys.executable} -m pip install {pkg} -q')

# 生成图片
from PIL import Image, ImageDraw, ImageFont
os.makedirs('images/scenarios', exist_ok=True)

scenarios = {
    'ai': (0, 212, 255),
    'science': (0, 102, 255),
    'render': (255, 107, 107),
    'edge': (0, 255, 136),
    'blockchain': (255, 215, 0),
    'bigdata': (157, 78, 221)
}

print("生成图片...")
for key, color in scenarios.items():
    img = Image.new('RGB', (1200, 600), (10, 14, 39))
    draw = ImageDraw.Draw(img)
    for i in range(600):
        r = int(10 + color[0] * 0.25 * (i/600))
        g = int(14 + color[1] * 0.25 * (i/600))
        b = int(39 + color[2] * 0.25 * (i/600))
        draw.line([(0, i), (1200, i)], fill=(r, g, b))
    center_x, center_y = 600, 300
    for i in range(8):
        radius = 40 + i * 35
        alpha = int(40 * (1 - i * 0.1))
        c = tuple(min(255, x + alpha) for x in color)
        draw.ellipse([center_x-radius, center_y-radius, center_x+radius, center_y+radius], outline=c, width=2)
    img.save(f'images/scenarios/scenario-{key}.jpg', 'JPEG', quality=95)
    print(f'  ✓ scenario-{key}.jpg')

# 提取PDF
try:
    import pdfplumber
    print("\n提取PDF...")
    with pdfplumber.open('宣传册.pdf') as pdf:
        text = '\n\n'.join([f'=== 第{i+1}页 ===\n{p.extract_text() or ""}' for i, p in enumerate(pdf.pages[:15])])
        with open('pdf_content.txt', 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'  ✓ pdf_content.txt ({len(text)} 字符)')
        print('\n预览:', text[:400])
except Exception as e:
    print(f'\nPDF提取: {e}')

print('\n完成!')
