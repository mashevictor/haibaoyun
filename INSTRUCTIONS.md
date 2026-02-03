# 使用说明

## 快速开始

### 1. 生成图片和提取PDF

在项目根目录运行：

```bash
python final_setup.py
```

这会：
- 自动安装必要的库（Pillow, pdfplumber）
- 生成6张应用场景图片到 `images/scenarios/` 目录
- 提取PDF内容到 `pdf_content.txt`

### 2. 生成真实AI图片（可选）

要使用AI生成真实图片，需要：

#### 方法A：使用OpenAI DALL-E

1. 获取API密钥：https://platform.openai.com/api-keys
2. 设置环境变量：
   ```bash
   # Windows
   set OPENAI_API_KEY=your-api-key
   
   # Linux/Mac
   export OPENAI_API_KEY=your-api-key
   ```
3. 运行：
   ```bash
   python generate_images_api.py
   ```

#### 方法B：使用Hugging Face Stable Diffusion

1. 获取API密钥：https://huggingface.co/settings/tokens
2. 设置环境变量：
   ```bash
   set HUGGINGFACE_API_KEY=your-api-key
   ```
3. 运行：
   ```bash
   python generate_images_api.py
   ```

#### 方法C：手动生成

使用以下提示词在AI图片生成工具（如Midjourney、DALL-E网页版等）中生成：

1. **AI模型训练** - `scenario-ai.jpg`
   ```
   Futuristic AI neural network visualization with glowing nodes and connections, distributed GPU computing for AI model training, dark blue and cyan color scheme, high tech, 4k quality, professional photography style
   ```

2. **科学计算** - `scenario-science.jpg`
   ```
   Scientific computing visualization showing molecular structures, data analysis graphs, research simulations, high-performance computing clusters, professional scientific atmosphere, dark theme with blue accents, modern laboratory
   ```

3. **渲染服务** - `scenario-render.jpg`
   ```
   3D rendering workspace with cinematic lighting, 3D models, animation frames, visual effects, distributed rendering network, creative digital art, modern studio environment, professional
   ```

4. **边缘计算** - `scenario-edge.jpg`
   ```
   Edge computing network diagram showing distributed nodes connected globally, low latency data flow visualization, IoT devices, smart city concept, futuristic technology, blue and green neon lights, modern
   ```

5. **区块链应用** - `scenario-blockchain.jpg`
   ```
   Blockchain network visualization with interconnected blocks, smart contracts, Web3 applications, decentralized network nodes, cryptocurrency symbols, modern blockchain technology, dark theme with glowing elements, professional
   ```

6. **大数据分析** - `scenario-bigdata.jpg`
   ```
   Big data analytics dashboard showing data streams, charts, graphs, visualizations, distributed data processing, business intelligence, modern data center, professional analytics interface, dark theme
   ```

将生成的图片保存到 `images/scenarios/` 目录，使用对应的文件名。

### 3. 查看结果

1. 打开 `index.html` 查看主页
2. 打开 `pages/scenarios.html` 查看应用场景页面（包含真实图片）
3. 打开 `pages/brochure.html` 查看宣传册页面

## 文件说明

- `final_setup.py` - 一键生成图片和提取PDF
- `generate_images_api.py` - 使用AI API生成真实图片
- `extract_pdf_fixed.py` - 提取PDF内容
- `images/scenarios/` - 应用场景图片目录
- `pdf_content.txt` - 提取的PDF文本内容

## 注意事项

1. 图片尺寸：1200x600 像素，JPEG格式
2. PDF查看：某些浏览器可能不支持直接预览PDF，建议提供下载链接
3. 图片优化：生成后可以使用工具压缩图片以加快加载速度
