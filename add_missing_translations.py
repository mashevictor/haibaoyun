#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
批量添加缺失的翻译键
"""
import re

# 读取文件
with open('js/languages.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义需要添加的翻译键
translations_to_add = {
    'en': {
        'hardwareFactory.pageTitle': 'Hardware Factory - PowerVerse Chain',
        'researchStrength.pageTitle': 'Research Strength - PowerVerse Chain',
        'researchStrength.experienceValue': '10+ years',
        'scenarios.science.stats.dataProcessingValue': 'PB level',
        'scenarios.bigdata.stats.dataStorageValue': 'EB level',
        'scenarios.bigdata.stats.streamProcessingValue': 'Real-time',
        'scenarios.bigdata.stats.processingCapacityValue': 'PB/day'
    },
    'ja': {
        'hardwareFactory.pageTitle': 'ハードウェア工場 - PowerVerse Chain',
        'researchStrength.pageTitle': '研究開発力 - PowerVerse Chain',
        'researchStrength.experienceValue': '10年以上',
        'scenarios.science.stats.dataProcessingValue': 'PB級',
        'scenarios.bigdata.stats.dataStorageValue': 'EB級',
        'scenarios.bigdata.stats.streamProcessingValue': 'リアルタイム',
        'scenarios.bigdata.stats.processingCapacityValue': 'PB/日'
    },
    'ko': {
        'hardwareFactory.pageTitle': '하드웨어 공장 - PowerVerse Chain',
        'researchStrength.pageTitle': '연구 개발 역량 - PowerVerse Chain',
        'researchStrength.experienceValue': '10년+',
        'scenarios.science.stats.dataProcessingValue': 'PB급',
        'scenarios.bigdata.stats.dataStorageValue': 'EB급',
        'scenarios.bigdata.stats.streamProcessingValue': '실시간',
        'scenarios.bigdata.stats.processingCapacityValue': 'PB/일'
    }
}

# 为每种语言添加翻译键
for lang_code, translations in translations_to_add.items():
    # 查找语言块
    lang_pattern = f"'{lang_code}':\\s*\\{{"
    lang_match = re.search(lang_pattern, content)
    
    if not lang_match:
        print(f"未找到语言块: {lang_code}")
        continue
    
    # 在语言块内查找对应的部分并添加翻译键
    lang_start = lang_match.start()
    
    # 添加hardwareFactory.pageTitle
    hf_pattern = r"(hardwareFactory:\s*\{[^}]*title:\s*'[^']+',)"
    hf_match = re.search(hf_pattern, content[lang_start:], re.DOTALL)
    if hf_match:
        hf_pos = lang_start + hf_match.start()
        page_title = translations['hardwareFactory.pageTitle']
        if f"pageTitle: '{page_title}'" not in content[hf_pos:hf_pos+200]:
            content = content[:hf_pos+hf_match.end()-1] + f"\n            pageTitle: '{page_title}'," + content[hf_pos+hf_match.end()-1:]
            print(f"已添加 {lang_code}.hardwareFactory.pageTitle")
    
    # 添加researchStrength.pageTitle和experienceValue
    rs_pattern = r"(researchStrength:\s*\{[^}]*title:\s*'[^']+',)"
    rs_match = re.search(rs_pattern, content[lang_start:], re.DOTALL)
    if rs_match:
        rs_pos = lang_start + rs_match.start()
        page_title = translations['researchStrength.pageTitle']
        if f"pageTitle: '{page_title}'" not in content[rs_pos:rs_pos+200]:
            content = content[:rs_pos+rs_match.end()-1] + f"\n            pageTitle: '{page_title}'," + content[rs_pos+rs_match.end()-1:]
            print(f"已添加 {lang_code}.researchStrength.pageTitle")
    
    # 添加experienceValue
    exp_pattern = r"(experience:\s*'[^']+',)"
    exp_match = re.search(exp_pattern, content[lang_start:])
    if exp_match and 'researchStrength' in content[lang_start:lang_start+exp_match.start()][-500:]:
        exp_pos = lang_start + exp_match.end()
        exp_value = translations['researchStrength.experienceValue']
        if f"experienceValue: '{exp_value}'" not in content[exp_pos-100:exp_pos+100]:
            content = content[:exp_pos] + f"\n            experienceValue: '{exp_value}'," + content[exp_pos:]
            print(f"已添加 {lang_code}.researchStrength.experienceValue")
    
    # 添加scenarios翻译键
    # 查找science.stats部分
    science_pattern = r"(science:\s*\{[^}]*stats:\s*\{[^}]*dataProcessing:\s*'[^']+',)"
    science_match = re.search(science_pattern, content[lang_start:], re.DOTALL)
    if science_match:
        science_pos = lang_start + science_match.end()
        data_proc_value = translations['scenarios.science.stats.dataProcessingValue']
        if f"dataProcessingValue: '{data_proc_value}'" not in content[science_pos-50:science_pos+50]:
            content = content[:science_pos] + f"\n                    dataProcessingValue: '{data_proc_value}'," + content[science_pos:]
            print(f"已添加 {lang_code}.scenarios.science.stats.dataProcessingValue")
    
    # 查找bigdata.stats部分
    bigdata_pattern = r"(bigdata:\s*\{[^}]*stats:\s*\{[^}]*processingCapacity:\s*'[^']+',)"
    bigdata_match = re.search(bigdata_pattern, content[lang_start:], re.DOTALL)
    if bigdata_match:
        bigdata_pos = lang_start + bigdata_match.end()
        bigdata_values = [
            ("dataStorageValue", translations['scenarios.bigdata.stats.dataStorageValue']),
            ("streamProcessingValue", translations['scenarios.bigdata.stats.streamProcessingValue']),
            ("processingCapacityValue", translations['scenarios.bigdata.stats.processingCapacityValue'])
        ]
        for key, value in bigdata_values:
            if f"{key}: '{value}'" not in content[bigdata_pos-100:bigdata_pos+100]:
                content = content[:bigdata_pos] + f"\n                    {key}: '{value}'," + content[bigdata_pos:]
                print(f"已添加 {lang_code}.scenarios.bigdata.stats.{key}")

# 保存文件
with open('js/languages.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n完成！所有翻译键已添加。")
