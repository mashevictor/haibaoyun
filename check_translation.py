#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
英文环境翻译检查脚本
检查所有页面在英文环境下是否包含中文字符
"""

import os
import re
import json
from pathlib import Path
from urllib.parse import urljoin
import http.server
import socketserver
import threading
import time
import webbrowser
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

# 所有需要测试的页面
PAGES = [
    {'name': '首页', 'path': 'index.html'},
    {'name': '应用场景', 'path': 'pages/scenarios.html'},
    {'name': '代币页面', 'path': 'pages/token.html'},
    {'name': '硬件工厂', 'path': 'pages/hardware-factory.html'},
    {'name': '研发实力', 'path': 'pages/research-strength.html'},
    {'name': '开发者中心', 'path': 'pages/developer.html'},
    {'name': '关于我们', 'path': 'pages/about.html'},
    {'name': 'PowerVerse Chain', 'path': 'pages/chain.html'},
    {'name': 'PowerVerse Infra', 'path': 'pages/infra.html'},
    {'name': 'PowerVerse Market', 'path': 'pages/market.html'},
    {'name': 'PowerVerse DAO', 'path': 'pages/dao.html'},
    {'name': 'DeCloud', 'path': 'pages/decloud.html'},
    {'name': '白皮书', 'path': 'pages/whitepaper.html'},
    {'name': '产品页面', 'path': 'pages/product.html'},
    {'name': '宣传册', 'path': 'pages/brochure.html'},
]

BASE_URL = 'http://localhost:8000'
CHINESE_REGEX = re.compile(r'[\u4e00-\u9fa5]')

class TranslationChecker:
    def __init__(self):
        self.results = []
        self.driver = None
        
    def setup_driver(self):
        """设置Chrome驱动"""
        chrome_options = Options()
        chrome_options.add_argument('--headless')  # 无头模式
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--lang=en-US')
        
        try:
            self.driver = webdriver.Chrome(options=chrome_options)
            self.driver.set_page_load_timeout(30)
            return True
        except Exception as e:
            print(f"❌ 无法启动Chrome驱动: {e}")
            print("请确保已安装Chrome浏览器和ChromeDriver")
            return False
    
    def switch_to_english(self):
        """切换到英文环境"""
        try:
            # 等待语言按钮出现
            lang_button = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '.lang-switch'))
            )
            
            # 鼠标悬停在语言按钮上
            ActionChains(self.driver).move_to_element(lang_button).perform()
            time.sleep(0.5)
            
            # 查找语言菜单
            try:
                menu = self.driver.find_element(By.CSS_SELECTOR, '.language-menu')
                if menu.is_displayed():
                    # 查找英文选项（通常是第二个）
                    options = menu.find_elements(By.CSS_SELECTOR, '.language-option')
                    if len(options) >= 2:
                        # 点击第二个选项（英文）
                        options[1].click()
                        time.sleep(1)
                        return True
            except:
                pass
            
            # 如果菜单没出现，尝试直接点击按钮
            lang_button.click()
            time.sleep(0.5)
            
            # 再次尝试查找菜单
            menu = self.driver.find_element(By.CSS_SELECTOR, '.language-menu')
            options = menu.find_elements(By.CSS_SELECTOR, '.language-option')
            if len(options) >= 2:
                options[1].click()
                time.sleep(1)
                return True
                
        except Exception as e:
            print(f"⚠️ 切换语言失败: {e}")
            return False
        
        return False
    
    def check_page(self, page_info):
        """检查单个页面"""
        url = urljoin(BASE_URL, page_info['path'])
        print(f"\n检查页面: {page_info['name']} ({page_info['path']})")
        
        try:
            self.driver.get(url)
            time.sleep(1)
            
            # 切换到英文
            if not self.switch_to_english():
                print(f"  ⚠️ 无法切换到英文环境")
                return
            
            time.sleep(1)
            
            # 获取页面文本
            body_text = self.driver.find_element(By.TAG_NAME, 'body').text
            
            # 检查中文字符
            chinese_matches = CHINESE_REGEX.findall(body_text)
            
            if chinese_matches:
                # 获取唯一的中文字符
                unique_chinese = list(set(chinese_matches))[:20]
                
                # 查找包含中文的元素
                chinese_elements = []
                try:
                    all_elements = self.driver.find_elements(By.XPATH, '//body//*')
                    for element in all_elements:
                        try:
                            text = element.text
                            tag_name = element.tag_name
                            
                            # 跳过script、style等标签
                            if tag_name.lower() in ['script', 'style', 'noscript']:
                                continue
                            
                            if text and CHINESE_REGEX.search(text):
                                # 检查是否有data-i18n属性
                                has_i18n = element.get_attribute('data-i18n') is not None
                                
                                # 获取类名和ID
                                class_name = element.get_attribute('class') or ''
                                element_id = element.get_attribute('id') or ''
                                
                                chinese_elements.append({
                                    'tag': tag_name,
                                    'text': text[:100],
                                    'has_i18n': has_i18n,
                                    'class': class_name,
                                    'id': element_id,
                                })
                        except:
                            continue
                except Exception as e:
                    print(f"  ⚠️ 查找元素时出错: {e}")
                
                # 保存结果
                result = {
                    'page': page_info['name'],
                    'path': page_info['path'],
                    'url': url,
                    'has_chinese': True,
                    'chinese_chars': unique_chinese,
                    'chinese_count': len(chinese_matches),
                    'elements': chinese_elements[:10],  # 只保存前10个
                }
                
                print(f"  ❌ 发现 {len(chinese_matches)} 个中文字符")
                print(f"     示例: {''.join(unique_chinese[:10])}")
                print(f"     包含中文的元素: {len(chinese_elements)}")
                
                # 显示缺少data-i18n的元素
                missing_i18n = [e for e in chinese_elements if not e['has_i18n']]
                if missing_i18n:
                    print(f"     ⚠️ 缺少data-i18n的元素: {len(missing_i18n)}")
                    for elem in missing_i18n[:3]:
                        print(f"        - <{elem['tag']}> {elem['text'][:50]}...")
                
                # 截图
                try:
                    screenshot_path = f"test-results/{page_info['name'].replace('/', '_')}_chinese.png"
                    os.makedirs('test-results', exist_ok=True)
                    self.driver.save_screenshot(screenshot_path)
                    result['screenshot'] = screenshot_path
                except:
                    pass
                
            else:
                result = {
                    'page': page_info['name'],
                    'path': page_info['path'],
                    'url': url,
                    'has_chinese': False,
                }
                print(f"  ✅ 翻译检查通过")
            
            self.results.append(result)
            
        except Exception as e:
            print(f"  ❌ 检查失败: {e}")
            self.results.append({
                'page': page_info['name'],
                'path': page_info['path'],
                'error': str(e),
            })
    
    def check_empty_links(self):
        """检查空链接"""
        print("\n" + "="*60)
        print("检查空链接")
        print("="*60)
        
        empty_links = []
        
        for page_info in PAGES:
            url = urljoin(BASE_URL, page_info['path'])
            try:
                self.driver.get(url)
                time.sleep(0.5)
                
                links = self.driver.find_elements(By.TAG_NAME, 'a')
                for link in links:
                    try:
                        href = link.get_attribute('href')
                        text = link.text.strip()
                        is_visible = link.is_displayed()
                        
                        if is_visible and (not href or href.endswith('#') or href == ''):
                            empty_links.append({
                                'page': page_info['name'],
                                'path': page_info['path'],
                                'text': text or '无文本',
                                'href': href or '空',
                            })
                    except:
                        continue
            except Exception as e:
                print(f"  ⚠️ 检查 {page_info['name']} 时出错: {e}")
        
        if empty_links:
            print(f"\n⚠️ 发现 {len(empty_links)} 个空链接:")
            for link in empty_links:
                print(f"  - [{link['page']}] \"{link['text']}\" -> {link['href']}")
        else:
            print("\n✅ 未发现空链接")
        
        return empty_links
    
    def generate_report(self):
        """生成测试报告"""
        report = {
            'total_pages': len(PAGES),
            'pages_with_chinese': sum(1 for r in self.results if r.get('has_chinese')),
            'results': self.results,
        }
        
        # 保存JSON报告
        os.makedirs('test-results', exist_ok=True)
        with open('test-results/translation_report.json', 'w', encoding='utf-8') as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        
        # 生成文本报告
        with open('test-results/translation_report.txt', 'w', encoding='utf-8') as f:
            f.write("="*60 + "\n")
            f.write("PowerVerse Chain 翻译检查报告\n")
            f.write("="*60 + "\n\n")
            
            f.write(f"总页面数: {report['total_pages']}\n")
            f.write(f"包含中文的页面: {report['pages_with_chinese']}\n\n")
            
            for result in self.results:
                if result.get('has_chinese'):
                    f.write(f"\n❌ {result['page']} ({result['path']})\n")
                    f.write(f"   中文字符数: {result.get('chinese_count', 0)}\n")
                    f.write(f"   中文字符示例: {''.join(result.get('chinese_chars', [])[:10])}\n")
                    if result.get('elements'):
                        f.write(f"   包含中文的元素:\n")
                        for elem in result['elements'][:5]:
                            f.write(f"     - <{elem['tag']}> {elem['text'][:50]}...")
                            if not elem['has_i18n']:
                                f.write(" [缺少data-i18n]")
                            f.write("\n")
                elif 'error' in result:
                    f.write(f"\n⚠️ {result['page']} ({result['path']})\n")
                    f.write(f"   错误: {result['error']}\n")
                else:
                    f.write(f"\n✅ {result['page']} ({result['path']})\n")
        
        print("\n" + "="*60)
        print("测试报告已生成:")
        print("  - test-results/translation_report.json")
        print("  - test-results/translation_report.txt")
        print("="*60)
    
    def run(self):
        """运行所有检查"""
        print("="*60)
        print("PowerVerse Chain 英文环境翻译检查")
        print("="*60)
        
        if not self.setup_driver():
            return
        
        try:
            # 检查所有页面
            for page_info in PAGES:
                self.check_page(page_info)
            
            # 检查空链接
            self.check_empty_links()
            
            # 生成报告
            self.generate_report()
            
        finally:
            if self.driver:
                self.driver.quit()

def start_server():
    """启动HTTP服务器"""
    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"服务器已启动: http://localhost:{PORT}")
            httpd.serve_forever()
    except OSError:
        print(f"端口 {PORT} 已被占用，使用现有服务器")

if __name__ == '__main__':
    import sys
    
    # 检查服务器是否运行
    import urllib.request
    try:
        urllib.request.urlopen('http://localhost:8000', timeout=2)
        print("✅ 检测到服务器正在运行")
    except:
        print("⚠️ 服务器未运行，请先启动: python -m http.server 8000")
        print("   或者按 Ctrl+C 取消，启动服务器后再运行此脚本")
        sys.exit(1)
    
    checker = TranslationChecker()
    checker.run()
