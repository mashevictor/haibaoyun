#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
为应用场景生成真实图片
支持多种图片生成方式
"""
import os
import json
import requests
from PIL import Image, ImageDraw, ImageFont
import numpy as np

# 应用场景图片配置
SCENARIO_CONFIGS = {
    'ai': {
        'filename': 'scenario-ai.jpg',
        'title': 'AI模型训练',
        'prompt_en': 'Futuristic AI neural network visualization with glowing nodes and connections, distributed GPU computing for AI model training, dark blue and cyan color scheme, high tech, 4k quality, professional',
        'prompt_cn': '未来主义AI神经网络可视化，发光的节点和连接，分布式GPU计算用于AI模型训练，深蓝和青色配色方案，高科技，4K质量',
        'colors': ['#00d4ff', '#0066ff', '#0a0e27']
    },
    'science': {
        'filename': 'scenario-science.jpg',
        'title': '科学计算',
        'prompt_en': 'Scientific computing visualization showing molecular structures, data analysis graphs, research simulations, high-performance computing clusters, professional scientific atmosphere, dark theme with blue accents, modern',
        'prompt_cn': '科学计算可视化，显示分子结构、数据分析图表、研究模拟，高性能计算集群，专业科学氛围，深色主题配蓝色强调，现代',
        'colors': ['#00d4ff', '#0066ff', '#0a0e27']
    },
    'render': {
        'filename': 'scenario-render.jpg',
        'title': '渲染服务',
        'prompt_en': '3D rendering workspace with cinematic lighting, 3D models, animation frames, visual effects, distributed rendering network, creative digital art, modern studio environment, professional',
        'prompt_cn': '3D渲染工作空间，电影级光照，3D模型，动画帧，视觉效果，分布式渲染网络，创意数字艺术，现代工作室环境',
        'colors': ['#00d4ff', '#ff6b6b', '#0a0e27']
    },
    'edge': {
        'filename': 'scenario-edge.jpg',
        'title': '边缘计算',
        'prompt_en': 'Edge computing network diagram showing distributed nodes connected globally, low latency data flow visualization, IoT devices, smart city concept, futuristic technology, blue and green neon lights, modern',
        'prompt_cn': '边缘计算网络图，显示全球连接的分布式节点，低延迟数据流可视化，物联网设备，智慧城市概念，未来技术，蓝绿霓虹灯',
        'colors': ['#00d4ff', '#00ff88', '#0a0e27']
    },
    'blockchain': {
        'filename': 'scenario-blockchain.jpg',
        'title': '区块链应用',
        'prompt_en': 'Blockchain network visualization with interconnected blocks, smart contracts, Web3 applications, decentralized network nodes, cryptocurrency symbols, modern blockchain technology, dark theme with glowing elements',
        'prompt_cn': '区块链网络可视化，互连区块，智能合约，Web3应用，去中心化网络节点，加密货币符号，现代区块链技术，深色主题配发光元素',
        'colors': ['#00d4ff', '#ffd700', '#0a0e27']
    },
    'bigdata': {
        'filename': 'scenario-bigdata.jpg',
        'title': '大数据分析',
        'prompt_en': 'Big data analytics dashboard showing data streams, charts, graphs, visualizations, distributed data processing, business intelligence, modern data center, professional analytics interface, dark theme',
        'prompt_cn': '大数据分析仪表板，显示数据流、图表、图形、可视化，分布式数据处理，商业智能，现代数据中心，专业分析界面，深色主题',
        'colors': ['#00d4ff', '#9d4edd', '#0a0e27']
    }
}

def create_gradient_background(width, height, colors):
    """创建渐变背景"""
    img = Image.new('RGB', (width, height), color=colors[2])
    draw = ImageDraw.Draw(img)
    
    # 创建渐变效果
    for i in range(height):
        ratio = i / height
        r1, g1, b1 = tuple(int(colors[0][j:j+2], 16) for j in (1, 3, 5))
        r2, g2, b2 = tuple(int(colors[1][j:j+2], 16) for j in (1, 3, 5))
        r = int(r1 * (1 - ratio) + r2 * ratio)
        g = int(g1 * (1 - ratio) + g2 * ratio)
        b = int(b1 * (1 - ratio) + b2 * ratio)
        draw.line([(0, i), (width, i)], fill=(r, g, b))
    
    return img

def create_placeholder_image(config, width=1200, height=600):
    """创建高质量的占位符图片"""
    img = create_gradient_background(width, height, config['colors'])
    draw = ImageDraw.Draw(img)
    
    # 添加标题
    try:
        # 尝试使用系统字体
        font_large = ImageFont.truetype("arial.ttf", 48) if os.name == 'nt' else ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 48)
        font_small = ImageFont.truetype("arial.ttf", 24) if os.name == 'nt' else ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # 绘制标题
    title = config['title']
    bbox = draw.textbbox((0, 0), title, font=font_large)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = height // 2 - text_height - 20
    
    # 添加文字阴影效果
    draw.text((x+2, y+2), title, font=font_large, fill=(0, 0, 0, 128))
    draw.text((x, y), title, font=font_large, fill=config['colors'][0])
    
    # 添加提示词信息（小字）
    prompt_text = f"Prompt: {config['prompt_en'][:80]}..."
    draw.text((20, height - 40), prompt_text, font=font_small, fill=(160, 174, 192))
    
    return img

def generate_with_dalle(prompt, filename, api_key=None):
    """使用DALL-E生成图片（需要API密钥）"""
    if not api_key:
        print(f"未提供API密钥，跳过 {filename}")
        return None
    
    try:
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        data = {
            "model": "dall-e-3",
            "prompt": prompt,
            "n": 1,
            "size": "1024x1024"
        }
        response = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers=headers,
            json=data,
            timeout=30
        )
        
        if response.status_code == 200:
            result = response.json()
            image_url = result['data'][0]['url']
            img_response = requests.get(image_url)
            return Image.open(BytesIO(img_response.content))
        else:
            print(f"DALL-E API错误: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"DALL-E生成失败: {e}")
        return None

def main():
    print("="*60)
    print("应用场景图片生成工具")
    print("="*60)
    
    # 创建图片目录
    os.makedirs('images/scenarios', exist_ok=True)
    
    # 检查是否有API密钥
    api_key = os.environ.get('OPENAI_API_KEY') or os.environ.get('DALLE_API_KEY')
    
    if api_key:
        print("\n检测到API密钥，将使用DALL-E生成真实图片...")
        use_api = True
    else:
        print("\n未检测到API密钥，将生成高质量占位符图片...")
        print("要使用真实图片生成，请设置环境变量: OPENAI_API_KEY")
        use_api = False
    
    print("\n开始生成图片...")
    print("-"*60)
    
    generated_files = []
    
    for key, config in SCENARIO_CONFIGS.items():
        print(f"\n处理: {config['title']} ({key})")
        filepath = f"images/scenarios/{config['filename']}"
        
        if use_api:
            print(f"  使用DALL-E生成: {config['prompt_en']}")
            img = generate_with_dalle(config['prompt_en'], config['filename'], api_key)
            if img:
                img.save(filepath, 'JPEG', quality=95)
                print(f"  ✓ 已保存: {filepath}")
                generated_files.append(filepath)
            else:
                print(f"  ✗ 生成失败，创建占位符")
                img = create_placeholder_image(config)
                img.save(filepath, 'JPEG', quality=95)
                generated_files.append(filepath)
        else:
            print(f"  创建占位符图片...")
            img = create_placeholder_image(config)
            img.save(filepath, 'JPEG', quality=95)
            print(f"  ✓ 已保存: {filepath}")
            generated_files.append(filepath)
    
    # 保存配置到JSON文件
    config_file = 'images/scenarios/prompts.json'
    with open(config_file, 'w', encoding='utf-8') as f:
        json.dump(SCENARIO_CONFIGS, f, ensure_ascii=False, indent=2)
    print(f"\n✓ 提示词配置已保存到: {config_file}")
    
    print("\n" + "="*60)
    print(f"完成！共生成 {len(generated_files)} 张图片")
    print("="*60)
    
    if not use_api:
        print("\n提示：要生成真实图片，请：")
        print("1. 获取OpenAI API密钥")
        print("2. 设置环境变量: export OPENAI_API_KEY='your-key'")
        print("3. 重新运行此脚本")
        print("\n或者使用其他图片生成服务：")
        print("- Stable Diffusion API")
        print("- Midjourney API")
        print("- 其他AI图片生成服务")

if __name__ == '__main__':
    from io import BytesIO
    main()
