#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
启动HTTP服务器用于测试（保持运行）
"""
import http.server
import socketserver
import sys
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """自定义请求处理器，添加CORS支持"""
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def log_message(self, format, *args):
        """自定义日志格式"""
        print(f"[{self.address_string()}] {format % args}")

def main():
    """启动服务器"""
    # 切换到项目根目录
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("=" * 60)
            print(f"🚀 HTTP服务器已启动")
            print(f"📍 地址: http://localhost:{PORT}")
            print(f"📁 目录: {os.getcwd()}")
            print("=" * 60)
            print()
            print("💡 提示:")
            print("   - 服务器正在运行，可以开始测试")
            print("   - 按 Ctrl+C 停止服务器")
            print()
            print("等待请求...")
            print("-" * 60)
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n⚠️  收到中断信号")
        print("✅ 服务器已停止")
        sys.exit(0)
    except OSError as e:
        if e.errno == 98 or "Address already in use" in str(e):
            print(f"⚠️  端口 {PORT} 已被占用")
            print(f"💡 如果已有服务器在运行，可以直接运行测试")
            print(f"   或者停止占用端口的进程后重试")
        else:
            print(f"❌ 启动服务器失败: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 发生错误: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
