#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
简单下载视频脚本
"""
import os
import urllib.request

def download_file(url, save_path):
    """下载文件"""
    try:
        print(f"正在下载: {url}")
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        urllib.request.urlretrieve(url, save_path)
        print(f"✅ 下载完成: {save_path}")
        return True
    except Exception as e:
        print(f"❌ 下载失败: {e}")
        return False

# 创建视频目录
videos_dir = "images/scenarios/videos"
os.makedirs(videos_dir, exist_ok=True)

# 云游戏视频
cloudgaming_video = "https://image-hibaocloud.oss-cn-hangzhou.aliyuncs.com/cli-web/images/video.mp4"
download_file(cloudgaming_video, os.path.join(videos_dir, "cloudgaming.mp4"))

print("\n✅ 视频下载完成！")
