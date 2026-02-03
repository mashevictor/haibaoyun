# 图片生成说明

## 应用场景图片生成

### 方法1：使用Python脚本生成（推荐）

运行以下命令生成图片：

```bash
python generate_images_advanced.py
```

脚本会：
1. 检查是否有OpenAI API密钥（环境变量 `OPENAI_API_KEY`）
2. 如果有API密钥，使用DALL-E生成真实图片
3. 如果没有，生成高质量的占位符图片

### 方法2：使用DALL-E API生成真实图片

1. 获取OpenAI API密钥
2. 设置环境变量：
   ```bash
   # Windows
   set OPENAI_API_KEY=your-api-key-here
   
   # Linux/Mac
   export OPENAI_API_KEY=your-api-key-here
   ```
3. 运行脚本：
   ```bash
   python generate_images_advanced.py
   ```

### 方法3：使用其他图片生成服务

可以修改 `generate_images_advanced.py` 来支持：
- Stable Diffusion API
- Midjourney API
- 其他AI图片生成服务

### 图片配置

所有图片配置保存在 `images/scenarios/prompts.json`，包含：
- 文件名
- 中文和英文提示词
- 配色方案

### 图片列表

需要生成以下6张图片：
1. `scenario-ai.jpg` - AI模型训练
2. `scenario-science.jpg` - 科学计算
3. `scenario-render.jpg` - 渲染服务
4. `scenario-edge.jpg` - 边缘计算
5. `scenario-blockchain.jpg` - 区块链应用
6. `scenario-bigdata.jpg` - 大数据分析

所有图片保存在 `images/scenarios/` 目录。

## PDF内容提取

运行以下命令提取PDF内容：

```bash
python extract_pdf.py
```

提取的内容会保存到 `pdf_content.txt` 文件中。
