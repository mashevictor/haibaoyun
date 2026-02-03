// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * 性能测试配置
 */
module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/performance*.spec.js',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report-performance' }],
    ['json', { outputFile: 'test-results/performance-results.json' }],
  ],
  use: {
    baseURL: 'http://localhost:8000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // 禁用一些不必要的功能以加快测试
    ignoreHTTPSErrors: true,
    // 模拟慢速网络
    // ...devices['Slow 3G'],
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'python -m http.server 8000',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
