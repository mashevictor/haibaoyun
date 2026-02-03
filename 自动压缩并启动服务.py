#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自动压缩图片并启动服务器
"""

import os
import sys
import subprocess
import time
from pathlib import Path

def run_compress():
    """运行图片压缩脚本"""
    print("=" * 60)
    print("开始压缩图片...")
    print("=" * 60)
    try:
        result = subprocess.run([sys.executable, 'compress_media.py'], 
                              capture_output=False, 
                              text=True)
        if result.returncode == 0:
            print("\n✓ 图片压缩完成！")
            return True
        else:
            print("\n✗ 图片压缩失败")
            return False
    except Exception as e:
        print(f"\n✗ 压缩脚本执行错误: {e}")
        return False

def start_server():
    """启动HTTP服务器"""
    print("\n" + "=" * 60)
    print("启动HTTP服务器...")
    print("=" * 60)
    print("服务器地址: http://localhost:8000")
    print("按 Ctrl+C 停止服务器")
    print("=" * 60)
    
    try:
        # 启动服务器（阻塞）
        subprocess.run([sys.executable, '-m', 'http.server', '8000'])
    except KeyboardInterrupt:
        print("\n\n服务器已停止")
    except Exception as e:
        print(f"\n✗ 启动服务器失败: {e}")

if __name__ == '__main__':
    # 先压缩图片
    if run_compress():
        # 等待1秒
        time.sleep(1)
        # 启动服务器
        start_server()
    else:
        print("\n图片压缩失败，但仍尝试启动服务器...")
        time.sleep(1)
        start_server()
