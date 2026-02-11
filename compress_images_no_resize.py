#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
全量图片压缩（不改变分辨率）
仅做质量/编码压缩，不修改尺寸，确保每页加载更快。
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("请先安装 Pillow: pip install Pillow")
    sys.exit(1)

# 扫描的目录（项目内所有可能包含图片的目录）
IMAGE_DIRS = ["images", "videos2"]
IMAGE_EXT = (".png", ".jpg", ".jpeg", ".webp", ".gif")
# SVG 不参与压缩（矢量）
SKIP_DIRS = {"node_modules", ".git", "vevn", "__pycache__", "Cloud Gaming1_files"}

# 不改变分辨率，仅压缩质量
JPEG_QUALITY = 85
PNG_OPTIMIZE = True
WEBP_QUALITY = 85
GIF_OPTIMIZE = True

stats = {"total": 0, "compressed": 0, "skipped": 0, "original_bytes": 0, "saved_bytes": 0, "errors": 0}


def compress_image(path: Path) -> bool:
    """压缩单张图片（不改变尺寸），覆盖原文件。返回是否进行了压缩。"""
    try:
        img = Image.open(path)
        img.load()
        original_size = path.stat().st_size
        stats["original_bytes"] += original_size

        ext = path.suffix.lower()
        if ext not in IMAGE_EXT:
            stats["skipped"] += 1
            return False

        # 保持模式与尺寸不变
        if img.mode in ("RGBA", "LA", "P") and ext in (".jpg", ".jpeg"):
            img = img.convert("RGB")
        elif img.mode not in ("RGB", "RGBA", "L", "P"):
            img = img.convert("RGB")

        buf = path.parent / (path.stem + "_tmp" + path.suffix)
        try:
            if ext in (".jpg", ".jpeg"):
                img.save(buf, "JPEG", quality=JPEG_QUALITY, optimize=True)
            elif ext == ".png":
                img.save(buf, "PNG", optimize=PNG_OPTIMIZE)
            elif ext == ".webp":
                img.save(buf, "WEBP", quality=WEBP_QUALITY, method=6)
            elif ext == ".gif":
                img.save(buf, "GIF", optimize=GIF_OPTIMIZE)
            else:
                stats["skipped"] += 1
                return False

            new_size = buf.stat().st_size
            if new_size < original_size:
                buf.replace(path)
                stats["compressed"] += 1
                stats["saved_bytes"] += original_size - new_size
                return True
            else:
                buf.unlink(missing_ok=True)
                return False
        finally:
            buf.unlink(missing_ok=True)
    except Exception as e:
        print(f"  错误 {path}: {e}")
        stats["errors"] += 1
        return False


def main():
    base = Path(__file__).resolve().parent
    os.chdir(base)

    print("全量图片压缩（不改变分辨率）")
    print("=" * 50)

    for dir_name in IMAGE_DIRS:
        if not dir_name or not Path(dir_name).exists():
            continue
        for path in Path(dir_name).rglob("*"):
            if path.is_file() and path.suffix.lower() in IMAGE_EXT:
                if any(skip in path.parts for skip in SKIP_DIRS):
                    continue
                stats["total"] += 1
                if compress_image(path):
                    print(f"  压缩: {path}")

    print("=" * 50)
    print(f"总图片数: {stats['total']}")
    print(f"已压缩: {stats['compressed']}")
    print(f"跳过/未缩小: {stats['skipped']}")
    print(f"错误: {stats['errors']}")
    if stats["original_bytes"] > 0:
        saved = stats["saved_bytes"]
        pct = 100 * saved / stats["original_bytes"]
        print(f"节省: {saved / 1024 / 1024:.2f} MB ({pct:.1f}%)")
    # 保存结果供 Ralph / 性能报告使用
    try:
        import json
        out = Path("image_optimization_results.json")
        out.write_text(json.dumps({
            "total_images": stats["total"],
            "optimized": stats["compressed"],
            "saved_bytes": stats["saved_bytes"],
            "original_bytes": stats["original_bytes"],
        }, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"结果已写入 {out}")
    except Exception as e:
        print(f"写入结果失败: {e}")
    print("完成。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
