#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
分析Playwright测试结果并生成报告
"""
import os
import json
import re
from pathlib import Path

def analyze_test_results():
    """分析测试结果"""
    print("=" * 60)
    print("PowerVerse Chain 测试结果分析")
    print("=" * 60)
    print()
    
    # 检查测试结果目录
    test_results_dir = Path("test-results")
    playwright_report_dir = Path("playwright-report")
    
    issues = {
        'chinese_found': [],
        'empty_links': [],
        'other_issues': []
    }
    
    # 检查截图文件（表示发现了中文）
    if test_results_dir.exists():
        screenshot_files = list(test_results_dir.glob("*_chinese_found.png"))
        for screenshot in screenshot_files:
            page_name = screenshot.stem.replace("_chinese_found", "")
            issues['chinese_found'].append({
                'page': page_name,
                'screenshot': str(screenshot)
            })
    
    # 分析所有页面
    pages_to_check = [
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
    
    print("📋 发现的问题:")
    print()
    
    if issues['chinese_found']:
        print("❌ 英文环境下发现中文的页面:")
        for issue in issues['chinese_found']:
            print(f"   • {issue['page']}")
        print()
    
    # 检查HTML文件中的空链接
    print("🔍 检查空链接...")
    print()
    
    empty_links_found = []
    for page_path in pages_to_check:
        if os.path.exists(page_path):
            with open(page_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # 查找空链接
            empty_link_pattern = r'<a[^>]*href=["\']#["\'][^>]*>([^<]*)</a>'
            matches = re.findall(empty_link_pattern, content)
            
            if matches:
                empty_links_found.append({
                    'page': page_path,
                    'count': len(matches),
                    'links': matches[:5]  # 只显示前5个
                })
    
    if empty_links_found:
        print("⚠️  发现空链接的页面:")
        for item in empty_links_found:
            print(f"   • {item['page']}: {item['count']} 个空链接")
            for link_text in item['links']:
                if link_text.strip():
                    print(f"     - \"{link_text.strip()[:50]}\"")
        print()
    else:
        print("✅ 未发现空链接")
        print()
    
    # 生成修复建议
    print("=" * 60)
    print("💡 修复建议:")
    print("=" * 60)
    print()
    
    if issues['chinese_found']:
        print("1. 英文环境下发现中文的页面需要:")
        print("   • 检查这些页面的HTML文件，确保所有中文文本都有data-i18n属性")
        print("   • 检查js/languages.js，确保对应的翻译键存在且正确")
        print("   • 验证getTranslation函数是否正确处理嵌套键")
        print()
    
    if empty_links_found:
        print("2. 空链接需要:")
        print("   • 为这些链接添加实际的href属性")
        print("   • 或者添加title='Coming soon'属性说明")
        print("   • 或者移除这些链接如果不需要")
        print()
    
    # 生成报告文件
    report = {
        'timestamp': str(Path.cwd()),
        'issues': issues,
        'empty_links': empty_links_found,
        'recommendations': []
    }
    
    with open('test_analysis_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    
    print("📄 详细报告已保存到: test_analysis_report.json")
    print()

if __name__ == '__main__':
    analyze_test_results()
