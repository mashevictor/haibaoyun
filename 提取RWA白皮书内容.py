# -*- coding: utf-8 -*-
"""提取算力RWA白皮书PDF内容"""
import os
import sys

def install_pdfplumber():
    """安装pdfplumber"""
    try:
        import pdfplumber
        return True
    except ImportError:
        print("正在安装pdfplumber...")
        os.system(f'{sys.executable} -m pip install pdfplumber -q')
        try:
            import pdfplumber
            print("✓ pdfplumber安装成功")
            return True
        except:
            print("✗ pdfplumber安装失败，请手动安装: pip install pdfplumber")
            return False

def extract_rwa_pdf():
    """提取RWA白皮书PDF文本内容"""
    if not install_pdfplumber():
        return None
    
    import pdfplumber
    
    pdf_path = '算力RWA白皮书.pdf'
    if not os.path.exists(pdf_path):
        print(f"✗ 文件不存在: {pdf_path}")
        return None
    
    print(f"正在读取PDF: {pdf_path}")
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            total_pages = len(pdf.pages)
            print(f"✓ PDF总页数: {total_pages}")
            
            all_text = []
            print("\n正在提取文字...")
            
            for i, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if text:
                    all_text.append(f"\n{'='*80}\n第 {i} 页 / 共 {total_pages} 页\n{'='*80}\n\n{text}")
                    if i % 5 == 0:
                        print(f"  已处理 {i}/{total_pages} 页...")
            
            full_text = "\n".join(all_text)
            
            # 保存完整文本
            output_file = '算力RWA白皮书内容.txt'
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write("算力RWA白皮书内容\n")
                f.write("="*80 + "\n")
                f.write(f"提取时间: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
                f.write(f"PDF文件: {pdf_path}\n")
                f.write(f"总页数: {total_pages}\n")
                f.write("="*80 + "\n\n")
                f.write(full_text)
            
            print(f"\n✓ 完整文本已保存到: {output_file}")
            print(f"✓ 总字符数: {len(full_text):,}")
            
            # 查找算力港和XAI相关内容
            print("\n" + "="*80)
            print("查找算力港相关内容：")
            print("="*80)
            lines = full_text.split('\n')
            computing_port_sections = []
            for i, line in enumerate(lines):
                if '算力港' in line:
                    start = max(0, i-5)
                    end = min(len(lines), i+15)
                    section = '\n'.join(lines[start:end])
                    computing_port_sections.append((i, section))
                    print(f"\n第{i+1}行附近：")
                    print(section)
                    print("-"*80)
            
            print("\n" + "="*80)
            print("查找XAI代币相关内容：")
            print("="*80)
            xai_sections = []
            for i, line in enumerate(lines):
                if 'XAI' in line.upper() or ('xai' in line.lower() and ('代币' in line or 'token' in line.lower())):
                    start = max(0, i-5)
                    end = min(len(lines), i+15)
                    section = '\n'.join(lines[start:end])
                    xai_sections.append((i, section))
                    print(f"\n第{i+1}行附近：")
                    print(section)
                    print("-"*80)
            
            # 保存关键内容
            key_content_file = '算力RWA白皮书关键内容.txt'
            with open(key_content_file, 'w', encoding='utf-8') as f:
                f.write("算力RWA白皮书关键内容提取\n")
                f.write("="*80 + "\n\n")
                
                f.write("【算力港相关内容】\n")
                f.write("="*80 + "\n")
                if computing_port_sections:
                    for idx, section in computing_port_sections:
                        f.write(f"\n位置：第{idx+1}行\n")
                        f.write(section)
                        f.write("\n" + "-"*80 + "\n")
                else:
                    f.write("未找到'算力港'关键词\n")
                
                f.write("\n\n【XAI代币相关内容】\n")
                f.write("="*80 + "\n")
                if xai_sections:
                    for idx, section in xai_sections:
                        f.write(f"\n位置：第{idx+1}行\n")
                        f.write(section)
                        f.write("\n" + "-"*80 + "\n")
                else:
                    f.write("未找到'XAI'关键词\n")
            
            print(f"\n✓ 关键内容已保存到: {key_content_file}")
            
            return full_text
            
    except Exception as e:
        print(f"✗ 错误: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == '__main__':
    print("="*80)
    print("算力RWA白皮书内容提取工具")
    print("="*80)
    print()
    
    text = extract_rwa_pdf()
    
    if text:
        print("\n" + "="*80)
        print("✓ 提取完成！")
        print("="*80)
        print("\n生成的文件:")
        print("  1. 算力RWA白皮书内容.txt - 完整的PDF文字内容")
        print("  2. 算力RWA白皮书关键内容.txt - 算力港和XAI相关内容")
    else:
        print("\n✗ 提取失败，请检查错误信息")
