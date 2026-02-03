# -*- coding: utf-8 -*-
"""从PDF提取内容并填充到白皮书网页"""
import os
import sys
import re
from pathlib import Path

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

def extract_pdf_content():
    """提取PDF文本内容"""
    if not install_pdfplumber():
        print("无法安装pdfplumber，请手动安装: pip install pdfplumber")
        return None
    
    import pdfplumber
    
    pdf_path = 'PowerVerseDecentralizedComputingWhitepaper-zh.pdf'
    if not os.path.exists(pdf_path):
        print(f"文件不存在: {pdf_path}")
        return None
    
    print(f"读取PDF: {pdf_path}")
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            print(f"总页数: {len(pdf.pages)}")
            
            all_text = []
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    all_text.append(text)
            
            full_text = "\n".join(all_text)
            
            # 保存原始内容
            output_file = 'whitepaper_content.txt'
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(full_text)
            
            print(f"✓ 内容已保存到: {output_file}")
            print(f"总字符数: {len(full_text)}")
            
            return full_text
            
    except Exception as e:
        print(f"错误: {e}")
        import traceback
        traceback.print_exc()
        return None

def parse_sections(content):
    """解析PDF内容，提取各个章节"""
    sections = {
        'introduction': '',
        'overview': '',
        'technology': '',
        'tokenomics': '',
        'roadmap': '',
        'team': ''
    }
    
    # 尝试识别章节标题
    # 引言
    intro_patterns = [
        r'引言[：:]\s*(.*?)(?=项目概述|技术架构|代币经济|路线图|团队|$)',
        r'1[\.\s]+引言[：:]\s*(.*?)(?=2[\.\s]+|项目概述|技术架构|代币经济|路线图|团队|$)',
    ]
    
    # 项目概述
    overview_patterns = [
        r'项目概述[：:]\s*(.*?)(?=技术架构|代币经济|路线图|团队|$)',
        r'2[\.\s]+项目概述[：:]\s*(.*?)(?=3[\.\s]+|技术架构|代币经济|路线图|团队|$)',
    ]
    
    # 技术架构
    tech_patterns = [
        r'技术架构[：:]\s*(.*?)(?=代币经济|路线图|团队|$)',
        r'3[\.\s]+技术架构[：:]\s*(.*?)(?=4[\.\s]+|代币经济|路线图|团队|$)',
    ]
    
    # 代币经济
    token_patterns = [
        r'代币经济[：:]\s*(.*?)(?=路线图|团队|$)',
        r'4[\.\s]+代币经济[：:]\s*(.*?)(?=5[\.\s]+|路线图|团队|$)',
    ]
    
    # 路线图
    roadmap_patterns = [
        r'路线图[：:]\s*(.*?)(?=团队|$)',
        r'5[\.\s]+路线图[：:]\s*(.*?)(?=6[\.\s]+|团队|$)',
    ]
    
    # 团队
    team_patterns = [
        r'团队[：:]\s*(.*?)$',
        r'6[\.\s]+团队[：:]\s*(.*?)$',
    ]
    
    # 提取内容
    for pattern in intro_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            sections['introduction'] = match.group(1).strip()
            break
    
    for pattern in overview_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            sections['overview'] = match.group(1).strip()
            break
    
    for pattern in tech_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            sections['technology'] = match.group(1).strip()
            break
    
    for pattern in token_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            sections['tokenomics'] = match.group(1).strip()
            break
    
    for pattern in roadmap_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            sections['roadmap'] = match.group(1).strip()
            break
    
    for pattern in team_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            sections['team'] = match.group(1).strip()
            break
    
    return sections

