#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
简单的HTTP服务器启动脚本
"""
import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# 设置端口
PORT = 8000

# 获取当前脚本所在目录
BASE_DIR = Path(__file__).parent.absolute()

# 切换到项目目录
os.chdir(BASE_DIR)

# 创建服务器
Handler = http.server.SimpleHTTPRequestHandler

class MyHTTPRequestHandler(Handler):
    def end_headers(self):
        # 添加CORS头，允许跨域访问
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        # 添加缓存控制头，确保资源更新
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

try:
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print("Web服务器已启动！")
        print("=" * 60)
        print(f"服务器地址: http://localhost:{PORT}")
        print(f"主页地址: http://localhost:{PORT}/index.html")
        print("=" * 60)
        print("按 Ctrl+C 停止服务器")
        print("=" * 60)
        print()
        
        # 自动打开浏览器
        try:
            webbrowser.open(f'http://localhost:{PORT}/index.html')
        except:
            pass
        
        # 启动服务器
        httpd.serve_forever()
        
except OSError as e:
    if "Address already in use" in str(e) or "地址已在使用" in str(e):
        print(f"错误: 端口 {PORT} 已被占用")
        print("请尝试以下方法:")
        print(f"1. 关闭占用端口 {PORT} 的其他程序")
        print(f"2. 或者修改脚本中的 PORT 变量为其他端口（如 8080）")
    else:
        print(f"启动服务器时出错: {e}")
except KeyboardInterrupt:
    print("\n服务器已停止")
except Exception as e:
    print(f"发生错误: {e}")
