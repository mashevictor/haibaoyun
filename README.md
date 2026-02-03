# PowerVerse Chain 官网

基于 PowerVerse Chain 主题构建的现代化官网，展示去中心化计算网络的生态和产品。

## 功能特性

- 🎨 现代化设计：深色主题，渐变效果，流畅动画
- 📱 响应式布局：完美适配桌面、平板和移动设备
- ⚡ 流畅交互：平滑滚动、动画效果、交互反馈
- 🔍 SEO友好：语义化HTML结构
- 🚀 性能优化：轻量级代码，快速加载

## 文件结构

```
├── index.html      # 主页面HTML
├── styles.css      # 样式文件
├── script.js       # JavaScript交互功能
└── README.md       # 项目说明
```

## 页面结构

1. **导航栏** - 固定顶部导航，包含产品、应用场景、开发者中心等链接
2. **Hero区域** - 首页大图展示，包含下载按钮
3. **技术架构** - 展示PowerVerse Chain的技术框架
4. **产品生态** - 介绍PowerVerse Chain、Infra、Market、DAO、DeCloud等产品
5. **应用场景** - AI训练、科学计算、渲染服务、边缘计算等场景
6. **开发者中心** - 技术文档、SDK、开发工具、社区支持
7. **代币经济** - 代币用途和分配机制
8. **关于我们** - 愿景、使命和核心价值
9. **页脚** - 链接和版权信息

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或使用本地服务器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
3. 访问 `http://localhost:8000`

## 技术栈

- HTML5
- CSS3 (使用CSS变量、Grid、Flexbox)
- Vanilla JavaScript (无框架依赖)
- Google Fonts (Inter字体)

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 自定义

### 修改颜色主题

在 `styles.css` 的 `:root` 变量中修改：

```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #0066ff;
    --bg-dark: #0a0e27;
    /* ... */
}
```

### 修改内容

直接编辑 `index.html` 文件中的文本内容。

## 许可证

© 2024 PowerVerse Chain. All rights reserved.