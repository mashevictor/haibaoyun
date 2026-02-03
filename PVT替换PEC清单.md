# PVT 替换为 PEC 清单

## 📋 需要修改的文件和位置

### 1. **js/languages.js** - 多语言翻译文件（最重要）

#### 中文简体（zh-CN）部分：
- **第187行**：`minStake: '最低质押：10,000 PVT'` → `'最低质押：10,000 PEC'`
- **第970行**：`step6: '支付结算：使用PowerVerse代币（PVT）按使用时长付费...'` → `'支付结算：使用PowerVerse代币（PEC）按使用时长付费...'`
- **第1011行**：`token: '查看PowerVerse代币（PVT）信息'` → `'查看PowerVerse代币（PEC）信息'`
- **第1025行**：`step5: '订单确认：双方确认订单，需求方支付PowerVerse代币（PVT）作为保证金'` → `'订单确认：双方确认订单，需求方支付PowerVerse代币（PEC）作为保证金'`
- **第1137行**：`desc: '使用PowerVerse代币（PVT）按使用时长/资源付费...'` → `'使用PowerVerse代币（PEC）按使用时长/资源付费...'`
- **第1163行**：`item1: 'PowerVerse代币（PVT）是生态系统的原生代币'` → `'PowerVerse代币（PEC）是生态系统的原生代币'`
- **第1173行**：`description: '...用户使用PVT代币按时长支付...'` → `'...用户使用PEC代币按时长支付...'`
- **第1178行**：`description: '...需求方支付PVT代币作为保证金...'` → `'...需求方支付PEC代币作为保证金...'`
- **第1182行**：`title: 'PVT代币支付'` → `'PEC代币支付'`
- **第1183行**：`description: 'PowerVerse Token (PVT) 作为生态核心资产...'` → `'PowerVerse Token (PEC) 作为生态核心资产...'`
- **第1184行**：`link: '了解PVT代币'` → `'了解PEC代币'`

#### 中文繁体（zh-TW）部分：
- **第1712行**：`minStake: '最低質押：10,000 PVT'` → `'最低質押：10,000 PEC'`
- **第2480行**：`step6: '支付結算：使用PowerVerse代幣（PVT）按使用時長付費...'` → `'支付結算：使用PowerVerse代幣（PEC）按使用時長付費...'`
- **第2521行**：`token: '查看PowerVerse代幣（PVT）信息'` → `'查看PowerVerse代幣（PEC）信息'`
- **第2535行**：`step5: '訂單確認：雙方確認訂單，需求方支付PowerVerse代幣（PVT）作為保證金'` → `'訂單確認：雙方確認訂單，需求方支付PowerVerse代幣（PEC）作為保證金'`

#### 英文（en）部分：
- **第3117行**：`minStake: 'Minimum Staking: 10,000 PVT'` → `'Minimum Staking: 10,000 PEC'`
- **第3885行**：`step6: 'Payment Settlement: Pay with PowerVerse Token (PVT) based on usage time...'` → `'Payment Settlement: Pay with PowerVerse Token (PEC) based on usage time...'`
- **第3926行**：`token: 'View PowerVerse Token (PVT) Info'` → `'View PowerVerse Token (PEC) Info'`
- **第3940行**：`step5: 'Order Confirmation: Both parties confirm order, demand side pays PowerVerse Token (PVT) as deposit'` → `'Order Confirmation: Both parties confirm order, demand side pays PowerVerse Token (PEC) as deposit'`
- **第4017行**：`desc: 'Pay with PowerVerse Token (PVT) based on usage time/resources...'` → `'Pay with PowerVerse Token (PEC) based on usage time/resources...'`
- **第4043行**：`item1: 'PowerVerse Token (PVT) is the native token of the ecosystem'` → `'PowerVerse Token (PEC) is the native token of the ecosystem'`
- **第4053行**：`description: '...Users pay with PVT token based on usage time...'` → `'...Users pay with PEC token based on usage time...'`
- **第4058行**：`description: '...demand side pays PVT token as deposit...'` → `'...demand side pays PEC token as deposit...'`
- **第4062行**：`title: 'PVT Token Payment'` → `'PEC Token Payment'`
- **第4063行**：`description: 'PowerVerse Token (PVT) as the core asset...'` → `'PowerVerse Token (PEC) as the core asset...'`
- **第4064行**：`link: 'Learn about PVT Token'` → `'Learn about PEC Token'`

#### 日文（ja）部分：
- **第4614行**：`minStake: '最小ステーキング：10,000 PVT'` → `'最小ステーキング：10,000 PEC'`
- **第5368行**：`step6: '支払い決済：PowerVerseトークン（PVT）を使用して使用時間に基づいて支払い...'` → `'支払い決済：PowerVerseトークン（PEC）を使用して使用時間に基づいて支払い...'`
- **第5409行**：`token: 'PowerVerseトークン（PVT）情報を表示'` → `'PowerVerseトークン（PEC）情報を表示'`
- **第5423行**：`step5: '注文確認：両方が注文を確認し、需要者がPowerVerseトークン（PVT）を保証金として支払う'` → `'注文確認：両方が注文を確認し、需要者がPowerVerseトークン（PEC）を保証金として支払う'`
- **第5500行**：`desc: 'PowerVerseトークン（PVT）を使用して使用時間/リソースに基づいて支払い...'` → `'PowerVerseトークン（PEC）を使用して使用時間/リソースに基づいて支払い...'`
- **第5508行**：`description: '...ユーザーがPVTトークンを使用して時間に基づいて支払い...'` → `'...ユーザーがPECトークンを使用して時間に基づいて支払い...'`
- **第5513行**：`description: '...需要者がPVTトークンを保証金として支払います...'` → `'...需要者がPECトークンを保証金として支払います...'`
- **第5517行**：`title: 'PVTトークン支払い'` → `'PECトークン支払い'`
- **第5518行**：`description: 'PowerVerse Token（PVT）は生態系のコア資産として...'` → `'PowerVerse Token（PEC）は生態系のコア資産として...'`
- **第5519行**：`link: 'PVTトークンについて'` → `'PECトークンについて'`

