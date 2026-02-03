#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
提取PDF内容
"""
import sys
import os

try:
    import pdfplumber
    
    pdf_path = '宣传册.pdf'
    if os.path.exists(pdf_path):
        print("正在读取PDF文件...")
        with pdfplumber.open(pdf_path) as pdf:
            text_content = []
            for i, page in enumerate(pdf.pages[:20]):  # 读取前20页
                text = page.extract_text()
                if text:
                    text_content.append(f"=== 第 {i+1} 页 ===\n{text}\n")
            
            full_text = "\n".join(text_content)
            print(f"成功读取 {len(pdf.pages)} 页")
            print("\n" + "="*50)
            print("PDF内容预览（前3000字符）：")
            print("="*50)
            print(full_text[:3000])
            
            # 保存到文件
            with open('pdf_content.txt', 'w', encoding='utf-8') as f:
                f.write(full_text)
            print(f"\n完整内容已保存到 pdf_content.txt")
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
