#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量修复硬件工厂和研发实力页面的多语言适配
"""

import re

# 读取 hardware-factory.html
with open('pages/hardware-factory.html', 'r', encoding='utf-8') as f:
    hf_content = f.read()

# 需要添加 data-i18n 的文本映射
replacements = [
    # 产品分类卡片
    ('<h4>存储服务器机箱</h4>', '<h4 data-i18n="hardwareFactory.storageChassis">存储服务器机箱</h4>'),
    ('<p>高密度存储解决方案</p>', '<p data-i18n="hardwareFactory.storageChassisDesc">高密度存储解决方案</p>'),
    ('<h4>工控机箱</h4>', '<h4 data-i18n="hardwareFactory.industrialChassis">工控机箱</h4>'),
    ('<p>工业控制专用机箱</p>', '<p data-i18n="hardwareFactory.industrialChassisDesc">工业控制专用机箱</p>'),
    ('<h4>嵌入式机箱</h4>', '<h4 data-i18n="hardwareFactory.embeddedChassis">嵌入式机箱</h4>'),
    ('<p>紧凑型嵌入式解决方案</p>', '<p data-i18n="hardwareFactory.embeddedChassisDesc">紧凑型嵌入式解决方案</p>'),
    ('<h4>配件</h4>', '<h4 data-i18n="hardwareFactory.accessories">配件</h4>'),
    ('<p>各类机箱配件和附件</p>', '<p data-i18n="hardwareFactory.accessoriesDesc">各类机箱配件和附件</p>'),
    
    # 产品列表项 - 服务器机箱
    ('<li>1U服务器机箱</li>', '<li data-i18n="hardwareFactory.serverChassisList.item1">1U服务器机箱</li>'),
    ('<li>2U服务器机箱</li>', '<li data-i18n="hardwareFactory.serverChassisList.item2">2U服务器机箱</li>'),
    ('<li>3U服务器机箱</li>', '<li data-i18n="hardwareFactory.serverChassisList.item3">3U服务器机箱</li>'),
    ('<li>4U服务器机箱</li>', '<li data-i18n="hardwareFactory.serverChassisList.item4">4U服务器机箱</li>'),
    ('<li>5U/6U/7U/8U服务器机箱</li>', '<li data-i18n="hardwareFactory.serverChassisList.item5">5U/6U/7U/8U服务器机箱</li>'),
    ('<li>塔式服务器机箱</li>', '<li data-i18n="hardwareFactory.serverChassisList.item6">塔式服务器机箱</li>'),
    
    # 产品列表项 - 存储服务器机箱
    ('<li>1U存储服务器机箱</li>', '<li data-i18n="hardwareFactory.storageChassisList.item1">1U存储服务器机箱</li>'),
    ('<li>2U存储服务器机箱</li>', '<li data-i18n="hardwareFactory.storageChassisList.item2">2U存储服务器机箱</li>'),
    ('<li>4U存储服务器机箱</li>', '<li data-i18n="hardwareFactory.storageChassisList.item3">4U存储服务器机箱</li>'),
    
    # 产品列表项 - 工控机箱
    ('<li>标准工控机箱</li>', '<li data-i18n="hardwareFactory.industrialChassisList.item1">标准工控机箱</li>'),
    ('<li>定制化工控机箱</li>', '<li data-i18n="hardwareFactory.industrialChassisList.item2">定制化工控机箱</li>'),
    
    # 产品列表项 - 嵌入式机箱
    ('<li>嵌入式机箱</li>', '<li data-i18n="hardwareFactory.embeddedChassisList.item1">嵌入式机箱</li>'),
    ('<li>小型化设计</li>', '<li data-i18n="hardwareFactory.embeddedChassisList.item2">小型化设计</li>'),
    
    # 产品列表项 - 配件
    ('<li>风扇模块</li>', '<li data-i18n="hardwareFactory.accessoriesList.item1">风扇模块</li>'),
    ('<li>电源模块</li>', '<li data-i18n="hardwareFactory.accessoriesList.item2">电源模块</li>'),
    ('<li>扩展卡支架</li>', '<li data-i18n="hardwareFactory.accessoriesList.item3">扩展卡支架</li>'),
    ('<li>其他配件</li>', '<li data-i18n="hardwareFactory.accessoriesList.item4">其他配件</li>'),
    
    # 产品详情标题
    ('<h3>服务器机箱系列</h3>', '<h3 data-i18n="hardwareFactory.serverChassisSeries">服务器机箱系列</h3>'),
    ('<h3>存储服务器机箱系列</h3>', '<h3 data-i18n="hardwareFactory.storageChassisSeries">存储服务器机箱系列</h3>'),
    ('<h3>工业控制机箱</h3>', '<h3 data-i18n="hardwareFactory.industrialChassisSeries">工业控制机箱</h3>'),
    ('<h3>嵌入式机箱</h3>', '<h3 data-i18n="hardwareFactory.embeddedChassisSeries">嵌入式机箱</h3>'),
    
    # 规格标签
    ('<span class="spec-label">尺寸</span>', '<span class="spec-label" data-i18n="hardwareFactory.specSize">尺寸</span>'),
    ('<span class="spec-label">硬盘位</span>', '<span class="spec-label" data-i18n="hardwareFactory.specDriveBay">硬盘位</span>'),
    ('<span class="spec-label">风扇</span>', '<span class="spec-label" data-i18n="hardwareFactory.specFan">风扇</span>'),
    ('<span class="spec-label">电源</span>', '<span class="spec-label" data-i18n="hardwareFactory.specPower">电源</span>'),
    ('<span class="spec-label">扩展槽</span>', '<span class="spec-label" data-i18n="hardwareFactory.specExpansion">扩展槽</span>'),
    ('<span class="spec-label">应用</span>', '<span class="spec-label" data-i18n="hardwareFactory.specApplication">应用</span>'),
    ('<span class="spec-label">材质</span>', '<span class="spec-label" data-i18n="hardwareFactory.specMaterial">材质</span>'),
    ('<span class="spec-label">防护等级</span>', '<span class="spec-label" data-i18n="hardwareFactory.specProtection">防护等级</span>'),
    
    # 产品优势
    ('<h3>核心优势</h3>', '<h3 data-i18n="hardwareFactory.advantagesTitle">核心优势</h3>'),
    ('<p>我们致力于为客户提供高品质、高性能的硬件产品，满足不同应用场景的需求。</p>', '<p data-i18n="hardwareFactory.advantagesIntro">我们致力于为客户提供高品质、高性能的硬件产品，满足不同应用场景的需求。</p>'),
    
    # 页脚
    ('<h4>资源</h4>', '<h4 data-i18n="hardwareFactory.footerResources">资源</h4>'),
    ('<li><a href="hardware-factory.html">硬件工厂</a></li>', '<li><a href="hardware-factory.html" data-i18n="nav.hardwareFactory">硬件工厂</a></li>'),
    ('<li><a href="research-strength.html">研发实力</a></li>', '<li><a href="research-strength.html" data-i18n="nav.researchStrength">研发实力</a></li>'),
    ('<li><a href="#">生态系统</a></li>', '<li><a href="#" data-i18n="hardwareFactory.footerEcosystem">生态系统</a></li>'),
]

# 应用替换
for old, new in replacements:
    hf_content = hf_content.replace(old, new)

# 处理产品优势列表 - 需要特殊处理
hf_content = re.sub(
    r'<li><strong>专业设计：</strong>采用先进的工业设计理念',
    r'<li><strong data-i18n="hardwareFactory.advantage1">专业设计：</strong>采用先进的工业设计理念',
    hf_content
)

# 保存文件
with open('pages/hardware-factory.html', 'w', encoding='utf-8') as f:
    f.write(hf_content)

print("硬件工厂页面已修复")
