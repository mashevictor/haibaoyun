/**
 * Ralph Loop 全量测试系统
 * 循环测试所有模块和按钮
 */

class RalphLoopTester {
    constructor() {
        this.testResults = [];
        this.currentTest = 0;
        this.totalTests = 0;
        this.languages = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko'];
        this.testPages = [
            { name: '主页', path: 'index.html' },
            { name: '应用场景', path: 'pages/scenarios.html' },
            { name: '代币页面', path: 'pages/token.html' },
            { name: '硬件工厂', path: 'pages/hardware-factory.html' },
            { name: '研发实力', path: 'pages/research-strength.html' },
            { name: '开发者中心', path: 'pages/developer.html' },
            { name: '关于我们', path: 'pages/about.html' }
        ];
    }

    log(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = {
            time: timestamp,
            message: message,
            type: type
        };
        this.testResults.push(logEntry);
        console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
        
        // 如果页面有日志显示区域，更新它
        if (typeof window.updateTestLog === 'function') {
            window.updateTestLog(logEntry);
        }
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // 测试1: 语言管理器初始化
    async testLanguageManagerInit() {
        this.log('测试1: 检查语言管理器初始化...', 'info');
        
        if (!window.languageManager) {
            this.log('✗ 语言管理器未初始化', 'fail');
            return false;
        }
        
        const currentLang = window.languageManager.getCurrentLanguage();
        this.log(`✓ 语言管理器已初始化，当前语言: ${currentLang}`, 'pass');
        return true;
    }

    // 测试2: 语言按钮存在性和可点击性
    async testLanguageButton() {
        this.log('测试2: 检查语言按钮...', 'info');
        
        const btn = document.querySelector('.lang-switch');
        if (!btn) {
            this.log('✗ 未找到语言按钮', 'fail');
            return false;
        }
        
        this.log('✓ 语言按钮存在', 'pass');
        
        // 测试按钮文本
        const btnText = btn.textContent.trim();
        if (btnText && btnText !== 'Language') {
            this.log(`✓ 按钮文本: ${btnText}`, 'pass');
        } else {
            this.log('⚠ 按钮文本可能未正确设置', 'warning');
        }
        
        return true;
    }

    // 测试3: 语言切换功能（循环测试）
    async testLanguageSwitching() {
        this.log('测试3: 循环测试语言切换...', 'info');
        
        let successCount = 0;
        let failCount = 0;
        
        // 循环测试3轮，确保稳定性
        for (let round = 1; round <= 3; round++) {
            this.log(`--- 第 ${round} 轮测试 ---`, 'info');
            
            for (const lang of this.languages) {
                this.log(`切换到 ${lang}...`, 'info');
                
                try {
                    if (window.languageManager) {
                        window.languageManager.updateLanguage(lang);
                        await this.sleep(300); // 等待DOM更新
                        
                        // 验证语言是否切换成功
                        const currentLang = window.languageManager.getCurrentLanguage();
                        if (currentLang === lang) {
                            this.log(`✓ 成功切换到 ${lang}`, 'pass');
                            successCount++;
                            
                            // 验证按钮是否仍然可用
                            await this.sleep(100);
                            const btn = document.querySelector('.lang-switch');
                            if (btn) {
                                // 尝试点击按钮
                                try {
                                    btn.click();
                                    await this.sleep(200);
                                    this.log(`✓ 切换后按钮可点击: ${lang}`, 'pass');
                                } catch (e) {
                                    this.log(`⚠ 按钮点击测试失败: ${lang}`, 'warning');
                                }
                            } else {
                                this.log(`✗ 切换后按钮丢失: ${lang}`, 'fail');
                                failCount++;
                            }
                        } else {
                            this.log(`✗ 语言切换失败: 期望 ${lang}, 实际 ${currentLang}`, 'fail');
                            failCount++;
                        }
                    }
                } catch (error) {
                    this.log(`✗ 切换 ${lang} 时出错: ${error.message}`, 'fail');
                    failCount++;
                }
            }
        }
        
        this.log(`语言切换测试完成: 成功 ${successCount}, 失败 ${failCount}`, 
                 failCount === 0 ? 'pass' : 'fail');
        return failCount === 0;
    }

    // 测试4: 翻译完整性检查
    async testTranslationCompleteness() {
        this.log('测试4: 检查翻译完整性...', 'info');
        
        const criticalKeys = [
            'nav.product',
            'nav.scenario',
            'nav.developer',
            'nav.token',
            'nav.about',
            'nav.hardwareFactory',
            'nav.researchStrength',
            'home.title',
            'architecture.title',
            'hardwareFactory.title',
            'researchStrength.title'
        ];
        
        let totalMissing = 0;
        
        for (const lang of this.languages) {
            this.log(`检查 ${lang} 的翻译...`, 'info');
            window.languageManager.updateLanguage(lang);
            await this.sleep(200);
            
            let missingKeys = [];
            for (const key of criticalKeys) {
                const translation = window.languageManager.getTranslation(key);
                if (translation === key || !translation) {
                    missingKeys.push(key);
                }
            }
            
            if (missingKeys.length === 0) {
                this.log(`✓ ${lang} 关键翻译完整`, 'pass');
            } else {
                this.log(`✗ ${lang} 缺失翻译: ${missingKeys.join(', ')}`, 'fail');
                totalMissing += missingKeys.length;
            }
        }
        
        return totalMissing === 0;
    }

    // 测试5: 页面元素翻译检查
    async testPageElements() {
        this.log('测试5: 检查页面元素翻译...', 'info');
        
        for (const lang of this.languages) {
            this.log(`检查 ${lang} 的页面元素...`, 'info');
            window.languageManager.updateLanguage(lang);
            await this.sleep(200);
            
            const elements = document.querySelectorAll('[data-i18n]');
            let untranslated = 0;
            let emptyElements = 0;
            
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                const text = el.textContent.trim();
                
                if (!text || text === '') {
                    emptyElements++;
                } else if (text === key) {
                    untranslated++;
                }
            });
            
            if (untranslated === 0 && emptyElements === 0) {
                this.log(`✓ ${lang} 所有元素已翻译 (${elements.length} 个)`, 'pass');
            } else {
                this.log(`⚠ ${lang} 有 ${untranslated} 个未翻译, ${emptyElements} 个空元素`, 'warning');
            }
        }
        
