# PowerVerse Chain 网站 - 快速开始指南

## 🚀 一键设置

### Windows用户

双击运行：
```
run_scripts.bat
```

或手动运行：
```bash
python final_setup.py
```

### 功能说明

运行脚本后会自动：
1. ✅ 安装必要的Python库（Pillow, pdfplumber）
2. ✅ 生成6张应用场景图片（占位符，可替换为AI生成的真实图片）
3. ✅ 提取PDF内容到 `pdf_content.txt`

## 📸 生成真实AI图片

### 方法1：使用OpenAI DALL-E（推荐）

1. 获取API密钥：https://platform.openai.com/api-keys
2. 设置环境变量：
   ```cmd
   set OPENAI_API_KEY=your-api-key-here
   ```
3. 运行：
   ```bash
   python generate_images_api.py
   ```

### 方法2：使用Hugging Face Stable Diffusion

1. 获取API密钥：https://huggingface.co/settings/tokens
2. 设置环境变量：
   ```cmd
   set HUGGINGFACE_API_KEY=your-api-key-here
   ```
3. 运行：
   ```bash
   python generate_images_api.py
   ```

### 方法3：手动生成

使用 `GENERATE_IMAGES.md` 中的提示词，在以下平台生成：
- Midjourney
- DALL-E网页版
- Stable Diffusion WebUI
- 其他AI图片生成工具

将生成的图片保存到 `images/scenarios/` 目录，文件名：
- `scenario-ai.jpg`
- `scenario-science.jpg`
- `scenario-render.jpg`
- `scenario-edge.jpg`
- `scenario-blockchain.jpg`
- `scenario-bigdata.jpg`

## 📄 PDF内容提取

PDF内容已提取到 `pdf_content.txt`，可以：
1. 查看提取的文本内容
2. 根据需要更新网站内容
3. 在 `pages/brochure.html` 页面查看PDF预览

## 🌐 查看网站

1. 打开 `index.html` - 主页
2. 打开 `pages/scenarios.html` - 应用场景（已增强，包含图片）
3. 打开 `pages/brochure.html` - 宣传册查看器
4. 其他页面：product.html, developer.html, token.html, about.html, whitepaper.html

## 📁 文件结构

```
├── index.html                    # 主页
├── pages/
│   ├── scenarios.html           # 应用场景（已增强）
│   ├── brochure.html            # 宣传册查看器
│   ├── product.html             # 产品页面
│   ├── developer.html           # 开发者中心
│   ├── token.html               # 代币页面
│   ├── about.html               # 关于我们
│   └── whitepaper.html          # 白皮书
├── images/
│   └── scenarios/               # 应用场景图片
│       ├── scenario-ai.jpg
│       ├── scenario-science.jpg
│       ├── scenario-render.jpg
│       ├── scenario-edge.jpg
│       ├── scenario-blockchain.jpg
│       └── scenario-bigdata.jpg
├── js/
│   └── languages.js             # 多语言支持
├── final_setup.py               # 一键设置脚本
├── generate_images_api.py       # AI图片生成脚本
└── pdf_content.txt              # 提取的PDF内容
```

## ✅ 已完成的功能

- ✅ 多语言支持（简体中文、繁体中文、英文、日语）
- ✅ 所有二级页面（产品、应用场景、开发者、代币、关于、白皮书）
- ✅ 应用场景页面增强（6个场景，详细内容，图片支持）
- ✅ 宣传册查看器页面
- ✅ PDF内容提取功能
- ✅ 图片生成脚本（支持DALL-E和Stable Diffusion）
- ✅ 响应式设计
- ✅ 现代化UI设计

## 🔧 故障排除

### Python脚本无法运行

确保已安装Python 3.7+：
```bash
python --version
```

### 图片未显示

1. 检查 `images/scenarios/` 目录是否存在
2. 运行 `python final_setup.py` 生成图片
3. 检查浏览器控制台是否有错误

### PDF无法预览

某些浏览器不支持直接预览PDF，可以：
1. 使用Chrome或Edge浏览器
2. 或提供下载链接（已包含）

## 📞 需要帮助？

查看详细文档：
- `INSTRUCTIONS.md` - 详细使用说明
- `GENERATE_IMAGES.md` - 图片生成指南
- `README.md` - 项目说明
