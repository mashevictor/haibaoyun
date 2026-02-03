#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
批量添加产品features翻译键到所有语言
"""
import re

# 读取文件
with open('js/languages.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义需要添加的翻译键
translations = {
    'zh-TW': {
        'chain': {
            'title': '核心特性',
            'items': ['高性能共識機制，支持高TPS', '智能合約自動執行', '跨鏈互操作性', '完善的節點管理']
        },
        'infra': {
            'title': '核心特性',
            'items': ['智能資源調度算法', '實時監控與告警', '彈性擴容能力', '多地域部署支持']
        },
        'market': {
            'title': '核心特性',
            'items': ['去中心化交易撮合', '智能定價機制', '安全支付保障', '交易歷史可追溯']
        },
        'dao': {
            'title': '核心特性',
            'items': ['提案與投票機制', '透明治理流程', '社區激勵體系', '多維度決策支持']
        },
        'decloud': {
            'title': '核心特性',
            'items': ['分布式存儲系統', '數據加密保護', '邊緣計算支持', 'API接口豐富']
        }
    },
    'en': {
        'chain': {
            'title': 'Core Features',
            'items': ['High-performance consensus mechanism supporting high TPS', 'Automatic smart contract execution', 'Cross-chain interoperability', 'Comprehensive node management']
        },
        'infra': {
            'title': 'Core Features',
            'items': ['Intelligent resource scheduling algorithm', 'Real-time monitoring and alerts', 'Elastic scaling capability', 'Multi-region deployment support']
        },
        'market': {
            'title': 'Core Features',
            'items': ['Decentralized trading matching', 'Intelligent pricing mechanism', 'Secure payment guarantee', 'Traceable transaction history']
        },
        'dao': {
            'title': 'Core Features',
            'items': ['Proposal and voting mechanism', 'Transparent governance process', 'Community incentive system', 'Multi-dimensional decision support']
        },
        'decloud': {
            'title': 'Core Features',
            'items': ['Distributed storage system', 'Data encryption protection', 'Edge computing support', 'Rich API interfaces']
        }
    },
    'ja': {
        'chain': {
            'title': 'コア機能',
            'items': ['高性能コンセンサスメカニズム、高TPSをサポート', 'スマートコントラクト自動実行', 'クロスチェーン相互運用性', '包括的なノード管理']
        },
        'infra': {
            'title': 'コア機能',
            'items': ['インテリジェントリソーススケジューリングアルゴリズム', 'リアルタイム監視とアラート', '弾性スケーリング機能', 'マルチリージョンデプロイメントサポート']
        },
        'market': {
            'title': 'コア機能',
            'items': ['分散型取引マッチング', 'インテリジェント価格設定メカニズム', '安全な支払い保証', '追跡可能な取引履歴']
        },
        'dao': {
            'title': 'コア機能',
            'items': ['提案と投票メカニズム', '透明なガバナンスプロセス', 'コミュニティインセンティブシステム', '多次元意思決定サポート']
        },
        'decloud': {
            'title': 'コア機能',
            'items': ['分散ストレージシステム', 'データ暗号化保護', 'エッジコンピューティングサポート', '豊富なAPIインターフェース']
        }
    },
    'ko': {
        'chain': {
            'title': '핵심 기능',
            'items': ['고성능 합의 메커니즘, 고TPS 지원', '스마트 컨트랙트 자동 실행', '크로스체인 상호 운용성', '포괄적인 노드 관리']
        },
        'infra': {
            'title': '핵심 기능',
            'items': ['지능형 리소스 스케줄링 알고리즘', '실시간 모니터링 및 알림', '탄력적 확장 기능', '다중 지역 배포 지원']
        },
        'market': {
            'title': '핵심 기능',
            'items': ['분산 거래 매칭', '지능형 가격 책정 메커니즘', '안전한 결제 보장', '추적 가능한 거래 기록']
        },
        'dao': {
            'title': '핵심 기능',
            'items': ['제안 및 투표 메커니즘', '투명한 거버넌스 프로세스', '커뮤니티 인센티브 시스템', '다차원 의사결정 지원']
        },
        'decloud': {
            'title': '핵심 기능',
            'items': ['분산 저장소 시스템', '데이터 암호화 보호', '엣지 컴퓨팅 지원', '풍부한 API 인터페이스']
        }
    }
}

# 为每种语言添加翻译键
for lang_code, lang_translations in translations.items():
    # 查找语言块
    lang_pattern = f"'{lang_code}':\\s*\\{{"
    lang_match = re.search(lang_pattern, content)
    
    if not lang_match:
        print(f"未找到语言块: {lang_code}")
        continue
    
    lang_start = lang_match.start()
    
    # 为每个产品添加features
    products = ['chain', 'infra', 'market', 'dao', 'decloud']
    
    for product in products:
        # 查找产品块
        product_pattern = f"{product}:\\s*\\{{"
        product_matches = list(re.finditer(product_pattern, content[lang_start:]))
        
        if not product_matches:
            print(f"未找到 {lang_code}.products.{product}")
            continue
        
        product_match = product_matches[0]
        product_start = lang_start + product_match.start()
        
        # 查找产品的结束位置（下一个产品或scenarios）
        next_pattern = r'(?:market|dao|decloud|scenarios):\s*\{'
        next_match = re.search(next_pattern, content[product_start:])
        
        if next_match:
            product_end = product_start + next_match.start()
        else:
            # 如果没有下一个产品，找到products的结束
            products_end = re.search(r'^\s+\},\s*$', content[product_start:], re.MULTILINE)
            if products_end:
                product_end = product_start + products_end.start()
            else:
                product_end = product_start + 5000  # 默认5000字符
        
        # 检查是否已经有features
        product_section = content[product_start:product_end]
        if 'features:' in product_section:
            print(f"{lang_code}.products.{product}.features 已存在，跳过")
            continue
        
        # 查找coin或section的结束位置来插入features
        # 查找最后一个}之前的位置
        insert_pattern = r'(\s+)\}\s*$'
        insert_match = re.search(insert_pattern, product_section, re.MULTILINE)
        
        if insert_match:
            insert_pos = product_start + insert_match.start()
            indent = insert_match.group(1)
            
            trans = lang_translations[product]
            features_code = f"{indent}features: {{\n{indent}    title: '{trans['title']}',\n"
            for i, item in enumerate(trans['items'], 1):
                features_code += f"{indent}    item{i}: '{item}',\n"
            features_code += f"{indent}}},\n"
            
            content = content[:insert_pos] + features_code + content[insert_pos:]
            print(f"已添加 {lang_code}.products.{product}.features")

# 保存文件
with open('js/languages.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n完成！所有产品features翻译键已添加。")
