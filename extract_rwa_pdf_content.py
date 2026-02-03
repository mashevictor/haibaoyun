#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
提取算力RWA白皮书PDF内容并保存为TXT
"""
import sys
import os

try:
    import pdfplumber
    
    pdf_path = r'C:\Users\jiang\Desktop\嗨豹云官网代码\算力RWA白皮书.pdf'
    output_path = r'C:\Users\jiang\Desktop\嗨豹云官网代码\算力RWA白皮书内容.txt'
    
    if os.path.exists(pdf_path):
        print("正在读取PDF文件...")
        with pdfplumber.open(pdf_path) as pdf:
            text_content = []
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    text_content.append(f"=== 第 {i+1} 页 ===\n{text}\n")
            
            full_text = "\n".join(text_content)
            print(f"成功读取 {len(pdf.pages)} 页")
            
            # 保存到文件
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(full_text)
            print(f"\n完整内容已保存到: {output_path}")
            
            # 查找算力港相关内容
            print("\n" + "="*60)
            print("查找算力港相关内容：")
            print("="*60)
            lines = full_text.split('\n')
            found_computing_port = False
            for i, line in enumerate(lines):
                if '算力港' in line:
                    found_computing_port = True
                    start = max(0, i-3)
                    end = min(len(lines), i+10)
                    print(f"\n第{i+1}行附近（算力港相关内容）：")
                    print('\n'.join(lines[start:end]))
                    print("\n" + "-"*60)
            
            if not found_computing_port:
                print("未找到'算力港'关键词，尝试查找相关关键词...")
                for i, line in enumerate(lines):
                    if '算力' in line and ('港' in line or '平台' in line or '基础设施' in line):
                        start = max(0, i-3)
                        end = min(len(lines), i+10)
                        print(f"\n第{i+1}行附近：")
                        print('\n'.join(lines[start:end]))
                        print("\n" + "-"*60)
            
            # 查找XAI相关内容
            print("\n" + "="*60)
            print("查找XAI代币相关内容：")
            print("="*60)
            found_xai = False
            for i, line in enumerate(lines):
                if 'XAI' in line.upper() or 'xai' in line.lower():
                    found_xai = True
                    start = max(0, i-3)
                    end = min(len(lines), i+10)
                    print(f"\n第{i+1}行附近（XAI相关内容）：")
                    print('\n'.join(lines[start:end]))
                    print("\n" + "-"*60)
            
            if not found_xai:
                print("未找到'XAI'关键词，尝试查找RWA代币相关内容...")
                for i, line in enumerate(lines):
                    if ('RWA' in line.upper() or 'rwa' in line.lower()) and ('代币' in line or 'token' in line.lower() or 'Token' in line):
                        start = max(0, i-3)
                        end = min(len(lines), i+10)
                        print(f"\n第{i+1}行附近：")
                        print('\n'.join(lines[start:end]))
                        print("\n" + "-"*60)
                        
    else:
        print(f"文件不存在: {pdf_path}")
        
except ImportError:
    print("pdfplumber未安装，正在安装...")
    os.system(f"{sys.executable} -m pip install pdfplumber -q")
    print("安装完成，请重新运行此脚本")
except Exception as e:
    print(f"错误: {e}")
    import traceback
    traceback.print_exc()
