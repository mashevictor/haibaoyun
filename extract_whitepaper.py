# -*- coding: utf-8 -*-
"""提取白皮书PDF内容"""
import os
import sys

def install_pdfplumber():
    """安装pdfplumber"""
    try:
        import pdfplumber
        return True
    except ImportError:
        print("安装pdfplumber...")
        os.system(f'{sys.executable} -m pip install pdfplumber -q')
        try:
            import pdfplumber
            return True
        except:
            return False

def extract_pdf():
    """提取PDF文本"""
    if not install_pdfplumber():
        print("无法安装pdfplumber，请手动安装: pip install pdfplumber")
        return
    
    import pdfplumber
    
    pdf_path = 'PowerVerseDecentralizedComputingWhitepaper-zh.pdf'
    if not os.path.exists(pdf_path):
        print(f"文件不存在: {pdf_path}")
        return
    
    print(f"读取PDF: {pdf_path}")
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            print(f"总页数: {len(pdf.pages)}")
            
            all_text = []
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    all_text.append(f"\n{'='*60}\n第 {i+1} 页\n{'='*60}\n{text}")
            
            full_text = "\n".join(all_text)
            
            # 保存
            output_file = 'whitepaper_content.txt'
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(full_text)
            
            print(f"\n✓ 内容已保存到: {output_file}")
            print(f"总字符数: {len(full_text)}")
            print(f"\n预览（前2000字符）：")
            print("-"*60)
            print(full_text[:2000])
            print("...")
            
            return full_text
            
    except Exception as e:
        print(f"错误: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == '__main__':
    extract_pdf()
