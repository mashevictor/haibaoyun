from PIL import Image, ImageDraw
import numpy as np
import os

# 创建背景图片目录
background_dir = "images/backgrounds"
if not os.path.exists(background_dir):
    os.makedirs(background_dir)

# 创建浮动线条背景图片
def create_floating_lines_background():
    # 设置图片尺寸和背景颜色
    width, height = 1920, 1080
    bg_color = (10, 14, 39)  # 与网站背景色匹配
    
    # 创建图片
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # 绘制浮动线条
    num_lines = 15
    for i in range(num_lines):
        # 随机线条属性
        line_width = np.random.randint(1, 3)
        line_length = np.random.randint(100, 300)
        opacity = np.random.uniform(0.1, 0.3)
        
        # 随机位置
        x1 = np.random.randint(0, width)
        y1 = np.random.randint(0, height)
        
        # 随机方向
        angle = np.random.uniform(0, 2 * np.pi)
        x2 = x1 + int(line_length * np.cos(angle))
        y2 = y1 + int(line_length * np.sin(angle))
        
        # 线条颜色（与网站主色调匹配）
        line_color = (0, 212, 255)  # 主色调
        
        # 绘制线条
        draw.line([(x1, y1), (x2, y2)], fill=line_color, width=line_width)
    
    # 保存图片
    output_path = os.path.join(background_dir, "floating-lines.jpg")
    img.save(output_path, quality=85, optimize=True)
    
    # 检查图片大小
    img_size = os.path.getsize(output_path) / 1024  # KB
    print(f"背景图片已创建: {output_path}")
    print(f"图片大小: {img_size:.2f} KB")
    
    return output_path

# 创建背景图片
background_image_path = create_floating_lines_background()
print("背景图片创建完成!")
