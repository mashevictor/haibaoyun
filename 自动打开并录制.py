#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
自动打开网页并准备录制视频
"""
import webbrowser
import time
import os
import subprocess
import sys
from pathlib import Path

# 设置端口
PORT = 8000
BASE_DIR = Path(__file__).parent.absolute()
os.chdir(BASE_DIR)

def start_server(port=8000):
    """启动HTTP服务器"""
    import http.server
    import socketserver
    import threading
    
    Handler = http.server.SimpleHTTPRequestHandler
    
    class MyHTTPRequestHandler(Handler):
        def end_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            super().end_headers()
    
    httpd = socketserver.TCPServer(("", port), MyHTTPRequestHandler)
    
    def serve():
        httpd.serve_forever()
    
    server_thread = threading.Thread(target=serve, daemon=True)
    server_thread.start()
    
    # 等待服务器启动
    time.sleep(1)
    return httpd, port

def open_browser(port=8000):
    """打开浏览器"""
    url = f'http://localhost:{port}/index.html'
    print(f"正在打开浏览器: {url}")
    webbrowser.open(url)
    return url

def show_recording_tips():
    """显示录制提示"""
    print("\n" + "="*60)
    print("📹 录制视频提示")
    print("="*60)
    print("\nWindows 10/11 自带录制工具：")
    print("1. 按 Win + G 打开 Xbox Game Bar")
    print("2. 点击录制按钮（红色圆点）开始录制")
    print("3. 或者按 Win + Alt + R 直接开始录制")
    print("4. 按 Win + Alt + R 停止录制")
    print("\n其他录制工具：")
    print("- OBS Studio (免费，专业): https://obsproject.com/")
    print("- ShareX (免费，开源): https://getsharex.com/")
    print("- Bandicam (付费): https://www.bandicam.com/")
    print("\n" + "="*60)
    print("\n服务器正在运行，浏览器已打开")
    print("按 Ctrl+C 停止服务器\n")

def main():
    """主函数"""
    print("="*60)
    print("🚀 PowerVerse Chain 网站自动启动")
    print("="*60)
    print("\n正在启动服务器...")
    
    port = 8000
    
    try:
        # 启动服务器
        httpd, port = start_server(port)
        print(f"✅ 服务器已启动在端口 {port}")
        
        # 打开浏览器
        url = open_browser(port)
        print(f"✅ 浏览器已打开: {url}")
        
        # 显示录制提示
        show_recording_tips()
        
        # 保持服务器运行
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n\n正在关闭服务器...")
            httpd.shutdown()
            print("✅ 服务器已关闭")
            
    except OSError as e:
        if "Address already in use" in str(e) or "地址已在使用" in str(e):
            print(f"\n⚠️  端口 {port} 已被占用")
            print("尝试使用端口 8080...")
            port = 8080
            try:
                httpd, port = start_server(port)
                print(f"✅ 服务器已启动在端口 {port}")
                url = open_browser(port)
                print(f"✅ 浏览器已打开: {url}")
                show_recording_tips()
                while True:
                    time.sleep(1)
            except Exception as e2:
                print(f"❌ 无法启动服务器: {e2}")
                print("请手动关闭占用端口的程序，或修改脚本中的端口号")
        else:
            print(f"❌ 启动服务器时出错: {e}")
    except Exception as e:
        print(f"❌ 发生错误: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
