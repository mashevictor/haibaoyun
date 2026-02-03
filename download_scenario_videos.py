#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
下载应用场景页面的视频
"""
import os
import requests
from urllib.parse import urljoin, urlparse
import re

def download_video(url, save_path):
    """下载视频文件"""
    try:
        print(f"正在下载: {url}")
        response = requests.get(url, stream=True, timeout=30)
        response.raise_for_status()
        
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✅ 下载完成: {save_path}")
        return True
    except Exception as e:
        print(f"❌ 下载失败 {url}: {e}")
        return False

def extract_video_urls(html_content, base_url):
    """从HTML中提取视频URL"""
    video_urls = []
    
    # 查找video标签
    video_pattern = r'<video[^>]*>.*?<source[^>]*src=["\']([^"\']+)["\']'
    matches = re.findall(video_pattern, html_content, re.DOTALL | re.IGNORECASE)
    for match in matches:
        video_url = urljoin(base_url, match)
        video_urls.append(video_url)
    
    # 查找video标签的src属性
    video_src_pattern = r'<video[^>]*src=["\']([^"\']+)["\']'
    matches = re.findall(video_src_pattern, html_content, re.IGNORECASE)
    for match in matches:
        video_url = urljoin(base_url, match)
        video_urls.append(video_url)
    
    # 查找背景视频
    bg_video_pattern = r'background.*?url\(["\']?([^"\']+\.(mp4|webm|mov))["\']?\)'
    matches = re.findall(bg_video_pattern, html_content, re.IGNORECASE)
    for match in matches:
        video_url = urljoin(base_url, match[0])
        video_urls.append(video_url)
    
    return list(set(video_urls))  # 去重

def get_page_content(url):
    """获取页面内容"""
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"❌ 获取页面失败 {url}: {e}")
        return None

def main():
    base_url = "https://hbc.hibaocloud.com/test-powerversechain-web"
    
    pages = [
        {
            "url": f"{base_url}/cloudgaming.html",
            "name": "cloudgaming",
            "title": "云游戏"
        },
        {
            "url": f"{base_url}/computingpowerexchange.html",
            "name": "computingpowerexchange",
            "title": "算力交易"
        }
    ]
    
    videos_dir = "images/scenarios/videos"
    os.makedirs(videos_dir, exist_ok=True)
    
    for page in pages:
        print(f"\n{'='*60}")
        print(f"处理页面: {page['title']} ({page['name']})")
        print(f"URL: {page['url']}")
        print(f"{'='*60}\n")
        
        # 获取页面内容
        html_content = get_page_content(page['url'])
        if not html_content:
            continue
        
        # 提取视频URL
        video_urls = extract_video_urls(html_content, page['url'])
        
        if not video_urls:
            print(f"⚠️  未找到视频，尝试查找其他媒体资源...")
            # 查找所有可能的视频链接
            all_links = re.findall(r'href=["\']([^"\']+\.(mp4|webm|mov))["\']', html_content, re.IGNORECASE)
            for link in all_links:
                video_url = urljoin(page['url'], link[0])
                video_urls.append(video_url)
        
        if video_urls:
            print(f"找到 {len(video_urls)} 个视频:")
            for i, video_url in enumerate(video_urls, 1):
                print(f"  {i}. {video_url}")
            
            # 下载第一个视频
            if video_urls:
                video_url = video_urls[0]
                ext = os.path.splitext(urlparse(video_url).path)[1] or '.mp4'
                save_path = os.path.join(videos_dir, f"{page['name']}{ext}")
                download_video(video_url, save_path)
        else:
            print(f"⚠️  未找到视频文件")
            # 保存HTML内容以供分析
            html_save_path = f"temp_{page['name']}.html"
            with open(html_save_path, 'w', encoding='utf-8') as f:
                f.write(html_content)
            print(f"已保存HTML到: {html_save_path}")

if __name__ == "__main__":
    main()
