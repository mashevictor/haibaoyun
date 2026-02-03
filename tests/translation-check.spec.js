const { test, expect } = require('@playwright/test');

// 所有需要测试的页面
const pagesToTest = [
  { name: '首页', path: '/' },
  { name: '应用场景', path: '/pages/scenarios.html' },
  { name: '代币页面', path: '/pages/token.html' },
  { name: '硬件工厂', path: '/pages/hardware-factory.html' },
  { name: '研发实力', path: '/pages/research-strength.html' },
  { name: '开发者中心', path: '/pages/developer.html' },
  { name: '关于我们', path: '/pages/about.html' },
  { name: 'PowerVerse Chain', path: '/pages/chain.html' },
  { name: 'PowerVerse Infra', path: '/pages/infra.html' },
  { name: 'PowerVerse Market', path: '/pages/market.html' },
  { name: 'PowerVerse DAO', path: '/pages/dao.html' },
  { name: 'DeCloud', path: '/pages/decloud.html' },
  { name: '白皮书', path: '/pages/whitepaper.html' },
  { name: '产品页面', path: '/pages/product.html' },
  { name: '宣传册', path: '/pages/brochure.html' },
];

// 中文字符正则表达式
const chineseRegex = /[\u4e00-\u9fa5]/;

/**
 * 检查页面是否包含中文字符
 */
function checkForChinese(text) {
  const matches = text.match(chineseRegex);
  return matches || [];
}

/**
 * 切换到英文环境
 */
async function switchToEnglish(page) {
  try {
    // 等待语言按钮出现
    const langButton = page.locator('.lang-switch');
    await langButton.waitFor({ state: 'visible', timeout: 5000 });
    
    // 鼠标悬停在语言按钮上
    await langButton.hover();
    await page.waitForTimeout(500); // 等待菜单出现
    
    // 查找并点击英文选项
    const englishOption = page.locator('.language-menu .language-option').filter({ hasText: /English|英文/i });
    
    // 如果找不到，尝试通过data-i18n查找
    if (await englishOption.count() === 0) {
      const allOptions = page.locator('.language-menu .language-option');
      const count = await allOptions.count();
      
      // 通常英文是第二个选项（索引1）
      if (count >= 2) {
        await allOptions.nth(1).click();
      } else {
        // 尝试点击包含"en"的选项
        const enOption = page.locator('.language-menu .language-option').filter({ hasText: /en/i });
        if (await enOption.count() > 0) {
          await enOption.first().click();
        } else {
          throw new Error('找不到英文选项');
        }
      }
    } else {
      await englishOption.first().click();
    }
    
    // 等待语言切换完成
    await page.waitForTimeout(1000);
    
    // 验证语言已切换（检查按钮文本是否变为英文相关）
    const buttonText = await langButton.textContent();
    if (buttonText && !/English|EN/i.test(buttonText)) {
      console.warn(`语言切换可能未成功，按钮文本: ${buttonText}`);
    }
  } catch (error) {
    console.error('切换语言失败:', error);
    throw error;
  }
}