#### 韩文（ko）部分：
- **第6068行**：`minStake: '최소 스테이킹: 10,000 PVT'` → `'최소 스테이킹: 10,000 PEC'`
- **第6705行**：`step6: '결제 정산: PowerVerse 토큰(PVT)을 사용하여 사용 시간에 따라 결제...'` → `'결제 정산: PowerVerse 토큰(PEC)을 사용하여 사용 시간에 따라 결제...'`
- **第6746行**：`token: 'PowerVerse 토큰(PVT) 정보 보기'` → `'PowerVerse 토큰(PEC) 정보 보기'`
- **第6760行**：`step5: '주문 확인: 양측이 주문을 확인하고 수요자가 PowerVerse 토큰(PVT)을 보증금으로 지불'` → `'주문 확인: 양측이 주문을 확인하고 수요자가 PowerVerse 토큰(PEC)을 보증금으로 지불'`
- **第6837行**：`desc: 'PowerVerse 토큰(PVT)을 사용하여 사용 시간/리소스에 따라 결제...'` → `'PowerVerse 토큰(PEC)을 사용하여 사용 시간/리소스에 따라 결제...'`
- **第6845行**：`description: '...사용자가 PVT 토큰을 사용하여 시간에 따라 결제하고...'` → `'...사용자가 PEC 토큰을 사용하여 시간에 따라 결제하고...'`
- **第6850行**：`description: '...수요자가 PVT 토큰을 보증금으로 지불합니다...'` → `'...수요자가 PEC 토큰을 보증금으로 지불합니다...'`
- **第6854行**：`title: 'PVT 토큰 결제'` → `'PEC 토큰 결제'`
- **第6855行**：`description: 'PowerVerse Token(PVT)은 생태계의 핵심 자산으로...'` → `'PowerVerse Token(PEC)은 생태계의 핵심 자산으로...'`
- **第6856行**：`link: 'PVT 토큰 알아보기'` → `'PEC 토큰 알아보기'`

### 2. **pages/chain.html** - PowerVerse Chain 页面
- **第527行**：`<span data-i18n="products.chain.networkConfig.consensusParams.minStake">最低质押：10,000 PVT</span>` → `最低质押：10,000 PEC`

### 3. **pages/workflow.html** - 全链路场景页面
- **第374行**：`data-i18n="scenarios.workflow.payment.desc"` - 使用PowerVerse代币（PVT）...
- **第424行**：`data-i18n="scenarios.workflow.token.item1"` - PowerVerse代币（PVT）是生态系统的原生代币

### 4. **pages/computingpowerexchange.html** - 算力交易页面
- **第261行**：`data-i18n="scenarios.computingexchange.workflow.step5"` - 需求方支付PowerVerse代币（PVT）作为保证金
- **第296行**：`data-i18n="scenarios.computingexchange.links.token"` - 查看PowerVerse代币（PVT）信息

### 5. **pages/cloudgaming.html** - 云游戏页面
- **第436行**：`data-i18n="scenarios.cloudgaming.workflow.step6"` - 使用PowerVerse代币（PVT）按使用时长付费

### 6. **pages/token.html** - 代币页面
- **第401行**：`<div class="token-name">PVT Token</div>` → `<div class="token-name">PEC Token</div>`

### 7. **pages/scenarios.html** - 应用场景页面
- **第680行**：`data-i18n="scenarios.cloudgaming.workflow.step6"` - 使用PowerVerse代币（PVT）...
- **第757行**：`data-i18n="scenarios.computingexchange.workflow.step5"` - 需求方支付PowerVerse代币（PVT）...
- **第889行**：`data-i18n="scenarios.workflow.cloudgamingCard.description"` - 用户使用PVT代币按时长支付
- **第895行**：`data-i18n="scenarios.workflow.computingexchangeCard.description"` - 需求方支付PVT代币作为保证金
- **第900行**：`data-i18n="scenarios.workflow.tokenPaymentCard.title"` - PVT代币支付
- **第901行**：`data-i18n="scenarios.workflow.tokenPaymentCard.description"` - PowerVerse Token (PVT) 作为生态核心资产
- **第902行**：`data-i18n="scenarios.workflow.tokenPaymentCard.link"` - 了解PVT代币

---

## 📊 统计信息

- **总文件数**：7 个主要文件
- **总修改位置**：约 46 处（不包括备份文件夹）
- **涉及语言**：中文简体、中文繁体、英文、日文、韩文（5种语言）

---

## ⚠️ 注意事项

1. **备份文件夹**：`今日改动备份` 文件夹中的文件不需要修改（这是备份）
2. **测试报告文件夹**：`playwright-report` 和 `test-results` 文件夹中的文件不需要修改（这是测试报告）
3. **主要修改文件**：
   - `js/languages.js`（最重要，包含所有翻译）
   - `pages/chain.html`
   - `pages/workflow.html`
   - `pages/computingpowerexchange.html`
   - `pages/cloudgaming.html`
   - `pages/token.html`
   - `pages/scenarios.html`

---

## ✅ 确认后执行

请确认以上清单无误后，我将执行批量替换操作，将所有 PVT 替换为 PEC。
