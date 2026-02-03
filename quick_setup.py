# -*- coding: utf-8 -*-
import os
import sys

# 安装依赖
def install_pkg(pkg):
    try:
        __import__(pkg)
        return True
    except:
        os.system(f'{sys.executable} -m pip install {pkg} -q')
        return False

print("安装依赖...")
install_pkg('Pillow')
install_pkg('pdfplumber')

# 生成图片
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

print("\n生成图片...")
for key, color in scenarios.items():
    img = Image.new('RGB', (1200, 600), (10, 14, 39))
    draw = ImageDraw.Draw(img)
    for i in range(600):
        r = int(10 + color[0] * 0.2 * (i/600))
        g = int(14 + color[1] * 0.2 * (i/600))
        b = int(39 + color[2] * 0.2 * (i/600))
        draw.line([(0, i), (1200, i)], fill=(r, g, b))
    img.save(f'images/scenarios/scenario-{key}.jpg', 'JPEG')
    print(f'  ✓ scenario-{key}.jpg')

# 提取PDF
try:
    import pdfplumber
    print("\n提取PDF...")
    with pdfplumber.open('宣传册.pdf') as pdf:
        text = '\n'.join([p.extract_text() or '' for p in pdf.pages[:10]])
        with open('pdf_content.txt', 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'  ✓ pdf_content.txt ({len(text)} 字符)')
        print('\n预览:', text[:300])
except Exception as e:
    print(f'\nPDF提取失败: {e}')

print('\n完成!')
