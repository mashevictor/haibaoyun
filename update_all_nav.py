#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
批量更新所有页面的导航栏
"""
import os
import re

files_to_update = {
    'index.html': '../pages/',
    'pages/about.html': '',
    'pages/chain.html': '',
    'pages/infra.html': '',
    'pages/market.html': '',
    'pages/dao.html': '',
    'pages/decloud.html': '',
    'pages/token.html': '',
    'pages/hardware-factory.html': '',
    'pages/research-strength.html': '',
    'pages/product.html': '',
    'pages/whitepaper.html': '',
    'pages/brochure.html': ''
}

def update_nav(filepath, prefix):
    """更新导航栏"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 检查是否已有子导航
        if 'nav.scenario.cloudgaming' in content:
            print(f"⏭️  跳过 {filepath} (已有子导航)")
            return False
        
        # 匹配应用场景导航项
        # 处理两种情况：pages/scenarios.html 和 scenarios.html
        patterns = [
            (r'<li><a href="([^"]*scenarios\.html)"[^>]*data-i18n="nav\.scenario"[^>]*>应用场景</a></li>', 
             f'''<li>
                        <a href="\\1" data-i18n="nav.scenario">应用场景</a>
                        <div class="product-dropdown">
                            <a href="{prefix}cloudgaming.html" data-i18n="nav.scenario.cloudgaming">云游戏</a>
                            <a href="{prefix}computingpowerexchange.html" data-i18n="nav.scenario.computingexchange">算力交易</a>
                        </div>
                    </li>'''),
        ]
        
        updated = False
        for pattern, replacement in patterns:
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                content = new_content
                updated = True
                break
        
        if updated:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ 更新完成: {filepath}")
            return True
        else:
            print(f"⚠️  未找到匹配项: {filepath}")
            return False
    except Exception as e:
        print(f"❌ 错误 {filepath}: {e}")
        return False

def main():
    updated_count = 0
    for filepath, prefix in files_to_update.items():
        if os.path.exists(filepath):
            if update_nav(filepath, prefix):
                updated_count += 1
        else:
            print(f"⚠️  文件不存在: {filepath}")
    
    print(f"\n✅ 共更新 {updated_count} 个文件")

if __name__ == "__main__":
    main()
