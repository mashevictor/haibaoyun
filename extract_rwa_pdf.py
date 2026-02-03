#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
提取算力RWA白皮书PDF内容，重点查找算力港和XAI代币相关内容
"""
import sys
import os

try:
    import pdfplumber
    
    pdf_path = '算力RWA白皮书.pdf'
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
            with open('算力RWA白皮书内容.txt', 'w', encoding='utf-8') as f:
                f.write(full_text)
            print(f"\n完整内容已保存到 算力RWA白皮书内容.txt")
            
            # 查找算力港和XAI相关内容
            print("\n" + "="*50)
            print("查找算力港相关内容：")
            print("="*50)
            lines = full_text.split('\n')
            for i, line in enumerate(lines):
                if '算力港' in line or '算力' in line and '港' in line:
                    start = max(0, i-2)
                    end = min(len(lines), i+3)
                    print(f"\n第{i+1}行附近：")
                    print('\n'.join(lines[start:end]))
            
            print("\n" + "="*50)
            print("查找XAI相关内容：")
            print("="*50)
            for i, line in enumerate(lines):
                if 'XAI' in line.upper() or 'xai' in line.lower():
                    start = max(0, i-2)
                    end = min(len(lines), i+3)
                    print(f"\n第{i+1}行附近：")
                    print('\n'.join(lines[start:end]))
                    
    else:
        print(f"文件 {pdf_path} 不存在")
        
except ImportError:
    print("pdfplumber未安装，尝试安装...")
    os.system(f"{sys.executable} -m pip install pdfplumber -q")
    print("请重新运行此脚本")
except Exception as e:
    print(f"错误: {e}")
    import traceback
    traceback.print_exc()
