/**
 * Ralph Loop 页面打开速度测试
 * 测试首页及各子页面加载时间，目标 100ms；结果写入 ralph_speed_results.json
 * 运行：先启动 HTTP 服务（如 python -m http.server 8000），再执行
 *   npx playwright test tests/ralph_speed.spec.js --config=playwright.config.performance.js
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const TARGET_LOAD_MS = 100;
const PAGES = [
  { name: '首页', path: 'index.html' },
  { name: 'PowerVerse Chain', path: 'pages/chain.html' },
  { name: 'PowerVerse Infra', path: 'pages/infra.html' },
  { name: 'PowerVerse Market', path: 'pages/market.html' },
  { name: 'PowerVerse DAO', path: 'pages/dao.html' },
  { name: 'PowerVerse Wallet', path: 'pages/wallet.html' },
  { name: '算力港', path: 'pages/computing-port.html' },
  { name: '应用场景', path: 'pages/scenarios.html' },
  { name: '云游戏', path: 'pages/cloudgaming.html' },
  { name: '开发者中心', path: 'pages/developer.html' },
  { name: '关于我们', path: 'pages/about.html' },
  { name: '硬件工厂', path: 'pages/hardware-factory.html' },
  { name: '研发实力', path: 'pages/research-strength.html' },
];

const results = [];

test.describe.configure({ mode: 'serial' });

for (const pageInfo of PAGES) {
  test(`${pageInfo.name} - 打开速度`, async ({ page }) => {
    const start = Date.now();
    await page.goto(`/${pageInfo.path}`, { waitUntil: 'load', timeout: 30000 });
    const loadEventMs = Date.now() - start;
    const domMs = await page.evaluate(() => {
      const t = performance.timing;
      return t.domContentLoadedEventEnd - t.navigationStart;
    }).catch(() => loadEventMs);
    await expect(page.locator('nav.navbar')).toBeVisible({ timeout: 5000 });
    results.push({
      name: pageInfo.name,
      path: pageInfo.path,
      loadEventMs,
      domContentLoadedMs: domMs,
      targetMet: loadEventMs <= TARGET_LOAD_MS,
    });
    console.log(`${pageInfo.name}: load=${loadEventMs}ms, dom=${domMs}ms`);
  });
}

test.afterAll(() => {
  const outPath = path.join(__dirname, '..', 'ralph_speed_results.json');
  const summary = {
    timestamp: new Date().toISOString(),
    targetLoadMs: TARGET_LOAD_MS,
    pages: results,
    passed: results.filter((r) => r.targetMet).length,
    total: results.length,
  };
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2), 'utf8');
  console.log('结果已写入 ' + outPath);
});
