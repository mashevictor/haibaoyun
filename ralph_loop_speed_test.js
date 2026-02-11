/**
 * Ralph Loop 页面打开速度测试
 * 测试首页及各子页面加载时间，目标 100ms（理想），实际结果写入 ralph_speed_results.json
 * 使用方式：先启动本地 HTTP 服务（如 python -m http.server 8000），再执行 node ralph_loop_speed_test.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:8000';
const TARGET_LOAD_MS = 100; // 目标加载时间（ms），用于标记是否达标
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

async function measurePage(browser, pageInfo) {
  const page = await browser.newPage();
  const url = `${BASE_URL}/${pageInfo.path}`;
  let loadEventEnd = 0;
  let domContentLoaded = 0;

  try {
    const start = Date.now();
    const response = await page.goto(url, {
      waitUntil: 'load',
      timeout: 30000,
    });
    loadEventEnd = Date.now() - start;

    domContentLoaded = await page.evaluate(() => {
      const t = performance.timing;
      return t.domContentLoadedEventEnd - t.navigationStart;
    }).catch(() => loadEventEnd);

    const ok = response && response.ok();
    return {
      name: pageInfo.name,
      path: pageInfo.path,
      loadEventMs: loadEventEnd,
      domContentLoadedMs: domContentLoaded,
      ok,
      targetMet: loadEventEnd <= TARGET_LOAD_MS,
    };
  } catch (e) {
    return {
      name: pageInfo.name,
      path: pageInfo.path,
      error: e.message,
      loadEventMs: -1,
      domContentLoadedMs: -1,
      ok: false,
      targetMet: false,
    };
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('Ralph Loop 页面打开速度测试');
  console.log('BASE_URL:', BASE_URL);
  console.log('目标加载时间:', TARGET_LOAD_MS, 'ms');
  console.log('='.repeat(50));

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const pageInfo of PAGES) {
    const r = await measurePage(browser, pageInfo);
    results.push(r);
    if (r.error) {
      console.log(`✗ ${r.name}: ${r.error}`);
    } else {
      const status = r.targetMet ? '✓' : '⚠';
      console.log(`${status} ${r.name}: load=${r.loadEventMs}ms, dom=${r.domContentLoadedMs}ms`);
    }
  }

  await browser.close();

  const summary = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    targetLoadMs: TARGET_LOAD_MS,
    pages: results,
    passed: results.filter((r) => !r.error && r.targetMet).length,
    total: results.length,
  };

  const outPath = path.join(__dirname, 'ralph_speed_results.json');
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2), 'utf8');
  console.log('='.repeat(50));
  console.log(`结果已写入 ${outPath}`);
  console.log(`达标(<=${TARGET_LOAD_MS}ms): ${summary.passed}/${summary.total}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
