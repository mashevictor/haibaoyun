import os
from PIL import Image
import io
import math

# 图片目录
directories = [
    "images/logo/logo",
    "images/scenarios",
    "images/compressed/scenarios",
    "images/切图/专利",
    "images/切图/服务器",
    "images/切图/瘦终端"
]

# 优化结果
optimization_results = {
    "total_images": 0,
    "optimized_images": 0,
    "total_original_size": 0,
    "total_optimized_size": 0,
    "savings": 0
}

# 压缩图片
def compress_image(image_path, quality=85, max_width=1920):
    try:
        # 打开图片
        img = Image.open(image_path)
        
        # 获取原始大小
        original_size = os.path.getsize(image_path)
        optimization_results["total_original_size"] += original_size
        
        # 调整图片大小
        width, height = img.size
        if width > max_width:
            new_height = int((max_width / width) * height)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # 保存压缩后的图片
        buffer = io.BytesIO()
        img_format = img.format or 'JPEG'
        img.save(buffer, format=img_format, quality=quality, optimize=True)
        
        # 获取压缩后的大小
        optimized_size = len(buffer.getvalue())
        
        # 如果压缩后更小，保存回原文件
        if optimized_size < original_size:
            with open(image_path, 'wb') as f:
                f.write(buffer.getvalue())
            optimization_results["optimized_images"] += 1
            optimization_results["total_optimized_size"] += optimized_size
            return True, original_size, optimized_size
        else:
            optimization_results["total_optimized_size"] += original_size
            return False, original_size, original_size
    except Exception as e:
        print(f"处理图片时出错 {image_path}: {e}")
        return False, 0, 0

# 遍历所有图片目录
print("开始优化图片...")
print("=" * 50)

for directory in directories:
    if not os.path.exists(directory):
        print(f"目录不存在: {directory}")
        continue
    
    print(f"处理目录: {directory}")
    
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
            image_path = os.path.join(directory, filename)
            optimization_results["total_images"] += 1
            
            optimized, original_size, optimized_size = compress_image(image_path)
            
            if optimized:
                savings = original_size - optimized_size
                percent_saved = (savings / original_size) * 100
                print(f"  优化: {filename} - 原始: {original_size/1024:.2f}KB - 优化后: {optimized_size/1024:.2f}KB - 节省: {percent_saved:.1f}%")

# 计算总节省
optimization_results["savings"] = optimization_results["total_original_size"] - optimization_results["total_optimized_size"]
savings_percent = (optimization_results["savings"] / optimization_results["total_original_size"]) * 100 if optimization_results["total_original_size"] > 0 else 0

# 生成优化报告
print("\n图片优化报告")
print("=" * 50)
print(f"总图片数量: {optimization_results['total_images']}")
print(f"优化的图片数量: {optimization_results['optimized_images']}")
print(f"原始总大小: {optimization_results['total_original_size']/1024/1024:.2f} MB")
print(f"优化后总大小: {optimization_results['total_optimized_size']/1024/1024:.2f} MB")
print(f"节省空间: {optimization_results['savings']/1024/1024:.2f} MB ({savings_percent:.1f}%)")

# 保存优化结果
with open('image_optimization_results.json', 'w', encoding='utf-8') as f:
    import json
    json.dump(optimization_results, f, ensure_ascii=False, indent=2)

print("\n图片优化完成!")
print("优化结果已保存到 image_optimization_results.json")
