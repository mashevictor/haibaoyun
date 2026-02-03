#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
静态翻译检查脚本
直接分析HTML文件，检查是否有未翻译的中文
"""

import os
import re
from pathlib import Path
from html.parser import HTMLParser

# 所有需要检查的页面
PAGES = [
    'index.html',
    'pages/scenarios.html',
    'pages/token.html',
    'pages/hardware-factory.html',
    'pages/research-strength.html',
    'pages/developer.html',
    'pages/about.html',
    'pages/chain.html',
    'pages/infra.html',
    'pages/market.html',
    'pages/dao.html',
    'pages/decloud.html',
    'pages/whitepaper.html',
    'pages/product.html',
    'pages/brochure.html',
]

CHINESE_REGEX = re.compile(r'[\u4e00-\u9fa5]+')

class HTMLTextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.current_tag = None
        self.current_attrs = {}
        self.skip_tags = {'script', 'style', 'noscript', 'code', 'pre'}
        
    def handle_starttag(self, tag, attrs):
        self.current_tag = tag.lower()
        self.current_attrs = dict(attrs)
        
    def handle_endtag(self, tag):
        self.current_tag = None
        self.current_attrs = {}
        
    def handle_data(self, data):
        if self.current_tag in self.skip_tags:
            return
            
        # 跳过注释
        if data.strip().startswith('<!--'):
            return
            
        text = data.strip()
        if text and CHINESE_REGEX.search(text):
            # 检查是否有data-i18n属性
            has_i18n = 'data-i18n' in self.current_attrs
            self.texts.append({
                'text': text,
                'tag': self.current_tag or 'text',
                'has_i18n': has_i18n,
                'data_i18n': self.current_attrs.get('data-i18n', ''),
            })

def check_file(file_path):
    """检查单个文件"""
    if not os.path.exists(file_path):
        return None
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        parser = HTMLTextExtractor()
        parser.feed(content)
        
        # 过滤掉一些常见的中文（如注释、版权信息等）
        filtered_texts = []
        for item in parser.texts:
            text = item['text']
            # 跳过纯数字、纯符号等
            if len(text) < 2:
                continue
            # 跳过明显的注释内容
            if '<!--' in text or '-->' in text:
                continue
            # 跳过data-i18n属性的值（这些是翻译键，不是实际显示的中文）
            if item['has_i18n'] and text == item['data_i18n']:
                continue
                
            filtered_texts.append(item)
        
        return filtered_texts
    except Exception as e:
        return {'error': str(e)}

def main():
    print("="*60)
    print("PowerVerse Chain 静态翻译检查")
    print("="*60)
    print()
    
    results = {}
    total_issues = 0
    
    for page_path in PAGES:
        print(f"检查: {page_path}")
        issues = check_file(page_path)
        
        if issues is None:
            print(f"  ⚠️ 文件不存在")
            continue
        elif isinstance(issues, dict) and 'error' in issues:
            print(f"  ❌ 读取失败: {issues['error']}")
            continue
        
        if issues:
            # 统计缺少data-i18n的
            missing_i18n = [i for i in issues if not i['has_i18n']]
            
            if missing_i18n:
                print(f"  ❌ 发现 {len(missing_i18n)} 个未翻译的文本（缺少data-i18n）")
                
                # 显示前5个
                for item in missing_i18n[:5]:
                    text_preview = item['text'][:50].replace('\n', ' ')
                    print(f"     - <{item['tag']}> {text_preview}...")
                
                if len(missing_i18n) > 5:
                    print(f"     ... 还有 {len(missing_i18n) - 5} 个")
                
                results[page_path] = {
                    'total': len(issues),
                    'missing_i18n': len(missing_i18n),
                    'items': missing_i18n,
                }
                total_issues += len(missing_i18n)
            else:
                print(f"  ✅ 所有中文都有data-i18n属性")
        else:
            print(f"  ✅ 未发现中文文本")
    
    print()
    print("="*60)
    print(f"检查完成！共发现 {total_issues} 个问题")
    print("="*60)
    
    # 生成报告
    if results:
        os.makedirs('test-results', exist_ok=True)
        report_path = 'test-results/static_check_report.txt'
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write("="*60 + "\n")
            f.write("PowerVerse Chain 静态翻译检查报告\n")
            f.write("="*60 + "\n\n")
            
            for page_path, data in results.items():
                f.write(f"\n{page_path}\n")
                f.write(f"  缺少data-i18n的文本: {data['missing_i18n']}\n")
                f.write(f"  详情:\n")
                for item in data['items']:
                    text_preview = item['text'][:100].replace('\n', ' ')
                    f.write(f"    - <{item['tag']}> {text_preview}\n")
        
        print(f"\n详细报告已保存到: {report_path}")
    
    return results

if __name__ == '__main__':
    main()
