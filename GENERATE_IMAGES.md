# 图片生成指南

## 快速开始

### 方法1：使用Python脚本（推荐）

在命令行中运行：

```bash
python quick_setup.py
```

这会：
1. 自动安装必要的库（Pillow, pdfplumber）
2. 生成6张应用场景占位符图片
3. 提取PDF内容

### 方法2：使用AI生成真实图片

#### 使用DALL-E（OpenAI）

1. 获取API密钥：https://platform.openai.com/api-keys
2. 设置环境变量：
   ```bash
   # Windows
   set OPENAI_API_KEY=your-api-key-here
   
   # Linux/Mac
   export OPENAI_API_KEY=your-api-key-here
   ```
3. 运行：
   ```bash
   python generate_images_advanced.py
   ```

#### 使用其他AI图片生成服务

修改 `generate_images_advanced.py` 中的 `generate_with_dalle` 函数，替换为：
- Stable Diffusion API
- Midjourney API
- 其他图片生成服务

### 方法3：手动生成图片

使用以下提示词在AI图片生成工具中生成：

1. **AI模型训练** (`scenario-ai.jpg`)
   - 提示词：Futuristic AI neural network visualization with glowing nodes and connections, distributed GPU computing for AI model training, dark blue and cyan color scheme, high tech, 4k quality

2. **科学计算** (`scenario-science.jpg`)
   - 提示词：Scientific computing visualization showing molecular structures, data analysis graphs, research simulations, high-performance computing clusters, professional scientific atmosphere, dark theme with blue accents

3. **渲染服务** (`scenario-render.jpg`)
   - 提示词：3D rendering workspace with cinematic lighting, 3D models, animation frames, visual effects, distributed rendering network, creative digital art, modern studio environment

4. **边缘计算** (`scenario-edge.jpg`)
   - 提示词：Edge computing network diagram showing distributed nodes connected globally, low latency data flow visualization, IoT devices, smart city concept, futuristic technology, blue and green neon lights

5. **区块链应用** (`scenario-blockchain.jpg`)
   - 提示词：Blockchain network visualization with interconnected blocks, smart contracts, Web3 applications, decentralized network nodes, cryptocurrency symbols, modern blockchain technology, dark theme with glowing elements

6. **大数据分析** (`scenario-bigdata.jpg`)
   - 提示词：Big data analytics dashboard showing data streams, charts, graphs, visualizations, distributed data processing, business intelligence, modern data center, professional analytics interface

将生成的图片保存到 `images/scenarios/` 目录，文件名对应上述名称。

## PDF内容提取

运行以下命令提取PDF内容：

```bash
python extract_pdf.py
```

内容会保存到 `pdf_content.txt`，可用于更新网站内容。

## 图片要求

- 尺寸：1200x600 像素
- 格式：JPEG
- 风格：深色主题，蓝色/青色配色
- 质量：高质量，适合网页展示
