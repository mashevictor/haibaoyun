#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
重启Web服务器
"""
import subprocess
import os
import time
import socket
import sys

PORT = 8000

def check_port(port):
    """检查端口是否被占用"""
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('127.0.0.1', port))
    sock.close()
    return result == 0

def kill_process_on_port(port):
    """终止占用指定端口的进程"""
    try:
        if os.name == 'nt':  # Windows
            result = subprocess.run(
                ['netstat', '-ano'],
                capture_output=True,
                text=True
            )
            for line in result.stdout.split('\n'):
                if f':{port}' in line and 'LISTENING' in line:
                    parts = line.split()
                    if len(parts) > 4:
                        pid = parts[-1]
                        try:
                            subprocess.run(['taskkill', '/F', '/PID', pid], 
                                         capture_output=True)
                            print(f"✅ 已终止进程 PID: {pid}")
                        except:
                            pass
    except Exception as e:
        print(f"⚠️  终止进程时出错: {e}")

def start_server():
    """启动服务器"""
    try:
        print("正在启动服务器...")
        # 使用subprocess.Popen在后台启动
        process = subprocess.Popen(
            [sys.executable, 'start_server.py'],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            creationflags=subprocess.CREATE_NEW_CONSOLE if os.name == 'nt' else 0
        )
        time.sleep(2)
        
        # 检查服务器是否启动成功
        if check_port(PORT):
            print(f"✅ 服务器已成功启动！")
            print(f"   地址: http://localhost:{PORT}")
            print(f"   主页: http://localhost:{PORT}/index.html")
            return True
        else:
            print("⚠️  服务器可能未成功启动，请检查错误信息")
            return False
    except Exception as e:
        print(f"❌ 启动服务器时出错: {e}")
        return False

def main():
    print("=" * 60)
    print("重启Web服务器")
    print("=" * 60)
    print()
    
    # 检查并终止占用端口的进程
    if check_port(PORT):
        print(f"检测到端口 {PORT} 已被占用，正在终止...")
        kill_process_on_port(PORT)
        time.sleep(2)
    
    # 启动服务器
    if start_server():
        print()
        print("=" * 60)
        print("✅ 服务器重启完成！")
        print("=" * 60)
    else:
        print()
        print("=" * 60)
        print("❌ 服务器启动失败")
        print("=" * 60)
        print("请手动运行: python start_server.py")

if __name__ == "__main__":
    main()
