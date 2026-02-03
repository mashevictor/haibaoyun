/**
 * 页面性能和多语言测试脚本
 * 使用Playwright测试页面加载速度和多语言切换
 */

const { test, expect } = require('@playwright/test');

// 测试的页面列表
const pages = [
    { name: '首页', path: 'index.html' },
    { name: 'PowerVerse Chain', path: 'pages/chain.html' },
    { name: 'PowerVerse Infra', path: 'pages/infra.html' },
    { name: 'PowerVerse Market', path: 'pages/market.html' },
    { name: 'PowerVerse DAO', path: 'pages/dao.html' },
    { name: 'PowerVerse Wallet', path: 'pages/wallet.html' },
    { name: 'PowerVerse Scan', path: 'pages/scan.html' },
    { name: 'RWA代币 XAI', path: 'pages/xai-token.html' },
    { name: 'DeCloud', path: 'pages/decloud.html' },
    { name: '算力港', path: 'pages/computing-port.html' },
    { name: '应用场景', path: 'pages/scenarios.html' },
    { name: 'RWA钱包', path: 'pages/rwa.html' },
    { name: '关于我们', path: 'pages/about.html' },
];

// 测试的语言列表
const languages = [
    { name: '简体中文', code: 'zh-CN' },
    { name: '繁体中文', code: 'zh-TW' },
    { name: 'English', code: 'en' },
    { name: '日本語', code: 'ja' },
    { name: '한국어', code: 'ko' },
];

// 最大加载时间（毫秒）
const MAX_LOAD_TIME = 1000;

test.describe('页面性能测试', () => {
    test.beforeEach(async ({ page }) => {
        // 禁用缓存以确保测试准确性
        await page.route('**/*', route => {
            route.continue();
        });
    });

    for (const pageInfo of pages) {
        test(`${pageInfo.name} - 页面加载速度测试`, async ({ page }) => {
            const startTime = Date.now();
            
            // 导航到页面
            await page.goto(`http://localhost:8000/${pageInfo.path}`, {
                waitUntil: 'networkidle',
                timeout: 10000
            });
            
            const loadTime = Date.now() - startTime;
            
            // 检查页面是否加载完成
            await expect(page).toHaveTitle(/PowerVerse|产品|应用场景|关于我们|白皮书|宣传册/);
            
            // 验证加载时间
            expect(loadTime).toBeLessThan(MAX_LOAD_TIME);
            
            console.log(`${pageInfo.name}: ${loadTime}ms`);
        });
    }
});

test.describe('多语言切换测试', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8000/index.html', {
            waitUntil: 'networkidle'
        });
    });

    for (const lang of languages) {
        test(`切换到${lang.name}`, async ({ page }) => {
            // 查找语言切换按钮
            const langButton = page.locator('button.lang-switch').first();
            await expect(langButton).toBeVisible();
            
            // 点击语言切换按钮
            await langButton.click();
            
            // 等待语言切换完成
            await page.waitForTimeout(500);
            
            // 验证页面内容已切换（检查导航菜单）
            const navProduct = page.locator('[data-i18n="nav.product"]').first();
            await expect(navProduct).toBeVisible();
            
            // 检查特定语言的文本
            const text = await navProduct.textContent();
            console.log(`${lang.name}: ${text}`);
        });
    }
});

test.describe('产品导航菜单测试', () => {
    test('导航菜单包含所有9个产品项', async ({ page }) => {
        await page.goto('http://localhost:8000/index.html', {
            waitUntil: 'networkidle'
        });
        
        // 点击产品菜单
        const productMenu = page.locator('a[data-i18n="nav.product"]').first();
        await productMenu.hover();
        
        // 等待下拉菜单显示
        await page.waitForSelector('.product-dropdown', { state: 'visible' });
        
        // 检查所有产品项
        const productItems = [
            'products.chain.name',
            'products.infra.name',
            'products.market.name',
            'products.dao.name',
            'products.wallet.name',
            'products.scan.name',
            'products.xaiToken.name',
            'products.decloud.name',
            'products.computingPort.name'
        ];
        
        for (const item of productItems) {
            const element = page.locator(`[data-i18n="${item}"]`).first();
            await expect(element).toBeVisible();
        }
        
        // 验证数量
        const dropdownLinks = page.locator('.product-dropdown a');
        const count = await dropdownLinks.count();
        expect(count).toBe(9);
    });
    
    for (const lang of languages) {
        test(`导航菜单 - ${lang.name}语言`, async ({ page }) => {
            await page.goto('http://localhost:8000/index.html', {
                waitUntil: 'networkidle'
            });
            
            // 切换到指定语言
            const langButton = page.locator('button.lang-switch').first();
            await langButton.click();
            await page.waitForTimeout(500);
            
            // 检查产品菜单
            const productMenu = page.locator('a[data-i18n="nav.product"]').first();
            await productMenu.hover();
            await page.waitForSelector('.product-dropdown', { state: 'visible' });
            
            // 验证所有产品项都可见
            const dropdownLinks = page.locator('.product-dropdown a');
            const count = await dropdownLinks.count();
            expect(count).toBe(9);
        });
    }
});

test.describe('页面加载性能详细测试', () => {
    for (const pageInfo of pages) {
        for (const lang of languages) {
            test(`${pageInfo.name} - ${lang.name} - 性能测试`, async ({ page, context }) => {
                // 启用性能监控
                await context.tracing.start({ screenshots: true, snapshots: true });
                
                const startTime = Date.now();
                
                // 导航到页面
                await page.goto(`http://localhost:8000/${pageInfo.path}`, {
                    waitUntil: 'domcontentloaded',
                    timeout: 10000
                });
                
                // 切换到指定语言
                const langButton = page.locator('button.lang-switch').first();
                if (await langButton.isVisible()) {
                    await langButton.click();
                    await page.waitForTimeout(300);
                }
                
                // 等待页面完全加载
                await page.waitForLoadState('networkidle');
                
                const loadTime = Date.now() - startTime;
                
                // 检查关键元素是否加载
                await expect(page.locator('nav.navbar')).toBeVisible();
                
                // 验证加载时间
                expect(loadTime).toBeLessThan(MAX_LOAD_TIME);
                
                console.log(`${pageInfo.name} (${lang.name}): ${loadTime}ms`);
                
                await context.tracing.stop({ path: `test-results/${pageInfo.name}-${lang.code}-trace.zip` });
            });
        }
    }
});
