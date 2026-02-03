#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""检查产品页面的多语言翻译完整性"""

import re
import json
from collections import defaultdict

# 需要检查的产品页面
PRODUCTS = ['wallet', 'scan', 'xaiToken', 'decloud', 'computingPort']

# 需要检查的语言
LANGUAGES = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'en': '英文',
    'ja': '日文',
    'ko': '韩文'
}

def extract_i18n_keys_from_html(html_file):
    """从HTML文件中提取所有data-i18n键"""
    keys = set()
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # 查找所有data-i18n属性
    pattern = r'data-i18n="([^"]+)"'
    matches = re.findall(pattern, content)
    
    for match in matches:
        keys.add(match)
    
    return keys

def check_translation_keys_in_js(js_file, product_key, language):
    """检查JS翻译文件中是否包含特定产品的翻译键"""
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到对应语言部分
    if language == 'zh-CN':
        lang_pattern = r"'zh-CN':\s*\{([\s\S]*?)\n\s*\},\s*'zh-TW':"
    elif language == 'zh-TW':
        lang_pattern = r"'zh-TW':\s*\{([\s\S]*?)\n\s*\},\s*'en':"
    elif language == 'en':
        lang_pattern = r"'en':\s*\{([\s\S]*?)\n\s*\},\s*'ja':"
    elif language == 'ja':
        lang_pattern = r"'ja':\s*\{([\s\S]*?)\n\s*\},\s*'ko':"
    elif language == 'ko':
        lang_pattern = r"'ko':\s*\{([\s\S]*?)\n\s*\}\s*\};"
    
    lang_match = re.search(lang_pattern, content, re.DOTALL)
    if not lang_match:
        return None
    
    lang_content = lang_match.group(1)
    
    # 检查产品部分
    product_pattern = rf"{product_key}:\s*\{{([\s\S]*?)\n\s*\}}(?:,|\s*\}})"
    product_match = re.search(product_pattern, lang_content, re.DOTALL)
    
    if not product_match:
        return None
    
    product_content = product_match.group(1)
    
    # 提取所有键
    found_keys = {}
    
    # 检查基本字段
    for field in ['name', 'pageTitle', 'subtitle', 'intro']:
        if re.search(rf'\b{field}:', product_content):
            found_keys[field] = True
    
    # 检查section
    for i in range(1, 5):
        section_pattern = rf'section{i}:\s*\{{'
        if re.search(section_pattern, product_content):
            found_keys[f'section{i}'] = True
    
    # 检查features
    if re.search(r'features:\s*\{', product_content):
        found_keys['features'] = True
    
    return found_keys

def main():
    print("=" * 80)
    print("检查产品页面的多语言翻译完整性")
    print("=" * 80)
    print()
    
    results = {}
    
    for product in PRODUCTS:
        print(f"\n检查产品: {product}")
        print("-" * 80)
        
        # 提取HTML中的翻译键
        html_file = f'pages/{product.replace("computingPort", "computing-port").replace("xaiToken", "xai-token")}.html'
        
        try:
            html_keys = extract_i18n_keys_from_html(html_file)
            print(f"HTML文件中找到 {len(html_keys)} 个翻译键")
        except FileNotFoundError:
            print(f"❌ HTML文件未找到: {html_file}")
            continue
        
        # 检查每种语言的翻译
        product_results = {}
        
        for lang_code, lang_name in LANGUAGES.items():
            found_keys = check_translation_keys_in_js('js/languages.js', product, lang_code)
            
            if found_keys is None:
                print(f"  ❌ {lang_name}: 未找到产品翻译")
                product_results[lang_code] = {'status': 'missing', 'keys': {}}
            else:
                has_sections = any(k.startswith('section') for k in found_keys.keys())
                status = '✓ 完整' if has_sections else '⚠ 部分'
                print(f"  {status} {lang_name}: 找到 {len(found_keys)} 个字段")
                
                # 显示详细信息
                if 'section1' in found_keys:
                    sections = [k for k in found_keys.keys() if k.startswith('section')]
                    print(f"      - 包含section: {', '.join(sections)}")
                
                product_results[lang_code] = {'status': 'complete' if has_sections else 'partial', 'keys': found_keys}
        
        results[product] = product_results
    
    print("\n" + "=" * 80)
    print("总结")
    print("=" * 80)
    
    for product in PRODUCTS:
        print(f"\n{product}:")
        if product not in results:
            continue
        
        for lang_code, lang_name in LANGUAGES.items():
            result = results[product].get(lang_code, {})
            status = result.get('status', 'unknown')
            
            if status == 'complete':
                print(f"  ✓ {lang_name}: 翻译完整")
            elif status == 'partial':
                print(f"  ⚠ {lang_name}: 翻译不完整（缺少section详细翻译）")
            else:
                print(f"  ❌ {lang_name}: 缺少翻译")
    
    print("\n" + "=" * 80)
    print("需要补充的翻译:")
    print("=" * 80)
    
    needs_translation = []
    
    for product in PRODUCTS:
        if product not in results:
            continue
        
        for lang_code, lang_name in LANGUAGES.items():
            result = results[product].get(lang_code, {})
            status = result.get('status', 'unknown')
            
            if status in ['missing', 'partial']:
                needs_translation.append(f"{product} - {lang_name}")
    
    if needs_translation:
        for item in needs_translation:
            print(f"  • {item}")
    else:
        print("  无需补充，所有翻译已完整")

if __name__ == '__main__':
    main()
