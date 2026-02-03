#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import shutil
from pathlib import Path

# 创建备份目录
backup_dir = Path("今日改动备份")
backup_dir.mkdir(exist_ok=True)

# 创建子目录
(backup_dir / "pages").mkdir(exist_ok=True)
(backup_dir / "js").mkdir(exist_ok=True)
(backup_dir / "images" / "scenarios").mkdir(parents=True, exist_ok=True)

# 需要复制的文件列表
files_to_copy = [
    ("pages/scenarios.html", "pages/scenarios.html"),
    ("index.html", "index.html"),
    ("pages/rwa.html", "pages/rwa.html"),
    ("js/languages.js", "js/languages.js"),
    ("images/scenarios/walletrwa.png", "images/scenarios/walletrwa.png"),
    ("今日改动清单.md", "今日改动清单.md"),
]

copied_files = []
missing_files = []

print("=" * 60)
print("开始复制今日改动的文件...")
print("=" * 60)

for src, dst in files_to_copy:
    src_path = Path(src)
    dst_path = backup_dir / dst
    
    if src_path.exists():
        # 确保目标目录存在
        dst_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_path, dst_path)
        copied_files.append(dst)
        print(f"✓ 已复制: {src} -> {dst_path}")
    else:
        missing_files.append(src)
        print(f"✗ 文件不存在: {src}")

print("=" * 60)
print(f"复制完成！")
print(f"成功复制: {len(copied_files)} 个文件")
if missing_files:
    print(f"缺失文件: {len(missing_files)} 个")
    for f in missing_files:
        print(f"  - {f}")
print("=" * 60)
print(f"备份目录: {backup_dir.absolute()}")
print("=" * 60)
