#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
运行性能测试的主脚本
"""

import subprocess
import sys
import time
import os
from pathlib import Path

def check_dependencies():
    """检查依赖"""
    print("=" * 60)
    print("检查依赖...")
    print("=" * 60)
    
    # 检查Python包
    try:
        import PIL
        print("✓ Pillow 已安装")
    except ImportError:
        print("安装 Pillow...")
        subprocess.run([sys.executable, '-m', 'pip', 'install', 'Pillow', '-q'])
    
    # 检查Node.js和Playwright
    try:
        result = subprocess.run(['node', '--version'], 
                              capture_output=True, text=True)
        print(f"✓ Node.js {result.stdout.strip()}")
    except FileNotFoundError:
        print("✗ Node.js 未安装")
        return False
    
    try:
        result = subprocess.run(['npx', 'playwright', '--version'], 
                              capture_output=True, text=True)
        print(f"✓ Playwright 已安装")
    except FileNotFoundError:
        print("安装 Playwright...")
        subprocess.run(['npm', 'install', '@playwright/test'])
        subprocess.run(['npx', 'playwright', 'install', 'chromium'])
    
    return True

def compress_media():
    """压缩媒体文件"""
    print("\n" + "=" * 60)
    print("压缩图片和视频...")
    print("=" * 60)
    
    script_path = Path('compress_media.py')
    if script_path.exists():
        result = subprocess.run([sys.executable, str(script_path)])
        return result.returncode == 0
    else:
        print("警告: compress_media.py 不存在")
        return False

def start_server():
    """启动测试服务器"""
    print("\n" + "=" * 60)
    print("启动测试服务器...")
    print("=" * 60)
    
    # 检查端口是否被占用
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('localhost', 8000))
    sock.close()
    
    if result == 0:
        print("端口8000已被占用，使用现有服务器")
        return None
    else:
        print("启动新的HTTP服务器...")
        process = subprocess.Popen(
            [sys.executable, '-m', 'http.server', '8000'],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        time.sleep(3)  # 等待服务器启动
        return process

def run_tests():
    """运行性能测试"""
    print("\n" + "=" * 60)
    print("运行性能测试...")
    print("=" * 60)
    
    test_file = Path('tests/performance.spec.js')
    config_file = Path('playwright.config.performance.js')
    
    if not test_file.exists():
        print(f"错误: {test_file} 不存在")
        return False
    
    cmd = ['npx', 'playwright', 'test', str(test_file)]
    if config_file.exists():
        cmd.extend(['--config', str(config_file)])
    
    result = subprocess.run(cmd)
    return result.returncode == 0

def main():
    """主函数"""
    print("=" * 60)
    print("页面性能和多语言测试")
    print("=" * 60)
    
    # 检查依赖
    if not check_dependencies():
        print("\n错误: 依赖检查失败")
        sys.exit(1)
    
    # 压缩媒体文件
    compress_media()
    
    # 启动服务器
    server_process = start_server()
    
    try:
        # 运行测试
        success = run_tests()
        
        if success:
            print("\n" + "=" * 60)
            print("✓ 所有测试通过！")
            print("=" * 60)
        else:
            print("\n" + "=" * 60)
            print("✗ 部分测试失败，请查看报告")
            print("=" * 60)
        
        print("\n测试报告位置:")
        print("  - HTML报告: playwright-report-performance/index.html")
        print("  - JSON结果: test-results/performance-results.json")
        
    finally:
        # 关闭服务器
        if server_process:
            print("\n关闭测试服务器...")
            server_process.terminate()
            server_process.wait()

if __name__ == '__main__':
    main()