        return true;
    }

    // 测试6: 导航栏链接检查
    async testNavigationLinks() {
        this.log('测试6: 检查导航栏链接...', 'info');
        
        const navLinks = document.querySelectorAll('.nav-menu a[data-i18n]');
        let allTranslated = true;
        
        for (const lang of this.languages) {
            window.languageManager.updateLanguage(lang);
            await this.sleep(200);
            
            navLinks.forEach(link => {
                const key = link.getAttribute('data-i18n');
                const text = link.textContent.trim();
                
                if (!text || text === key || text === '') {
                    this.log(`✗ 导航链接未翻译: ${key} (${lang})`, 'fail');
                    allTranslated = false;
                }
            });
        }
        
        if (allTranslated) {
            this.log('✓ 所有导航链接翻译正常', 'pass');
        }
        
        return allTranslated;
    }

    // 测试7: 语言菜单功能
    async testLanguageMenu() {
        this.log('测试7: 测试语言菜单功能...', 'info');
        
        const btn = document.querySelector('.lang-switch');
        if (!btn) {
            this.log('✗ 语言按钮不存在', 'fail');
            return false;
        }
        
        // 测试打开菜单
        try {
            if (window.languageManager) {
                window.languageManager.showLanguageMenu();
                await this.sleep(200);
                
                const menu = document.getElementById('language-menu');
                if (menu && menu.style.display === 'block') {
                    this.log('✓ 语言菜单可以打开', 'pass');
                    
                    // 测试菜单选项
                    const options = menu.querySelectorAll('.language-option');
                    if (options.length === this.languages.length) {
                        this.log(`✓ 菜单包含所有 ${this.languages.length} 种语言`, 'pass');
                    } else {
                        this.log(`✗ 菜单选项数量不正确: ${options.length}`, 'fail');
                    }
                    
                    // 关闭菜单
                    menu.style.display = 'none';
                } else {
                    this.log('✗ 语言菜单无法打开', 'fail');
                    return false;
                }
            }
        } catch (error) {
            this.log(`✗ 打开语言菜单时出错: ${error.message}`, 'fail');
            return false;
        }
        
        return true;
    }

    // 测试8: 按钮视觉反馈
    async testButtonFeedback() {
        this.log('测试8: 测试按钮视觉反馈...', 'info');
        
        const btn = document.querySelector('.lang-switch');
        if (!btn) {
            return false;
        }
        
        // 检查CSS样式
        const styles = window.getComputedStyle(btn);
        const hasTransition = styles.transition !== 'none' && styles.transition !== '';
        
        if (hasTransition) {
            this.log('✓ 按钮有过渡效果', 'pass');
        } else {
            this.log('⚠ 按钮可能缺少过渡效果', 'warning');
        }
        
        // 检查hover样式（通过模拟）
        const originalBg = styles.backgroundColor;
        btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
        await this.sleep(50);
        const hoverBg = window.getComputedStyle(btn).backgroundColor;
        
        if (hoverBg !== originalBg) {
            this.log('✓ 按钮有hover效果', 'pass');
        } else {
            this.log('⚠ 按钮hover效果可能不明显', 'warning');
        }
        
        return true;
    }

    // 运行所有测试
    async runAllTests() {
        this.log('🚀 开始 Ralph Loop 全量测试...', 'info');
        this.log('='.repeat(50), 'info');
        
        const tests = [
            { name: '语言管理器初始化', fn: () => this.testLanguageManagerInit() },
            { name: '语言按钮存在性', fn: () => this.testLanguageButton() },
            { name: '语言切换功能（循环）', fn: () => this.testLanguageSwitching() },
            { name: '翻译完整性', fn: () => this.testTranslationCompleteness() },
            { name: '页面元素翻译', fn: () => this.testPageElements() },
            { name: '导航栏链接', fn: () => this.testNavigationLinks() },
            { name: '语言菜单功能', fn: () => this.testLanguageMenu() },
            { name: '按钮视觉反馈', fn: () => this.testButtonFeedback() }
        ];
        
        let passed = 0;
        let failed = 0;
        let warnings = 0;
        
        for (const test of tests) {
            this.log(`\n执行测试: ${test.name}`, 'info');
            try {
                const result = await test.fn();
                if (result === true) {
                    passed++;
                } else if (result === false) {
                    failed++;
                } else {
                    warnings++;
                }
                await this.sleep(500); // 测试间隔
            } catch (error) {
                this.log(`✗ 测试 ${test.name} 出错: ${error.message}`, 'fail');
                failed++;
            }
        }
        
        this.log('\n' + '='.repeat(50), 'info');
        this.log('📊 测试结果汇总:', 'info');
        this.log(`总测试数: ${tests.length}`, 'info');
        this.log(`通过: ${passed}`, 'pass');
        this.log(`失败: ${failed}`, failed > 0 ? 'fail' : 'pass');
        this.log(`警告: ${warnings}`, warnings > 0 ? 'warning' : 'pass');
        this.log(`通过率: ${Math.round((passed / tests.length) * 100)}%`, 'info');
        
        return {
            total: tests.length,
            passed,
            failed,
            warnings,
            results: this.testResults
        };
    }
}

// 导出测试器
window.RalphLoopTester = RalphLoopTester;

// 如果页面加载完成，自动创建测试器实例
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.ralphTester = new RalphLoopTester();
    });
} else {
    window.ralphTester = new RalphLoopTester();
}
