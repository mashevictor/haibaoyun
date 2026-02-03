#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量修复5个产品页面的翻译
为所有硬编码中文添加data-i18n属性
"""

import os
import re
from pathlib import Path

# 需要处理的页面
PAGES = {
    'chain.html': {
        'prefix': 'products.chain',
        'content': {
            'title': 'PowerVerse Chain - 技术简介',
            'subtitle': '技术简介',
            'intro': 'PowerVerse Chain 是一个基于区块链的分布式账本平台，通过去中心化网络、智能合约与共识机制，为去中心化应用提供安全、高效的基础设施。',
        }
    },
    'infra.html': {
        'prefix': 'products.infra',
        'content': {
            'title': 'PowerVerse Infra - 去中心化物理基础设施网络（DePIN）起点',
            'subtitle': '去中心化物理基础设施网络（DePIN）起点',
            'intro': 'PowerVerse Infra 是一个虚拟化软件平台，基于软件定义理念，整合并虚拟化管理多种芯片算力（包括 CPU、GPU、AI 芯片及量子芯片），将闲置算力转化为可共享、可交易的数字资产，为用户提供高效、多样的算力获取途径。',
        }
    },
    'market.html': {
        'prefix': 'products.market',
        'content': {
            'title': 'PowerVerse Market - 去中心化算力交易平台',
            'subtitle': '去中心化算力交易平台',
            'intro': 'PowerVerse Market 是基于 PowerVerse Chain 与 PowerVerse Infra 构建的去中心化算力交易平台。它通过智能合约与区块链技术连接算力供应方与需求方，实现自动化、透明化、无需信任第三方的算力资源交易。',
        }
    },
    'dao.html': {
        'prefix': 'products.dao',
        'content': {
            'title': 'PowerVerse DAO - 去中心化自治组织',
            'subtitle': '去中心化自治组织',
            'intro': 'PowerVerse DAO 是基于 PowerVerse Chain 构建的去中心化自治组织，旨在通过社区集体决策与治理，推动 PowerVerse 生态的公平、透明与可持续发展。',
        }
    },
    'decloud.html': {
        'prefix': 'products.decloud',
        'content': {
            'title': 'DeCloud - Web3.0 去中心化算力云平台',
            'subtitle': 'Web3.0 去中心化算力云平台',
            'intro': 'DeCloud 整合 PowerVerse Chain、PowerVerse Infra 与 PowerVerse Market，构建了一个开放、高效、安全、可扩展的去中心化算力云平台。它通过资源最优配置，支持从企业级大规模计算到个人开发者项目的多样化算力需求，重塑算力分配与使用模式。',
        }
    }
}

def add_data_i18n_to_html(file_path, prefix):
    """为HTML文件中的硬编码中文添加data-i18n属性"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 匹配模式：查找包含中文的文本节点
    # 跳过已经有data-i18n的元素
    # 跳过script、style、注释等
    
    # 1. 处理title标签
    title_match = re.search(r'<title>([^<]*[\u4e00-\u9fa5][^<]*)</title>', content)
    if title_match and 'data-i18n' not in title_match.group(0):
        old_title = title_match.group(0)
        title_text = title_match.group(1)
        new_title = f'<title data-i18n="{prefix}.pageTitle">{title_text}</title>'
        content = content.replace(old_title, new_title)
    
    # 2. 处理subtitle
    subtitle_pattern = r'<div class="subtitle">([^<]*[\u4e00-\u9fa5][^<]*)</div>'
    matches = list(re.finditer(subtitle_pattern, content))
    for match in matches:
        if 'data-i18n' not in match.group(0):
            old = match.group(0)
            text = match.group(1)
            new = f'<div class="subtitle" data-i18n="{prefix}.subtitle">{text}</div>'
            content = content.replace(old, new, 1)
    
    # 3. 处理intro段落
    intro_pattern = r'<p>([^<]*[\u4e00-\u9fa5][^<]{20,})</p>'
    matches = list(re.finditer(intro_pattern, content))
    for match in matches:
        if 'data-i18n' not in match.group(0) and 'product-hero' in content[content.rfind('<div class="product-hero">', 0, match.start()):match.end()]:
            old = match.group(0)
            text = match.group(1)
            new = f'<p data-i18n="{prefix}.intro">{text}</p>'
            content = content.replace(old, new, 1)
            break
    
    # 4. 处理section-title
    section_title_pattern = r'<h2 class="section-title">([^<]*[\u4e00-\u9fa5][^<]*)</h2>'
    matches = list(re.finditer(section_title_pattern, content))
    section_num = 1
    for match in matches:
        if 'data-i18n' not in match.group(0):
            old = match.group(0)
            text = match.group(1)
            # 提取章节号
            section_match = re.search(r'[一二三四五六七八九十]+、', text)
            if section_match:
                section_key = f"{prefix}.section{section_num}"
                new = f'<h2 class="section-title" data-i18n="{section_key}.title">{text}</h2>'
                content = content.replace(old, new, 1)
                section_num += 1
    
    # 5. 处理subsection-title
    subsection_pattern = r'<h3 class="subsection-title">([^<]*[\u4e00-\u9fa5][^<]*)</h3>'
    matches = list(re.finditer(subsection_pattern, content))
    subsection_num = 1
    for match in matches:
        if 'data-i18n' not in match.group(0):
            old = match.group(0)
            text = match.group(1)
            subsection_key = f"{prefix}.subsection{subsection_num}"
            new = f'<h3 class="subsection-title" data-i18n="{subsection_key}.title">{text}</h3>'
            content = content.replace(old, new, 1)
            subsection_num += 1
    
    # 6. 处理列表项中的中文
    li_pattern = r'<li>([^<]*[\u4e00-\u9fa5][^<]*)</li>'
    matches = list(re.finditer(li_pattern, content))
    li_num = 1
    for match in matches:
        if 'data-i18n' not in match.group(0) and '<strong>' not in match.group(0):
            old = match.group(0)
            text = match.group(1)
            li_key = f"{prefix}.listItem{li_num}"
            new = f'<li data-i18n="{li_key}">{text}</li>'
            content = content.replace(old, new, 1)
            li_num += 1
    
    # 7. 处理info-box中的p标签
    info_box_p_pattern = r'<div class="info-box">\s*<h4>([^<]*)</h4>\s*<p>([^<]*[\u4e00-\u9fa5][^<]*)</p>'
    matches = list(re.finditer(info_box_p_pattern, content, re.DOTALL))
    info_num = 1
    for match in matches:
        if 'data-i18n' not in match.group(0):
            old = match.group(0)
            h4_text = match.group(1)
            p_text = match.group(2)
            info_key = f"{prefix}.info{info_num}"
            new = f'<div class="info-box">\n                        <h4 data-i18n="{info_key}.title">{h4_text}</h4>\n                        <p data-i18n="{info_key}.desc">{p_text}</p>\n                    </div>'
            content = content.replace(old, new, 1)
            info_num += 1
    
    # 8. 处理feature-card
    feature_card_pattern = r'<div class="feature-card">\s*<h4>([^<]*[\u4e00-\u9fa5][^<]*)</h4>\s*<p>([^<]*[\u4e00-\u9fa5][^<]*)</p>'
    matches = list(re.finditer(feature_card_pattern, content, re.DOTALL))
    feature_num = 1
    for match in matches:
        if 'data-i18n' not in match.group(0):
            old = match.group(0)
            h4_text = match.group(1)
            p_text = match.group(2)
            feature_key = f"{prefix}.feature{feature_num}"
            new = f'<div class="feature-card">\n                        <h4 data-i18n="{feature_key}.title">{h4_text}</h4>\n                        <p data-i18n="{feature_key}.desc">{p_text}</p>\n                    </div>'
            content = content.replace(old, new, 1)
            feature_num += 1
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    print("="*60)
    print("批量修复产品页面翻译")
    print("="*60)
    
    for page_file, config in PAGES.items():
        page_path = f'pages/{page_file}'
        if not os.path.exists(page_path):
            print(f"⚠️ 文件不存在: {page_path}")
            continue
        
        print(f"\n处理: {page_file}")
        try:
            if add_data_i18n_to_html(page_path, config['prefix']):
                print(f"  ✅ 已更新")
            else:
                print(f"  ℹ️  无需更新")
        except Exception as e:
            print(f"  ❌ 处理失败: {e}")
    
    print("\n" + "="*60)
    print("处理完成！")
    print("="*60)
    print("\n注意：此脚本只添加了部分data-i18n属性。")
    print("您还需要：")
    print("1. 检查并手动添加剩余的data-i18n属性")
    print("2. 在js/languages.js中添加对应的翻译键（5种语言）")

if __name__ == '__main__':
    main()
