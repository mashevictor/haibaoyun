#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多语言全量修复和测试脚本
自动检测并修复所有页面的多语言问题
"""

import os
import re
import json
from pathlib import Path

# 需要检查的页面
PAGES = [
    'index.html',
    'pages/scenarios.html',
    'pages/token.html',
    'pages/hardware-factory.html',
    'pages/research-strength.html',
    'pages/developer.html',
    'pages/about.html'
]

# 需要检查的硬编码中文模式
CHINESE_PATTERNS = [
    r'[\u4e00-\u9fff]+',  # 中文字符
]

def find_untranslated_text(html_content):
    """查找未翻译的文本"""
    issues = []
    
    # 查找所有包含中文但没有 data-i18n 的元素
    # 排除已经注释、script、style 中的内容
    lines = html_content.split('\n')
    for i, line in enumerate(lines, 1):
        # 跳过注释、script、style
        if '<!--' in line or '<script' in line or '<style' in line:
            continue
        if '</script>' in line or '</style>' in line:
            continue
            
        # 查找包含中文的文本节点
        if re.search(r'[\u4e00-\u9fff]', line):
            # 检查是否有 data-i18n
            if 'data-i18n' not in line:
                # 检查是否是HTML标签内容
                match = re.search(r'>([^<]*[\u4e00-\u9fff][^<]*)<', line)
                if match:
                    text = match.group(1).strip()
                    if text and len(text) > 1:  # 忽略单个字符
                        issues.append({
                            'line': i,
                            'text': text,
                            'content': line.strip()
                        })
    
    return issues

def generate_report():
    """生成问题报告"""
    print("=" * 60)
    print("多语言问题检测报告")
    print("=" * 60)
    
    all_issues = {}
    
    for page in PAGES:
        if not os.path.exists(page):
            print(f"⚠️  页面不存在: {page}")
            continue
            
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        issues = find_untranslated_text(content)
        if issues:
            all_issues[page] = issues
            print(f"\n📄 {page}: 发现 {len(issues)} 个问题")
            for issue in issues[:5]:  # 只显示前5个
                print(f"   行 {issue['line']}: {issue['text'][:50]}")
            if len(issues) > 5:
                print(f"   ... 还有 {len(issues) - 5} 个问题")
    
    print("\n" + "=" * 60)
    print(f"总计: {sum(len(v) for v in all_issues.values())} 个问题")
    print("=" * 60)
    
    return all_issues

if __name__ == '__main__':
    print("开始检测多语言问题...\n")
    issues = generate_report()
    
    # 保存报告
    with open('language_issues_report.json', 'w', encoding='utf-8') as f:
        json.dump(issues, f, ensure_ascii=False, indent=2)
    
    print("\n报告已保存到: language_issues_report.json")
