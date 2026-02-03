# -*- coding: utf-8 -*-
"""提取PDF文字并生成总结"""
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

def extract_pdf_text():
    """提取PDF文本内容"""
    if not install_pdfplumber():
        return None
    
    import pdfplumber
    
    pdf_path = 'PowerVerseDecentralizedComputingWhitepaper-zh.pdf'
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
                    # 添加页码标记
                    all_text.append(f"\n{'='*80}\n第 {i} 页 / 共 {total_pages} 页\n{'='*80}\n\n{text}")
                    if i % 10 == 0:
                        print(f"  已处理 {i}/{total_pages} 页...")
            
            full_text = "\n".join(all_text)
            
            # 保存完整文本
            output_file = 'PowerVerse白皮书全文.txt'
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write("PowerVerse Chain 去中心化计算网络白皮书\n")
                f.write("="*80 + "\n")
                f.write(f"提取时间: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
                f.write(f"PDF文件: {pdf_path}\n")
                f.write(f"总页数: {total_pages}\n")
                f.write("="*80 + "\n\n")
                f.write(full_text)
            
            print(f"\n✓ 完整文本已保存到: {output_file}")
            print(f"✓ 总字符数: {len(full_text):,}")
            
            # 生成总结
            generate_summary(full_text, total_pages)
            
            return full_text
            
    except Exception as e:
        print(f"✗ 错误: {e}")
        import traceback
        traceback.print_exc()
        return None

def generate_summary(text, total_pages):
    """生成PDF内容总结"""
    print("\n正在生成总结...")
    
    # 提取关键信息
    summary_lines = []
    summary_lines.append("PowerVerse Chain 白皮书内容总结")
    summary_lines.append("="*80)
    summary_lines.append(f"PDF总页数: {total_pages}")
    summary_lines.append(f"文本总字符数: {len(text):,}")
    summary_lines.append("="*80)
    summary_lines.append("")
    
    # 尝试识别主要章节
    import re
    
    # 查找章节标题
    chapter_patterns = [
        r'第\s*\d+\s*章[：:]\s*([^\n]+)',
        r'\d+[\.\s]+([^\n]+章节[^\n]*)',
        r'([一二三四五六七八九十]+[、\.]\s*[^\n]+)',
        r'(引言|概述|介绍|背景)',
        r'(技术架构|技术方案|架构设计)',
        r'(代币|经济模型|Token|Tokenomics)',
        r'(路线图|Roadmap|发展规划)',
        r'(团队|Team|关于我们)',
        r'(应用场景|应用|用例)',
        r'(安全|Security|安全性)',
    ]
    
    found_chapters = []
    for pattern in chapter_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        for match in matches:
            if match and match not in found_chapters:
                found_chapters.append(match)
    
    if found_chapters:
        summary_lines.append("主要章节/主题:")
        for i, chapter in enumerate(found_chapters[:20], 1):  # 最多显示20个
            summary_lines.append(f"  {i}. {chapter}")
        summary_lines.append("")
    
    # 提取关键数字和统计信息
    summary_lines.append("内容统计:")
    
    # 段落数（按双换行分割）
    paragraphs = [p.strip() for p in re.split(r'\n\s*\n+', text) if p.strip()]
    summary_lines.append(f"  - 段落数: {len(paragraphs)}")
    
    # 列表项数
    list_items = re.findall(r'[•·▪▫◦‣⁃]\s+[^\n]+|^\d+[\.\)]\s+[^\n]+|^[-*]\s+[^\n]+', text, re.MULTILINE)
    summary_lines.append(f"  - 列表项数: {len(list_items)}")
    
    # 关键词统计
    keywords = ['PowerVerse', '区块链', '去中心化', '计算', '网络', '代币', '智能合约', '节点']
    keyword_counts = {}
    for keyword in keywords:
        count = len(re.findall(keyword, text, re.IGNORECASE))
        if count > 0:
            keyword_counts[keyword] = count
    
    if keyword_counts:
        summary_lines.append("  - 关键词出现次数:")
        for keyword, count in sorted(keyword_counts.items(), key=lambda x: x[1], reverse=True):
            summary_lines.append(f"    • {keyword}: {count}次")
    
    summary_lines.append("")
    summary_lines.append("="*80)
    summary_lines.append("")
    
    # 提取前几段作为预览
    summary_lines.append("内容预览（前1000字符）:")
    summary_lines.append("-"*80)
    preview_text = text[:1000].strip()
    # 清理预览文本
    preview_text = re.sub(r'\n{3,}', '\n\n', preview_text)
    summary_lines.append(preview_text)
    if len(text) > 1000:
        summary_lines.append("\n... (更多内容请查看完整文本文件)")
    
    summary_lines.append("")
    summary_lines.append("="*80)
    
    # 保存总结
    summary_file = 'PowerVerse白皮书总结.txt'
    with open(summary_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(summary_lines))
    
    print(f"✓ 总结已保存到: {summary_file}")
    
    # 打印总结到控制台
    print("\n" + "\n".join(summary_lines[:50]))  # 显示前50行
    if len(summary_lines) > 50:
        print(f"\n... (总结共 {len(summary_lines)} 行，完整内容请查看文件)")

def main():
    print("="*80)
    print("PowerVerse Chain 白皮书文字提取工具")
    print("="*80)
    print()
    
    text = extract_pdf_text()
    
    if text:
        print("\n" + "="*80)
        print("✓ 提取完成！")
        print("="*80)
        print("\n生成的文件:")
        print("  1. PowerVerse白皮书全文.txt - 完整的PDF文字内容")
        print("  2. PowerVerse白皮书总结.txt - 内容总结和统计")
    else:
        print("\n✗ 提取失败，请检查错误信息")

if __name__ == '__main__':
    main()