def format_content_for_html(text):
    """将文本格式化为HTML段落"""
    if not text:
        return ""
    
    # 清理文本
    text = text.strip()
    
    # 按段落分割
    paragraphs = re.split(r'\n\s*\n+', text)
    
    # 格式化段落
    html_paragraphs = []
    current_list = []
    
    for para in paragraphs:
        para = para.strip()
        if not para:
            continue
        
        # 检查是否是列表项
        if re.match(r'^[•·▪▫◦‣⁃]\s+', para) or re.match(r'^\d+[\.\)]\s+', para) or re.match(r'^[-*]\s+', para):
            current_list.append(para)
        else:
            # 如果有未完成的列表，先输出列表
            if current_list:
                html_paragraphs.append(format_list(current_list))
                current_list = []
            
            # 添加段落
            if para:
                html_paragraphs.append(f'<p>{para}</p>')
    
    # 处理剩余的列表
    if current_list:
        html_paragraphs.append(format_list(current_list))
    
    return '\n                '.join(html_paragraphs)

def format_list(items):
    """格式化列表项"""
    html_items = []
    for item in items:
        # 移除列表标记
        item = re.sub(r'^[•·▪▫◦‣⁃]\s+', '', item)
        item = re.sub(r'^\d+[\.\)]\s+', '', item)
        item = re.sub(r'^[-*]\s+', '', item)
        html_items.append(f'<li>{item.strip()}</li>')
    
    return '<ul>\n                    ' + '\n                    '.join(html_items) + '\n                </ul>'

def update_whitepaper_html(sections):
    """更新白皮书HTML文件"""
    html_path = 'pages/whitepaper.html'
    
    if not os.path.exists(html_path):
        print(f"文件不存在: {html_path}")
        return
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 更新各个章节
    # 引言
    if sections['introduction']:
        intro_html = format_content_for_html(sections['introduction'])
        pattern = r'(<h2 data-i18n="whitepaper\.sections\.introduction">引言</h2>)\s*(.*?)(?=<section|<h2)'
        replacement = r'\1\n                ' + intro_html
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 项目概述
    if sections['overview']:
        overview_html = format_content_for_html(sections['overview'])
        pattern = r'(<h2 data-i18n="whitepaper\.sections\.overview">项目概述</h2>)\s*(.*?)(?=<section|<h2)'
        replacement = r'\1\n                ' + overview_html
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 技术架构
    if sections['technology']:
        tech_html = format_content_for_html(sections['technology'])
        pattern = r'(<h2 data-i18n="whitepaper\.sections\.technology">技术架构</h2>)\s*(.*?)(?=<section|<h2)'
        replacement = r'\1\n                ' + tech_html
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 代币经济
    if sections['tokenomics']:
        token_html = format_content_for_html(sections['tokenomics'])
        pattern = r'(<h2 data-i18n="whitepaper\.sections\.tokenomics">代币经济</h2>)\s*(.*?)(?=<section|<h2)'
        replacement = r'\1\n                ' + token_html
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 路线图
    if sections['roadmap']:
        roadmap_html = format_content_for_html(sections['roadmap'])
        pattern = r'(<h2 data-i18n="whitepaper\.sections\.roadmap">路线图</h2>)\s*(.*?)(?=<section|<h2)'
        replacement = r'\1\n                ' + roadmap_html
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 团队
    if sections['team']:
        team_html = format_content_for_html(sections['team'])
        pattern = r'(<h2 data-i18n="whitepaper\.sections\.team">团队介绍</h2>)\s*(.*?)(?=</section>|</div>)'
        replacement = r'\1\n                ' + team_html
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # 保存
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ 已更新: {html_path}")

def main():
    print("=" * 60)
    print("从PDF提取内容并填充到白皮书网页")
    print("=" * 60)
    print()
    
    # 提取PDF内容
    content = extract_pdf_content()
    if not content:
        print("无法提取PDF内容")
        return
    
    print("\n解析章节...")
    sections = parse_sections(content)
    
    print("\n提取到的章节:")
    for key, value in sections.items():
        if value:
            print(f"  - {key}: {len(value)} 字符")
        else:
            print(f"  - {key}: 未找到")
    
    print("\n更新HTML文件...")
    update_whitepaper_html(sections)
    
    print("\n完成！")
    print("\n提示：如果自动解析不准确，请手动编辑 pages/whitepaper.html")

if __name__ == '__main__':
    main()
