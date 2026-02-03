#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
批量更新所有页面的导航栏，添加应用场景子导航
"""
import os
import re

def update_nav_in_file(filepath):
    """更新单个文件的导航栏"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找应用场景导航项（不在下拉菜单中的）
        pattern = r'<li><a href="([^"]*scenarios\.html)"[^>]*data-i18n="nav\.scenario"[^>]*>应用场景</a></li>'
        
        # 检查是否已经有子导航
        if 'nav.scenario.cloudgaming' in content:
            print(f"⏭️  跳过 {filepath} (已有子导航)")
            return False
        
        # 替换导航项
        replacement = r'''<li>
                        <a href="\1" data-i18n="nav.scenario">应用场景</a>
                        <div class="product-dropdown">
                            <a href="cloudgaming.html" data-i18n="nav.scenario.cloudgaming">云游戏</a>
                            <a href="computingpowerexchange.html" data-i18n="nav.scenario.computingexchange">算力交易</a>
                        </div>
                    </li>'''
        
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ 更新完成: {filepath}")
            return True
        else:
            print(f"⚠️  未找到匹配项: {filepath}")
            return False
    except Exception as e:
        print(f"❌ 错误 {filepath}: {e}")
        return False

def main():
    # 需要更新的文件列表
    files_to_update = [
        'index.html',
        'pages/about.html',
        'pages/chain.html',
        'pages/infra.html',
        'pages/market.html',
        'pages/dao.html',
        'pages/decloud.html',
        'pages/developer.html',
        'pages/token.html',
        'pages/hardware-factory.html',
        'pages/research-strength.html',
        'pages/product.html',
        'pages/whitepaper.html',
        'pages/brochure.html'
    ]
    
    updated_count = 0
    for filepath in files_to_update:
        if os.path.exists(filepath):
            if update_nav_in_file(filepath):
                updated_count += 1
        else:
            print(f"⚠️  文件不存在: {filepath}")
    
    print(f"\n✅ 共更新 {updated_count} 个文件")

if __name__ == "__main__":
    main()
