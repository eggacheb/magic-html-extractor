# Web Content Extractor

智能网页内容提取工具，基于 Readability 算法，能够自动识别和提取网页的核心内容，移除广告等干扰元素。

## 🌟 关于

Web Content Extractor 专门设计用于为大语言模型（LLM）和AI应用提供清洁、结构化的网页内容。通过移除广告、导航栏等干扰元素，将网页内容转换为适合AI处理的格式，使得：

- 🤖 LLM 可以更准确地理解和处理网页内容
- 📊 减少噪音数据对AI判断的影响
- 🎯 提供结构化的JSON输出，方便程序处理
- 💡 支持批量处理，适合构建AI训练数据集

无论是构建AI助手、知识库，还是进行数据分析，Web Content Extractor 都能帮助你获取高质量的网页内容。

## 🌟 特点

- 🤖 智能内容识别：使用 Readability 算法自动识别网页主要内容
- 🧹 清理干扰元素：自动移除广告、导航栏等无关内容
- 🚀 简单易用的 API：提供 RESTful API 接口，支持批量处理
- 💻 现代化 UI：简洁优雅的用户界面，良好的响应式设计

## 🔗 在线演示

访问 [https://web-content-extractor.vercel.app](https://web-content-extractor.vercel.app) 体验在线版本。

一键部署：[![Vercel Deployment](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eggacheb/web-content-extractor)


![image](https://github.com/user-attachments/assets/a9f717bb-bef6-4b15-b4cd-7d8099b5520c)

![image](https://github.com/user-attachments/assets/ef8f97fc-4a12-4c8d-bc51-85fb5874912b)


## 🛠️ 技术栈

- **Frontend**:
  - Next.js 14
  - React
  - Tailwind CSS
  - TypeScript
  - Lucide Icons

- **Backend**:
  - Next.js API Routes
  - Readability.js
  - Puppeteer

## 🚀 快速开始

1. 克隆项目
```bash
git clone https://github.com/eggacheb/web-content-extractor.git
cd web-content-extractor
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📚 API 使用

### 提取网页内容

```http
GET /api/extract?url=https://example.com
```

#### 响应示例

```json
{
  "title": "文章标题",
  "content": "文章正文内容...",
  "excerpt": "文章摘要",
  "byline": "作者信息（如果有）"
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解更多信息。

