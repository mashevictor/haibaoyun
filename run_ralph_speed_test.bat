@echo off
chcp 65001 >nul
echo Ralph Loop 页面打开速度测试（首页及各子页）
echo 若未启动 HTTP 服务，Playwright 将自动启动 python -m http.server 8000
echo 结果将写入 ralph_speed_results.json，目标加载时间 100ms
echo.
npx playwright test tests/ralph_speed.spec.js --config=playwright.config.performance.js
echo.
echo 结果文件: ralph_speed_results.json
pause
