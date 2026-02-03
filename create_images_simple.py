# -*- coding: utf-8 -*-
import os
from PIL import Image, ImageDraw, ImageFont
import json

# 确保目录存在
os.makedirs('images/scenarios', exist_ok=True)

# 场景配置
scenarios = {
    'ai': {'title': 'AI模型训练', 'color': (0, 212, 255)},
    'science': {'title': '科学计算', 'color': (0, 102, 255)},
    'render': {'title': '渲染服务', 'color': (255, 107, 107)},
    'edge': {'title': '边缘计算', 'color': (0, 255, 136)},
    'blockchain': {'title': '区块链应用', 'color': (255, 215, 0)},
    'bigdata': {'title': '大数据分析', 'color': (157, 78, 221)}
}

# 生成图片
for key, info in scenarios.items():
    width, height = 1200, 600
    img = Image.new('RGB', (width, height), color=(10, 14, 39))
    draw = ImageDraw.Draw(img)
    
    # 绘制渐变背景
    for i in range(height):
        ratio = i / height
        r = int(10 * (1 - ratio) + info['color'][0] * ratio * 0.3)
        g = int(14 * (1 - ratio) + info['color'][1] * ratio * 0.3)
        b = int(39 * (1 - ratio) + info['color'][2] * ratio * 0.3)
        draw.line([(0, i), (width, i)], fill=(r, g, b))
    
    # 添加标题
    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        font = ImageFont.load_default()
    
    title = info['title']
    bbox = draw.textbbox((0, 0), title, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    y = height // 2 - 30
    
    # 文字阴影
    draw.text((x+3, y+3), title, font=font, fill=(0, 0, 0, 100))
    draw.text((x, y), title, font=font, fill=info['color'])
    
    # 保存
    filename = f'images/scenarios/scenario-{key}.jpg'
    img.save(filename, 'JPEG', quality=95)
    print(f'已生成: {filename}')

print('所有图片生成完成！')
print('\n注意：这些是基础占位符图片。')
print('要生成真实AI图片，请：')
print('1. 配置OpenAI API密钥')
print('2. 运行: python generate_images_advanced.py')
