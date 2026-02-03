#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量修复所有页面的GitHub和博客链接
"""

import os
import re

PAGES = [
    'pages/developer.html',
    'pages/scenarios.html',
    'pages/about.html',
    'pages/chain.html',
    'pages/decloud.html',
    'pages/infra.html',
    'pages/hardware-factory.html',
    'pages/product.html',
    'pages/market.html',
    'pages/dao.html',
    'pages/brochure.html',
    'pages/token.html',
    'pages/research-strength.html',
    'pages/whitepaper.html',
]

def fix_github_blog_links(content):
    """修复GitHub和博客链接，添加title属性"""
    # 修复GitHub链接
    content = re.sub(
        r'<a href="#"\s+data-i18n="common\.github">GitHub</a>',
        r'<a href="#" data-i18n="common.github" title="GitHub repository (Coming soon)">GitHub</a>',
        content
    )
    # 修复博客链接
    content = re.sub(
        r'<a href="#"\s+data-i18n="common\.blog">博客</a>',
        r'<a href="#" data-i18n="common.blog" title="Blog (Coming soon)">博客</a>',
        content
    )
    return content

def fix_about_contact_links(content):
    """修复about.html中的联系方式链接"""
    # 邮箱链接
    content = re.sub(
        r'<li data-i18n="about\.contact\.email">邮箱：hiabacloud@gmail\.com</li>',
        r'<li><a href="mailto:hiabacloud@gmail.com" data-i18n="about.contact.email">邮箱：hiabacloud@gmail.com</a></li>',
        content
    )
    # Twitter链接
    content = re.sub(
        r'<li data-i18n="about\.contact\.twitter">Twitter：@PowerVerseChain</li>',
        r'<li><a href="https://x.com/PowerVerseChain" target="_blank" rel="noopener noreferrer" data-i18n="about.contact.twitter">Twitter：@PowerVerseChain</a></li>',
        content
    )
    # Telegram链接
    content = re.sub(
        r'<li data-i18n="about\.contact\.telegram">Telegram：@PowerVerseChain_Offical</li>',
        r'<li><a href="https://t.me/PowerVerseChain_Offical" target="_blank" rel="noopener noreferrer" data-i18n="about.contact.telegram">Telegram：@PowerVerseChain_Offical</a></li>',
        content
    )
    # Discord链接
    content = re.sub(
        r'<li data-i18n="about\.contact\.discord">Discord：PowerVerse Community</li>',
        r'<li><a href="https://discord.gg/powerverse" target="_blank" rel="noopener noreferrer" data-i18n="about.contact.discord">Discord：PowerVerse Community</a></li>',
        content
    )
    return content

def main():
    print("="*60)
    print("批量修复链接")
    print("="*60)
    
    for page_path in PAGES:
        if not os.path.exists(page_path):
            print(f"⚠️ 文件不存在: {page_path}")
            continue
        
        try:
            with open(page_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # 修复GitHub和博客链接
            content = fix_github_blog_links(content)
            
            # 如果是about.html，修复联系方式链接
            if 'about.html' in page_path:
                content = fix_about_contact_links(content)
            
            if content != original_content:
                with open(page_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"✅ 已修复: {page_path}")
            else:
                print(f"ℹ️  无需修复: {page_path}")
                
        except Exception as e:
            print(f"❌ 处理失败 {page_path}: {e}")
    
    print("\n" + "="*60)
    print("修复完成！")
    print("="*60)

if __name__ == '__main__':
    main()