test.describe('PowerVerse Chain 英文环境自动化测试', () => {
  
  test.beforeEach(async ({ page }) => {
    // 访问首页并切换到英文
    await page.goto('/');
    await switchToEnglish(page);
  });

  // 测试每个页面
  for (const pageInfo of pagesToTest) {
    test(`检查页面翻译: ${pageInfo.name} (${pageInfo.path})`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // 确保语言是英文
      await switchToEnglish(page);
      await page.waitForTimeout(1000);
      
      // 获取页面所有可见文本
      const bodyText = await page.locator('body').textContent();
      
      // 检查是否包含中文字符
      const chineseChars = checkForChinese(bodyText);
      
      if (chineseChars.length > 0) {
        // 获取包含中文的元素
        const allElements = await page.locator('body *').all();
        const chineseElements = [];
        
        for (const element of allElements) {
          const text = await element.textContent();
          if (text && checkForChinese(text).length > 0) {
            const tagName = await element.evaluate(el => el.tagName);
            const className = await element.getAttribute('class') || '';
            const id = await element.getAttribute('id') || '';
            const dataI18n = await element.getAttribute('data-i18n') || '';
            
            // 跳过script、style、noscript等标签
            if (!['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(tagName)) {
              chineseElements.push({
                tag: tagName,
                text: text.substring(0, 100), // 只取前100个字符
                className,
                id,
                hasDataI18n: !!dataI18n,
              });
            }
          }
        }
        
        // 生成错误报告
        const uniqueChinese = [...new Set(chineseChars)].slice(0, 20);
        console.error(`\n❌ 页面 ${pageInfo.name} 发现中文字符:`);
        console.error(`   路径: ${pageInfo.path}`);
        console.error(`   中文字符示例: ${uniqueChinese.join('')}`);
        console.error(`   包含中文的元素数量: ${chineseElements.length}`);
        
        if (chineseElements.length > 0) {
          console.error(`   前5个包含中文的元素:`);
          chineseElements.slice(0, 5).forEach((el, idx) => {
            console.error(`     ${idx + 1}. <${el.tag}> ${el.text.substring(0, 50)}...`);
            if (!el.hasDataI18n) {
              console.error(`        ⚠️ 缺少 data-i18n 属性`);
            }
          });
        }
        
        // 截图保存
        await page.screenshot({ 
          path: `test-results/${pageInfo.name.replace(/\//g, '_')}_chinese_found.png`,
          fullPage: true 
        });
        
        // 测试失败
        expect(chineseChars.length).toBe(0);
      } else {
        console.log(`✅ 页面 ${pageInfo.name} 翻译检查通过`);
      }
    });
  }

  test('验证语言切换器功能', async ({ page }) => {
    await page.goto('/');
    
    const langButton = page.locator('.lang-switch');
    await langButton.waitFor({ state: 'visible' });
    
    // 检查按钮是否可见
    await expect(langButton).toBeVisible();
    
    // 鼠标悬停
    await langButton.hover();
    await page.waitForTimeout(500);
    
    // 检查菜单是否出现
    const languageMenu = page.locator('.language-menu');
    await expect(languageMenu).toBeVisible();
    
    // 检查z-index是否足够高
    const zIndex = await languageMenu.evaluate(el => {
      return window.getComputedStyle(el).zIndex;
    });
    expect(parseInt(zIndex)).toBeGreaterThan(9999);
    
    // 检查菜单选项数量（应该有5种语言）
    const options = page.locator('.language-menu .language-option');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThanOrEqual(4);
  });

  test('检查所有页面的空链接', async ({ page }) => {
    const emptyLinks = [];
    
    for (const pageInfo of pagesToTest) {
      await page.goto(pageInfo.path);
      await switchToEnglish(page);
      await page.waitForTimeout(500);
      
      const links = await page.locator('a').all();
      
      for (const link of links) {
        const href = await link.getAttribute('href');
        const text = await link.textContent();
        const isVisible = await link.isVisible();
        
        if (isVisible && (!href || href === '#' || href.trim() === '')) {
          emptyLinks.push({
            page: pageInfo.name,
            path: pageInfo.path,
            text: text?.trim() || '无文本',
            href: href || '空',
          });
        }
      }
    }
    
    if (emptyLinks.length > 0) {
      console.warn(`\n⚠️ 发现 ${emptyLinks.length} 个空链接:`);
      emptyLinks.forEach((link, idx) => {
        console.warn(`   ${idx + 1}. [${link.page}] "${link.text}" -> ${link.href}`);
      });
    } else {
      console.log('✅ 未发现空链接');
    }
    
    // 这里不强制失败，只是报告
  });

  test('模拟用户操作流程', async ({ page }) => {
    // 1. 访问首页
    await page.goto('/');
    await switchToEnglish(page);
    await page.waitForTimeout(1000);
    
    // 2. 点击导航菜单项
    const navItems = [
      { text: 'Products', selector: 'nav a[data-i18n="nav.product"]' },
      { text: 'Scenarios', selector: 'nav a[data-i18n="nav.scenario"]' },
      { text: 'Developer', selector: 'nav a[data-i18n="nav.developer"]' },
    ];
    
    for (const item of navItems) {
      try {
        const navLink = page.locator(item.selector);
        if (await navLink.count() > 0 && await navLink.isVisible()) {
          await navLink.click();
          await page.waitForTimeout(1000);
          
          // 检查页面是否加载
          const pageTitle = await page.title();
          console.log(`✅ 成功导航到: ${item.text} (${pageTitle})`);
          
          // 验证页面没有中文
          const bodyText = await page.locator('body').textContent();
          const chineseChars = checkForChinese(bodyText);
          
          if (chineseChars.length > 0) {
            console.error(`❌ ${item.text} 页面包含中文: ${[...new Set(chineseChars)].slice(0, 10).join('')}`);
          }
        }
      } catch (error) {
        console.warn(`⚠️ 无法点击 ${item.text}:`, error.message);
      }
    }
    
    // 3. 测试产品下拉菜单
    const productMenu = page.locator('nav a[data-i18n="nav.product"]');
    if (await productMenu.count() > 0) {
      await productMenu.hover();
      await page.waitForTimeout(500);
      
      const dropdown = page.locator('.product-dropdown');
      if (await dropdown.isVisible()) {
        const productLinks = dropdown.locator('a');
        const count = await productLinks.count();
        console.log(`✅ 产品下拉菜单包含 ${count} 个产品链接`);
      }
    }
  });
});
