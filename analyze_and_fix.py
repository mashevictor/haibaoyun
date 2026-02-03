#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
分析测试结果并生成修复报告
"""
import os
import re
from pathlib import Path
import json

def find_chinese_in_html(file_path):
    """在HTML文件中查找中文字符"""
    chinese_regex = re.compile(r'[\u4e00-\u9fa5]+')
    issues = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
            
            for line_num, line in enumerate(lines, 1):
                # 跳过script和style标签内的内容
                if '<script' in line.lower() or '<style' in line.lower():
                    continue
                
                # 查找中文
                matches = chinese_regex.findall(line)
                if matches:
                    # 检查是否有data-i18n属性
                    has_data_i18n = 'data-i18n' in line
                    
                    # 提取标签名
                    tag_match = re.search(r'<(\w+)', line)
                    tag_name = tag_match.group(1) if tag_match else 'unknown'
                    
                    # 提取文本内容（去除HTML标签）
                    text_match = re.search(r'>([^<]+)<', line)
                    text_content = text_match.group(1).strip() if text_match else line.strip()[:50]
                    
                    issues.append({
                        'line': line_num,
                        'text': text_content,
                        'tag': tag_name,
                        'has_data_i18n': has_data_i18n,
                        'chinese': ' '.join(matches[:3])  # 只显示前3个匹配
                    })
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
    
    return issues

def analyze_pages():
    """分析所有页面"""
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
    
    results = {}
    
    print("=" * 70)
    print("分析页面中的中文内容...")
    print("=" * 70)
    print()
    
    for page_path in pages:
        if os.path.exists(page_path):
            issues = find_chinese_in_html(page_path)
            if issues:
                results[page_path] = issues
                print(f"❌ {page_path}: 发现 {len(issues)} 处中文")
            else:
                print(f"✅ {page_path}: 无中文")
    
    return results

def generate_fix_report(results):
    """生成修复报告"""
    print()
    print("=" * 70)
    print("修复报告")
    print("=" * 70)
    print()
    
    total_issues = sum(len(issues) for issues in results.values())
    missing_i18n = sum(
        sum(1 for issue in issues if not issue['has_data_i18n'])
        for issues in results.values()
    )
    
    print(f"📊 统计:")
    print(f"   - 有问题的页面数: {len(results)}")
    print(f"   - 总问题数: {total_issues}")
    print(f"   - 缺少data-i18n的问题: {missing_i18n}")
    print()
    
    if results:
        print("🔧 需要修复的页面:")
        print()
        
        for page_path, issues in results.items():
            print(f"📄 {page_path}")
            print(f"   问题数: {len(issues)}")
            
            # 按是否有data-i18n分组
            with_i18n = [i for i in issues if i['has_data_i18n']]
            without_i18n = [i for i in issues if not i['has_data_i18n']]
            
            if without_i18n:
                print(f"   ⚠️  缺少data-i18n: {len(without_i18n)} 处")
                print(f"   前3个问题:")
                for idx, issue in enumerate(without_i18n[:3], 1):
                    print(f"      {idx}. 第{issue['line']}行: {issue['text'][:50]}...")
                    print(f"         中文: {issue['chinese']}")
            
            if with_i18n:
                print(f"   ℹ️  有data-i18n但仍有中文: {len(with_i18n)} 处")
                print(f"   (可能是翻译键缺失或翻译未生效)")
            
            print()
    
    # 保存JSON报告
    report = {
        'summary': {
            'total_pages_with_issues': len(results),
            'total_issues': total_issues,
            'missing_i18n_count': missing_i18n
        },
        'details': results
    }
    
    with open('fix_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    
    print("💾 详细报告已保存到: fix_report.json")
    print()

def main():
    results = analyze_pages()
    generate_fix_report(results)
    
    if results:
        print("=" * 70)
        print("💡 修复建议:")
        print("=" * 70)
        print()
        print("1. 对于缺少data-i18n的元素:")
        print("   - 添加data-i18n属性")
        print("   - 在js/languages.js中添加对应的翻译键")
        print()
        print("2. 对于有data-i18n但仍有中文的元素:")
        print("   - 检查js/languages.js中对应的翻译键是否存在")
        print("   - 检查翻译键的路径是否正确（嵌套键）")
        print("   - 检查LanguageManager是否正确处理翻译")
        print()
        print("3. 运行测试验证修复:")
        print("   - npm test")
        print()

if __name__ == '__main__':
    main()
