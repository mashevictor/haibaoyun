#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
运行Playwright自动化测试脚本
"""
import subprocess
import sys
import os
import time

def check_server():
    """检查服务器是否运行"""
    import urllib.request
    try:
        urllib.request.urlopen('http://localhost:8000', timeout=2)
        return True
    except:
        return False

def start_server():
    """启动服务器"""
    print("正在启动服务器...")
    # 使用subprocess启动服务器（后台运行）
    if sys.platform == 'win32':
        subprocess.Popen(['python', '-m', 'http.server', '8000'], 
                        creationflags=subprocess.CREATE_NEW_CONSOLE)
    else:
        subprocess.Popen(['python', '-m', 'http.server', '8000'])
    time.sleep(3)
    print("✅ 服务器已启动")

def main():
    print("=" * 50)
    print("PowerVerse Chain 自动化测试")
    print("=" * 50)
    print()
    
    # 检查服务器
    if not check_server():
        start_server()
    else:
        print("✅ 服务器正在运行")
    
    print()
    print("开始运行Playwright测试...")
    print()
    
    # 运行测试
    try:
        result = subprocess.run(['npm', 'test'], 
                              cwd=os.getcwd(),
                              capture_output=False,
                              text=True)
        
        if result.returncode == 0:
            print()
            print("=" * 50)
            print("✅ 所有测试通过！")
            print("=" * 50)
        else:
            print()
            print("=" * 50)
            print("❌ 部分测试失败，请查看上面的错误信息")
            print("=" * 50)
            print()
            print("查看详细报告: npm run test:report")
        
    except FileNotFoundError:
        print("❌ 错误: 找不到npm命令，请确保已安装Node.js")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 运行测试时出错: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
