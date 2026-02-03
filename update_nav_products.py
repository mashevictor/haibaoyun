#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""批量更新所有HTML文件中的产品导航菜单"""
import os
import re
from pathlib import Path

# 需要添加的新导航项
new_items = '''                            <a href="wallet.html" data-i18n="products.wallet.name">Wallet</a>
                            <a href="scan.html" data-i18n="products.scan.name">Scan</a>
                            <a href="computing-port.html" data-i18n="products.computingPort.name">算力港</a>
                            <a href="xai-token.html" data-i18n="products.xaiToken.name">RWA代币 XAI</a>'''

# 需要更新的文件列表
pages_dir = Path('pages')
html_files = list(pages_dir.glob('*.html'))

updated_files = []
for html_file in html_files:
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找需要更新的位置（在DeCloud之后添加新项）
        pattern1 = r'(<a href="decloud\.html" data-i18n="products\.decloud\.name">DeCloud</a>\s*</div>)'
        pattern2 = r'(<a href="decloud\.html" data-i18n="products\.decloud\.name">DeCloud</a>\s*</li>)'
        
        new_content = content
        modified = False
        
        # 更新下拉菜单中的导航
        if re.search(pattern1, content):
            new_content = re.sub(
                pattern1,
                f'<a href="decloud.html" data-i18n="products.decloud.name">DeCloud</a>\n{new_items}\n                        </div>',
                new_content
            )
            modified = True
        
        # 更新列表中的导航（如果有）
        if re.search(pattern2, content):
            new_content = re.sub(
                pattern2,
                f'<a href="decloud.html" data-i18n="products.decloud.name">DeCloud</a>\n                        </li>',
                new_content
            )
            # 在列表中添加新项
            list_pattern = r'(<li><a href="decloud\.html" data-i18n="products\.decloud\.name">DeCloud</a></li>)'
            list_replacement = f'''<li><a href="decloud.html" data-i18n="products.decloud.name">DeCloud</a></li>
                        <li><a href="wallet.html" data-i18n="products.wallet.name">Wallet</a></li>
                        <li><a href="scan.html" data-i18n="products.scan.name">Scan</a></li>
                        <li><a href="computing-port.html" data-i18n="products.computingPort.name">算力港</a></li>
                        <li><a href="xai-token.html" data-i18n="products.xaiToken.name">RWA代币 XAI</a></li>'''
            new_content = re.sub(list_pattern, list_replacement, new_content)
            modified = True
        
        if modified:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_files.append(html_file.name)
            print(f"✓ 已更新: {html_file.name}")
        else:
            # 检查是否已经包含新项
            if 'wallet.html' in content and 'scan.html' in content:
                print(f"- 已包含: {html_file.name}")
            else:
                print(f"✗ 未找到匹配: {html_file.name}")
    
    except Exception as e:
        print(f"✗ 错误 {html_file.name}: {e}")

print(f"\n总共更新了 {len(updated_files)} 个文件")
