#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
使用AI图片生成API为应用场景生成真实图片
支持多种API：Stable Diffusion, DALL-E等
"""
import os
import requests
import json
from io import BytesIO
from PIL import Image

# 场景配置和提示词
SCENARIOS = {
    'ai': {
        'filename': 'scenario-ai.jpg',
        'prompt': 'Futuristic AI neural network visualization with glowing nodes and connections, distributed GPU computing for AI model training, dark blue and cyan color scheme, high tech, 4k quality, professional photography style',
        'negative_prompt': 'blurry, low quality, distorted'
    },
    'science': {
        'filename': 'scenario-science.jpg',
        'prompt': 'Scientific computing visualization showing molecular structures, data analysis graphs, research simulations, high-performance computing clusters, professional scientific atmosphere, dark theme with blue accents, modern laboratory',
        'negative_prompt': 'cartoon, illustration, low quality'
    },
    'render': {
        'filename': 'scenario-render.jpg',
        'prompt': '3D rendering workspace with cinematic lighting, 3D models, animation frames, visual effects, distributed rendering network, creative digital art, modern studio environment, professional',
        'negative_prompt': 'amateur, low resolution'
    },
    'edge': {
        'filename': 'scenario-edge.jpg',
        'prompt': 'Edge computing network diagram showing distributed nodes connected globally, low latency data flow visualization, IoT devices, smart city concept, futuristic technology, blue and green neon lights, modern',
        'negative_prompt': 'outdated, low tech'
    },
    'blockchain': {
        'filename': 'scenario-blockchain.jpg',
        'prompt': 'Blockchain network visualization with interconnected blocks, smart contracts, Web3 applications, decentralized network nodes, cryptocurrency symbols, modern blockchain technology, dark theme with glowing elements, professional',
        'negative_prompt': 'simple, basic design'
    },
    'bigdata': {
        'filename': 'scenario-bigdata.jpg',
        'prompt': 'Big data analytics dashboard showing data streams, charts, graphs, visualizations, distributed data processing, business intelligence, modern data center, professional analytics interface, dark theme',
        'negative_prompt': 'cluttered, unprofessional'
    }
}

def generate_with_stable_diffusion_api(prompt, negative_prompt="", api_url=None):
    """
    使用Stable Diffusion API生成图片
    可以使用Hugging Face Inference API或其他免费服务
    """
    if not api_url:
        # 使用Hugging Face的免费API
        api_url = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"
    
    headers = {
        "Authorization": f"Bearer {os.environ.get('HUGGINGFACE_API_KEY', '')}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "inputs": prompt,
        "parameters": {
            "negative_prompt": negative_prompt,
            "num_inference_steps": 50,
            "guidance_scale": 7.5
        }
    }
    
    try:
        response = requests.post(api_url, headers=headers, json=payload, timeout=60)
        if response.status_code == 200:
            return Image.open(BytesIO(response.content))
        else:
            print(f"API错误: {response.status_code}")
            return None
    except Exception as e:
        print(f"生成失败: {e}")
        return None

def generate_with_dalle(prompt, api_key):
    """使用OpenAI DALL-E生成图片"""
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
    
    try:
        response = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers=headers,
            json=data,
            timeout=60
        )
        if response.status_code == 200:
            result = response.json()
            img_url = result['data'][0]['url']
            img_response = requests.get(img_url)
            return Image.open(BytesIO(img_response.content))
        return None
    except Exception as e:
        print(f"DALL-E错误: {e}")
        return None

def create_fallback_image(scenario_key, width=1200, height=600):
    """创建高质量的占位符图片"""
    from PIL import ImageDraw
    
    img = Image.new('RGB', (width, height), color=(10, 14, 39))
    draw = ImageDraw.Draw(img)
    
    # 获取场景颜色
    colors = {
        'ai': (0, 212, 255),
        'science': (0, 102, 255),
        'render': (255, 107, 107),
        'edge': (0, 255, 136),
        'blockchain': (255, 215, 0),
        'bigdata': (157, 78, 221)
    }
    color = colors.get(scenario_key, (0, 212, 255))
    
    # 渐变背景
    for i in range(height):
        ratio = i / height
        r = int(10 * (1 - ratio) + color[0] * ratio * 0.3)
        g = int(14 * (1 - ratio) + color[1] * ratio * 0.3)
        b = int(39 * (1 - ratio) + color[2] * ratio * 0.3)
        draw.line([(0, i), (width, i)], fill=(r, g, b))
    
    # 添加装饰性圆形
    center_x, center_y = width // 2, height // 2
    for i in range(5):
        radius = 50 + i * 40
        alpha = int(30 * (1 - i * 0.15))
        outline_color = tuple(min(255, c + alpha) for c in color)
        draw.ellipse([center_x - radius, center_y - radius,
                     center_x + radius, center_y + radius],
                    outline=outline_color, width=2)
    
    return img

def main():
    print("="*60)
    print("AI图片生成工具")
    print("="*60)
    
    os.makedirs('images/scenarios', exist_ok=True)
    
    # 检查API密钥
    openai_key = os.environ.get('OPENAI_API_KEY')
    hf_key = os.environ.get('HUGGINGFACE_API_KEY')
    
    use_ai = False
    api_type = None
    
    if openai_key:
        use_ai = True
        api_type = 'dalle'
        print("\n✓ 检测到OpenAI API密钥，使用DALL-E生成")
    elif hf_key:
        use_ai = True
        api_type = 'sd'
        print("\n✓ 检测到Hugging Face API密钥，使用Stable Diffusion生成")
    else:
        print("\n⚠ 未检测到API密钥，将生成高质量占位符")
        print("提示：设置 OPENAI_API_KEY 或 HUGGINGFACE_API_KEY 环境变量以生成真实图片")
    
    print("\n开始生成图片...")
    print("-"*60)
    
    generated = []
    
    for key, config in SCENARIOS.items():
        print(f"\n[{key}] {config['filename']}")
        filepath = f"images/scenarios/{config['filename']}"
        
        img = None
        
        if use_ai:
            if api_type == 'dalle':
                print(f"  使用DALL-E生成...")
                img = generate_with_dalle(config['prompt'], openai_key)
            elif api_type == 'sd':
                print(f"  使用Stable Diffusion生成...")
                img = generate_with_stable_diffusion_api(
                    config['prompt'], 
                    config['negative_prompt']
                )
            
            if img:
                # 调整尺寸
                img = img.resize((1200, 600), Image.Resampling.LANCZOS)
                img.save(filepath, 'JPEG', quality=95)
                print(f"  ✓ 已保存: {filepath}")
                generated.append(filepath)
            else:
                print(f"  ⚠ 生成失败，创建占位符")
                img = create_fallback_image(key)
                img.save(filepath, 'JPEG', quality=95)
                generated.append(filepath)
        else:
            print(f"  创建占位符图片...")
            img = create_fallback_image(key)
            img.save(filepath, 'JPEG', quality=95)
            print(f"  ✓ 已保存: {filepath}")
            generated.append(filepath)
    
    # 保存提示词配置
    with open('images/scenarios/prompts.json', 'w', encoding='utf-8') as f:
        json.dump(SCENARIOS, f, ensure_ascii=False, indent=2)
    
    print("\n" + "="*60)
    print(f"完成！共生成 {len(generated)} 张图片")
    print("="*60)
    
    if not use_ai:
        print("\n要生成真实AI图片，请：")
        print("1. 获取OpenAI API密钥: https://platform.openai.com/api-keys")
        print("   或 Hugging Face API密钥: https://huggingface.co/settings/tokens")
        print("2. 设置环境变量:")
        print("   Windows: set OPENAI_API_KEY=your-key")
        print("   Linux/Mac: export OPENAI_API_KEY=your-key")
        print("3. 重新运行此脚本")

if __name__ == '__main__':
    main()
