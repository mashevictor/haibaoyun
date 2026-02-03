#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
修复翻译问题脚本
1. 检查所有页面中缺少data-i18n的中文文本
2. 检查翻译键是否存在
3. 生成修复报告
"""
import os
import re
import json
from pathlib import Path

def load_translation_keys():
    """加载所有翻译键"""
    with open('js/languages.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取所有语言的翻译键
    languages = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko']
    keys = set()
    
    # 简单提取：查找 data-i18n="xxx" 模式
    i18n_pattern = r'data-i18n=["\']([^"\']+)["\']'
    matches = re.findall(i18n_pattern, content)
    keys.update(matches)
    
    # 从translations对象中提取键
    # 这是一个简化的提取，实际应该解析JavaScript对象
    translation_pattern = r'["\']([a-zA-Z0-9_.]+)["\']:\s*["\']'
    trans_matches = re.findall(translation_pattern, content)
    keys.update(trans_matches)
    
    return keys

def find_missing_i18n_in_file(file_path):
    """查找文件中缺少data-i18n的中文文本"""
    issues = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
        
        chinese_pattern = re.compile(r'[\u4e00-\u9fa5]+')
        
        for line_num, line in enumerate(lines, 1):
            # 跳过注释、script、style
            if re.match(r'^\s*<!--', line) or '<script' in line.lower() or '<style' in line.lower():
                continue
            
            # 查找包含中文的行
            if chinese_pattern.search(line):
                # 检查是否有data-i18n
                if 'data-i18n' not in line:
                    # 提取文本内容
                    # 匹配 >文本< 或 > 文本 <
                    text_match = re.search(r'>\s*([^<]*[\u4e00-\u9fa5][^<]*)\s*<', line)
                    if text_match:
                        text = text_match.group(1).strip()
                        # 过滤掉太短的文本（可能是标点符号）
                        if len(text) > 1 and not text.startswith('<!--'):
                            # 提取标签名
                            tag_match = re.search(r'<(\w+)', line)
                            tag = tag_match.group(1) if tag_match else 'unknown'
                            
                            issues.append({
                                'line': line_num,
                                'text': text[:100],  # 限制长度
                                'tag': tag,
                                'full_line': line.strip()[:200]
                            })
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
    
    return issues

def main():
    pages = [
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
    ]
    
    print("=" * 70)
    print("翻译问题检查")
    print("=" * 70)
    print()
    
    all_issues = {}
    
    for page in pages:
        if os.path.exists(page):
            issues = find_missing_i18n_in_file(page)
            if issues:
                all_issues[page] = issues
                print(f"❌ {page}: {len(issues)} 处缺少data-i18n")
            else:
                print(f"✅ {page}: 无问题")
    
    print()
    print("=" * 70)
    print("修复建议")
    print("=" * 70)
    print()
    
    if all_issues:
        print(f"发现 {len(all_issues)} 个页面有问题，共 {sum(len(v) for v in all_issues.values())} 处")
        print()
        print("需要修复的页面:")
        for page, issues in all_issues.items():
            print(f"\n📄 {page}")
            for idx, issue in enumerate(issues[:5], 1):  # 只显示前5个
                print(f"   第{issue['line']}行: {issue['text'][:50]}...")
                print(f"   标签: <{issue['tag']}>")
    else:
        print("✅ 所有页面都已正确添加data-i18n属性！")
    
    # 保存报告
    report = {
        'pages_with_issues': len(all_issues),
        'total_issues': sum(len(v) for v in all_issues.values()),
        'details': all_issues
    }
    
    with open('translation_issues_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    
    print()
    print("💾 详细报告已保存到: translation_issues_report.json")

if __name__ == '__main__':
    main()
