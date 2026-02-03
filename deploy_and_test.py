#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
部署前后端并运行自动化测试
"""
import subprocess
import sys
import os
import time
import urllib.request
import urllib.error
import threading
import signal
import shutil

# 全局变量
server_process = None
test_process = None

def check_port(port=8000):
    """检查端口是否被占用"""
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('127.0.0.1', port))
    sock.close()
    return result == 0

def check_server_running(url='http://localhost:8000', timeout=2):
    """检查服务器是否运行"""
    try:
        urllib.request.urlopen(url, timeout=timeout)
        return True
    except:
        return False

def start_server(port=8000):
    """启动Python HTTP服务器"""
    global server_process
    
    if check_port(port):
        print(f"⚠️  端口 {port} 已被占用，尝试使用现有服务...")
        if check_server_running(f'http://localhost:{port}'):
            print(f"✅ 服务器已在 http://localhost:{port} 运行")
            return True
        else:
            print(f"❌ 端口 {port} 被占用但服务不可用")
            return False
    
    print(f"🚀 正在启动服务器 (端口 {port})...")
    
    try:
        # 启动服务器
        if sys.platform == 'win32':
            server_process = subprocess.Popen(
                ['python', '-m', 'http.server', str(port)],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                creationflags=subprocess.CREATE_NO_WINDOW
            )
        else:
            server_process = subprocess.Popen(
                ['python', '-m', 'http.server', str(port)],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
        
        # 等待服务器启动
        max_retries = 10
        for i in range(max_retries):
            time.sleep(1)
            if check_server_running(f'http://localhost:{port}'):
                print(f"✅ 服务器已成功启动: http://localhost:{port}")
                return True
            print(f"   等待服务器启动... ({i+1}/{max_retries})")
        
        print("❌ 服务器启动超时")
        return False
        
    except Exception as e:
        print(f"❌ 启动服务器失败: {e}")
        return False

def stop_server():
    """停止服务器"""
    global server_process
    if server_process:
        try:
            server_process.terminate()
            server_process.wait(timeout=5)
            print("✅ 服务器已停止")
        except:
            try:
                server_process.kill()
            except:
                pass
        server_process = None

def find_node_npm():
    """查找Node.js和npm的路径"""
    import shutil
    
    # 尝试直接查找
    node_path = shutil.which('node')
    npm_path = shutil.which('npm')
    
    if not node_path:
        # 尝试常见路径
        common_paths = [
            r'C:\Program Files\nodejs\node.exe',
            r'C:\Program Files (x86)\nodejs\node.exe',
            os.path.expanduser(r'~\AppData\Roaming\npm\node.exe'),
        ]
        for path in common_paths:
            if os.path.exists(path):
                node_path = path
                break
    
    if not npm_path:
        # npm通常在node同一目录
        if node_path:
            npm_path = os.path.join(os.path.dirname(node_path), 'npm.cmd')
            if not os.path.exists(npm_path):
                npm_path = shutil.which('npm.cmd') or shutil.which('npm')
    
    return node_path, npm_path

def run_tests():
    """运行Playwright测试"""
    global test_process
    
    print()
    print("=" * 60)
    print("开始运行自动化测试...")
    print("=" * 60)
    print()
    
    # 查找Node.js和npm
    node_path, npm_path = find_node_npm()
    
    if not node_path:
        print("❌ 错误: 未找到Node.js，请先安装Node.js")
        print("💡 下载地址: https://nodejs.org/")
        return False
    
    if not npm_path:
        print("❌ 错误: 未找到npm")
        return False
    
    print(f"✅ 找到Node.js: {node_path}")
    print(f"✅ 找到npm: {npm_path}")
    print()
    
    # 检查依赖
    if not os.path.exists('node_modules'):
        print("📦 正在安装依赖...")
        try:
            # 使用完整路径或系统PATH中的npm
            npm_cmd = [npm_path] if os.path.exists(npm_path) else ['npm']
            subprocess.run(npm_cmd + ['install'], check=True, cwd=os.getcwd())
            print("✅ 依赖安装完成")
        except subprocess.CalledProcessError as e:
            print(f"❌ 依赖安装失败: {e}")
            return False
        except Exception as e:
            print(f"❌ 依赖安装出错: {e}")
            return False
    
    # 运行测试
    try:
        print("🧪 运行Playwright测试...")
        print()
        
        # 使用完整路径或系统PATH中的npm
        npm_cmd = [npm_path] if os.path.exists(npm_path) else ['npm']
        result = subprocess.run(
            npm_cmd + ['test'],
            cwd=os.getcwd(),
            text=True,
            env=os.environ.copy()  # 继承环境变量，确保PATH正确
        )
        
        print()
        if result.returncode == 0:
            print("=" * 60)
            print("✅ 所有测试通过！")
            print("=" * 60)
        else:
            print("=" * 60)
            print("❌ 部分测试失败")
            print("=" * 60)
            print()
            print("💡 查看详细报告:")
            print("   npm run test:report")
            print("   或打开: playwright-report/index.html")
        
        return result.returncode == 0
        
    except KeyboardInterrupt:
        print("\n⚠️  测试被用户中断")
        return False
    except Exception as e:
        print(f"❌ 运行测试时出错: {e}")
        return False

def signal_handler(sig, frame):
    """处理中断信号"""
    print("\n\n⚠️  收到中断信号，正在清理...")
    stop_server()
    sys.exit(0)

def main():
    """主函数"""
    global server_process
    
    # 注册信号处理
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    print("=" * 60)
    print("PowerVerse Chain - 部署与测试")
    print("=" * 60)
    print()
    
    # 启动服务器
    if not start_server(8000):
        print("❌ 无法启动服务器，测试终止")
        return 1
    
    try:
        # 运行测试
        test_success = run_tests()
        
        return 0 if test_success else 1
        
    finally:
        # 清理
        print()
        print("=" * 60)
        print("清理资源...")
        print("=" * 60)
        stop_server()
        print("✅ 清理完成")

if __name__ == '__main__':
    try:
        exit_code = main()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print("\n\n⚠️  程序被用户中断")
        stop_server()
        sys.exit(1)
