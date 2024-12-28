from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from magic_html import GeneralExtractor
import json

app = FastAPI()

# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/extract")
async def extract(html: str = Form(...), url: str = Form(...)):
    try:
        # 初始化提取器
        extractor = GeneralExtractor()
        
        # 提取内容
        data = extractor.extract(html, base_url=url)
        
        # 返回结果
        return {
            "title": data.get("title", ""),
            "content": data.get("content", ""),
            "textContent": data.get("text", ""),
            "length": len(data.get("text", "")),
            "excerpt": data.get("text", "")[:200],
            "byline": data.get("author", ""),
            "dir": None,
            "siteName": data.get("site_name", ""),
            "lang": data.get("language", ""),
        }
    except Exception as e:
        return {"error": str(e)} 