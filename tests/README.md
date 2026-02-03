# PowerVerse Chain 自动化测试

## 安装依赖

```bash
npm install
```

## 运行测试

### 启动服务器
确保服务器在 `http://localhost:8000` 运行：
```bash
python -m http.server 8000
```

### 运行所有测试
```bash
npm test
```

### 运行测试并显示UI
```bash
npm run test:ui
```

### 查看测试报告
```bash
npm run test:report
```

## 测试内容

1. **翻译检查**: 检查所有页面在英文环境下是否包含中文字符
2. **语言切换器**: 验证语言切换功能是否正常工作
3. **空链接检查**: 检查所有页面中的空链接
4. **用户操作模拟**: 模拟用户点击导航、菜单等操作

## 测试报告

测试完成后会生成：
- HTML报告: `playwright-report/index.html`
- 截图: `test-results/` 目录（如果发现中文）
