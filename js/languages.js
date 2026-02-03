// 多语言支持系统
const translations = {
    'zh-CN': {
        // 导航
        nav: {
            home: '首页',
            product: '产品',
            scenario: {
                title: '应用场景',
                cloudgaming: '云游戏场景',
                computingexchange: '算力交易场景',
                rwa: 'RWA钱包场景',
                workflow: '全链路场景'
            },
            developer: '开发者中心',
            token: '代币',
            about: '关于我们',
            whitepaper: '白皮书',
            hardwareFactory: '硬件工厂',
            researchStrength: '研发实力'
        },
        // 首页
        home: {
            title: 'PowerVerse Chain',
            subtitle: '去中心化计算网络',
            description: '构建下一代分布式计算基础设施，让全球计算资源高效共享，赋能Web3生态发展',
            ios: 'iOS',
            android: 'Android'
        },
        // 技术架构
        architecture: {
            title: '技术框架',
            subtitle: 'Architecture',
            appLayer: '应用层',
            protocolLayer: '协议层',
            networkLayer: '网络层',
            dapp: 'DApp应用',
            api: 'API接口',
            rpc: 'RPC服务',
            consensus: '共识机制',
            smartContract: '智能合约',
            crossChain: '跨链协议',
            p2p: 'P2P网络',
            nodeManagement: '节点管理',
            dataStorage: '数据存储'
        },
        // 产品
        products: {
            title: '产品生态',
            description: '构建完整的去中心化计算生态系统',
            chain: {
                name: 'PowerVerse Chain',
                description: 'PoS共识且支持EVM的区块链系统，便捷部署和运行DApp，为开发者提供友好的开发环境，降低开发门槛和成本',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse Chain - 技术简介',
                subtitle: '技术简介',
                intro: 'PowerVerse Chain 是一个基于区块链的分布式账本平台，通过去中心化网络、智能合约与共识机制，为去中心化应用提供安全、高效的基础设施。',
                architecture: {
                    title: '总体架构',
                    baseLayer: {
                        title: '基础层',
                        p2p: {
                            label: 'P2P 网络：',
                            desc: '节点直连，快速同步与高可用。'
                        },
                        database: {
                            label: '数据库：',
                            desc: 'Merkle 树存储交易与状态，数据可验证。'
                        },
                        crypto: {
                            label: '密码学算法：',
                            desc: '密钥管理、数字签名与哈希，保障安全。'
                        },
                        sharding: {
                            label: '分片优化：',
                            desc: '交易并行验证，提升出块效率。'
                        }
                    },
                    coreLayer: {
                        title: '核心层',
                        ledger: {
                            label: '分布式账本：',
                            desc: '交易、区块、交易池等核心数据。'
                        },
                        consensus: {
                            label: '共识机制：',
                            desc: 'POW+POS 混合共识，高效去中心化。'
                        },
                        smartContract: {
                            label: '智能合约：',
                            desc: '兼容 EVM，支持 Solidity 开发。'
                        }
                    },
                    appLayer: {
                        title: '应用层',
                        api: {
                            label: 'API 接口：',
                            desc: '提供 HTTP/TCP 接口与 RPC 服务，便于生态集成。'
                        },
                        dapp: {
                            label: 'DApp：',
                            desc: '支持开发各类去中心化应用，如 DeFi、DID 等。'
                        }
                    }
                },
                blockTransaction: {
                    title: '区块与交易',
                    structure: {
                        title: '区块结构',
                        header: {
                            title: '区块头',
                            desc: '包含父区块哈希、时间戳、交易树根哈希（TxRoot）等。'
                        },
                        body: {
                            title: '区块体',
                            desc: '包含交易列表。'
                        },
                        note: '交易通过 Merkle 树组织，TxRoot 用于快速验证区块完整性。'
                    },
                    process: {
                        title: '交易流程',
                        step1: '用户构造并广播交易。',
                        step2: '节点校验交易后存入交易池。',
                        step3: '提案节点打包交易，生成区块提案。',
                        step4: '交易由 EVM 执行，区块进入共识流程。',
                        step5: '共识成功后区块落盘，更新状态并处理分叉。'
                    }
                },
                consensus: {
                    title: '共识机制：POW+POS 混合共识',
                    overview: {
                        title: '共识机制概述',
                        desc: 'PowerVerse Chain 采用 POW+POS 混合共识机制，结合工作量证明（Proof of Work）和权益证明（Proof of Stake）的优势，在保证网络安全性的同时提升交易处理效率。',
                        pow: {
                            title: '工作量证明（POW）',
                            label: '工作量证明（POW）：',
                            desc: '通过计算能力竞争来验证交易和创建新区块，确保网络的安全性和去中心化特性。'
                        },
                        pos: {
                            title: '权益证明（POS）',
                            label: '权益证明（POS）：',
                            desc: '验证者通过质押代币参与网络共识，质押数量越多，被选为验证者的概率越高。'
                        }
                    },
                    workflow: {
                        title: '共识流程',
                        step1: 'POW 矿工通过算力竞争创建候选区块，获得区块奖励。',
                        step2: 'POS 验证者通过质押代币参与区块验证，确保交易合法性。',
                        step3: '验证者进行投票，超过 2/3 验证者同意的区块被确认。',
                        step4: '确认的区块被添加到区块链，更新网络状态。'
                    },
                    staking: {
                        title: 'POS 质押机制',
                        intro: '权益证明（POS）质押是 PowerVerse Chain 网络安全的核心机制，参考以太坊 2.0 的质押设计，为验证者提供稳定的收益来源。',
                        minimum: {
                            title: '最低质押要求',
                            label: '最低质押要求：',
                            desc: '成为验证者需质押最低数量代币，经济激励与网络安全对齐。'
                        },
                        rewards: {
                            title: '质押奖励',
                            label: '质押奖励：',
                            desc: '参与区块验证与共识投票获得奖励，奖励率与质押总量及网络活跃度相关。'
                        },
                        slashing: {
                            title: '惩罚机制',
                            label: '惩罚机制：',
                            desc: '恶意或长期离线将面临质押罚没，确保网络安全。'
                        }
                    }
                },
                networkConfig: {
                    title: '网络配置标准',
                    overview: {
                        title: '网络参数配置',
                        desc: 'PowerVerse Chain 采用标准化的网络配置，确保节点间的兼容性和网络的稳定运行。'
                    },
                    blockParams: {
                        title: '区块参数',
                        size: '区块大小：最大 2MB',
                        interval: '出块间隔：约 3 秒',
                        gasLimit: 'Gas 限制：每区块 8,000,000 Gas'
                    },
                    consensusParams: {
                        title: '共识参数',
                        minStake: '最低质押：10,000 PEC',
                        epoch: 'Epoch 周期：100 个区块',
                        finality: '最终确认：2/3 验证者投票'
                    },
                    networkParams: {
                        title: '网络参数',
                        chainId: 'Chain ID：主网 1001',
                        rpcPort: 'RPC 端口：8545',
                        p2pPort: 'P2P 端口：30303'
                    }
                },
                coin: {
                    title: 'PowerVerse Coin：生态核心资产',
                    totalSupply: '总发行量',
                    totalSupplyValue: '14亿',
                    features: {
                        title: '主要功能',
                        staking: {
                            title: '质押维护网络',
                            desc: '通过质押参与共识，获得奖励，增强网络安全与稳定性。'
                        },
                        circulation: {
                            title: '生态流通与支付',
                            desc: '作为生态内价值交换媒介，用于开发激励、服务支付与应用内交易。'
                        },
                        dao: {
                            title: 'DAO 治理',
                            desc: '持有者可参与 PowerVerse DAO 投票，共同决定协议升级、资金分配等重大决策。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '高性能共识机制，支持高TPS',
                    item2: '智能合约自动执行',
                    item3: '跨链互操作性',
                    item4: '完善的节点管理'
                }
            },
            infra: {
                name: 'PowerVerse Infra',
                description: '虚拟化层面提供卓越性能，实现资源高效利用和灵活分配，为上层应用和服务提供有力支撑',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse Infra - 去中心化物理基础设施网络（DePIN）起点',
                depinBadge: 'DePIN 的开始',
                subtitle: '去中心化物理基础设施网络（DePIN）起点',
                intro: 'PowerVerse Infra 是一个虚拟化软件平台，基于软件定义理念，整合并虚拟化管理多种芯片算力（包括 CPU、GPU、AI 芯片及量子芯片），将闲置算力转化为可共享、可交易的数字资产，为用户提供高效、多样的算力获取途径。',
                section1: {
                    title: '一、核心设计：五大组件与九大服务',
                    components: {
                        title: '五大核心组件',
                        table: {
                            component: '组件',
                            function: '核心功能'
                        },
                        control: {
                            name: '控制组件',
                            desc: '架构核心，负责接收请求、资源分配与系统监控，包含虚拟化、网络、镜像等服务。'
                        },
                        compute: {
                            name: '计算组件',
                            desc: '计算资源提供者，运行虚拟机实例并处理计算任务。'
                        },
                        storage: {
                            name: '存储组件',
                            desc: '支持块存储与对象存储，负责数据与镜像的存储。'
                        },
                        network: {
                            name: '网络组件',
                            desc: '管理虚拟网络、子网、路由等，实现虚拟机通信、网络隔离与安全。'
                        },
                        interface: {
                            name: '接口服务',
                            desc: '提供 RESTful API，实现各组件间的通信与交互。'
                        }
                    },
                    services: {
                        title: '九大关键服务模块',
                        virtualization: {
                            title: '核心虚拟化',
                            desc: '管理虚拟机全生命周期（创建、挂起、调整、销毁），配置 CPU、GPU、内存等资源。'
                        },
                        network: {
                            title: '网络虚拟化',
                            desc: '提供网络虚拟化技术与连接服务。'
                        },
                        image: {
                            title: '镜像服务',
                            desc: '支持多种镜像格式，实现镜像的上传、删除与信息编辑。'
                        },
                        blockStorage: {
                            title: '块存储',
                            desc: '为虚拟机提供稳定的数据块存储服务。'
                        },
                        objectStorage: {
                            title: '对象存储',
                            desc: '通过冗余与容错机制实现可扩展的对象存储，支持文件存取与持久化存储。'
                        },
                        monitoring: {
                            title: '监测服务',
                            desc: '为计费、监控及其他服务提供统计数据支撑。'
                        },
                        permission: {
                            title: '权限服务',
                            desc: '基于 PowerVerse Chain 的 DID 服务，提供身份验证、规则管理与令牌服务。'
                        },
                        orchestration: {
                            title: '编排服务',
                            desc: '通过模板实现 DeCloud 基础设施的自动化部署。'
                        },
                        management: {
                            title: '管理',
                            desc: '提供各类服务的 Web 管理界面。'
                        }
                    }
                },
                section2: {
                    title: '二、虚拟化方案：Type1 与 Type2',
                    type1: {
                        title: 'Type1（裸金属）',
                        badge: '高性能方案',
                        arch: {
                            label: '架构特点：',
                            desc: '直接运行于硬件之上，无宿主操作系统，资源利用高效。'
                        },
                        performance: {
                            label: '性能表现：',
                            desc: '低延迟、高吞吐量，精准控制硬件资源，优化网络与存储 I/O。'
                        },
                        scenario: {
                            label: '适用场景：',
                            desc: '大规模数据运算、高负载企业级应用、高性能计算。'
                        }
                    },
                    type2: {
                        title: 'Type2',
                        badge: '灵活方案',
                        arch: {
                            label: '架构特点：',
                            desc: '运行于宿主操作系统之上，依赖宿主机管理资源。'
                        },
                        performance: {
                            label: '性能表现：',
                            desc: '受宿主机资源竞争影响，可能在高强度任务中出现性能瓶颈。'
                        },
                        scenario: {
                            label: '适用场景：',
                            desc: '个人开发、小型应用、快速部署与测试环境。'
                        }
                    }
                },
                section3: {
                    title: '三、与 PowerVerse Chain 的协作',
                    did: {
                        title: '1. 基于 DID 的虚拟机权限服务',
                        item1: '为每个用户与虚拟机创建唯一去中心化身份（DID），关联历史行为与信用数据。',
                        item2: '通过区块链共识验证身份，无需中心化机构，确保公正、安全、不可篡改。',
                        item3: '在算力租用中，双方可互相验证信用与支付能力，构建透明可信的交易环境。'
                    },
                    smartContract: {
                        title: '2. 智能合约驱动的算力交易聚合器（PowerVerse Market）',
                        item1: '买卖双方直接达成意向，通过智能合约自动执行租赁、结算与存证。',
                        item2: '去除人工协商与第三方中介，实现高效、透明、低成本的算力交易。'
                    }
                },
                section4: {
                    title: '四、功能特性',
                    chipCompatibility: {
                        title: '广泛的芯片兼容性',
                        desc: '全面支持 CPU、GPU、AI 算力芯片及量子芯片，满足多样化计算需求，最大化利用闲置算力。'
                    },
                    quantum: {
                        title: '前瞻性量子计算支持',
                        desc: '已开展量子芯片虚拟化技术储备，提供量子比特抽象模型与模拟接口，支持量子算法实验。'
                    },
                    security: {
                        title: '高度安全与信任保障',
                        desc: '结合 DID 身份管理、智能合约自动执行与区块链不可篡改存证，构建公正透明的可信生态。'
                    },
                    scheduling: {
                        title: '高效资源利用与动态调度',
                        desc: '根据虚拟机实时负载自动调整算力分配，避免资源浪费与过载，提升利用效率并降低成本。'
                    }
                }
            },
            market: {
                name: 'PowerVerse Market',
                description: '去中心化算力资源交易市场，优化算力资源配置，连接供需双方；同时提供模型与数据市场，促进知识和技术共享',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse Market - 去中心化算力交易平台',
                subtitle: '去中心化算力交易平台',
                intro: 'PowerVerse Market 是基于 PowerVerse Chain 与 PowerVerse Infra 构建的去中心化算力交易平台。它通过智能合约与区块链技术连接算力供应方与需求方，实现自动化、透明化、无需信任第三方的算力资源交易。',
                section1: {
                    title: '一、平台核心功能',
                    function1: {
                        title: '1. 算力资源管理',
                        item1: '供应方发布算力资源信息（CPU/GPU/存储等），设定价格、可用时间等参数',
                        item2: '资源信息可实时更新，灵活适应市场变化'
                    },
                    function2: {
                        title: '2. 算力需求单管理',
                        item1: '需求方提交算力需求订单，指定类型、数量、时长、预算等',
                        item2: '平台自动匹配资源，供应方也可主动接单'
                    },
                    function3: {
                        title: '3. 交易执行与监控',
                        item1: '智能合约自动执行算力供应与费用结算',
                        item2: '需求方可实时监控算力使用与任务进度，异常情况自动通知'
                    },
                    function4: {
                        title: '4. 数据统计与分析',
                        item1: '提供交易历史、资源分布、价格趋势等数据分析',
                        item2: '帮助用户制定交易策略，优化资源利用率与收益'
                    },
                    function5: {
                        title: '5. 用户评价与信誉体系',
                        item1: '交易双方互评，评价计入信誉体系',
                        item2: '信誉影响交易权限与优先级，激励诚信交易'
                    }
                },
                section2: {
                    title: '二、平台角色',
                    table: {
                        role: '角色',
                        responsibility: '职责与权益'
                    },
                    role1: {
                        name: '算力供应方',
                        desc: '将虚拟化算力资源注册发布至平台，获取租金与代币分红。'
                    },
                    role2: {
                        name: '算力需求方',
                        desc: '租赁算力资源用于应用构建、挖矿、模型训练等，也可发布需求单等待匹配。'
                    },
                    role3: {
                        name: '管理员',
                        desc: '维护市场秩序，对不诚实用户执行冻结、列入黑名单等操作。'
                    },
                    role4: {
                        name: '仲裁委员会',
                        desc: '处理交易争议，判定过失方与补偿方案，或提交 DAO 组织投票裁决。'
                    }
                },
                section3: {
                    title: '三、算力资源发布流程',
                    step1: {
                        label: '虚拟化：',
                        desc: '通过 PowerVerse Infra 将本地闲置算力虚拟化为独立虚拟机。'
                    },
                    step2: {
                        label: '注册：',
                        desc: '向平台注册虚拟资源，提交详细技术参数（CPU/GPU/内存/存储等），平台验证真实性。'
                    },
                    step3: {
                        label: '计分：',
                        desc: '平台通过加权参数计算资源性能得分。'
                    },
                    step4: {
                        label: 'NFT 凭证发放：',
                        desc: '为每个算力资源生成唯一 NFT，记录所有权、性能、状态等信息。'
                    },
                    step5: {
                        label: '上架：',
                        desc: '资源上架至平台列表，供需求方查询与租赁。'
                    }
                },
                section4: {
                    title: '四、交易模式',
                    mode1: {
                        title: '1. 直接租赁交易',
                        step1: '需求方选择资源',
                        step2: '支付 PowerVerse Coin',
                        step3: '使用资源',
                        step4: '平台监测',
                        step5: '到期结算',
                        step6: '双方互评'
                    },
                    mode2: {
                        title: '2. 任务式需求单',
                        step1: '需求方发布任务（含需求、价格、验收方式等）',
                        step2: '供应方承接',
                        step3: '执行任务',
                        step4: '提交成果',
                        step5: '验收后结算',
                        step6: '双方互评'
                    }
                },
                section5: {
                    title: '五、平台特性',
                    feature1: {
                        title: '去中心化',
                        desc: '点对点交易，无中介，降低成本，提升透明度与公正性。'
                    },
                    feature2: {
                        title: '安全性',
                        desc: '数据加密、智能合约审计、区块链不可篡改，保障交易隐私与可靠。'
                    },
                    feature3: {
                        title: '可扩展性',
                        desc: '支持多种算力资源接入，架构可灵活扩展，适应未来业务增长。'
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '去中心化交易撮合',
                    item2: '智能定价机制',
                    item3: '安全支付保障',
                    item4: '交易历史可追溯'
                }
            },
            dao: {
                name: 'PowerVerse DAO',
                description: '去中心化自治组织，让社区成员参与生态系统治理和决策，充分发挥社区智慧和力量，实现生态系统自我发展和完善',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse DAO - 去中心化自治组织',
                subtitle: '去中心化自治组织',
                slogan: '共建、共治、共享——PowerVerse 生态的治理核心',
                intro: 'PowerVerse DAO 是基于 PowerVerse Chain 构建的去中心化自治组织，旨在通过社区集体决策与治理，推动 PowerVerse 生态的公平、透明与可持续发展。',
                section1: {
                    title: '一、DAO 工作流程',
                    step1: {
                        title: '1. 提案与发起',
                        memberProposal: {
                            label: '成员提案：',
                            desc: '任何社区成员均可提交发展提案（技术改进、市场活动、合作机会等），需包含背景、目标、计划、预算等详细信息。'
                        },
                        review: {
                            label: '提案审核：',
                            desc: '由社区选举产生的审核委员会评估提案可行性、创新性及生态价值，通过后进入投票环节。'
                        }
                    },
                    step2: {
                        title: '2. 社区投票决策',
                        votingStart: {
                            label: '投票启动：',
                            desc: '通过审核的提案进入社区投票。代币持有者可在规定期限内投票表决。'
                        },
                        execution: {
                            label: '结果执行：',
                            desc: '达到设定赞成比例后提案通过，由项目执行团队按计划推动实施，并定期向社区汇报进度。'
                        }
                    },
                    step3: {
                        title: '3. 实施与监督',
                        teamBuilding: {
                            label: '团队组建：',
                            desc: '通过自愿或招聘组建项目执行团队，负责任务分配、进度跟踪与质量控制。'
                        },
                        supervision: {
                            label: '监督评估：',
                            desc: '社区可实时通过链上信息监督进展。项目监督小组定期检查，确保符合提案标准，必要时可提出整改或暂停建议。'
                        }
                    },
                    step4: {
                        title: '4. 成果与反馈',
                        acceptance: {
                            label: '验收与分享：',
                            desc: '项目完成后由监督小组验收，成果向社区公示（经济效益、技术创新等）。'
                        },
                        summary: {
                            label: '经验总结：',
                            desc: '总结项目经验并反馈至社区，用于优化 DAO 发展战略与运营机制。'
                        }
                    }
                },
                section2: {
                    title: '二、核心特点',
                    feature1: {
                        title: '1. 去中心化治理',
                        decentralization: {
                            label: '权力下放：',
                            desc: '通过链上投票，社区成员直接参与重大决策（方向、资金、规则等），实现民主治理。'
                        },
                        transparency: {
                            label: '透明可追溯：',
                            desc: '所有决策与交易记录于区块链，完全公开可查，增强信任与监督。'
                        }
                    },
                    feature2: {
                        title: '2. 社区驱动发展',
                        participation: {
                            label: '广泛参与：',
                            desc: '鼓励成员参与技术、市场、运营等活动，通过代币奖励、荣誉表彰等机制激发贡献。'
                        },
                        diversity: {
                            label: '成员多元化：',
                            desc: '汇聚技术专家、行业从业者、投资者、法律等多领域人才，为生态提供全方位支持。'
                        }
                    },
                    feature3: {
                        title: '3. 创新经济模型',
                        tokenEconomy: {
                            label: '代币经济：',
                            desc: '以 PowerVerse Coin 作为治理与激励工具，持有者通过参与治理获得奖励，实现利益与生态绑定。'
                        },
                        valueSharing: {
                            label: '价值共享：',
                            desc: '生态成长带来的价值通过代币捕获与分配，使持有者共享发展红利，增强代币吸引力与生态基础。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '提案与投票机制',
                    item2: '透明治理流程',
                    item3: '社区激励体系',
                    item4: '多维度决策支持'
                }
            },
            decloud: {
                name: 'DeCloud',
                description: '去中心化云服务大生态，提供SDK开发工具、Web3.0支持、元宇宙基础、SaaS服务，覆盖电竞、游戏、企业协作等多个行业场景',
                learnMore: '了解更多',
                pageTitle: 'DeCloud - Web3.0 去中心化算力云平台',
                subtitle: 'Web3.0 去中心化算力云平台',
                intro: 'DeCloud 整合 PowerVerse Chain、PowerVerse Infra 与 PowerVerse Market，构建了一个开放、高效、安全、可扩展的去中心化算力云平台。它通过资源最优配置，支持从企业级大规模计算到个人开发者项目的多样化算力需求，重塑算力分配与使用模式。',
                section1: {
                    title: '一、更智能的 DePIN 基础设施',
                    table: {
                        tech: '技术',
                        capability: '核心能力',
                        value: '应用价值'
                    },
                    ipfs: {
                        tech: 'IPFS 去中心化存储',
                        capability: 'AI 模型训练数据与 DApp 数据分散存储于多节点。',
                        value: '提升数据安全与可靠性，防止单点故障与泄露，降低成本、提高效率。'
                    },
                    edge: {
                        tech: '地理位置感知的边缘计算',
                        capability: '将计算任务分配至靠近数据源或用户的边缘节点。',
                        value: '降低延迟、提升实时响应，适用于智能交通、工业自动化等场景，优化网络性能。'
                    },
                    routing: {
                        tech: '多图拓扑路由网络',
                        capability: '根据任务特性与资源可用性动态选择最优计算路径与资源分配。',
                        value: '实现任务高效执行与资源合理利用，提升平台计算性能与稳定性。'
                    }
                },
                section2: {
                    title: '二、更安全高效的 AI 支持',
                    table: {
                        solution: '技术方案',
                        coreTech: '核心技术',
                        value: '应用场景与价值'
                    },
                    privacy: {
                        solution: '隐私计算',
                        coreTech: '结合同态加密与联邦学习，实现推理训练与模型数据分离。',
                        value: '保障数据隐私，支持医疗、金融等高敏感领域安全进行 AI 训练与优化。'
                    },
                    gpu: {
                        solution: 'GPU 并行训练',
                        coreTech: '提供强大 GPU 并行计算支持，配合优化调度与资源管理机制。',
                        value: '加速大规模 AI 模型训练，缩短训练时间，助力 AI 研发与行业智能化转型。'
                    }
                },
                section3: {
                    title: '三、更丰富的 PowerVerse Market 元素',
                    marketType: '市场板块',
                    market1: {
                        title: 'AI 数据集与模型市场',
                        content: {
                            label: '主要内容：',
                            desc: '提供高质量数据集与预训练模型，支持用户交易与共享。'
                        },
                        value: {
                            label: '生态价值：',
                            desc: '促进 AI 资源流通与复用，降低开发门槛，加速 AI 创新与应用普及。'
                        }
                    },
                    market2: {
                        title: 'Agent 与 DApp 市场',
                        content: {
                            label: '主要内容：',
                            desc: '开发者可发布并交易智能 Agent 与 DApp。'
                        },
                        value: {
                            label: '生态价值：',
                            desc: '为开发者提供商业变现渠道，丰富平台应用生态，满足用户个性化需求。'
                        }
                    }
                },
                section4: {
                    title: '四、更全面的生态打造',
                    sdk: {
                        title: 'SDK 支持',
                        function: {
                            label: '功能说明：',
                            desc: '提供多语言、多框架 SDK，便于集成 DeCloud 算力资源。'
                        },
                        value: {
                            label: '开发者与用户价值：',
                            desc: '降低开发难度，提升开发效率，吸引更多开发者加入生态。'
                        }
                    },
                    cdn: {
                        title: '去中心化 CDN',
                        function: {
                            label: '功能说明：',
                            desc: '通过全球节点分发 DApp 内容。'
                        },
                        value: {
                            label: '开发者与用户价值：',
                            desc: '提升 DApp 访问速度、稳定性与抗攻击性，优化用户体验。'
                        }
                    },
                    dataSpace: {
                        title: '数据空间',
                        function: {
                            label: '功能说明：',
                            desc: '提供安全、高效的去中心化数据管理与共享方案。'
                        },
                        value: {
                            label: '开发者与用户价值：',
                            desc: '满足企业与个人对数据资产化的需求，支持数据价值流转。'
                        }
                    },
                    metaverse: {
                        title: '元宇宙等前沿支持',
                        function: {
                            label: '功能说明：',
                            desc: '为虚拟场景渲染、实时交互提供强大算力基础。'
                        },
                        value: {
                            label: '开发者与用户价值：',
                            desc: '赋能沉浸式元宇宙体验，拓展数字生态边界。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '分布式存储系统',
                    item2: '数据加密保护',
                    item3: '边缘计算支持',
                    item4: 'API接口丰富'
                }
            },
            wallet: {
                name: 'PowerVerse Wallet',
                description: '安全、便捷的数字资产钱包，支持多链资产管理、DeFi交互和NFT收藏，为用户提供一站式的Web3资产管理体验',
                learnMore: '了解更多',
                pageTitle: 'Wallet - 数字资产钱包',
                subtitle: '数字资产钱包',
                intro: 'PowerVerse Wallet 是一款安全、易用的多链数字资产钱包，支持 PowerVerse Chain 及主流公链，为用户提供资产管理、DeFi 交互、NFT 收藏等全方位服务。',
                section1: {
                    title: '一、核心功能',
                    feature1: {
                        title: '1. 多链资产管理',
                        desc: '支持 PowerVerse Chain、Ethereum、BSC 等多条公链，统一管理各类数字资产，包括 PEC、ETH、BNB 等主流代币。'
                    },
                    feature2: {
                        title: '2. 安全存储',
                        desc: '采用硬件加密和多重签名技术，私钥本地加密存储，支持助记词备份，确保资产安全。'
                    },
                    feature3: {
                        title: '3. DeFi 交互',
                        desc: '内置 DApp 浏览器，支持一键连接 DeFi 协议，便捷进行流动性挖矿、质押、借贷等操作。'
                    },
                    feature4: {
                        title: '4. NFT 管理',
                        desc: '支持 NFT 的查看、转账、展示，轻松管理您的数字收藏品。'
                    }
                },
                section2: {
                    title: '二、全球支付功能',
                    globalPayment: {
                        title: '全球支付能力',
                        desc: 'PowerVerse Wallet 支持全球范围内的数字资产支付，无论您身在何处，都能快速、安全地完成跨境支付。支持多种支付方式，包括扫码支付、NFC 近场支付、在线支付等，让数字资产真正成为全球通用的支付工具。',
                        item1: '支持全球 200+ 国家和地区的支付网络',
                        item2: '实时汇率转换，自动计算最优支付路径',
                        item3: '低手续费，相比传统跨境支付节省 80% 以上成本',
                        item4: '秒级到账，无需等待银行工作日'
                    }
                },
                section3: {
                    title: '三、DEX 交易功能',
                    dexTrading: {
                        title: '去中心化交易所集成',
                        desc: 'PowerVerse Wallet 内置去中心化交易所（DEX）功能，无需离开钱包即可完成代币交易。支持多种交易对，提供最优价格路由，确保用户获得最佳交易体验。',
                        item1: '集成多个主流 DEX，自动寻找最优价格',
                        item2: '支持限价单、市价单等多种订单类型',
                        item3: '实时价格监控和交易提醒',
                        item4: '交易历史记录和收益分析'
                    }
                },
                section4: {
                    title: '四、云游戏全场景贯通',
                    cloudGaming: {
                        title: '无缝游戏体验',
                        desc: 'PowerVerse Wallet 深度集成云游戏生态，实现游戏内资产、道具、NFT 的统一管理。玩家可以使用钱包直接登录游戏，使用代币购买游戏道具，交易游戏内 NFT，真正实现 Web3 游戏的全场景贯通。',
                        item1: '一键登录云游戏平台，无需重复注册',
                        item2: '游戏内资产实时同步，支持跨游戏资产转移',
                        item3: '游戏道具 NFT 化，可在二级市场自由交易',
                        item4: '游戏收益自动结算到钱包，支持提现和再投资'
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '多链支持',
                    item1Desc: '支持 PowerVerse Chain、Ethereum、BSC 等多条主流公链',
                    item2: '安全可靠',
                    item2Desc: '硬件加密、多重签名、助记词备份，全方位保障资产安全',
                    item3: 'DeFi集成',
                    item3Desc: '内置 DApp 浏览器，无缝连接 DeFi 生态',
                    item4: 'NFT管理',
                    item4Desc: '完整的 NFT 查看、转账、展示功能'
                }
            },
            scan: {
                name: 'PowerVerse Scan',
                description: '区块链浏览器，提供链上数据查询、交易追踪、地址分析等功能，让链上活动透明可查',
                learnMore: '了解更多',
                pageTitle: 'Scan - 区块链浏览器',
                subtitle: '区块链浏览器',
                intro: 'PowerVerse Scan 是 PowerVerse Chain 的官方区块链浏览器，提供完整的链上数据查询与分析服务，让用户轻松追踪交易、查看区块、分析地址，实现链上活动的透明化。',
                section1: {
                    title: '一、核心功能',
                    feature1: {
                        title: '1. 区块查询',
                        desc: '实时查看最新区块信息，包括区块高度、时间戳、交易数量、Gas 使用等详细数据。'
                    },
                    feature2: {
                        title: '2. 交易追踪',
                        desc: '通过交易哈希快速查询交易详情，包括发送方、接收方、金额、Gas 费用、交易状态等。'
                    },
                    feature3: {
                        title: '3. 地址分析',
                        desc: '查看任意地址的余额、交易历史、代币持有情况、合约交互记录等，全面了解地址活动。'
                    },
                    feature4: {
                        title: '4. 智能合约查询',
                        desc: '查看智能合约的代码、ABI、调用记录、事件日志等，便于开发者调试和用户验证。'
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '实时数据',
                    item1Desc: '实时同步链上数据，确保信息的准确性和时效性',
                    item2: '交易追踪',
                    item2Desc: '完整的交易历史记录，支持多维度查询和筛选',
                    item3: '地址分析',
                    item3Desc: '深度分析地址活动，提供可视化数据展示',
                    item4: '合约查询',
                    item4Desc: '完整的智能合约信息，支持代码验证和调用分析'
                }
            },
            computingPort: {
                name: '算力港',
                description: '基于PowerVerse Chain的去中心化智算平台，汇聚全球闲置GPU/CPU资源，实现算力资产的通证化、标准化和可信交易',
                learnMore: '了解更多',
                pageTitle: '算力港 - 去中心化智算平台',
                subtitle: '去中心化智算平台',
                intro: '算力港（XAI Center）是基于 PowerVerse Chain 构建的去中心化智算平台，致力于汇聚全球闲置 GPU/CPU 资源，通过区块链技术实现算力资产的通证化、标准化和可信交易。',
                section1: {
                    title: '一、核心功能',
                    feature1: {
                        title: '1. 算力切分与算力池化',
                        desc: '在计算颗粒度层面，平台的多种能力有效保证隔离性和安全性，轻松应对不同颗粒度的算力资源需求。',
                        item1: '显卡多实例运行：提升单个GPU的利用效率',
                        item2: '显卡直通技术：确保高性能计算任务的无缝对接',
                        item3: '多节点并行计算：将算力扩展至前所未有的高度，满足大规模计算需求',
                        detail: '基于容器技术，结合PowerVerse Infra驱动层级的拦截技术，实现多品牌GPU单卡的灵活分配与显存切分。用户可以根据实际需求，自定义计算规格与切分规格，轻松实现共享算力与显存切片管理。支持用户轻松组建公共算力池或专属算力池，无论是面向团队内部资源共享，还是保障特定项目的独立算力需求，都能灵活应对，支持多种调度方式，批量调度、优先级调度以及抢占式调度。'
                    },
                    feature2: {
                        title: '2. 数据平台',
                        desc: '提供统一的、多元的数据存储、数据管理、弹性伸缩的存储服务，通过容器环境自动挂载存储目录。',
                        item1: '无缝集成，自动为用户提供公共存储服务，提供共享数据控制、租户级隔离、并行读写控制、SFTP支持等能力',
                        item2: '提供直观易用的可视化页面，用户可在线申请与查看、页面上传下载，轻松管理资源',
                        item3: '支持按需扩容缩容，用户可根据业务需求灵活调整存储容量，无需担心存储空间不足或资源浪费的问题'
                    },
                    feature3: {
                        title: '3. 模型训推全生命周期',
                        desc: '提供从模型开发、模型训练、模型部署、模型推理到模型优化等一系列工作的全生命周期支持。',
                        devTitle: '开发环境服务',
                        dev1: '在线秒级创建开发环境，可按CPU核心、内存、GPU型号、数量、系统盘等创建开发机',
                        dev2: '支持无卡开机、关机、在线开发Jupyter、Python、VScode、保存镜像',
                        dev3: '支持定时关机、定时释放等资源回收策略',
                        trainTitle: '分布式训练服务',
                        trainDesc: '用户可启动训练任务、微调服务进行模型的调整以增加更多精细业务场景的训练，支持多模态训练、预训练DLC、SFT精调等',
                        evalTitle: '模型效果评估',
                        evalDesc: '根据测试数据集测试大模型的表现、效率和适用性，可根据性能指标、泛化能力、推理速度和延迟、资源消耗、可解释性、可扩展性、模型大小、数据依赖性等方面进行评估。',
                        inferTitle: '在线推理',
                        infer1: '无缝部署与定制化选择：简化部署流程，实现真正的"一键部署"体验，在模型广场直接部署模型；同时也支持上传私有模型，并通过公共镜像、自定义推理镜像或指定镜像地址进行灵活部署',
                        infer2: '全生命周期管理与弹性资源调度：提供在线推理服务实例的全生命周期管理，包括实例的即时扩容、缩容操作，确保服务随业务需求平滑扩展。实时监控推理实例的运行状态，以及提供日志检索查询功能',
                        optTitle: '模型优化',
                        optDesc: '提供专业的模型调优服务，通过模型评估机制，帮助用户科学对比模型效果，确保模型选择与业务需求的精准匹配。同时，不断探索推理加速技术，致力于在保持模型精度的同时，大幅提升推理速度。'
                    },
                    feature4: {
                        title: '4. 智能监控与故障自愈',
                        desc: '基于PowerVerse Infra的监控管理服务，提供可视化的监控数据、可配置的告警服务、自动化的故障处理，简化运维，实现服务运维智能化。',
                        monitorTitle: '智能监控与多维度资源可视化',
                        monitorDesc: '通过统一运维管理平台，实现了对计算资源、存储资源及网络资源等关键运维要素的规范化、可视化管理。监控维度广泛，支持基于计算节点、GPU卡、容器三个维度多指标监控，支持CPU利用率、内存利用率、GPU利用率、GPU显存利用率、网络效率监控，支持计算过程中的NVLink监控、TensorCore监控。',
                        alertTitle: '告警配置与通知',
                        alertDesc: '支持用户根据业务需求自定义告警规则组，包括但不限于资源阈值告警、性能异常告警等。一旦触发告警条件，系统将立即生成告警记录，并通过webhook、电子邮件等多种渠道向指定接收人发送告警通知。',
                        faultTitle: '故障检测与修复',
                        faultDesc: '自动检测集群中的潜在故障，如硬件故障、软件异常或资源瓶颈等。一旦检测到故障，系统将迅速启动自愈机制：',
                        fault1: '故障隔离：将受影响的节点或GPU卡标记为"污点"，自动阻止新的任务调度到这些资源上，防止故障扩散',
                        fault2: '任务迁移与重试：自动迁移正在该节点上执行的任务到其他健康节点，并尝试重新执行失败的任务，确保业务连续性',
                        fault3: '节点重启与检测：针对可重启恢复的临时故障，自动重启节点并验证服务状态，验证通过后，节点自动回归计算队列',
                        fault4: '下线维修与恢复：针对无法自动修复的故障，系统自动下线节点/GPU卡，并通知相关运维人员，修复验证后，自动恢复资源至计算队列'
                    },
                    feature5: {
                        title: '5. 边缘计算',
                        desc: '提供边缘计算能力，构建一个高度可扩展、开放且智能的云边协同基础设施平台，精准击破边缘计算场景下的多重难题，实现边缘计算与AI场景化应用的深度融合。',
                        item1: '用户自助服务优化：提供用户自助服务能力，涵盖账户快速创建至资源申请、一键开通、便捷使用及自动释放的全流程优化，用户可根据需求选择共享资源按任务卡时计费或专属资源按配置计费',
                        item2: '系统管理与多租户支持：支持多租户资源与业务隔离，确保各租户业务互不干扰，支持子账号与精细化的角色权限管理',
                        item3: '定价与计费：通过直观易懂的可视化页面，构建全面且灵活的定价策略，涵盖枚举、线性、阶梯等多种定价方式，满足不同用户的成本偏好与实际使用场景',
                        item4: '客户运营：实现全生命周期客户管理，全面收集并分析客户数据，覆盖注册、认证、充值、消费各环节，为精准营销与个性化服务奠定坚实基础'
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '算力池化',
                    item1Desc: '灵活的算力切分与池化管理，支持公共和专属算力池',
                    item2: '模型训推',
                    item2Desc: '完整的AI模型开发、训练、部署、推理全生命周期支持',
                    item3: '智能监控',
                    item3Desc: '自动化故障检测与自愈机制，保障服务稳定运行',
                    item4: '数据平台',
                    item4Desc: '统一的数据存储与管理服务，支持弹性伸缩'
                }
            },
            xaiToken: {
                name: 'RWA代币 XAI',
                description: 'XRWA AI生态的核心功能通证与价值储备代币，承担收益分配、服务支付与生态治理三大职能，连接实体算力与链上金融',
                learnMore: '了解更多',
                pageTitle: 'RWA代币 XAI - 生态核心通证',
                subtitle: '生态核心通证',
                intro: 'XAI 是 XRWA AI 生态内的核心功能通证与价值储备代币，基于 ERC-3643 标准开发，承担生态价值流转媒介、收益分配工具、服务支付凭证三大核心职能。',
                section1: {
                    title: '一、核心职能',
                    feature1: {
                        title: '1. 生态收益分配的唯一支付工具',
                        desc: 'GNFT 与 GUnit 持有者的生态收益均以 XAI 形式发放，这一设计将资产与 XAI 价值深度绑定，确保代币持有者获得算力资产产生的收益分红。',
                        gnftDesc: 'GNFT 是 XRWA 生态中物理 GPU 资产的链上唯一确权凭证，基于 ERC-721 标准开发，具备不可分割、不可替代、唯一标识的技术属性。每一枚 GNFT 对应现实世界中一台经过硬件验证、性能测评的 GPU 设备，实现物理资产与链上资产的 1:1 锚定。',
                        gunitDesc: 'GUnit 是基于 GNFT 拆分生成通证，遵循 ERC-3643 标准，具备可分割、可替代、标准化的技术属性，同时也集成了 KYC/AML 相关信息。每一枚 GUnit 对应 GNFT 底层 GPU 资产的单位算力份额。',
                        xaiDesc: 'XAI 作为收益分配的唯一支付工具，将 GNFT 和 GUnit 持有者的收益与 XAI 价值深度绑定，形成稳定的价值循环。'
                    },
                    feature2: {
                        title: '2. AI生态服务的强制支付凭证',
                        desc: '在 XRWA 的 AI 应用生态中，XAI 是唯一的服务支付工具，覆盖所有算力与 AI 相关服务场景，构建了 XAI 的刚性需求，推动代币价值提升。',
                        intro: 'XAI 覆盖 XRWA 生态的 AI 全场景交互，是连接资产端与应用端的价值桥梁。在算力港（XAI Center）平台中，所有算力服务、模型训练、推理服务、数据存储等服务的支付均使用 XAI 代币，形成刚性的支付需求。',
                        usage: '这一"强制支付"机制构建了 XAI 的刚性需求，XAI 的使用场景与需求量将同步增长，进而推动代币价值提升。随着生态规模的扩大，XAI 的支付场景将不断扩展，包括：',
                        service1: '算力租赁与购买服务',
                        service2: 'AI 模型训练与推理服务',
                        service3: '数据存储与管理服务',
                        service4: 'Agent 应用开发与部署服务'
                    },
                    feature3: {
                        title: '3. 生态治理与节点激励的核心代币',
                        desc: 'XAI 持有者具备生态治理权，可通过链上投票参与 XRWA 生态的关键决策，核心角色需质押 XAI 获得节点资格，通过质押惩罚机制保障生态节点的合规性与可靠性。',
                        governanceTitle: '治理参与',
                        governanceIntro: 'XAI 持有者具备生态治理权，可通过链上投票参与 XRWA 生态的关键决策，包括：',
                        gov1: '协议升级与功能改进提案',
                        gov2: '资产配置与运营策略调整',
                        gov3: '收益分配机制优化',
                        gov4: '生态合作伙伴选择',
                        stakingTitle: '节点质押',
                        stakingIntro: 'XRWA 生态的核心角色，需质押一定数量的 XAI 方可获得节点资格，并通过"质押惩罚"机制保障生态节点的合规性与可靠性。质押机制包括：',
                        stake1: '最低质押要求：成为验证者需要质押最低数量的 XAI',
                        stake2: '质押奖励：验证者根据质押量和在线时间获得区块奖励和交易费用',
                        stake3: '惩罚机制：恶意行为（如双重签名、长时间离线）将导致部分或全部质押代币被罚没'
                    }
                },
                section2: {
                    title: '二、经济模型',
                    issuance: {
                        title: '发行机制',
                        intro: 'XAI 的发行采用"创世发行+生态挖矿"结合的方式：',
                        genesis: {
                            title: '创世发行',
                            desc: '创世发行部分用于项目启动、团队激励、机构投资，确保项目初期有足够的资金和资源支持。'
                        },
                        mining: {
                            title: '生态挖矿',
                            intro: '生态挖矿部分通过以下方式逐步释放：',
                            item1: 'GNFT/GUnit 持有挖矿：持有算力资产通证的用户可获得 XAI 挖矿奖励',
                            item2: 'AI 服务使用挖矿：使用算力港平台服务的用户可获得 XAI 奖励',
                            item3: '节点验证挖矿：参与网络验证的节点可获得 XAI 奖励',
                            summary: '这一机制确保代币流通量与生态发展进度匹配，避免过度通胀，保持代币价值的稳定性。'
                        }
                    },
                    anchoring: {
                        title: '价值锚定体系',
                        intro: 'GNFT、GUnit、XAI 在 XRWA 生态中并非独立存在，而是形成"资产确权-拆分流通-价值交互"的协同体系：',
                        foundation: {
                            title: '基础层：GNFT 的资产锚定',
                            desc: 'GNFT 将物理 GPU 资产转化为链上确权资产，为生态提供"价值基础"。若没有 GNFT 的资产锚定，GUnit 的拆分将失去底层资产支撑，XAI 的收益分配也将缺乏价值来源。'
                        },
                        circulation: {
                            title: '流通层：GUnit 的小额化赋能',
                            desc: 'GUnit 通过拆分 GNFT，将高价值资产转化为可小额交易的通证，提升生态资产的流动性与普惠性，吸引更多用户参与，为生态带来增量资金与算力需求，进而扩大 XAI 的支付场景。'
                        },
                        value: {
                            title: '价值层：XAI 的生态串联',
                            desc: 'XAI 作为收益分配工具，连接资产持有者与生态贡献者，通过收益分配激励资产持有者提供更多算力，通过支付需求激励 AI 用户使用生态服务，反向推动 GNFT 的上链规模与 GUnit 的流通活跃度。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '收益分配',
                    item1Desc: 'GNFT 与 GUnit 持有者的生态收益均以 XAI 形式发放',
                    item2: '服务支付',
                    item2Desc: 'AI 生态服务的强制支付凭证，覆盖所有算力与 AI 相关服务场景',
                    item3: '生态治理',
                    item3Desc: '持有者具备生态治理权，可通过链上投票参与关键决策',
                    item4: '价值锚定',
                    item4Desc: '与实体算力资产深度绑定，确保代币价值的稳定性'
                }
            }
        },
        // 应用场景
        scenarios: {
            title: '应用场景',
            description: 'PowerVerse Chain赋能多元化的应用场景',
            ai: {
                title: 'AI模型训练',
                description: '分布式GPU资源池，支持大规模AI模型训练与推理，降低计算成本',
                stats: {
                    costReduction: '成本降低',
                    gpuNodes: 'GPU节点',
                    availability: '全天候服务'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '分布式GPU资源池：整合全球闲置GPU资源，形成强大的分布式计算集群',
                    item2: '智能任务调度：AI算法自动匹配最优计算节点，最大化资源利用率',
                    item3: '模型训练加速：支持PyTorch、TensorFlow等主流框架，训练速度提升3-5倍',
                    item4: '推理服务优化：低延迟推理服务，支持实时AI应用部署',
                    item5: '成本透明化：按需付费，无隐藏费用，相比传统云服务节省60%以上成本'
                },
                cases: {
                    title: '应用案例',
                    item1: '大语言模型训练：支持GPT、BERT等大规模语言模型的分布式训练',
                    item2: '计算机视觉：图像识别、目标检测、语义分割等CV任务加速',
                    item3: '自然语言处理：文本分类、情感分析、机器翻译等NLP应用',
                    item4: '推荐系统：个性化推荐算法训练与实时推理'
                },
                features: {
                    gpuCluster: {
                        title: 'GPU集群',
                        desc: '整合全球GPU资源，提供强大的计算能力'
                    },
                    costOptimization: {
                        title: '成本优化',
                        desc: '相比传统云服务，成本降低60%以上'
                    },
                    elasticScaling: {
                        title: '弹性扩展',
                        desc: '根据需求动态调整计算资源'
                    }
                }
            },
            science: {
                title: '科学计算',
                description: '高性能计算集群，为科研机构提供强大的计算能力支持',
                stats: {
                    researchInstitutes: '科研机构',
                    dataProcessing: '数据处理',
                    dataProcessingValue: 'PB级',
                    availability: '可用性'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '高性能计算集群：提供超算级别的计算能力，支持大规模并行计算',
                    item2: '多学科支持：覆盖物理、化学、生物、天文、气象等多个科学领域',
                    item3: '数据安全保障：端到端加密，符合科研数据安全标准',
                    item4: '协作研究平台：支持多机构协同研究，数据共享与协作',
                    item5: '成本效益：按需使用，无需巨额硬件投资，降低科研成本'
                },
                fields: {
                    title: '应用领域',
                    item1: '分子动力学模拟：蛋白质折叠、药物分子设计等生物化学计算',
                    item2: '气候模拟：全球气候模型、极端天气预测等气象学研究',
                    item3: '天体物理：宇宙模拟、星系演化、黑洞研究等天文计算',
                    item4: '材料科学：新材料设计、性能预测、量子计算等',
                    item5: '基因研究：基因组分析、蛋白质结构预测、精准医疗'
                },
                features: {
                    hpc: {
                        title: '高性能计算',
                        desc: '支持大规模科学计算任务'
                    },
                    dataSecurity: {
                        title: '数据安全',
                        desc: '多重加密保护，确保数据安全'
                    },
                    professionalSupport: {
                        title: '专业支持',
                        desc: '为科研机构提供专业的技术支持'
                    }
                }
            },
            render: {
                title: '渲染服务',
                description: '分布式渲染网络，加速3D动画、影视特效等渲染任务',
                stats: {
                    speedup: '渲染加速',
                    hdSupport: '高清支持',
                    costSaving: '成本节省'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '分布式渲染架构：将渲染任务分配到多个节点并行处理，大幅缩短渲染时间',
                    item2: '多格式支持：支持Blender、Maya、3ds Max、Cinema 4D等主流3D软件',
                    item3: '高质量输出：支持4K、8K超高清渲染，满足影视级制作需求',
                    item4: '实时预览：提供实时渲染预览功能，快速迭代优化',
                    item5: '智能调度：自动分配最优渲染节点，最大化渲染效率'
                },
                scenarios: {
                    title: '应用场景',
                    item1: '影视特效：电影、电视剧的CG特效渲染，大幅缩短制作周期',
                    item2: '动画制作：3D动画片、游戏过场动画等批量渲染任务',
                    item3: '建筑可视化：建筑效果图、室内设计渲染、VR场景制作',
                    item4: '产品设计：产品渲染图、广告宣传片、电商展示图',
                    item5: '游戏开发：游戏场景渲染、角色建模、材质贴图处理'
                },
                features: {
                    fastRendering: {
                        title: '快速渲染',
                        desc: '分布式渲染大幅缩短渲染时间'
                    },
                    quality: {
                        title: '质量保证',
                        desc: '保证渲染质量和一致性'
                    },
                    costSaving: {
                        title: '成本节约',
                        desc: '降低渲染成本，提高效率'
                    }
                }
            },
            edge: {
                title: '边缘计算',
                description: '边缘节点网络，提供低延迟、高可用的边缘计算服务',
                stats: {
                    lowLatency: '超低延迟',
                    edgeNodes: '边缘节点',
                    availability: '可用性'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '全球边缘节点：在主要城市部署边缘计算节点，就近提供服务',
                    item2: '超低延迟：数据处理在边缘完成，延迟低至10ms以下',
                    item3: '高可用架构：多节点冗余，自动故障转移，保证服务连续性',
                    item4: '数据本地化：敏感数据可在本地处理，满足数据合规要求',
                    item5: '弹性扩展：根据流量自动扩展边缘节点，应对突发需求'
                },
                scenarios: {
                    title: '应用场景',
                    item1: '实时游戏：云游戏、AR/VR应用，需要极低延迟的交互体验',
                    item2: 'IoT设备：智能家居、工业物联网设备的实时数据处理',
                    item3: '视频直播：直播推流、实时转码、CDN加速等流媒体服务',
                    item4: '自动驾驶：车辆边缘计算、路侧设备数据处理、实时决策',
                    item5: '金融交易：高频交易、实时风控、支付处理等金融应用'
                },
                features: {
                    lowLatency: {
                        title: '低延迟',
                        desc: '边缘节点就近处理，延迟低至毫秒级'
                    },
                    highAvailability: {
                        title: '高可用',
                        desc: '分布式架构保证服务高可用性'
                    },
                    globalCoverage: {
                        title: '全球覆盖',
                        desc: '边缘节点覆盖全球主要地区'
                    }
                }
            },
            blockchain: {
                title: '区块链应用',
                description: '为Web3应用提供强大的去中心化计算基础设施，支持DApp开发和智能合约执行',
                stats: {
                    dapps: 'DApp应用',
                    tps: 'TPS处理',
                    transactionCost: '交易成本'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '高性能区块链：采用创新的共识机制，支持高TPS交易处理',
                    item2: '智能合约平台：支持Solidity、Rust等多种智能合约语言',
                    item3: '跨链互操作：支持与其他主流区块链网络的跨链交互',
                    item4: '开发者友好：完善的开发工具和文档，降低DApp开发门槛',
                    item5: '低Gas费用：优化的网络架构，大幅降低交易成本'
                },
                scenarios: {
                    title: '应用场景',
                    item1: 'DeFi应用：去中心化交易所、借贷协议、流动性挖矿等',
                    item2: 'NFT市场：数字艺术品交易、游戏道具、收藏品等NFT应用',
                    item3: 'GameFi：区块链游戏、Play-to-Earn、元宇宙应用',
                    item4: 'DAO治理：去中心化自治组织、社区投票、提案执行',
                    item5: '供应链溯源：商品溯源、防伪验证、物流追踪等'
                }
            },
            bigdata: {
                title: '大数据分析',
                description: '分布式大数据处理平台，支持海量数据的存储、分析和挖掘',
                stats: {
                    dataStorage: '数据存储',
                    dataStorageValue: 'EB级',
                    streamProcessing: '流式处理',
                    streamProcessingValue: '实时',
                    processingCapacity: '处理能力',
                    processingCapacityValue: 'PB/天'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '分布式存储：去中心化存储网络，数据安全可靠',
                    item2: '实时分析：支持流式数据处理，实时分析业务数据',
                    item3: '机器学习：集成ML算法库，支持数据挖掘和预测分析',
                    item4: '可视化平台：提供丰富的数据可视化工具和报表',
                    item5: '弹性扩展：根据数据量自动扩展计算资源'
                },
                scenarios: {
                    title: '应用场景',
                    item1: '商业智能：企业数据分析、报表生成、决策支持',
                    item2: '用户画像：用户行为分析、精准营销、个性化推荐',
                    item3: '风险控制：金融风控、欺诈检测、异常监控',
                    item4: '物联网分析：IoT设备数据采集、实时监控、预测维护',
                    item5: '日志分析：系统日志分析、安全审计、性能优化'
                }
            },
            cloudgaming: {
                title: 'AI驱动的去中心化云游戏解决方案服务商',
                description: 'PowerVerse Chain 去中心化云游戏平台，全端适配 + PC / 手机 / 平板 / 电视，低延迟高画质沉浸式体验，完美兼容跳舞、切西瓜等体感游戏，畅玩无界。',
                download: '下载客户端',
                startPlaying: '立即开始',
                videos: {
                    title: '产品演示视频',
                    video1: '云游戏平台演示',
                    video2: '游戏体验展示'
                },
                images: {
                    title: '功能特性展示',
                    item1: '超低延迟，延迟低至20ms',
                    item2: '支持4K/8K超高清渲染',
                    item3: '支持PC、手机、平板等多种设备',
                    item4: '丰富的游戏库，即开即玩',
                    item5: '去中心化架构，安全可靠',
                    item6: '智能资源调度，优化体验'
                },
                esports: {
                    title: '电竞酒店',
                    item1: '电竞酒店：年轻人社交聚会热门选择，PowerVerse Chain提供全新运营模式，无需高端PC，大幅降低硬件成本。',
                    item2: '部署云游戏终端，全平台游戏体验，从3A大作到竞技游戏，一键即玩无需等待，低延迟高画质，支持多人联机对战。',
                    item3: '智能计费系统灵活设置收费模式，区块链技术确保交易透明安全，为酒店和玩家建立信任桥梁。'
                },
                gameImages: {
                    title: '支持1000+款游戏在线游玩'
                },
                stats: {
                    lowLatency: '超低延迟',
                    hdSupport: '高清支持',
                    availability: '全天候服务'
                },
                workflow: {
                    title: '完整链路闭环',
                    step1: '用户注册登录：通过PowerVerse Chain钱包连接，实现去中心化身份认证',
                    step2: '游戏选择：浏览游戏库，选择想要游玩的游戏',
                    step3: '资源分配：PowerVerse Infra智能调度边缘计算节点，就近分配GPU资源',
                    step4: '游戏启动：游戏在云端GPU上运行，通过低延迟流媒体传输到用户设备',
                    step5: '实时交互：用户操作实时上传，游戏画面实时渲染并流式传输',
                    step6: '支付结算：使用PowerVerse代币（PEC）按使用时长付费，智能合约自动结算',
                    step7: '资源释放：游戏结束后，GPU资源自动释放回资源池，供其他用户使用'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '去中心化架构：无需中心化服务器，利用全球分布式GPU资源',
                    item2: '低延迟体验：边缘计算节点就近服务，延迟低至20ms以下',
                    item3: '成本优势：按需付费，无需购买昂贵硬件，降低游戏门槛',
                    item4: '高质量渲染：支持4K/8K超高清画质，流畅游戏体验',
                    item5: '跨平台支持：支持PC、手机、平板等多种设备，随时随地畅玩'
                },
                scenarios: {
                    title: '应用场景',
                    item1: '3A大作云游戏：无需下载，即开即玩，享受顶级游戏体验',
                    item2: '移动云游戏：手机端畅玩PC游戏，突破设备性能限制',
                    item3: 'VR/AR游戏：支持虚拟现实和增强现实游戏，沉浸式体验',
                    item4: '游戏直播：低延迟游戏直播，实时互动体验'
                },
                features: {
                    lowLatency: {
                        title: '超低延迟',
                        desc: '边缘节点就近服务，延迟低至20ms'
                    },
                    hdQuality: {
                        title: '高清画质',
                        desc: '支持4K/8K超高清渲染'
                    },
                    costEffective: {
                        title: '成本优势',
                        desc: '按需付费，无需购买硬件'
                    }
                }
            },
            computingexchange: {
                title: '算力交易',
                description: '去中心化算力交易市场，连接算力供需双方，实现算力资源的自由流转',
                goToTrade: '前往交易市场',
                links: {
                    title: '相关链接',
                    market: '前往PowerVerse Market交易市场',
                    infra: '了解PowerVerse Infra基础设施',
                    token: '查看PowerVerse代币（PEC）信息',
                    workflow: '查看全链路场景流程图'
                },
                stats: {
                    providers: '算力提供方',
                    transactions: '交易订单',
                    successRate: '交易成功率'
                },
                workflow: {
                    title: '完整链路闭环',
                    step1: '算力提供方注册：GPU/CPU资源提供方在PowerVerse Market注册，发布算力资源信息',
                    step2: '资源上架：设置算力规格、价格、可用时间等参数，资源信息上链存证',
                    step3: '需求方发布：算力需求方发布需求订单，指定算力类型、数量、时长、预算',
                    step4: '智能匹配：PowerVerse Market智能合约自动匹配供需双方，或提供方主动接单',
                    step5: '订单确认：双方确认订单，需求方支付PowerVerse代币（PEC）作为保证金',
                    step6: '资源分配：PowerVerse Infra根据订单自动分配算力资源，启动虚拟机',
                    step7: '任务执行：需求方提交计算任务，系统自动执行并返回结果',
                    step8: '实时监控：双方可实时查看算力使用情况、任务进度、资源状态',
                    step9: '自动结算：任务完成后，智能合约根据实际使用时长自动结算，释放保证金',
                    step10: '评价反馈：交易双方互评，评价计入信誉体系，影响后续交易优先级',
                    step11: '资源回收：算力资源自动释放回资源池，供其他订单使用'
                },
                coreAdvantages: {
                    title: '核心优势',
                    item1: '去中心化交易：无需第三方中介，买卖双方直接交易，降低交易成本',
                    item2: '智能合约保障：交易全程由智能合约执行，自动结算，安全可靠',
                    item3: '透明定价：市场价格公开透明，供需双方自由议价',
                    item4: '灵活交易：支持按小时、按天、按月等多种计费方式',
                    item5: '信誉体系：基于区块链的信誉评价系统，保障交易安全'
                },
                scenarios: {
                    title: '应用场景',
                    item1: 'AI训练算力租赁：为AI公司提供GPU算力，支持模型训练',
                    item2: '渲染算力交易：为影视公司提供渲染算力，加速项目制作',
                    item3: '科学计算资源：为科研机构提供高性能计算资源',
                    item4: '闲置资源变现：个人或企业闲置GPU/CPU资源可上架交易，获得收益'
                },
                features: {
                    decentralized: {
                        title: '去中心化',
                        desc: '无需中介，直接交易'
                    },
                    smartContract: {
                        title: '智能合约',
                        desc: '自动执行，安全可靠'
                    },
                    transparent: {
                        title: '透明定价',
                        desc: '市场价格公开透明'
                    }
                }
            },
            rwa: {
                title: 'RWA钱包',
                description: '合规上链，算力生金。RWA钱包通过ERC-3643合规协议，将全国50+矿场、超10万台高性能GPU实体算力资产化于PowerVerse链上，构建安全、可信、可自由交易的去中心化算力基础设施。',
                stats: {
                    mines: '矿场数量',
                    gpuCount: 'GPU数量',
                    tokenized: '代币化率'
                },
                coreAdvantages: {
                    title: '核心优势：合规、实体与效率的三重保障',
                    item1: '合规先行，安全可信：深度集成ERC-3643标准，将KYC/AML等全球监管要求内置于智能合约。确保资产发行与流转全程合法合规，为机构资金入场扫清障碍，奠定坚实信任基石。',
                    item2: '实体锚定，真实透明：每一份链上算力通证，均对应全国分布式矿场中真实的高性能GPU硬件。资产来源清晰、权属可验证，杜绝虚拟炒作，实现实体价值的精准映射。',
                    item3: '链上管理，降本增效：基于PowerVerse区块链网络，实现算力资产的自动化发行、确权与交易结算。大幅提升资产管理效率，降低运营与信任成本，释放流动性潜能。'
                },
                scenarios: {
                    title: '应用场景：赋能多元商业生态',
                    item1: '合规化算力资产交易：为合格投资者与机构提供标准化、合规化的算力资产认购与二级市场交易服务，开启算力投资新范式。',
                    item2: '去中心化算力金融(DeFi)：作为底层优质合规资产，可应用于抵押借贷、收益权质押等链上金融场景，构建丰富的算力DeFi生态。',
                    item3: '企业级算力服务市场：为AI训练、云渲染、科研计算等需求方，提供可即时结算、权属清晰的弹性算力租赁与采购解决方案。'
                },
                features: {
                    decentralized: {
                        title: '合规先行',
                        desc: 'ERC-3643标准，确保合法合规'
                    },
                    tokenized: {
                        title: '实体锚定',
                        desc: '真实GPU硬件，权属可验证'
                    },
                    transparent: {
                        title: '链上管理',
                        desc: '自动化发行确权，降本增效'
                    }
                },
                computingPort: {
                    title: '算力港',
                    description: '算力港（XAI Center）是基于PowerVerse Chain构建的去中心化智算平台，致力于汇聚全球闲置GPU/CPU资源，通过区块链技术实现算力资产的通证化、标准化和可信交易。平台提供算力切分、算力池化、数据平台、模型训推、故障检测、边缘计算等全方位服务，为AI团队提供低成本、高弹性的算力支持。',
                    feature1: '算力切分与池化：支持显卡多实例运行、显卡直通技术、多节点并行计算，实现多品牌GPU单卡的灵活分配与显存切分，支持公共算力池或专属算力池的灵活组建',
                    feature2: '模型训推全生命周期：提供从模型开发、训练、部署、推理到优化的完整支持，包括分布式训练、模型效果评估、在线推理、模型优化等专业服务',
                    feature3: '智能监控与故障自愈：基于可视化监控数据、可配置告警服务、自动化故障处理，实现服务运维智能化，自动检测并修复硬件故障、软件异常或资源瓶颈'
                },
                xaiToken: {
                    title: 'RWA代币 XAI',
                    description: 'XAI是XRWA AI生态内的核心功能通证与价值储备代币，基于ERC-3643标准开发，承担生态价值流转媒介、收益分配工具、服务支付凭证三大核心职能。XAI覆盖XRWA生态的AI全场景交互，是连接资产端与应用端的价值桥梁。',
                    feature1: '生态收益分配的唯一支付工具：GNFT与GUnit持有者的生态收益均以XAI形式发放，这一设计将资产与XAI价值深度绑定，确保代币持有者获得算力资产产生的收益分红',
                    feature2: 'AI生态服务的强制支付凭证：在XRWA的AI应用生态中，XAI是唯一的服务支付工具，覆盖所有算力与AI相关服务场景，构建了XAI的刚性需求，推动代币价值提升',
                    feature3: '生态治理与节点激励的核心代币：XAI持有者具备生态治理权，可通过链上投票参与XRWA生态的关键决策，核心角色需质押XAI获得节点资格，通过质押惩罚机制保障生态节点的合规性与可靠性'
                }
            },
            workflow: {
                title: '全链路场景',
                description: '云游戏、算力交易与PEC代币支付的完整闭环流程',
                step1: {
                    title: '用户注册登录',
                    desc: '通过PowerVerse Chain钱包连接，实现去中心化身份认证'
                },
                branch1: {
                    title: '云游戏场景',
                    step1: {
                        title: '选择游戏',
                        desc: '浏览游戏库，选择想要游玩的游戏'
                    },
                    step2: {
                        title: '资源分配',
                        desc: 'PowerVerse Infra智能调度边缘计算节点，分配GPU资源'
                    },
                    step3: {
                        title: '游戏运行',
                        desc: '游戏在云端GPU上运行，低延迟流媒体传输'
                    }
                },
                branch2: {
                    title: '算力交易场景',
                    step1: {
                        title: '发布需求/资源',
                        desc: '需求方发布订单或提供方上架算力资源'
                    },
                    step2: {
                        title: '智能匹配',
                        desc: 'PowerVerse Market智能合约自动匹配供需'
                    },
                    step3: {
                        title: '执行任务',
                        desc: 'PowerVerse Infra分配资源，执行计算任务'
                    }
                },
                payment: {
                    title: 'PEC代币支付',
                    desc: '使用PowerVerse代币（PEC）按使用时长/资源付费，智能合约自动结算'
                },
                release: {
                    title: '资源释放',
                    desc: '任务完成后，GPU/CPU资源自动释放回资源池，供其他用户使用'
                },
                cloudgaming: {
                    title: '云游戏场景',
                    item1: '用户通过钱包连接，实现去中心化身份认证',
                    item2: '浏览游戏库，选择想要游玩的游戏',
                    item3: 'PowerVerse Infra智能调度边缘计算节点',
                    item4: '游戏在云端GPU上运行，低延迟流媒体传输',
                    item5: '使用PEC代币按使用时长付费',
                    item6: '游戏结束后，GPU资源自动释放'
                },
                computingexchange: {
                    title: '算力交易场景',
                    item1: '算力提供方在PowerVerse Market注册并上架资源',
                    item2: '需求方发布需求订单，指定算力类型和预算',
                    item3: '智能合约自动匹配供需双方',
                    item4: 'PowerVerse Infra根据订单分配算力资源',
                    item5: '使用PEC代币支付，智能合约自动结算',
                    item6: '任务完成后，算力资源自动释放回资源池'
                },
                token: {
                    title: 'PEC代币支付',
                    item1: 'PowerVerse代币（PEC）是生态系统的原生代币',
                    item2: '用于支付云游戏使用时长费用',
                    item3: '用于支付算力交易费用',
                    item4: '智能合约自动执行结算，安全可靠',
                    item5: '按需付费，无需预充值',
                    item6: '支持多种支付方式，灵活便捷'
                },
                flowchartTitle: '云游戏与算力交易全链路流程图',
                cloudgamingCard: {
                    title: '云游戏场景',
                    description: '用户通过PowerVerse Chain钱包登录云游戏平台，选择游戏，系统通过PowerVerse Infra智能调度边缘GPU资源，游戏在云端运行并通过低延迟流媒体传输。用户使用PEC代币按时长支付，智能合约自动结算，游戏结束后资源释放。',
                    link: '查看云游戏详情'
                },
                computingexchangeCard: {
                    title: '算力交易场景',
                    description: '算力提供方在PowerVerse Market注册并上架GPU/CPU资源，需求方发布订单。智能合约自动匹配并执行交易，需求方支付PEC代币作为保证金。PowerVerse Infra分配资源，任务执行，实时监控，自动结算，双方互评，资源回收。',
                    link: '查看算力交易详情'
                },
                tokenPaymentCard: {
                    title: 'PEC代币支付',
                    description: 'PowerVerse Token (PEC) 作为生态核心资产，用于支付云游戏时长、算力租赁费用、参与DAO治理和节点质押奖励。智能合约确保所有交易透明、安全、高效。',
                    link: '了解PEC代币'
                }
            }
        },
        // 开发者
        developer: {
            title: '开发者中心',
            description: '丰富的开发工具和文档，助力开发者快速构建应用',
            docs: {
                title: '技术文档',
                description: '完整的技术文档和API参考，帮助开发者快速上手',
                link: '查看文档'
            },
            sdk: {
                title: 'SDK工具包',
                description: '多语言SDK支持，简化开发流程，提高开发效率',
                link: '下载SDK'
            },
            tools: {
                title: '开发工具',
                description: '测试网络、调试工具、部署脚本等一站式开发工具',
                link: '使用工具',
                feature1: '测试网络：提供完整的测试环境',
                feature2: '调试工具：强大的调试和监控功能',
                feature3: '部署脚本：一键部署到生产环境'
            },
            community: {
                title: '社区支持',
                description: '活跃的开发者社区，技术交流与问题解答',
                link: '加入社区',
                feature1: 'Telegram社区：实时技术交流',
                feature2: 'GitHub：开源代码和问题追踪',
                feature3: '技术论坛：深度技术讨论'
            }
        },
        // 代币
        token: {
            pageTitle: '代币 - PowerVerse Chain',
            title: '代币经济',
            description: '构建可持续的生态经济模型',
            intro: 'PowerVerse Token是PowerVerse Chain生态系统的原生代币',
            totalSupply: '总供应量',
            circulated: '已流通',
            marketCap: '市值',
            networkInfo: 'PowerVerse 网络信息',
            rpcInterface: 'RPC 接口',
            mainRPC: '主RPC接口:',
            webSocket: 'WebSocket:',
            beaconAPI: 'Beacon API:',
            healthCheck: '健康检查:',
            walletInfo: '钱包连接信息',
            rpcURL: 'RPC URL:',
            chainID: 'Chain ID:',
            symbol: 'Symbol:',
            decimals: 'Decimals:',
            distributionChart: '代币分配可视化',
            usage: {
                title: '代币用途',
                items: [
                    '支付计算资源费用',
                    '参与网络治理投票',
                    '节点质押与奖励',
                    '生态应用内支付'
                ]
            },
            distribution: {
                title: '分配机制',
                items: [
                    '社区激励：40%',
                    '团队与顾问：20%',
                    '生态发展：20%',
                    '投资者：15%',
                    '储备金：5%'
                ]
            }
        },
        // 关于
        about: {
            title: '关于我们',
            vision: {
                title: '愿景',
                content: 'PowerVerse Chain致力于构建全球最大的去中心化计算网络，让计算资源像水电一样触手可及，为Web3生态提供强大的基础设施支撑。'
            },
            mission: {
                title: '使命',
                content: '通过区块链技术整合全球闲置计算资源，降低计算成本，提高资源利用效率，推动分布式计算技术的普及与应用。'
            },
            values: {
                title: '核心价值',
                items: [
                    '去中心化：无需中心化机构，用户直接参与网络治理',
                    '高效透明：区块链技术保证交易透明，智能合约自动执行',
                    '开放生态：支持多种应用场景，构建繁荣的开发者生态',
                    '安全可靠：多重安全机制，保障网络与数据安全'
                ]
            },
            team: {
                title: '团队介绍',
                intro: '创始团队成员拥有多次成功创业经验，曾打造过行业领先的服务器集群，具有多项国家专利技术。由多名拥有公司上市经验成员加入初始团队。其他员工中有许多博士及教授，在web3领域具有丰富经验，参与多个大型项目。',
                members: {
                    member1: {
                        name: 'Harvey',
                        role: '创始人 & CEO',
                        bio: '毕业于英国伯明翰大学，区块链技术专家，深耕加密货币领域多年',
                        cert: ''
                    },
                    member2: {
                        name: 'Solomon',
                        role: '联合创始人 & CTO',
                        bio: '毕业于英国曼彻斯特大学，分布式系统专家，区块链技术顾问'
                    },
                    member3: {
                        name: 'Jane',
                        role: '联合创始人 & COO',
                        bio: '毕业于加拿大维多利亚大学，生态系统建设专家，加密资产管理专家'
                    },
                },
                others: '其他员工中有许多博士及教授，在web3领域具有丰富经验，参与多个大型项目。'
            },
            contact: {
                title: '联系我们',
                intro: '如果您对我们的项目感兴趣，或者有任何问题，欢迎通过以下方式联系我们：',
                email: '邮箱：hiabacloud@gmail.com',
                address: '地址：浙江人才大厦2号楼7楼',
                twitter: 'Twitter：@PowerVerseChain',
                telegram: 'Telegram：@PowerVerseChain_Offical',
                discord: 'Discord：PowerVerse Community'
            }
        },
        // 白皮书
        whitepaper: {
            title: '白皮书',
            download: '下载白皮书',
            sections: {
                introduction: '引言',
                overview: '项目概述',
                technology: '技术架构',
                tokenomics: '代币经济',
                roadmap: '路线图',
                team: '团队介绍'
            }
        },
        // 通用
        common: {
            learnMore: '了解更多',
            back: '返回',
            next: '下一页',
            previous: '上一页',
            readMore: '阅读更多',
            download: '下载',
            contact: '联系我们',
            join: '加入我们',
            privacy: '隐私政策',
            terms: '服务条款',
            cookie: 'Cookie政策',
            github: 'GitHub',
            blog: '博客',
            copy: '复制',
            copied: '已复制!',
            copyFailed: '复制失败，请手动复制: ',
            videoNotSupported: '您的浏览器不支持视频播放。'
        },
        // 硬件工厂
        hardwareFactory: {
            pageTitle: '硬件工厂 - PowerVerse Chain',
            title: '硬件工厂',
            description: '专业服务器机箱与工业控制机箱制造商',
            companyProfile: '公司介绍',
            companyIntro: '我们是一家专业的服务器机箱与工业控制机箱制造商，致力于为客户提供高品质的硬件产品解决方案。',
            companyDesc: '公司简介',
            companyDescText: '我们拥有完整的生产制造能力，从设计、研发到生产、质检，全流程自主可控。工厂配备先进的生产设备和专业的技术团队，确保产品质量和交付效率。',
            companyCulture: '企业文化',
            companyCultureText: '我们秉承"质量第一、客户至上、持续创新"的企业理念，不断优化生产工艺，提升产品质量，为客户创造更大价值。我们注重团队建设，营造积极向上的工作氛围，激发员工创新潜能。',
            qualifications: '公司资质',
            license: '营业执照',
            licenseDesc: '具备完整的工商注册资质，合法合规经营',
            qualityCert: '质量认证',
            qualityCertDesc: '通过ISO质量管理体系认证',
            honorCert: '荣誉证书',
            honorCertDesc: '获得多项行业荣誉和资质认证',
            patent: '专利技术',
            patentDesc: '拥有多项产品设计和技术专利',
            productCenter: '产品中心',
            productCenterDesc: '我们提供全系列的服务器机箱、存储服务器机箱、工业控制机箱和嵌入式机箱产品，满足不同应用场景的需求。',
            serverChassis: '服务器机箱',
            serverChassisDesc: '提供1U到8U及塔式服务器机箱',
            storageChassis: '存储服务器机箱',
            storageChassisDesc: '高密度存储解决方案',
            industrialChassis: '工控机箱',
            industrialChassisDesc: '工业控制专用机箱',
            embeddedChassis: '嵌入式机箱',
            embeddedChassisDesc: '紧凑型嵌入式解决方案',
            accessories: '配件',
            accessoriesDesc: '各类机箱配件和附件',
            productDetails: '产品详情',
            productAdvantages: '产品优势',
            advantages: [
                '专业设计：符合行业标准，优化散热与空间利用',
                '优质材料：采用高强度钢材，耐腐蚀，经久耐用',
                '精密制造：先进生产工艺，确保产品精度与可靠性',
                '灵活定制：支持根据客户需求进行个性化定制',
                '严格测试：出厂前经过多项严格测试，确保性能稳定'
            ],
            // 产品分类列表
            serverChassisList: {
                item1: '6U机架式8节点服务器机箱',
                item2: '5U机架式8节点服务器机箱',
                item3: '4U36盘位机架式服务器机箱',
                item4: '4U24盘位机架式服务器机箱',
                item5: '4U8盘位机架式服务器机箱',
                item6: '2U标准服务器',
                item7: '瘦客'
            },
            serverChassisInfo: {
                item1: '6U机架式设计，集成8个独立计算节点，专为云游戏、云PC、云渲染等多用户并发访问场景设计。采用"集中算力+分布式部署"模式，显著减少硬件部署空间和成本，同时确保每位用户享受独立稳定的计算性能。',
                item2: '5U高度机箱，支持8张高性能GPU卡，为AI模型训练和深度学习推理提供强大计算能力。机箱配备高效电源模块和智能散热系统，确保GPU在最佳性能下稳定运行。此外，它提供充足的扩展接口，以适应各种算法框架和软件平台。',
                item3: '专为大容量数据存储场景设计，专注于"高容量、高可靠性、高扩展性"。它采用多盘位设计、RAID保护和智能管理，为企业提供安全、稳定、易于管理的存储解决方案，适用于数据备份、监控存储、媒体库和文件共享。',
                item4: '专为大容量数据存储场景设计，专注于"高容量、高可靠性、高扩展性"。它采用多盘位设计、RAID保护和智能管理，为企业提供安全、稳定、易于管理的存储解决方案，适用于数据备份、监控存储、媒体库和文件共享。',
                item5: '专为大容量数据存储场景设计，专注于"高容量、高可靠性、高扩展性"。它采用多盘位设计、RAID保护和智能管理，为企业提供安全、稳定、易于管理的存储解决方案，适用于数据备份、监控存储、媒体库和文件共享。',
                item6: '通用计算能力，适应多种场景。核心价值：2U标准机架式设计，平衡性能、可扩展性和成本效益。专为企业一般IT需求设计，可作为Web服务器、数据库服务器、虚拟化主机或文件服务器，是中小型企业IT架构的"核心算力平台"。',
                item7: '采用"轻量化、高性能、低功耗"设计理念，这款紧凑便携的迷你PC可灵活部署于云游戏、办公、教育和云终端等场景。瘦客户机迷你PC支持远程桌面连接和云资源访问，有效降低终端设备的采购和维护成本。同时，它提供出色的安全性和稳定性，为用户提供流畅的云办公和娱乐体验。'
            },
            storageChassisList: {
                item1: '1U存储服务器机箱',
                item2: '2U存储服务器机箱',
                item3: '4U存储服务器机箱'
            },
            industrialChassisList: {
                item1: '标准工控机箱',
                item2: '定制化工控机箱'
            },
            embeddedChassisList: {
                item1: '嵌入式机箱',
                item2: '小型化设计'
            },
            accessoriesList: {
                item1: '风扇模块',
                item2: '电源模块',
                item3: '扩展卡支架',
                item4: '其他配件'
            },
            // 产品详情
            serverChassisSeries: '服务器机箱系列',
            storageChassisSeries: '存储服务器机箱系列',
            industrialChassisSeries: '工业控制机箱',
            embeddedChassisSeries: '嵌入式机箱',
            // 产品规格标签
            specSize: '尺寸',
            specDriveBay: '硬盘位',
            specFan: '风扇',
            specPower: '电源',
            specExpansion: '扩展槽',
            specApplication: '应用',
            specMaterial: '材质',
            specProtection: '防护等级',
            // 产品规格值
            specValue1U: '标准1U高度',
            specValue2U: '标准2U高度',
            specValue3U: '标准3U高度',
            specValue4U: '标准4U高度',
            specValueDrive2_4: '2-4个',
            specValueDrive4_8: '4-8个',
            specValueDrive8_12: '8-12个',
            specValueDrive12_24: '12-24个',
            specValueFan40_60: '40mm/60mm',
            specValueFan80_92: '80mm/92mm',
            specValueFan80_120: '80mm/120mm',
            specValueFan120_140: '120mm/140mm',
            specValuePowerStandard: '标准ATX/冗余电源',
            specValueExpansion1_2: '1-2个PCIe',
            specValueExpansion2_4: '2-4个PCIe',
            specValueExpansion4_6: '4-6个PCIe',
            specValueExpansion6_8: '6-8个PCIe',
            specValueAppWeb: 'Web服务器、应用服务器',
            specValueAppDatabase: '数据库服务器、虚拟化服务器',
            specValueAppHPC: '高性能计算、存储服务器',
            specValueAppBigData: '大数据存储、高性能计算',
            specValueAppStorage: '高密度存储、NAS系统',
            specValueAppStorage2U: '大规模存储、数据中心',
            specValueAppStorage4U: '超大规模存储、企业级应用',
            specValueAppIndustrial: '工业自动化、智能制造',
            specValueAppEmbedded: '边缘计算、IoT设备',
            specValueMaterial: '优质钢板/铝合金',
            specValueProtection: 'IP65/IP67',
            specValueCompact: '紧凑型设计',
            specValueDrive2_5: '4-6个2.5寸',
            specValueDrive3_5: '12-24个3.5寸',
            specValueDrive4U: '36-48个3.5寸',
            specValueAppStorage2U: '企业级存储、备份系统',
            specValueAppStorage4U: '大规模数据存储、云存储',
            // 产品优势
            advantagesTitle: '核心优势',
            advantagesIntro: '我们致力于为客户提供高品质、高性能的硬件产品，满足不同应用场景的需求。',
            advantage1: '专业设计：采用先进的工业设计理念，优化散热和结构布局',
            advantage2: '优质材料：选用高品质钢材和铝合金，确保产品耐用性',
            advantage3: '精密制造：采用先进的加工工艺，保证产品精度和质量',
            advantage4: '灵活配置：支持多种主板规格和扩展卡配置',
            advantage5: '良好散热：优化的风道设计，确保系统稳定运行',
            advantage6: '快速交付：完善的供应链体系，保证及时交付',
            // 页脚
            footerResources: '资源',
            footerEcosystem: '生态系统'
        },
        // 研发实力
        researchStrength: {
            pageTitle: '研发实力 - PowerVerse Chain',
            title: '研发实力',
            description: '全产业链自研自产，掌握核心硬件技术',
            fullChain: '全产业链自研自产',
            fullChainDesc: 'PowerVerse全产业链高度垂直整合，持续创新，推动云游戏产品更快落地。我们掌握从硬件到软件、从网络到生态的完整产业链，构建"端到端的算力基础设施生态闭环"。',
            hardwareRnd: '硬件研发',
            hardwareRndDesc: '自研GPU硬件，近10年硬件研发经验，负责GPU硬件研发与生产管理，保障算力供应。构建"端到端的算力基础设施生态闭环"，优化性价比。',
            softwareArch: '软件架构',
            softwareArchDesc: '自研架构，突破游戏引擎与云原生架构的适配鸿沟，突破实时渲染与编码的技术瓶颈。云端数据打通、持续迭代平台化开发工具。',
            networkOpt: '网络优化',
            networkOptDesc: '低延迟传输算法 + 抗弱网策略算法，提升稳定性。5ms超低延迟，0丢包稳定连接，边缘节点将覆盖超30个省市。',
            aiOptimization: 'AI算力优化',
            aiOptimizationDesc: 'AI算力优化，精准感知决策分配。AI驱动的渲染增强算法，动态分辨率调整算法，分层编码算法，动态码率调整算法。',
            rndCapability: '研发能力',
            rndCapabilityDesc: '近10年硬件研发经验，负责GPU硬件研发与生产管理，保障算力供应。现专利数量：15+，团队人数：30+，研发占比：~40%。',
            coreAlgorithms: '核心技术算法',
            dynamicResolution: '动态分辨率调整算法',
            dynamicResolutionDesc: '根据网络状况动态调整分辨率，保证流畅体验',
            aiRender: 'AI驱动的渲染增强算法',
            aiRenderDesc: '利用AI技术提升渲染质量和效率',
            layeredEncoding: '分层编码算法',
            layeredEncodingDesc: '智能分层编码，优化传输效率',
            dynamicBitrate: '动态码率调整算法',
            dynamicBitrateDesc: '实时调整码率，适应网络变化',
            zeroCopy: '零拷贝编码流水线算法',
            zeroCopyDesc: '减少内存拷贝，提升编码性能',
            lowLatency: '低延迟传输算法',
            lowLatencyDesc: '优化传输路径，降低延迟',
            team: '研发团队',
            teamSize: '团队人数',
            rndRatio: '研发占比',
            patents: '现专利数量',
            experience: '硬件研发经验',
            experienceValue: '10年+',
            coreTeam: '核心团队成员',
            teamMember1: '夏秋 - 硬件研发负责人：',
            teamMember1Desc: '近10年硬件研发经验，负责GPU硬件研发与生产管理，保障算力供应',
            teamMember2: '王浩宇 - CEO：',
            teamMember2Desc: '8年以上行业经验，深耕Web3算力基建，整合硬件技术与运营商资源，7项相关专利，业内知名专家',
            vision: '未来愿景',
            visionTitle: '愿景：去中心化AI驱动的云游戏平台行业领导者',
            visionDesc: '掌握核心产业链+具有产品定义能力，是胜出的必经之路。未来会成为高毛利水平、高溢价能力、高市场占有率的行业绝对头部，让云游戏平台走进千家万户，用科技改变世界。'
        }
    },
    'zh-TW': {
        nav: {
            home: '首頁',
            product: '產品',
            scenario: {
                title: '應用場景',
                cloudgaming: '雲遊戲場景',
                computingexchange: '算力交易場景',
                rwa: 'RWA錢包場景',
                workflow: '全鏈路場景'
            },
            developer: '開發者中心',
            token: '代幣',
            about: '關於我們',
            whitepaper: '白皮書',
            hardwareFactory: '硬件工廠',
            researchStrength: '研發實力'
        },
        home: {
            title: 'PowerVerse Chain',
            subtitle: '去中心化計算網絡',
            description: '構建下一代分布式計算基礎設施，讓全球計算資源高效共享，賦能Web3生態發展',
            ios: 'iOS',
            android: 'Android'
        },
        architecture: {
            title: '技術框架',
            subtitle: '技術架構',
            appLayer: '應用層',
            protocolLayer: '協議層',
            networkLayer: '網絡層',
            dapp: '去中心化應用',
            api: '應用程式介面',
            rpc: '遠程程序調用服務',
            consensus: '共識機制',
            smartContract: '智能合約',
            crossChain: '跨鏈協議',
            p2p: '點對點網絡',
            nodeManagement: '節點管理',
            dataStorage: '數據存儲'
        },
        products: {
            title: '產品生態',
            description: '構建完整的去中心化計算生態系統',
            chain: {
                name: 'PowerVerse Chain',
                description: 'PoS共識且支持EVM的區塊鏈系統，便捷部署和運行DApp，為開發者提供友好的開發環境，降低開發門檻和成本',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse Chain - 技術簡介',
                subtitle: '技術簡介',
                intro: 'PowerVerse Chain 是一個基於區塊鏈的分布式賬本平台，通過去中心化網絡、智能合約與共識機制，為去中心化應用提供安全、高效的基礎設施。',
                architecture: {
                    title: '總體架構',
                    baseLayer: {
                        title: '基礎層',
                        p2p: {
                            label: 'P2P 網絡：',
                            desc: '節點直連，快速同步與高可用。'
                        },
                        database: {
                            label: '數據庫：',
                            desc: 'Merkle 樹存儲交易與狀態，數據可驗證。'
                        },
                        crypto: {
                            label: '密碼學算法：',
                            desc: '密鑰管理、數字簽名與哈希，保障安全。'
                        },
                        sharding: {
                            label: '分片優化：',
                            desc: '交易並行驗證，提升出塊效率。'
                        }
                    },
                    coreLayer: {
                        title: '核心層',
                        ledger: {
                            label: '分布式賬本：',
                            desc: '交易、區塊、交易池等核心數據。'
                        },
                        consensus: {
                            label: '共識機制：',
                            desc: 'POW+POS 混合共識，高效去中心化。'
                        },
                        smartContract: {
                            label: '智能合約：',
                            desc: '兼容 EVM，支持 Solidity 開發。'
                        }
                    },
                    appLayer: {
                        title: '應用層',
                        api: {
                            label: 'API 接口：',
                            desc: '提供 HTTP/TCP 接口與 RPC 服務，便於生態集成。'
                        },
                        dapp: {
                            label: 'DApp：',
                            desc: '支持開發各類去中心化應用，如 DeFi、DID 等。'
                        }
                    }
                },
                blockTransaction: {
                    title: '區塊與交易',
                    structure: {
                        title: '區塊結構',
                        header: {
                            title: '區塊頭',
                            desc: '包含父區塊哈希、時間戳、交易樹根哈希（TxRoot）等。'
                        },
                        body: {
                            title: '區塊體',
                            desc: '包含交易列表。'
                        },
                        note: '交易通過 Merkle 樹組織，TxRoot 用於快速驗證區塊完整性。'
                    },
                    process: {
                        title: '交易流程',
                        step1: '用戶構造並廣播交易。',
                        step2: '節點校驗交易後存入交易池。',
                        step3: '提案節點打包交易，生成區塊提案。',
                        step4: '交易由 EVM 執行，區塊進入共識流程。',
                        step5: '共識成功後區塊落盤，更新狀態並處理分叉。'
                    }
                },
                consensus: {
                    title: '共識機制：POW+POS 混合共識',
                    overview: {
                        title: '共識機制概述',
                        desc: 'PowerVerse Chain 採用 POW+POS 混合共識機制，結合工作量證明（Proof of Work）和權益證明（Proof of Stake）的優勢，在保證網絡安全性的同時提升交易處理效率。',
                        pow: {
                            title: '工作量證明（POW）',
                            label: '工作量證明（POW）：',
                            desc: '通過計算能力競爭來驗證交易和創建新區塊，確保網絡的安全性和去中心化特性。'
                        },
                        pos: {
                            title: '權益證明（POS）',
                            label: '權益證明（POS）：',
                            desc: '驗證者通過質押代幣參與網絡共識，質押數量越多，被選為驗證者的概率越高。'
                        }
                    },
                    workflow: {
                        title: '共識流程',
                        step1: 'POW 礦工通過算力競爭創建候選區塊，獲得區塊獎勵。',
                        step2: 'POS 驗證者通過質押代幣參與區塊驗證，確保交易合法性。',
                        step3: '驗證者進行投票，超過 2/3 驗證者同意的區塊被確認。',
                        step4: '確認的區塊被添加到區塊鏈，更新網絡狀態。'
                    },
                    staking: {
                        title: 'POS 質押機制',
                        intro: '權益證明（POS）質押是 PowerVerse Chain 網絡安全的核心機制，參考以太坊 2.0 的質押設計，為驗證者提供穩定的收益來源。',
                        minimum: {
                            title: '最低質押要求',
                            label: '最低質押要求：',
                            desc: '成為驗證者需質押最低數量代幣，經濟激勵與網絡安全對齊。'
                        },
                        rewards: {
                            title: '質押獎勵',
                            label: '質押獎勵：',
                            desc: '參與區塊驗證與共識投票獲得獎勵，獎勵率與質押總量及網絡活躍度相關。'
                        },
                        slashing: {
                            title: '懲罰機制',
                            label: '懲罰機制：',
                            desc: '惡意或長期離線將面臨質押罰沒，確保網絡安全。'
                        },
                        benefits: {
                            title: '質押優勢',
                            item1: '獲得穩定的質押收益，年化收益率根據網絡情況動態調整',
                            item2: '參與網絡治理，對協議升級和重要決策進行投票',
                            item3: '增強網絡安全性，質押代幣越多，網絡越安全',
                            item4: '支持委託質押，普通用戶可以將代幣委託給驗證者節點'
                        }
                    }
                },
                networkConfig: {
                    title: '網絡配置標準',
                    overview: {
                        title: '網絡參數配置',
                        desc: 'PowerVerse Chain 採用標準化的網絡配置，確保節點間的兼容性和網絡的穩定運行。'
                    },
                    blockParams: {
                        title: '區塊參數',
                        size: '區塊大小：最大 2MB',
                        interval: '出塊間隔：約 3 秒',
                        gasLimit: 'Gas 限制：每區塊 8,000,000 Gas'
                    },
                    consensusParams: {
                        title: '共識參數',
                        minStake: '最低質押：10,000 PEC',
                        epoch: 'Epoch 週期：100 個區塊',
                        finality: '最終確認：2/3 驗證者投票'
                    },
                    networkParams: {
                        title: '網絡參數',
                        chainId: 'Chain ID：主網 1001',
                        rpcPort: 'RPC 端口：8545',
                        p2pPort: 'P2P 端口：30303'
                    }
                },
                coin: {
                    title: 'PowerVerse Coin：生態核心資產',
                    totalSupply: '總發行量',
                    totalSupplyValue: '14億',
                    features: {
                        title: '主要功能',
                        staking: {
                            title: '質押維護網絡',
                            desc: '通過質押參與共識，獲得獎勵，增強網絡安全與穩定性。'
                        },
                        circulation: {
                            title: '生態流通與支付',
                            desc: '作為生態內價值交換媒介，用於開發激勵、服務支付與應用內交易。'
                        },
                        dao: {
                            title: 'DAO 治理',
                            desc: '持有者可參與 PowerVerse DAO 投票，共同決定協議升級、資金分配等重大決策。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '高性能共識機制，支持高TPS',
                    item2: '智能合約自動執行',
                    item3: '跨鏈互操作性',
                    item4: '完善的節點管理'
                }
            },
            infra: {
                name: 'PowerVerse Infra',
                description: '虛擬化層面提供卓越性能，實現資源高效利用和靈活分配，為上層應用和服務提供有力支撐',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse Infra - 去中心化物理基礎設施網絡（DePIN）起點',
                depinBadge: 'DePIN 的開始',
                subtitle: '去中心化物理基礎設施網絡（DePIN）起點',
                intro: 'PowerVerse Infra 是一個虛擬化軟件平台，基於軟件定義理念，整合並虛擬化管理多種芯片算力（包括 CPU、GPU、AI 芯片及量子芯片），將閒置算力轉化為可共享、可交易的數字資產，為用戶提供高效、多樣的算力獲取途徑。',
                section1: {
                    title: '一、核心設計：五大組件與九大服務',
                    components: {
                        title: '五大核心組件',
                        table: {
                            component: '組件',
                            function: '核心功能'
                        },
                        control: {
                            name: '控制組件',
                            desc: '架構核心，負責接收請求、資源分配與系統監控，包含虛擬化、網絡、鏡像等服務。'
                        },
                        compute: {
                            name: '計算組件',
                            desc: '計算資源提供者，運行虛擬機實例並處理計算任務。'
                        },
                        storage: {
                            name: '存儲組件',
                            desc: '支持塊存儲與對象存儲，負責數據與鏡像的存儲。'
                        },
                        network: {
                            name: '網絡組件',
                            desc: '管理虛擬網絡、子網、路由等，實現虛擬機通信、網絡隔離與安全。'
                        },
                        interface: {
                            name: '接口服務',
                            desc: '提供 RESTful API，實現各組件間的通信與交互。'
                        }
                    },
                    services: {
                        title: '九大關鍵服務模塊',
                        virtualization: {
                            title: '核心虛擬化',
                            desc: '管理虛擬機全生命週期（創建、掛起、調整、銷毀），配置 CPU、GPU、內存等資源。'
                        },
                        network: {
                            title: '網絡虛擬化',
                            desc: '提供網絡虛擬化技術與連接服務。'
                        },
                        image: {
                            title: '鏡像服務',
                            desc: '支持多種鏡像格式，實現鏡像的上傳、刪除與信息編輯。'
                        },
                        blockStorage: {
                            title: '塊存儲',
                            desc: '為虛擬機提供穩定的數據塊存儲服務。'
                        },
                        objectStorage: {
                            title: '對象存儲',
                            desc: '通過冗餘與容錯機制實現可擴展的對象存儲，支持文件存取與持久化存儲。'
                        },
                        monitoring: {
                            title: '監測服務',
                            desc: '為計費、監控及其他服務提供統計數據支撐。'
                        },
                        permission: {
                            title: '權限服務',
                            desc: '基於 PowerVerse Chain 的 DID 服務，提供身份驗證、規則管理與令牌服務。'
                        },
                        orchestration: {
                            title: '編排服務',
                            desc: '通過模板實現 DeCloud 基礎設施的自動化部署。'
                        },
                        management: {
                            title: '管理',
                            desc: '提供各類服務的 Web 管理界面。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '智能資源調度算法',
                    item2: '實時監控與告警',
                    item3: '彈性擴容能力',
                    item4: '多地域部署支持'
                },
                section2: {
                    title: '二、虛擬化方案：Type1 與 Type2',
                    type1: {
                        title: 'Type1（裸金屬）',
                        badge: '高性能方案',
                        arch: {
                            label: '架構特點：',
                            desc: '直接運行於硬件之上，無宿主操作系統，資源利用高效。'
                        },
                        performance: {
                            label: '性能表現：',
                            desc: '低延遲、高吞吐量，精準控制硬件資源，優化網絡與存儲 I/O。'
                        },
                        scenario: {
                            label: '適用場景：',
                            desc: '大規模數據運算、高負載企業級應用、高性能計算。'
                        }
                    },
                    type2: {
                        title: 'Type2',
                        badge: '靈活方案',
                        arch: {
                            label: '架構特點：',
                            desc: '運行於宿主操作系統之上，依賴宿主機管理資源。'
                        },
                        performance: {
                            label: '性能表現：',
                            desc: '受宿主機資源競爭影響，可能在高強度任務中出現性能瓶頸。'
                        },
                        scenario: {
                            label: '適用場景：',
                            desc: '個人開發、小型應用、快速部署與測試環境。'
                        }
                    }
                },
                section3: {
                    title: '三、與 PowerVerse Chain 的協作',
                    did: {
                        title: '1. 基於 DID 的虛擬機權限服務',
                        item1: '為每個用戶與虛擬機創建唯一去中心化身份（DID），關聯歷史行為與信用數據。',
                        item2: '通過區塊鏈共識驗證身份，無需中心化機構，確保公正、安全、不可篡改。',
                        item3: '在算力租用中，雙方可互相驗證信用與支付能力，構建透明可信的交易環境。'
                    },
                    smartContract: {
                        title: '2. 智能合約驅動的算力交易聚合器（PowerVerse Market）',
                        item1: '買賣雙方直接達成意向，通過智能合約自動執行租賃、結算與存證。',
                        item2: '去除人工協商與第三方中介，實現高效、透明、低成本的算力交易。'
                    }
                },
                section4: {
                    title: '四、功能特性',
                    chipCompatibility: {
                        title: '廣泛的芯片兼容性',
                        desc: '全面支持 CPU、GPU、AI 算力芯片及量子芯片，滿足多樣化計算需求，最大化利用閒置算力。'
                    },
                    quantum: {
                        title: '前瞻性量子計算支持',
                        desc: '已開展量子芯片虛擬化技術儲備，提供量子比特抽象模型與模擬接口，支持量子算法實驗。'
                    },
                    security: {
                        title: '高度安全與信任保障',
                        desc: '結合 DID 身份管理、智能合約自動執行與區塊鏈不可篡改存證，構建公正透明的可信生態。'
                    },
                    scheduling: {
                        title: '高效資源利用與動態調度',
                        desc: '根據虛擬機實時負載自動調整算力分配，避免資源浪費與過載，提升利用效率並降低成本。'
                    }
                }
            },
            market: {
                name: 'PowerVerse Market',
                description: '去中心化算力資源交易市場，優化算力資源配置，連接供需雙方；同時提供模型與數據市場，促進知識和技術共享',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse Market - 去中心化算力交易平台',
                subtitle: '去中心化算力交易平台',
                intro: 'PowerVerse Market 是基於 PowerVerse Chain 與 PowerVerse Infra 構建的去中心化算力交易平台。它通過智能合約與區塊鏈技術連接算力供應方與需求方，實現自動化、透明化、無需信任第三方的算力資源交易。',
                section1: {
                    title: '一、平台核心功能',
                    function1: {
                        title: '1. 算力資源管理',
                        item1: '供應方發布算力資源信息（CPU/GPU/存儲等），設定價格、可用時間等參數',
                        item2: '資源信息可實時更新，靈活適應市場變化'
                    },
                    function2: {
                        title: '2. 算力需求單管理',
                        item1: '需求方提交算力需求訂單，指定類型、數量、時長、預算等',
                        item2: '平台自動匹配資源，供應方也可主動接單'
                    },
                    function3: {
                        title: '3. 交易執行與監控',
                        item1: '智能合約自動執行算力供應與費用結算',
                        item2: '需求方可實時監控算力使用與任務進度，異常情況自動通知'
                    },
                    function4: {
                        title: '4. 數據統計與分析',
                        item1: '提供交易歷史、資源分佈、價格趨勢等數據分析',
                        item2: '幫助用戶制定交易策略，優化資源利用率與收益'
                    },
                    function5: {
                        title: '5. 用戶評價與信譽體系',
                        item1: '交易雙方互評，評價計入信譽體系',
                        item2: '信譽影響交易權限與優先級，激勵誠信交易'
                    }
                },
                section2: {
                    title: '二、平台角色',
                    table: {
                        role: '角色',
                        responsibility: '職責與權益'
                    },
                    role1: {
                        name: '算力供應方',
                        desc: '將虛擬化算力資源註冊發布至平台，獲取租金與代幣分紅。'
                    },
                    role2: {
                        name: '算力需求方',
                        desc: '租賃算力資源用於應用構建、挖礦、模型訓練等，也可發布需求單等待匹配。'
                    },
                    role3: {
                        name: '管理員',
                        desc: '維護市場秩序，對不誠實用戶執行凍結、列入黑名單等操作。'
                    },
                    role4: {
                        name: '仲裁委員會',
                        desc: '處理交易爭議，判定過失方與補償方案，或提交 DAO 組織投票裁決。'
                    }
                },
                section3: {
                    title: '三、算力資源發布流程',
                    step1: {
                        label: '虛擬化：',
                        desc: '通過 PowerVerse Infra 將本地閒置算力虛擬化為獨立虛擬機。'
                    },
                    step2: {
                        label: '註冊：',
                        desc: '向平台註冊虛擬資源，提交詳細技術參數（CPU/GPU/內存/存儲等），平台驗證真實性。'
                    },
                    step3: {
                        label: '計分：',
                        desc: '平台通過加權參數計算資源性能得分。'
                    },
                    step4: {
                        label: 'NFT 憑證發放：',
                        desc: '為每個算力資源生成唯一 NFT，記錄所有權、性能、狀態等信息。'
                    },
                    step5: {
                        label: '上架：',
                        desc: '資源上架至平台列表，供需求方查詢與租賃。'
                    }
                },
                section4: {
                    title: '四、交易模式',
                    mode1: {
                        title: '1. 直接租賃交易',
                        step1: '需求方選擇資源',
                        step2: '支付 PowerVerse Coin',
                        step3: '使用資源',
                        step4: '平台監測',
                        step5: '到期結算',
                        step6: '雙方互評'
                    },
                    mode2: {
                        title: '2. 任務式需求單',
                        step1: '需求方發布任務（含需求、價格、驗收方式等）',
                        step2: '供應方承接',
                        step3: '執行任務',
                        step4: '提交成果',
                        step5: '驗收後結算',
                        step6: '雙方互評'
                    }
                },
                section5: {
                    title: '五、平台特性',
                    feature1: {
                        title: '去中心化',
                        desc: '點對點交易，無中介，降低成本，提升透明度與公正性。'
                    },
                    feature2: {
                        title: '安全性',
                        desc: '數據加密、智能合約審計、區塊鏈不可篡改，保障交易隱私與可靠。'
                    },
                    feature3: {
                        title: '可擴展性',
                        desc: '支持多種算力資源接入，架構可靈活擴展，適應未來業務增長。'
                    }
                }
            },
            dao: {
                name: 'PowerVerse DAO',
                description: '去中心化自治組織，讓社區成員參與生態系統治理和決策，充分發揮社區智慧和力量，實現生態系統自我發展和完善',
                learnMore: '了解更多',
                pageTitle: 'PowerVerse DAO - 去中心化自治組織',
                subtitle: '去中心化自治組織',
                slogan: '共建、共治、共享——PowerVerse 生態的治理核心',
                intro: 'PowerVerse DAO 是基於 PowerVerse Chain 構建的去中心化自治組織，旨在通過社區集體決策與治理，推動 PowerVerse 生態的公平、透明與可持續發展。',
                section1: {
                    title: '一、DAO 工作流程',
                    step1: {
                        title: '1. 提案與發起',
                        memberProposal: {
                            label: '成員提案：',
                            desc: '任何社區成員均可提交發展提案（技術改進、市場活動、合作機會等），需包含背景、目標、計劃、預算等詳細信息。'
                        },
                        review: {
                            label: '提案審核：',
                            desc: '由社區選舉產生的審核委員會評估提案可行性、創新性及生態價值，通過後進入投票環節。'
                        }
                    },
                    step2: {
                        title: '2. 社區投票決策',
                        votingStart: {
                            label: '投票啟動：',
                            desc: '通過審核的提案進入社區投票。代幣持有者可在規定期限內投票表決。'
                        },
                        execution: {
                            label: '結果執行：',
                            desc: '達到設定贊成比例後提案通過，由項目執行團隊按計劃推動實施，並定期向社區匯報進度。'
                        }
                    },
                    step3: {
                        title: '3. 實施與監督',
                        teamBuilding: {
                            label: '團隊組建：',
                            desc: '通過自願或招聘組建項目執行團隊，負責任務分配、進度跟踪與質量控制。'
                        },
                        supervision: {
                            label: '監督評估：',
                            desc: '社區可實時通過鏈上信息監督進展。項目監督小組定期檢查，確保符合提案標準，必要時可提出整改或暫停建議。'
                        }
                    },
                    step4: {
                        title: '4. 成果與反饋',
                        acceptance: {
                            label: '驗收與分享：',
                            desc: '項目完成後由監督小組驗收，成果向社區公示（經濟效益、技術創新等）。'
                        },
                        summary: {
                            label: '經驗總結：',
                            desc: '總結項目經驗並反饋至社區，用於優化 DAO 發展戰略與運營機制。'
                        }
                    }
                },
                section2: {
                    title: '二、核心特點',
                    feature1: {
                        title: '1. 去中心化治理',
                        decentralization: {
                            label: '權力下放：',
                            desc: '通過鏈上投票，社區成員直接參與重大決策（方向、資金、規則等），實現民主治理。'
                        },
                        transparency: {
                            label: '透明可追溯：',
                            desc: '所有決策與交易記錄於區塊鏈，完全公開可查，增強信任與監督。'
                        }
                    },
                    feature2: {
                        title: '2. 社區驅動發展',
                        participation: {
                            label: '廣泛參與：',
                            desc: '鼓勵成員參與技術、市場、運營等活動，通過代幣獎勵、榮譽表彰等機制激發貢獻。'
                        },
                        diversity: {
                            label: '成員多元化：',
                            desc: '匯聚技術專家、行業從業者、投資者、法律等多領域人才，為生態提供全方位支持。'
                        }
                    },
                    feature3: {
                        title: '3. 創新經濟模型',
                        tokenEconomy: {
                            label: '代幣經濟：',
                            desc: '以 PowerVerse Coin 作為治理與激勵工具，持有者通過參與治理獲得獎勵，實現利益與生態綁定。'
                        },
                        valueSharing: {
                            label: '價值共享：',
                            desc: '生態成長帶來的價值通過代幣捕獲與分配，使持有者共享發展紅利，增強代幣吸引力與生態基礎。'
                        }
                    }
                }
            },
            decloud: {
                name: 'DeCloud',
                description: '去中心化雲服務大生態，提供SDK開發工具、Web3.0支持、元宇宙基礎、SaaS服務，覆蓋電競、遊戲、企業協作等多個行業場景',
                learnMore: '了解更多',
                pageTitle: 'DeCloud - Web3.0 去中心化算力雲平台',
                subtitle: 'Web3.0 去中心化算力雲平台',
                intro: 'DeCloud 整合 PowerVerse Chain、PowerVerse Infra 與 PowerVerse Market，構建了一個開放、高效、安全、可擴展的去中心化算力雲平台。它通過資源最優配置，支持從企業級大規模計算到個人開發者項目的多樣化算力需求，重塑算力分配與使用模式。',
                section1: {
                    title: '一、更智能的 DePIN 基礎設施',
                    table: {
                        tech: '技術',
                        capability: '核心能力',
                        value: '應用價值'
                    },
                    ipfs: {
                        tech: 'IPFS 去中心化存儲',
                        capability: 'AI 模型訓練數據與 DApp 數據分散存儲於多節點。',
                        value: '提升數據安全與可靠性，防止單點故障與洩露，降低成本、提高效率。'
                    },
                    edge: {
                        tech: '地理位置感知的邊緣計算',
                        capability: '將計算任務分配至靠近數據源或用戶的邊緣節點。',
                        value: '降低延遲、提升實時響應，適用於智能交通、工業自動化等場景，優化網絡性能。'
                    },
                    routing: {
                        tech: '多圖拓撲路由網絡',
                        capability: '根據任務特性與資源可用性動態選擇最優計算路徑與資源分配。',
                        value: '實現任務高效執行與資源合理利用，提升平台計算性能與穩定性。'
                    }
                },
                section2: {
                    title: '二、更安全高效的 AI 支持',
                    table: {
                        solution: '技術方案',
                        coreTech: '核心技術',
                        value: '應用場景與價值'
                    },
                    privacy: {
                        solution: '隱私計算',
                        coreTech: '結合同態加密與聯邦學習，實現推理訓練與模型數據分離。',
                        value: '保障數據隱私，支持醫療、金融等高敏感領域安全進行 AI 訓練與優化。'
                    },
                    gpu: {
                        solution: 'GPU 並行訓練',
                        coreTech: '提供強大 GPU 並行計算支持，配合優化調度與資源管理機制。',
                        value: '加速大規模 AI 模型訓練，縮短訓練時間，助力 AI 研發與行業智能化轉型。'
                    }
                },
                section3: {
                    title: '三、更豐富的 PowerVerse Market 元素',
                    marketType: '市場板塊',
                    market1: {
                        title: 'AI 數據集與模型市場',
                        content: {
                            label: '主要內容：',
                            desc: '提供高質量數據集與預訓練模型，支持用戶交易與共享。'
                        },
                        value: {
                            label: '生態價值：',
                            desc: '促進 AI 資源流通與復用，降低開發門檻，加速 AI 創新與應用普及。'
                        }
                    },
                    market2: {
                        title: 'Agent 與 DApp 市場',
                        content: {
                            label: '主要內容：',
                            desc: '開發者可發布並交易智能 Agent 與 DApp。'
                        },
                        value: {
                            label: '生態價值：',
                            desc: '為開發者提供商業變現渠道，豐富平台應用生態，滿足用戶個性化需求。'
                        }
                    }
                },
                section4: {
                    title: '四、更全面的生態打造',
                    sdk: {
                        title: 'SDK 支持',
                        function: {
                            label: '功能說明：',
                            desc: '提供多語言、多框架 SDK，便於集成 DeCloud 算力資源。'
                        },
                        value: {
                            label: '開發者與用戶價值：',
                            desc: '降低開發難度，提升開發效率，吸引更多開發者加入生態。'
                        }
                    },
                    cdn: {
                        title: '去中心化 CDN',
                        function: {
                            label: '功能說明：',
                            desc: '通過全球節點分發 DApp 內容。'
                        },
                        value: {
                            label: '開發者與用戶價值：',
                            desc: '提升 DApp 訪問速度、穩定性與抗攻擊性，優化用戶體驗。'
                        }
                    },
                    dataSpace: {
                        title: '數據空間',
                        function: {
                            label: '功能說明：',
                            desc: '提供安全、高效的去中心化數據管理與共享方案。'
                        },
                        value: {
                            label: '開發者與用戶價值：',
                            desc: '滿足企業與個人對數據資產化的需求，支持數據價值流轉。'
                        }
                    },
                    metaverse: {
                        title: '元宇宙等前沿支持',
                        function: {
                            label: '功能說明：',
                            desc: '為虛擬場景渲染、實時交互提供強大算力基礎。'
                        },
                        value: {
                            label: '開發者與用戶價值：',
                            desc: '賦能沉浸式元宇宙體驗，拓展數字生態邊界。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '分布式存儲系統',
                    item2: '數據加密保護',
                    item3: '邊緣計算支持',
                    item4: 'API接口豐富'
                }
            },
            wallet: {
                name: 'PowerVerse Wallet',
                description: '安全、便捷的數字資產錢包，支持多鏈資產管理、DeFi交互和NFT收藏，為用戶提供一站式的Web3資產管理體驗',
                learnMore: '了解更多',
                pageTitle: 'Wallet - 數字資產錢包',
                subtitle: '數字資產錢包',
                intro: 'PowerVerse Wallet 是一款安全、易用的多鏈數字資產錢包，支持 PowerVerse Chain 及主流公鏈，為用戶提供資產管理、DeFi 交互、NFT 收藏等全方位服務。',
                section1: {
                    title: '一、核心功能',
                    feature1: {
                        title: '1. 多鏈資產管理',
                        desc: '支持 PowerVerse Chain、Ethereum、BSC 等多條公鏈，統一管理各類數字資產，包括 PEC、ETH、BNB 等主流代幣。'
                    },
                    feature2: {
                        title: '2. 安全存儲',
                        desc: '採用硬件加密和多重簽名技術，私鑰本地加密存儲，支持助記詞備份，確保資產安全。'
                    },
                    feature3: {
                        title: '3. DeFi 交互',
                        desc: '內置 DApp 瀏覽器，支持一鍵連接 DeFi 協議，便捷進行流動性挖礦、質押、借貸等操作。'
                    },
                    feature4: {
                        title: '4. NFT 管理',
                        desc: '支持 NFT 的查看、轉賬、展示，輕鬆管理您的數字收藏品。'
                    }
                },
                section2: {
                    title: '二、全球支付功能',
                    globalPayment: {
                        title: '全球支付能力',
                        desc: 'PowerVerse Wallet 支持全球範圍內的數字資產支付，無論您身在何處，都能快速、安全地完成跨境支付。支持多種支付方式，包括掃碼支付、NFC 近場支付、在線支付等，讓數字資產真正成為全球通用的支付工具。',
                        item1: '支持全球 200+ 國家和地區的支付網絡',
                        item2: '實時匯率轉換，自動計算最優支付路徑',
                        item3: '低手續費，相比傳統跨境支付節省 80% 以上成本',
                        item4: '秒級到賬，無需等待銀行工作日'
                    }
                },
                section3: {
                    title: '三、DEX 交易功能',
                    dexTrading: {
                        title: '去中心化交易所集成',
                        desc: 'PowerVerse Wallet 內置去中心化交易所（DEX）功能，無需離開錢包即可完成代幣交易。支持多種交易對，提供最優價格路由，確保用戶獲得最佳交易體驗。',
                        item1: '集成多個主流 DEX，自動尋找最優價格',
                        item2: '支持限價單、市價單等多種訂單類型',
                        item3: '實時價格監控和交易提醒',
                        item4: '交易歷史記錄和收益分析'
                    }
                },
                section4: {
                    title: '四、雲遊戲全場景貫通',
                    cloudGaming: {
                        title: '無縫遊戲體驗',
                        desc: 'PowerVerse Wallet 深度集成雲遊戲生態，實現遊戲內資產、道具、NFT 的統一管理。玩家可以使用錢包直接登錄遊戲，使用代幣購買遊戲道具，交易遊戲內 NFT，真正實現 Web3 遊戲的全場景貫通。',
                        item1: '一鍵登錄雲遊戲平台，無需重複註冊',
                        item2: '遊戲內資產實時同步，支持跨遊戲資產轉移',
                        item3: '遊戲道具 NFT 化，可在二級市場自由交易',
                        item4: '遊戲收益自動結算到錢包，支持提現和再投資'
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '多鏈支持',
                    item1Desc: '支持 PowerVerse Chain、Ethereum、BSC 等多條主流公鏈',
                    item2: '安全可靠',
                    item2Desc: '硬件加密、多重簽名、助記詞備份，全方位保障資產安全',
                    item3: 'DeFi集成',
                    item3Desc: '內置 DApp 瀏覽器，無縫連接 DeFi 生態',
                    item4: 'NFT管理',
                    item4Desc: '完整的 NFT 查看、轉賬、展示功能'
                }
            },
            scan: {
                name: 'PowerVerse Scan',
                description: '區塊鏈瀏覽器，提供鏈上數據查詢、交易追蹤、地址分析等功能，讓鏈上活動透明可查',
                learnMore: '了解更多',
                pageTitle: 'Scan - 區塊鏈瀏覽器',
                subtitle: '區塊鏈瀏覽器',
                intro: 'PowerVerse Scan 是 PowerVerse Chain 的官方區塊鏈瀏覽器，提供完整的鏈上數據查詢與分析服務，讓用戶輕鬆追蹤交易、查看區塊、分析地址，實現鏈上活動的透明化。',
                section1: {
                    title: '一、核心功能',
                    feature1: {
                        title: '1. 區塊查詢',
                        desc: '實時查看最新區塊信息，包括區塊高度、時間戳、交易數量、Gas 使用等詳細數據。'
                    },
                    feature2: {
                        title: '2. 交易追蹤',
                        desc: '通過交易哈希快速查詢交易詳情，包括發送方、接收方、金額、Gas 費用、交易狀態等。'
                    },
                    feature3: {
                        title: '3. 地址分析',
                        desc: '查看任意地址的餘額、交易歷史、代幣持有情況、合約交互記錄等，全面了解地址活動。'
                    },
                    feature4: {
                        title: '4. 智能合約查詢',
                        desc: '查看智能合約的代碼、ABI、調用記錄、事件日誌等，便於開發者調試和用戶驗證。'
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '實時數據',
                    item1Desc: '實時同步鏈上數據，確保信息的準確性和時效性',
                    item2: '交易追蹤',
                    item2Desc: '完整的交易歷史記錄，支持多維度查詢和篩選',
                    item3: '地址分析',
                    item3Desc: '深度分析地址活動，提供可視化數據展示',
                    item4: '合約查詢',
                    item4Desc: '完整的智能合約信息，支持代碼驗證和調用分析'
                }
            },
            computingPort: {
                name: '算力港',
                description: '基於PowerVerse Chain的去中心化智算平台，匯聚全球閒置GPU/CPU資源，實現算力資產的通證化、標準化和可信交易',
                learnMore: '了解更多',
                pageTitle: '算力港 - 去中心化智算平台',
                subtitle: '去中心化智算平台',
                intro: '算力港（XAI Center）是基於 PowerVerse Chain 構建的去中心化智算平台，致力於匯聚全球閒置 GPU/CPU 資源，通過區塊鏈技術實現算力資產的通證化、標準化和可信交易。',
                section1: {
                    title: '一、核心功能',
                    feature1: {
                        title: '1. 算力切分與算力池化',
                        desc: '在計算顆粒度層面，平台的多種能力有效保證隔離性和安全性，輕鬆應對不同顆粒度的算力資源需求。',
                        item1: '顯卡多實例運行：提升單個GPU的利用效率',
                        item2: '顯卡直通技術：確保高性能計算任務的無縫對接',
                        item3: '多節點並行計算：將算力擴展至前所未有的高度，滿足大規模計算需求',
                        detail: '基於容器技術，結合PowerVerse Infra驅動層級的攔截技術，實現多品牌GPU單卡的靈活分配與顯存切分。用戶可以根據實際需求，自定義計算規格與切分規格，輕鬆實現共享算力與顯存切片管理。支持用戶輕鬆組建公共算力池或專屬算力池，無論是面向團隊內部資源共享，還是保障特定項目的獨立算力需求，都能靈活應對，支持多種調度方式，批量調度、優先級調度以及搶佔式調度。'
                    },
                    feature2: {
                        title: '2. 數據平台',
                        desc: '提供統一的、多元的數據存儲、數據管理、彈性伸縮的存儲服務，通過容器環境自動掛載存儲目錄。',
                        item1: '無縫集成，自動為用戶提供公共存儲服務，提供共享數據控制、租戶級隔離、並行讀寫控制、SFTP支持等能力',
                        item2: '提供直觀易用的可視化頁面，用戶可在線申請與查看、頁面上傳下載，輕鬆管理資源',
                        item3: '支持按需擴容縮容，用戶可根據業務需求靈活調整存儲容量，無需擔心存儲空間不足或資源浪費的問題'
                    },
                    feature3: {
                        title: '3. 模型訓推全生命週期',
                        desc: '提供從模型開發、模型訓練、模型部署、模型推理到模型優化等一系列工作的全生命週期支持。',
                        devTitle: '開發環境服務',
                        dev1: '在線秒級創建開發環境，可按CPU核心、內存、GPU型號、數量、系統盤等創建開發機',
                        dev2: '支持無卡開機、關機、在線開發Jupyter、Python、VScode、保存鏡像',
                        dev3: '支持定時關機、定時釋放等資源回收策略',
                        trainTitle: '分佈式訓練服務',
                        trainDesc: '用戶可啟動訓練任務、微調服務進行模型的調整以增加更多精細業務場景的訓練，支持多模態訓練、預訓練DLC、SFT精調等',
                        evalTitle: '模型效果評估',
                        evalDesc: '根據測試數據集測試大模型的表現、效率和適用性，可根據性能指標、泛化能力、推理速度和延遲、資源消耗、可解釋性、可擴展性、模型大小、數據依賴性等方面進行評估。',
                        inferTitle: '在線推理',
                        infer1: '無縫部署與定制化選擇：簡化部署流程，實現真正的"一鍵部署"體驗，在模型廣場直接部署模型；同時也支持上傳私有模型，並通過公共鏡像、自定義推理鏡像或指定鏡像地址進行靈活部署',
                        infer2: '全生命週期管理與彈性資源調度：提供在線推理服務實例的全生命週期管理，包括實例的即時擴容、縮容操作，確保服務隨業務需求平滑擴展。實時監控推理實例的運行狀態，以及提供日誌檢索查詢功能',
                        optTitle: '模型優化',
                        optDesc: '提供專業的模型調優服務，通過模型評估機制，幫助用戶科學對比模型效果，確保模型選擇與業務需求的精準匹配。同時，不斷探索推理加速技術，致力於在保持模型精度的同時，大幅提升推理速度。'
                    },
                    feature4: {
                        title: '4. 智能監控與故障自愈',
                        desc: '基於PowerVerse Infra的監控管理服務，提供可視化的監控數據、可配置的告警服務、自動化的故障處理，簡化運維，實現服務運維智能化。',
                        monitorTitle: '智能監控與多維度資源可視化',
                        monitorDesc: '通過統一運維管理平台，實現了對計算資源、存儲資源及網絡資源等關鍵運維要素的規範化、可視化管理。監控維度廣泛，支持基於計算節點、GPU卡、容器三個維度多指標監控，支持CPU利用率、內存利用率、GPU利用率、GPU顯存利用率、網絡效率監控，支持計算過程中的NVLink監控、TensorCore監控。',
                        alertTitle: '告警配置與通知',
                        alertDesc: '支持用戶根據業務需求自定義告警規則組，包括但不限於資源閾值告警、性能異常告警等。一旦觸發告警條件，系統將立即生成告警記錄，並通過webhook、電子郵件等多種渠道向指定接收人發送告警通知。',
                        faultTitle: '故障檢測與修復',
                        faultDesc: '自動檢測集群中的潛在故障，如硬件故障、軟件異常或資源瓶頸等。一旦檢測到故障，系統將迅速啟動自愈機制：',
                        fault1: '故障隔離：將受影響的節點或GPU卡標記為「污點」，自動阻止新的任務調度到這些資源上，防止故障擴散',
                        fault2: '任務遷移與重試：自動遷移正在該節點上執行的任務到其他健康節點，並嘗試重新執行失敗的任務，確保業務連續性',
                        fault3: '節點重啟與檢測：針對可重啟恢復的臨時故障，自動重啟節點並驗證服務狀態，驗證通過後，節點自動回歸計算隊列',
                        fault4: '下線維修與恢復：針對無法自動修復的故障，系統自動下線節點/GPU卡，並通知相關運維人員，修復驗證後，自動恢復資源至計算隊列'
                    },
                    feature5: {
                        title: '5. 邊緣計算',
                        desc: '提供邊緣計算能力，構建一個高度可擴展、開放且智能的雲邊協同基礎設施平台，精準擊破邊緣計算場景下的多重難題，實現邊緣計算與AI場景化應用的深度融合。',
                        item1: '用戶自助服務優化：提供用戶自助服務能力，涵蓋賬戶快速創建至資源申請、一鍵開通、便捷使用及自動釋放的全流程優化，用戶可根據需求選擇共享資源按任務卡時計費或專屬資源按配置計費',
                        item2: '系統管理與多租戶支持：支持多租戶資源與業務隔離，確保各租戶業務互不干擾，支持子賬號與精細化的角色權限管理',
                        item3: '定價與計費：通過直觀易懂的可視化頁面，構建全面且靈活的定價策略，涵蓋枚舉、線性、階梯等多種定價方式，滿足不同用戶的成本偏好與實際使用場景',
                        item4: '客戶運營：實現全生命週期客戶管理，全面收集並分析客戶數據，覆蓋註冊、認證、充值、消費各環節，為精準營銷與個性化服務奠定堅實基礎'
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '算力池化',
                    item1Desc: '靈活的算力切分與池化管理，支持公共和專屬算力池',
                    item2: '模型訓推',
                    item2Desc: '完整的AI模型開發、訓練、部署、推理全生命週期支持',
                    item3: '智能監控',
                    item3Desc: '自動化故障檢測與自愈機制，保障服務穩定運行',
                    item4: '數據平台',
                    item4Desc: '統一的數據存儲與管理服務，支持彈性伸縮'
                }
            },
            xaiToken: {
                name: 'RWA代幣 XAI',
                description: 'XRWA AI生態的核心功能通證與價值儲備代幣，承擔收益分配、服務支付與生態治理三大職能，連接實體算力與鏈上金融',
                learnMore: '了解更多',
                pageTitle: 'RWA代幣 XAI - 生態核心通證',
                subtitle: '生態核心通證',
                intro: 'XAI 是 XRWA AI 生態內的核心功能通證與價值儲備代幣，基於 ERC-3643 標準開發，承擔生態價值流轉媒介、收益分配工具、服務支付憑證三大核心職能。',
                section1: {
                    title: '一、核心職能',
                    feature1: {
                        title: '1. 生態收益分配的唯一支付工具',
                        desc: 'GNFT 與 GUnit 持有者的生態收益均以 XAI 形式發放，這一設計將資產與 XAI 價值深度綁定，確保代幣持有者獲得算力資產產生的收益分紅。',
                        gnftDesc: 'GNFT 是 XRWA 生態中物理 GPU 資產的鏈上唯一確權憑證，基於 ERC-721 標準開發，具備不可分割、不可替代、唯一標識的技術屬性。每一枚 GNFT 對應現實世界中一台經過硬件驗證、性能測評的 GPU 設備，實現物理資產與鏈上資產的 1:1 錨定。',
                        gunitDesc: 'GUnit 是基於 GNFT 拆分生成通證，遵循 ERC-3643 標準，具備可分割、可替代、標準化的技術屬性，同時也集成了 KYC/AML 相關信息。每一枚 GUnit 對應 GNFT 底層 GPU 資產的單位算力份額。',
                        xaiDesc: 'XAI 作為收益分配的唯一支付工具，將 GNFT 和 GUnit 持有者的收益與 XAI 價值深度綁定，形成穩定的價值循環。'
                    },
                    feature2: {
                        title: '2. AI生態服務的強制支付憑證',
                        desc: '在 XRWA 的 AI 應用生態中，XAI 是唯一的服務支付工具，覆蓋所有算力與 AI 相關服務場景，構建了 XAI 的剛性需求，推動代幣價值提升。',
                        intro: 'XAI 覆蓋 XRWA 生態的 AI 全場景交互，是連接資產端與應用端的價值橋樑。在算力港（XAI Center）平台中，所有算力服務、模型訓練、推理服務、數據存儲等服務的支付均使用 XAI 代幣，形成剛性的支付需求。',
                        usage: '這一「強制支付」機制構建了 XAI 的剛性需求，XAI 的使用場景與需求量將同步增長，進而推動代幣價值提升。隨著生態規模的擴大，XAI 的支付場景將不斷擴展，包括：',
                        service1: '算力租賃與購買服務',
                        service2: 'AI 模型訓練與推理服務',
                        service3: '數據存儲與管理服務',
                        service4: 'Agent 應用開發與部署服務'
                    },
                    feature3: {
                        title: '3. 生態治理與節點激勵的核心代幣',
                        desc: 'XAI 持有者具備生態治理權，可通過鏈上投票參與 XRWA 生態的關鍵決策，核心角色需質押 XAI 獲得節點資格，通過質押懲罰機制保障生態節點的合規性與可靠性。',
                        governanceTitle: '治理參與',
                        governanceIntro: 'XAI 持有者具備生態治理權，可通過鏈上投票參與 XRWA 生態的關鍵決策，包括：',
                        gov1: '協議升級與功能改進提案',
                        gov2: '資產配置與運營策略調整',
                        gov3: '收益分配機制優化',
                        gov4: '生態合作夥伴選擇',
                        stakingTitle: '節點質押',
                        stakingIntro: 'XRWA 生態的核心角色，需質押一定數量的 XAI 方可獲得節點資格，並通過「質押懲罰」機制保障生態節點的合規性與可靠性。質押機制包括：',
                        stake1: '最低質押要求：成為驗證者需要質押最低數量的 XAI',
                        stake2: '質押獎勵：驗證者根據質押量和在線時間獲得區塊獎勵和交易費用',
                        stake3: '懲罰機制：惡意行為（如雙重簽名、長時間離線）將導致部分或全部質押代幣被罰沒'
                    }
                },
                section2: {
                    title: '二、經濟模型',
                    issuance: {
                        title: '發行機制',
                        intro: 'XAI 的發行採用「創世發行+生態挖礦」結合的方式：',
                        genesis: {
                            title: '創世發行',
                            desc: '創世發行部分用於項目啟動、團隊激勵、機構投資，確保項目初期有足夠的資金和資源支持。'
                        },
                        mining: {
                            title: '生態挖礦',
                            intro: '生態挖礦部分通過以下方式逐步釋放：',
                            item1: 'GNFT/GUnit 持有挖礦：持有算力資產通證的用戶可獲得 XAI 挖礦獎勵',
                            item2: 'AI 服務使用挖礦：使用算力港平台服務的用戶可獲得 XAI 獎勵',
                            item3: '節點驗證挖礦：參與網絡驗證的節點可獲得 XAI 獎勵',
                            summary: '這一機制確保代幣流通量與生態發展進度匹配，避免過度通脹，保持代幣價值的穩定性。'
                        }
                    },
                    anchoring: {
                        title: '價值錨定體系',
                        intro: 'GNFT、GUnit、XAI 在 XRWA 生態中並非獨立存在，而是形成「資產確權-拆分流通-價值交互」的協同體系：',
                        foundation: {
                            title: '基礎層：GNFT 的資產錨定',
                            desc: 'GNFT 將物理 GPU 資產轉化為鏈上確權資產，為生態提供「價值基礎」。若沒有 GNFT 的資產錨定，GUnit 的拆分將失去底層資產支撐，XAI 的收益分配也將缺乏價值來源。'
                        },
                        circulation: {
                            title: '流通層：GUnit 的小額化賦能',
                            desc: 'GUnit 通過拆分 GNFT，將高價值資產轉化為可小額交易的通證，提升生態資產的流動性與普惠性，吸引更多用戶參與，為生態帶來增量資金與算力需求，進而擴大 XAI 的支付場景。'
                        },
                        value: {
                            title: '價值層：XAI 的生態串聯',
                            desc: 'XAI 作為收益分配工具，連接資產持有者與生態貢獻者，通過收益分配激勵資產持有者提供更多算力，通過支付需求激勵 AI 用戶使用生態服務，反向推動 GNFT 的上鏈規模與 GUnit 的流通活躍度。'
                        }
                    }
                },
                features: {
                    title: '核心特性',
                    item1: '收益分配',
                    item1Desc: 'GNFT 與 GUnit 持有者的生態收益均以 XAI 形式發放',
                    item2: '服務支付',
                    item2Desc: 'AI 生態服務的強制支付憑證，覆蓋所有算力與 AI 相關服務場景',
                    item3: '生態治理',
                    item3Desc: '持有者具備生態治理權，可通過鏈上投票參與關鍵決策',
                    item4: '價值錨定',
                    item4Desc: '與實體算力資產深度綁定，確保代幣價值的穩定性'
                }
            }
        },
        scenarios: {
            title: '應用場景',
            description: 'PowerVerse Chain賦能多元化的應用場景',
            ai: {
                title: 'AI模型訓練',
                description: '分布式GPU資源池，支持大規模AI模型訓練與推理，降低計算成本',
                stats: {
                    costReduction: '成本降低',
                    gpuNodes: 'GPU節點',
                    availability: '全天候服務'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '分布式GPU資源池：整合全球閒置GPU資源，形成強大的分布式計算集群',
                    item2: '智能任務調度：AI算法自動匹配最優計算節點，最大化資源利用率',
                    item3: '模型訓練加速：支持PyTorch、TensorFlow等主流框架，訓練速度提升3-5倍',
                    item4: '推理服務優化：低延遲推理服務，支持實時AI應用部署',
                    item5: '成本透明化：按需付費，無隱藏費用，相比傳統雲服務節省60%以上成本'
                },
                cases: {
                    title: '應用案例',
                    item1: '大語言模型訓練：支持GPT、BERT等大規模語言模型的分布式訓練',
                    item2: '計算機視覺：圖像識別、目標檢測、語義分割等CV任務加速',
                    item3: '自然語言處理：文本分類、情感分析、機器翻譯等NLP應用',
                    item4: '推薦系統：個性化推薦算法訓練與實時推理'
                },
                features: {
                    gpuCluster: {
                        title: 'GPU集群',
                        desc: '整合全球GPU資源，提供強大的計算能力'
                    },
                    costOptimization: {
                        title: '成本優化',
                        desc: '相比傳統雲服務，成本降低60%以上'
                    },
                    elasticScaling: {
                        title: '彈性擴展',
                        desc: '根據需求動態調整計算資源'
                    }
                }
            },
            science: {
                title: '科學計算',
                description: '高性能計算集群，為科研機構提供強大的計算能力支持',
                stats: {
                    researchInstitutes: '科研機構',
                    dataProcessing: '數據處理',
                    dataProcessingValue: 'PB級',
                    availability: '可用性'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '高性能計算集群：提供超算級別的計算能力，支持大規模並行計算',
                    item2: '多學科支持：覆蓋物理、化學、生物、天文、氣象等多個科學領域',
                    item3: '數據安全保障：端到端加密，符合科研數據安全標準',
                    item4: '協作研究平台：支持多機構協同研究，數據共享與協作',
                    item5: '成本效益：按需使用，無需巨額硬件投資，降低科研成本'
                },
                fields: {
                    title: '應用領域',
                    item1: '分子動力學模擬：蛋白質折疊、藥物分子設計等生物化學計算',
                    item2: '氣候模擬：全球氣候模型、極端天氣預測等氣象學研究',
                    item3: '天體物理：宇宙模擬、星系演化、黑洞研究等天文計算',
                    item4: '材料科學：新材料設計、性能預測、量子計算等',
                    item5: '基因研究：基因組分析、蛋白質結構預測、精準醫療'
                },
                features: {
                    hpc: {
                        title: '高性能計算',
                        desc: '支持大規模科學計算任務'
                    },
                    dataSecurity: {
                        title: '數據安全',
                        desc: '多重加密保護，確保數據安全'
                    },
                    professionalSupport: {
                        title: '專業支持',
                        desc: '為科研機構提供專業的技術支持'
                    }
                }
            },
            render: {
                title: '渲染服務',
                description: '分布式渲染網絡，加速3D動畫、影視特效等渲染任務',
                stats: {
                    speedup: '渲染加速',
                    hdSupport: '高清支持',
                    costSaving: '成本節省'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '分布式渲染架構：將渲染任務分配到多個節點並行處理，大幅縮短渲染時間',
                    item2: '多格式支持：支持Blender、Maya、3ds Max、Cinema 4D等主流3D軟件',
                    item3: '高質量輸出：支持4K、8K超高清晰渲染，滿足影視級製作需求',
                    item4: '實時預覽：提供實時渲染預覽功能，快速迭代優化',
                    item5: '智能調度：自動分配最優渲染節點，最大化渲染效率'
                },
                scenarios: {
                    title: '應用場景',
                    item1: '影視特效：電影、電視劇的CG特效渲染，大幅縮短製作週期',
                    item2: '動畫製作：3D動畫片、遊戲過場動畫等批量渲染任務',
                    item3: '建築可視化：建築效果圖、室內設計渲染、VR場景製作',
                    item4: '產品設計：產品渲染圖、廣告宣傳片、電商展示圖',
                    item5: '遊戲開發：遊戲場景渲染、角色建模、材質貼圖處理'
                },
                features: {
                    fastRendering: {
                        title: '快速渲染',
                        desc: '分布式渲染大幅縮短渲染時間'
                    },
                    quality: {
                        title: '質量保證',
                        desc: '保證渲染質量和一致性'
                    },
                    costSaving: {
                        title: '成本節約',
                        desc: '降低渲染成本，提高效率'
                    }
                }
            },
            edge: {
                title: '邊緣計算',
                description: '邊緣節點網絡，提供低延遲、高可用的邊緣計算服務',
                stats: {
                    lowLatency: '超低延遲',
                    edgeNodes: '邊緣節點',
                    availability: '可用性'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '全球邊緣節點：在主要城市部署邊緣計算節點，就近提供服務',
                    item2: '超低延遲：數據處理在邊緣完成，延遲低至10ms以下',
                    item3: '高可用架構：多節點冗餘，自動故障轉移，保證服務連續性',
                    item4: '數據本地化：敏感數據可在本地處理，滿足數據合規要求',
                    item5: '彈性擴展：根據流量自動擴展邊緣節點，應對突發需求'
                },
                scenarios: {
                    title: '應用場景',
                    item1: '實時遊戲：雲遊戲、AR/VR應用，需要極低延遲的交互體驗',
                    item2: 'IoT設備：智能家居、工業物聯網設備的實時數據處理',
                    item3: '視頻直播：直播推流、實時轉碼、CDN加速等流媒體服務',
                    item4: '自動駕駛：車輛邊緣計算、路側設備數據處理、實時決策',
                    item5: '金融交易：高頻交易、實時風控、支付處理等金融應用'
                },
                features: {
                    lowLatency: {
                        title: '低延遲',
                        desc: '邊緣節點就近處理，延遲低至毫秒級'
                    },
                    highAvailability: {
                        title: '高可用',
                        desc: '分布式架構保證服務高可用性'
                    },
                    globalCoverage: {
                        title: '全球覆蓋',
                        desc: '邊緣節點覆蓋全球主要地區'
                    }
                }
            },
            blockchain: {
                title: '區塊鏈應用',
                description: '為Web3應用提供強大的去中心化計算基礎設施，支持DApp開發和智能合約執行',
                stats: {
                    dapps: 'DApp應用',
                    tps: 'TPS處理',
                    transactionCost: '交易成本'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '高性能區塊鏈：採用創新的共識機制，支持高TPS交易處理',
                    item2: '智能合約平台：支持Solidity、Rust等多種智能合約語言',
                    item3: '跨鏈互操作：支持與其他主流區塊鏈網絡的跨鏈交互',
                    item4: '開發者友好：完善的開發工具和文檔，降低DApp開發門檻',
                    item5: '低Gas費用：優化的網絡架構，大幅降低交易成本'
                },
                scenarios: {
                    title: '應用場景',
                    item1: 'DeFi應用：去中心化交易所、借貸協議、流動性挖礦等',
                    item2: 'NFT市場：數字藝術品交易、遊戲道具、收藏品等NFT應用',
                    item3: 'GameFi：區塊鏈遊戲、Play-to-Earn、元宇宙應用',
                    item4: 'DAO治理：去中心化自治組織、社區投票、提案執行',
                    item5: '供應鏈溯源：商品溯源、防偽驗證、物流追蹤等'
                }
            },
            bigdata: {
                title: '大數據分析',
                description: '分布式大數據處理平台，支持海量數據的存儲、分析和挖掘',
                stats: {
                    dataStorage: '數據存儲',
                    dataStorageValue: 'EB級',
                    streamProcessing: '流式處理',
                    streamProcessingValue: '實時',
                    processingCapacity: '處理能力',
                    processingCapacityValue: 'PB/天'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '分布式存儲：去中心化存儲網絡，數據安全可靠',
                    item2: '實時分析：支持流式數據處理，實時分析業務數據',
                    item3: '機器學習：集成ML算法庫，支持數據挖掘和預測分析',
                    item4: '可視化平台：提供豐富的數據可視化工具和報表',
                    item5: '彈性擴展：根據數據量自動擴展計算資源'
                },
                scenarios: {
                    title: '應用場景',
                    item1: '商業智能：企業數據分析、報表生成、決策支持',
                    item2: '用戶畫像：用戶行為分析、精準營銷、個性化推薦',
                    item3: '風險控制：金融風控、欺詐檢測、異常監控',
                    item4: '物聯網分析：IoT設備數據採集、實時監控、預測維護',
                    item5: '日誌分析：系統日誌分析、安全審計、性能優化'
                }
            },
            cloudgaming: {
                title: 'AI驅動的去中心化雲遊戲解決方案服務商',
                description: 'PowerVerse Chain 去中心化雲遊戲平台，全端適配 + PC / 手機 / 平板 / 電視，低延遲高畫質沉浸式體驗，完美兼容跳舞、切西瓜等體感遊戲，暢玩無界。',
                download: '下載客戶端',
                startPlaying: '立即開始',
                gameImages: {
                    title: '支持1000+款遊戲線上遊玩'
                },
                videos: {
                    title: '產品演示視頻',
                    video1: '雲遊戲平台演示',
                    video2: '遊戲體驗展示'
                },
                images: {
                    title: '功能特性展示',
                    item1: '超低延遲，延遲低至20ms',
                    item2: '支持4K/8K超高清渲染',
                    item3: '支持PC、手機、平板等多種設備',
                    item4: '豐富的遊戲庫，即開即玩',
                    item5: '去中心化架構，安全可靠',
                    item6: '智能資源調度，優化體驗'
                },
                esports: {
                    title: ' 電競酒店 ',
                    item1: ' 電競酒店：年輕人社交聚會熱門選擇，PowerVerse Chain 提供全新運營模式，無需高端 PC，大幅降低硬體成本。',
                    item2: ' 部署雲遊戲終端，全平台遊戲體驗，從 3A 大作到競技遊戲，一鍵即玩無需等待，低延遲高畫質，支援多人聯機對戰。',
                    item3: ' 智能計費系統靈活設定收費模式，區塊鏈技術確保交易透明安全，為酒店和玩家建立信任橋樑。'
                },
                stats: {
                    lowLatency: '超低延遲',
                    hdSupport: '高清支持',
                    availability: '全天候服務'
                },
                workflow: {
                    title: '完整鏈路閉環',
                    step1: '用戶註冊登錄：通過PowerVerse Chain錢包連接，實現去中心化身份認證',
                    step2: '遊戲選擇：瀏覽遊戲庫，選擇想要遊玩的遊戲',
                    step3: '資源分配：PowerVerse Infra智能調度邊緣計算節點，就近分配GPU資源',
                    step4: '遊戲啟動：遊戲在雲端GPU上運行，通過低延遲流媒體傳輸到用戶設備',
                    step5: '實時交互：用戶操作實時上傳，遊戲畫面實時渲染並流式傳輸',
                    step6: '支付結算：使用PowerVerse代幣（PEC）按使用時長付費，智能合約自動結算',
                    step7: '資源釋放：遊戲結束後，GPU資源自動釋放回資源池，供其他用戶使用'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '去中心化架構：無需中心化服務器，利用全球分布式GPU資源',
                    item2: '低延遲體驗：邊緣計算節點就近服務，延遲低至20ms以下',
                    item3: '成本優勢：按需付費，無需購買昂貴硬件，降低遊戲門檻',
                    item4: '高質量渲染：支持4K/8K超高清畫質，流暢遊戲體驗',
                    item5: '跨平台支持：支持PC、手機、平板等多種設備，隨時隨地暢玩'
                },
                scenarios: {
                    title: '應用場景',
                    item1: '3A大作雲遊戲：無需下載，即開即玩，享受頂級遊戲體驗',
                    item2: '移動雲遊戲：手機端暢玩PC遊戲，突破設備性能限制',
                    item3: 'VR/AR遊戲：支持虛擬現實和增強現實遊戲，沉浸式體驗',
                    item4: '遊戲直播：低延遲遊戲直播，實時互動體驗'
                },
                features: {
                    lowLatency: {
                        title: '超低延遲',
                        desc: '邊緣節點就近服務，延遲低至20ms'
                    },
                    hdQuality: {
                        title: '高清畫質',
                        desc: '支持4K/8K超高清渲染'
                    },
                    costEffective: {
                        title: '成本優勢',
                        desc: '按需付費，無需購買硬件'
                    }
                }
            },
            computingexchange: {
                title: '算力交易',
                description: '去中心化算力交易市場，連接算力供需雙方，實現算力資源的自由流轉',
                goToTrade: '前往交易市場',
                links: {
                    title: '相關鏈接',
                    market: '前往PowerVerse Market交易市場',
                    infra: '了解PowerVerse Infra基礎設施',
                    token: '查看PowerVerse代幣（PEC）信息',
                    workflow: '查看全鏈路場景流程圖'
                },
                stats: {
                    providers: '算力提供方',
                    transactions: '交易訂單',
                    successRate: '交易成功率'
                },
                workflow: {
                    title: '完整鏈路閉環',
                    step1: '算力提供方註冊：GPU/CPU資源提供方在PowerVerse Market註冊，發布算力資源信息',
                    step2: '資源上架：設置算力規格、價格、可用時間等參數，資源信息上鏈存證',
                    step3: '需求方發布：算力需求方發布需求訂單，指定算力類型、數量、時長、預算',
                    step4: '智能匹配：PowerVerse Market智能合約自動匹配供需雙方，或提供方主動接單',
                    step5: '訂單確認：雙方確認訂單，需求方支付PowerVerse代幣（PEC）作為保證金',
                    step6: '資源分配：PowerVerse Infra根據訂單自動分配算力資源，啟動虛擬機',
                    step7: '任務執行：需求方提交計算任務，系統自動執行並返回結果',
                    step8: '實時監控：雙方可實時查看算力使用情況、任務進度、資源狀態',
                    step9: '自動結算：任務完成後，智能合約根據實際使用時長自動結算，釋放保證金',
                    step10: '評價反饋：交易雙方互評，評價計入信譽體系，影響後續交易優先級',
                    step11: '資源回收：算力資源自動釋放回資源池，供其他訂單使用'
                },
                coreAdvantages: {
                    title: '核心優勢',
                    item1: '去中心化交易：無需第三方中介，買賣雙方直接交易，降低交易成本',
                    item2: '智能合約保障：交易全程由智能合約執行，自動結算，安全可靠',
                    item3: '透明定價：市場價格公開透明，供需雙方自由議價',
                    item4: '靈活交易：支持按小時、按天、按月等多種計費方式',
                    item5: '信譽體系：基於區塊鏈的信譽評價系統，保障交易安全'
                },
                scenarios: {
                    title: '應用場景',
                    item1: 'AI訓練算力租賃：為AI公司提供GPU算力，支持模型訓練',
                    item2: '渲染算力交易：為影視公司提供渲染算力，加速項目製作',
                    item3: '科學計算資源：為科研機構提供高性能計算資源',
                    item4: '閒置資源變現：個人或企業閒置GPU/CPU資源可上架交易，獲得收益'
                },
                features: {
                    decentralized: {
                        title: '去中心化',
                        desc: '無需中介，直接交易'
                    },
                    smartContract: {
                        title: '智能合約',
                        desc: '自動執行，安全可靠'
                    },
                    transparent: {
                        title: '透明定價',
                        desc: '市場價格公開透明'
                    }
                }
            },
            rwa: {
                title: 'RWA錢包',
                description: '合規上鏈，算力生金。RWA錢包通過ERC-3643合規協議，將全國50+礦場、超10萬台高性能GPU實體算力資產化於PowerVerse鏈上，構建安全、可信、可自由交易的去中心化算力基礎設施。',
                stats: {
                    mines: '礦場數量',
                    gpuCount: 'GPU數量',
                    tokenized: '代幣化率'
                },
                coreAdvantages: {
                    title: '核心優勢：合規、實體與效率的三重保障',
                    item1: '合規先行，安全可信：深度集成ERC-3643標準，將KYC/AML等全球監管要求內置於智能合約。確保資產發行與流轉全程合法合規，為機構資金入場掃清障礙，奠定堅實信任基石。',
                    item2: '實體錨定，真實透明：每一份鏈上算力通證，均對應全國分佈式礦場中真實的高性能GPU硬件。資產來源清晰、權屬可驗證，杜絕虛擬炒作，實現實體價值的精準映射。',
                    item3: '鏈上管理，降本增效：基於PowerVerse區塊鏈網絡，實現算力資產的自動化發行、確權與交易結算。大幅提升資產管理效率，降低運營與信任成本，釋放流動性潛能。'
                },
                scenarios: {
                    title: '應用場景：賦能多元商業生態',
                    item1: '合規化算力資產交易：為合格投資者與機構提供標準化、合規化的算力資產認購與二級市場交易服務，開啟算力投資新範式。',
                    item2: '去中心化算力金融(DeFi)：作為底層優質合規資產，可應用於抵押借貸、收益權質押等鏈上金融場景，構建豐富的算力DeFi生態。',
                    item3: '企業級算力服務市場：為AI訓練、雲渲染、科研計算等需求方，提供可即時結算、權屬清晰的彈性算力租賃與採購解決方案。'
                },
                features: {
                    decentralized: {
                        title: '合規先行',
                        desc: 'ERC-3643標準，確保合法合規'
                    },
                    tokenized: {
                        title: '實體錨定',
                        desc: '真實GPU硬件，權屬可驗證'
                    },
                    transparent: {
                        title: '鏈上管理',
                        desc: '自動化發行確權，降本增效'
                    }
                },
                computingPort: {
                    title: '算力港',
                    description: '算力港（XAI Center）是基於PowerVerse Chain構建的去中心化智算平台，致力於匯聚全球閒置GPU/CPU資源，通過區塊鏈技術實現算力資產的通證化、標準化和可信交易。平台提供算力切分、算力池化、數據平台、模型訓推、故障檢測、邊緣計算等全方位服務，為AI團隊提供低成本、高彈性的算力支持。',
                    feature1: '算力切分與池化：支持顯卡多實例運行、顯卡直通技術、多節點並行計算，實現多品牌GPU單卡的靈活分配與顯存切分，支持公共算力池或專屬算力池的靈活組建',
                    feature2: '模型訓推全生命週期：提供從模型開發、訓練、部署、推理到優化的完整支持，包括分佈式訓練、模型效果評估、在線推理、模型優化等專業服務',
                    feature3: '智能監控與故障自愈：基於可視化監控數據、可配置告警服務、自動化故障處理，實現服務運維智能化，自動檢測並修復硬件故障、軟件異常或資源瓶頸'
                },
                xaiToken: {
                    title: 'RWA代幣 XAI',
                    description: 'XAI是XRWA AI生態內的核心功能通證與價值儲備代幣，基於ERC-20標準開發，承擔生態價值流轉媒介、收益分配工具、服務支付憑證三大核心職能。XAI覆蓋XRWA生態的AI全場景交互，是連接資產端與應用端的價值橋樑。',
                    feature1: '生態收益分配的唯一支付工具：GNFT與GUnit持有者的生態收益均以XAI形式發放，這一設計將資產與XAI價值深度綁定，確保代幣持有者獲得算力資產產生的收益分紅',
                    feature2: 'AI生態服務的強制支付憑證：在XRWA的AI應用生態中，XAI是唯一的服務支付工具，覆蓋所有算力與AI相關服務場景，構建了XAI的剛性需求，推動代幣價值提升',
                    feature3: '生態治理與節點激勵的核心代幣：XAI持有者具備生態治理權，可通過鏈上投票參與XRWA生態的關鍵決策，核心角色需質押XAI獲得節點資格，通過質押懲罰機制保障生態節點的合規性與可靠性'
                }
            }
        },
        developer: {
            title: '開發者中心',
            description: '豐富的開發工具和文檔，助力開發者快速構建應用',
            docs: {
                title: '技術文檔',
                description: '完整的技術文檔和API參考，幫助開發者快速上手',
                link: '查看文檔'
            },
            sdk: {
                title: 'SDK工具包',
                description: '多語言SDK支持，簡化開發流程，提高開發效率',
                link: '下載SDK'
            },
            tools: {
                title: '開發工具',
                description: '測試網絡、調試工具、部署腳本等一站式開發工具',
                link: '使用工具',
                feature1: '測試網絡：提供完整的測試環境',
                feature2: '調試工具：強大的調試和監控功能',
                feature3: '部署腳本：一鍵部署到生產環境'
            },
            community: {
                title: '社區支持',
                description: '活躍的開發者社區，技術交流與問題解答',
                link: '加入社區',
                feature1: 'Telegram社區：實時技術交流',
                feature2: 'GitHub：開源代碼和問題追蹤',
                feature3: '技術論壇：深度技術討論'
            }
        },
        token: {
            pageTitle: '代幣 - PowerVerse Chain',
            title: '代幣經濟',
            description: '構建可持續的生態經濟模型',
            intro: 'PowerVerse Token是PowerVerse Chain生態系統的原生代幣',
            totalSupply: '總供應量',
            circulated: '已流通',
            marketCap: '市值',
            networkInfo: 'PowerVerse 網絡信息',
            rpcInterface: 'RPC 接口',
            mainRPC: '主RPC接口:',
            webSocket: 'WebSocket:',
            beaconAPI: 'Beacon API:',
            healthCheck: '健康檢查:',
            walletInfo: '錢包連接信息',
            rpcURL: 'RPC URL:',
            chainID: 'Chain ID:',
            symbol: 'Symbol:',
            decimals: 'Decimals:',
            distributionChart: '代幣分配可視化',
            usage: {
                title: '代幣用途',
                items: [
                    '支付計算資源費用',
                    '參與網絡治理投票',
                    '節點質押與獎勵',
                    '生態應用內支付'
                ]
            },
            distribution: {
                title: '分配機制',
                items: [
                    '社區激勵：40%',
                    '團隊與顧問：20%',
                    '生態發展：20%',
                    '投資者：15%',
                    '儲備金：5%'
                ]
            }
        },
        about: {
            title: '關於我們',
            vision: {
                title: '願景',
                content: 'PowerVerse Chain致力於構建全球最大的去中心化計算網絡，讓計算資源像水電一樣觸手可及，為Web3生態提供強大的基礎設施支撐。'
            },
            mission: {
                title: '使命',
                content: '通過區塊鏈技術整合全球閒置計算資源，降低計算成本，提高資源利用效率，推動分布式計算技術的普及與應用。'
            },
            values: {
                title: '核心價值',
                items: [
                    '去中心化：無需中心化機構，用戶直接參與網絡治理',
                    '高效透明：區塊鏈技術保證交易透明，智能合約自動執行',
                    '開放生態：支持多種應用場景，構建繁榮的開發者生態',
                    '安全可靠：多重安全機制，保障網絡與數據安全'
                ]
            },
            team: {
                title: '團隊介紹',
                intro: '創始團隊成員擁有多次成功創業經驗，曾打造過行業領先的服務器集群，具有多項國家專利技術。由多名擁有公司上市經驗成員加入初始團隊。其他員工中有許多博士及教授，在web3領域具有豐富經驗，參與多個大型項目。',
                members: {
                    member1: {
                        name: 'Harvey',
                        role: '創始人 & CEO',
                        bio: '畢業於英國伯明翰大學，區塊鏈技術專家，深耕加密貨幣領域多年',
                        cert: ''
                    },
                    member2: {
                        name: 'Solomon',
                        role: '聯合創始人 & CTO',
                        bio: '畢業於英國曼徹斯特大學，分布式系統專家，區塊鏈技術顧問'
                    },
                    member3: {
                        name: 'Jane',
                        role: '聯合創始人 & COO',
                        bio: '畢業於加拿大維多利亞大學，生態系統建設專家，加密資產管理專家'
                    }
                },
                others: '其他員工中有許多博士及教授，在web3領域具有豐富經驗，參與多個大型項目。'
            },
            contact: {
                title: '聯繫我們',
                intro: '如果您對我們的項目感興趣，或者有任何問題，歡迎通過以下方式聯繫我們：',
                email: '郵箱：hiabacloud@gmail.com',
                address: '地址：浙江人才大廈2號樓7樓',
                twitter: 'Twitter：@PowerVerseChain',
                telegram: 'Telegram：@PowerVerseChain_Offical',
                discord: 'Discord：PowerVerse Community'
            }
        },
        whitepaper: {
            title: '白皮書',
            download: '下載白皮書',
            sections: {
                introduction: '引言',
                overview: '項目概述',
                technology: '技術架構',
                tokenomics: '代幣經濟',
                roadmap: '路線圖',
                team: '團隊介紹'
            }
        },
        common: {
            learnMore: '了解更多',
            back: '返回',
            next: '下一頁',
            previous: '上一頁',
            readMore: '閱讀更多',
            download: '下載',
            contact: '聯繫我們',
            join: '加入我們',
            privacy: '隱私政策',
            terms: '服務條款',
            cookie: 'Cookie政策',
            github: 'GitHub',
            blog: '博客',
            copy: '複製',
            copied: '已複製!',
            copyFailed: '複製失敗，請手動複製: ',
            videoNotSupported: '您的瀏覽器不支持視頻播放。'
        },
            hardwareFactory: {
            pageTitle: '硬件工廠 - PowerVerse Chain',
            title: '硬件工廠',
            description: '專業服務器機箱與工業控制機箱製造商',
            companyProfile: '公司介紹',
            companyIntro: '我們是一家專業的服務器機箱與工業控制機箱製造商，致力於為客戶提供高品質的硬件產品解決方案。',
            companyDesc: '公司簡介',
            companyDescText: '我們擁有完整的生產製造能力，從設計、研發到生產、質檢，全流程自主可控。工廠配備先進的生產設備和專業的技術團隊，確保產品質量和交付效率。',
            companyCulture: '企業文化',
            companyCultureText: '我們秉承"質量第一、客戶至上、持續創新"的企業理念，不斷優化生產工藝，提升產品質量，為客戶創造更大價值。我們注重團隊建設，營造積極向上的工作氛圍，激發員工創新潛能。',
            qualifications: '公司資質',
            license: '營業執照',
            licenseDesc: '具備完整的工商註冊資質，合法合規經營',
            qualityCert: '質量認證',
            qualityCertDesc: '通過國際標準化組織質量管理體系認證',
            honorCert: '榮譽證書',
            honorCertDesc: '獲得多項行業榮譽和資質認證',
            patent: '專利技術',
            patentDesc: '擁有多項產品設計和技術專利',
            productCenter: '產品中心',
            productCenterDesc: '我們提供全系列的服務器機箱、存儲服務器機箱、工業控制機箱和嵌入式機箱產品，滿足不同應用場景的需求。',
            serverChassis: '服務器機箱',
            serverChassisDesc: '提供1U到8U及塔式服務器機箱',
            storageChassis: '存儲服務器機箱',
            storageChassisDesc: '高密度存儲解決方案',
            industrialChassis: '工控機箱',
            industrialChassisDesc: '工業控制專用機箱',
            embeddedChassis: '嵌入式機箱',
            embeddedChassisDesc: '緊湊型嵌入式解決方案',
            accessories: '配件',
            accessoriesDesc: '各類機箱配件和附件',
            productDetails: '產品詳情',
            productAdvantages: '產品優勢',
            advantages: [
                '專業設計：符合行業標準，優化散熱與空間利用',
                '優質材料：採用高強度鋼材，耐腐蝕，經久耐用',
                '精密製造：先進生產工藝，確保產品精度與可靠性',
                '靈活定制：支持根據客戶需求進行個性化定制',
                '嚴格測試：出廠前經過多項嚴格測試，確保性能穩定'
            ],
            serverChassisList: {
                item1: '6U 機架式 8 節點伺服器機箱 ',
                item2: '5U 機架式 8 節點伺服器機箱 ',
                item3: '4U36 盤位機架式伺服器機箱 ',
                item4: '4U24 盤位機架式伺服器機箱 ',
                item5: '4U8 盤位機架式伺服器機箱 ',
                item6: '2U 標準伺服器',
                item7: ' 瘦客'
            },
            serverChassisInfo: {
                item1: '6U 機架式設計，整合 8 個獨立運算節點，專為雲遊戲、雲 PC、雲渲染等多用戶併發存取場景設計。採用「集中運算能力 + 分散式部署」模式，顯著減少硬體部署空間與成本，同時確保每位用戶享有獨立穩定的運算效能。',
                item2: '5U 高度機箱，支援 8 張高效能 GPU 卡，為 AI 模型訓練和深度學習推理提供強大運算能力。機箱配備高效電源模組和智慧散熱系統，確保 GPU 在最佳效能下穩定運行。此外，其提供充足的擴充介面，以適應各種演算法框架和軟體平台。',
                item3: ' 專為大容量數據儲存場景設計，專注於「高容量、高可靠度、高擴充性」。其採用多硬碟槽位設計、RAID 保護和智慧管理，為企業提供安全、穩定、易於管理的儲存解決方案，適用於數據備份、監控儲存、媒體庫和檔案共用。',
                item4: ' 專為大容量數據儲存場景設計，專注於「高容量、高可靠度、高擴充性」。其採用多硬碟槽位設計、RAID 保護和智慧管理，為企業提供安全、穩定、易於管理的儲存解決方案，適用於數據備份、監控儲存、媒體庫和檔案共用。',
                item5: ' 專為大容量數據儲存場景設計，專注於「高容量、高可靠度、高擴充性」。其採用多硬碟槽位設計、RAID 保護和智慧管理，為企業提供安全、穩定、易於管理的儲存解決方案，適用於數據備份、監控儲存、媒體庫和檔案共用。',
                item6: ' 通用運算能力，適應多種場景。核心價值：2U 標準機架式設計，平衡效能、擴充性與成本效益。專為企業一般 IT 需求設計，可做為 Web 伺服器、資料庫伺服器、虛擬化主機或檔案伺服器，是中小企業 IT 架構的「核心運算能力平台」。',
                item7: ' 採用「輕量化、高效能、低功耗」設計理念，這款輕巧便攜的迷你 PC 可彈性部署於雲遊戲、辦公、教育和雲終端等場景。瘦客機迷你 PC 支援遠端桌面連線和雲資源存取，有效降低終端設備的採購與維護成本。同時，其提供優異的安全性和穩定性，為用戶帶來流暢的雲辦公和娛樂體驗。'
            },
            storageChassisList: {
                item1: '1U存儲服務器機箱',
                item2: '2U存儲服務器機箱',
                item3: '4U存儲服務器機箱'
            },
            industrialChassisList: {
                item1: '標準工控機箱',
                item2: '定制化工控機箱'
            },
            embeddedChassisList: {
                item1: '嵌入式機箱',
                item2: '小型化設計'
            },
            accessoriesList: {
                item1: '風扇模塊',
                item2: '電源模塊',
                item3: '擴展卡支架',
                item4: '其他配件'
            },
            serverChassisSeries: '服務器機箱系列',
            storageChassisSeries: '存儲服務器機箱系列',
            industrialChassisSeries: '工業控制機箱',
            embeddedChassisSeries: '嵌入式機箱',
            specSize: '尺寸',
            specDriveBay: '硬盤位',
            specFan: '風扇',
            specPower: '電源',
            specExpansion: '擴展槽',
            specApplication: '應用',
            specMaterial: '材質',
            specProtection: '防護等級',
            specValue1U: '標準1U高度',
            specValue2U: '標準2U高度',
            specValue3U: '標準3U高度',
            specValue4U: '標準4U高度',
            specValueDrive2_4: '2-4個',
            specValueDrive4_8: '4-8個',
            specValueDrive8_12: '8-12個',
            specValueDrive12_24: '12-24個',
            specValueFan40_60: '40mm/60mm',
            specValueFan80_92: '80mm/92mm',
            specValueFan80_120: '80mm/120mm',
            specValueFan120_140: '120mm/140mm',
            specValuePowerStandard: '標準ATX/冗餘電源',
            specValueExpansion1_2: '1-2個PCIe',
            specValueExpansion2_4: '2-4個PCIe',
            specValueExpansion4_6: '4-6個PCIe',
            specValueExpansion6_8: '6-8個PCIe',
            specValueAppWeb: 'Web服務器、應用服務器',
            specValueAppDatabase: '數據庫服務器、虛擬化服務器',
            specValueAppHPC: '高性能計算、存儲服務器',
            specValueAppBigData: '大數據存儲、高性能計算',
            specValueAppStorage: '高密度存儲、NAS系統',
            specValueAppStorage2U: '企業級存儲、備份系統',
            specValueAppStorage4U: '大規模數據存儲、雲存儲',
            specValueAppIndustrial: '工業自動化、智能製造',
            specValueAppEmbedded: '邊緣計算、IoT設備',
            specValueMaterial: '優質鋼板/鋁合金',
            specValueProtection: 'IP65/IP67',
            specValueCompact: '緊湊型設計',
            specValueDrive2_5: '4-6個2.5寸',
            specValueDrive3_5: '12-24個3.5寸',
            specValueDrive4U: '36-48個3.5寸',
            advantagesTitle: '核心優勢',
            advantagesIntro: '我們致力於為客戶提供高品質、高性能的硬件產品，滿足不同應用場景的需求。',
            advantage1: '專業設計：採用先進的工業設計理念，優化散熱和結構佈局',
            advantage2: '優質材料：選用高品質鋼材和鋁合金，確保產品耐用性',
            advantage3: '精密製造：採用先進的加工工藝，保證產品精度和質量',
            advantage4: '靈活配置：支持多種主板規格和擴展卡配置',
            advantage5: '良好散熱：優化的風道設計，確保系統穩定運行',
            advantage6: '快速交付：完善的供應鏈體系，保證及時交付',
            footerResources: '資源',
            footerEcosystem: '生態系統'
        },
        researchStrength: {
            title: '研發實力',
            description: '全產業鏈自研自產，掌握核心硬件技術',
            fullChain: '全產業鏈自研自產',
            fullChainDesc: 'PowerVerse全產業鏈高度垂直整合，持續創新，推動雲遊戲產品更快落地。我們掌握從硬件到軟件、從網絡到生態的完整產業鏈，構建"端到端的算力基礎設施生態閉環"。',
            hardwareRnd: '硬件研發',
            hardwareRndDesc: '自研圖形處理器硬件，近10年硬件研發經驗，負責圖形處理器硬件研發與生產管理，保障算力供應。構建"端到端的算力基礎設施生態閉環"，優化性價比。',
            softwareArch: '軟件架構',
            softwareArchDesc: '自研架構，突破遊戲引擎與雲原生架構的適配鴻溝，突破實時渲染與編碼的技術瓶頸。雲端數據打通、持續迭代平台化開發工具。',
            networkOpt: '網絡優化',
            networkOptDesc: '低延遲傳輸算法 + 抗弱網策略算法，提升穩定性。5毫秒超低延遲，0丟包穩定連接，邊緣節點將覆蓋超30個省市。',
            aiOptimization: '人工智能算力優化',
            aiOptimizationDesc: '人工智能算力優化，精準感知決策分配。人工智能驅動的渲染增強算法，動態分辨率調整算法，分層編碼算法，動態碼率調整算法。',
            rndCapability: '研發能力',
            rndCapabilityDesc: '近10年硬件研發經驗，負責圖形處理器硬件研發與生產管理，保障算力供應。現專利數量：15+，團隊人數：30+，研發佔比：~40%。',
            coreAlgorithms: '核心技術算法',
            dynamicResolution: '動態分辨率調整算法',
            dynamicResolutionDesc: '根據網絡狀況動態調整分辨率，保證流暢體驗',
            aiRender: '人工智能驅動的渲染增強算法',
            aiRenderDesc: '利用人工智能技術提升渲染質量和效率',
            layeredEncoding: '分層編碼算法',
            layeredEncodingDesc: '智能分層編碼，優化傳輸效率',
            dynamicBitrate: '動態碼率調整算法',
            dynamicBitrateDesc: '實時調整碼率，適應網絡變化',
            zeroCopy: '零拷貝編碼流水線算法',
            zeroCopyDesc: '減少內存拷貝，提升編碼性能',
            lowLatency: '低延遲傳輸算法',
            lowLatencyDesc: '優化傳輸路徑，降低延遲',
            team: '研發團隊',
            teamSize: '團隊人數',
            rndRatio: '研發佔比',
            patents: '現專利數量',
            experience: '硬件研發經驗',
            experienceValue: '10年+',
            coreTeam: '核心團隊成員',
            teamMember1: '夏秋 - 硬件研發負責人：',
            teamMember1Desc: '近10年硬件研發經驗，負責圖形處理器硬件研發與生產管理，保障算力供應',
            teamMember2: '王浩宇 - 首席執行官：',
            teamMember2Desc: '8年以上行業經驗，深耕Web3算力基建，整合硬件技術與運營商資源，7項相關專利，業內知名專家',
            vision: '未來願景',
            visionTitle: '願景：去中心化人工智能驅動的雲遊戲平台行業領導者',
            visionDesc: '掌握核心產業鏈+具有產品定義能力，是勝出的必經之路。未來會成為高毛利水平、高溢價能力、高市場佔有率的行業絕對頭部，讓雲遊戲平台走進千家萬戶，用科技改變世界。'
        }
    },
    'en': {
        nav: {
            home: 'Home',
            product: 'Products',
            scenario: {
                title: 'Application Scenario',
                cloudgaming: 'Cloud Gaming Scenario',
                computingexchange: 'Computing Power Exchange Scenario',
                rwa: 'RWA Wallet Scenario',
                workflow: 'Full Workflow Scenario'
            },
            developer: 'Developer Center',
            token: 'Token',
            about: 'About',
            whitepaper: 'Whitepaper',
            hardwareFactory: 'Hardware Factory',
            researchStrength: 'Research Strength'
        },
        home: {
            title: 'PowerVerse Chain',
            subtitle: 'Decentralized Computing Network',
            description: 'Building next-generation distributed computing infrastructure to enable efficient sharing of global computing resources and empower Web3 ecosystem development',
            ios: 'iOS',
            android: 'Android'
        },
        architecture: {
            title: 'Technical Framework',
            subtitle: 'Architecture',
            appLayer: 'Application Layer',
            protocolLayer: 'Protocol Layer',
            networkLayer: 'Network Layer',
            dapp: 'DApp Application',
            api: 'API Interface',
            rpc: 'RPC Service',
            consensus: 'Consensus Mechanism',
            smartContract: 'Smart Contract',
            crossChain: 'Cross-Chain Protocol',
            p2p: 'P2P Network',
            nodeManagement: 'Node Management',
            dataStorage: 'Data Storage'
        },
        products: {
            title: 'Product Ecosystem',
            description: 'Building a complete decentralized computing ecosystem',
            chain: {
                name: 'PowerVerse Chain',
                description: 'PoS consensus blockchain system supporting EVM, enabling easy DApp deployment and operation, providing developers with a friendly development environment and lowering development barriers and costs',
                learnMore: 'Learn More',
                pageTitle: 'PowerVerse Chain - Technical Overview',
                subtitle: 'Technical Overview',
                intro: 'PowerVerse Chain is a blockchain-based distributed ledger platform that provides secure and efficient infrastructure for decentralized applications through decentralized networks, smart contracts, and consensus mechanisms.',
                architecture: {
                    title: 'Overall Architecture',
                    baseLayer: {
                        title: 'Base Layer',
                        p2p: {
                            label: 'P2P Network: ',
                            desc: 'Direct node links, fast sync and high availability.'
                        },
                        database: {
                            label: 'Database: ',
                            desc: 'Merkle tree stores transactions and state, verifiable.'
                        },
                        crypto: {
                            label: 'Cryptographic Algorithms: ',
                            desc: 'Key management, signatures and hashing for security.'
                        },
                        sharding: {
                            label: 'Sharding Optimization: ',
                            desc: 'Parallel transaction verification, higher block efficiency.'
                        }
                    },
                    coreLayer: {
                        title: 'Core Layer',
                        ledger: {
                            label: 'Distributed Ledger: ',
                            desc: 'Transactions, blocks, tx pools and core data.'
                        },
                        consensus: {
                            label: 'Consensus Mechanism: ',
                            desc: 'POW+POS hybrid consensus, efficient decentralization.'
                        },
                        smartContract: {
                            label: 'Smart Contracts: ',
                            desc: 'EVM compatible, Solidity development.'
                        }
                    },
                    appLayer: {
                        title: 'Application Layer',
                        api: {
                            label: 'API Interface: ',
                            desc: 'Provides HTTP/TCP interfaces and RPC services for ecosystem integration.'
                        },
                        dapp: {
                            label: 'DApp: ',
                            desc: 'Supports development of various decentralized applications such as DeFi, DID, etc.'
                        }
                    }
                },
                blockTransaction: {
                    title: 'Blocks and Transactions',
                    structure: {
                        title: 'Block Structure',
                        header: {
                            title: 'Block Header',
                            desc: 'Contains parent block hash, timestamp, transaction tree root hash (TxRoot), etc.'
                        },
                        body: {
                            title: 'Block Body',
                            desc: 'Contains transaction list.'
                        },
                        note: 'Transactions are organized through Merkle tree, TxRoot is used for fast verification of block integrity.'
                    },
                    process: {
                        title: 'Transaction Process',
                        step1: 'Users construct and broadcast transactions.',
                        step2: 'Nodes validate transactions and store them in the transaction pool.',
                        step3: 'Proposer nodes package transactions and generate block proposals.',
                        step4: 'Transactions are executed by EVM, and blocks enter the consensus process.',
                        step5: 'After consensus succeeds, blocks are finalized, state is updated, and forks are handled.'
                    }
                },
                consensus: {
                    title: 'Consensus Mechanism: POW+POS Hybrid Consensus',
                    overview: {
                        title: 'Consensus Mechanism Overview',
                        desc: 'PowerVerse Chain adopts a POW+POS hybrid consensus mechanism, combining the advantages of Proof of Work and Proof of Stake to ensure network security while improving transaction processing efficiency.',
                        pow: {
                            title: 'Proof of Work (POW)',
                            label: 'Proof of Work (POW): ',
                            desc: 'Verifies transactions and creates new blocks through computational power competition, ensuring network security and decentralization.'
                        },
                        pos: {
                            title: 'Proof of Stake (POS)',
                            label: 'Proof of Stake (POS): ',
                            desc: 'Validators participate in network consensus by staking tokens. The more tokens staked, the higher the probability of being selected as a validator.'
                        }
                    },
                    workflow: {
                        title: 'Consensus Process',
                        step1: 'POW miners create candidate blocks through computational competition and receive block rewards.',
                        step2: 'POS validators participate in block validation by staking tokens, ensuring transaction legitimacy.',
                        step3: 'Validators vote, and blocks approved by more than 2/3 of validators are confirmed.',
                        step4: 'Confirmed blocks are added to the blockchain, updating network state.'
                    },
                    staking: {
                        title: 'POS Staking Mechanism',
                        intro: 'Proof of Stake (POS) staking is the core mechanism of PowerVerse Chain network security, referencing Ethereum 2.0 staking design to provide stable income sources for validators.',
                        minimum: {
                            title: 'Minimum Staking Requirement',
                            label: 'Minimum Staking Requirement: ',
                            desc: 'Validators must stake a minimum amount; economic incentives align with network security.'
                        },
                        rewards: {
                            title: 'Staking Rewards',
                            label: 'Staking Rewards: ',
                            desc: 'Rewards from block validation and consensus voting; rate tied to staked amount and network activity.'
                        },
                        slashing: {
                            title: 'Slashing Mechanism',
                            label: 'Slashing Mechanism: ',
                            desc: 'Malicious or long offline validators face slashing to ensure network security.'
                        },
                        benefits: {
                            title: 'Staking Benefits',
                            item1: 'Earn stable staking rewards with annual yield rates dynamically adjusted based on network conditions',
                            item2: 'Participate in network governance, voting on protocol upgrades and important decisions',
                            item3: 'Enhance network security - the more tokens staked, the more secure the network',
                            item4: 'Support delegated staking - regular users can delegate tokens to validator nodes'
                        }
                    }
                },
                networkConfig: {
                    title: 'Network Configuration Standards',
                    overview: {
                        title: 'Network Parameter Configuration',
                        desc: 'PowerVerse Chain adopts standardized network configuration to ensure compatibility between nodes and stable network operation.'
                    },
                    blockParams: {
                        title: 'Block Parameters',
                        size: 'Block Size: Maximum 2MB',
                        interval: 'Block Interval: Approximately 3 seconds',
                        gasLimit: 'Gas Limit: 8,000,000 Gas per block'
                    },
                    consensusParams: {
                        title: 'Consensus Parameters',
                        minStake: 'Minimum Staking: 10,000 PEC',
                        epoch: 'Epoch Cycle: 100 blocks',
                        finality: 'Finality: 2/3 validator votes'
                    },
                    networkParams: {
                        title: 'Network Parameters',
                        chainId: 'Chain ID: Mainnet 1001',
                        rpcPort: 'RPC Port: 8545',
                        p2pPort: 'P2P Port: 30303'
                    }
                },
                coin: {
                    title: 'PowerVerse Coin: Core Ecosystem Asset',
                    totalSupply: 'Total Supply',
                    totalSupplyValue: '1.4 Billion',
                    features: {
                        title: 'Main Functions',
                        staking: {
                            title: 'Staking to Maintain Network',
                            desc: 'Participate in consensus through staking, earn rewards, and enhance network security and stability.'
                        },
                        circulation: {
                            title: 'Ecosystem Circulation and Payment',
                            desc: 'Serves as a medium of value exchange within the ecosystem, used for development incentives, service payments, and in-app transactions.'
                        },
                        dao: {
                            title: 'DAO Governance',
                            desc: 'Holders can participate in PowerVerse DAO voting to jointly decide on major decisions such as protocol upgrades and fund allocation.'
                        }
                    }
                },
                features: {
                    title: 'Core Features',
                    item1: 'High-performance consensus mechanism supporting high TPS',
                    item2: 'Automatic smart contract execution',
                    item3: 'Cross-chain interoperability',
                    item4: 'Comprehensive node management'
                }
            },
            infra: {
                name: 'PowerVerse Infra',
                description: 'Delivers exceptional performance at the virtualization layer, achieving efficient resource utilization and flexible allocation, providing strong support for upper-layer applications and services',
                learnMore: 'Learn More',
                pageTitle: 'PowerVerse Infra - Starting Point of Decentralized Physical Infrastructure Network (DePIN)',
                depinBadge: 'The Beginning of DePIN',
                subtitle: 'Starting Point of Decentralized Physical Infrastructure Network (DePIN)',
                intro: 'PowerVerse Infra is a virtualization software platform based on software-defined concepts, integrating and virtualizing management of various chip computing power (including CPU, GPU, AI chips, and quantum chips), transforming idle computing power into shareable and tradable digital assets, providing users with efficient and diverse computing power acquisition methods.',
                section1: {
                    title: 'I. Core Design: Five Components and Nine Services',
                    components: {
                        title: 'Five Core Components',
                        table: {
                            component: 'Component',
                            function: 'Core Function'
                        },
                        control: {
                            name: 'Control Component',
                            desc: 'Architecture core, responsible for receiving requests, resource allocation, and system monitoring, including virtualization, network, image, and other services.'
                        },
                        compute: {
                            name: 'Compute Component',
                            desc: 'Computing resource provider, running virtual machine instances and processing computing tasks.'
                        },
                        storage: {
                            name: 'Storage Component',
                            desc: 'Supports block storage and object storage, responsible for data and image storage.'
                        },
                        network: {
                            name: 'Network Component',
                            desc: 'Manages virtual networks, subnets, routing, etc., enabling virtual machine communication, network isolation, and security.'
                        },
                        interface: {
                            name: 'Interface Service',
                            desc: 'Provides RESTful API, enabling communication and interaction between components.'
                        }
                    },
                    services: {
                        title: 'Nine Key Service Modules',
                        virtualization: {
                            title: 'Core Virtualization',
                            desc: 'Manages the full lifecycle of virtual machines (create, suspend, adjust, destroy), configuring CPU, GPU, memory, and other resources.'
                        },
                        network: {
                            title: 'Network Virtualization',
                            desc: 'Provides network virtualization technology and connection services.'
                        },
                        image: {
                            title: 'Image Service',
                            desc: 'Supports multiple image formats, enabling image upload, deletion, and information editing.'
                        },
                        blockStorage: {
                            title: 'Block Storage',
                            desc: 'Provides stable data block storage services for virtual machines.'
                        },
                        objectStorage: {
                            title: 'Object Storage',
                            desc: 'Implements scalable object storage through redundancy and fault tolerance mechanisms, supporting file access and persistent storage.'
                        },
                        monitoring: {
                            title: 'Monitoring Service',
                            desc: 'Provides statistical data support for billing, monitoring, and other services.'
                        },
                        permission: {
                            title: 'Permission Service',
                            desc: 'Based on PowerVerse Chain\'s DID service, provides identity verification, rule management, and token services.'
                        },
                        orchestration: {
                            title: 'Orchestration Service',
                            desc: 'Implements automated deployment of DeCloud infrastructure through templates.'
                        },
                        management: {
                            title: 'Management',
                            desc: 'Provides Web management interface for various services.'
                        }
                    }
                },
                section2: {
                    title: 'II. Virtualization Solutions: Type1 and Type2',
                    type1: {
                        title: 'Type1 (Bare Metal)',
                        badge: 'High-Performance Solution',
                        arch: {
                            label: 'Architecture Features: ',
                            desc: 'Runs directly on hardware, no host operating system, efficient resource utilization.'
                        },
                        performance: {
                            label: 'Performance: ',
                            desc: 'Low latency, high throughput, precise hardware resource control, optimized network and storage I/O.'
                        },
                        scenario: {
                            label: 'Application Scenarios: ',
                            desc: 'Large-scale data computing, high-load enterprise applications, high-performance computing.'
                        }
                    },
                    type2: {
                        title: 'Type2',
                        badge: 'Flexible Solution',
                        arch: {
                            label: 'Architecture Features: ',
                            desc: 'Runs on host operating system, depends on host machine for resource management.'
                        },
                        performance: {
                            label: 'Performance: ',
                            desc: 'Affected by host resource competition, may experience performance bottlenecks in high-intensity tasks.'
                        },
                        scenario: {
                            label: 'Application Scenarios: ',
                            desc: 'Personal development, small applications, rapid deployment and testing environments.'
                        }
                    }
                },
                section3: {
                    title: 'III. Collaboration with PowerVerse Chain',
                    did: {
                        title: '1. DID-based Virtual Machine Permission Service',
                        item1: 'Creates unique decentralized identity (DID) for each user and virtual machine, associating historical behavior and credit data.',
                        item2: 'Verifies identity through blockchain consensus, no need for centralized institutions, ensuring fairness, security, and immutability.',
                        item3: 'In computing power leasing, both parties can verify each other\'s credit and payment capability, building a transparent and trustworthy trading environment.'
                    },
                    smartContract: {
                        title: '2. Smart Contract-driven Computing Power Trading Aggregator (PowerVerse Market)',
                        item1: 'Buyers and sellers directly reach agreements, automatically executing leasing, settlement, and record-keeping through smart contracts.',
                        item2: 'Eliminates manual negotiation and third-party intermediaries, achieving efficient, transparent, and low-cost computing power trading.'
                    }
                },
                section4: {
                    title: 'IV. Feature Characteristics',
                    chipCompatibility: {
                        title: 'Extensive Chip Compatibility',
                        desc: 'Comprehensively supports CPU, GPU, AI computing chips, and quantum chips, meeting diverse computing needs and maximizing utilization of idle computing power.'
                    },
                    quantum: {
                        title: 'Forward-looking Quantum Computing Support',
                        desc: 'Has initiated quantum chip virtualization technology reserves, providing quantum bit abstraction models and simulation interfaces, supporting quantum algorithm experiments.'
                    },
                    security: {
                        title: 'High Security and Trust Assurance',
                        desc: 'Combines DID identity management, smart contract automatic execution, and blockchain immutable record-keeping to build a fair and transparent trustworthy ecosystem.'
                    },
                    scheduling: {
                        title: 'Efficient Resource Utilization and Dynamic Scheduling',
                        desc: 'Automatically adjusts computing power allocation based on real-time virtual machine load, avoiding resource waste and overload, improving utilization efficiency and reducing costs.'
                    }
                },
                features: {
                    title: 'Core Features',
                    item1: 'Intelligent resource scheduling algorithm',
                    item2: 'Real-time monitoring and alerts',
                    item3: 'Elastic scaling capability',
                    item4: 'Multi-region deployment support'
                }
            },
            market: {
                name: 'PowerVerse Market',
                description: 'Decentralized computing resource trading marketplace optimizing resource allocation and connecting supply and demand; also provides model and data markets to promote knowledge and technology sharing',
                learnMore: 'Learn More',
                pageTitle: 'PowerVerse Market - Decentralized Computing Power Trading Platform',
                subtitle: 'Decentralized Computing Power Trading Platform',
                intro: 'PowerVerse Market is a decentralized computing power trading platform built on PowerVerse Chain and PowerVerse Infra. It connects computing power suppliers and demanders through smart contracts and blockchain technology, achieving automated, transparent, trustless computing resource trading.',
                section1: {
                    title: 'I. Platform Core Functions',
                    function1: {
                        title: '1. Computing Resource Management',
                        item1: 'Suppliers publish computing resource information (CPU/GPU/storage, etc.), setting prices, available time, and other parameters',
                        item2: 'Resource information can be updated in real-time, flexibly adapting to market changes'
                    },
                    function2: {
                        title: '2. Computing Demand Order Management',
                        item1: 'Demanders submit computing demand orders, specifying type, quantity, duration, budget, etc.',
                        item2: 'Platform automatically matches resources, suppliers can also actively accept orders'
                    },
                    function3: {
                        title: '3. Transaction Execution and Monitoring',
                        item1: 'Smart contracts automatically execute computing power supply and fee settlement',
                        item2: 'Demanders can monitor computing power usage and task progress in real-time, with automatic notifications for exceptions'
                    },
                    function4: {
                        title: '4. Data Statistics and Analysis',
                        item1: 'Provides data analysis such as transaction history, resource distribution, price trends, etc.',
                        item2: 'Helps users develop trading strategies, optimize resource utilization and returns'
                    },
                    function5: {
                        title: '5. User Rating and Reputation System',
                        item1: 'Both parties rate each other, ratings are included in the reputation system',
                        item2: 'Reputation affects trading permissions and priority, incentivizing honest trading'
                    }
                },
                section2: {
                    title: 'II. Platform Roles',
                    table: {
                        role: 'Role',
                        responsibility: 'Responsibilities and Rights'
                    },
                    role1: {
                        name: 'Computing Power Supplier',
                        desc: 'Register and publish virtualized computing resources to the platform, obtaining rental fees and token dividends.'
                    },
                    role2: {
                        name: 'Computing Power Demander',
                        desc: 'Lease computing resources for application building, mining, model training, etc., or publish demand orders waiting for matching.'
                    },
                    role3: {
                        name: 'Administrator',
                        desc: 'Maintain market order, execute freezing, blacklisting, and other operations on dishonest users.'
                    },
                    role4: {
                        name: 'Arbitration Committee',
                        desc: 'Handle trading disputes, determine fault parties and compensation plans, or submit to DAO organization for voting decisions.'
                    }
                },
                section3: {
                    title: 'III. Computing Resource Publishing Process',
                    step1: {
                        label: 'Virtualization: ',
                        desc: 'Virtualize local idle computing power into independent virtual machines through PowerVerse Infra.'
                    },
                    step2: {
                        label: 'Registration: ',
                        desc: 'Register virtual resources with the platform, submit detailed technical parameters (CPU/GPU/memory/storage, etc.), platform verifies authenticity.'
                    },
                    step3: {
                        label: 'Scoring: ',
                        desc: 'Platform calculates resource performance scores through weighted parameters.'
                    },
                    step4: {
                        label: 'NFT Certificate Issuance: ',
                        desc: 'Generate a unique NFT for each computing resource, recording ownership, performance, status, and other information.'
                    },
                    step5: {
                        label: 'Listing: ',
                        desc: 'Resources are listed on the platform for demanders to query and lease.'
                    }
                },
                section4: {
                    title: 'IV. Trading Modes',
                    mode1: {
                        title: '1. Direct Lease Trading',
                        step1: 'Demander selects resources',
                        step2: 'Pay PowerVerse Coin',
                        step3: 'Use resources',
                        step4: 'Platform monitoring',
                        step5: 'Expiration settlement',
                        step6: 'Mutual rating'
                    },
                    mode2: {
                        title: '2. Task-based Demand Order',
                        step1: 'Demander publishes task (including requirements, price, acceptance method, etc.)',
                        step2: 'Supplier accepts',
                        step3: 'Execute task',
                        step4: 'Submit results',
                        step5: 'Settlement after acceptance',
                        step6: 'Mutual rating'
                    }
                },
                section5: {
                    title: 'V. Platform Characteristics',
                    feature1: {
                        title: 'Decentralization',
                        desc: 'Peer-to-peer trading, no intermediaries, reducing costs, improving transparency and fairness.'
                    },
                    feature2: {
                        title: 'Security',
                        desc: 'Data encryption, smart contract auditing, blockchain immutability, ensuring trading privacy and reliability.'
                    },
                    feature3: {
                        title: 'Scalability',
                        desc: 'Supports multiple computing resource access, architecture can flexibly expand to adapt to future business growth.'
                    }
                }
            },
            dao: {
                name: 'PowerVerse DAO',
                description: 'Decentralized autonomous organization enabling community members to participate in ecosystem governance and decision-making, fully leveraging community wisdom and strength for self-development and improvement',
                learnMore: 'Learn More',
                pageTitle: 'PowerVerse DAO - Decentralized Autonomous Organization',
                subtitle: 'Decentralized Autonomous Organization',
                slogan: 'Build Together, Govern Together, Share Together - The Governance Core of PowerVerse Ecosystem',
                intro: 'PowerVerse DAO is a decentralized autonomous organization built on PowerVerse Chain, aiming to promote fairness, transparency, and sustainable development of the PowerVerse ecosystem through community collective decision-making and governance.',
                section1: {
                    title: 'I. DAO Workflow',
                    step1: {
                        title: '1. Proposal and Initiation',
                        memberProposal: {
                            label: 'Member Proposal: ',
                            desc: 'Any community member can submit development proposals (technical improvements, market activities, cooperation opportunities, etc.), which must include detailed information such as background, objectives, plans, and budget.'
                        },
                        review: {
                            label: 'Proposal Review: ',
                            desc: 'The review committee elected by the community evaluates the feasibility, innovation, and ecosystem value of proposals, and approved proposals enter the voting phase.'
                        }
                    },
                    step2: {
                        title: '2. Community Voting Decision',
                        votingStart: {
                            label: 'Voting Launch: ',
                            desc: 'Approved proposals enter community voting. Token holders can vote within the specified period.'
                        },
                        execution: {
                            label: 'Result Execution: ',
                            desc: 'After reaching the set approval ratio, proposals are passed and implemented by the project execution team according to plan, with regular progress reports to the community.'
                        }
                    },
                    step3: {
                        title: '3. Implementation and Supervision',
                        teamBuilding: {
                            label: 'Team Building: ',
                            desc: 'Project execution teams are formed through volunteering or recruitment, responsible for task allocation, progress tracking, and quality control.'
                        },
                        supervision: {
                            label: 'Supervision and Evaluation: ',
                            desc: 'The community can monitor progress in real-time through on-chain information. The project supervision group regularly inspects to ensure compliance with proposal standards, and can propose rectification or suspension suggestions when necessary.'
                        }
                    },
                    step4: {
                        title: '4. Results and Feedback',
                        acceptance: {
                            label: 'Acceptance and Sharing: ',
                            desc: 'After project completion, the supervision group accepts the results, and achievements are announced to the community (economic benefits, technological innovations, etc.).'
                        },
                        summary: {
                            label: 'Experience Summary: ',
                            desc: 'Summarize project experience and provide feedback to the community for optimizing DAO development strategies and operational mechanisms.'
                        }
                    }
                },
                section2: {
                    title: 'II. Core Characteristics',
                    feature1: {
                        title: '1. Decentralized Governance',
                        decentralization: {
                            label: 'Power Decentralization: ',
                            desc: 'Through on-chain voting, community members directly participate in major decisions (direction, funding, rules, etc.), achieving democratic governance.'
                        },
                        transparency: {
                            label: 'Transparency and Traceability: ',
                            desc: 'All decisions and transactions are recorded on the blockchain, completely public and verifiable, enhancing trust and supervision.'
                        }
                    },
                    feature2: {
                        title: '2. Community-Driven Development',
                        participation: {
                            label: 'Broad Participation: ',
                            desc: 'Encourage members to participate in technical, market, operational, and other activities, stimulating contributions through token rewards, honor recognition, and other mechanisms.'
                        },
                        diversity: {
                            label: 'Member Diversity: ',
                            desc: 'Gather talents from multiple fields including technical experts, industry practitioners, investors, legal professionals, etc., providing comprehensive support for the ecosystem.'
                        }
                    },
                    feature3: {
                        title: '3. Innovative Economic Model',
                        tokenEconomy: {
                            label: 'Token Economy: ',
                            desc: 'Using PowerVerse Coin as a governance and incentive tool, holders receive rewards by participating in governance, achieving alignment of interests with the ecosystem.'
                        },
                        valueSharing: {
                            label: 'Value Sharing: ',
                            desc: 'The value brought by ecosystem growth is captured and distributed through tokens, allowing holders to share development dividends, enhancing token attractiveness and ecosystem foundation.'
                        }
                    }
                }
            },
            decloud: {
                name: 'DeCloud',
                description: 'Comprehensive decentralized cloud service ecosystem providing SDK development tools, Web3.0 support, metaverse foundation, and SaaS services, covering multiple industry scenarios including esports, gaming, and enterprise collaboration',
                learnMore: 'Learn More',
                pageTitle: 'DeCloud - Web3.0 Decentralized Computing Cloud Platform',
                subtitle: 'Web3.0 Decentralized Computing Cloud Platform',
                intro: 'DeCloud integrates PowerVerse Chain, PowerVerse Infra, and PowerVerse Market to build an open, efficient, secure, and scalable decentralized computing cloud platform. Through optimal resource allocation, it supports diverse computing needs from enterprise-level large-scale computing to individual developer projects, reshaping computing power allocation and usage patterns.',
                section1: {
                    title: 'I. Smarter DePIN Infrastructure',
                    table: {
                        tech: 'Technology',
                        capability: 'Core Capability',
                        value: 'Application Value'
                    },
                    ipfs: {
                        tech: 'IPFS Decentralized Storage',
                        capability: 'AI model training data and DApp data are distributed across multiple nodes.',
                        value: 'Enhance data security and reliability, prevent single points of failure and leaks, reduce costs, and improve efficiency.'
                    },
                    edge: {
                        tech: 'Location-Aware Edge Computing',
                        capability: 'Allocate computing tasks to edge nodes close to data sources or users.',
                        value: 'Reduce latency, improve real-time response, suitable for smart transportation, industrial automation, and other scenarios, optimizing network performance.'
                    },
                    routing: {
                        tech: 'Multi-Graph Topology Routing Network',
                        capability: 'Dynamically select optimal computing paths and resource allocation based on task characteristics and resource availability.',
                        value: 'Achieve efficient task execution and rational resource utilization, improving platform computing performance and stability.'
                    }
                },
                section2: {
                    title: 'II. More Secure and Efficient AI Support',
                    table: {
                        solution: 'Technical Solution',
                        coreTech: 'Core Technology',
                        value: 'Application Scenarios and Value'
                    },
                    privacy: {
                        solution: 'Privacy Computing',
                        coreTech: 'Combine homomorphic encryption and federated learning to achieve separation of inference training and model data.',
                        value: 'Ensure data privacy, support secure AI training and optimization in high-sensitivity fields such as healthcare and finance.'
                    },
                    gpu: {
                        solution: 'GPU Parallel Training',
                        coreTech: 'Provide powerful GPU parallel computing support, combined with optimized scheduling and resource management mechanisms.',
                        value: 'Accelerate large-scale AI model training, shorten training time, and support AI R&D and industry intelligent transformation.'
                    }
                },
                section3: {
                    title: 'III. Richer PowerVerse Market Elements',
                    marketType: 'Market Sector',
                    market1: {
                        title: 'AI Dataset and Model Market',
                        content: {
                            label: 'Main Content: ',
                            desc: 'Provide high-quality datasets and pre-trained models, supporting user trading and sharing.'
                        },
                        value: {
                            label: 'Ecosystem Value: ',
                            desc: 'Promote AI resource circulation and reuse, lower development barriers, and accelerate AI innovation and application popularization.'
                        }
                    },
                    market2: {
                        title: 'Agent and DApp Market',
                        content: {
                            label: 'Main Content: ',
                            desc: 'Developers can publish and trade intelligent Agents and DApps.'
                        },
                        value: {
                            label: 'Ecosystem Value: ',
                            desc: 'Provide commercial monetization channels for developers, enrich platform application ecosystem, and meet user personalized needs.'
                        }
                    }
                },
                section4: {
                    title: 'IV. More Comprehensive Ecosystem Building',
                    sdk: {
                        title: 'SDK Support',
                        function: {
                            label: 'Function Description: ',
                            desc: 'Provide multi-language, multi-framework SDKs for easy integration of DeCloud computing resources.'
                        },
                        value: {
                            label: 'Developer and User Value: ',
                            desc: 'Reduce development difficulty, improve development efficiency, and attract more developers to join the ecosystem.'
                        }
                    },
                    cdn: {
                        title: 'Decentralized CDN',
                        function: {
                            label: 'Function Description: ',
                            desc: 'Distribute DApp content through global nodes.'
                        },
                        value: {
                            label: 'Developer and User Value: ',
                            desc: 'Improve DApp access speed, stability, and attack resistance, optimizing user experience.'
                        }
                    },
                    dataSpace: {
                        title: 'Data Space',
                        function: {
                            label: 'Function Description: ',
                            desc: 'Provide secure and efficient decentralized data management and sharing solutions.'
                        },
                        value: {
                            label: 'Developer and User Value: ',
                            desc: 'Meet the needs of enterprises and individuals for data assetization, supporting data value flow.'
                        }
                    },
                    metaverse: {
                        title: 'Metaverse and Cutting-Edge Support',
                        function: {
                            label: 'Function Description: ',
                            desc: 'Provide powerful computing foundation for virtual scene rendering and real-time interaction.'
                        },
                        value: {
                            label: 'Developer and User Value: ',
                            desc: 'Enable immersive metaverse experiences and expand digital ecosystem boundaries.'
                        }
                    }
                },
                features: {
                    title: 'Core Features',
                    item1: 'Distributed Storage System',
                    item2: 'Data Encryption Protection',
                    item3: 'Edge Computing Support',
                    item4: 'Rich API Interfaces'
                }
            },
            wallet: {
                name: 'PowerVerse Wallet',
                description: 'Secure and convenient digital asset wallet supporting multi-chain asset management, DeFi interactions, and NFT collections, providing users with a one-stop Web3 asset management experience',
                learnMore: 'Learn More',
                pageTitle: 'Wallet - Digital Asset Wallet',
                subtitle: 'Digital Asset Wallet',
                intro: 'PowerVerse Wallet is a secure and easy-to-use multi-chain digital asset wallet supporting PowerVerse Chain and mainstream public chains, providing users with comprehensive services including asset management, DeFi interactions, and NFT collections.',
                section1: {
                    title: 'I. Core Functions',
                    feature1: {
                        title: '1. Multi-Chain Asset Management',
                        desc: 'Supports PowerVerse Chain, Ethereum, BSC, and other public chains, unified management of various digital assets, including mainstream tokens such as PEC, ETH, BNB.'
                    },
                    feature2: {
                        title: '2. Secure Storage',
                        desc: 'Uses hardware encryption and multi-signature technology, private keys stored locally with encryption, supports mnemonic backup, ensuring asset security.'
                    },
                    feature3: {
                        title: '3. DeFi Interactions',
                        desc: 'Built-in DApp browser, supports one-click connection to DeFi protocols, convenient for liquidity mining, staking, lending, and other operations.'
                    },
                    feature4: {
                        title: '4. NFT Management',
                        desc: 'Supports NFT viewing, transfer, and display, easily manage your digital collectibles.'
                    }
                },
                section2: {
                    title: 'II. Global Payment Functions',
                    globalPayment: {
                        title: 'Global Payment Capability',
                        desc: 'PowerVerse Wallet supports digital asset payments worldwide. No matter where you are, you can quickly and securely complete cross-border payments. Supports multiple payment methods including QR code payment, NFC near-field payment, online payment, making digital assets truly a globally accepted payment tool.',
                        item1: 'Supports payment networks in 200+ countries and regions worldwide',
                        item2: 'Real-time exchange rate conversion, automatically calculates optimal payment path',
                        item3: 'Low fees, saving over 80% compared to traditional cross-border payments',
                        item4: 'Instant settlement, no need to wait for bank business days'
                    }
                },
                section3: {
                    title: 'III. DEX Trading Functions',
                    dexTrading: {
                        title: 'Decentralized Exchange Integration',
                        desc: 'PowerVerse Wallet has built-in decentralized exchange (DEX) functionality, allowing token trading without leaving the wallet. Supports multiple trading pairs, provides optimal price routing, ensuring users get the best trading experience.',
                        item1: 'Integrates multiple mainstream DEXs, automatically finds optimal prices',
                        item2: 'Supports various order types including limit orders and market orders',
                        item3: 'Real-time price monitoring and trading alerts',
                        item4: 'Trading history records and profit analysis'
                    }
                },
                section4: {
                    title: 'IV. Full-Scene Cloud Gaming Integration',
                    cloudGaming: {
                        title: 'Seamless Gaming Experience',
                        desc: 'PowerVerse Wallet deeply integrates with the cloud gaming ecosystem, achieving unified management of in-game assets, items, and NFTs. Players can use the wallet to directly log into games, use tokens to purchase game items, trade in-game NFTs, truly realizing full-scene integration of Web3 gaming.',
                        item1: 'One-click login to cloud gaming platforms, no need for repeated registration',
                        item2: 'Real-time synchronization of in-game assets, supports cross-game asset transfer',
                        item3: 'Game items NFTized, can be freely traded on secondary markets',
                        item4: 'Game earnings automatically settled to wallet, supports withdrawal and reinvestment'
                    }
                },
                features: {
                    title: 'Core Features',
                    item1: 'Multi-Chain Support',
                    item1Desc: 'Support for PowerVerse Chain, Ethereum, BSC and other mainstream public chains',
                    item2: 'Secure and Reliable',
                    item2Desc: 'Hardware encryption, multi-signature, mnemonic backup for comprehensive asset security',
                    item3: 'DeFi Integration',
                    item3Desc: 'Built-in DApp browser for seamless connection to DeFi ecosystem',
                    item4: 'NFT Management',
                    item4Desc: 'Complete NFT viewing, transfer, and display functionality'
                }
            },
            scan: {
                name: 'PowerVerse Scan',
                description: 'Blockchain explorer providing on-chain data queries, transaction tracking, address analysis, and other functions, making on-chain activities transparent and traceable',
                learnMore: 'Learn More',
                pageTitle: 'Scan - Blockchain Explorer',
                subtitle: 'Blockchain Explorer',
                intro: 'PowerVerse Scan is the official blockchain explorer of PowerVerse Chain, providing comprehensive on-chain data query and analysis services, allowing users to easily track transactions, view blocks, analyze addresses, achieving transparency of on-chain activities.',
                section1: {
                    title: 'I. Core Functions',
                    feature1: {
                        title: '1. Block Query',
                        desc: 'View latest block information in real-time, including block height, timestamp, transaction count, Gas usage, and other detailed data.'
                    },
                    feature2: {
                        title: '2. Transaction Tracking',
                        desc: 'Quickly query transaction details through transaction hash, including sender, receiver, amount, Gas fees, transaction status, etc.'
                    },
                    feature3: {
                        title: '3. Address Analysis',
                        desc: 'View balance, transaction history, token holdings, contract interaction records, etc., of any address, comprehensively understand address activities.'
                    },
                    feature4: {
                        title: '4. Smart Contract Query',
                        desc: 'View smart contract code, ABI, call records, event logs, etc., convenient for developer debugging and user verification.'
                    }
                },
                features: {
                    title: 'Core Features',
                    item1: 'Real-Time Data',
                    item1Desc: 'Real-time synchronization of on-chain data ensuring accuracy and timeliness',
                    item2: 'Transaction Tracking',
                    item2Desc: 'Complete transaction history with multi-dimensional queries and filtering',
                    item3: 'Address Analysis',
                    item3Desc: 'In-depth address activity analysis with visualized data presentation',
                    item4: 'Contract Query',
                    item4Desc: 'Complete smart contract information supporting code verification and call analysis'
                }
            },
            computingPort: {
                name: 'Computing Port',
                description: 'Decentralized intelligent computing platform based on PowerVerse Chain, aggregating global idle GPU/CPU resources, achieving tokenization, standardization, and trusted trading of computing assets',
                learnMore: 'Learn More',
                pageTitle: 'Computing Port - Decentralized Intelligent Computing Platform',
                subtitle: 'Decentralized Intelligent Computing Platform',
                intro: 'Computing Port (XAI Center) is a decentralized intelligent computing platform built on PowerVerse Chain, dedicated to aggregating global idle GPU/CPU resources and achieving tokenization, standardization, and trusted trading of computing assets through blockchain technology.',
                section1: {
                    title: 'I. Core Functions',
                    feature1: {
                        title: '1. Computing Power Segmentation and Pooling',
                        desc: 'At the computing granularity level, the platform\'s multiple capabilities effectively ensure isolation and security, easily handling computing resource requirements of different granularities.',
                        item1: 'Multi-instance GPU Operation: Improve the utilization efficiency of a single GPU',
                        item2: 'GPU Passthrough Technology: Ensure seamless connection of high-performance computing tasks',
                        item3: 'Multi-node Parallel Computing: Extend computing power to unprecedented heights, meeting large-scale computing requirements',
                        detail: 'Based on container technology, combined with PowerVerse Infra driver-level interception technology, achieve flexible allocation and memory segmentation of multi-brand GPU single cards. Users can customize computing specifications and segmentation specifications according to actual needs, easily achieve shared computing power and memory slice management. Support users to easily form public computing pools or dedicated computing pools, whether for internal team resource sharing or to ensure independent computing requirements for specific projects, all can be flexibly handled, supporting multiple scheduling methods, batch scheduling, priority scheduling, and preemptive scheduling.'
                    },
                    feature2: {
                        title: '2. Data Platform',
                        desc: 'Provide unified, diverse data storage, data management, and elastic scaling storage services, automatically mount storage directories through container environments.',
                        item1: 'Seamless integration, automatically provide users with public storage services, provide shared data control, tenant-level isolation, parallel read-write control, SFTP support and other capabilities',
                        item2: 'Provide intuitive and easy-to-use visualization pages, users can apply and view online, upload and download on pages, easily manage resources',
                        item3: 'Support on-demand expansion and contraction, users can flexibly adjust storage capacity according to business needs, without worrying about insufficient storage space or resource waste'
                    },
                    feature3: {
                        title: '3. Full Lifecycle Model Training and Inference',
                        desc: 'Provide full lifecycle support from model development, model training, model deployment, model inference to model optimization.',
                        devTitle: 'Development Environment Service',
                        dev1: 'Create development environment online in seconds, can create development machines according to CPU cores, memory, GPU model, quantity, system disk, etc.',
                        dev2: 'Support cardless boot, shutdown, online development Jupyter, Python, VScode, save images',
                        dev3: 'Support scheduled shutdown, scheduled release and other resource recycling strategies',
                        trainTitle: 'Distributed Training Service',
                        trainDesc: 'Users can start training tasks and fine-tuning services to adjust models to increase training for more fine-grained business scenarios, supporting multimodal training, pre-training DLC, SFT fine-tuning, etc.',
                        evalTitle: 'Model Effect Evaluation',
                        evalDesc: 'Test the performance, efficiency, and applicability of large models based on test datasets, and can be evaluated in terms of performance indicators, generalization ability, inference speed and latency, resource consumption, interpretability, scalability, model size, data dependency, etc.',
                        inferTitle: 'Online Inference',
                        infer1: 'Seamless Deployment and Customization: Simplify the deployment process to achieve a true "one-click deployment" experience, deploy models directly from the model marketplace; also support uploading private models and flexible deployment through public images, custom inference images, or specified image addresses',
                        infer2: 'Full Lifecycle Management and Elastic Resource Scheduling: Provide full lifecycle management of online inference service instances, including instant scaling up and down operations to ensure services scale smoothly with business needs. Real-time monitoring of inference instance running status, and provide log search and query functions',
                        optTitle: 'Model Optimization',
                        optDesc: 'Provide professional model tuning services, help users scientifically compare model effects through model evaluation mechanisms, ensuring precise matching of model selection with business needs. At the same time, continuously explore inference acceleration technologies, committed to significantly improving inference speed while maintaining model accuracy.'
                    },
                    feature4: {
                        title: '4. Intelligent Monitoring and Self-Healing',
                        desc: 'Based on PowerVerse Infra\'s monitoring management service, provide visualized monitoring data, configurable alert services, and automated fault handling, simplify operations and maintenance, and achieve intelligent service operations and maintenance.',
                        monitorTitle: 'Intelligent Monitoring and Multi-dimensional Resource Visualization',
                        monitorDesc: 'Through a unified operations management platform, standardized and visualized management of key operational elements such as computing resources, storage resources, and network resources is achieved. Monitoring dimensions are extensive, supporting multi-metric monitoring based on three dimensions: computing nodes, GPU cards, and containers, including CPU utilization, memory utilization, GPU utilization, GPU memory utilization, network efficiency monitoring, as well as NVLink monitoring and TensorCore monitoring during computation.',
                        alertTitle: 'Alert Configuration and Notification',
                        alertDesc: 'Supports users to customize alert rule groups according to business needs, including but not limited to resource threshold alerts, performance anomaly alerts, etc. Once alert conditions are triggered, the system immediately generates alert records and sends alert notifications to designated recipients through multiple channels such as webhooks and email.',
                        faultTitle: 'Fault Detection and Repair',
                        faultDesc: 'Automatically detects potential failures in the cluster, such as hardware failures, software exceptions, or resource bottlenecks. Once a failure is detected, the system quickly initiates self-healing mechanisms:',
                        fault1: 'Fault Isolation: Marks affected nodes or GPU cards as "tainted" and automatically prevents new tasks from being scheduled to these resources, preventing failure propagation',
                        fault2: 'Task Migration and Retry: Automatically migrates tasks executing on that node to other healthy nodes and attempts to re-execute failed tasks, ensuring business continuity',
                        fault3: 'Node Restart and Detection: For temporary failures that can be recovered by restart, automatically restarts nodes and verifies service status; after verification, nodes automatically return to the computing queue',
                        fault4: 'Offline Maintenance and Recovery: For failures that cannot be automatically fixed, the system automatically takes nodes/GPU cards offline and notifies relevant operations personnel; after repair and verification, automatically restores resources to the computing queue'
                    },
                    feature5: {
                        title: '5. Edge Computing',
                        desc: 'Provide edge computing capabilities, building a highly scalable, open, and intelligent cloud-edge collaborative infrastructure platform, accurately solving multiple challenges in edge computing scenarios, achieving deep integration of edge computing and AI scenario applications.',
                        item1: 'User Self-Service Optimization: Provide user self-service capabilities, covering the entire process from rapid account creation to resource application, one-click activation, convenient use, and automatic release; users can choose shared resources billed by task time or dedicated resources billed by configuration based on their needs',
                        item2: 'System Management and Multi-Tenant Support: Support multi-tenant resource and business isolation, ensuring that each tenant\'s business does not interfere with each other, supporting sub-accounts and fine-grained role permission management',
                        item3: 'Pricing and Billing: Through intuitive and easy-to-understand visualization pages, build comprehensive and flexible pricing strategies, covering various pricing methods such as enumeration, linear, tiered, etc., to meet different users\' cost preferences and actual usage scenarios',
                        item4: 'Customer Operations: Achieve full lifecycle customer management, comprehensively collecting and analyzing customer data, covering registration, authentication, recharge, consumption and other aspects, laying a solid foundation for precision marketing and personalized services'
                    }
                },
                features: {
                    title: 'Core Features',
                    item1: 'Computing Pooling',
                    item1Desc: 'Flexible computing resource partitioning and pooling management, supporting both public and dedicated computing pools',
                    item2: 'Model Training and Inference',
                    item2Desc: 'Complete AI model development, training, deployment, and inference lifecycle support',
                    item3: 'Intelligent Monitoring',
                    item3Desc: 'Automated fault detection and self-healing mechanisms to ensure stable service operation',
                    item4: 'Data Platform',
                    item4Desc: 'Unified data storage and management services with elastic scaling support'
                }
            },
            xaiToken: {
                name: 'RWA Token XAI',
                description: 'Core functional token and value reserve token in XRWA AI ecosystem, serving three key functions: profit distribution, service payment, and ecosystem governance, connecting physical computing power with on-chain finance',
                learnMore: 'Learn More',
                pageTitle: 'RWA Token XAI - Core Ecosystem Token',
                subtitle: 'Core Ecosystem Token',
                intro: 'XAI is the core functional token and value reserve token in the XRWA AI ecosystem, developed based on ERC-3643 standard, serving three core functions: ecosystem value circulation medium, profit distribution tool, and service payment credential.',
                section1: {
                    title: 'I. Core Functions',
                    feature1: {
                        title: '1. Sole Payment Tool for Ecosystem Profit Distribution',
                        desc: 'Ecosystem profits of GNFT and GUnit holders are distributed in XAI form. This design deeply binds assets with XAI value, ensuring token holders receive profit dividends generated by computing assets.',
                        gnftDesc: 'GNFT is the unique on-chain proof of ownership for physical GPU assets in the XRWA ecosystem, developed based on the ERC-721 standard, with indivisible, non-fungible, and unique identification technical attributes. Each GNFT corresponds to a hardware-verified and performance-tested GPU device in the real world, achieving 1:1 anchoring of physical assets to on-chain assets.',
                        gunitDesc: 'GUnit is a token generated by splitting GNFT, following the ERC-3643 standard, with divisible, fungible, and standardized technical attributes, while also integrating KYC/AML related information. Each GUnit corresponds to a unit of computing power share of the underlying GPU asset of GNFT.',
                        xaiDesc: 'XAI, as the sole payment tool for profit distribution, deeply binds the income of GNFT and GUnit holders with XAI value, forming a stable value cycle.'
                    },
                    feature2: {
                        title: '2. Mandatory Payment Credential for AI Ecosystem Services',
                        desc: 'In XRWA\'s AI application ecosystem, XAI is the sole service payment tool, covering all computing power and AI-related service scenarios, building rigid demand for XAI and driving token value appreciation.',
                        intro: 'XAI covers all AI scenario interactions in the XRWA ecosystem and is the value bridge connecting the asset side and application side. In the XAI Center platform, payments for all computing services, model training, inference services, data storage and other services use XAI tokens, forming rigid payment demand.',
                        usage: 'This "mandatory payment" mechanism builds rigid demand for XAI. The usage scenarios and demand for XAI will grow synchronously, thereby driving token value appreciation. As the ecosystem expands, XAI payment scenarios will continue to expand, including:',
                        service1: 'Computing power leasing and purchase services',
                        service2: 'AI model training and inference services',
                        service3: 'Data storage and management services',
                        service4: 'Agent application development and deployment services'
                    },
                    feature3: {
                        title: '3. Core Token for Ecosystem Governance and Node Incentives',
                        desc: 'XAI holders have ecosystem governance rights and can participate in key XRWA ecosystem decisions through on-chain voting. Core roles require XAI staking to obtain node qualifications, ensuring compliance and reliability of ecosystem nodes through staking penalty mechanisms.',
                        governanceTitle: 'Governance Participation',
                        governanceIntro: 'XAI holders have ecosystem governance rights and can participate in key XRWA ecosystem decisions through on-chain voting, including:',
                        gov1: 'Protocol upgrade and feature improvement proposals',
                        gov2: 'Asset allocation and operational strategy adjustments',
                        gov3: 'Profit distribution mechanism optimization',
                        gov4: 'Ecosystem partner selection',
                        stakingTitle: 'Node Staking',
                        stakingIntro: 'Core roles in the XRWA ecosystem require staking a certain amount of XAI to obtain node qualifications, with a "staking penalty" mechanism ensuring compliance and reliability of ecosystem nodes. The staking mechanism includes:',
                        stake1: 'Minimum staking requirement: Becoming a validator requires staking a minimum amount of XAI',
                        stake2: 'Staking rewards: Validators receive block rewards and transaction fees based on stake amount and online time',
                        stake3: 'Penalty mechanism: Malicious behavior (such as double signing, prolonged offline) will result in partial or full confiscation of staked tokens'
                    }
                },
                section2: {
                    title: '2. Economic Model',
                    issuance: {
                        title: 'Issuance Mechanism',
                        intro: 'XAI adopts a combined approach of "Genesis Issuance + Ecosystem Mining":',
                        genesis: {
                            title: 'Genesis Issuance',
                            desc: 'The genesis issuance portion is used for project launch, team incentives, and institutional investment, ensuring sufficient funding and resource support in the early stages of the project.'
                        },
                        mining: {
                            title: 'Ecosystem Mining',
                            intro: 'The ecosystem mining portion is gradually released through the following methods:',
                            item1: 'GNFT/GUnit Holding Mining: Users holding computing power asset tokens can earn XAI mining rewards',
                            item2: 'AI Service Usage Mining: Users using the Computing Port platform services can earn XAI rewards',
                            item3: 'Node Validation Mining: Nodes participating in network validation can earn XAI rewards',
                            summary: 'This mechanism ensures that token circulation matches ecosystem development progress, avoiding excessive inflation and maintaining token value stability.'
                        }
                    },
                    anchoring: {
                        title: 'Value Anchoring System',
                        intro: 'GNFT, GUnit, and XAI do not exist independently in the XRWA ecosystem, but form a collaborative system of "Asset Rights Confirmation - Fragmentation Circulation - Value Interaction":',
                        foundation: {
                            title: 'Foundation Layer: GNFT Asset Anchoring',
                            desc: 'GNFT converts physical GPU assets into on-chain rights confirmation assets, providing a "value foundation" for the ecosystem. Without GNFT asset anchoring, GUnit fragmentation would lose underlying asset support, and XAI revenue distribution would lack a value source.'
                        },
                        circulation: {
                            title: 'Circulation Layer: GUnit Micro-amount Empowerment',
                            desc: 'By fragmenting GNFT, GUnit converts high-value assets into tokens for micro-transactions, enhancing the liquidity and inclusiveness of ecosystem assets, attracting more users to participate, bringing incremental capital and computing power demand to the ecosystem, thereby expanding XAI payment scenarios.'
                        },
                        value: {
                            title: 'Value Layer: XAI Ecosystem Connection',
                            desc: 'As a revenue distribution tool, XAI connects asset holders with ecosystem contributors, incentivizing asset holders to provide more computing power through revenue distribution, and incentivizing AI users to use ecosystem services through payment demand, inversely promoting the on-chain scale of GNFT and the circulation activity of GUnit.'
                        }
                    }
                },
                features: {
                    title: 'Core Features',
                    item1: 'Profit Distribution',
                    item1Desc: 'Ecosystem profits of GNFT and GUnit holders are distributed in XAI form',
                    item2: 'Service Payment',
                    item2Desc: 'Mandatory payment credential for AI ecosystem services, covering all computing and AI-related service scenarios',
                    item3: 'Ecosystem Governance',
                    item3Desc: 'Holders have governance rights and can participate in key decisions through on-chain voting',
                    item4: 'Value Anchoring',
                    item4Desc: 'Deeply bound to physical computing assets to ensure token value stability'
                }
            }
        },
        scenarios: {
            title: 'Application Scenarios',
            description: 'PowerVerse Chain empowers diverse application scenarios',
            ai: {
                title: 'AI Model Training',
                description: 'Distributed GPU resource pool supporting large-scale AI model training and inference, reducing computing costs',
                stats: {
                    costReduction: 'Cost Reduction',
                    gpuNodes: 'GPU Nodes',
                    availability: '24/7 Service'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'Distributed GPU Resource Pool: Integrates global idle GPU resources to form a powerful distributed computing cluster',
                    item2: 'Intelligent Task Scheduling: AI algorithms automatically match optimal computing nodes to maximize resource utilization',
                    item3: 'Model Training Acceleration: Supports mainstream frameworks like PyTorch and TensorFlow, training speed increased by 3-5x',
                    item4: 'Inference Service Optimization: Low-latency inference services supporting real-time AI application deployment',
                    item5: 'Cost Transparency: Pay-as-you-go with no hidden fees, saving over 60% compared to traditional cloud services'
                },
                cases: {
                    title: 'Application Cases',
                    item1: 'Large Language Model Training: Supports distributed training of large-scale language models like GPT and BERT',
                    item2: 'Computer Vision: Accelerates CV tasks such as image recognition, object detection, and semantic segmentation',
                    item3: 'Natural Language Processing: NLP applications including text classification, sentiment analysis, and machine translation',
                    item4: 'Recommendation Systems: Personalized recommendation algorithm training and real-time inference'
                },
                features: {
                    gpuCluster: {
                        title: 'GPU Cluster',
                        desc: 'Integrates global GPU resources to provide powerful computing capabilities'
                    },
                    costOptimization: {
                        title: 'Cost Optimization',
                        desc: 'Cost reduction of over 60% compared to traditional cloud services'
                    },
                    elasticScaling: {
                        title: 'Elastic Scaling',
                        desc: 'Dynamically adjust computing resources based on demand'
                    }
                }
            },
            science: {
                title: 'Scientific Computing',
                description: 'High-performance computing clusters providing powerful computing capabilities for research institutions',
                stats: {
                    researchInstitutes: 'Research Institutes',
                    dataProcessing: 'Data Processing',
                    dataProcessingValue: 'PB level',
                    availability: 'Availability'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'High-Performance Computing Clusters: Provides supercomputing-level computing capabilities supporting large-scale parallel computing',
                    item2: 'Multi-Disciplinary Support: Covers multiple scientific fields including physics, chemistry, biology, astronomy, and meteorology',
                    item3: 'Data Security Assurance: End-to-end encryption compliant with research data security standards',
                    item4: 'Collaborative Research Platform: Supports multi-institutional collaborative research, data sharing, and collaboration',
                    item5: 'Cost Efficiency: Pay-as-you-use without massive hardware investment, reducing research costs'
                },
                fields: {
                    title: 'Application Fields',
                    item1: 'Molecular Dynamics Simulation: Biochemical calculations such as protein folding and drug molecule design',
                    item2: 'Climate Simulation: Meteorological research including global climate models and extreme weather prediction',
                    item3: 'Astrophysics: Astronomical calculations such as universe simulation, galaxy evolution, and black hole research',
                    item4: 'Materials Science: New material design, performance prediction, and quantum computing',
                    item5: 'Genomics Research: Genome analysis, protein structure prediction, and precision medicine'
                },
                features: {
                    hpc: {
                        title: 'High-Performance Computing',
                        desc: 'Supports large-scale scientific computing tasks'
                    },
                    dataSecurity: {
                        title: 'Data Security',
                        desc: 'Multiple encryption protection ensuring data security'
                    },
                    professionalSupport: {
                        title: 'Professional Support',
                        desc: 'Provides professional technical support for research institutions'
                    }
                }
            },
            render: {
                title: 'Rendering Services',
                description: 'Distributed rendering network accelerating 3D animation, film effects, and other rendering tasks',
                stats: {
                    speedup: 'Rendering Speedup',
                    hdSupport: 'HD Support',
                    costSaving: 'Cost Saving'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'Distributed Rendering Architecture: Distributes rendering tasks across multiple nodes for parallel processing, significantly reducing rendering time',
                    item2: 'Multi-Format Support: Supports mainstream 3D software including Blender, Maya, 3ds Max, and Cinema 4D',
                    item3: 'High-Quality Output: Supports 4K and 8K ultra-high-definition rendering meeting film-grade production requirements',
                    item4: 'Real-Time Preview: Provides real-time rendering preview functionality for rapid iteration and optimization',
                    item5: 'Intelligent Scheduling: Automatically allocates optimal rendering nodes to maximize rendering efficiency'
                },
                scenarios: {
                    title: 'Application Scenarios',
                    item1: 'Film Effects: CG effects rendering for movies and TV series, significantly shortening production cycles',
                    item2: 'Animation Production: Batch rendering tasks for 3D animations and game cutscenes',
                    item3: 'Architectural Visualization: Architectural renderings, interior design rendering, and VR scene creation',
                    item4: 'Product Design: Product renderings, advertising videos, and e-commerce display images',
                    item5: 'Game Development: Game scene rendering, character modeling, and texture mapping'
                },
                features: {
                    fastRendering: {
                        title: 'Fast Rendering',
                        desc: 'Distributed rendering significantly reduces rendering time'
                    },
                    quality: {
                        title: 'Quality Assurance',
                        desc: 'Ensures rendering quality and consistency'
                    },
                    costSaving: {
                        title: 'Cost Saving',
                        desc: 'Reduces rendering costs and improves efficiency'
                    }
                }
            },
            edge: {
                title: 'Edge Computing',
                description: 'Edge node network providing low-latency, highly available edge computing services',
                stats: {
                    lowLatency: 'Ultra-Low Latency',
                    edgeNodes: 'Edge Nodes',
                    availability: 'Availability'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'Global Edge Nodes: Deploys edge computing nodes in major cities to provide nearby services',
                    item2: 'Ultra-Low Latency: Data processing completed at the edge with latency below 10ms',
                    item3: 'High Availability Architecture: Multi-node redundancy with automatic failover ensuring service continuity',
                    item4: 'Data Localization: Sensitive data can be processed locally meeting data compliance requirements',
                    item5: 'Elastic Scaling: Automatically scales edge nodes based on traffic to handle sudden demand'
                },
                scenarios: {
                    title: 'Application Scenarios',
                    item1: 'Real-Time Gaming: Cloud gaming and AR/VR applications requiring extremely low-latency interactive experiences',
                    item2: 'IoT Devices: Real-time data processing for smart home and industrial IoT devices',
                    item3: 'Video Streaming: Streaming services including live streaming, real-time transcoding, and CDN acceleration',
                    item4: 'Autonomous Driving: Vehicle edge computing, roadside device data processing, and real-time decision-making',
                    item5: 'Financial Trading: Financial applications including high-frequency trading, real-time risk control, and payment processing'
                },
                features: {
                    lowLatency: {
                        title: 'Low Latency',
                        desc: 'Edge nodes process nearby with millisecond-level latency'
                    },
                    highAvailability: {
                        title: 'High Availability',
                        desc: 'Distributed architecture ensures high service availability'
                    },
                    globalCoverage: {
                        title: 'Global Coverage',
                        desc: 'Edge nodes cover major regions worldwide'
                    }
                }
            },
            blockchain: {
                title: 'Blockchain Applications',
                description: 'Provides powerful decentralized computing infrastructure for Web3 applications, supporting DApp development and smart contract execution',
                stats: {
                    dapps: 'DApp Applications',
                    tps: 'TPS Processing',
                    transactionCost: 'Transaction Cost'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'High-Performance Blockchain: Adopts innovative consensus mechanisms supporting high TPS transaction processing',
                    item2: 'Smart Contract Platform: Supports multiple smart contract languages including Solidity and Rust',
                    item3: 'Cross-Chain Interoperability: Supports cross-chain interactions with other mainstream blockchain networks',
                    item4: 'Developer-Friendly: Comprehensive development tools and documentation lowering DApp development barriers',
                    item5: 'Low Gas Fees: Optimized network architecture significantly reducing transaction costs'
                },
                scenarios: {
                    title: 'Application Scenarios',
                    item1: 'DeFi Applications: Decentralized exchanges, lending protocols, liquidity mining, etc.',
                    item2: 'NFT Marketplace: Digital art trading, game items, collectibles, and other NFT applications',
                    item3: 'GameFi: Blockchain games, Play-to-Earn, and metaverse applications',
                    item4: 'DAO Governance: Decentralized autonomous organizations, community voting, and proposal execution',
                    item5: 'Supply Chain Traceability: Product traceability, anti-counterfeiting verification, and logistics tracking'
                }
            },
            bigdata: {
                title: 'Big Data Analytics',
                description: 'Distributed big data processing platform supporting storage, analysis, and mining of massive data',
                stats: {
                    dataStorage: 'Data Storage',
                    dataStorageValue: 'EB level',
                    streamProcessing: 'Stream Processing',
                    streamProcessingValue: 'Real-time',
                    processingCapacity: 'Processing Capacity',
                    processingCapacityValue: 'PB/day'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'Distributed Storage: Decentralized storage network ensuring data security and reliability',
                    item2: 'Real-Time Analytics: Supports stream data processing for real-time business data analysis',
                    item3: 'Machine Learning: Integrated ML algorithm library supporting data mining and predictive analytics',
                    item4: 'Visualization Platform: Provides rich data visualization tools and reports',
                    item5: 'Elastic Scaling: Automatically scales computing resources based on data volume'
                },
                scenarios: {
                    title: 'Application Scenarios',
                    item1: 'Business Intelligence: Enterprise data analysis, report generation, and decision support',
                    item2: 'User Profiling: User behavior analysis, precision marketing, and personalized recommendations',
                    item3: 'Risk Control: Financial risk control, fraud detection, and anomaly monitoring',
                    item4: 'IoT Analytics: IoT device data collection, real-time monitoring, and predictive maintenance',
                    item5: 'Log Analysis: System log analysis, security auditing, and performance optimization'
                }
            },
            cloudgaming: {
                title: 'AI-Driven Decentralized Cloud Gaming Solution Provider',
                description: 'PowerVerse Chain Decentralized Cloud Gaming Platform, Full Device Compatibility + PC / Mobile / Tablet / TV, Low-Latency High-Quality Immersive Experience, Perfectly Compatible with Motion Games like Dancing and Fruit Ninja, Boundless Gaming.',
                download: 'Download Client',
                startPlaying: 'Start Playing Now',
                gameImages: {
                    title: 'Support 1000+ Games Online'
                },
                videos: {
                    title: 'Product Demo Videos',
                    video1: 'Cloud Gaming Platform Demo',
                    video2: 'Gaming Experience Showcase'
                },
                images: {
                    title: 'Feature Showcase',
                    item1: 'Ultra-low latency, latency as low as 20ms',
                    item2: 'Support 4K/8K ultra-high definition rendering',
                    item3: 'Support PC, mobile, tablet and other devices',
                    item4: 'Rich game library, play instantly',
                    item5: 'Decentralized architecture, secure and reliable',
                    item6: 'Intelligent resource scheduling, optimized experience'
                },
                esports: {
                    title: 'E-sports Hotel',
                    item1: "E-sports Hotel: A popular choice for young people's social gatherings. PowerVerse Chain offers a brand-new operation mode, eliminating the need for high-end PCs and significantly reducing hardware costs.",
                    item2: 'Deploy cloud gaming terminals for a cross-platform gaming experience. From AAA blockbusters to competitive games, play with one click without waiting, featuring low latency and high image quality, and supporting multiplayer online battles.',
                    item3: 'The intelligent billing system allows flexible setting of charging modes. Blockchain technology ensures transparent and secure transactions, building a bridge of trust between hotels and players.'
                },
                stats: {
                    lowLatency: 'Ultra-Low Latency',
                    hdSupport: 'HD Support',
                    availability: '24/7 Service'
                },
                workflow: {
                    title: 'Complete Workflow Loop',
                    step1: 'User Registration: Connect via PowerVerse Chain wallet for decentralized identity authentication',
                    step2: 'Game Selection: Browse game library and select desired games',
                    step3: 'Resource Allocation: PowerVerse Infra intelligently schedules edge computing nodes to allocate GPU resources nearby',
                    step4: 'Game Launch: Games run on cloud GPU and stream to user devices via low-latency streaming',
                    step5: 'Real-Time Interaction: User operations uploaded in real-time, game graphics rendered and streamed',
                    step6: 'Payment Settlement: Pay with PowerVerse Token (PEC) based on usage time, automatically settled by smart contracts',
                    step7: 'Resource Release: After game ends, GPU resources automatically released back to resource pool for other users'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'Decentralized Architecture: No centralized servers, utilizing global distributed GPU resources',
                    item2: 'Low-Latency Experience: Edge computing nodes serve nearby, latency below 20ms',
                    item3: 'Cost Advantage: Pay-as-you-go, no need to purchase expensive hardware, lowering gaming barriers',
                    item4: 'High-Quality Rendering: Support 4K/8K ultra-high definition graphics, smooth gaming experience',
                    item5: 'Cross-Platform Support: Support PC, mobile, tablet and other devices, play anywhere anytime'
                },
                scenarios: {
                    title: 'Application Scenarios',
                    item1: 'AAA Cloud Gaming: Play instantly without download, enjoy top-tier gaming experience',
                    item2: 'Mobile Cloud Gaming: Play PC games on mobile devices, breaking device performance limits',
                    item3: 'VR/AR Gaming: Support virtual and augmented reality games, immersive experience',
                    item4: 'Game Streaming: Low-latency game streaming with real-time interaction'
                },
                features: {
                    lowLatency: {
                        title: 'Ultra-Low Latency',
                        desc: 'Edge nodes serve nearby, latency below 20ms'
                    },
                    hdQuality: {
                        title: 'HD Quality',
                        desc: 'Support 4K/8K ultra-high definition rendering'
                    },
                    costEffective: {
                        title: 'Cost Advantage',
                        desc: 'Pay-as-you-go, no hardware purchase needed'
                    }
                }
            },
            computingexchange: {
                title: 'Computing Power Exchange',
                description: 'Decentralized computing power trading market connecting supply and demand, enabling free flow of computing resources',
                goToTrade: 'Go to Trade Market',
                links: {
                    title: 'Related Links',
                    market: 'Go to PowerVerse Market',
                    infra: 'Learn about PowerVerse Infra',
                    token: 'View PowerVerse Token (PEC) Info',
                    workflow: 'View Full Workflow Diagram'
                },
                stats: {
                    providers: 'Providers',
                    transactions: 'Transactions',
                    successRate: 'Success Rate'
                },
                workflow: {
                    title: 'Complete Workflow Loop',
                    step1: 'Provider Registration: GPU/CPU resource providers register on PowerVerse Market and publish resource information',
                    step2: 'Resource Listing: Set specifications, prices, available time, etc., with resource information stored on-chain',
                    step3: 'Demand Publishing: Demand side publishes orders specifying computing type, quantity, duration, budget',
                    step4: 'Smart Matching: PowerVerse Market smart contracts automatically match supply and demand, or providers actively accept orders',
                    step5: 'Order Confirmation: Both parties confirm order, demand side pays PowerVerse Token (PEC) as deposit',
                    step6: 'Resource Allocation: PowerVerse Infra automatically allocates computing resources based on order and starts virtual machines',
                    step7: 'Task Execution: Demand side submits computing tasks, system automatically executes and returns results',
                    step8: 'Real-Time Monitoring: Both parties can view computing usage, task progress, resource status in real-time',
                    step9: 'Auto Settlement: After task completion, smart contracts automatically settle based on actual usage time and release deposit',
                    step10: 'Rating Feedback: Both parties rate each other, ratings recorded in reputation system affecting future transaction priority',
                    step11: 'Resource Recovery: Computing resources automatically released back to resource pool for other orders'
                },
                coreAdvantages: {
                    title: 'Core Advantages',
                    item1: 'Decentralized Trading: No third-party intermediaries, direct trading between buyers and sellers, reducing transaction costs',
                    item2: 'Smart Contract Guarantee: Entire transaction executed by smart contracts, automatic settlement, secure and reliable',
                    item3: 'Transparent Pricing: Market prices publicly transparent, free negotiation between supply and demand',
                    item4: 'Flexible Trading: Support hourly, daily, monthly and other billing methods',
                    item5: 'Reputation System: Blockchain-based reputation rating system ensuring transaction security'
                },
                scenarios: {
                    title: 'Application Scenarios',
                    item1: 'AI Training Computing Rental: Provide GPU computing power to AI companies for model training',
                    item2: 'Rendering Computing Trading: Provide rendering computing power to film companies, accelerating project production',
                    item3: 'Scientific Computing Resources: Provide high-performance computing resources to research institutions',
                    item4: 'Idle Resource Monetization: Individuals or enterprises can list idle GPU/CPU resources for trading and earn revenue'
                },
                features: {
                    decentralized: {
                        title: 'Decentralized',
                        desc: 'No intermediaries, direct trading'
                    },
                    smartContract: {
                        title: 'Smart Contract',
                        desc: 'Automatic execution, secure and reliable'
                    },
                    transparent: {
                        title: 'Transparent Pricing',
                        desc: 'Market prices publicly transparent'
                    }
                }
            },
            workflow: {
                title: 'Full Workflow Scenario',
                description: 'Complete closed-loop process for cloud gaming, computing power transactions, and PEC token payments',
                step1: {
                    title: 'User Registration',
                    desc: 'Connect via PowerVerse Chain wallet for decentralized identity authentication'
                },
                branch1: {
                    title: 'Cloud Gaming Scenario',
                    step1: {
                        title: 'Game Selection',
                        desc: 'Browse game library and select desired games'
                    },
                    step2: {
                        title: 'Resource Allocation',
                        desc: 'PowerVerse Infra intelligently schedules edge computing nodes to allocate GPU resources'
                    },
                    step3: {
                        title: 'Game Running',
                        desc: 'Games run on cloud GPU with low-latency streaming transmission'
                    }
                },
                branch2: {
                    title: 'Computing Power Exchange Scenario',
                    step1: {
                        title: 'Publish Demand/Resource',
                        desc: 'Demand side publishes orders or providers list computing resources'
                    },
                    step2: {
                        title: 'Smart Matching',
                        desc: 'PowerVerse Market smart contracts automatically match supply and demand'
                    },
                    step3: {
                        title: 'Task Execution',
                        desc: 'PowerVerse Infra allocates resources and executes computing tasks'
                    }
                },
                payment: {
                    title: 'PEC Token Payment',
                    desc: 'Pay with PowerVerse Token (PEC) based on usage time/resources, automatically settled by smart contracts'
                },
                release: {
                    title: 'Resource Release',
                    desc: 'After task completion, GPU/CPU resources automatically released back to resource pool for other users'
                },
                cloudgaming: {
                    title: 'Cloud Gaming Scenario',
                    item1: 'Connect via wallet for decentralized identity authentication',
                    item2: 'Browse game library and select desired games',
                    item3: 'PowerVerse Infra intelligently schedules edge computing nodes',
                    item4: 'Games run on cloud GPU with low-latency streaming transmission',
                    item5: 'Pay with PEC token based on usage time',
                    item6: 'GPU resources automatically released after game ends'
                },
                computingexchange: {
                    title: 'Computing Power Exchange Scenario',
                    item1: 'Providers register on PowerVerse Market and list resources',
                    item2: 'Demand side publishes orders specifying computing type and budget',
                    item3: 'Smart contracts automatically match supply and demand',
                    item4: 'PowerVerse Infra allocates computing resources based on orders',
                    item5: 'Pay with PEC token, automatically settled by smart contracts',
                    item6: 'Computing resources automatically released back to resource pool after task completion'
                },
                token: {
                    title: 'PEC Token Payment',
                    item1: 'PowerVerse Token (PEC) is the native token of the ecosystem',
                    item2: 'Used to pay for cloud gaming usage time fees',
                    item3: 'Used to pay for computing power transaction fees',
                    item4: 'Smart contracts automatically execute settlement, secure and reliable',
                    item5: 'Pay-as-you-go, no pre-deposit required',
                    item6: 'Support multiple payment methods, flexible and convenient'
                },
                flowchartTitle: 'Cloud Gaming and Computing Power Exchange Full Workflow Diagram',
                cloudgamingCard: {
                    title: 'Cloud Gaming Scenario',
                    description: 'Users log into cloud gaming platform via PowerVerse Chain wallet, select games, system intelligently schedules edge GPU resources through PowerVerse Infra, games run in cloud and stream via low-latency transmission. Users pay with PEC token based on usage time, smart contracts automatically settle, resources released after game ends.',
                    link: 'View Cloud Gaming Details'
                },
                computingexchangeCard: {
                    title: 'Computing Power Exchange Scenario',
                    description: 'Computing power providers register on PowerVerse Market and list GPU/CPU resources, demand side publishes orders. Smart contracts automatically match and execute transactions, demand side pays PEC token as deposit. PowerVerse Infra allocates resources, tasks execute, real-time monitoring, automatic settlement, mutual rating, resource recovery.',
                    link: 'View Computing Power Exchange Details'
                },
                tokenPaymentCard: {
                    title: 'PEC Token Payment',
                    description: 'PowerVerse Token (PEC) as the core asset of the ecosystem, used to pay for cloud gaming time, computing power rental fees, participate in DAO governance and node staking rewards. Smart contracts ensure all transactions are transparent, secure, and efficient.',
                    link: 'Learn about PEC Token'
                }
            },
            rwa: {
                title: 'RWA Wallet',
                description: 'Compliance on-chain, computing power generates value. RWA Wallet tokenizes over 50 mining farms nationwide and over 100,000 high-performance GPU physical computing assets on the PowerVerse chain through the ERC-3643 compliance protocol, building a secure, trustworthy, and freely tradable decentralized computing infrastructure.',
                stats: {
                    mines: 'Mining Farms',
                    gpuCount: 'GPU Units',
                    tokenized: 'Tokenization Rate'
                },
                coreAdvantages: {
                    title: 'Core Advantages: Triple Guarantee of Compliance, Physical Assets, and Efficiency',
                    item1: 'Compliance First, Secure and Trustworthy: Deeply integrated ERC-3643 standard, embedding global regulatory requirements such as KYC/AML into smart contracts. Ensures full legal compliance throughout asset issuance and circulation, clearing obstacles for institutional capital entry and establishing a solid foundation of trust.',
                    item2: 'Physical Anchoring, Real and Transparent: Each on-chain computing power token corresponds to real high-performance GPU hardware in nationwide distributed mining farms. Clear asset sources and verifiable ownership, eliminating virtual speculation and achieving precise mapping of physical value.',
                    item3: 'On-Chain Management, Cost Reduction and Efficiency: Based on the PowerVerse blockchain network, achieving automated issuance, ownership confirmation, and transaction settlement of computing assets. Significantly improving asset management efficiency, reducing operational and trust costs, and unleashing liquidity potential.'
                },
                scenarios: {
                    title: 'Application Scenarios: Empowering Diverse Business Ecosystems',
                    item1: 'Compliant Computing Asset Trading: Providing standardized and compliant computing asset subscription and secondary market trading services for qualified investors and institutions, opening a new paradigm for computing investment.',
                    item2: 'Decentralized Computing Finance (DeFi): As underlying high-quality compliant assets, applicable to on-chain financial scenarios such as collateralized lending and yield right staking, building a rich computing DeFi ecosystem.',
                    item3: 'Enterprise Computing Service Market: Providing instant settlement and clear ownership elastic computing leasing and procurement solutions for demand-side parties such as AI training, cloud rendering, and scientific computing.'
                },
                features: {
                    decentralized: {
                        title: 'Compliance First',
                        desc: 'ERC-3643 standard ensures legal compliance'
                    },
                    tokenized: {
                        title: 'Physical Anchoring',
                        desc: 'Real GPU hardware with verifiable ownership'
                    },
                    transparent: {
                        title: 'On-Chain Management',
                        desc: 'Automated issuance and ownership confirmation, cost reduction and efficiency'
                    }
                },
                computingPort: {
                    title: 'Computing Port',
                    description: 'Computing Port (XAI Center) is a decentralized intelligent computing platform built on PowerVerse Chain, dedicated to aggregating global idle GPU/CPU resources and achieving tokenization, standardization, and trusted trading of computing assets through blockchain technology. The platform provides comprehensive services including computing power segmentation, computing pool management, data platform, model training and inference, fault detection, and edge computing, offering low-cost and highly elastic computing support for AI teams.',
                    feature1: 'Computing Power Segmentation and Pooling: Supports multi-instance GPU operation, GPU passthrough technology, and multi-node parallel computing, enabling flexible allocation and memory segmentation of multi-brand GPUs, supporting flexible establishment of public or dedicated computing pools',
                    feature2: 'Full Lifecycle Model Training and Inference: Provides complete support from model development, training, deployment, inference to optimization, including distributed training, model evaluation, online inference, and model optimization services',
                    feature3: 'Intelligent Monitoring and Self-Healing: Based on visualized monitoring data, configurable alert services, and automated fault handling, achieving intelligent service operations and maintenance, automatically detecting and repairing hardware failures, software anomalies, or resource bottlenecks'
                },
                xaiToken: {
                    title: 'RWA Token XAI',
                    description: 'XAI is the core functional token and value reserve token in the XRWA AI ecosystem, developed based on ERC-20 standard, serving three core functions: ecosystem value circulation medium, profit distribution tool, and service payment credential. XAI covers all AI scenario interactions in the XRWA ecosystem and serves as a value bridge connecting the asset side with the application side.',
                    feature1: 'Sole Payment Tool for Ecosystem Profit Distribution: Ecosystem profits of GNFT and GUnit holders are distributed in XAI form, deeply binding assets with XAI value and ensuring token holders receive profit dividends generated by computing assets',
                    feature2: 'Mandatory Payment Credential for AI Ecosystem Services: In XRWA\'s AI application ecosystem, XAI is the sole service payment tool, covering all computing power and AI-related service scenarios, building rigid demand for XAI and driving token value appreciation',
                    feature3: 'Core Token for Ecosystem Governance and Node Incentives: XAI holders have ecosystem governance rights and can participate in key XRWA ecosystem decisions through on-chain voting. Core roles require XAI staking to obtain node qualifications, ensuring compliance and reliability of ecosystem nodes through staking penalty mechanisms'
                }
            }
        },
        developer: {
            title: 'Developer Center',
            description: 'Rich development tools and documentation to help developers quickly build applications',
            docs: {
                title: 'Documentation',
                description: 'Complete technical documentation and API reference to help developers get started quickly',
                link: 'View Docs'
            },
            sdk: {
                title: 'SDK Toolkit',
                description: 'Multi-language SDK support to simplify development workflow and improve efficiency',
                link: 'Download SDK'
            },
            tools: {
                title: 'Development Tools',
                description: 'Test networks, debugging tools, deployment scripts and other one-stop development tools',
                link: 'Use Tools',
                feature1: 'Test Network: Provides a complete test environment',
                feature2: 'Debugging Tools: Powerful debugging and monitoring capabilities',
                feature3: 'Deployment Scripts: One-click deployment to production environment'
            },
            community: {
                title: 'Community Support',
                description: 'Active developer community for technical exchange and problem solving',
                link: 'Join Community',
                feature1: 'Telegram Community: Real-time technical exchange',
                feature2: 'GitHub: Open source code and issue tracking',
                feature3: 'Technical Forum: In-depth technical discussions'
            }
        },
        token: {
            pageTitle: 'Token - PowerVerse Chain',
            title: 'Tokenomics',
            description: 'Building a sustainable ecosystem economic model',
            intro: 'PowerVerse Token is the native token of the PowerVerse Chain ecosystem',
            totalSupply: 'Total Supply',
            circulated: 'Circulated',
            marketCap: 'Market Cap',
            networkInfo: 'PowerVerse Network Information',
            rpcInterface: 'RPC Interface',
            mainRPC: 'Main RPC Interface:',
            webSocket: 'WebSocket:',
            beaconAPI: 'Beacon API:',
            healthCheck: 'Health Check:',
            walletInfo: 'Wallet Connection Information',
            rpcURL: 'RPC URL:',
            chainID: 'Chain ID:',
            symbol: 'Symbol:',
            decimals: 'Decimals:',
            distributionChart: 'Token Distribution Visualization',
            usage: {
                title: 'Token Usage',
                items: [
                    'Pay for computing resource fees',
                    'Participate in network governance voting',
                    'Node staking and rewards',
                    'In-app payments within ecosystem'
                ]
            },
            distribution: {
                title: 'Distribution Mechanism',
                items: [
                    'Community Incentives: 40%',
                    'Team & Advisors: 20%',
                    'Ecosystem Development: 20%',
                    'Investors: 15%',
                    'Reserve Fund: 5%'
                ]
            }
        },
        about: {
            title: 'About Us',
            vision: {
                title: 'Vision',
                content: 'PowerVerse Chain is committed to building the world\'s largest decentralized computing network, making computing resources as accessible as water and electricity, and providing strong infrastructure support for the Web3 ecosystem.'
            },
            mission: {
                title: 'Mission',
                content: 'Integrate global idle computing resources through blockchain technology, reduce computing costs, improve resource utilization efficiency, and promote the popularization and application of distributed computing technology.'
            },
            values: {
                title: 'Core Values',
                items: [
                    'Decentralization: No centralized institutions, users directly participate in network governance',
                    'Efficiency & Transparency: Blockchain technology ensures transaction transparency, smart contracts execute automatically',
                    'Open Ecosystem: Support multiple application scenarios, build a thriving developer ecosystem',
                    'Security & Reliability: Multiple security mechanisms to ensure network and data security'
                ]
            },
            team: {
                title: 'Team Introduction',
                intro: 'The founding team members have multiple successful entrepreneurial experiences, having built industry-leading server clusters with multiple national patents. Several members with company listing experience have joined the initial team. Many other employees hold PhDs or are professors with rich experience in the web3 field, having participated in multiple large-scale projects.',
                members: {
                    member1: {
                        name: 'Harvey',
                        role: 'Founder & CEO',
                        bio: 'Graduated from University of Birmingham, UK, blockchain technology expert with years of experience in the cryptocurrency field',
                        cert: ''
                    },
                    member2: {
                        name: 'Solomon',
                        role: 'Co-Founder & CTO',
                        bio: 'Graduated from University of Manchester, UK, distributed systems expert and blockchain technology advisor'
                    },
                    member3: {
                        name: 'Jane',
                        role: 'Co-Founder & COO',
                        bio: 'Graduated from University of Victoria, Canada, ecosystem building expert and crypto asset management expert'
                    }
                },
                others: 'Many other employees hold PhDs or are professors with rich experience in the web3 field, having participated in multiple large-scale projects.'
            },
            contact: {
                title: 'Contact Us',
                intro: 'If you are interested in our project or have any questions, please contact us using the following methods:',
                email: 'Email: hiabacloud@gmail.com',
                address: 'Address: Building 2, 7th Floor, Zhejiang Talent Building',
                twitter: 'Twitter: @PowerVerseChain',
                telegram: 'Telegram: @PowerVerseChain_Offical',
                discord: 'Discord: PowerVerse Community'
            }
        },
        whitepaper: {
            title: 'Whitepaper',
            download: 'Download Whitepaper',
            sections: {
                introduction: 'Introduction',
                overview: 'Project Overview',
                technology: 'Technical Architecture',
                tokenomics: 'Tokenomics',
                roadmap: 'Roadmap',
                team: 'Team Introduction'
            }
        },
        common: {
            learnMore: 'Learn More',
            back: 'Back',
            next: 'Next',
            previous: 'Previous',
            readMore: 'Read More',
            download: 'Download',
            contact: 'Contact Us',
            join: 'Join Us',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            cookie: 'Cookie Policy',
            github: 'GitHub',
            blog: 'Blog',
            copy: 'Copy',
            copied: 'Copied!',
            copyFailed: 'Copy failed, please copy manually: ',
            videoNotSupported: 'Your browser does not support video playback.'
        },
        hardwareFactory: {
            pageTitle: 'Hardware Factory - PowerVerse Chain',
            title: 'Hardware Factory',
            description: 'Professional Server Chassis and Industrial Control Chassis Manufacturer',
            companyProfile: 'Company Profile',
            companyIntro: 'We are a professional manufacturer of server chassis and industrial control chassis, committed to providing high-quality hardware product solutions for customers.',
            companyDesc: 'Company Introduction',
            companyDescText: 'We have complete production and manufacturing capabilities, from design, R&D to production and quality inspection, with full-process independent control. The factory is equipped with advanced production equipment and professional technical teams to ensure product quality and delivery efficiency.',
            companyCulture: 'Corporate Culture',
            companyCultureText: 'We adhere to the corporate philosophy of "Quality First, Customer First, Continuous Innovation", constantly optimizing production processes, improving product quality, and creating greater value for customers. We focus on team building, creating a positive work atmosphere, and stimulating employees\' innovative potential.',
            qualifications: 'Company Qualifications',
            license: 'Business License',
            licenseDesc: 'Complete business registration qualifications, legal and compliant operations',
            qualityCert: 'Quality Certification',
            qualityCertDesc: 'ISO Quality Management System Certification',
            honorCert: 'Honor Certificate',
            honorCertDesc: 'Multiple industry honors and qualification certifications',
            patent: 'Patent Technology',
            patentDesc: 'Multiple product design and technology patents',
            productCenter: 'Product Center',
            productCenterDesc: 'We provide a full range of server chassis, storage server chassis, industrial control chassis and embedded chassis products to meet the needs of different application scenarios.',
            serverChassis: 'Server Chassis',
            serverChassisDesc: '1U to 8U and tower server chassis',
            storageChassis: 'Storage Server Chassis',
            storageChassisDesc: 'High-density storage solutions',
            industrialChassis: 'Industrial Control Chassis',
            industrialChassisDesc: 'Industrial control dedicated chassis',
            embeddedChassis: 'Embedded Chassis',
            embeddedChassisDesc: 'Compact embedded solutions',
            accessories: 'Accessories',
            accessoriesDesc: 'Various chassis accessories and attachments',
            productDetails: 'Product Details',
            productAdvantages: 'Product Advantages',
            advantages: [
                'Professional Design: Industry-standard compliant, optimized heat dissipation and space utilization',
                'Quality Materials: High-strength steel, corrosion-resistant, durable',
                'Precision Manufacturing: Advanced production processes ensuring product accuracy and reliability',
                'Flexible Customization: Support personalized customization according to customer needs',
                'Strict Testing: Multiple rigorous tests before leaving factory, ensuring stable performance'
            ],
            serverChassisList: {
                item1: '6U Rack-mount 8-node Server Chassis',
                item2: '5U Rack-mount 8-node Server Chassis',
                item3: '4U 36-bay Rack-mount Server Chassis',
                item4: '4U 24-bay Rack-mount Server Chassis',
                item5: '4U 8-bay Rack-mount Server Chassis',
                item6: '2U Standard Server',
                item7: 'Thin Client'
            },
            serverChassisInfo: {
                item1: '6U rack-mount design with 8 integrated independent computing nodes, exclusively engineered for multi-user concurrent access scenarios such as cloud gaming, cloud PC and cloud rendering. Adopting the "centralized computing power + distributed deployment" mode, it significantly reduces hardware deployment space and costs while ensuring each user enjoys independent and stable computing performance.',
                item2: '5U height chassis supporting 8 high-performance GPU cards, delivering powerful computing capacity for AI model training and deep learning inference. Equipped with a high-efficiency power module and an intelligent heat dissipation system, the chassis ensures stable GPU operation at optimal performance. In addition, it provides abundant expansion interfaces to adapt to various algorithm frameworks and software platforms.',
                item3: 'Exclusively designed for large-capacity data storage scenarios, focusing on "high capacity, high reliability and high scalability". Featuring a multi-bay design, RAID protection and intelligent management, it offers enterprises a secure, stable and easy-to-manage storage solution, suitable for data backup, surveillance storage, media libraries and file sharing.',
                item4: 'Exclusively designed for large-capacity data storage scenarios, focusing on "high capacity, high reliability and high scalability". Featuring a multi-bay design, RAID protection and intelligent management, it offers enterprises a secure, stable and easy-to-manage storage solution, suitable for data backup, surveillance storage, media libraries and file sharing.',
                item5: 'Exclusively designed for large-capacity data storage scenarios, focusing on "high capacity, high reliability and high scalability". Featuring a multi-bay design, RAID protection and intelligent management, it offers enterprises a secure, stable and easy-to-manage storage solution, suitable for data backup, surveillance storage, media libraries and file sharing.',
                item6: "Boasting universal computing power, it adapts to a variety of scenarios. Core value: 2U standard rack-mount design that balances performance, scalability and cost-effectiveness. Exclusively engineered for enterprises' general IT needs, it can serve as a web server, database server, virtualization host or file server, acting as the \"core computing power platform\" for the IT architecture of small and medium-sized enterprises.",
                item7: 'Adhering to the design philosophy of "lightweight, high performance and low power consumption", this compact and portable mini PC can be flexibly deployed in scenarios such as cloud gaming, office work, education and cloud terminals. The thin client mini PC supports remote desktop connection and cloud resource access, effectively reducing the procurement and maintenance costs of terminal devices. Meanwhile, it delivers outstanding security and stability, providing users with a smooth cloud office and entertainment experience.'
            },
            storageChassisList: {
                item1: '1U Storage Server Chassis',
                item2: '2U Storage Server Chassis',
                item3: '4U Storage Server Chassis'
            },
            industrialChassisList: {
                item1: 'Standard Industrial Chassis',
                item2: 'Customized Industrial Chassis'
            },
            embeddedChassisList: {
                item1: 'Embedded Chassis',
                item2: 'Miniaturized Design'
            },
            accessoriesList: {
                item1: 'Fan Module',
                item2: 'Power Module',
                item3: 'Expansion Card Bracket',
                item4: 'Other Accessories'
            },
            serverChassisSeries: 'Server Chassis Series',
            storageChassisSeries: 'Storage Server Chassis Series',
            industrialChassisSeries: 'Industrial Control Chassis',
            embeddedChassisSeries: 'Embedded Chassis',
            specSize: 'Size',
            specDriveBay: 'Drive Bay',
            specFan: 'Fan',
            specPower: 'Power',
            specExpansion: 'Expansion Slot',
            specApplication: 'Application',
            specMaterial: 'Material',
            specProtection: 'Protection Level',
            specValue1U: 'Standard 1U Height',
            specValue2U: 'Standard 2U Height',
            specValue3U: 'Standard 3U Height',
            specValue4U: 'Standard 4U Height',
            specValueDrive2_4: '2-4 units',
            specValueDrive4_8: '4-8 units',
            specValueDrive8_12: '8-12 units',
            specValueDrive12_24: '12-24 units',
            specValueFan40_60: '40mm/60mm',
            specValueFan80_92: '80mm/92mm',
            specValueFan80_120: '80mm/120mm',
            specValueFan120_140: '120mm/140mm',
            specValuePowerStandard: 'Standard ATX/Redundant Power',
            specValueExpansion1_2: '1-2 PCIe',
            specValueExpansion2_4: '2-4 PCIe',
            specValueExpansion4_6: '4-6 PCIe',
            specValueExpansion6_8: '6-8 PCIe',
            specValueAppWeb: 'Web Server, Application Server',
            specValueAppDatabase: 'Database Server, Virtualization Server',
            specValueAppHPC: 'High Performance Computing, Storage Server',
            specValueAppBigData: 'Big Data Storage, High Performance Computing',
            specValueAppStorage: 'High Density Storage, NAS System',
            specValueAppStorage2U: 'Enterprise Storage, Backup System',
            specValueAppStorage4U: 'Large Scale Data Storage, Cloud Storage',
            specValueAppIndustrial: 'Industrial Automation, Smart Manufacturing',
            specValueAppEmbedded: 'Edge Computing, IoT Devices',
            specValueMaterial: 'High Quality Steel/Aluminum Alloy',
            specValueProtection: 'IP65/IP67',
            specValueCompact: 'Compact Design',
            specValueDrive2_5: '4-6 units 2.5"',
            specValueDrive3_5: '12-24 units 3.5"',
            specValueDrive4U: '36-48 units 3.5"',
            specValueAppStorage2U: 'Enterprise Storage, Backup System',
            specValueAppStorage4U: 'Large Scale Data Storage, Cloud Storage',
            advantagesTitle: 'Core Advantages',
            advantagesIntro: 'We are committed to providing customers with high-quality, high-performance hardware products to meet the needs of different application scenarios.',
            advantage1: 'Professional Design: Advanced industrial design concepts, optimized heat dissipation and structural layout',
            advantage2: 'Quality Materials: High-quality steel and aluminum alloy, ensuring product durability',
            advantage3: 'Precision Manufacturing: Advanced processing technology, ensuring product accuracy and quality',
            advantage4: 'Flexible Configuration: Support multiple motherboard specifications and expansion card configurations',
            advantage5: 'Good Heat Dissipation: Optimized air duct design, ensuring stable system operation',
            advantage6: 'Fast Delivery: Complete supply chain system, ensuring timely delivery',
            footerResources: 'Resources',
            footerEcosystem: 'Ecosystem'
        },
        researchStrength: {
            pageTitle: 'Research Strength - PowerVerse Chain',
            title: 'Research Strength',
            description: 'Full Industry Chain R&D and Production, Master Core Hardware Technology',
            fullChain: 'Full Industry Chain R&D and Production',
            fullChainDesc: 'PowerVerse has highly vertically integrated full industry chain, continuous innovation, promoting cloud gaming products to land faster. We master the complete industry chain from hardware to software, from network to ecology, building an "end-to-end computing infrastructure ecological closed loop".',
            hardwareRnd: 'Hardware R&D',
            hardwareRndDesc: 'Self-developed GPU hardware, nearly 10 years of hardware R&D experience, responsible for GPU hardware R&D and production management, ensuring computing power supply. Building an "end-to-end computing infrastructure ecological closed loop" to optimize cost-effectiveness.',
            softwareArch: 'Software Architecture',
            softwareArchDesc: 'Self-developed architecture, breaking through the adaptation gap between game engines and cloud-native architecture, breaking through the technical bottlenecks of real-time rendering and encoding. Cloud data integration, continuous iteration of platform-based development tools.',
            networkOpt: 'Network Optimization',
            networkOptDesc: 'Low-latency transmission algorithm + weak network resistance strategy algorithm, improving stability. 5ms ultra-low latency, 0 packet loss stable connection, edge nodes will cover more than 30 provinces and cities.',
            aiOptimization: 'AI Computing Power Optimization',
            aiOptimizationDesc: 'AI computing power optimization, precise perception decision allocation. AI-driven rendering enhancement algorithm, dynamic resolution adjustment algorithm, layered encoding algorithm, dynamic bitrate adjustment algorithm.',
            rndCapability: 'R&D Capability',
            rndCapabilityDesc: 'Nearly 10 years of hardware R&D experience, responsible for GPU hardware R&D and production management, ensuring computing power supply. Current patent count: 15+, team size: 30+, R&D ratio: ~40%.',
            coreAlgorithms: 'Core Technology Algorithms',
            dynamicResolution: 'Dynamic Resolution Adjustment Algorithm',
            dynamicResolutionDesc: 'Dynamically adjust resolution according to network conditions to ensure smooth experience',
            aiRender: 'AI-Driven Rendering Enhancement Algorithm',
            aiRenderDesc: 'Use AI technology to improve rendering quality and efficiency',
            layeredEncoding: 'Layered Encoding Algorithm',
            layeredEncodingDesc: 'Intelligent layered encoding, optimizing transmission efficiency',
            dynamicBitrate: 'Dynamic Bitrate Adjustment Algorithm',
            dynamicBitrateDesc: 'Real-time bitrate adjustment to adapt to network changes',
            zeroCopy: 'Zero-Copy Encoding Pipeline Algorithm',
            zeroCopyDesc: 'Reduce memory copying, improve encoding performance',
            lowLatency: 'Low-Latency Transmission Algorithm',
            lowLatencyDesc: 'Optimize transmission path, reduce latency',
            team: 'R&D Team',
            teamSize: 'Team Size',
            rndRatio: 'R&D Ratio',
            patents: 'Current Patent Count',
            experience: 'Hardware R&D Experience',
            experienceValue: '10+ years',
            coreTeam: 'Core Team Members',
            teamMember1: 'Xia Qiu - Hardware R&D Director:',
            teamMember1Desc: 'Nearly 10 years of hardware R&D experience, responsible for GPU hardware R&D and production management, ensuring computing power supply',
            teamMember2: 'Wang Haoyu - CEO:',
            teamMember2Desc: 'More than 8 years of industry experience, deeply engaged in Web3 computing infrastructure, integrating hardware technology and operator resources, 7 related patents, well-known expert in the industry',
            vision: 'Future Vision',
            visionTitle: 'Vision: Industry Leader in Decentralized AI-Driven Cloud Gaming Platform',
            visionDesc: 'Mastering the core industry chain + having product definition capabilities is the only way to win. In the future, it will become an absolute industry leader with high gross profit margins, high premium capabilities, and high market share, bringing cloud gaming platforms into thousands of households and changing the world with technology.'
        }
    },
    'ja': {
        nav: {
            home: 'ホーム',
            product: '製品',
            scenario: {
                title: '応用シナリオ',
                cloudgaming: 'クラウドゲームシナリオ',
                computingexchange: 'コンピューティングパワー取引シナリオ',
                rwa: 'RWAウォレットシナリオ',
                workflow: 'フルワークフローシナリオ'
            },
            developer: '開発者センター',
            token: 'トークン',
            about: '私たちについて',
            whitepaper: 'ホワイトペーパー',
            hardwareFactory: 'ハードウェア工場',
            researchStrength: '研究開発力'
        },
        home: {
            title: 'PowerVerse Chain',
            subtitle: '分散型コンピューティングネットワーク',
            description: '次世代の分散コンピューティングインフラストラクチャを構築し、グローバルなコンピューティングリソースの効率的な共有を可能にし、Web3エコシステムの発展を促進します',
            ios: 'iOS',
            android: 'Android'
        },
        architecture: {
            title: '技術フレームワーク',
            subtitle: 'アーキテクチャ',
            appLayer: 'アプリケーション層',
            protocolLayer: 'プロトコル層',
            networkLayer: 'ネットワーク層',
            dapp: 'DAppアプリケーション',
            api: 'APIインターフェース',
            rpc: 'RPCサービス',
            consensus: 'コンセンサスメカニズム',
            smartContract: 'スマートコントラクト',
            crossChain: 'クロスチェーンプロトコル',
            p2p: 'P2Pネットワーク',
            nodeManagement: 'ノード管理',
            dataStorage: 'データストレージ'
        },
        products: {
            title: '製品エコシステム',
            description: '完全な分散型コンピューティングエコシステムの構築',
            chain: {
                name: 'PowerVerse Chain',
                description: 'PoSコンセンサスでEVMをサポートするブロックチェーンシステム。DAppの簡単なデプロイと運用を可能にし、開発者にフレンドリーな開発環境を提供し、開発の障壁とコストを低減',
                learnMore: '詳細を見る',
                pageTitle: 'PowerVerse Chain - 技術概要',
                subtitle: '技術概要',
                intro: 'PowerVerse Chainは、ブロックチェーンベースの分散型台帳プラットフォームで、分散型ネットワーク、スマートコントラクト、コンセンサスメカニズムを通じて、分散型アプリケーションに安全で効率的なインフラストラクチャを提供します。',
                architecture: {
                    title: '全体アーキテクチャ',
                    baseLayer: {
                        title: 'ベースレイヤー',
                        p2p: {
                            label: 'P2Pネットワーク：',
                            desc: 'ノード直結、高速同期と高可用性。'
                        },
                        database: {
                            label: 'データベース：',
                            desc: 'Merkleツリーで取引・状態を保存、検証可能。'
                        },
                        crypto: {
                            label: '暗号アルゴリズム：',
                            desc: '鍵管理・署名・ハッシュでセキュリティ確保。'
                        },
                        sharding: {
                            label: 'シャーディング最適化：',
                            desc: '並列検証でブロック効率向上。'
                        }
                    },
                    coreLayer: {
                        title: 'コアレイヤー',
                        ledger: {
                            label: '分散型台帳：',
                            desc: '取引・ブロック・プール等のコアデータ。'
                        },
                        consensus: {
                            label: 'コンセンサスメカニズム：',
                            desc: 'POW+POSハイブリッド、効率的分散化。'
                        },
                        smartContract: {
                            label: 'スマートコントラクト：',
                            desc: 'EVM互換、Solidity開発対応。'
                        }
                    },
                    appLayer: {
                        title: 'アプリケーションレイヤー',
                        api: {
                            label: 'APIインターフェース：',
                            desc: 'HTTP/TCPインターフェースとRPCサービスを提供し、エコシステム統合を容易にする。'
                        },
                        dapp: {
                            label: 'DApp：',
                            desc: 'DeFi、DIDなどの様々な分散型アプリケーションの開発をサポート。'
                        }
                    }
                },
                blockTransaction: {
                    title: 'ブロックとトランザクション',
                    structure: {
                        title: 'ブロック構造',
                        header: {
                            title: 'ブロックヘッダー',
                            desc: '親ブロックハッシュ、タイムスタンプ、トランザクションツリールートハッシュ（TxRoot）などを含む。'
                        },
                        body: {
                            title: 'ブロックボディ',
                            desc: 'トランザクションリストを含む。'
                        },
                        note: 'トランザクションはMerkleツリーを通じて組織化され、TxRootはブロックの完全性を迅速に検証するために使用される。'
                    },
                    process: {
                        title: 'トランザクションプロセス',
                        step1: 'ユーザーがトランザクションを構築してブロードキャスト。',
                        step2: 'ノードがトランザクションを検証し、トランザクションプールに保存。',
                        step3: '提案ノードがトランザクションをパッケージ化し、ブロック提案を生成。',
                        step4: 'トランザクションがEVMによって実行され、ブロックがコンセンサスプロセスに入る。',
                        step5: 'コンセンサス成功後、ブロックが確定し、状態が更新され、フォークが処理される。'
                    }
                },
                consensus: {
                    title: 'コンセンサスメカニズム：POW+POSハイブリッドコンセンサス',
                    overview: {
                        title: 'コンセンサスメカニズム概要',
                        desc: 'PowerVerse ChainはPOW+POSハイブリッドコンセンサスメカニズムを採用し、プルーフオブワーク（Proof of Work）とプルーフオブステーク（Proof of Stake）の利点を組み合わせ、ネットワークセキュリティを確保しながらトランザクション処理効率を向上。',
                        pow: {
                            title: 'プルーフオブワーク（POW）',
                            label: 'プルーフオブワーク（POW）：',
                            desc: '計算能力の競争を通じてトランザクションを検証し、新しいブロックを作成し、ネットワークのセキュリティと分散化特性を確保。'
                        },
                        pos: {
                            title: 'プルーフオブステーク（POS）',
                            label: 'プルーフオブステーク（POS）：',
                            desc: 'バリデーターはトークンをステーキングしてネットワークコンセンサスに参加。ステーキング数が多いほど、バリデーターとして選ばれる確率が高くなる。'
                        }
                    },
                    workflow: {
                        title: 'コンセンサスプロセス',
                        step1: 'POWマイナーは計算能力の競争を通じて候補ブロックを作成し、ブロック報酬を獲得。',
                        step2: 'POSバリデーターはトークンをステーキングしてブロック検証に参加し、トランザクションの合法性を確保。',
                        step3: 'バリデーターが投票し、2/3以上のバリデーターが同意したブロックが確定。',
                        step4: '確定されたブロックがブロックチェーンに追加され、ネットワーク状態が更新。'
                    },
                    staking: {
                        title: 'POSステーキングメカニズム',
                        intro: 'プルーフオブステーク（POS）ステーキングはPowerVerse Chainネットワークセキュリティの中核メカニズムで、イーサリアム2.0のステーキング設計を参考に、バリデーターに安定した収益源を提供。',
                        minimum: {
                            title: '最小ステーキング要件',
                            label: '最小ステーキング要件：',
                            desc: 'バリデーターになるには最小数量のトークンをステーキングする必要があり、経済的インセンティブとネットワークセキュリティを一致させる。'
                        },
                        rewards: {
                            title: 'ステーキング報酬',
                            label: 'ステーキング報酬：',
                            desc: 'ブロック検証とコンセンサス投票に参加して報酬を獲得。報酬率はステーキング総量とネットワーク活動度に関連。'
                        },
                        slashing: {
                            title: 'スラッシングメカニズム',
                            label: 'スラッシングメカニズム：',
                            desc: '悪意や長期オフラインはステーキング没収のリスクがあり、ネットワークセキュリティを確保。'
                        },
                        benefits: {
                            title: 'ステーキングの利点',
                            item1: '安定したステーキング報酬を獲得し、年利回りはネットワーク状況に応じて動的に調整',
                            item2: 'ネットワークガバナンスに参加し、プロトコルアップグレードと重要な決定に投票',
                            item3: 'ネットワークセキュリティを強化 - ステーキングトークンが多いほど、ネットワークはより安全',
                            item4: '委任ステーキングをサポート - 一般ユーザーはトークンをバリデーターノードに委任可能'
                        }
                    }
                },
                networkConfig: {
                    title: 'ネットワーク設定標準',
                    overview: {
                        title: 'ネットワークパラメータ設定',
                        desc: 'PowerVerse Chainは標準化されたネットワーク設定を採用し、ノード間の互換性とネットワークの安定動作を確保。'
                    },
                    blockParams: {
                        title: 'ブロックパラメータ',
                        size: 'ブロックサイズ：最大2MB',
                        interval: 'ブロック間隔：約3秒',
                        gasLimit: 'Gas制限：ブロックあたり8,000,000 Gas'
                    },
                    consensusParams: {
                        title: 'コンセンサスパラメータ',
                        minStake: '最小ステーキング：10,000 PEC',
                        epoch: 'Epochサイクル：100ブロック',
                        finality: '最終確定：2/3バリデーター投票'
                    },
                    networkParams: {
                        title: 'ネットワークパラメータ',
                        chainId: 'Chain ID：メインネット1001',
                        rpcPort: 'RPCポート：8545',
                        p2pPort: 'P2Pポート：30303'
                    }
                },
                coin: {
                    title: 'PowerVerse Coin：エコシステムコア資産',
                    totalSupply: '総供給量',
                    totalSupplyValue: '14億',
                    features: {
                        title: '主要機能',
                        staking: {
                            title: 'ステーキングによるネットワーク維持',
                            desc: 'ステーキングを通じてコンセンサスに参加し、報酬を獲得し、ネットワークのセキュリティと安定性を強化。'
                        },
                        circulation: {
                            title: 'エコシステム循環と支払い',
                            desc: 'エコシステム内の価値交換媒体として機能し、開発インセンティブ、サービス支払い、アプリ内取引に使用。'
                        },
                        dao: {
                            title: 'DAOガバナンス',
                            desc: '保有者はPowerVerse DAO投票に参加し、プロトコルアップグレード、資金配分などの重要な決定を共同で決定。'
                        }
                    }
                }
            },
            infra: {
                name: 'PowerVerse Infra',
                description: '仮想化レイヤーで卓越したパフォーマンスを提供し、リソースの効率的な利用と柔軟な割り当てを実現し、上層のアプリケーションとサービスに強力なサポートを提供',
                learnMore: '詳細を見る',
                pageTitle: 'PowerVerse Infra - 分散型物理インフラストラクチャネットワーク（DePIN）の出発点',
                depinBadge: 'DePINの始まり',
                subtitle: '分散型物理インフラストラクチャネットワーク（DePIN）の出発点',
                intro: 'PowerVerse Infraは、ソフトウェア定義の概念に基づく仮想化ソフトウェアプラットフォームで、複数のチップコンピューティングパワー（CPU、GPU、AIチップ、量子チップを含む）を統合し、仮想化管理を行い、アイドルコンピューティングパワーを共有可能で取引可能なデジタル資産に変換し、ユーザーに効率的で多様なコンピューティングパワー取得方法を提供します。',
                section1: {
                    title: '一、コア設計：5つのコンポーネントと9つのサービス',
                    components: {
                        title: '5つのコアコンポーネント',
                        table: {
                            component: 'コンポーネント',
                            function: 'コア機能'
                        },
                        control: {
                            name: '制御コンポーネント',
                            desc: 'アーキテクチャのコアで、リクエストの受信、リソース割り当て、システム監視を担当し、仮想化、ネットワーク、イメージなどのサービスを含む。'
                        },
                        compute: {
                            name: '計算コンポーネント',
                            desc: 'コンピューティングリソースプロバイダーで、仮想マシンインスタンスを実行し、コンピューティングタスクを処理する。'
                        },
                        storage: {
                            name: 'ストレージコンポーネント',
                            desc: 'ブロックストレージとオブジェクトストレージをサポートし、データとイメージのストレージを担当する。'
                        },
                        network: {
                            name: 'ネットワークコンポーネント',
                            desc: '仮想ネットワーク、サブネット、ルーティングなどを管理し、仮想マシン通信、ネットワーク分離、セキュリティを実現する。'
                        },
                        interface: {
                            name: 'インターフェースサービス',
                            desc: 'RESTful APIを提供し、コンポーネント間の通信と相互作用を実現する。'
                        }
                    },
                    services: {
                        title: '9つの主要サービスモジュール',
                        virtualization: {
                            title: 'コア仮想化',
                            desc: '仮想マシンの全ライフサイクル（作成、一時停止、調整、破棄）を管理し、CPU、GPU、メモリなどのリソースを設定する。'
                        },
                        network: {
                            title: 'ネットワーク仮想化',
                            desc: 'ネットワーク仮想化技術と接続サービスを提供する。'
                        },
                        image: {
                            title: 'イメージサービス',
                            desc: '複数のイメージ形式をサポートし、イメージのアップロード、削除、情報編集を実現する。'
                        },
                        blockStorage: {
                            title: 'ブロックストレージ',
                            desc: '仮想マシンに安定したデータブロックストレージサービスを提供する。'
                        },
                        objectStorage: {
                            title: 'オブジェクトストレージ',
                            desc: '冗長性とフォールトトレランスメカニズムを通じてスケーラブルなオブジェクトストレージを実現し、ファイルアクセスと永続ストレージをサポートする。'
                        },
                        monitoring: {
                            title: '監視サービス',
                            desc: '課金、監視、その他のサービスに統計データサポートを提供する。'
                        },
                        permission: {
                            title: '権限サービス',
                            desc: 'PowerVerse ChainのDIDサービスに基づき、アイデンティティ検証、ルール管理、トークンサービスを提供する。'
                        },
                        orchestration: {
                            title: 'オーケストレーションサービス',
                            desc: 'テンプレートを通じてDeCloudインフラストラクチャの自動デプロイを実現する。'
                        },
                        management: {
                            title: '管理',
                            desc: '各種サービスのWeb管理インターフェースを提供する。'
                        }
                    }
                },
                section2: {
                    title: '二、仮想化ソリューション：Type1とType2',
                    type1: {
                        title: 'Type1（ベアメタル）',
                        badge: '高性能ソリューション',
                        arch: {
                            label: 'アーキテクチャの特徴：',
                            desc: 'ハードウェア上で直接実行され、ホストオペレーティングシステムがなく、リソース利用が効率的。'
                        },
                        performance: {
                            label: 'パフォーマンス：',
                            desc: '低遅延、高スループット、ハードウェアリソースの精密制御、ネットワークとストレージI/Oの最適化。'
                        },
                        scenario: {
                            label: '適用シナリオ：',
                            desc: '大規模データ計算、高負荷エンタープライズアプリケーション、高性能コンピューティング。'
                        }
                    },
                    type2: {
                        title: 'Type2',
                        badge: '柔軟なソリューション',
                        arch: {
                            label: 'アーキテクチャの特徴：',
                            desc: 'ホストオペレーティングシステム上で実行され、ホストマシンによるリソース管理に依存する。'
                        },
                        performance: {
                            label: 'パフォーマンス：',
                            desc: 'ホストリソース競合の影響を受け、高強度タスクでパフォーマンスボトルネックが発生する可能性がある。'
                        },
                        scenario: {
                            label: '適用シナリオ：',
                            desc: '個人開発、小規模アプリケーション、迅速なデプロイとテスト環境。'
                        }
                    }
                },
                section3: {
                    title: '三、PowerVerse Chainとの協力',
                    did: {
                        title: '1. DIDベースの仮想マシン権限サービス',
                        item1: '各ユーザーと仮想マシンに一意の分散型アイデンティティ（DID）を作成し、履歴行動と信用データを関連付ける。',
                        item2: 'ブロックチェーンコンセンサスを通じてアイデンティティを検証し、中央集権機関を必要とせず、公正、安全、改ざん不可能を確保する。',
                        item3: 'コンピューティングパワーリースでは、双方が互いの信用と支払い能力を検証でき、透明で信頼できる取引環境を構築する。'
                    },
                    smartContract: {
                        title: '2. スマートコントラクト駆動のコンピューティングパワー取引アグリゲーター（PowerVerse Market）',
                        item1: '買い手と売り手が直接合意に達し、スマートコントラクトを通じてリース、決済、記録保存を自動実行する。',
                        item2: '手動交渉と第三者仲介を排除し、効率的、透明、低コストのコンピューティングパワー取引を実現する。'
                    }
                },
                section4: {
                    title: '四、機能特性',
                    chipCompatibility: {
                        title: '広範なチップ互換性',
                        desc: 'CPU、GPU、AIコンピューティングチップ、量子チップを包括的にサポートし、多様なコンピューティングニーズを満たし、アイドルコンピューティングパワーの利用を最大化する。'
                    },
                    quantum: {
                        title: '先見的な量子コンピューティングサポート',
                        desc: '量子チップ仮想化技術の準備を開始し、量子ビット抽象モデルとシミュレーションインターフェースを提供し、量子アルゴリズム実験をサポートする。'
                    },
                    security: {
                        title: '高度なセキュリティと信頼保証',
                        desc: 'DIDアイデンティティ管理、スマートコントラクト自動実行、ブロックチェーン改ざん不可能な記録保存を組み合わせ、公正で透明な信頼できるエコシステムを構築する。'
                    },
                    scheduling: {
                        title: '効率的なリソース利用と動的スケジューリング',
                        desc: '仮想マシンのリアルタイム負荷に基づいてコンピューティングパワー割り当てを自動調整し、リソースの浪費と過負荷を回避し、利用効率を向上させ、コストを削減する。'
                    }
                }
            },
            market: {
                name: 'PowerVerse Market',
                description: '分散型コンピューティングリソース取引市場。リソース配分を最適化し、需要と供給を結びつける。同時にモデルとデータ市場を提供し、知識と技術の共有を促進',
                learnMore: '詳細を見る',
                pageTitle: 'PowerVerse Market - 分散型コンピューティングパワー取引プラットフォーム',
                subtitle: '分散型コンピューティングパワー取引プラットフォーム',
                intro: 'PowerVerse Marketは、PowerVerse ChainとPowerVerse Infraを基盤に構築された分散型コンピューティングパワー取引プラットフォームです。スマートコントラクトとブロックチェーン技術を通じてコンピューティングパワー供給者と需要者を結びつけ、自動化、透明化、第三者を信頼する必要のないコンピューティングリソース取引を実現します。',
                section1: {
                    title: '一、プラットフォームコア機能',
                    function1: {
                        title: '1. コンピューティングリソース管理',
                        item1: '供給者がコンピューティングリソース情報（CPU/GPU/ストレージなど）を公開し、価格、利用可能時間などのパラメータを設定',
                        item2: 'リソース情報はリアルタイムで更新可能で、市場の変化に柔軟に対応'
                    },
                    function2: {
                        title: '2. コンピューティング需要注文管理',
                        item1: '需要者がコンピューティング需要注文を提出し、タイプ、数量、期間、予算などを指定',
                        item2: 'プラットフォームが自動的にリソースをマッチングし、供給者も積極的に注文を受けることが可能'
                    },
                    function3: {
                        title: '3. 取引実行と監視',
                        item1: 'スマートコントラクトがコンピューティングパワー供給と費用決済を自動実行',
                        item2: '需要者はコンピューティングパワー使用状況とタスク進捗をリアルタイムで監視でき、異常状況は自動通知'
                    },
                    function4: {
                        title: '4. データ統計と分析',
                        item1: '取引履歴、リソース分布、価格トレンドなどのデータ分析を提供',
                        item2: 'ユーザーが取引戦略を策定し、リソース利用率と収益を最適化するのを支援'
                    },
                    function5: {
                        title: '5. ユーザー評価と信頼システム',
                        item1: '取引双方が相互評価し、評価は信頼システムに記録',
                        item2: '信頼は取引権限と優先順位に影響し、誠実な取引を促進'
                    }
                },
                section2: {
                    title: '二、プラットフォーム役割',
                    table: {
                        role: '役割',
                        responsibility: '職責と権益'
                    },
                    role1: {
                        name: 'コンピューティングパワー供給者',
                        desc: '仮想化されたコンピューティングリソースをプラットフォームに登録・公開し、レンタル料とトークン配当を獲得。'
                    },
                    role2: {
                        name: 'コンピューティングパワー需要者',
                        desc: 'アプリケーション構築、マイニング、モデル訓練などにコンピューティングリソースをレンタルし、需要注文を公開してマッチングを待つことも可能。'
                    },
                    role3: {
                        name: '管理者',
                        desc: '市場秩序を維持し、不誠実なユーザーに対して凍結、ブラックリスト登録などの操作を実行。'
                    },
                    role4: {
                        name: '仲裁委員会',
                        desc: '取引紛争を処理し、過失者と補償案を判定、またはDAO組織に投票決定を提出。'
                    }
                },
                section3: {
                    title: '三、コンピューティングリソース公開プロセス',
                    step1: {
                        label: '仮想化：',
                        desc: 'PowerVerse Infraを通じてローカルのアイドルコンピューティングパワーを独立した仮想マシンに仮想化。'
                    },
                    step2: {
                        label: '登録：',
                        desc: 'プラットフォームに仮想リソースを登録し、詳細な技術パラメータ（CPU/GPU/メモリ/ストレージなど）を提出し、プラットフォームが真正性を検証。'
                    },
                    step3: {
                        label: 'スコアリング：',
                        desc: 'プラットフォームが加重パラメータを通じてリソース性能スコアを計算。'
                    },
                    step4: {
                        label: 'NFT証明書発行：',
                        desc: '各コンピューティングリソースに対して一意のNFTを生成し、所有権、性能、状態などの情報を記録。'
                    },
                    step5: {
                        label: '上場：',
                        desc: 'リソースをプラットフォームリストに上場し、需要者がクエリとレンタルできるようにする。'
                    }
                },
                section4: {
                    title: '四、取引モード',
                    mode1: {
                        title: '1. 直接レンタル取引',
                        step1: '需要者がリソースを選択',
                        step2: 'PowerVerse Coinを支払い',
                        step3: 'リソースを使用',
                        step4: 'プラットフォームが監視',
                        step5: '期限切れ決済',
                        step6: '双方が相互評価'
                    },
                    mode2: {
                        title: '2. タスクベース需要注文',
                        step1: '需要者がタスクを公開（需要、価格、検収方法などを含む）',
                        step2: '供給者が受注',
                        step3: 'タスクを実行',
                        step4: '成果を提出',
                        step5: '検収後決済',
                        step6: '双方が相互評価'
                    }
                },
                section5: {
                    title: '五、プラットフォーム特性',
                    feature1: {
                        title: '分散化',
                        desc: 'ピアツーピア取引、仲介者なし、コスト削減、透明性と公正性の向上。'
                    },
                    feature2: {
                        title: 'セキュリティ',
                        desc: 'データ暗号化、スマートコントラクト監査、ブロックチェーンの改ざん不可能性により、取引のプライバシーと信頼性を保証。'
                    },
                    feature3: {
                        title: 'スケーラビリティ',
                        desc: '複数のコンピューティングリソースアクセスをサポートし、アーキテクチャは柔軟に拡張可能で、将来のビジネス成長に対応。'
                    }
                }
            },
            dao: {
                name: 'PowerVerse DAO',
                description: '分散型自律組織。コミュニティメンバーがエコシステムのガバナンスと意思決定に参加し、コミュニティの知恵と力を最大限に活用して、エコシステムの自己発展と改善を実現',
                learnMore: '詳細を見る',
                pageTitle: 'PowerVerse DAO - 分散型自律組織',
                subtitle: '分散型自律組織',
                slogan: '共に構築、共に統治、共に共有——PowerVerseエコシステムのガバナンスコア',
                intro: 'PowerVerse DAOは、PowerVerse Chainを基盤に構築された分散型自律組織で、コミュニティの集団的意思決定とガバナンスを通じて、PowerVerseエコシステムの公平性、透明性、持続可能な発展を推進することを目的としています。',
                section1: {
                    title: '一、DAOワークフロー',
                    step1: {
                        title: '1. 提案と開始',
                        memberProposal: {
                            label: 'メンバー提案：',
                            desc: 'コミュニティメンバーは誰でも開発提案（技術改善、市場活動、協力機会など）を提出でき、背景、目標、計画、予算などの詳細情報を含める必要があります。'
                        },
                        review: {
                            label: '提案審査：',
                            desc: 'コミュニティが選出した審査委員会が提案の実現可能性、革新性、エコシステム価値を評価し、承認された提案は投票段階に入ります。'
                        }
                    },
                    step2: {
                        title: '2. コミュニティ投票決定',
                        votingStart: {
                            label: '投票開始：',
                            desc: '承認された提案はコミュニティ投票に入ります。トークン保有者は指定期間内に投票できます。'
                        },
                        execution: {
                            label: '結果実行：',
                            desc: '設定された賛成比率に達した後、提案は可決され、プロジェクト実行チームが計画に従って実施を推進し、定期的にコミュニティに進捗を報告します。'
                        }
                    },
                    step3: {
                        title: '3. 実施と監督',
                        teamBuilding: {
                            label: 'チーム構築：',
                            desc: 'ボランティアまたは採用を通じてプロジェクト実行チームを形成し、タスク割り当て、進捗追跡、品質管理を担当します。'
                        },
                        supervision: {
                            label: '監督評価：',
                            desc: 'コミュニティはオンチェーン情報を通じてリアルタイムで進捗を監視できます。プロジェクト監督グループは定期的に検査し、提案基準への準拠を確保し、必要に応じて是正または一時停止の提案を行うことができます。'
                        }
                    },
                    step4: {
                        title: '4. 成果とフィードバック',
                        acceptance: {
                            label: '受入と共有：',
                            desc: 'プロジェクト完了後、監督グループが成果を受け入れ、成果をコミュニティに公表します（経済効果、技術革新など）。'
                        },
                        summary: {
                            label: '経験のまとめ：',
                            desc: 'プロジェクトの経験をまとめ、コミュニティにフィードバックし、DAOの発展戦略と運営メカニズムの最適化に使用します。'
                        }
                    }
                },
                section2: {
                    title: '二、コア特性',
                    feature1: {
                        title: '1. 分散型ガバナンス',
                        decentralization: {
                            label: '権力の分散：',
                            desc: 'オンチェーン投票を通じて、コミュニティメンバーが重大な決定（方向、資金、規則など）に直接参加し、民主的なガバナンスを実現します。'
                        },
                        transparency: {
                            label: '透明性と追跡可能性：',
                            desc: 'すべての決定と取引はブロックチェーンに記録され、完全に公開され検証可能で、信頼と監督を強化します。'
                        }
                    },
                    feature2: {
                        title: '2. コミュニティ駆動型発展',
                        participation: {
                            label: '広範な参加：',
                            desc: 'メンバーが技術、市場、運営などの活動に参加することを奨励し、トークン報酬、名誉表彰などのメカニズムを通じて貢献を刺激します。'
                        },
                        diversity: {
                            label: 'メンバーの多様性：',
                            desc: '技術専門家、業界実務者、投資家、法律専門家など、複数の分野の人材を集め、エコシステムに包括的なサポートを提供します。'
                        }
                    },
                    feature3: {
                        title: '3. 革新的な経済モデル',
                        tokenEconomy: {
                            label: 'トークン経済：',
                            desc: 'PowerVerse Coinをガバナンスとインセンティブツールとして使用し、保有者はガバナンスに参加することで報酬を受け取り、利益とエコシステムの連携を実現します。'
                        },
                        valueSharing: {
                            label: '価値共有：',
                            desc: 'エコシステムの成長によってもたらされる価値はトークンを通じて捕捉され分配され、保有者が発展の利益を共有し、トークンの魅力とエコシステム基盤を強化します。'
                        }
                    }
                }
            },
            decloud: {
                name: 'DeCloud',
                description: '分散型クラウドサービス大生態系。SDK開発ツール、Web3.0サポート、メタバース基盤、SaaSサービスを提供し、eスポーツ、ゲーム、企業協業など複数の業界シナリオをカバー',
                learnMore: '詳細を見る',
                pageTitle: 'DeCloud - Web3.0分散型コンピューティングクラウドプラットフォーム',
                subtitle: 'Web3.0分散型コンピューティングクラウドプラットフォーム',
                intro: 'DeCloudは、PowerVerse Chain、PowerVerse Infra、PowerVerse Marketを統合し、オープンで効率的、安全、スケーラブルな分散型コンピューティングクラウドプラットフォームを構築しました。最適なリソース配分を通じて、エンタープライズレベルの大規模コンピューティングから個人開発者プロジェクトまで、多様なコンピューティングニーズをサポートし、コンピューティングパワーの配分と使用パターンを再構築します。',
                section1: {
                    title: '一、よりスマートなDePINインフラストラクチャ',
                    table: {
                        tech: '技術',
                        capability: 'コア機能',
                        value: '応用価値'
                    },
                    ipfs: {
                        tech: 'IPFS分散型ストレージ',
                        capability: 'AIモデル訓練データとDAppデータを複数のノードに分散保存。',
                        value: 'データの安全性と信頼性を向上させ、単一障害点と漏洩を防止し、コストを削減し、効率を向上させます。'
                    },
                    edge: {
                        tech: '位置認識エッジコンピューティング',
                        capability: 'コンピューティングタスクをデータソースまたはユーザーに近いエッジノードに割り当てます。',
                        value: '遅延を削減し、リアルタイム応答を向上させ、スマート交通、産業自動化などのシナリオに適用し、ネットワーク性能を最適化します。'
                    },
                    routing: {
                        tech: 'マルチグラフトポロジールーティングネットワーク',
                        capability: 'タスク特性とリソース可用性に基づいて最適なコンピューティングパスとリソース配分を動的に選択します。',
                        value: 'タスクの効率的な実行とリソースの合理的な利用を実現し、プラットフォームのコンピューティング性能と安定性を向上させます。'
                    }
                },
                section2: {
                    title: '二、より安全で効率的なAIサポート',
                    table: {
                        solution: '技術ソリューション',
                        coreTech: 'コア技術',
                        value: '応用シナリオと価値'
                    },
                    privacy: {
                        solution: 'プライバシーコンピューティング',
                        coreTech: '準同型暗号と連邦学習を組み合わせ、推論訓練とモデルデータの分離を実現します。',
                        value: 'データプライバシーを保護し、医療、金融などの高感度分野で安全にAI訓練と最適化をサポートします。'
                    },
                    gpu: {
                        solution: 'GPU並列訓練',
                        coreTech: '強力なGPU並列コンピューティングサポートを提供し、最適化されたスケジューリングとリソース管理メカニズムと組み合わせます。',
                        value: '大規模AIモデル訓練を加速し、訓練時間を短縮し、AI研究開発と業界のインテリジェント化転換を支援します。'
                    }
                },
                section3: {
                    title: '三、より豊富なPowerVerse Market要素',
                    marketType: '市場セクター',
                    market1: {
                        title: 'AIデータセットとモデル市場',
                        content: {
                            label: '主要内容：',
                            desc: '高品質なデータセットと事前訓練モデルを提供し、ユーザーの取引と共有をサポートします。'
                        },
                        value: {
                            label: '生態価値：',
                            desc: 'AIリソースの流通と再利用を促進し、開発の障壁を下げ、AI革新と応用の普及を加速します。'
                        }
                    },
                    market2: {
                        title: 'AgentとDApp市場',
                        content: {
                            label: '主要内容：',
                            desc: '開発者はインテリジェントAgentとDAppを公開および取引できます。'
                        },
                        value: {
                            label: '生態価値：',
                            desc: '開発者に商業的収益化チャネルを提供し、プラットフォームアプリケーション生態を豊かにし、ユーザーの個別化ニーズを満たします。'
                        }
                    }
                },
                section4: {
                    title: '四、より包括的な生態構築',
                    sdk: {
                        title: 'SDKサポート',
                        function: {
                            label: '機能説明：',
                            desc: '多言語、多フレームワークSDKを提供し、DeCloudコンピューティングリソースの統合を容易にします。'
                        },
                        value: {
                            label: '開発者とユーザーの価値：',
                            desc: '開発の難易度を下げ、開発効率を向上させ、より多くの開発者を生態系に引き付けます。'
                        }
                    },
                    cdn: {
                        title: '分散型CDN',
                        function: {
                            label: '機能説明：',
                            desc: 'グローバルノードを通じてDAppコンテンツを配信します。'
                        },
                        value: {
                            label: '開発者とユーザーの価値：',
                            desc: 'DAppのアクセス速度、安定性、攻撃耐性を向上させ、ユーザー体験を最適化します。'
                        }
                    },
                    dataSpace: {
                        title: 'データスペース',
                        function: {
                            label: '機能説明：',
                            desc: '安全で効率的な分散型データ管理と共有ソリューションを提供します。'
                        },
                        value: {
                            label: '開発者とユーザーの価値：',
                            desc: '企業と個人のデータ資産化のニーズを満たし、データ価値の流転をサポートします。'
                        }
                    },
                    metaverse: {
                        title: 'メタバースなどの最先端サポート',
                        function: {
                            label: '機能説明：',
                            desc: '仮想シーンレンダリングとリアルタイムインタラクションに強力なコンピューティング基盤を提供します。'
                        },
                        value: {
                            label: '開発者とユーザーの価値：',
                            desc: '没入型メタバース体験を可能にし、デジタル生態系の境界を拡張します。'
                        }
                    }
                },
                features: {
                    title: 'コア特性',
                    item1: '分散型ストレージシステム',
                    item2: 'データ暗号化保護',
                    item3: 'エッジコンピューティングサポート',
                    item4: 'APIインターフェース豊富'
                }
            },
            wallet: {
                name: 'PowerVerse Wallet',
                description: '安全で便利なデジタル資産ウォレット。マルチチェーン資産管理、DeFiインタラクション、NFTコレクションをサポートし、ユーザーにワンストップのWeb3資産管理体験を提供',
                learnMore: '詳細を見る',
                pageTitle: 'Wallet - デジタル資産ウォレット',
                subtitle: 'デジタル資産ウォレット',
                intro: 'PowerVerse Walletは、PowerVerse Chainおよび主要なパブリックチェーンをサポートする安全で使いやすいマルチチェーンデジタル資産ウォレットで、資産管理、DeFiインタラクション、NFTコレクションなどの包括的なサービスをユーザーに提供します。',
                section1: {
                    title: '一、コア機能',
                    feature1: {
                        title: '1. マルチチェーン資産管理',
                        desc: 'PowerVerse Chain、Ethereum、BSCなどの複数のパブリックチェーンをサポートし、PEC、ETH、BNBなどの主要トークンを含む各種デジタル資産を統一管理。'
                    },
                    feature2: {
                        title: '2. 安全なストレージ',
                        desc: 'ハードウェア暗号化とマルチシグネチャ技術を採用し、秘密鍵をローカルで暗号化保存、ニーモニックバックアップをサポートし、資産の安全性を確保。'
                    },
                    feature3: {
                        title: '3. DeFiインタラクション',
                        desc: '内蔵DAppブラウザ、ワンクリックでDeFiプロトコルに接続、流動性マイニング、ステーキング、レンディングなどの操作を簡単に実行。'
                    },
                    feature4: {
                        title: '4. NFT管理',
                        desc: 'NFTの表示、転送、展示をサポートし、デジタルコレクションを簡単に管理。'
                    }
                },
                section2: {
                    title: '二、グローバル決済機能',
                    globalPayment: {
                        title: 'グローバル決済能力',
                        desc: 'PowerVerse Walletは世界中のデジタル資産決済をサポートし、どこにいても迅速かつ安全にクロスボーダー決済を完了できます。QRコード決済、NFC近距離決済、オンライン決済など複数の決済方法をサポートし、デジタル資産を真にグローバルに通用する決済ツールにします。',
                        item1: '世界200以上の国と地域の決済ネットワークをサポート',
                        item2: 'リアルタイム為替レート変換、最適な決済パスを自動計算',
                        item3: '低手数料、従来のクロスボーダー決済と比較して80%以上のコスト削減',
                        item4: '秒単位の着金、銀行の営業日を待つ必要なし'
                    }
                },
                section3: {
                    title: '三、DEX取引機能',
                    dexTrading: {
                        title: '分散型取引所統合',
                        desc: 'PowerVerse Walletは分散型取引所（DEX）機能を内蔵し、ウォレットを離れることなくトークン取引を完了できます。複数の取引ペアをサポートし、最適な価格ルーティングを提供し、ユーザーに最高の取引体験を保証します。',
                        item1: '複数の主要DEXを統合し、最適な価格を自動検索',
                        item2: '指値注文、成行注文など複数の注文タイプをサポート',
                        item3: 'リアルタイム価格監視と取引アラート',
                        item4: '取引履歴記録と収益分析'
                    }
                },
                section4: {
                    title: '四、クラウドゲーミング全シーン統合',
                    cloudGaming: {
                        title: 'シームレスなゲーム体験',
                        desc: 'PowerVerse Walletはクラウドゲーミングエコシステムに深く統合され、ゲーム内資産、アイテム、NFTの統一管理を実現します。プレイヤーはウォレットを使用して直接ゲームにログインし、トークンでゲームアイテムを購入し、ゲーム内NFTを取引でき、Web3ゲームの全シーン統合を真に実現します。',
                        item1: 'ワンクリックでクラウドゲーミングプラットフォームにログイン、重複登録不要',
                        item2: 'ゲーム内資産のリアルタイム同期、ゲーム間資産転送をサポート',
                        item3: 'ゲームアイテムのNFT化、セカンダリーマーケットで自由に取引可能',
                        item4: 'ゲーム収益が自動的にウォレットに決済され、出金と再投資をサポート'
                    }
                },
                features: {
                    title: 'コア特性',
                    item1: 'マルチチェーンサポート',
                    item1Desc: 'PowerVerse Chain、Ethereum、BSCなどの主要パブリックチェーンをサポート',
                    item2: '安全で信頼できる',
                    item2Desc: 'ハードウェア暗号化、マルチシグネチャ、ニーモニックバックアップで資産を全面的に保護',
                    item3: 'DeFi統合',
                    item3Desc: '内蔵DAppブラウザでDeFi生態系にシームレスに接続',
                    item4: 'NFT管理',
                    item4Desc: '完全なNFT閲覧、転送、表示機能'
                }
            },
            scan: {
                name: 'PowerVerse Scan',
                description: 'ブロックチェーンブラウザ。オンチェーンデータクエリ、取引追跡、アドレス分析などの機能を提供し、オンチェーン活動を透明で検索可能に',
                learnMore: '詳細を見る',
                pageTitle: 'Scan - ブロックチェーンブラウザ',
                subtitle: 'ブロックチェーンブラウザ',
                intro: 'PowerVerse ScanはPowerVerse Chainの公式ブロックチェーンブラウザで、完全なオンチェーンデータクエリと分析サービスを提供し、ユーザーが簡単に取引を追跡し、ブロックを表示し、アドレスを分析できるようにし、オンチェーン活動の透明性を実現します。',
                section1: {
                    title: '一、コア機能',
                    feature1: {
                        title: '1. ブロッククエリ',
                        desc: '最新のブロック情報をリアルタイムで表示し、ブロック高、タイムスタンプ、取引数、Gas使用などの詳細データを含む。'
                    },
                    feature2: {
                        title: '2. 取引追跡',
                        desc: '取引ハッシュを通じて取引詳細を迅速にクエリし、送信者、受信者、金額、Gas手数料、取引ステータスなどを含む。'
                    },
                    feature3: {
                        title: '3. アドレス分析',
                        desc: '任意のアドレスの残高、取引履歴、トークン保有状況、コントラクトインタラクション記録などを表示し、アドレス活動を包括的に理解。'
                    },
                    feature4: {
                        title: '4. スマートコントラクトクエリ',
                        desc: 'スマートコントラクトのコード、ABI、呼び出し記録、イベントログなどを表示し、開発者のデバッグとユーザーの検証に便利。'
                    }
                },
                features: {
                    title: 'コア特性',
                    item1: 'リアルタイムデータ',
                    item1Desc: 'オンチェーンデータをリアルタイムで同期し、情報の正確性と適時性を確保',
                    item2: '取引追跡',
                    item2Desc: '完全な取引履歴記録、多次元クエリとフィルタリングをサポート',
                    item3: 'アドレス分析',
                    item3Desc: 'アドレスアクティビティの詳細分析、可視化データ表示を提供',
                    item4: 'コントラクトクエリ',
                    item4Desc: '完全なスマートコントラクト情報、コード検証と呼び出し分析をサポート'
                }
            },
            computingPort: {
                name: 'コンピューティングポート',
                description: 'PowerVerse Chainに基づく分散型インテリジェントコンピューティングプラットフォーム。世界中のアイドルGPU/CPUリソースを集約し、コンピューティング資産のトークン化、標準化、信頼できる取引を実現',
                learnMore: '詳細を見る',
                pageTitle: 'コンピューティングポート - 分散型インテリジェントコンピューティングプラットフォーム',
                subtitle: '分散型インテリジェントコンピューティングプラットフォーム',
                intro: 'コンピューティングポート（XAI Center）はPowerVerse Chain上に構築された分散型インテリジェントコンピューティングプラットフォームで、世界中のアイドルGPU/CPUリソースを集約し、ブロックチェーン技術を通じてコンピューティング資産のトークン化、標準化、信頼できる取引を実現することに専念しています。',
                section1: {
                    title: '一、コア機能',
                    feature1: {
                        title: '1. コンピューティングパワー分割とプール化',
                        desc: 'コンピューティング粒度レベルで、プラットフォームのさまざまな機能は分離とセキュリティを効果的に保証し、さまざまな粒度のコンピューティングパワーリソースの需要に簡単に対応します。',
                        item1: 'グラフィックカード複数インスタンス実行：単一GPUの利用効率を向上',
                        item2: 'グラフィックカード直通技術：高性能コンピューティングタスクのシームレスな接続を確保',
                        item3: 'マルチノード並列コンピューティング：コンピューティングパワーを前例のない高みに拡張し、大規模コンピューティングニーズを満たす',
                        detail: 'コンテナ技術に基づき、PowerVerse Infraドライバーレベルのインターセプション技術と組み合わせて、マルチブランドGPU単一カードの柔軟な割り当てとメモリ分割を実現します。ユーザーは実際のニーズに応じてコンピューティング仕様と分割仕様をカスタマイズし、共有コンピューティングパワーとメモリスライス管理を簡単に実現できます。ユーザーがパブリックコンピューティングプールまたは専用コンピューティングプールを簡単に構築できるようサポートし、チーム内部のリソース共有または特定プロジェクトの独立したコンピューティングパワーニーズを保証する場合でも柔軟に対応でき、バッチスケジューリング、優先度スケジューリング、プリエンプティブスケジューリングなどのさまざまなスケジューリング方法をサポートします。'
                    },
                    feature2: {
                        title: '2. データプラットフォーム',
                        desc: '統一された多様なデータストレージ、データ管理、弾性スケーリングストレージサービスを提供し、コンテナ環境を通じてストレージディレクトリを自動的にマウントします。',
                        item1: 'シームレスな統合、ユーザーに自動的にパブリックストレージサービスを提供し、共有データ制御、テナントレベルの分離、並列読み書き制御、SFTPサポートなどの機能を提供',
                        item2: '直感的で使いやすい可視化ページを提供し、ユーザーはオンラインで申請と閲覧、ページでのアップロードとダウンロードができ、リソースを簡単に管理',
                        item3: 'オンデマンドでの拡張と縮小をサポートし、ユーザーはビジネスニーズに応じてストレージ容量を柔軟に調整でき、ストレージスペース不足やリソース浪費を心配する必要がありません'
                    },
                    feature3: {
                        title: '3. モデル訓練と推論の全ライフサイクル',
                        desc: 'モデル開発、モデル訓練、モデル展開、モデル推論からモデル最適化まで、一連の作業の完全なライフサイクルサポートを提供。',
                        devTitle: '開発環境サービス',
                        dev1: 'オンラインで秒単位で開発環境を作成でき、CPUコア、メモリ、GPUモデル、数量、システムディスクなどに応じて開発マシンを作成可能',
                        dev2: 'カードレス起動、シャットダウン、オンライン開発Jupyter、Python、VScode、イメージ保存をサポート',
                        dev3: 'スケジュールされたシャットダウン、スケジュールされたリリースなどのリソース回収戦略をサポート',
                        trainTitle: '分散訓練サービス',
                        trainDesc: 'ユーザーは訓練タスク、微調整サービスを開始してモデルを調整し、より細かいビジネスシナリオの訓練を増やすことができ、マルチモーダル訓練、事前訓練DLC、SFT微調整などをサポート',
                        evalTitle: 'モデル効果評価',
                        evalDesc: 'テストデータセットに基づいて大規模モデルのパフォーマンス、効率、適用性をテストし、性能指標、汎化能力、推論速度と遅延、リソース消費、解釈可能性、スケーラビリティ、モデルサイズ、データ依存性などの側面から評価可能。',
                        inferTitle: 'オンライン推論',
                        infer1: 'シームレスな展開とカスタマイズ可能な選択：展開プロセスを簡素化し、真の「ワンクリック展開」体験を実現し、モデル広場から直接モデルを展開。同時にプライベートモデルのアップロードもサポートし、パブリックイメージ、カスタム推論イメージ、または指定されたイメージアドレスを通じて柔軟に展開',
                        infer2: '完全なライフサイクル管理と弾力的なリソーススケジューリング：オンライン推論サービスインスタンスの完全なライフサイクル管理を提供し、インスタンスの即座のスケールアップ/ダウン操作を含み、サービスがビジネスニーズに応じてスムーズに拡張することを保証。推論インスタンスの実行ステータスをリアルタイムで監視し、ログ検索とクエリ機能を提供',
                        optTitle: 'モデル最適化',
                        optDesc: 'プロフェッショナルなモデル調整サービスを提供し、モデル評価メカニズムを通じてユーザーがモデル効果を科学的に比較できるよう支援し、モデル選択とビジネスニーズの正確なマッチングを確保。同時に、推論加速技術を継続的に探求し、モデル精度を維持しながら推論速度を大幅に向上させることに専念。'
                    },
                    feature4: {
                        title: '4. インテリジェント監視と自己修復',
                        desc: 'PowerVerse Infraの監視管理サービスに基づき、可視化監視データ、設定可能なアラートサービス、自動化された障害処理を提供し、運用保守を簡素化し、サービス運用保守のインテリジェント化を実現。',
                        monitorTitle: 'インテリジェント監視と多次元リソース可視化',
                        monitorDesc: '統一運用管理プラットフォームを通じて、計算資源、ストレージ資源、ネットワーク資源などの主要運用要素の標準化、可視化管理を実現。監視範囲が広く、計算ノード、GPUカード、コンテナの3つの次元に基づく多指標監視をサポートし、CPU利用率、メモリ利用率、GPU利用率、GPUメモリ利用率、ネットワーク効率監視をサポートし、計算過程におけるNVLink監視、TensorCore監視をサポート。',
                        alertTitle: 'アラート設定と通知',
                        alertDesc: 'ユーザーが業務ニーズに応じてアラートルールグループをカスタマイズできるようサポートし、リソース閾値アラート、性能異常アラートなどを含みます。アラート条件がトリガーされると、システムは直ちにアラート記録を生成し、webhook、電子メールなどの複数のチャネルを通じて指定された受信者にアラート通知を送信します。',
                        faultTitle: '故障検出と修復',
                        faultDesc: 'クラスター内の潜在的な故障を自動的に検出します（ハードウェア故障、ソフトウェア異常、リソースボトルネックなど）。故障が検出されると、システムは迅速に自己修復メカニズムを起動します：',
                        fault1: '故障隔離：影響を受けたノードまたはGPUカードを「汚染」としてマークし、これらのリソースへの新しいタスクのスケジューリングを自動的にブロックし、故障の拡散を防止',
                        fault2: 'タスク移行と再試行：そのノードで実行中のタスクを他の健全なノードに自動的に移行し、失敗したタスクの再実行を試み、ビジネスの継続性を確保',
                        fault3: 'ノード再起動と検出：再起動で回復可能な一時的な故障に対して、ノードを自動的に再起動してサービス状態を検証し、検証が通過するとノードは自動的に計算キューに復帰',
                        fault4: 'オフライン保守と回復：自動修復できない故障に対して、システムはノード/GPUカードを自動的にオフラインにし、関連運用担当者に通知し、修復検証後、リソースを自動的に計算キューに復元'
                    },
                    feature5: {
                        title: '5. エッジコンピューティング',
                        desc: 'エッジコンピューティング能力を提供し、高度にスケーラブルでオープンかつインテリジェントなクラウドエッジ協調インフラストラクチャプラットフォームを構築し、エッジコンピューティングシナリオにおける複数の課題を正確に解決し、エッジコンピューティングとAIシナリオアプリケーションの深い統合を実現。',
                        item1: 'ユーザーセルフサービスの最適化：ユーザーセルフサービス機能を提供し、アカウントの迅速な作成からリソース申請、ワンクリック開通、便利な使用、自動解放までの全プロセスの最適化をカバーし、ユーザーはニーズに応じて共有リソースのタスク時間課金または専用リソースの構成課金を選択可能',
                        item2: 'システム管理とマルチテナントサポート：マルチテナントリソースとビジネス分離をサポートし、各テナントのビジネスが互いに干渉しないことを保証し、サブアカウントと細かいロール権限管理をサポート',
                        item3: '価格設定と課金：直感的でわかりやすい可視化ページを通じて、列挙、線形、階層などの複数の価格設定方法をカバーする包括的で柔軟な価格戦略を構築し、異なるユーザーのコスト選好と実際の使用シナリオを満たす',
                        item4: '顧客運営：全ライフサイクル顧客管理を実現し、登録、認証、チャージ、消費などのリンクをカバーする顧客データを包括的に収集・分析し、精密マーケティングとパーソナライズされたサービスの堅実な基盤を築く'
                    }
                },
                features: {
                    title: 'コア特性',
                    item1: 'コンピューティングプール化',
                    item1Desc: '柔軟なコンピューティングパワー分割とプール管理、パブリックおよび専用コンピューティングプールをサポート',
                    item2: 'モデル訓練と推論',
                    item2Desc: '完全なAIモデル開発、訓練、展開、推論の全ライフサイクルサポート',
                    item3: 'インテリジェント監視',
                    item3Desc: '自動化された障害検出と自己修復メカニズムで安定したサービス運用を保証',
                    item4: 'データプラットフォーム',
                    item4Desc: '統一されたデータストレージと管理サービス、弾性スケーリングをサポート'
                }
            },
            xaiToken: {
                name: 'RWAトークン XAI',
                description: 'XRWA AI生態系のコア機能トークンおよび価値リザーブトークン。収益分配、サービス支払い、生態系ガバナンスの3つの主要機能を担い、実体コンピューティングパワーとオンチェーン金融を接続',
                learnMore: '詳細を見る',
                pageTitle: 'RWAトークン XAI - 生態系コアトークン',
                subtitle: '生態系コアトークン',
                intro: 'XAIはXRWA AI生態系内のコア機能トークンおよび価値リザーブトークンであり、ERC-3643標準に基づいて開発され、生態系価値循環媒体、収益分配ツール、サービス支払い証明書の3つのコア機能を担います。',
                section1: {
                    title: '一、コア機能',
                    feature1: {
                        title: '1. 生態系収益分配の唯一の支払いツール',
                        desc: 'GNFTとGUnit保有者の生態系収益はXAI形式で配布され、この設計により資産とXAI価値が深く結びつき、トークン保有者がコンピューティング資産から生み出される収益配当を受け取ることを保証。',
                        gnftDesc: 'GNFT は XRWA エコシステムにおける物理 GPU 資産のオンチェーン唯一の所有権証明であり、ERC-721 標準に基づいて開発され、分割不可能、代替不可能、一意識別の技術的属性を備えています。各 GNFT は、ハードウェア検証とパフォーマンステストを経た実世界の GPU デバイスに対応し、物理資産とオンチェーン資産の 1:1 のアンカリングを実現します。',
                        gunitDesc: 'GUnit は GNFT を分割して生成されたトークンであり、ERC-3643 標準に従い、分割可能、代替可能、標準化された技術的属性を備え、同時に KYC/AML 関連情報も統合しています。各 GUnit は GNFT の基盤となる GPU 資産の単位コンピューティングパワーシェアに対応します。',
                        xaiDesc: 'XAI は収益分配の唯一の支払いツールとして、GNFT と GUnit 保有者の収益を XAI 価値と深く結びつけ、安定した価値サイクルを形成します。'
                    },
                    feature2: {
                        title: '2. AI生態系サービスの強制支払い証明書',
                        desc: 'XRWAのAIアプリケーション生態系では、XAIは唯一のサービス支払いツールであり、すべてのコンピューティングパワーとAI関連サービスシナリオをカバーし、XAIの剛性需要を構築し、トークン価値の向上を推進。',
                        intro: 'XAI は XRWA エコシステムのすべての AI シナリオインタラクションをカバーし、資産側とアプリケーション側を接続する価値の橋渡しです。XAI Center プラットフォームでは、すべてのコンピューティングサービス、モデルトレーニング、推論サービス、データストレージなどのサービスの支払いに XAI トークンを使用し、剛性の支払い需要を形成します。',
                        usage: 'この「必須支払い」メカニズムは XAI の剛性需要を構築します。XAI の使用シナリオと需要は同期的に成長し、トークン価値の向上を推進します。エコシステムが拡大するにつれて、XAI の支払いシナリオは以下を含めて拡大し続けます：',
                        service1: 'コンピューティングパワーリースおよび購入サービス',
                        service2: 'AI モデルトレーニングおよび推論サービス',
                        service3: 'データストレージおよび管理サービス',
                        service4: 'エージェントアプリケーション開発および展開サービス'
                    },
                    feature3: {
                        title: '3. 生態系ガバナンスとノードインセンティブのコアトークン',
                        desc: 'XAI保有者は生態系ガバナンス権を持ち、オンチェーンボーティングを通じてXRWA生態系の重要な意思決定に参加でき、コアロールはノード資格を取得するためにXAIをステーキングする必要があり、ステーキングペナルティメカニズムを通じて生態系ノードのコンプライアンスと信頼性を保証。',
                        governanceTitle: 'ガバナンス参加',
                        governanceIntro: 'XAI 保有者は生態系ガバナンス権を持ち、オンチェーン投票を通じて XRWA 生態系の重要な決定に参加できます。以下が含まれます：',
                        gov1: 'プロトコルアップグレードと機能改善提案',
                        gov2: '資産配分と運営戦略の調整',
                        gov3: '収益分配メカニズムの最適化',
                        gov4: 'エコシステムパートナーの選択',
                        stakingTitle: 'ノードステーキング',
                        stakingIntro: 'XRWA エコシステムのコア役割には、ノード資格を取得するために一定量の XAI をステーキングする必要があり、「ステーキングペナルティ」メカニズムによりエコシステムノードのコンプライアンスと信頼性を保証します。ステーキングメカニズムには以下が含まれます：',
                        stake1: '最低ステーキング要件：バリデーターになるには最低量の XAI をステーキングする必要があります',
                        stake2: 'ステーキング報酬：バリデーターはステーキング量とオンライン時間に基づいてブロック報酬と取引手数料を受け取ります',
                        stake3: 'ペナルティメカニズム：悪意のある行為（二重署名、長時間のオフラインなど）により、ステーキングされたトークンの一部または全部が没収されます'
                    }
                },
                section2: {
                    title: '二、経済モデル',
                    issuance: {
                        title: '発行メカニズム',
                        intro: 'XAIの発行は「ジェネシス発行+エコシステムマイニング」を組み合わせた方式を採用：',
                        genesis: {
                            title: 'ジェネシス発行',
                            desc: 'ジェネシス発行部分はプロジェクトの立ち上げ、チームインセンティブ、機関投資に使用され、プロジェクト初期に十分な資金とリソースのサポートを確保します。'
                        },
                        mining: {
                            title: 'エコシステムマイニング',
                            intro: 'エコシステムマイニング部分は以下の方法で段階的にリリースされます：',
                            item1: 'GNFT/GUnit保有マイニング：コンピューティングパワー資産トークンを保有するユーザーはXAIマイニング報酬を獲得できます',
                            item2: 'AIサービス利用マイニング：コンピューティングポートプラットフォームサービスを使用するユーザーはXAI報酬を獲得できます',
                            item3: 'ノード検証マイニング：ネットワーク検証に参加するノードはXAI報酬を獲得できます',
                            summary: 'このメカニズムにより、トークン流通量がエコシステムの発展進度と一致し、過度なインフレーションを避け、トークン価値の安定性を維持します。'
                        }
                    },
                    anchoring: {
                        title: '価値アンカリングシステム',
                        intro: 'GNFT、GUnit、XAIはXRWAエコシステムで独立して存在するのではなく、「資産確権-断片化流通-価値交互」の協同システムを形成します：',
                        foundation: {
                            title: '基礎層：GNFTの資産アンカリング',
                            desc: 'GNFTは物理的GPUアセットをオンチェーン確権アセットに変換し、エコシステムに「価値基礎」を提供します。GNFTの資産アンカリングがなければ、GUnitの断片化は基礎資産のサポートを失い、XAIの収益分配も価値源を欠くことになります。'
                        },
                        circulation: {
                            title: '流通層：GUnitの小額化エンパワーメント',
                            desc: 'GUnitはGNFTを断片化することで、高価値資産を小額取引可能なトークンに変換し、エコシステム資産の流動性と包摂性を向上させ、より多くのユーザーの参加を促し、エコシステムに増分資金とコンピューティングパワー需要をもたらし、XAIの支払いシナリオを拡大します。'
                        },
                        value: {
                            title: '価値層：XAIのエコシステム連携',
                            desc: 'XAIは収益分配ツールとして、資産保有者とエコシステム貢献者を接続し、収益分配を通じて資産保有者により多くのコンピューティングパワーを提供するよう促し、支払い需要を通じてAIユーザーがエコシステムサービスを使用するよう促し、逆にGNFTのオンチェーン規模とGUnitの流通活性度を推進します。'
                        }
                    }
                },
                features: {
                    title: 'コア特性',
                    item1: '収益分配',
                    item1Desc: 'GNFT と GUnit 保有者の生態系収益は XAI の形で配布',
                    item2: 'サービス支払い',
                    item2Desc: 'AI 生態系サービスの必須支払い資格情報、すべてのコンピューティングおよび AI 関連サービスシナリオをカバー',
                    item3: '生態系ガバナンス',
                    item3Desc: '保有者はガバナンス権を有し、オンチェーン投票を通じて重要な決定に参加可能',
                    item4: '価値アンカー',
                    item4Desc: '物理的なコンピューティング資産と深く結びつき、トークン価値の安定性を確保'
                }
            }
        },
        scenarios: {
            title: '応用シナリオ',
            description: 'PowerVerse Chainは多様な応用シナリオを可能にします',
            ai: {
                title: 'AIモデルトレーニング',
                description: '大規模なAIモデルのトレーニングと推論をサポートし、コンピューティングコストを削減する分散型GPUリソースプール',
                stats: {
                    costReduction: 'コスト削減',
                    gpuNodes: 'GPUノード',
                    availability: '24時間365日サービス'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: '分散型GPUリソースプール：世界中のアイドルGPUリソースを統合し、強力な分散コンピューティングクラスターを形成',
                    item2: 'インテリジェントタスクスケジューリング：AIアルゴリズムが最適なコンピューティングノードを自動的にマッチングし、リソース利用率を最大化',
                    item3: 'モデルトレーニング加速：PyTorch、TensorFlowなどの主流フレームワークをサポートし、トレーニング速度を3-5倍向上',
                    item4: '推論サービス最適化：低遅延推論サービスでリアルタイムAIアプリケーションのデプロイをサポート',
                    item5: 'コスト透明性：従量課金で隠れた費用なし、従来のクラウドサービスと比較して60%以上のコスト削減'
                },
                cases: {
                    title: '応用ケース',
                    item1: '大規模言語モデルトレーニング：GPT、BERTなどの大規模言語モデルの分散トレーニングをサポート',
                    item2: 'コンピュータビジョン：画像認識、物体検出、セマンティックセグメンテーションなどのCVタスクを加速',
                    item3: '自然言語処理：テキスト分類、感情分析、機械翻訳などのNLPアプリケーション',
                    item4: '推薦システム：パーソナライズされた推薦アルゴリズムのトレーニングとリアルタイム推論'
                },
                features: {
                    gpuCluster: {
                        title: 'GPUクラスター',
                        desc: '世界中のGPUリソースを統合し、強力なコンピューティング能力を提供'
                    },
                    costOptimization: {
                        title: 'コスト最適化',
                        desc: '従来のクラウドサービスと比較して、コストを60%以上削減'
                    },
                    elasticScaling: {
                        title: 'エラスティックスケーリング',
                        desc: '需要に応じてコンピューティングリソースを動的に調整'
                    }
                }
            },
            science: {
                title: '科学計算',
                description: '研究機関に強力なコンピューティング能力を提供する高性能コンピューティングクラスター',
                stats: {
                    researchInstitutes: '研究機関',
                    dataProcessing: 'データ処理',
                    dataProcessingValue: 'PB級',
                    availability: '可用性'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: '高性能コンピューティングクラスター：スーパーコンピューティングレベルのコンピューティング能力を提供し、大規模並列計算をサポート',
                    item2: '多分野サポート：物理学、化学、生物学、天文学、気象学などの複数の科学分野をカバー',
                    item3: 'データセキュリティ保証：エンドツーエンド暗号化で研究データセキュリティ標準に準拠',
                    item4: '協力研究プラットフォーム：複数機関の協力研究、データ共有と協力をサポート',
                    item5: 'コスト効率：従量課金で大規模なハードウェア投資不要、研究コストを削減'
                },
                fields: {
                    title: '応用分野',
                    item1: '分子動力学シミュレーション：タンパク質折りたたみ、薬物分子設計などの生化学計算',
                    item2: '気候シミュレーション：全球気候モデル、極端な天候予測などの気象学研究',
                    item3: '天体物理学：宇宙シミュレーション、銀河進化、ブラックホール研究などの天文計算',
                    item4: '材料科学：新材料設計、性能予測、量子計算など',
                    item5: '遺伝子研究：ゲノム解析、タンパク質構造予測、精密医療'
                },
                features: {
                    hpc: {
                        title: '高性能コンピューティング',
                        desc: '大規模科学計算タスクをサポート'
                    },
                    dataSecurity: {
                        title: 'データセキュリティ',
                        desc: '多重暗号化保護でデータセキュリティを確保'
                    },
                    professionalSupport: {
                        title: '専門サポート',
                        desc: '研究機関に専門的な技術サポートを提供'
                    }
                }
            },
            render: {
                title: 'レンダリングサービス',
                description: '3Dアニメーション、映画効果、その他のレンダリングタスクを加速する分散型レンダリングネットワーク',
                stats: {
                    speedup: 'レンダリング加速',
                    hdSupport: 'HDサポート',
                    costSaving: 'コスト節約'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: '分散レンダリングアーキテクチャ：レンダリングタスクを複数のノードに分散して並列処理し、レンダリング時間を大幅に短縮',
                    item2: 'マルチフォーマットサポート：Blender、Maya、3ds Max、Cinema 4Dなどの主流3Dソフトウェアをサポート',
                    item3: '高品質出力：4K、8K超高精細レンダリングをサポートし、映画級制作要件を満たす',
                    item4: 'リアルタイムプレビュー：リアルタイムレンダリングプレビュー機能を提供し、迅速な反復と最適化を実現',
                    item5: 'インテリジェントスケジューリング：最適なレンダリングノードを自動的に割り当て、レンダリング効率を最大化'
                },
                scenarios: {
                    title: '応用シナリオ',
                    item1: '映画効果：映画、テレビドラマのCG効果レンダリングで制作サイクルを大幅に短縮',
                    item2: 'アニメーション制作：3Dアニメーション、ゲームカットシーンなどのバッチレンダリングタスク',
                    item3: '建築可視化：建築レンダリング、インテリアデザインレンダリング、VRシーン作成',
                    item4: '製品デザイン：製品レンダリング、広告動画、EC展示画像',
                    item5: 'ゲーム開発：ゲームシーンレンダリング、キャラクターモデリング、テクスチャマッピング'
                },
                features: {
                    fastRendering: {
                        title: '高速レンダリング',
                        desc: '分散レンダリングでレンダリング時間を大幅に短縮'
                    },
                    quality: {
                        title: '品質保証',
                        desc: 'レンダリング品質と一貫性を保証'
                    },
                    costSaving: {
                        title: 'コスト節約',
                        desc: 'レンダリングコストを削減し、効率を向上'
                    }
                }
            },
            edge: {
                title: 'エッジコンピューティング',
                description: '低遅延、高可用性のエッジコンピューティングサービスを提供するエッジノードネットワーク',
                stats: {
                    lowLatency: '超低遅延',
                    edgeNodes: 'エッジノード',
                    availability: '可用性'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: 'グローバルエッジノード：主要都市にエッジコンピューティングノードを配置し、近くでサービスを提供',
                    item2: '超低遅延：データ処理をエッジで完了し、遅延を10ms以下に',
                    item3: '高可用アーキテクチャ：マルチノード冗長性で自動フェイルオーバー、サービス継続性を保証',
                    item4: 'データローカライゼーション：機密データをローカルで処理し、データコンプライアンス要件を満たす',
                    item5: 'エラスティックスケーリング：トラフィックに基づいてエッジノードを自動的にスケールし、突然の需要に対応'
                },
                scenarios: {
                    title: '応用シナリオ',
                    item1: 'リアルタイムゲーム：クラウドゲーム、AR/VRアプリケーションで極めて低遅延のインタラクティブ体験が必要',
                    item2: 'IoTデバイス：スマートホーム、産業IoTデバイスのリアルタイムデータ処理',
                    item3: 'ビデオストリーミング：ライブストリーミング、リアルタイムトランスコーディング、CDN加速などのストリーミングサービス',
                    item4: '自動運転：車両エッジコンピューティング、路側デバイスデータ処理、リアルタイム意思決定',
                    item5: '金融取引：高頻度取引、リアルタイムリスク管理、決済処理などの金融アプリケーション'
                },
                features: {
                    lowLatency: {
                        title: '低遅延',
                        desc: 'エッジノードが近くで処理し、ミリ秒レベルの遅延'
                    },
                    highAvailability: {
                        title: '高可用性',
                        desc: '分散アーキテクチャでサービス高可用性を保証'
                    },
                    globalCoverage: {
                        title: 'グローバルカバレッジ',
                        desc: 'エッジノードが世界中の主要地域をカバー'
                    }
                }
            },
            blockchain: {
                title: 'ブロックチェーンアプリケーション',
                description: 'Web3アプリケーション向けの強力な分散型コンピューティングインフラストラクチャを提供し、DApp開発とスマートコントラクト実行をサポート',
                stats: {
                    dapps: 'DAppアプリケーション',
                    tps: 'TPS処理',
                    transactionCost: '取引コスト'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: '高性能ブロックチェーン：革新的なコンセンサスメカニズムを採用し、高TPS取引処理をサポート',
                    item2: 'スマートコントラクトプラットフォーム：Solidity、Rustなどの複数のスマートコントラクト言語をサポート',
                    item3: 'クロスチェーン相互運用性：他の主流ブロックチェーンネットワークとのクロスチェーン相互作用をサポート',
                    item4: '開発者フレンドリー：包括的な開発ツールとドキュメントでDApp開発の障壁を低減',
                    item5: '低Gas費用：最適化されたネットワークアーキテクチャで取引コストを大幅に削減'
                },
                scenarios: {
                    title: '応用シナリオ',
                    item1: 'DeFiアプリケーション：分散型取引所、レンディングプロトコル、流動性マイニングなど',
                    item2: 'NFTマーケットプレイス：デジタルアート取引、ゲームアイテム、コレクティブルなどのNFTアプリケーション',
                    item3: 'GameFi：ブロックチェーンゲーム、Play-to-Earn、メタバースアプリケーション',
                    item4: 'DAOガバナンス：分散型自律組織、コミュニティ投票、提案実行',
                    item5: 'サプライチェーントレーサビリティ：製品トレーサビリティ、偽造防止検証、物流追跡'
                }
            },
            bigdata: {
                title: 'ビッグデータ分析',
                description: '大量データの保存、分析、マイニングをサポートする分散型ビッグデータ処理プラットフォーム',
                stats: {
                    dataStorage: 'データストレージ',
                    dataStorageValue: 'EB級',
                    streamProcessing: 'ストリーム処理',
                    streamProcessingValue: 'リアルタイム',
                    processingCapacity: '処理能力',
                    processingCapacityValue: 'PB/日'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: '分散ストレージ：分散型ストレージネットワークでデータセキュリティと信頼性を確保',
                    item2: 'リアルタイム分析：ストリームデータ処理をサポートし、リアルタイムビジネスデータ分析を実現',
                    item3: '機械学習：統合MLアルゴリズムライブラリでデータマイニングと予測分析をサポート',
                    item4: '可視化プラットフォーム：豊富なデータ可視化ツールとレポートを提供',
                    item5: 'エラスティックスケーリング：データ量に基づいてコンピューティングリソースを自動的にスケール'
                },
                scenarios: {
                    title: '応用シナリオ',
                    item1: 'ビジネスインテリジェンス：企業データ分析、レポート生成、意思決定サポート',
                    item2: 'ユーザープロファイリング：ユーザー行動分析、精密マーケティング、パーソナライズされた推薦',
                    item3: 'リスク管理：金融リスク管理、詐欺検出、異常監視',
                    item4: 'IoT分析：IoTデバイスデータ収集、リアルタイム監視、予測メンテナンス',
                    item5: 'ログ分析：システムログ分析、セキュリティ監査、パフォーマンス最適化'
                }
            },
            cloudgaming: {
                title: 'AI駆動の分散型クラウドゲームソリューションプロバイダー',
                description: 'PowerVerse Chain 分散型クラウドゲームプラットフォーム、全デバイス対応 + PC / モバイル / タブレット / テレビ、低遅延高画質の没入型体験、ダンスやフルーツニンジャなどのモーションゲームに完全対応、無制限のゲームプレイ。',
                download: 'クライアントをダウンロード',
                startPlaying: '今すぐ開始',
                gameImages: {
                    title: '1000+ゲームのオンラインプレイをサポート'
                },
                videos: {
                    title: '製品デモ動画',
                    video1: 'クラウドゲームプラットフォームデモ',
                    video2: 'ゲーム体験展示'
                },
                images: {
                    title: '機能特性展示',
                    item1: '超低遅延、遅延は20ms以下',
                    item2: '4K/8K超高清レンダリングをサポート',
                    item3: 'PC、スマートフォン、タブレットなど複数のデバイスをサポート',
                    item4: '豊富なゲームライブラリ、即座にプレイ可能',
                    item5: '分散型アーキテクチャ、安全で信頼性が高い',
                    item6: 'インテリジェントリソーススケジューリング、最適化された体験'
                },
                esports: {
                    title: 'e スポーツホテル ',
                    item1: 'e スポーツホテル：若者のソーシャルイベントや集まりに人気の選択肢。PowerVerse Chain が新たな運営モデルを提供、ハイエンド PC 不要でハードウェアコストを大幅に削減。',
                    item2: ' クラウドゲーミング端末を配置、クロスプラットフォームのゲーム体験を実現。3A タイトルから対戦型ゲームまで、ワンクリックで即プレイ可能で待ち時間ゼロ、低レイテンシーかつ高画質、マルチプレイヤーオンライン対戦に対応。',
                    item3: ' インテリジェント課金システムで料金設定モードを柔軟に調整、ブロックチェーン技術により取引の透明性と安全性を保証、ホテルとプレイヤー間の信頼の架け橋を構築。'
                },
                stats: {
                    lowLatency: '超低遅延',
                    hdSupport: '高清サポート',
                    availability: '24時間365日サービス'
                },
                workflow: {
                    title: '完全なワークフローループ',
                    step1: 'ユーザー登録ログイン：PowerVerse Chainウォレットを接続し、分散型アイデンティティ認証を実現',
                    step2: 'ゲーム選択：ゲームライブラリを閲覧し、プレイしたいゲームを選択',
                    step3: 'リソース割り当て：PowerVerse Infraがインテリジェントにエッジコンピューティングノードをスケジュールし、GPUリソースを近くに割り当て',
                    step4: 'ゲーム起動：ゲームがクラウドGPUで実行され、低遅延ストリーミングでユーザーデバイスに配信',
                    step5: 'リアルタイムインタラクション：ユーザー操作がリアルタイムでアップロードされ、ゲームグラフィックがレンダリングされストリーミング',
                    step6: '支払い決済：PowerVerseトークン（PEC）を使用して使用時間に基づいて支払い、スマートコントラクトが自動的に決済',
                    step7: 'リソース解放：ゲーム終了後、GPUリソースが自動的にリソースプールに解放され、他のユーザーが使用可能'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: '分散型アーキテクチャ：中央集約型サーバー不要、グローバル分散GPUリソースを活用',
                    item2: '低遅延体験：エッジコンピューティングノードが近くでサービスを提供、遅延は20ms以下',
                    item3: 'コスト優位性：従量課金、高価なハードウェア購入不要、ゲームの障壁を下げる',
                    item4: '高品質レンダリング：4K/8K超高清画質をサポート、スムーズなゲーム体験',
                    item5: 'クロスプラットフォームサポート：PC、スマートフォン、タブレットなど複数のデバイスをサポート、いつでもどこでもプレイ可能'
                },
                scenarios: {
                    title: '応用シナリオ',
                    item1: 'AAA大作クラウドゲーム：ダウンロード不要、即座にプレイ、トップクラスのゲーム体験を楽しむ',
                    item2: 'モバイルクラウドゲーム：モバイルデバイスでPCゲームをプレイ、デバイス性能の制限を突破',
                    item3: 'VR/ARゲーム：仮想現実と拡張現実ゲームをサポート、没入型体験',
                    item4: 'ゲームストリーミング：低遅延ゲームストリーミング、リアルタイムインタラクション'
                },
                features: {
                    lowLatency: {
                        title: '超低遅延',
                        desc: 'エッジノードが近くでサービスを提供、遅延は20ms以下'
                    },
                    hdQuality: {
                        title: '高清画質',
                        desc: '4K/8K超高清レンダリングをサポート'
                    },
                    costEffective: {
                        title: 'コスト優位性',
                        desc: '従量課金、ハードウェア購入不要'
                    }
                }
            },
            computingexchange: {
                title: 'コンピューティングパワー取引',
                description: 'コンピューティングパワーの供給と需要を接続する分散型コンピューティングパワー取引市場、コンピューティングリソースの自由な流転を実現',
                goToTrade: '取引市場へ',
                links: {
                    title: '関連リンク',
                    market: 'PowerVerse Market取引市場へ',
                    infra: 'PowerVerse Infraインフラストラクチャについて',
                    token: 'PowerVerseトークン（PEC）情報を表示',
                    workflow: '完全なワークフローシナリオフローチャートを表示'
                },
                stats: {
                    providers: 'コンピューティングパワー提供者',
                    transactions: '取引注文',
                    successRate: '取引成功率'
                },
                workflow: {
                    title: '完全なワークフローループ',
                    step1: '提供者登録：GPU/CPUリソース提供者がPowerVerse Marketに登録し、コンピューティングパワーリソース情報を公開',
                    step2: 'リソース上架：コンピューティングパワー仕様、価格、利用可能時間などのパラメータを設定し、リソース情報をオンチェーンに保存',
                    step3: '需要者公開：コンピューティングパワー需要者が需要注文を公開し、コンピューティングパワータイプ、数量、時間、予算を指定',
                    step4: 'インテリジェントマッチング：PowerVerse Marketスマートコントラクトが自動的に供給と需要をマッチング、または提供者が積極的に注文を受ける',
                    step5: '注文確認：両方が注文を確認し、需要者がPowerVerseトークン（PEC）を保証金として支払う',
                    step6: 'リソース割り当て：PowerVerse Infraが注文に基づいて自動的にコンピューティングパワーリソースを割り当て、仮想マシンを起動',
                    step7: 'タスク実行：需要者が計算タスクを提出し、システムが自動的に実行して結果を返す',
                    step8: 'リアルタイム監視：両方がリアルタイムでコンピューティングパワー使用状況、タスク進捗、リソース状態を確認可能',
                    step9: '自動決済：タスク完了後、スマートコントラクトが実際の使用時間に基づいて自動的に決済し、保証金を解放',
                    step10: '評価フィードバック：取引双方が相互評価し、評価が信頼システムに記録され、後続の取引優先順位に影響',
                    step11: 'リソース回収：コンピューティングパワーリソースが自動的にリソースプールに解放され、他の注文で使用可能'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ',
                    item1: '分散型取引：第三者仲介不要、売買双方が直接取引、取引コストを削減',
                    item2: 'スマートコントラクト保証：取引全体がスマートコントラクトによって実行され、自動決済、安全で信頼性が高い',
                    item3: '透明な価格設定：市場価格が公開透明、供給と需要の双方が自由に価格交渉',
                    item4: '柔軟な取引：時間単位、日単位、月単位など複数の課金方式をサポート',
                    item5: '信頼システム：ブロックチェーンベースの信頼評価システム、取引の安全性を保証'
                },
                scenarios: {
                    title: '応用シナリオ',
                    item1: 'AI訓練コンピューティングパワー賃貸：AI企業にGPUコンピューティングパワーを提供し、モデル訓練をサポート',
                    item2: 'レンダリングコンピューティングパワー取引：映画会社にレンダリングコンピューティングパワーを提供し、プロジェクト制作を加速',
                    item3: '科学計算リソース：研究機関に高性能計算リソースを提供',
                    item4: 'アイドルリソースの現金化：個人または企業のアイドルGPU/CPUリソースを上架取引し、収益を得る'
                },
                features: {
                    decentralized: {
                        title: '分散化',
                        desc: '仲介不要、直接取引'
                    },
                    smartContract: {
                        title: 'スマートコントラクト',
                        desc: '自動実行、安全で信頼性が高い'
                    },
                    transparent: {
                        title: '透明な価格設定',
                        desc: '市場価格が公開透明'
                    }
                }
            },
            workflow: {
                title: '完全なワークフローシナリオ',
                description: 'クラウドゲーム、コンピューティングパワー取引、PECトークン支払いの完全な閉ループプロセス',
                step1: {
                    title: 'ユーザー登録ログイン',
                    desc: 'PowerVerse Chainウォレットを接続し、分散型アイデンティティ認証を実現'
                },
                branch1: {
                    title: 'クラウドゲームシナリオ',
                    step1: {
                        title: 'ゲーム選択',
                        desc: 'ゲームライブラリを閲覧し、プレイしたいゲームを選択'
                    },
                    step2: {
                        title: 'リソース割り当て',
                        desc: 'PowerVerse Infraがインテリジェントにエッジコンピューティングノードをスケジュールし、GPUリソースを割り当て'
                    },
                    step3: {
                        title: 'ゲーム実行',
                        desc: 'ゲームがクラウドGPUで実行され、低遅延ストリーミングで配信'
                    }
                },
                branch2: {
                    title: 'コンピューティングパワー取引シナリオ',
                    step1: {
                        title: '需要/リソース公開',
                        desc: '需要者が注文を公開するか、提供者がコンピューティングパワーリソースを上架'
                    },
                    step2: {
                        title: 'インテリジェントマッチング',
                        desc: 'PowerVerse Marketスマートコントラクトが自動的に供給と需要をマッチング'
                    },
                    step3: {
                        title: 'タスク実行',
                        desc: 'PowerVerse Infraがリソースを割り当て、計算タスクを実行'
                    }
                },
                payment: {
                    title: 'PECトークン支払い',
                    desc: 'PowerVerseトークン（PEC）を使用して使用時間/リソースに基づいて支払い、スマートコントラクトが自動的に決済'
                },
                release: {
                    title: 'リソース解放',
                    desc: 'タスク完了後、GPU/CPUリソースが自動的にリソースプールに解放され、他のユーザーが使用可能'
                },
                cloudgamingCard: {
                    title: 'クラウドゲームシナリオ',
                    description: 'ユーザーがPowerVerse Chainウォレットでクラウドゲームプラットフォームにログインし、ゲームを選択し、システムがPowerVerse Infraを通じてインテリジェントにエッジGPUリソースをスケジュールし、ゲームがクラウドで実行され、低遅延ストリーミングで配信されます。ユーザーがPECトークンを使用して時間に基づいて支払い、スマートコントラクトが自動的に決済し、ゲーム終了後にリソースが解放されます。',
                    link: 'クラウドゲームの詳細を表示'
                },
                computingexchangeCard: {
                    title: 'コンピューティングパワー取引シナリオ',
                    description: 'コンピューティングパワー提供者がPowerVerse Marketに登録し、GPU/CPUリソースを上架し、需要者が注文を公開します。スマートコントラクトが自動的にマッチングして取引を実行し、需要者がPECトークンを保証金として支払います。PowerVerse Infraがリソースを割り当て、タスクを実行し、リアルタイム監視、自動決済、双方が相互評価し、リソースを回収します。',
                    link: 'コンピューティングパワー取引の詳細を表示'
                },
                tokenPaymentCard: {
                    title: 'PECトークン支払い',
                    description: 'PowerVerse Token（PEC）は生態系のコア資産として、クラウドゲーム時間、コンピューティングパワー賃貸費用、DAOガバナンスへの参加、ノードステーキング報酬の支払いに使用されます。スマートコントラクトがすべての取引を透明、安全、効率的に保証します。',
                    link: 'PECトークンについて'
                },
                flowchartTitle: 'クラウドゲームとコンピューティングパワー取引の完全なワークフローフローチャート'
            },
            rwa: {
                title: 'RWAウォレット',
                description: 'コンプライアンスオンチェーン、コンピューティングパワーが価値を生み出す。RWAウォレットはERC-3643コンプライアンスプロトコルを通じて、全国50以上のマイニングファーム、10万台以上の高性能GPU実体コンピューティングパワーをPowerVerseチェーン上で資産化し、安全で信頼でき、自由に取引可能な分散型コンピューティングインフラストラクチャを構築します。',
                stats: {
                    mines: 'マイニングファーム数',
                    gpuCount: 'GPU数',
                    tokenized: 'トークン化率'
                },
                coreAdvantages: {
                    title: 'コアアドバンテージ：コンプライアンス、実体、効率の三重保障',
                    item1: 'コンプライアンス先行、安全で信頼できる：ERC-3643標準を深く統合し、KYC/AMLなどのグローバル規制要件をスマートコントラクトに組み込みます。資産発行と流通の全過程で合法的かつコンプライアンスを確保し、機関資金の参入の障壁を排除し、堅実な信頼の基盤を確立します。',
                    item2: '実体アンカー、真実で透明：各オンチェーンコンピューティングパワートークンは、全国分散型マイニングファーム内の実際の高性能GPUハードウェアに対応しています。資産の出所が明確で、所有権が検証可能、仮想投機を排除し、実体価値の正確なマッピングを実現します。',
                    item3: 'オンチェーン管理、コスト削減と効率向上：PowerVerseブロックチェーンネットワークに基づき、コンピューティング資産の自動発行、所有権確認、取引決済を実現します。資産管理効率を大幅に向上させ、運用と信頼コストを削減し、流動性の潜在能力を解放します。'
                },
                scenarios: {
                    title: '応用シナリオ：多様なビジネスエコシステムを強化',
                    item1: 'コンプライアンス化コンピューティングパワー資産取引：適格投資者と機関に標準化されたコンプライアンス化コンピューティングパワー資産の購読とセカンダリーマーケット取引サービスを提供し、コンピューティング投資の新パラダイムを開きます。',
                    item2: '分散型コンピューティング金融(DeFi)：基盤となる高品質なコンプライアンス資産として、担保付きローン、収益権ステーキングなどのオンチェーン金融シナリオに適用でき、豊富なコンピューティングDeFiエコシステムを構築します。',
                    item3: 'エンタープライズコンピューティングサービス市場：AIトレーニング、クラウドレンダリング、科学研究計算などの需要側に、即時決済、所有権が明確な弾力的なコンピューティングリースと調達ソリューションを提供します。'
                },
                features: {
                    decentralized: {
                        title: 'コンプライアンス先行',
                        desc: 'ERC-3643標準、合法的コンプライアンスを確保'
                    },
                    tokenized: {
                        title: '実体アンカー',
                        desc: '実際のGPUハードウェア、所有権が検証可能'
                    },
                    transparent: {
                        title: 'オンチェーン管理',
                        desc: '自動発行と所有権確認、コスト削減と効率向上'
                    }
                },
                computingPort: {
                    title: 'コンピューティングポート',
                    description: 'コンピューティングポート（XAI Center）はPowerVerse Chain上に構築された分散型インテリジェントコンピューティングプラットフォームであり、グローバルなアイドルGPU/CPUリソースを集約し、ブロックチェーン技術を通じてコンピューティング資産のトークン化、標準化、信頼できる取引を実現することに専念しています。プラットフォームは、コンピューティングパワー分割、コンピューティングプール管理、データプラットフォーム、モデル訓練と推論、障害検出、エッジコンピューティングなどの包括的なサービスを提供し、AIチームに低コストで高弾性のコンピューティングサポートを提供します。',
                    feature1: 'コンピューティングパワー分割とプール化：マルチインスタンスGPU運用、GPUパススルー技術、マルチノード並列コンピューティングをサポートし、マルチブランドGPU単一カードの柔軟な配分とメモリ分割を実現し、パブリックまたは専用コンピューティングプールの柔軟な構築をサポート',
                    feature2: 'モデル訓練と推論の全ライフサイクル：モデル開発、訓練、展開、推論から最適化までの完全なサポートを提供し、分散訓練、モデル効果評価、オンライン推論、モデル最適化などの専門サービスを含む',
                    feature3: 'インテリジェント監視と自己修復：可視化監視データ、設定可能なアラートサービス、自動化された障害処理に基づき、サービス運用とメンテナンスのインテリジェント化を実現し、ハードウェア障害、ソフトウェア異常、またはリソースボトルネックを自動的に検出および修復'
                },
                xaiToken: {
                    title: 'RWAトークン XAI',
                    description: 'XAIはXRWA AIエコシステム内のコア機能トークンおよび価値リザーブトークンであり、ERC-20標準に基づいて開発され、エコシステム価値循環媒体、収益分配ツール、サービス支払い証明書の3つのコア機能を担います。XAIはXRWAエコシステムのAI全シナリオインタラクションをカバーし、資産側とアプリケーション側を結ぶ価値の橋渡しです。',
                    feature1: 'エコシステム収益分配の唯一の支払いツール：GNFTとGUnit保有者のエコシステム収益はXAI形式で配布され、この設計により資産とXAI価値が深く結びつき、トークン保有者がコンピューティング資産から生み出される収益配当を受け取ることを保証',
                    feature2: 'AIエコシステムサービスの強制支払い証明書：XRWAのAIアプリケーションエコシステムでは、XAIは唯一のサービス支払いツールであり、すべてのコンピューティングパワーとAI関連サービスシナリオをカバーし、XAIの剛性需要を構築し、トークン価値の向上を推進',
                    feature3: 'エコシステムガバナンスとノードインセンティブのコアトークン：XAI保有者はエコシステムガバナンス権を持ち、オンチェーンボーティングを通じてXRWAエコシステムの重要な意思決定に参加でき、コアロールはノード資格を取得するためにXAIをステーキングする必要があり、ステーキングペナルティメカニズムを通じてエコシステムノードのコンプライアンスと信頼性を保証'
                }
            }
        },
        developer: {
            title: '開発者センター',
            description: '開発者がアプリケーションを迅速に構築できるよう支援する豊富な開発ツールとドキュメント',
            docs: {
                title: 'ドキュメント',
                description: '開発者が迅速に開始できるよう支援する完全な技術ドキュメントとAPIリファレンス',
                link: 'ドキュメントを見る'
            },
            sdk: {
                title: 'SDKツールキット',
                description: '開発ワークフローを簡素化し、効率を向上させる多言語SDKサポート',
                link: 'SDKをダウンロード'
            },
            tools: {
                title: '開発ツール',
                description: 'テストネットワーク、デバッグツール、デプロイスクリプト、その他のワンストップ開発ツール',
                link: 'ツールを使用',
                feature1: 'テストネットワーク：完全なテスト環境を提供',
                feature2: 'デバッグツール：強力なデバッグと監視機能',
                feature3: 'デプロイスクリプト：ワンクリックで本番環境にデプロイ'
            },
            community: {
                title: 'コミュニティサポート',
                description: '技術交流と問題解決のための活発な開発者コミュニティ',
                link: 'コミュニティに参加',
                feature1: 'Telegramコミュニティ：リアルタイム技術交流',
                feature2: 'GitHub：オープンソースコードと課題追跡',
                feature3: '技術フォーラム：詳細な技術討論'
            }
        },
        token: {
            pageTitle: 'トークン - PowerVerse Chain',
            title: 'トークンエコノミクス',
            description: '持続可能なエコシステム経済モデルの構築',
            intro: 'PowerVerse TokenはPowerVerse Chainエコシステムのネイティブトークンです',
            totalSupply: '総供給量',
            circulated: '流通済み',
            marketCap: '時価総額',
            networkInfo: 'PowerVerse ネットワーク情報',
            rpcInterface: 'RPC インターフェース',
            mainRPC: 'メインRPCインターフェース:',
            webSocket: 'WebSocket:',
            beaconAPI: 'Beacon API:',
            healthCheck: 'ヘルスチェック:',
            walletInfo: 'ウォレット接続情報',
            rpcURL: 'RPC URL:',
            chainID: 'Chain ID:',
            symbol: 'Symbol:',
            decimals: 'Decimals:',
            distributionChart: 'トークン分配の可視化',
            usage: {
                title: 'トークンの用途',
                items: [
                    'コンピューティングリソース料金の支払い',
                    'ネットワークガバナンス投票への参加',
                    'ノードステーキングと報酬',
                    'エコシステム内アプリ内決済'
                ]
            },
            distribution: {
                title: '分配メカニズム',
                items: [
                    'コミュニティインセンティブ：40%',
                    'チームとアドバイザー：20%',
                    'エコシステム開発：20%',
                    '投資家：15%',
                    '準備金：5%'
                ]
            }
        },
        about: {
            title: '私たちについて',
            vision: {
                title: 'ビジョン',
                content: 'PowerVerse Chainは、世界最大の分散型コンピューティングネットワークの構築に取り組み、コンピューティングリソースを水や電気のようにアクセス可能にし、Web3エコシステムに強力なインフラストラクチャサポートを提供します。'
            },
            mission: {
                title: 'ミッション',
                content: 'ブロックチェーン技術を通じてグローバルなアイドルコンピューティングリソースを統合し、コンピューティングコストを削減し、リソース利用効率を向上させ、分散コンピューティング技術の普及と応用を促進します。'
            },
            values: {
                title: 'コアバリュー',
                items: [
                    '分散化：中央集権機関なし、ユーザーが直接ネットワークガバナンスに参加',
                    '効率と透明性：ブロックチェーン技術が取引の透明性を確保し、スマートコントラクトが自動的に実行',
                    'オープンエコシステム：複数の応用シナリオをサポートし、繁栄する開発者エコシステムを構築',
                    'セキュリティと信頼性：ネットワークとデータのセキュリティを確保する複数のセキュリティメカニズム'
                ]
            },
            team: {
                title: 'チーム紹介',
                intro: '創設チームメンバーは複数の成功した起業経験を持ち、業界をリードするサーバークラスターを構築し、複数の国家特許技術を有しています。会社上場経験を持つ複数のメンバーが初期チームに参加しました。他の従業員には多くの博士や教授がおり、web3分野で豊富な経験を持ち、複数の大規模プロジェクトに参加しています。',
                members: {
                    member1: {
                        name: 'Harvey',
                        role: '創設者 & CEO',
                        bio: '英国バーミンガム大学卒業、ブロックチェーン技術専門家、暗号通貨分野で長年活動',
                        cert: ''
                    },
                    member2: {
                        name: 'Solomon',
                        role: '共同創設者 & CTO',
                        bio: '英国マンチェスター大学卒業、分散システム専門家、ブロックチェーン技術顧問'
                    },
                    member3: {
                        name: 'Jane',
                        role: '共同創設者 & COO',
                        bio: 'カナダビクトリア大学卒業、エコシステム構築専門家、暗号資産管理専門家'
                    }
                },
                others: '他の従業員には多くの博士や教授がおり、web3分野で豊富な経験を持ち、複数の大規模プロジェクトに参加しています。'
            },
            contact: {
                title: 'お問い合わせ',
                intro: 'プロジェクトにご興味がある場合、またはご質問がある場合は、以下の方法でお問い合わせください：',
                email: 'メール：hiabacloud@gmail.com',
                address: '住所：浙江省人材ビル2号館7階',
                twitter: 'Twitter：@PowerVerseChain',
                telegram: 'Telegram：@PowerVerseChain_Offical',
                discord: 'Discord：PowerVerse Community'
            }
        },
        whitepaper: {
            title: 'ホワイトペーパー',
            download: 'ホワイトペーパーをダウンロード',
            sections: {
                introduction: 'はじめに',
                overview: 'プロジェクト概要',
                technology: '技術アーキテクチャ',
                tokenomics: 'トークンエコノミクス',
                roadmap: 'ロードマップ',
                team: 'チーム紹介'
            }
        },
        common: {
            learnMore: '詳細を見る',
            back: '戻る',
            next: '次へ',
            previous: '前へ',
            readMore: '続きを読む',
            download: 'ダウンロード',
            contact: 'お問い合わせ',
            join: '参加する',
            privacy: 'プライバシーポリシー',
            terms: '利用規約',
            cookie: 'Cookieポリシー',
            github: 'GitHub',
            blog: 'ブログ',
            copy: 'コピー',
            copied: 'コピーしました!',
            copyFailed: 'コピーに失敗しました。手動でコピーしてください: ',
            videoNotSupported: 'お使いのブラウザは動画再生をサポートしていません。'
        },
        hardwareFactory: {
            pageTitle: 'ハードウェア工場 - PowerVerse Chain',
            title: 'ハードウェア工場',
            description: 'プロフェッショナルなサーバーシャーシと産業制御シャーシメーカー',
            companyProfile: '会社概要',
            companyIntro: '私たちはプロフェッショナルなサーバーシャーシと産業制御シャーシメーカーであり、お客様に高品質なハードウェア製品ソリューションを提供することに専念しています。',
            companyDesc: '会社紹介',
            companyDescText: '設計、研究開発から生産、品質検査まで、全プロセスを自主的に管理できる完全な生産製造能力を有しています。工場には先進的な生産設備と専門的な技術チームが配備され、製品品質と納期効率を確保しています。',
            companyCulture: '企業文化',
            companyCultureText: '「品質第一、顧客第一、継続的イノベーション」という企業理念を堅持し、生産プロセスを絶えず最適化し、製品品質を向上させ、お客様により大きな価値を創造しています。チーム構築を重視し、積極的な職場環境を醸成し、従業員のイノベーション能力を刺激しています。',
            qualifications: '会社資格',
            license: '営業許可証',
            licenseDesc: '完全な工商登録資格を有し、合法的かつ規制に準拠した運営',
            qualityCert: '品質認証',
            qualityCertDesc: '国際標準化機構品質管理体系認証を取得',
            honorCert: '栄誉証明書',
            honorCertDesc: '複数の業界栄誉と資格認証を獲得',
            patent: '特許技術',
            patentDesc: '複数の製品設計と技術特許を保有',
            productCenter: '製品センター',
            productCenterDesc: '様々なアプリケーションシナリオのニーズを満たす、サーバーシャーシ、ストレージサーバーシャーシ、産業制御シャーシ、組み込みシャーシの全シリーズ製品を提供しています。',
            serverChassis: 'サーバーシャーシ',
            serverChassisDesc: '1Uから8Uおよびタワー型サーバーシャーシを提供',
            storageChassis: 'ストレージサーバーシャーシ',
            storageChassisDesc: '高密度ストレージソリューション',
            industrialChassis: '産業制御シャーシ',
            industrialChassisDesc: '産業制御専用シャーシ',
            embeddedChassis: '組み込みシャーシ',
            embeddedChassisDesc: 'コンパクトな組み込みソリューション',
            accessories: 'アクセサリー',
            accessoriesDesc: '各種シャーシアクセサリーと付属品',
            productDetails: '製品詳細',
            productAdvantages: '製品の利点',
            advantages: [
                '専門設計：業界標準に準拠し、放熱とスペース利用を最適化',
                '高品質材料：高強度鋼材を採用し、耐腐食性があり、長持ち',
                '精密製造：先進的な生産プロセスにより、製品精度と信頼性を確保',
                '柔軟なカスタマイズ：お客様のニーズに応じた個別カスタマイズをサポート',
                '厳格なテスト：出荷前に複数の厳格なテストを実施し、性能の安定性を確保'
            ],
            serverChassisList: {
                item1: '6U ラックマウント型 8 ノードサーバーシャーシ ',
                item2: '5U ラックマウント型 8 ノードサーバーシャーシ ',
                item3: '4U ラックマウント型 36 ベイサーバーシャーシ ',
                item4: '4U ラックマウント型 24 ベイサーバーシャーシ ',
                item5: '4U ラックマウント型 8 ベイサーバーシャーシ ',
                item6: '2U スタンダードサーバー',
                item7: ' シンクライアント'
            },
            serverChassisInfo: {
                item1: "6U ラックマウント設計で、8 つの独立したコンピューティングノードを集積。クラウドゲーミング、クラウド PC、クラウドレンダリングなど、マルチユーザー同時アクセスシナリオ向けに特化設計。「集中型コンピューティングパワー＋分散型デプロイメント」モデルを採用し、ハードウェアのデプロイメントスペースとコストを大幅に削減すると同時に、各ユーザーに独立した安定的な計算性能を提供。",
                item2: "5U 高のシャーシで、8 枚のハイパフォーマンス GPU カードに対応。AI モデルトレーニングやディープラーニング推論に必要な強力な計算能力を実現。高効率電源モジュールとインテリジェント放熱システムを搭載し、GPU が最適パフォーマンスで安定稼働することを保証。さらに、豊富な拡張インターフェースを備え、各種アルゴリズムフレームワークやソフトウェアプラットフォームに対応可能。",
                item3: "大容量データストレージシナリオ向けに特化設計し、「高容量・高信頼性・高拡張性」をコアに開発。マルチベイ設計、RAID 保護、インテリジェントマネジメントを採用し、企業に対して安全かつ安定的、管理が容易なストレージソリューションを提供。データバックアップ、監視ストレージ、メディアライブラリ、ファイル共有などのシーンに適用。",
                item4: "大容量データストレージシナリオ向けに特化設計し、「高容量・高信頼性・高拡張性」をコアに開発。マルチベイ設計、RAID 保護、インテリジェントマネジメントを採用し、企業に対して安全かつ安定的、管理が容易なストレージソリューションを提供。データバックアップ、監視ストレージ、メディアライブラリ、ファイル共有などのシーンに適用。",
                item5: "大容量データストレージシナリオ向けに特化設計し、「高容量・高信頼性・高拡張性」をコアに開発。マルチベイ設計、RAID 保護、インテリジェントマネジメントを採用し、企業に対して安全かつ安定的、管理が容易なストレージソリューションを提供。データバックアップ、監視ストレージ、メディアライブラリ、ファイル共有などのシーンに適用。",
                item6: "汎用的な計算能力を備え、複数のシナリオに対応。コア価値：2U スタンダードラックマウント設計により、パフォーマンス、拡張性、コストパフォーマンスのバランスを実現。企業の一般的な IT ニーズ向けに特化設計で、Web サーバー、データベースサーバー、仮想化ホスト、ファイルサーバーとして活用可能。中小企業の IT インフラにおける「コアコンピューティングパワープラットフォーム」となる。",
                item7: "「軽量化・ハイパフォーマンス・低消費電力」の設計理念を採用したコンパクトでポータブルなミニ PC。クラウドゲーミング、オフィス、教育、クラウドターミナルなどのシナリオに柔軟にデプロイ可能。シンクライアントミニ PC はリモートデスクトップ接続とクラウドリソースアクセスに対応し、端末機器の調達コストとメンテナンスコストを効果的に削減。同時に、優れたセキュリティ性と安定性を備え、ユーザーにスムーズなクラウドオフィス体験とエンターテイメント体験を提供。"
            },
            storageChassisList: {
                item1: '1Uストレージサーバーシャーシ',
                item2: '2Uストレージサーバーシャーシ',
                item3: '4Uストレージサーバーシャーシ'
            },
            industrialChassisList: {
                item1: '標準産業制御シャーシ',
                item2: 'カスタマイズ産業制御シャーシ'
            },
            embeddedChassisList: {
                item1: '組み込みシャーシ',
                item2: '小型化設計'
            },
            accessoriesList: {
                item1: 'ファンモジュール',
                item2: '電源モジュール',
                item3: '拡張カードブラケット',
                item4: 'その他のアクセサリー'
            },
            serverChassisSeries: 'サーバーシャーシシリーズ',
            storageChassisSeries: 'ストレージサーバーシャーシシリーズ',
            industrialChassisSeries: '産業制御シャーシ',
            embeddedChassisSeries: '組み込みシャーシ',
            specSize: 'サイズ',
            specDriveBay: 'ドライブベイ',
            specFan: 'ファン',
            specPower: '電源',
            specExpansion: '拡張スロット',
            specApplication: 'アプリケーション',
            specMaterial: '材質',
            specProtection: '保護レベル',
            specValue1U: '標準1U高さ',
            specValue2U: '標準2U高さ',
            specValue3U: '標準3U高さ',
            specValue4U: '標準4U高さ',
            specValueDrive2_4: '2-4ユニット',
            specValueDrive4_8: '4-8ユニット',
            specValueDrive8_12: '8-12ユニット',
            specValueDrive12_24: '12-24ユニット',
            specValueFan40_60: '40mm/60mm',
            specValueFan80_92: '80mm/92mm',
            specValueFan80_120: '80mm/120mm',
            specValueFan120_140: '120mm/140mm',
            specValuePowerStandard: '標準ATX/冗長電源',
            specValueExpansion1_2: '1-2 PCIe',
            specValueExpansion2_4: '2-4 PCIe',
            specValueExpansion4_6: '4-6 PCIe',
            specValueExpansion6_8: '6-8 PCIe',
            specValueAppWeb: 'Webサーバー、アプリケーションサーバー',
            specValueAppDatabase: 'データベースサーバー、仮想化サーバー',
            specValueAppHPC: '高性能コンピューティング、ストレージサーバー',
            specValueAppBigData: 'ビッグデータストレージ、高性能コンピューティング',
            specValueAppStorage: '高密度ストレージ、NASシステム',
            specValueAppStorage2U: 'エンタープライズストレージ、バックアップシステム',
            specValueAppStorage4U: '大規模データストレージ、クラウドストレージ',
            specValueAppIndustrial: '産業オートメーション、スマート製造',
            specValueAppEmbedded: 'エッジコンピューティング、IoTデバイス',
            specValueMaterial: '高品質鋼板/アルミニウム合金',
            specValueProtection: 'IP65/IP67',
            specValueCompact: 'コンパクト設計',
            specValueDrive2_5: '4-6ユニット 2.5インチ',
            specValueDrive3_5: '12-24ユニット 3.5インチ',
            specValueDrive4U: '36-48ユニット 3.5インチ',
            advantagesTitle: 'コアの利点',
            advantagesIntro: 'お客様に高品質で高性能なハードウェア製品を提供し、様々なアプリケーションシナリオのニーズを満たすことに取り組んでいます。',
            advantage1: '専門設計：先進的な工業設計コンセプト、放熱と構造レイアウトを最適化',
            advantage2: '高品質材料：高品質の鋼材とアルミニウム合金を選択し、製品の耐久性を確保',
            advantage3: '精密製造：先進的な加工技術を採用し、製品精度と品質を保証',
            advantage4: '柔軟な設定：複数のマザーボード仕様と拡張カード設定をサポート',
            advantage5: '良好な放熱：最適化されたエアダクト設計、システムの安定動作を確保',
            advantage6: '迅速な納期：完全なサプライチェーンシステム、タイムリーな納期を保証',
            footerResources: 'リソース',
            footerEcosystem: 'エコシステム'
        },
        researchStrength: {
            pageTitle: '研究開発力 - PowerVerse Chain',
            title: '研究開発力',
            description: '全産業チェーンの研究開発と生産、コアハードウェア技術の習得',
            fullChain: '全産業チェーンの研究開発と生産',
            fullChainDesc: 'PowerVerseは全産業チェーンを高度に垂直統合し、継続的なイノベーションにより、クラウドゲーム製品のより迅速な実現を推進しています。ハードウェアからソフトウェア、ネットワークからエコシステムまで、完全な産業チェーンを掌握し、「エンドツーエンドのコンピューティングインフラストラクチャエコシステム閉ループ」を構築しています。',
            hardwareRnd: 'ハードウェア研究開発',
            hardwareRndDesc: '自社開発のグラフィックスプロセッサーハードウェア、約10年のハードウェア研究開発経験、グラフィックスプロセッサーハードウェアの研究開発と生産管理を担当し、コンピューティングパワーの供給を確保。「エンドツーエンドのコンピューティングインフラストラクチャエコシステム閉ループ」を構築し、コストパフォーマンスを最適化。',
            softwareArch: 'ソフトウェアアーキテクチャ',
            softwareArchDesc: '自社開発アーキテクチャ、ゲームエンジンとクラウドネイティブアーキテクチャの適応ギャップを突破し、リアルタイムレンダリングとエンコーディングの技術的ボトルネックを突破。クラウドデータ統合、プラットフォームベースの開発ツールの継続的な反復。',
            networkOpt: 'ネットワーク最適化',
            networkOptDesc: '低遅延伝送アルゴリズム + 弱いネットワーク抵抗戦略アルゴリズム、安定性の向上。5ミリ秒の超低遅延、0パケットロスの安定接続、エッジノードは30以上の省と市をカバー予定。',
            aiOptimization: '人工知能コンピューティングパワー最適化',
            aiOptimizationDesc: '人工知能コンピューティングパワー最適化、精密な知覚意思決定配分。人工知能駆動のレンダリング強化アルゴリズム、動的解像度調整アルゴリズム、階層エンコーディングアルゴリズム、動的ビットレート調整アルゴリズム。',
            rndCapability: '研究開発能力',
            rndCapabilityDesc: '約10年のハードウェア研究開発経験、グラフィックスプロセッサーハードウェアの研究開発と生産管理を担当し、コンピューティングパワーの供給を確保。現在の特許数：15+、チーム規模：30+、研究開発比率：~40%。',
            coreAlgorithms: 'コア技術アルゴリズム',
            dynamicResolution: '動的解像度調整アルゴリズム',
            dynamicResolutionDesc: 'ネットワーク状況に応じて解像度を動的に調整し、スムーズな体験を保証',
            aiRender: '人工知能駆動のレンダリング強化アルゴリズム',
            aiRenderDesc: '人工知能技術を活用してレンダリング品質と効率を向上',
            layeredEncoding: '階層エンコーディングアルゴリズム',
            layeredEncodingDesc: 'インテリジェントな階層エンコーディング、伝送効率を最適化',
            dynamicBitrate: '動的ビットレート調整アルゴリズム',
            dynamicBitrateDesc: 'ネットワークの変化に適応するリアルタイムビットレート調整',
            zeroCopy: 'ゼロコピーエンコーディングパイプラインアルゴリズム',
            zeroCopyDesc: 'メモリコピーを削減し、エンコーディング性能を向上',
            lowLatency: '低遅延伝送アルゴリズム',
            lowLatencyDesc: '伝送パスを最適化し、遅延を削減',
            team: '研究開発チーム',
            teamSize: 'チーム規模',
            rndRatio: '研究開発比率',
            patents: '現在の特許数',
            experience: 'ハードウェア研究開発経験',
            experienceValue: '10年以上',
            coreTeam: 'コアチームメンバー',
            teamMember1: '夏秋 - ハードウェア研究開発責任者：',
            teamMember1Desc: '約10年のハードウェア研究開発経験、グラフィックスプロセッサーハードウェアの研究開発と生産管理を担当し、コンピューティングパワーの供給を確保',
            teamMember2: '王浩宇 - 最高経営責任者：',
            teamMember2Desc: '8年以上の業界経験、Web3コンピューティングインフラストラクチャに深く関与し、ハードウェア技術とオペレーターリソースを統合、7つの関連特許、業界で著名な専門家',
            vision: '将来のビジョン',
            visionTitle: 'ビジョン：分散型人工知能駆動のクラウドゲームプラットフォーム業界リーダー',
            visionDesc: 'コア産業チェーンを掌握し、製品定義能力を持つことは、勝利への唯一の道です。将来、高い粗利益率、高いプレミアム能力、高い市場シェアを持つ業界の絶対的なトップになり、クラウドゲームプラットフォームを何千もの家庭に届け、テクノロジーで世界を変えます。'
        }
    },
    'ko': {
        nav: {
            home: '홈',
            product: '제품',
            scenario: {
                title: '응용 시나리오',
                cloudgaming: '클라우드 게임 시나리오',
                computingexchange: '컴퓨팅 파워 거래 시나리오',
                rwa: 'RWA 지갑 시나리오',
                workflow: '전체 워크플로우 시나리오'
            },
            developer: '개발자 센터',
            token: '토큰',
            about: '회사 소개',
            whitepaper: '백서',
            hardwareFactory: '하드웨어 공장',
            researchStrength: '연구 개발 역량'
        },
        home: {
            title: 'PowerVerse Chain',
            subtitle: '분산 컴퓨팅 네트워크',
            description: '차세대 분산 컴퓨팅 인프라를 구축하여 전 세계 컴퓨팅 리소스를 효율적으로 공유하고 Web3 생태계 발전을 지원합니다',
            ios: 'iOS',
            android: 'Android'
        },
        architecture: {
            title: '기술 프레임워크',
            subtitle: 'Architecture',
            appLayer: '애플리케이션 레이어',
            protocolLayer: '프로토콜 레이어',
            networkLayer: '네트워크 레이어',
            dapp: 'DApp 애플리케이션',
            api: 'API 인터페이스',
            rpc: 'RPC 서비스',
            consensus: '합의 메커니즘',
            smartContract: '스마트 컨트랙트',
            crossChain: '크로스체인 프로토콜',
            p2p: 'P2P 네트워크',
            nodeManagement: '노드 관리',
            dataStorage: '데이터 저장'
        },
        products: {
            title: '제품 생태계',
            description: '완전한 분산 컴퓨팅 생태계 구축',
            chain: {
                name: 'PowerVerse Chain',
                description: '대규모 분산 컴퓨팅 작업 처리를 지원하는 고성능 블록체인 기반 네트워크',
                learnMore: '자세히 보기',
                pageTitle: 'PowerVerse Chain - 기술 개요',
                subtitle: '기술 개요',
                intro: 'PowerVerse Chain은 블록체인 기반 분산 원장 플랫폼으로, 분산 네트워크, 스마트 컨트랙트 및 합의 메커니즘을 통해 분산 애플리케이션에 안전하고 효율적인 인프라를 제공합니다.',
                architecture: {
                    title: '전체 아키텍처',
                    baseLayer: {
                        title: '기본 레이어',
                        p2p: {
                            label: 'P2P 네트워크: ',
                            desc: '노드 직연결, 빠른 동기화 및 고가용성.'
                        },
                        database: {
                            label: '데이터베이스: ',
                            desc: 'Merkle 트리로 거래·상태 저장, 검증 가능.'
                        },
                        crypto: {
                            label: '암호화 알고리즘: ',
                            desc: '키 관리·서명·해시로 보안 보장.'
                        },
                        sharding: {
                            label: '샤딩 최적화: ',
                            desc: '병렬 검증으로 블록 효율 향상.'
                        }
                    },
                    coreLayer: {
                        title: '핵심 레이어',
                        ledger: {
                            label: '분산 원장: ',
                            desc: '거래, 블록, 풀 등 핵심 데이터.'
                        },
                        consensus: {
                            label: '합의 메커니즘: ',
                            desc: 'POW+POS 하이브리드, 효율적 분산화.'
                        },
                        smartContract: {
                            label: '스마트 컨트랙트: ',
                            desc: 'EVM 호환, Solidity 개발 지원.'
                        }
                    },
                    appLayer: {
                        title: '애플리케이션 레이어',
                        api: {
                            label: 'API 인터페이스: ',
                            desc: 'HTTP/TCP 인터페이스 및 RPC 서비스를 제공하여 생태계 통합 용이.'
                        },
                        dapp: {
                            label: 'DApp: ',
                            desc: 'DeFi, DID 등 다양한 분산 애플리케이션 개발 지원.'
                        }
                    }
                },
                blockTransaction: {
                    title: '블록 및 트랜잭션',
                    structure: {
                        title: '블록 구조',
                        header: {
                            title: '블록 헤더',
                            desc: '부모 블록 해시, 타임스탬프, 트랜잭션 트리 루트 해시(TxRoot) 등 포함.'
                        },
                        body: {
                            title: '블록 본문',
                            desc: '트랜잭션 목록 포함.'
                        },
                        note: '트랜잭션은 Merkle 트리를 통해 구성되며, TxRoot는 블록 무결성을 빠르게 검증하는 데 사용됩니다.'
                    },
                    process: {
                        title: '트랜잭션 프로세스',
                        step1: '사용자가 트랜잭션을 구성하고 브로드캐스트.',
                        step2: '노드가 트랜잭션을 검증한 후 트랜잭션 풀에 저장.',
                        step3: '제안 노드가 트랜잭션을 패키징하여 블록 제안 생성.',
                        step4: '트랜잭션이 EVM에 의해 실행되고 블록이 합의 프로세스에 진입.',
                        step5: '합의 성공 후 블록이 확정되고 상태가 업데이트되며 포크가 처리됨.'
                    }
                },
                consensus: {
                    title: '합의 메커니즘: POW+POS 하이브리드 합의',
                    overview: {
                        title: '합의 메커니즘 개요',
                        desc: 'PowerVerse Chain은 POW+POS 하이브리드 합의 메커니즘을 채택하여 작업 증명(Proof of Work)과 지분 증명(Proof of Stake)의 장점을 결합하여 네트워크 보안을 보장하면서 트랜잭션 처리 효율성 향상.',
                        pow: {
                            title: '작업 증명(POW)',
                            label: '작업 증명(POW): ',
                            desc: '계산 능력 경쟁을 통해 트랜잭션을 검증하고 새로운 블록을 생성하여 네트워크의 보안성과 분산화 특성 보장.'
                        },
                        pos: {
                            title: '지분 증명(POS)',
                            label: '지분 증명(POS): ',
                            desc: '검증자는 토큰을 스테이킹하여 네트워크 합의에 참여. 스테이킹 수량이 많을수록 검증자로 선택될 확률이 높아짐.'
                        }
                    },
                    workflow: {
                        title: '합의 프로세스',
                        step1: 'POW 채굴자는 계산 능력 경쟁을 통해 후보 블록을 생성하고 블록 보상 획득.',
                        step2: 'POS 검증자는 토큰을 스테이킹하여 블록 검증에 참여하여 트랜잭션의 합법성 보장.',
                        step3: '검증자가 투표하며, 2/3 이상의 검증자가 동의한 블록이 확정됨.',
                        step4: '확정된 블록이 블록체인에 추가되어 네트워크 상태 업데이트.'
                    },
                    staking: {
                        title: 'POS 스테이킹 메커니즘',
                        intro: '지분 증명(POS) 스테이킹은 PowerVerse Chain 네트워크 보안의 핵심 메커니즘으로, 이더리움 2.0의 스테이킹 설계를 참고하여 검증자에게 안정적인 수익원 제공.',
                        minimum: {
                            title: '최소 스테이킹 요구사항',
                            label: '최소 스테이킹 요구사항: ',
                            desc: '검증자가 되려면 최소 수량의 토큰을 스테이킹해야 하며, 경제적 인센티브와 네트워크 보안을 일치시킴.'
                        },
                        rewards: {
                            title: '스테이킹 보상',
                            label: '스테이킹 보상: ',
                            desc: '블록 검증 및 합의 투표에 참여하여 보상 획득. 보상률은 스테이킹 총량 및 네트워크 활동도와 관련됨.'
                        },
                        slashing: {
                            title: '슬래싱 메커니즘',
                            label: '슬래싱 메커니즘: ',
                            desc: '악의적이거나 장기간 오프라인인 검증자는 스테이킹 몰수 위험으로 네트워크 보안 보장.'
                        },
                        benefits: {
                            title: '스테이킹의 이점',
                            item1: '안정적인 스테이킹 보상을 획득하며, 연간 수익률은 네트워크 상황에 따라 동적으로 조정',
                            item2: '네트워크 거버넌스에 참여하여 프로토콜 업그레이드 및 중요한 결정에 투표',
                            item3: '네트워크 보안 강화 - 스테이킹 토큰이 많을수록 네트워크가 더 안전',
                            item4: '위임 스테이킹 지원 - 일반 사용자는 토큰을 검증자 노드에 위임 가능'
                        }
                    }
                },
                networkConfig: {
                    title: '네트워크 구성 표준',
                    overview: {
                        title: '네트워크 매개변수 구성',
                        desc: 'PowerVerse Chain은 표준화된 네트워크 구성을 채택하여 노드 간 호환성 및 네트워크의 안정적인 운영 보장.'
                    },
                    blockParams: {
                        title: '블록 매개변수',
                        size: '블록 크기: 최대 2MB',
                        interval: '블록 간격: 약 3초',
                        gasLimit: 'Gas 제한: 블록당 8,000,000 Gas'
                    },
                    consensusParams: {
                        title: '합의 매개변수',
                        minStake: '최소 스테이킹: 10,000 PEC',
                        epoch: 'Epoch 주기: 100 블록',
                        finality: '최종 확인: 2/3 검증자 투표'
                    },
                    networkParams: {
                        title: '네트워크 매개변수',
                        chainId: 'Chain ID: 메인넷 1001',
                        rpcPort: 'RPC 포트: 8545',
                        p2pPort: 'P2P 포트: 30303'
                    }
                },
                coin: {
                    title: 'PowerVerse Coin: 생태계 핵심 자산',
                    totalSupply: '총 공급량',
                    totalSupplyValue: '14억',
                    features: {
                        title: '주요 기능',
                        staking: {
                            title: '스테이킹을 통한 네트워크 유지',
                            desc: '스테이킹을 통해 합의에 참여하고 보상을 획득하며 네트워크 보안 및 안정성 강화.'
                        },
                        circulation: {
                            title: '생태계 순환 및 결제',
                            desc: '생태계 내 가치 교환 매체로 작동하며 개발 인센티브, 서비스 결제 및 앱 내 거래에 사용.'
                        },
                        dao: {
                            title: 'DAO 거버넌스',
                            desc: '보유자는 PowerVerse DAO 투표에 참여하여 프로토콜 업그레이드, 자금 배분 등의 중요한 결정을 공동으로 결정.'
                        }
                    }
                }
            },
            infra: {
                name: 'PowerVerse Infra',
                description: '가상화 계층에서 탁월한 성능을 제공하며 리소스의 효율적인 활용과 유연한 할당을 실현하여 상위 애플리케이션과 서비스에 강력한 지원 제공',
                learnMore: '자세히 보기',
                pageTitle: 'PowerVerse Infra - 분산 물리 인프라 네트워크(DePIN) 출발점',
                depinBadge: 'DePIN의 시작',
                subtitle: '분산 물리 인프라 네트워크(DePIN) 출발점',
                intro: 'PowerVerse Infra는 소프트웨어 정의 개념을 기반으로 한 가상화 소프트웨어 플랫폼으로, 다양한 칩 컴퓨팅 파워(CPU, GPU, AI 칩 및 양자 칩 포함)를 통합하고 가상화 관리하여 유휴 컴퓨팅 파워를 공유 가능하고 거래 가능한 디지털 자산으로 전환하며, 사용자에게 효율적이고 다양한 컴퓨팅 파워 획득 방법을 제공합니다.',
                section1: {
                    title: 'I. 핵심 설계: 5가지 컴포넌트와 9가지 서비스',
                    components: {
                        title: '5가지 핵심 컴포넌트',
                        table: {
                            component: '컴포넌트',
                            function: '핵심 기능'
                        },
                        control: {
                            name: '제어 컴포넌트',
                            desc: '아키텍처 핵심으로 요청 수신, 리소스 할당 및 시스템 모니터링을 담당하며 가상화, 네트워크, 이미지 등의 서비스를 포함합니다.'
                        },
                        compute: {
                            name: '계산 컴포넌트',
                            desc: '컴퓨팅 리소스 제공자로 가상 머신 인스턴스를 실행하고 컴퓨팅 작업을 처리합니다.'
                        },
                        storage: {
                            name: '저장 컴포넌트',
                            desc: '블록 저장소 및 객체 저장소를 지원하며 데이터 및 이미지 저장을 담당합니다.'
                        },
                        network: {
                            name: '네트워크 컴포넌트',
                            desc: '가상 네트워크, 서브넷, 라우팅 등을 관리하여 가상 머신 통신, 네트워크 격리 및 보안을 구현합니다.'
                        },
                        interface: {
                            name: '인터페이스 서비스',
                            desc: 'RESTful API를 제공하여 컴포넌트 간 통신 및 상호작용을 구현합니다.'
                        }
                    },
                    services: {
                        title: '9가지 주요 서비스 모듈',
                        virtualization: {
                            title: '핵심 가상화',
                            desc: '가상 머신의 전체 생명주기(생성, 일시 중지, 조정, 삭제)를 관리하며 CPU, GPU, 메모리 등의 리소스를 구성합니다.'
                        },
                        network: {
                            title: '네트워크 가상화',
                            desc: '네트워크 가상화 기술 및 연결 서비스를 제공합니다.'
                        },
                        image: {
                            title: '이미지 서비스',
                            desc: '다양한 이미지 형식을 지원하며 이미지 업로드, 삭제 및 정보 편집을 구현합니다.'
                        },
                        blockStorage: {
                            title: '블록 저장소',
                            desc: '가상 머신에 안정적인 데이터 블록 저장소 서비스를 제공합니다.'
                        },
                        objectStorage: {
                            title: '객체 저장소',
                            desc: '중복 및 장애 허용 메커니즘을 통해 확장 가능한 객체 저장소를 구현하며 파일 액세스 및 영구 저장을 지원합니다.'
                        },
                        monitoring: {
                            title: '모니터링 서비스',
                            desc: '과금, 모니터링 및 기타 서비스에 통계 데이터 지원을 제공합니다.'
                        },
                        permission: {
                            title: '권한 서비스',
                            desc: 'PowerVerse Chain의 DID 서비스를 기반으로 아이덴티티 검증, 규칙 관리 및 토큰 서비스를 제공합니다.'
                        },
                        orchestration: {
                            title: '오케스트레이션 서비스',
                            desc: '템플릿을 통해 DeCloud 인프라의 자동 배포를 구현합니다.'
                        },
                        management: {
                            title: '관리',
                            desc: '다양한 서비스에 대한 Web 관리 인터페이스를 제공합니다.'
                        }
                    }
                },
                section2: {
                    title: 'II. 가상화 솔루션: Type1 및 Type2',
                    type1: {
                        title: 'Type1(베어메탈)',
                        badge: '고성능 솔루션',
                        arch: {
                            label: '아키텍처 특징: ',
                            desc: '하드웨어에서 직접 실행되며 호스트 운영 체제가 없고 리소스 활용이 효율적입니다.'
                        },
                        performance: {
                            label: '성능: ',
                            desc: '낮은 지연 시간, 높은 처리량, 정밀한 하드웨어 리소스 제어, 네트워크 및 저장소 I/O 최적화.'
                        },
                        scenario: {
                            label: '적용 시나리오: ',
                            desc: '대규모 데이터 계산, 고부하 엔터프라이즈 애플리케이션, 고성능 컴퓨팅.'
                        }
                    },
                    type2: {
                        title: 'Type2',
                        badge: '유연한 솔루션',
                        arch: {
                            label: '아키텍처 특징: ',
                            desc: '호스트 운영 체제에서 실행되며 호스트 머신의 리소스 관리에 의존합니다.'
                        },
                        performance: {
                            label: '성능: ',
                            desc: '호스트 리소스 경쟁의 영향을 받아 고강도 작업에서 성능 병목 현상이 발생할 수 있습니다.'
                        },
                        scenario: {
                            label: '적용 시나리오: ',
                            desc: '개인 개발, 소규모 애플리케이션, 빠른 배포 및 테스트 환경.'
                        }
                    }
                },
                section3: {
                    title: 'III. PowerVerse Chain과의 협력',
                    did: {
                        title: '1. DID 기반 가상 머신 권한 서비스',
                        item1: '각 사용자 및 가상 머신에 고유한 분산 아이덴티티(DID)를 생성하여 역사적 행동 및 신용 데이터와 연결합니다.',
                        item2: '블록체인 합의를 통해 아이덴티티를 검증하며 중앙 집중식 기관이 필요 없고 공정성, 보안 및 불변성을 보장합니다.',
                        item3: '컴퓨팅 파워 임대에서 양측이 서로의 신용 및 지불 능력을 검증할 수 있어 투명하고 신뢰할 수 있는 거래 환경을 구축합니다.'
                    },
                    smartContract: {
                        title: '2. 스마트 컨트랙트 기반 컴퓨팅 파워 거래 집계기(PowerVerse Market)',
                        item1: '구매자와 판매자가 직접 합의에 도달하며 스마트 컨트랙트를 통해 임대, 결제 및 기록 보관을 자동으로 실행합니다.',
                        item2: '수동 협상 및 제3자 중개를 제거하여 효율적이고 투명하며 저비용의 컴퓨팅 파워 거래를 구현합니다.'
                    }
                },
                section4: {
                    title: 'IV. 기능 특성',
                    chipCompatibility: {
                        title: '광범위한 칩 호환성',
                        desc: 'CPU, GPU, AI 컴퓨팅 칩 및 양자 칩을 포괄적으로 지원하여 다양한 컴퓨팅 요구를 충족하고 유휴 컴퓨팅 파워의 활용을 극대화합니다.'
                    },
                    quantum: {
                        title: '선견지명 있는 양자 컴퓨팅 지원',
                        desc: '양자 칩 가상화 기술 준비를 시작하여 양자 비트 추상 모델 및 시뮬레이션 인터페이스를 제공하며 양자 알고리즘 실험을 지원합니다.'
                    },
                    security: {
                        title: '높은 보안 및 신뢰 보장',
                        desc: 'DID 아이덴티티 관리, 스마트 컨트랙트 자동 실행 및 블록체인 불변 기록 보관을 결합하여 공정하고 투명한 신뢰할 수 있는 생태계를 구축합니다.'
                    },
                    scheduling: {
                        title: '효율적인 리소스 활용 및 동적 스케줄링',
                        desc: '가상 머신의 실시간 부하에 따라 컴퓨팅 파워 할당을 자동으로 조정하여 리소스 낭비 및 과부하를 방지하고 활용 효율성을 향상시키며 비용을 절감합니다.'
                    }
                }
            },
            market: {
                name: 'PowerVerse Market',
                description: '분산 컴퓨팅 리소스 거래 시장으로 리소스 배분을 최적화하고 수요와 공급을 연결하며, 동시에 모델 및 데이터 시장을 제공하여 지식과 기술 공유 촉진',
                learnMore: '자세히 보기',
                pageTitle: 'PowerVerse Market - 분산 컴퓨팅 파워 거래 플랫폼',
                subtitle: '분산 컴퓨팅 파워 거래 플랫폼',
                intro: 'PowerVerse Market은 PowerVerse Chain과 PowerVerse Infra를 기반으로 구축된 분산 컴퓨팅 파워 거래 플랫폼입니다. 스마트 컨트랙트와 블록체인 기술을 통해 컴퓨팅 파워 공급자와 수요자를 연결하여 자동화되고 투명하며 제3자를 신뢰할 필요가 없는 컴퓨팅 리소스 거래를 구현합니다.',
                section1: {
                    title: 'I. 플랫폼 핵심 기능',
                    function1: {
                        title: '1. 컴퓨팅 리소스 관리',
                        item1: '공급자가 컴퓨팅 리소스 정보(CPU/GPU/저장소 등)를 게시하고 가격, 사용 가능 시간 등의 매개변수를 설정',
                        item2: '리소스 정보는 실시간으로 업데이트 가능하며 시장 변화에 유연하게 대응'
                    },
                    function2: {
                        title: '2. 컴퓨팅 수요 주문 관리',
                        item1: '수요자가 컴퓨팅 수요 주문을 제출하여 유형, 수량, 기간, 예산 등을 지정',
                        item2: '플랫폼이 자동으로 리소스를 매칭하며 공급자도 적극적으로 주문을 수락할 수 있음'
                    },
                    function3: {
                        title: '3. 거래 실행 및 모니터링',
                        item1: '스마트 컨트랙트가 컴퓨팅 파워 공급 및 비용 결제를 자동 실행',
                        item2: '수요자는 컴퓨팅 파워 사용 및 작업 진행 상황을 실시간으로 모니터링할 수 있으며 예외 상황은 자동 알림'
                    },
                    function4: {
                        title: '4. 데이터 통계 및 분석',
                        item1: '거래 기록, 리소스 분포, 가격 추세 등의 데이터 분석 제공',
                        item2: '사용자가 거래 전략을 수립하고 리소스 활용률과 수익을 최적화하는 데 도움'
                    },
                    function5: {
                        title: '5. 사용자 평가 및 신뢰 시스템',
                        item1: '거래 당사자가 서로 평가하며 평가는 신뢰 시스템에 기록',
                        item2: '신뢰는 거래 권한 및 우선순위에 영향을 미치며 정직한 거래를 장려'
                    }
                },
                section2: {
                    title: 'II. 플랫폼 역할',
                    table: {
                        role: '역할',
                        responsibility: '직책 및 권익'
                    },
                    role1: {
                        name: '컴퓨팅 파워 공급자',
                        desc: '가상화된 컴퓨팅 리소스를 플랫폼에 등록 및 게시하여 임대료 및 토큰 배당을 획득합니다.'
                    },
                    role2: {
                        name: '컴퓨팅 파워 수요자',
                        desc: '애플리케이션 구축, 마이닝, 모델 훈련 등에 컴퓨팅 리소스를 임대하거나 수요 주문을 게시하여 매칭을 기다릴 수 있습니다.'
                    },
                    role3: {
                        name: '관리자',
                        desc: '시장 질서를 유지하고 불성실한 사용자에 대해 동결, 블랙리스트 등록 등의 조치를 실행합니다.'
                    },
                    role4: {
                        name: '중재 위원회',
                        desc: '거래 분쟁을 처리하고 과실 당사자 및 보상 방안을 판정하거나 DAO 조직에 투표 결정을 제출합니다.'
                    }
                },
                section3: {
                    title: 'III. 컴퓨팅 리소스 게시 프로세스',
                    step1: {
                        label: '가상화: ',
                        desc: 'PowerVerse Infra를 통해 로컬 유휴 컴퓨팅 파워를 독립적인 가상 머신으로 가상화합니다.'
                    },
                    step2: {
                        label: '등록: ',
                        desc: '플랫폼에 가상 리소스를 등록하고 상세 기술 매개변수(CPU/GPU/메모리/저장소 등)를 제출하며 플랫폼이 진정성을 검증합니다.'
                    },
                    step3: {
                        label: '점수 계산: ',
                        desc: '플랫폼이 가중 매개변수를 통해 리소스 성능 점수를 계산합니다.'
                    },
                    step4: {
                        label: 'NFT 증명서 발급: ',
                        desc: '각 컴퓨팅 리소스에 대해 고유한 NFT를 생성하여 소유권, 성능, 상태 등의 정보를 기록합니다.'
                    },
                    step5: {
                        label: '상장: ',
                        desc: '리소스를 플랫폼 목록에 상장하여 수요자가 조회 및 임대할 수 있도록 합니다.'
                    }
                },
                section4: {
                    title: 'IV. 거래 모드',
                    mode1: {
                        title: '1. 직접 임대 거래',
                        step1: '수요자가 리소스 선택',
                        step2: 'PowerVerse Coin 결제',
                        step3: '리소스 사용',
                        step4: '플랫폼 모니터링',
                        step5: '만료 결제',
                        step6: '상호 평가'
                    },
                    mode2: {
                        title: '2. 작업 기반 수요 주문',
                        step1: '수요자가 작업 게시(요구사항, 가격, 검수 방식 등 포함)',
                        step2: '공급자가 수락',
                        step3: '작업 실행',
                        step4: '결과 제출',
                        step5: '검수 후 결제',
                        step6: '상호 평가'
                    }
                },
                section5: {
                    title: 'V. 플랫폼 특성',
                    feature1: {
                        title: '분산화',
                        desc: '피어투피어 거래, 중개자 없음, 비용 절감, 투명성 및 공정성 향상.'
                    },
                    feature2: {
                        title: '보안성',
                        desc: '데이터 암호화, 스마트 컨트랙트 감사, 블록체인 불변성으로 거래 프라이버시 및 신뢰성 보장.'
                    },
                    feature3: {
                        title: '확장성',
                        desc: '다양한 컴퓨팅 리소스 접근을 지원하며 아키텍처는 유연하게 확장 가능하여 향후 비즈니스 성장에 대응합니다.'
                    }
                }
            },
            dao: {
                name: 'PowerVerse DAO',
                description: '분산 자율 조직으로 커뮤니티 멤버가 생태계 거버넌스와 의사결정에 참여하여 커뮤니티의 지혜와 힘을 최대한 발휘하고 생태계의 자체 발전과 개선 실현',
                learnMore: '자세히 보기',
                pageTitle: 'PowerVerse DAO - 분산 자율 조직',
                subtitle: '분산 자율 조직',
                slogan: '함께 구축, 함께 통치, 함께 공유——PowerVerse 생태계의 거버넌스 핵심',
                intro: 'PowerVerse DAO는 PowerVerse Chain을 기반으로 구축된 분산 자율 조직으로, 커뮤니티의 집단적 의사결정과 거버넌스를 통해 PowerVerse 생태계의 공정성, 투명성 및 지속 가능한 발전을 추진하는 것을 목표로 합니다.',
                section1: {
                    title: 'I. DAO 워크플로우',
                    step1: {
                        title: '1. 제안 및 시작',
                        memberProposal: {
                            label: '멤버 제안: ',
                            desc: '모든 커뮤니티 멤버는 개발 제안(기술 개선, 시장 활동, 협력 기회 등)을 제출할 수 있으며, 배경, 목표, 계획, 예산 등의 상세 정보를 포함해야 합니다.'
                        },
                        review: {
                            label: '제안 심사: ',
                            desc: '커뮤니티가 선출한 심사 위원회가 제안의 실현 가능성, 혁신성 및 생태계 가치를 평가하며, 승인된 제안은 투표 단계로 진행됩니다.'
                        }
                    },
                    step2: {
                        title: '2. 커뮤니티 투표 결정',
                        votingStart: {
                            label: '투표 시작: ',
                            desc: '승인된 제안은 커뮤니티 투표로 진행됩니다. 토큰 보유자는 지정된 기간 내에 투표할 수 있습니다.'
                        },
                        execution: {
                            label: '결과 실행: ',
                            desc: '설정된 찬성 비율에 도달한 후 제안이 통과되며, 프로젝트 실행 팀이 계획에 따라 구현을 추진하고 정기적으로 커뮤니티에 진행 상황을 보고합니다.'
                        }
                    },
                    step3: {
                        title: '3. 구현 및 감독',
                        teamBuilding: {
                            label: '팀 구성: ',
                            desc: '자원봉사 또는 채용을 통해 프로젝트 실행 팀을 구성하며, 작업 할당, 진행 추적 및 품질 관리를 담당합니다.'
                        },
                        supervision: {
                            label: '감독 평가: ',
                            desc: '커뮤니티는 온체인 정보를 통해 실시간으로 진행 상황을 모니터링할 수 있습니다. 프로젝트 감독 그룹은 정기적으로 검사하여 제안 기준 준수를 보장하며, 필요시 개선 또는 일시 중지 제안을 할 수 있습니다.'
                        }
                    },
                    step4: {
                        title: '4. 결과 및 피드백',
                        acceptance: {
                            label: '수락 및 공유: ',
                            desc: '프로젝트 완료 후 감독 그룹이 결과를 수락하며, 성과를 커뮤니티에 공개합니다(경제적 효과, 기술 혁신 등).'
                        },
                        summary: {
                            label: '경험 요약: ',
                            desc: '프로젝트 경험을 요약하고 커뮤니티에 피드백하여 DAO 발전 전략 및 운영 메커니즘 최적화에 사용합니다.'
                        }
                    }
                },
                section2: {
                    title: 'II. 핵심 특성',
                    feature1: {
                        title: '1. 분산 거버넌스',
                        decentralization: {
                            label: '권력 분산: ',
                            desc: '온체인 투표를 통해 커뮤니티 멤버가 주요 결정(방향, 자금, 규칙 등)에 직접 참여하여 민주적 거버넌스를 구현합니다.'
                        },
                        transparency: {
                            label: '투명성 및 추적 가능성: ',
                            desc: '모든 결정 및 거래는 블록체인에 기록되며 완전히 공개되고 검증 가능하여 신뢰와 감독을 강화합니다.'
                        }
                    },
                    feature2: {
                        title: '2. 커뮤니티 주도 발전',
                        participation: {
                            label: '광범위한 참여: ',
                            desc: '멤버가 기술, 시장, 운영 등의 활동에 참여하도록 장려하며, 토큰 보상, 명예 인정 등의 메커니즘을 통해 기여를 자극합니다.'
                        },
                        diversity: {
                            label: '멤버 다양성: ',
                            desc: '기술 전문가, 업계 실무자, 투자자, 법률 전문가 등 다양한 분야의 인재를 모아 생태계에 포괄적인 지원을 제공합니다.'
                        }
                    },
                    feature3: {
                        title: '3. 혁신적인 경제 모델',
                        tokenEconomy: {
                            label: '토큰 경제: ',
                            desc: 'PowerVerse Coin을 거버넌스 및 인센티브 도구로 사용하여 보유자가 거버넌스에 참여함으로써 보상을 받고 이익과 생태계의 연계를 실현합니다.'
                        },
                        valueSharing: {
                            label: '가치 공유: ',
                            desc: '생태계 성장으로 인한 가치는 토큰을 통해 포착되고 배분되어 보유자가 발전의 이익을 공유하며 토큰의 매력과 생태계 기반을 강화합니다.'
                        }
                    }
                }
            },
            decloud: {
                name: 'DeCloud',
                description: '분산 클라우드 서비스 대생태계로 SDK 개발 도구, Web3.0 지원, 메타버스 기반, SaaS 서비스를 제공하며 e스포츠, 게임, 기업 협업 등 여러 업계 시나리오를 포괄',
                learnMore: '자세히 보기',
                pageTitle: 'DeCloud - Web3.0 분산형 컴퓨팅 클라우드 플랫폼',
                subtitle: 'Web3.0 분산형 컴퓨팅 클라우드 플랫폼',
                intro: 'DeCloud는 PowerVerse Chain, PowerVerse Infra 및 PowerVerse Market을 통합하여 개방적이고 효율적이며 안전하고 확장 가능한 분산형 컴퓨팅 클라우드 플랫폼을 구축합니다. 최적의 리소스 할당을 통해 엔터프라이즈급 대규모 컴퓨팅부터 개인 개발자 프로젝트까지 다양한 컴퓨팅 요구를 지원하며 컴퓨팅 파워 할당 및 사용 패턴을 재구성합니다.',
                section1: {
                    title: 'I. 더 스마트한 DePIN 인프라',
                    table: {
                        tech: '기술',
                        capability: '핵심 역량',
                        value: '응용 가치'
                    },
                    ipfs: {
                        tech: 'IPFS 분산형 스토리지',
                        capability: 'AI 모델 훈련 데이터 및 DApp 데이터가 여러 노드에 분산 저장됩니다.',
                        value: '데이터 보안과 신뢰성을 향상시키고 단일 장애점과 유출을 방지하며 비용을 절감하고 효율성을 높입니다.'
                    },
                    edge: {
                        tech: '위치 인식 엣지 컴퓨팅',
                        capability: '데이터 소스 또는 사용자에 가까운 엣지 노드에 컴퓨팅 작업을 할당합니다.',
                        value: '지연 시간을 줄이고 실시간 응답을 향상시키며 스마트 교통, 산업 자동화 등의 시나리오에 적용하여 네트워크 성능을 최적화합니다.'
                    },
                    routing: {
                        tech: '멀티 그래프 토폴로지 라우팅 네트워크',
                        capability: '작업 특성 및 리소스 가용성에 따라 최적의 컴퓨팅 경로 및 리소스 할당을 동적으로 선택합니다.',
                        value: '효율적인 작업 실행과 합리적인 리소스 활용을 실현하여 플랫폼의 컴퓨팅 성능과 안정성을 향상시킵니다.'
                    }
                },
                section2: {
                    title: 'II. 더 안전하고 효율적인 AI 지원',
                    table: {
                        solution: '기술 솔루션',
                        coreTech: '핵심 기술',
                        value: '응용 시나리오 및 가치'
                    },
                    privacy: {
                        solution: '프라이버시 컴퓨팅',
                        coreTech: '동형 암호화와 연합 학습을 결합하여 추론 훈련과 모델 데이터 분리를 실현합니다.',
                        value: '데이터 프라이버시를 보장하고 의료, 금융 등 민감도가 높은 분야에서 안전한 AI 훈련 및 최적화를 지원합니다.'
                    },
                    gpu: {
                        solution: 'GPU 병렬 훈련',
                        coreTech: '강력한 GPU 병렬 컴퓨팅 지원을 제공하며 최적화된 스케줄링 및 리소스 관리 메커니즘과 결합합니다.',
                        value: '대규모 AI 모델 훈련을 가속화하고 훈련 시간을 단축하며 AI 연구 개발 및 산업 지능화 전환을 지원합니다.'
                    }
                },
                section3: {
                    title: 'III. 더 풍부한 PowerVerse Market 요소',
                    marketType: '시장 부문',
                    market1: {
                        title: 'AI 데이터셋 및 모델 마켓',
                        content: {
                            label: '주요 내용: ',
                            desc: '고품질 데이터셋과 사전 훈련된 모델을 제공하여 사용자 거래 및 공유를 지원합니다.'
                        },
                        value: {
                            label: '생태계 가치: ',
                            desc: 'AI 리소스 순환과 재사용을 촉진하고 개발 장벽을 낮추며 AI 혁신과 응용 보급을 가속화합니다.'
                        }
                    },
                    market2: {
                        title: 'Agent 및 DApp 마켓',
                        content: {
                            label: '주요 내용: ',
                            desc: '개발자가 지능형 Agent 및 DApp을 게시하고 거래할 수 있습니다.'
                        },
                        value: {
                            label: '생태계 가치: ',
                            desc: '개발자에게 상업적 수익화 채널을 제공하고 플랫폼 애플리케이션 생태계를 풍부하게 하며 사용자 맞춤형 요구를 충족합니다.'
                        }
                    }
                },
                section4: {
                    title: 'IV. 더 포괄적인 생태계 구축',
                    sdk: {
                        title: 'SDK 지원',
                        function: {
                            label: '기능 설명: ',
                            desc: '다중 언어, 다중 프레임워크 SDK를 제공하여 DeCloud 컴퓨팅 리소스 통합을 용이하게 합니다.'
                        },
                        value: {
                            label: '개발자 및 사용자 가치: ',
                            desc: '개발 난이도를 낮추고 개발 효율성을 높이며 더 많은 개발자를 생태계에 유치합니다.'
                        }
                    },
                    cdn: {
                        title: '분산형 CDN',
                        function: {
                            label: '기능 설명: ',
                            desc: '글로벌 노드를 통해 DApp 콘텐츠를 배포합니다.'
                        },
                        value: {
                            label: '개발자 및 사용자 가치: ',
                            desc: 'DApp 액세스 속도, 안정성 및 공격 저항성을 향상시켜 사용자 경험을 최적화합니다.'
                        }
                    },
                    dataSpace: {
                        title: '데이터 공간',
                        function: {
                            label: '기능 설명: ',
                            desc: '안전하고 효율적인 분산형 데이터 관리 및 공유 솔루션을 제공합니다.'
                        },
                        value: {
                            label: '개발자 및 사용자 가치: ',
                            desc: '기업과 개인의 데이터 자산화 요구를 충족하고 데이터 가치 흐름을 지원합니다.'
                        }
                    },
                    metaverse: {
                        title: '메타버스 및 최첨단 지원',
                        function: {
                            label: '기능 설명: ',
                            desc: '가상 장면 렌더링 및 실시간 상호작용을 위한 강력한 컴퓨팅 기반을 제공합니다.'
                        },
                        value: {
                            label: '개발자 및 사용자 가치: ',
                            desc: '몰입형 메타버스 경험을 가능하게 하고 디지털 생태계의 경계를 확장합니다.'
                        }
                    }
                },
                features: {
                    title: '핵심 특성',
                    item1: '분산형 스토리지 시스템',
                    item2: '데이터 암호화 보호',
                    item3: '엣지 컴퓨팅 지원',
                    item4: '풍부한 API 인터페이스'
                }
            },
            wallet: {
                name: 'PowerVerse Wallet',
                description: '안전하고 편리한 디지털 자산 지갑으로 멀티 체인 자산 관리, DeFi 상호작용 및 NFT 컬렉션을 지원하여 사용자에게 원스톱 Web3 자산 관리 경험을 제공',
                learnMore: '자세히 보기',
                pageTitle: 'Wallet - 디지털 자산 지갑',
                subtitle: '디지털 자산 지갑',
                intro: 'PowerVerse Wallet은 PowerVerse Chain 및 주요 퍼블릭 체인을 지원하는 안전하고 사용하기 쉬운 멀티 체인 디지털 자산 지갑으로, 자산 관리, DeFi 상호작용, NFT 컬렉션 등 포괄적인 서비스를 사용자에게 제공합니다.',
                section1: {
                    title: 'I. 핵심 기능',
                    feature1: {
                        title: '1. 멀티 체인 자산 관리',
                        desc: 'PowerVerse Chain, Ethereum, BSC 등 여러 퍼블릭 체인을 지원하며 PEC, ETH, BNB 등 주요 토큰을 포함한 다양한 디지털 자산을 통합 관리.'
                    },
                    feature2: {
                        title: '2. 안전한 저장',
                        desc: '하드웨어 암호화 및 다중 서명 기술을 사용하며, 개인 키를 로컬에서 암호화 저장하고 니모닉 백업을 지원하여 자산 안전을 보장.'
                    },
                    feature3: {
                        title: '3. DeFi 상호작용',
                        desc: '내장 DApp 브라우저, 원클릭 DeFi 프로토콜 연결 지원, 유동성 마이닝, 스테이킹, 대출 등의 작업을 편리하게 수행.'
                    },
                    feature4: {
                        title: '4. NFT 관리',
                        desc: 'NFT 보기, 전송, 표시를 지원하여 디지털 컬렉션을 쉽게 관리.'
                    }
                },
                section2: {
                    title: 'II. 글로벌 결제 기능',
                    globalPayment: {
                        title: '글로벌 결제 능력',
                        desc: 'PowerVerse Wallet은 전 세계 디지털 자산 결제를 지원하며 어디에 있든 빠르고 안전하게 크로스보더 결제를 완료할 수 있습니다. QR 코드 결제, NFC 근거리 결제, 온라인 결제 등 다양한 결제 방법을 지원하여 디지털 자산을 진정으로 글로벌하게 사용할 수 있는 결제 도구로 만듭니다.',
                        item1: '전 세계 200개 이상의 국가 및 지역의 결제 네트워크 지원',
                        item2: '실시간 환율 변환, 최적 결제 경로 자동 계산',
                        item3: '낮은 수수료, 기존 크로스보더 결제 대비 80% 이상 비용 절감',
                        item4: '초 단위 입금, 은행 영업일을 기다릴 필요 없음'
                    }
                },
                section3: {
                    title: 'III. DEX 거래 기능',
                    dexTrading: {
                        title: '분산형 거래소 통합',
                        desc: 'PowerVerse Wallet은 분산형 거래소(DEX) 기능을 내장하여 지갑을 떠나지 않고도 토큰 거래를 완료할 수 있습니다. 다양한 거래 쌍을 지원하며 최적 가격 라우팅을 제공하여 사용자가 최상의 거래 경험을 얻을 수 있도록 보장합니다.',
                        item1: '여러 주요 DEX를 통합하여 최적 가격 자동 검색',
                        item2: '지정가 주문, 시장가 주문 등 다양한 주문 유형 지원',
                        item3: '실시간 가격 모니터링 및 거래 알림',
                        item4: '거래 내역 기록 및 수익 분석'
                    }
                },
                section4: {
                    title: 'IV. 클라우드 게이밍 전체 시나리오 통합',
                    cloudGaming: {
                        title: '원활한 게임 경험',
                        desc: 'PowerVerse Wallet은 클라우드 게이밍 생태계에 깊이 통합되어 게임 내 자산, 아이템, NFT의 통합 관리를 실현합니다. 플레이어는 지갑을 사용하여 직접 게임에 로그인하고, 토큰으로 게임 아이템을 구매하며, 게임 내 NFT를 거래할 수 있어 Web3 게임의 전체 시나리오 통합을 진정으로 실현합니다.',
                        item1: '원클릭 클라우드 게이밍 플랫폼 로그인, 반복 등록 불필요',
                        item2: '게임 내 자산 실시간 동기화, 게임 간 자산 전송 지원',
                        item3: '게임 아이템 NFT화, 2차 시장에서 자유롭게 거래 가능',
                        item4: '게임 수익이 자동으로 지갑에 정산되며 출금 및 재투자 지원'
                    }
                },
                features: {
                    title: '핵심 특성',
                    item1: '멀티 체인 지원',
                    item1Desc: 'PowerVerse Chain, Ethereum, BSC 등 여러 주요 퍼블릭 체인 지원',
                    item2: '안전하고 신뢰할 수 있음',
                    item2Desc: '하드웨어 암호화, 다중 서명, 니모닉 백업으로 자산을 전면적으로 보호',
                    item3: 'DeFi 통합',
                    item3Desc: '내장 DApp 브라우저로 DeFi 생태계에 원활하게 연결',
                    item4: 'NFT 관리',
                    item4Desc: '완전한 NFT 보기, 전송, 표시 기능'
                }
            },
            scan: {
                name: 'PowerVerse Scan',
                description: '블록체인 탐색기로 온체인 데이터 쿼리, 거래 추적, 주소 분석 등의 기능을 제공하여 온체인 활동을 투명하고 추적 가능하게 만듦',
                learnMore: '자세히 보기',
                pageTitle: 'Scan - 블록체인 탐색기',
                subtitle: '블록체인 탐색기',
                intro: 'PowerVerse Scan은 PowerVerse Chain의 공식 블록체인 탐색기로, 포괄적인 온체인 데이터 쿼리 및 분석 서비스를 제공하여 사용자가 쉽게 거래를 추적하고, 블록을 보며, 주소를 분석할 수 있도록 하여 온체인 활동의 투명성을 실현합니다.',
                section1: {
                    title: 'I. 핵심 기능',
                    feature1: {
                        title: '1. 블록 쿼리',
                        desc: '최신 블록 정보를 실시간으로 보며 블록 높이, 타임스탬프, 거래 수, Gas 사용 등 상세 데이터를 포함.'
                    },
                    feature2: {
                        title: '2. 거래 추적',
                        desc: '거래 해시를 통해 거래 세부 정보를 빠르게 쿼리하며 발신자, 수신자, 금액, Gas 수수료, 거래 상태 등을 포함.'
                    },
                    feature3: {
                        title: '3. 주소 분석',
                        desc: '임의의 주소의 잔액, 거래 내역, 토큰 보유 상황, 컨트랙트 상호작용 기록 등을 보며 주소 활동을 포괄적으로 이해.'
                    },
                    feature4: {
                        title: '4. 스마트 컨트랙트 쿼리',
                        desc: '스마트 컨트랙트의 코드, ABI, 호출 기록, 이벤트 로그 등을 보며 개발자 디버깅 및 사용자 검증에 편리.'
                    }
                },
                features: {
                    title: '핵심 특성',
                    item1: '실시간 데이터',
                    item1Desc: '온체인 데이터를 실시간으로 동기화하여 정보의 정확성과 적시성 보장',
                    item2: '거래 추적',
                    item2Desc: '완전한 거래 내역 기록, 다차원 쿼리 및 필터링 지원',
                    item3: '주소 분석',
                    item3Desc: '주소 활동을 심층 분석하고 시각화된 데이터 표시 제공',
                    item4: '컨트랙트 쿼리',
                    item4Desc: '완전한 스마트 컨트랙트 정보, 코드 검증 및 호출 분석 지원'
                }
            },
            computingPort: {
                name: '컴퓨팅 포트',
                description: 'PowerVerse Chain에 기반한 분산형 지능형 컴퓨팅 플랫폼으로 전 세계 유휴 GPU/CPU 리소스를 집계하여 컴퓨팅 자산의 토큰화, 표준화 및 신뢰할 수 있는 거래를 실현',
                learnMore: '자세히 보기',
                pageTitle: '컴퓨팅 포트 - 분산형 지능형 컴퓨팅 플랫폼',
                subtitle: '분산형 지능형 컴퓨팅 플랫폼',
                intro: '컴퓨팅 포트(XAI Center)는 PowerVerse Chain에 구축된 분산형 지능형 컴퓨팅 플랫폼으로, 전 세계 유휴 GPU/CPU 리소스를 집계하고 블록체인 기술을 통해 컴퓨팅 자산의 토큰화, 표준화 및 신뢰할 수 있는 거래를 실현하는 데 전념하고 있습니다.',
                section1: {
                    title: 'I. 핵심 기능',
                    feature1: {
                        title: '1. 컴퓨팅 파워 분할 및 풀링',
                        desc: '컴퓨팅 세분성 수준에서 플랫폼의 다양한 기능은 격리 및 보안을 효과적으로 보장하여 다양한 세분성의 컴퓨팅 파워 리소스 요구를 쉽게 충족합니다.',
                        item1: '그래픽 카드 다중 인스턴스 실행: 단일 GPU의 활용 효율성 향상',
                        item2: '그래픽 카드 패스스루 기술: 고성능 컴퓨팅 작업의 원활한 연결 보장',
                        item3: '다중 노드 병렬 컴퓨팅: 컴퓨팅 파워를 전례 없는 수준으로 확장하여 대규모 컴퓨팅 요구 충족',
                        detail: '컨테이너 기술을 기반으로 PowerVerse Infra 드라이버 레벨의 인터셉션 기술과 결합하여 다중 브랜드 GPU 단일 카드의 유연한 할당 및 메모리 분할을 실현합니다. 사용자는 실제 요구에 따라 컴퓨팅 사양 및 분할 사양을 사용자 정의하고 공유 컴퓨팅 파워 및 메모리 슬라이스 관리를 쉽게 실현할 수 있습니다. 사용자가 공개 컴퓨팅 풀 또는 전용 컴퓨팅 풀을 쉽게 구성할 수 있도록 지원하며, 팀 내부 리소스 공유 또는 특정 프로젝트의 독립적인 컴퓨팅 파워 요구를 보장하는 경우 모두 유연하게 대응할 수 있으며 일괄 스케줄링, 우선순위 스케줄링 및 선점형 스케줄링 등 다양한 스케줄링 방법을 지원합니다.'
                    },
                    feature2: {
                        title: '2. 데이터 플랫폼',
                        desc: '통합되고 다양한 데이터 저장, 데이터 관리, 탄력적 스케일링 저장 서비스를 제공하며 컨테이너 환경을 통해 저장 디렉터리를 자동으로 마운트합니다.',
                        item1: '원활한 통합, 사용자에게 공용 저장 서비스를 자동으로 제공하고 공유 데이터 제어, 테넌트 레벨 격리, 병렬 읽기-쓰기 제어, SFTP 지원 등의 기능을 제공',
                        item2: '직관적이고 사용하기 쉬운 시각화 페이지를 제공하여 사용자가 온라인으로 신청 및 조회하고 페이지에서 업로드 및 다운로드하여 리소스를 쉽게 관리할 수 있습니다',
                        item3: '온디맨드 확장 및 축소를 지원하여 사용자가 비즈니스 요구에 따라 저장 용량을 유연하게 조정할 수 있으며 저장 공간 부족 또는 리소스 낭비에 대해 걱정할 필요가 없습니다'
                    },
                    feature3: {
                        title: '3. 모델 훈련 및 추론 전체 생명주기',
                        desc: '모델 개발, 모델 훈련, 모델 배포, 모델 추론부터 모델 최적화까지 일련의 작업에 대한 전체 생명주기 지원을 제공합니다.',
                        devTitle: '개발 환경 서비스',
                        dev1: '온라인에서 초 단위로 개발 환경을 생성할 수 있으며 CPU 코어, 메모리, GPU 모델, 수량, 시스템 디스크 등에 따라 개발 머신을 생성할 수 있습니다',
                        dev2: '카드 없는 부팅, 종료, 온라인 개발 Jupyter, Python, VScode, 이미지 저장을 지원',
                        dev3: '예약된 종료, 예약된 릴리스 등 리소스 회수 전략을 지원',
                        trainTitle: '분산 훈련 서비스',
                        trainDesc: '사용자는 훈련 작업, 미세 조정 서비스를 시작하여 모델을 조정하고 더 세밀한 비즈니스 시나리오의 훈련을 늘릴 수 있으며 다중 모달 훈련, 사전 훈련 DLC, SFT 미세 조정 등을 지원합니다',
                        evalTitle: '모델 효과 평가',
                        evalDesc: '테스트 데이터 세트를 기반으로 대규모 모델의 성능, 효율성 및 적용 가능성을 테스트하고 성능 지표, 일반화 능력, 추론 속도 및 대기 시간, 리소스 소비, 해석 가능성, 확장성, 모델 크기, 데이터 종속성 등의 측면에서 평가할 수 있습니다.',
                        inferTitle: '온라인 추론',
                        infer1: '원활한 배포 및 사용자 정의 선택: 배포 프로세스를 간소화하여 진정한 "원클릭 배포" 경험을 실현하고 모델 광장에서 직접 모델을 배포합니다. 동시에 개인 모델 업로드도 지원하며 공개 이미지, 사용자 정의 추론 이미지 또는 지정된 이미지 주소를 통해 유연하게 배포할 수 있습니다',
                        infer2: '전체 생명주기 관리 및 탄력적 리소스 스케줄링: 온라인 추론 서비스 인스턴스의 전체 생명주기 관리를 제공하며 인스턴스의 즉각적인 확장/축소 작업을 포함하여 서비스가 비즈니스 요구에 따라 원활하게 확장되도록 보장합니다. 추론 인스턴스의 실행 상태를 실시간으로 모니터링하고 로그 검색 및 쿼리 기능을 제공합니다',
                        optTitle: '모델 최적화',
                        optDesc: '전문적인 모델 조정 서비스를 제공하고 모델 평가 메커니즘을 통해 사용자가 모델 효과를 과학적으로 비교할 수 있도록 지원하여 모델 선택과 비즈니스 요구의 정확한 일치를 보장합니다. 동시에 추론 가속 기술을 지속적으로 탐구하여 모델 정확도를 유지하면서 추론 속도를 대폭 향상시키는 데 전념하고 있습니다.'
                    },
                    feature4: {
                        title: '4. 지능형 모니터링 및 자가 치유',
                        desc: 'PowerVerse Infra의 모니터링 관리 서비스를 기반으로 시각화된 모니터링 데이터, 구성 가능한 경고 서비스, 자동화된 장애 처리를 제공하여 운영 유지보수를 간소화하고 서비스 운영 유지보수의 지능화를 실현.',
                        monitorTitle: '지능형 모니터링 및 다차원 리소스 시각화',
                        monitorDesc: '통합 운영 관리 플랫폼을 통해 컴퓨팅 리소스, 스토리지 리소스, 네트워크 리소스 등 주요 운영 요소의 표준화 및 시각화 관리를 실현. 모니터링 범위가 광범위하며 컴퓨팅 노드, GPU 카드, 컨테이너 세 가지 차원을 기반으로 한 다중 지표 모니터링을 지원하고 CPU 사용률, 메모리 사용률, GPU 사용률, GPU 메모리 사용률, 네트워크 효율 모니터링을 지원하며 컴퓨팅 프로세스 중 NVLink 모니터링, TensorCore 모니터링을 지원.',
                        alertTitle: '경고 구성 및 알림',
                        alertDesc: '사용자가 비즈니스 요구에 따라 경고 규칙 그룹을 사용자 정의할 수 있도록 지원하며 리소스 임계값 경고, 성능 이상 경고 등을 포함합니다. 경고 조건이 트리거되면 시스템은 즉시 경고 기록을 생성하고 webhook, 이메일 등 다양한 채널을 통해 지정된 수신자에게 경고 알림을 전송합니다.',
                        faultTitle: '장애 감지 및 수리',
                        faultDesc: '클러스터 내의 잠재적 장애를 자동으로 감지합니다(하드웨어 장애, 소프트웨어 이상, 리소스 병목 현상 등). 장애가 감지되면 시스템은 신속하게 자가 치유 메커니즘을 시작합니다:',
                        fault1: '장애 격리: 영향을 받은 노드 또는 GPU 카드를 "오염"으로 표시하고 이러한 리소스로 새 작업이 스케줄링되는 것을 자동으로 차단하여 장애 확산 방지',
                        fault2: '작업 마이그레이션 및 재시도: 해당 노드에서 실행 중인 작업을 다른 정상 노드로 자동 마이그레이션하고 실패한 작업을 다시 실행하여 비즈니스 연속성 보장',
                        fault3: '노드 재시작 및 감지: 재시작으로 복구 가능한 일시적 장애에 대해 노드를 자동으로 재시작하고 서비스 상태를 확인하며 확인이 통과되면 노드가 자동으로 컴퓨팅 대기열로 복귀',
                        fault4: '오프라인 유지보수 및 복구: 자동으로 수리할 수 없는 장애에 대해 시스템은 노드/GPU 카드를 자동으로 오프라인으로 전환하고 관련 운영 담당자에게 알리며 수리 및 확인 후 리소스를 컴퓨팅 대기열로 자동 복원'
                    },
                    feature5: {
                        title: '5. 엣지 컴퓨팅',
                        desc: '엣지 컴퓨팅 능력을 제공하고 확장성이 뛰어나고 개방적이며 지능적인 클라우드-엣지 협업 인프라 플랫폼을 구축하여 엣지 컴퓨팅 시나리오의 여러 과제를 정확하게 해결하고 엣지 컴퓨팅과 AI 시나리오 애플리케이션의 긴밀한 통합을 실현합니다.',
                        item1: '사용자 셀프서비스 최적화: 사용자 셀프서비스 기능을 제공하여 계정 빠른 생성부터 리소스 신청, 원클릭 개통, 편리한 사용 및 자동 릴리스까지 전체 프로세스 최적화를 포함하며, 사용자는 필요에 따라 작업 시간 기반 공유 리소스 요금 또는 구성 기반 전용 리소스 요금을 선택할 수 있습니다',
                        item2: '시스템 관리 및 멀티 테넌트 지원: 멀티 테넌트 리소스 및 비즈니스 격리를 지원하여 각 테넌트의 비즈니스가 서로 간섭하지 않도록 보장하고 서브 계정 및 세분화된 역할 권한 관리를 지원합니다',
                        item3: '가격 책정 및 청구: 직관적이고 이해하기 쉬운 시각화 페이지를 통해 열거형, 선형, 계층형 등 다양한 가격 책정 방법을 포함하는 포괄적이고 유연한 가격 전략을 구축하여 다양한 사용자의 비용 선호도와 실제 사용 시나리오를 충족합니다',
                        item4: '고객 운영: 전체 라이프사이클 고객 관리를 실현하고 등록, 인증, 충전, 소비 등의 단계를 포괄하는 고객 데이터를 종합적으로 수집하고 분석하여 정밀 마케팅과 개인화된 서비스를 위한 견고한 기반을 마련합니다'
                    }
                },
                features: {
                    title: '핵심 특성',
                    item1: '컴퓨팅 풀링',
                    item1Desc: '유연한 컴퓨팅 파워 분할 및 풀 관리, 공개 및 전용 컴퓨팅 풀 지원',
                    item2: '모델 훈련 및 추론',
                    item2Desc: '완전한 AI 모델 개발, 훈련, 배포, 추론 전체 생명주기 지원',
                    item3: '지능형 모니터링',
                    item3Desc: '자동화된 장애 감지 및 자가 치유 메커니즘으로 안정적인 서비스 운영 보장',
                    item4: '데이터 플랫폼',
                    item4Desc: '통합된 데이터 저장 및 관리 서비스, 탄력적 스케일링 지원'
                }
            },
            xaiToken: {
                name: 'RWA 토큰 XAI',
                description: 'XRWA AI 생태계의 핵심 기능 토큰 및 가치 준비 토큰으로 수익 배분, 서비스 결제, 생태계 거버넌스의 세 가지 주요 기능을 담당하며 실체 컴퓨팅 파워와 온체인 금융을 연결',
                learnMore: '자세히 보기',
                pageTitle: 'RWA 토큰 XAI - 생태계 핵심 토큰',
                subtitle: '생태계 핵심 토큰',
                intro: 'XAI는 XRWA AI 생태계 내의 핵심 기능 토큰 및 가치 준비 토큰으로, ERC-3643 표준을 기반으로 개발되었으며 생태계 가치 순환 매체, 수익 배분 도구, 서비스 결제 증명서의 세 가지 핵심 기능을 담당합니다.',
                section1: {
                    title: 'I. 핵심 기능',
                    feature1: {
                        title: '1. 생태계 수익 배분의 유일한 결제 도구',
                        desc: 'GNFT 및 GUnit 보유자의 생태계 수익은 XAI 형태로 배분되며, 이 설계는 자산과 XAI 가치를 깊이 결합시켜 토큰 보유자가 컴퓨팅 자산에서 생성되는 수익 배당을 받을 수 있도록 보장.',
                        gnftDesc: 'GNFT는 XRWA 생태계에서 물리적 GPU 자산의 온체인 유일 소유권 증명이며, ERC-721 표준을 기반으로 개발되어 분할 불가능, 대체 불가능, 고유 식별의 기술적 속성을 갖추고 있습니다. 각 GNFT는 하드웨어 검증 및 성능 테스트를 거친 실제 GPU 장치에 대응하여 물리적 자산과 온체인 자산의 1:1 앵커링을 실현합니다.',
                        gunitDesc: 'GUnit은 GNFT를 분할하여 생성된 토큰이며, ERC-3643 표준을 따르며 분할 가능, 대체 가능, 표준화된 기술적 속성을 갖추고 동시에 KYC/AML 관련 정보도 통합합니다. 각 GUnit은 GNFT의 기반이 되는 GPU 자산의 단위 컴퓨팅 파워 지분에 대응합니다.',
                        xaiDesc: 'XAI는 수익 배분의 유일한 지불 도구로서 GNFT 및 GUnit 보유자의 수익을 XAI 가치와 깊이 결합하여 안정적인 가치 순환을 형성합니다.'
                    },
                    feature2: {
                        title: '2. AI 생태계 서비스의 강제 결제 증명서',
                        desc: 'XRWA의 AI 애플리케이션 생태계에서 XAI는 유일한 서비스 결제 도구로 모든 컴퓨팅 파워 및 AI 관련 서비스 시나리오를 포괄하며 XAI의 강성 수요를 구축하고 토큰 가치 상승을 추진.',
                        intro: 'XAI는 XRWA 생태계의 모든 AI 시나리오 상호작용을 포괄하며 자산 측면과 애플리케이션 측면을 연결하는 가치의 다리입니다. XAI Center 플랫폼에서 모든 컴퓨팅 서비스, 모델 훈련, 추론 서비스, 데이터 스토리지 등 서비스의 지불에 XAI 토큰을 사용하여 강성 지불 수요를 형성합니다.',
                        usage: '이 「필수 지불」 메커니즘은 XAI의 강성 수요를 구축합니다. XAI의 사용 시나리오와 수요는 동기적으로 성장하여 토큰 가치 상승을 추진합니다. 생태계가 확장됨에 따라 XAI의 지불 시나리오는 다음을 포함하여 계속 확장됩니다:',
                        service1: '컴퓨팅 파워 임대 및 구매 서비스',
                        service2: 'AI 모델 훈련 및 추론 서비스',
                        service3: '데이터 스토리지 및 관리 서비스',
                        service4: '에이전트 애플리케이션 개발 및 배포 서비스'
                    },
                    feature3: {
                        title: '3. 생태계 거버넌스 및 노드 인센티브의 핵심 토큰',
                        desc: 'XAI 보유자는 생태계 거버넌스 권한을 가지며 온체인 투표를 통해 XRWA 생태계의 주요 결정에 참여할 수 있으며, 핵심 역할은 노드 자격을 얻기 위해 XAI를 스테이킹해야 하며 스테이킹 페널티 메커니즘을 통해 생태계 노드의 컴플라이언스와 신뢰성을 보장.',
                        governanceTitle: '거버넌스 참여',
                        governanceIntro: 'XAI 보유자는 생태계 거버넌스 권한을 가지며 온체인 투표를 통해 XRWA 생태계의 주요 결정에 참여할 수 있습니다. 다음을 포함합니다:',
                        gov1: '프로토콜 업그레이드 및 기능 개선 제안',
                        gov2: '자산 배분 및 운영 전략 조정',
                        gov3: '수익 배분 메커니즘 최적화',
                        gov4: '생태계 파트너 선택',
                        stakingTitle: '노드 스테이킹',
                        stakingIntro: 'XRWA 생태계의 핵심 역할은 노드 자격을 얻기 위해 일정량의 XAI를 스테이킹해야 하며, "스테이킹 페널티" 메커니즘을 통해 생태계 노드의 컴플라이언스와 신뢰성을 보장합니다. 스테이킹 메커니즘에는 다음이 포함됩니다:',
                        stake1: '최소 스테이킹 요구사항: 검증자가 되려면 최소 수량의 XAI를 스테이킹해야 합니다',
                        stake2: '스테이킹 보상: 검증자는 스테이킹 양과 온라인 시간에 따라 블록 보상 및 거래 수수료를 받습니다',
                        stake3: '페널티 메커니즘: 악의적인 행위(이중 서명, 장기간 오프라인 등)로 인해 스테이킹된 토큰의 일부 또는 전부가 몰수됩니다'
                    }
                },
                section2: {
                    title: '2. 경제 모델',
                    issuance: {
                        title: '발행 메커니즘',
                        intro: 'XAI 발행은 "제네시스 발행 + 생태계 마이닝"을 결합한 방식을 채택합니다:',
                        genesis: {
                            title: '제네시스 발행',
                            desc: '제네시스 발행 부분은 프로젝트 시작, 팀 인센티브, 기관 투자에 사용되어 프로젝트 초기에 충분한 자금과 리소스 지원을 보장합니다.'
                        },
                        mining: {
                            title: '생태계 마이닝',
                            intro: '생태계 마이닝 부분은 다음 방법을 통해 점진적으로 릴리스됩니다:',
                            item1: 'GNFT/GUnit 보유 마이닝: 컴퓨팅 파워 자산 토큰을 보유한 사용자는 XAI 마이닝 보상을 받을 수 있습니다',
                            item2: 'AI 서비스 사용 마이닝: 컴퓨팅 포트 플랫폼 서비스를 사용하는 사용자는 XAI 보상을 받을 수 있습니다',
                            item3: '노드 검증 마이닝: 네트워크 검증에 참여하는 노드는 XAI 보상을 받을 수 있습니다',
                            summary: '이 메커니즘은 토큰 유통량이 생태계 발전 진행과 일치하도록 보장하여 과도한 인플레이션을 피하고 토큰 가치의 안정성을 유지합니다.'
                        }
                    },
                    anchoring: {
                        title: '가치 앵커링 시스템',
                        intro: 'GNFT, GUnit, XAI는 XRWA 생태계에서 독립적으로 존재하는 것이 아니라 "자산 확권-분할 유통-가치 상호작용"의 협동 시스템을 형성합니다:',
                        foundation: {
                            title: '기초 계층: GNFT 자산 앵커링',
                            desc: 'GNFT는 물리적 GPU 자산을 온체인 확권 자산으로 전환하여 생태계에 "가치 기반"을 제공합니다. GNFT 자산 앵커링이 없으면 GUnit 분할은 기본 자산 지원을 잃고 XAI 수익 배분도 가치 소스가 부족합니다.'
                        },
                        circulation: {
                            title: '유통 계층: GUnit 소액화 부여',
                            desc: 'GUnit은 GNFT를 분할하여 고가치 자산을 소액 거래 가능한 토큰으로 전환하여 생태계 자산의 유동성과 포용성을 향상시키고 더 많은 사용자의 참여를 유도하여 생태계에 증분 자금과 컴퓨팅 파워 수요를 가져와 XAI 결제 시나리오를 확대합니다.'
                        },
                        value: {
                            title: '가치 계층: XAI 생태계 연결',
                            desc: 'XAI는 수익 배분 도구로서 자산 보유자와 생태계 기여자를 연결하고 수익 배분을 통해 자산 보유자가 더 많은 컴퓨팅 파워를 제공하도록 인센티브를 제공하며 결제 수요를 통해 AI 사용자가 생태계 서비스를 사용하도록 인센티브를 제공하여 역으로 GNFT의 온체인 규모와 GUnit의 유통 활동을 촉진합니다.'
                        }
                    }
                },
                features: {
                    title: '핵심 특성',
                    item1: '수익 배분',
                    item1Desc: 'GNFT 및 GUnit 보유자의 생태계 수익은 XAI 형태로 배분',
                    item2: '서비스 결제',
                    item2Desc: 'AI 생태계 서비스의 필수 결제 자격 증명, 모든 컴퓨팅 및 AI 관련 서비스 시나리오 포괄',
                    item3: '생태계 거버넌스',
                    item3Desc: '보유자는 거버넌스 권한을 가지며 온체인 투표를 통해 주요 결정에 참여 가능',
                    item4: '가치 앵커',
                    item4Desc: '물리적 컴퓨팅 자산과 깊이 결합하여 토큰 가치의 안정성 보장'
                }
            }
        },
        scenarios: {
            title: '응용 시나리오',
            description: 'PowerVerse Chain은 다양한 응용 시나리오를 가능하게 합니다',
            ai: {
                title: 'AI 모델 훈련',
                description: '대규모 AI 모델 훈련 및 추론을 지원하고 컴퓨팅 비용을 절감하는 분산 GPU 리소스 풀',
                stats: {
                    costReduction: '비용 절감',
                    gpuNodes: 'GPU 노드',
                    availability: '24시간 서비스'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '분산 GPU 리소스 풀: 전 세계 유휴 GPU 리소스를 통합하여 강력한 분산 컴퓨팅 클러스터 형성',
                    item2: '지능형 작업 스케줄링: AI 알고리즘이 최적의 컴퓨팅 노드를 자동으로 매칭하여 리소스 활용률 극대화',
                    item3: '모델 훈련 가속화: PyTorch, TensorFlow 등 주요 프레임워크 지원, 훈련 속도 3-5배 향상',
                    item4: '추론 서비스 최적화: 낮은 지연 시간 추론 서비스로 실시간 AI 애플리케이션 배포 지원',
                    item5: '비용 투명성: 사용량 기반 결제, 숨겨진 비용 없음, 기존 클라우드 서비스 대비 60% 이상 비용 절감'
                },
                cases: {
                    title: '응용 사례',
                    item1: '대규모 언어 모델 훈련: GPT, BERT 등 대규모 언어 모델의 분산 훈련 지원',
                    item2: '컴퓨터 비전: 이미지 인식, 객체 감지, 의미 분할 등 CV 작업 가속화',
                    item3: '자연어 처리: 텍스트 분류, 감정 분석, 기계 번역 등 NLP 애플리케이션',
                    item4: '추천 시스템: 개인화된 추천 알고리즘 훈련 및 실시간 추론'
                },
                features: {
                    gpuCluster: {
                        title: 'GPU 클러스터',
                        desc: '전 세계 GPU 리소스를 통합하여 강력한 컴퓨팅 능력 제공'
                    },
                    costOptimization: {
                        title: '비용 최적화',
                        desc: '기존 클라우드 서비스 대비 비용 60% 이상 절감'
                    },
                    elasticScaling: {
                        title: '탄력적 확장',
                        desc: '수요에 따라 컴퓨팅 리소스를 동적으로 조정'
                    }
                }
            },
            science: {
                title: '과학 컴퓨팅',
                description: '연구 기관에 강력한 컴퓨팅 능력을 제공하는 고성능 컴퓨팅 클러스터',
                stats: {
                    researchInstitutes: '연구 기관',
                    dataProcessing: '데이터 처리',
                    dataProcessingValue: 'PB급',
                    availability: '가용성'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '고성능 컴퓨팅 클러스터: 슈퍼컴퓨터 수준의 컴퓨팅 능력을 제공하여 대규모 병렬 컴퓨팅 지원',
                    item2: '다학제 지원: 물리학, 화학, 생물학, 천문학, 기상학 등 여러 과학 분야 포괄',
                    item3: '데이터 보안 보장: 엔드투엔드 암호화로 연구 데이터 보안 표준 준수',
                    item4: '협력 연구 플랫폼: 다기관 협력 연구, 데이터 공유 및 협력 지원',
                    item5: '비용 효율성: 사용량 기반 사용으로 대규모 하드웨어 투자 불필요, 연구 비용 절감'
                },
                fields: {
                    title: '응용 분야',
                    item1: '분자 동역학 시뮬레이션: 단백질 접힘, 약물 분자 설계 등 생화학 계산',
                    item2: '기후 시뮬레이션: 전 지구 기후 모델, 극단적 날씨 예측 등 기상학 연구',
                    item3: '천체 물리학: 우주 시뮬레이션, 은하 진화, 블랙홀 연구 등 천문 계산',
                    item4: '재료 과학: 신소재 설계, 성능 예측, 양자 컴퓨팅 등',
                    item5: '유전자 연구: 게놈 분석, 단백질 구조 예측, 정밀 의학'
                },
                features: {
                    hpc: {
                        title: '고성능 컴퓨팅',
                        desc: '대규모 과학 컴퓨팅 작업 지원'
                    },
                    dataSecurity: {
                        title: '데이터 보안',
                        desc: '다중 암호화 보호로 데이터 보안 보장'
                    },
                    professionalSupport: {
                        title: '전문 지원',
                        desc: '연구 기관에 전문적인 기술 지원 제공'
                    }
                }
            },
            render: {
                title: '렌더링 서비스',
                description: '3D 애니메이션, 영화 효과 및 기타 렌더링 작업을 가속화하는 분산 렌더링 네트워크',
                stats: {
                    speedup: '렌더링 가속화',
                    hdSupport: 'HD 지원',
                    costSaving: '비용 절감'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '분산 렌더링 아키텍처: 렌더링 작업을 여러 노드에 분산하여 병렬 처리, 렌더링 시간 대폭 단축',
                    item2: '다양한 형식 지원: Blender, Maya, 3ds Max, Cinema 4D 등 주요 3D 소프트웨어 지원',
                    item3: '고품질 출력: 4K, 8K 초고해상도 렌더링 지원, 영화급 제작 요구사항 충족',
                    item4: '실시간 미리보기: 실시간 렌더링 미리보기 기능 제공, 빠른 반복 및 최적화',
                    item5: '지능형 스케줄링: 최적의 렌더링 노드를 자동으로 할당하여 렌더링 효율 극대화'
                },
                scenarios: {
                    title: '응용 시나리오',
                    item1: '영화 특수 효과: 영화, TV 드라마의 CG 특수 효과 렌더링으로 제작 주기 대폭 단축',
                    item2: '애니메이션 제작: 3D 애니메이션, 게임 컷신 등 일괄 렌더링 작업',
                    item3: '건축 시각화: 건축 렌더링, 인테리어 디자인 렌더링, VR 장면 제작',
                    item4: '제품 디자인: 제품 렌더링, 광고 영상, 전자상거래 전시 이미지',
                    item5: '게임 개발: 게임 장면 렌더링, 캐릭터 모델링, 텍스처 매핑'
                },
                features: {
                    fastRendering: {
                        title: '빠른 렌더링',
                        desc: '분산 렌더링으로 렌더링 시간 대폭 단축'
                    },
                    quality: {
                        title: '품질 보장',
                        desc: '렌더링 품질과 일관성 보장'
                    },
                    costSaving: {
                        title: '비용 절감',
                        desc: '렌더링 비용을 낮추고 효율 향상'
                    }
                }
            },
            edge: {
                title: '엣지 컴퓨팅',
                description: '낮은 지연 시간과 높은 가용성의 엣지 컴퓨팅 서비스를 제공하는 엣지 노드 네트워크',
                stats: {
                    lowLatency: '초저지연',
                    edgeNodes: '엣지 노드',
                    availability: '가용성'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '글로벌 엣지 노드: 주요 도시에 엣지 컴퓨팅 노드 배치, 근거리 서비스 제공',
                    item2: '초저지연: 데이터 처리를 엣지에서 완료, 지연 시간 10ms 이하',
                    item3: '고가용성 아키텍처: 다중 노드 중복, 자동 장애 조치로 서비스 연속성 보장',
                    item4: '데이터 현지화: 민감한 데이터를 로컬에서 처리하여 데이터 규정 준수 요구사항 충족',
                    item5: '탄력적 확장: 트래픽에 따라 엣지 노드를 자동으로 확장하여 급증하는 수요 대응'
                },
                scenarios: {
                    title: '응용 시나리오',
                    item1: '실시간 게임: 클라우드 게임, AR/VR 애플리케이션으로 극도로 낮은 지연 시간의 상호작용 경험 필요',
                    item2: 'IoT 디바이스: 스마트 홈, 산업 IoT 디바이스의 실시간 데이터 처리',
                    item3: '비디오 스트리밍: 라이브 스트리밍, 실시간 트랜스코딩, CDN 가속 등 스트리밍 서비스',
                    item4: '자율 주행: 차량 엣지 컴퓨팅, 도로변 디바이스 데이터 처리, 실시간 의사결정',
                    item5: '금융 거래: 고빈도 거래, 실시간 리스크 관리, 결제 처리 등 금융 애플리케이션'
                },
                features: {
                    lowLatency: {
                        title: '낮은 지연 시간',
                        desc: '엣지 노드가 근거리에서 처리, 밀리초 수준의 지연 시간'
                    },
                    highAvailability: {
                        title: '고가용성',
                        desc: '분산 아키텍처로 서비스 고가용성 보장'
                    },
                    globalCoverage: {
                        title: '글로벌 커버리지',
                        desc: '엣지 노드가 전 세계 주요 지역을 커버'
                    }
                }
            },
            blockchain: {
                title: '블록체인 애플리케이션',
                description: 'Web3 애플리케이션을 위한 강력한 분산 컴퓨팅 인프라를 제공하고 DApp 개발 및 스마트 컨트랙트 실행을 지원합니다',
                stats: {
                    dapps: 'DApp 애플리케이션',
                    tps: 'TPS 처리',
                    transactionCost: '거래 비용'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '고성능 블록체인: 혁신적인 합의 메커니즘 채택, 고TPS 거래 처리 지원',
                    item2: '스마트 컨트랙트 플랫폼: Solidity, Rust 등 다양한 스마트 컨트랙트 언어 지원',
                    item3: '크로스체인 상호 운용성: 다른 주요 블록체인 네트워크와의 크로스체인 상호작용 지원',
                    item4: '개발자 친화적: 포괄적인 개발 도구 및 문서로 DApp 개발 장벽 낮춤',
                    item5: '낮은 Gas 수수료: 최적화된 네트워크 아키텍처로 거래 비용 대폭 절감'
                },
                scenarios: {
                    title: '응용 시나리오',
                    item1: 'DeFi 애플리케이션: 분산 거래소, 대출 프로토콜, 유동성 마이닝 등',
                    item2: 'NFT 마켓플레이스: 디지털 아트 거래, 게임 아이템, 수집품 등 NFT 애플리케이션',
                    item3: 'GameFi: 블록체인 게임, Play-to-Earn, 메타버스 애플리케이션',
                    item4: 'DAO 거버넌스: 분산 자율 조직, 커뮤니티 투표, 제안 실행',
                    item5: '공급망 추적: 제품 추적, 위조 방지 검증, 물류 추적'
                }
            },
            bigdata: {
                title: '빅데이터 분석',
                description: '대량 데이터의 저장, 분석 및 마이닝을 지원하는 분산 빅데이터 처리 플랫폼',
                stats: {
                    dataStorage: '데이터 저장',
                    dataStorageValue: 'EB급',
                    streamProcessing: '스트림 처리',
                    streamProcessingValue: '실시간',
                    processingCapacity: '처리 능력',
                    processingCapacityValue: 'PB/일'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '분산 저장소: 분산 저장소 네트워크로 데이터 보안 및 신뢰성 보장',
                    item2: '실시간 분석: 스트림 데이터 처리 지원, 실시간 비즈니스 데이터 분석',
                    item3: '머신 러닝: 통합 ML 알고리즘 라이브러리로 데이터 마이닝 및 예측 분석 지원',
                    item4: '시각화 플랫폼: 풍부한 데이터 시각화 도구 및 보고서 제공',
                    item5: '탄력적 확장: 데이터량에 따라 컴퓨팅 리소스를 자동으로 확장'
                },
                scenarios: {
                    title: '응용 시나리오',
                    item1: '비즈니스 인텔리전스: 기업 데이터 분석, 보고서 생성, 의사결정 지원',
                    item2: '사용자 프로파일링: 사용자 행동 분석, 정밀 마케팅, 개인화된 추천',
                    item3: '리스크 관리: 금융 리스크 관리, 사기 탐지, 이상 모니터링',
                    item4: 'IoT 분석: IoT 디바이스 데이터 수집, 실시간 모니터링, 예측 유지보수',
                    item5: '로그 분석: 시스템 로그 분석, 보안 감사, 성능 최적화'
                }
            },
            cloudgaming: {
                title: 'AI 기반 분산형 클라우드 게임 솔루션 제공자',
                description: 'PowerVerse Chain 분산형 클라우드 게임 플랫폼, 모든 기기 호환 + PC / 모바일 / 태블릿 / TV, 낮은 지연 고화질 몰입형 경험, 춤추기, 과일 자르기 등 모션 게임 완벽 호환, 무제한 게임 플레이.',
                download: '클라이언트 다운로드',
                startPlaying: '지금 시작',
                gameImages: {
                    title: '1000+ 게임 온라인 플레이 지원'
                },
                videos: {
                    title: '제품 데모 비디오',
                    video1: '클라우드 게임 플랫폼 데모',
                    video2: '게임 경험 쇼케이스'
                },
                images: {
                    title: '기능 특성 쇼케이스',
                    item1: '초저지연, 지연 시간 20ms 이하',
                    item2: '4K/8K 초고해상도 렌더링 지원',
                    item3: 'PC, 스마트폰, 태블릿 등 다양한 기기 지원',
                    item4: '풍부한 게임 라이브러리, 즉시 플레이 가능',
                    item5: '분산형 아키텍처, 안전하고 신뢰할 수 있음',
                    item6: '지능형 리소스 스케줄링, 최적화된 경험'
                },
                esports: {
                    title: 'e스포츠 호텔',
                    item1: 'e스포츠 호텔: 젊은이들의 사교 모임에 인기 있는 선택지로, PowerVerse Chain이 새로운 운영 모델을 제공해 고성능 PC가 불필요하고 하드웨어 비용을 크게 절감합니다.',
                    item2: '클라우드 게임 단말을 배치해 크로스플랫폼 게임 경험을 선사하며, 3A 대작부터 경쟁 게임까지 클릭 한 번으로 즉시 플레이 가능하고 대기 시간이 없으며, 저지연·고화질을 지원하고 멀티플레이어 온라인 대전을 제공합니다.',
                    item3: '지능형 과금 시스템으로 요금 부과 모델을 유연하게 설정하고, 블록체인 기술로 거래의 투명성과 안전성을 보장해 호텔과 플레이어 간의 신뢰의 다리를 구축합니다.'
                },
                stats: {
                    lowLatency: '초저지연',
                    hdSupport: '고해상도 지원',
                    availability: '24시간 서비스'
                },
                workflow: {
                    title: '완전한 워크플로우 루프',
                    step1: '사용자 등록 로그인: PowerVerse Chain 지갑을 연결하여 분산형 신원 인증 실현',
                    step2: '게임 선택: 게임 라이브러리를 탐색하고 플레이하고 싶은 게임 선택',
                    step3: '리소스 할당: PowerVerse Infra가 지능형으로 엣지 컴퓨팅 노드를 스케줄링하여 GPU 리소스를 가까운 곳에 할당',
                    step4: '게임 시작: 게임이 클라우드 GPU에서 실행되고 낮은 지연 시간 스트리밍으로 사용자 기기에 전송',
                    step5: '실시간 상호작용: 사용자 작업이 실시간으로 업로드되고 게임 그래픽이 렌더링되어 스트리밍',
                    step6: '결제 정산: PowerVerse 토큰(PEC)을 사용하여 사용 시간에 따라 결제, 스마트 컨트랙트가 자동으로 정산',
                    step7: '리소스 해제: 게임 종료 후 GPU 리소스가 자동으로 리소스 풀로 해제되어 다른 사용자가 사용 가능'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '분산형 아키텍처: 중앙 집중식 서버 불필요, 전 세계 분산 GPU 리소스 활용',
                    item2: '낮은 지연 시간 경험: 엣지 컴퓨팅 노드가 가까운 곳에서 서비스 제공, 지연 시간 20ms 이하',
                    item3: '비용 우위: 사용량 기반 결제, 고가 하드웨어 구매 불필요, 게임 진입 장벽 낮춤',
                    item4: '고품질 렌더링: 4K/8K 초고해상도 화질 지원, 부드러운 게임 경험',
                    item5: '크로스 플랫폼 지원: PC, 모바일, 태블릿 등 다양한 기기 지원, 언제 어디서나 플레이 가능'
                },
                scenarios: {
                    title: '응용 시나리오',
                    item1: 'AAA 대작 클라우드 게임: 다운로드 불필요, 즉시 플레이, 최고 수준의 게임 경험 즐기기',
                    item2: '모바일 클라우드 게임: 모바일 기기에서 PC 게임 플레이, 기기 성능 제한 돌파',
                    item3: 'VR/AR 게임: 가상 현실 및 증강 현실 게임 지원, 몰입형 경험',
                    item4: '게임 스트리밍: 낮은 지연 시간 게임 스트리밍, 실시간 상호작용'
                },
                features: {
                    lowLatency: {
                        title: '초저지연',
                        desc: '엣지 노드가 가까운 곳에서 서비스 제공, 지연 시간 20ms 이하'
                    },
                    hdQuality: {
                        title: '고해상도 화질',
                        desc: '4K/8K 초고해상도 렌더링 지원'
                    },
                    costEffective: {
                        title: '비용 우위',
                        desc: '사용량 기반 결제, 하드웨어 구매 불필요'
                    }
                }
            },
            computingexchange: {
                title: '컴퓨팅 파워 거래',
                description: '컴퓨팅 파워 공급과 수요를 연결하는 분산형 컴퓨팅 파워 거래 시장으로 컴퓨팅 리소스의 자유로운 유통을 실현합니다',
                goToTrade: '거래 시장으로',
                links: {
                    title: '관련 링크',
                    market: 'PowerVerse Market 거래 시장으로',
                    infra: 'PowerVerse Infra 인프라에 대해 알아보기',
                    token: 'PowerVerse 토큰(PEC) 정보 보기',
                    workflow: '전체 워크플로우 시나리오 플로우차트 보기'
                },
                stats: {
                    providers: '컴퓨팅 파워 제공자',
                    transactions: '거래 주문',
                    successRate: '거래 성공률'
                },
                workflow: {
                    title: '완전한 워크플로우 루프',
                    step1: '제공자 등록: GPU/CPU 리소스 제공자가 PowerVerse Market에 등록하고 컴퓨팅 파워 리소스 정보를 게시',
                    step2: '리소스 상장: 컴퓨팅 파워 사양, 가격, 사용 가능 시간 등의 매개변수를 설정하고 리소스 정보를 온체인에 저장',
                    step3: '수요자 게시: 컴퓨팅 파워 수요자가 수요 주문을 게시하고 컴퓨팅 파워 유형, 수량, 시간, 예산을 지정',
                    step4: '지능형 매칭: PowerVerse Market 스마트 컨트랙트가 자동으로 공급과 수요를 매칭하거나 제공자가 적극적으로 주문 수락',
                    step5: '주문 확인: 양측이 주문을 확인하고 수요자가 PowerVerse 토큰(PEC)을 보증금으로 지불',
                    step6: '리소스 할당: PowerVerse Infra가 주문에 따라 자동으로 컴퓨팅 파워 리소스를 할당하고 가상 머신 시작',
                    step7: '작업 실행: 수요자가 계산 작업을 제출하고 시스템이 자동으로 실행하여 결과 반환',
                    step8: '실시간 모니터링: 양측이 실시간으로 컴퓨팅 파워 사용 상황, 작업 진행 상황, 리소스 상태를 확인 가능',
                    step9: '자동 정산: 작업 완료 후 스마트 컨트랙트가 실제 사용 시간에 따라 자동으로 정산하고 보증금 해제',
                    step10: '평가 피드백: 거래 양측이 상호 평가하고 평가가 신뢰 시스템에 기록되어 후속 거래 우선순위에 영향',
                    step11: '리소스 회수: 컴퓨팅 파워 리소스가 자동으로 리소스 풀로 해제되어 다른 주문에서 사용 가능'
                },
                coreAdvantages: {
                    title: '핵심 장점',
                    item1: '분산형 거래: 제3자 중개 불필요, 매수매도 양측이 직접 거래, 거래 비용 절감',
                    item2: '스마트 컨트랙트 보장: 거래 전 과정이 스마트 컨트랙트에 의해 실행되며 자동 정산, 안전하고 신뢰할 수 있음',
                    item3: '투명한 가격 책정: 시장 가격이 공개적으로 투명하며 공급과 수요 양측이 자유롭게 가격 협상',
                    item4: '유연한 거래: 시간당, 일당, 월당 등 다양한 과금 방식 지원',
                    item5: '신뢰 시스템: 블록체인 기반 신뢰 평가 시스템으로 거래 안전성 보장'
                },
                scenarios: {
                    title: '응용 시나리오',
                    item1: 'AI 훈련 컴퓨팅 파워 임대: AI 회사에 GPU 컴퓨팅 파워를 제공하여 모델 훈련 지원',
                    item2: '렌더링 컴퓨팅 파워 거래: 영화 회사에 렌더링 컴퓨팅 파워를 제공하여 프로젝트 제작 가속화',
                    item3: '과학 계산 리소스: 연구 기관에 고성능 계산 리소스 제공',
                    item4: '유휴 리소스 현금화: 개인 또는 기업의 유휴 GPU/CPU 리소스를 상장 거래하여 수익 획득'
                },
                features: {
                    decentralized: {
                        title: '분산화',
                        desc: '중개 불필요, 직접 거래'
                    },
                    smartContract: {
                        title: '스마트 컨트랙트',
                        desc: '자동 실행, 안전하고 신뢰할 수 있음'
                    },
                    transparent: {
                        title: '투명한 가격 책정',
                        desc: '시장 가격이 공개적으로 투명'
                    }
                }
            },
            workflow: {
                title: '전체 워크플로우 시나리오',
                description: '클라우드 게임, 컴퓨팅 파워 거래 및 PEC 토큰 결제의 완전한 폐루프 프로세스',
                step1: {
                    title: '사용자 등록 로그인',
                    desc: 'PowerVerse Chain 지갑을 연결하여 분산형 신원 인증 실현'
                },
                branch1: {
                    title: '클라우드 게임 시나리오',
                    step1: {
                        title: '게임 선택',
                        desc: '게임 라이브러리를 탐색하고 플레이하고 싶은 게임 선택'
                    },
                    step2: {
                        title: '리소스 할당',
                        desc: 'PowerVerse Infra가 지능형으로 엣지 컴퓨팅 노드를 스케줄링하여 GPU 리소스 할당'
                    },
                    step3: {
                        title: '게임 실행',
                        desc: '게임이 클라우드 GPU에서 실행되고 낮은 지연 시간 스트리밍으로 전송'
                    }
                },
                branch2: {
                    title: '컴퓨팅 파워 거래 시나리오',
                    step1: {
                        title: '수요/리소스 게시',
                        desc: '수요자가 주문을 게시하거나 제공자가 컴퓨팅 파워 리소스를 상장'
                    },
                    step2: {
                        title: '지능형 매칭',
                        desc: 'PowerVerse Market 스마트 컨트랙트가 자동으로 공급과 수요를 매칭'
                    },
                    step3: {
                        title: '작업 실행',
                        desc: 'PowerVerse Infra가 리소스를 할당하고 계산 작업 실행'
                    }
                },
                payment: {
                    title: 'PEC 토큰 결제',
                    desc: 'PowerVerse 토큰(PEC)을 사용하여 사용 시간/리소스에 따라 결제, 스마트 컨트랙트가 자동으로 정산'
                },
                release: {
                    title: '리소스 해제',
                    desc: '작업 완료 후 GPU/CPU 리소스가 자동으로 리소스 풀로 해제되어 다른 사용자가 사용 가능'
                },
                cloudgamingCard: {
                    title: '클라우드 게임 시나리오',
                    description: '사용자가 PowerVerse Chain 지갑으로 클라우드 게임 플랫폼에 로그인하고 게임을 선택하며, 시스템이 PowerVerse Infra를 통해 지능형으로 엣지 GPU 리소스를 스케줄링하고 게임이 클라우드에서 실행되며 낮은 지연 시간 스트리밍으로 전송됩니다. 사용자가 PEC 토큰을 사용하여 시간에 따라 결제하고 스마트 컨트랙트가 자동으로 정산하며 게임 종료 후 리소스가 해제됩니다.',
                    link: '클라우드 게임 상세 보기'
                },
                computingexchangeCard: {
                    title: '컴퓨팅 파워 거래 시나리오',
                    description: '컴퓨팅 파워 제공자가 PowerVerse Market에 등록하고 GPU/CPU 리소스를 상장하며 수요자가 주문을 게시합니다. 스마트 컨트랙트가 자동으로 매칭하여 거래를 실행하고 수요자가 PEC 토큰을 보증금으로 지불합니다. PowerVerse Infra가 리소스를 할당하고 작업을 실행하며 실시간 모니터링, 자동 정산, 양측이 상호 평가하고 리소스를 회수합니다.',
                    link: '컴퓨팅 파워 거래 상세 보기'
                },
                tokenPaymentCard: {
                    title: 'PEC 토큰 결제',
                    description: 'PowerVerse Token(PEC)은 생태계의 핵심 자산으로 클라우드 게임 시간, 컴퓨팅 파워 임대 비용, DAO 거버넌스 참여 및 노드 스테이킹 보상 결제에 사용됩니다. 스마트 컨트랙트가 모든 거래를 투명하고 안전하며 효율적으로 보장합니다.',
                    link: 'PEC 토큰 알아보기'
                },
                flowchartTitle: '클라우드 게임과 컴퓨팅 파워 거래 전체 워크플로우 플로우차트'
            },
            rwa: {
                title: 'RWA 지갑',
                description: '컴플라이언스 온체인, 컴퓨팅 파워가 가치를 창출합니다. RWA 지갑은 ERC-3643 컴플라이언스 프로토콜을 통해 전국 50개 이상의 채굴장, 10만 대 이상의 고성능 GPU 실체 컴퓨팅 파워를 PowerVerse 체인에서 자산화하여 안전하고 신뢰할 수 있으며 자유롭게 거래 가능한 분산형 컴퓨팅 인프라를 구축합니다.',
                stats: {
                    mines: '채굴장 수',
                    gpuCount: 'GPU 수',
                    tokenized: '토큰화율'
                },
                coreAdvantages: {
                    title: '핵심 장점: 컴플라이언스, 실체 자산, 효율성의 삼중 보장',
                    item1: '컴플라이언스 선행, 안전하고 신뢰할 수 있음: ERC-3643 표준을 깊이 통합하여 KYC/AML 등 글로벌 규제 요구사항을 스마트 컨트랙트에 내장합니다. 자산 발행 및 유통 전 과정에서 합법적이고 컴플라이언스를 보장하여 기관 자금 진입의 장벽을 제거하고 견고한 신뢰의 기반을 마련합니다.',
                    item2: '실체 앵커, 진실하고 투명: 각 온체인 컴퓨팅 파워 토큰은 전국 분산형 채굴장 내 실제 고성능 GPU 하드웨어에 대응합니다. 자산 출처가 명확하고 소유권이 검증 가능하며 가상 투기를 배제하여 실체 가치의 정확한 매핑을 실현합니다.',
                    item3: '온체인 관리, 비용 절감 및 효율성 향상: PowerVerse 블록체인 네트워크를 기반으로 컴퓨팅 자산의 자동 발행, 소유권 확인, 거래 정산을 실현합니다. 자산 관리 효율성을 크게 향상시키고 운영 및 신뢰 비용을 절감하며 유동성 잠재력을 해방합니다.'
                },
                scenarios: {
                    title: '응용 시나리오: 다양한 비즈니스 생태계 강화',
                    item1: '컴플라이언스화 컴퓨팅 파워 자산 거래: 적격 투자자 및 기관에 표준화되고 컴플라이언스화된 컴퓨팅 파워 자산 인수 및 2차 시장 거래 서비스를 제공하여 컴퓨팅 투자의 새로운 패러다임을 엽니다.',
                    item2: '분산형 컴퓨팅 금융(DeFi): 기반 고품질 컴플라이언스 자산으로서 담보 대출, 수익권 스테이킹 등의 온체인 금융 시나리오에 적용 가능하며 풍부한 컴퓨팅 DeFi 생태계를 구축합니다.',
                    item3: '엔터프라이즈 컴퓨팅 서비스 시장: AI 훈련, 클라우드 렌더링, 과학 연구 계산 등의 수요 측에 즉시 정산 가능하고 소유권이 명확한 탄력적인 컴퓨팅 임대 및 조달 솔루션을 제공합니다.'
                },
                features: {
                    decentralized: {
                        title: '컴플라이언스 선행',
                        desc: 'ERC-3643 표준, 합법적 컴플라이언스 보장'
                    },
                    tokenized: {
                        title: '실체 앵커',
                        desc: '실제 GPU 하드웨어, 소유권 검증 가능'
                    },
                    transparent: {
                        title: '온체인 관리',
                        desc: '자동 발행 및 소유권 확인, 비용 절감 및 효율성 향상'
                    }
                },
                computingPort: {
                    title: '컴퓨팅 포트',
                    description: '컴퓨팅 포트(XAI Center)는 PowerVerse Chain에 구축된 분산형 지능형 컴퓨팅 플랫폼으로, 전 세계 유휴 GPU/CPU 리소스를 집계하고 블록체인 기술을 통해 컴퓨팅 자산의 토큰화, 표준화 및 신뢰할 수 있는 거래를 실현하는 데 전념하고 있습니다. 플랫폼은 컴퓨팅 파워 분할, 컴퓨팅 풀 관리, 데이터 플랫폼, 모델 훈련 및 추론, 장애 감지, 엣지 컴퓨팅 등 포괄적인 서비스를 제공하여 AI 팀에 저비용 및 고탄력적인 컴퓨팅 지원을 제공합니다.',
                    feature1: '컴퓨팅 파워 분할 및 풀링: 멀티 인스턴스 GPU 운영, GPU 패스스루 기술, 다중 노드 병렬 컴퓨팅을 지원하여 다중 브랜드 GPU 단일 카드의 유연한 할당 및 메모리 분할을 실현하고 공개 또는 전용 컴퓨팅 풀의 유연한 구성을 지원',
                    feature2: '모델 훈련 및 추론 전체 생명주기: 모델 개발, 훈련, 배포, 추론부터 최적화까지 완전한 지원을 제공하며 분산 훈련, 모델 효과 평가, 온라인 추론, 모델 최적화 등의 전문 서비스를 포함',
                    feature3: '지능형 모니터링 및 자가 치유: 시각화된 모니터링 데이터, 구성 가능한 경고 서비스, 자동화된 장애 처리에 기반하여 서비스 운영 및 유지보수의 지능화를 실현하고 하드웨어 장애, 소프트웨어 이상 또는 리소스 병목 현상을 자동으로 감지 및 수리'
                },
                xaiToken: {
                    title: 'RWA 토큰 XAI',
                    description: 'XAI는 XRWA AI 생태계 내의 핵심 기능 토큰 및 가치 준비 토큰으로, ERC-20 표준을 기반으로 개발되었으며 생태계 가치 순환 매체, 수익 배분 도구, 서비스 결제 증명서의 세 가지 핵심 기능을 담당합니다. XAI는 XRWA 생태계의 AI 전체 시나리오 상호작용을 포괄하며 자산 측면과 애플리케이션 측면을 연결하는 가치의 다리 역할을 합니다.',
                    feature1: '생태계 수익 배분의 유일한 결제 도구: GNFT 및 GUnit 보유자의 생태계 수익은 XAI 형태로 배분되며, 이 설계는 자산과 XAI 가치를 깊이 결합시켜 토큰 보유자가 컴퓨팅 자산에서 생성되는 수익 배당을 받을 수 있도록 보장',
                    feature2: 'AI 생태계 서비스의 강제 결제 증명서: XRWA의 AI 애플리케이션 생태계에서 XAI는 유일한 서비스 결제 도구로 모든 컴퓨팅 파워 및 AI 관련 서비스 시나리오를 포괄하며 XAI의 강성 수요를 구축하고 토큰 가치 상승을 추진',
                    feature3: '생태계 거버넌스 및 노드 인센티브의 핵심 토큰: XAI 보유자는 생태계 거버넌스 권한을 가지며 온체인 투표를 통해 XRWA 생태계의 주요 결정에 참여할 수 있으며, 핵심 역할은 노드 자격을 얻기 위해 XAI를 스테이킹해야 하며 스테이킹 페널티 메커니즘을 통해 생태계 노드의 컴플라이언스와 신뢰성을 보장'
                }
            }
        },
        developer: {
            title: '개발자 센터',
            description: '풍부한 개발 도구 및 문서로 개발자가 애플리케이션을 빠르게 구축할 수 있도록 지원합니다',
            docs: {
                title: '기술 문서',
                description: '완전한 기술 문서 및 API 참조로 개발자가 빠르게 시작할 수 있도록 지원합니다',
                link: '문서 보기'
            },
            sdk: {
                title: 'SDK 도구 패키지',
                description: '다국어 SDK 지원으로 개발 프로세스를 단순화하고 개발 효율성을 향상시킵니다',
                link: 'SDK 다운로드'
            },
            tools: {
                title: '개발 도구',
                description: '테스트 네트워크, 디버깅 도구, 배포 스크립트 등 원스톱 개발 도구',
                link: '도구 사용',
                feature1: '테스트 네트워크: 완전한 테스트 환경 제공',
                feature2: '디버깅 도구: 강력한 디버깅 및 모니터링 기능',
                feature3: '배포 스크립트: 원클릭 프로덕션 환경 배포'
            },
            community: {
                title: '커뮤니티 지원',
                description: '활발한 개발자 커뮤니티, 기술 교류 및 문제 해결',
                link: '커뮤니티 가입',
                feature1: 'Telegram 커뮤니티: 실시간 기술 교류',
                feature2: 'GitHub: 오픈 소스 코드 및 이슈 추적',
                feature3: '기술 포럼: 심층 기술 토론'
            }
        },
        token: {
            pageTitle: '토큰 - PowerVerse Chain',
            title: '토큰 경제',
            description: '지속 가능한 생태계 경제 모델 구축',
            intro: 'PowerVerse Token은 PowerVerse Chain 생태계의 네이티브 토큰입니다',
            totalSupply: '총 공급량',
            circulated: '유통량',
            marketCap: '시가총액',
            networkInfo: 'PowerVerse 네트워크 정보',
            rpcInterface: 'RPC 인터페이스',
            mainRPC: '메인 RPC 인터페이스:',
            webSocket: 'WebSocket:',
            beaconAPI: 'Beacon API:',
            healthCheck: '헬스 체크:',
            walletInfo: '지갑 연결 정보',
            rpcURL: 'RPC URL:',
            chainID: 'Chain ID:',
            symbol: 'Symbol:',
            decimals: 'Decimals:',
            distributionChart: '토큰 배분 시각화',
            usage: {
                title: '토큰 용도',
                items: [
                    '컴퓨팅 리소스 비용 지불',
                    '네트워크 거버넌스 투표 참여',
                    '노드 스테이킹 및 보상',
                    '생태계 애플리케이션 내 결제'
                ]
            },
            distribution: {
                title: '배분 메커니즘',
                items: [
                    '커뮤니티 인센티브: 40%',
                    '팀 및 고문: 20%',
                    '생태계 발전: 20%',
                    '투자자: 15%',
                    '준비금: 5%'
                ]
            }
        },
        about: {
            title: '회사 소개',
            vision: {
                title: '비전',
                content: 'PowerVerse Chain은 세계 최대의 분산 컴퓨팅 네트워크를 구축하는 데 전념하여 컴퓨팅 리소스를 물과 전기처럼 접근 가능하게 만들고 Web3 생태계에 강력한 인프라 지원을 제공합니다.'
            },
            mission: {
                title: '사명',
                content: '블록체인 기술을 통해 전 세계 유휴 컴퓨팅 리소스를 통합하여 컴퓨팅 비용을 절감하고 리소스 이용 효율을 향상시키며 분산 컴퓨팅 기술의 보급과 응용을 촉진합니다.'
            },
            values: {
                title: '핵심 가치',
                items: [
                    '분산화: 중앙 집중식 기관 없이 사용자가 직접 네트워크 거버넌스에 참여',
                    '효율성과 투명성: 블록체인 기술이 거래의 투명성을 보장하고 스마트 컨트랙트가 자동으로 실행',
                    '개방형 생태계: 다양한 응용 시나리오를 지원하고 번영하는 개발자 생태계를 구축',
                    '보안 및 신뢰성: 네트워크 및 데이터 보안을 보장하는 다중 보안 메커니즘'
                ]
            },
            team: {
                title: '팀 소개',
                intro: '창립 팀원은 여러 번의 성공한 창업 경험을 가지고 있으며, 업계를 선도하는 서버 클러스터를 구축했고 여러 국가 특허 기술을 보유하고 있습니다. 회사 상장 경험이 있는 여러 멤버가 초기 팀에 합류했습니다. 다른 직원 중에는 많은 박사 및 교수가 있으며, web3 분야에서 풍부한 경험을 가지고 있고 여러 대규모 프로젝트에 참여했습니다.',
                members: {
                    member1: {
                        name: 'Harvey',
                        role: '창립자 & CEO',
                        bio: '영국 버밍엄 대학교 졸업, 블록체인 기술 전문가, 암호화폐 분야에서 수년간 활동',
                        cert: ''
                    },
                    member2: {
                        name: 'Solomon',
                        role: '공동 창립자 & CTO',
                        bio: '영국 맨체스터 대학교 졸업, 분산 시스템 전문가, 블록체인 기술 고문'
                    },
                    member3: {
                        name: 'Jane',
                        role: '공동 창립자 & COO',
                        bio: '캐나다 빅토리아 대학교 졸업, 생태계 구축 전문가, 암호 자산 관리 전문가'
                    }
                },
                others: '다른 직원 중에는 많은 박사 및 교수가 있으며, web3 분야에서 풍부한 경험을 가지고 있고 여러 대규모 프로젝트에 참여했습니다.'
            },
            contact: {
                title: '연락처',
                intro: '저희 프로젝트에 관심이 있으시거나 질문이 있으시면 다음 방법으로 연락주세요:',
                email: '이메일: hiabacloud@gmail.com',
                address: '주소: 저장성 인재빌딩 2호관 7층',
                twitter: '트위터: @PowerVerseChain',
                telegram: '텔레그램: @PowerVerseChain_Offical',
                discord: '디스코드: PowerVerse Community'
            }
        },
        whitepaper: {
            title: '백서',
            download: '백서 다운로드',
            sections: {
                introduction: '소개',
                overview: '프로젝트 개요',
                technology: '기술 아키텍처',
                tokenomics: '토큰 경제',
                roadmap: '로드맵',
                team: '팀 소개'
            }
        },
        common: {
            learnMore: '자세히 보기',
            back: '뒤로',
            next: '다음',
            previous: '이전',
            readMore: '더 읽기',
            download: '다운로드',
            contact: '문의하기',
            join: '참여하기',
            privacy: '개인정보 보호정책',
            terms: '서비스 약관',
            cookie: 'Cookie 정책',
            github: 'GitHub',
            blog: '블로그',
            copy: '복사',
            copied: '복사되었습니다!',
            copyFailed: '복사 실패, 수동으로 복사하세요: ',
            videoNotSupported: '브라우저가 비디오 재생을 지원하지 않습니다.'
        },
        hardwareFactory: {
            pageTitle: '하드웨어 공장 - PowerVerse Chain',
            title: '하드웨어 공장',
            description: '전문 서버 케이스 및 산업 제어 케이스 제조업체',
            companyProfile: '회사 프로필',
            companyIntro: '우리는 전문 서버 케이스 및 산업 제어 케이스 제조업체로서 고객에게 고품질 하드웨어 제품 솔루션을 제공하는 데 전념하고 있습니다.',
            companyDesc: '회사 소개',
            companyDescText: '설계, 연구 개발부터 생산, 품질 검사까지 전체 프로세스를 자주적으로 관리할 수 있는 완전한 생산 제조 능력을 보유하고 있습니다. 공장에는 첨단 생산 장비와 전문 기술 팀이 배치되어 제품 품질과 납품 효율을 보장합니다.',
            companyCulture: '기업 문화',
            companyCultureText: '우리는 "품질 제일, 고객 제일, 지속적 혁신"이라는 기업 이념을 고수하며 생산 공정을 지속적으로 최적화하고 제품 품질을 향상시켜 고객에게 더 큰 가치를 창조합니다. 팀 구축을 중시하며 긍정적인 직장 분위기를 조성하고 직원의 혁신 잠재력을 자극합니다.',
            qualifications: '회사 자격',
            license: '사업 허가증',
            licenseDesc: '완전한 상공 등록 자격을 보유하고 있으며 합법적이고 규정을 준수하는 운영',
            qualityCert: '품질 인증',
            qualityCertDesc: '국제 표준화 기구 품질 관리 시스템 인증 획득',
            honorCert: '영예 증명서',
            honorCertDesc: '다수의 업계 영예 및 자격 인증 획득',
            patent: '특허 기술',
            patentDesc: '다수의 제품 설계 및 기술 특허 보유',
            productCenter: '제품 센터',
            productCenterDesc: '다양한 응용 시나리오의 요구를 만족시키는 서버 케이스, 스토리지 서버 케이스, 산업 제어 케이스 및 임베디드 케이스의 전 시리즈 제품을 제공합니다.',
            serverChassis: '서버 케이스',
            serverChassisDesc: '1U부터 8U 및 타워형 서버 케이스 제공',
            storageChassis: '스토리지 서버 케이스',
            storageChassisDesc: '고밀도 스토리지 솔루션',
            industrialChassis: '산업 제어 케이스',
            industrialChassisDesc: '산업 제어 전용 케이스',
            embeddedChassis: '임베디드 케이스',
            embeddedChassisDesc: '컴팩트한 임베디드 솔루션',
            accessories: '액세서리',
            accessoriesDesc: '각종 케이스 액세서리 및 부속품',
            productDetails: '제품 세부 정보',
            productAdvantages: '제품 장점',
            advantages: [
                '전문 설계: 업계 표준 준수, 방열 및 공간 활용 최적화',
                '고품질 재료: 고강도 강재 채택, 내식성, 내구성',
                '정밀 제조: 첨단 생산 공정으로 제품 정확도와 신뢰성 보장',
                '유연한 맞춤: 고객 요구에 따른 개인화 맞춤 지원',
                '엄격한 테스트: 출고 전 다수의 엄격한 테스트를 거쳐 성능 안정성 보장'
            ],
            serverChassisList: {
                item1: '6U 랙마운트형 8노드 서버 섀시',
                item2: '5U 랙마운트형 8노드 서버 섀시',
                item3: '4U 랙마운트형 36베이 서버 섀시',
                item4: '4U 랙마운트형 24베이 서버 섀시',
                item5: '4U 랙마운트형 8베이 서버 섀시',
                item6: '2U 표준 서버',
                item7: '씬 클라이언트'
            },
            serverChassisInfo: {
                item1: "6U 랙마운트 디자인에 8개의 독립적인 컴퓨팅 노드를 집적했으며, 클라우드 게임, 클라우드 PC, 클라우드 렌더링 등 다중 사용자 동시 접속 시나리오에 특화 설계되었습니다.「집중형 컴퓨팅 파워 + 분산형 배포」모델을 채택하여 하드웨어 배포 공간과 비용을 크게 절감하는 동시에, 각 사용자가 독립적이고 안정적인 컴퓨팅 성능을 이용할 수 있도록 보장합니다.",
                item2: "5U 높이의 섀시로 8장의 고성능 GPU 카드를 지원하며, AI 모델 훈련과 딥러닝 추론에 강력한 컴퓨팅 성능을 제공합니다. 고효율 전원 모듈과 지능형 방열 시스템을 탑재하여 GPU가 최적 성능으로 안정적으로 운영되도록 보장합니다. 또한 풍부한 확장 인터페이스를 제공하여 다양한 알고리즘 프레임워크와 소프트웨어 플랫폼에 호환됩니다.",
                item3: "대용량 데이터 스토리지 시나리오에 특화 설계되어「고용량·고신뢰성·고확장성」을 핵심으로 개발되었습니다. 멀티베이 디자인, RAID 보호, 지능형 관리 기능을 채택하여 기업에 안전하고 안정적이며 관리가 용이한 스토리지 솔루션을 제공하며, 데이터 백업, 모니터링 스토리지, 미디어 라이브러리, 파일 공유 등 시나리오에 적합합니다.",
                item4: "대용량 데이터 스토리지 시나리오에 특화 설계되어「고용량·고신뢰성·고확장성」을 핵심으로 개발되었습니다. 멀티베이 디자인, RAID 보호, 지능형 관리 기능을 채택하여 기업에 안전하고 안정적이며 관리가 용이한 스토리지 솔루션을 제공하며, 데이터 백업, 모니터링 스토리지, 미디어 라이브러리, 파일 공유 등 시나리오에 적합합니다.",
                item5: "대용량 데이터 스토리지 시나리오에 특화 설계되어「고용량·고신뢰성·고확장성」을 핵심으로 개발되었습니다. 멀티베이 디자인, RAID 보호, 지능형 관리 기능을 채택하여 기업에 안전하고 안정적이며 관리가 용이한 스토리지 솔루션을 제공하며, 데이터 백업, 모니터링 스토리지, 미디어 라이브러리, 파일 공유 등 시나리오에 적합합니다.",
                item6: "범용 컴퓨팅 성능을 갖추고 다양한 시나리오에 호환됩니다. 핵심 가치: 2U 표준 랙마운트 디자인으로 성능, 확장성, 비용 효율성을 균형있게 구현합니다. 기업의 일반적인 IT 수요에 특화 설계되어 웹 서버, 데이터베이스 서버, 가상화 호스트, 파일 서버로 활용할 수 있으며, 중소기업 IT 인프라의「핵심 컴퓨팅 파워 플랫폼」으로 기능합니다.",
                item7: "「경량화·고성능·저전력 소비」의 설계 철학을 채택한 콤팩트하고 휴대 가능한 미니 PC입니다. 클라우드 게임, 사무용, 교육, 클라우드 터미널 등 시나리오에 유연하게 배포할 수 있습니다. 씬 클라이언트 미니 PC는 원격 데스크탑 접속과 클라우드 리소스 접속을 지원하여 단말 기기의 조달 비용과 유지보수 비용을 효과적으로 절감합니다. 동시에 뛰어난 보안성과 안정성을 갖추고 있어 사용자에게 부드러운 클라우드 사무 및 엔터테인먼트 경험을 제공합니다."
            },
            storageChassisList: {
                item1: '1U 스토리지 서버 케이스',
                item2: '2U 스토리지 서버 케이스',
                item3: '4U 스토리지 서버 케이스'
            },
            industrialChassisList: {
                item1: '표준 산업 제어 케이스',
                item2: '맞춤형 산업 제어 케이스'
            },
            embeddedChassisList: {
                item1: '임베디드 케이스',
                item2: '소형화 설계'
            },
            accessoriesList: {
                item1: '팬 모듈',
                item2: '전원 모듈',
                item3: '확장 카드 브래킷',
                item4: '기타 액세서리'
            },
            serverChassisSeries: '서버 케이스 시리즈',
            storageChassisSeries: '스토리지 서버 케이스 시리즈',
            industrialChassisSeries: '산업 제어 케이스',
            embeddedChassisSeries: '임베디드 케이스',
            specSize: '크기',
            specDriveBay: '드라이브 베이',
            specFan: '팬',
            specPower: '전원',
            specExpansion: '확장 슬롯',
            specApplication: '응용',
            specMaterial: '재질',
            specProtection: '보호 등급',
            specValue1U: '표준 1U 높이',
            specValue2U: '표준 2U 높이',
            specValue3U: '표준 3U 높이',
            specValue4U: '표준 4U 높이',
            specValueDrive2_4: '2-4개',
            specValueDrive4_8: '4-8개',
            specValueDrive8_12: '8-12개',
            specValueDrive12_24: '12-24개',
            specValueFan40_60: '40mm/60mm',
            specValueFan80_92: '80mm/92mm',
            specValueFan80_120: '80mm/120mm',
            specValueFan120_140: '120mm/140mm',
            specValuePowerStandard: '표준 ATX/중복 전원',
            specValueExpansion1_2: '1-2 PCIe',
            specValueExpansion2_4: '2-4 PCIe',
            specValueExpansion4_6: '4-6 PCIe',
            specValueExpansion6_8: '6-8 PCIe',
            specValueAppWeb: '웹 서버, 애플리케이션 서버',
            specValueAppDatabase: '데이터베이스 서버, 가상화 서버',
            specValueAppHPC: '고성능 컴퓨팅, 스토리지 서버',
            specValueAppBigData: '빅데이터 스토리지, 고성능 컴퓨팅',
            specValueAppStorage: '고밀도 스토리지, NAS 시스템',
            specValueAppStorage2U: '엔터프라이즈 스토리지, 백업 시스템',
            specValueAppStorage4U: '대규모 데이터 스토리지, 클라우드 스토리지',
            specValueAppIndustrial: '산업 자동화, 스마트 제조',
            specValueAppEmbedded: '엣지 컴퓨팅, IoT 장치',
            specValueMaterial: '고품질 강판/알루미늄 합금',
            specValueProtection: 'IP65/IP67',
            specValueCompact: '컴팩트 설계',
            specValueDrive2_5: '4-6개 2.5인치',
            specValueDrive3_5: '12-24개 3.5인치',
            specValueDrive4U: '36-48개 3.5인치',
            advantagesTitle: '핵심 장점',
            advantagesIntro: '고객에게 고품질, 고성능 하드웨어 제품을 제공하여 다양한 응용 시나리오의 요구를 만족시키는 데 전념하고 있습니다.',
            advantage1: '전문 설계: 첨단 산업 설계 개념 채택, 방열 및 구조 레이아웃 최적화',
            advantage2: '고품질 재료: 고품질 강재 및 알루미늄 합금 선택, 제품 내구성 보장',
            advantage3: '정밀 제조: 첨단 가공 공정 채택, 제품 정확도와 품질 보장',
            advantage4: '유연한 구성: 다양한 마더보드 사양 및 확장 카드 구성 지원',
            advantage5: '우수한 방열: 최적화된 공기 덕트 설계, 시스템 안정적 운영 보장',
            advantage6: '빠른 납품: 완전한 공급망 시스템, 적시 납품 보장',
            footerResources: '리소스',
            footerEcosystem: '생태계'
        },
        researchStrength: {
            pageTitle: '연구 개발 역량 - PowerVerse Chain',
            title: '연구 개발 역량',
            description: '전체 산업 체인 연구 개발 및 생산, 핵심 하드웨어 기술 습득',
            fullChain: '전체 산업 체인 연구 개발 및 생산',
            fullChainDesc: 'PowerVerse는 전체 산업 체인을 높은 수준으로 수직 통합하고 지속적인 혁신을 통해 클라우드 게임 제품의 더 빠른 출시를 추진합니다. 우리는 하드웨어에서 소프트웨어, 네트워크에서 생태계에 이르기까지 완전한 산업 체인을 장악하고 "엔드투엔드 컴퓨팅 인프라 생태계 폐쇄 루프"를 구축합니다.',
            hardwareRnd: '하드웨어 연구 개발',
            hardwareRndDesc: '자체 개발 GPU 하드웨어, 거의 10년의 하드웨어 연구 개발 경험, GPU 하드웨어 연구 개발 및 생산 관리 담당, 컴퓨팅 파워 공급 보장. "엔드투엔드 컴퓨팅 인프라 생태계 폐쇄 루프" 구축, 비용 대비 성능 최적화.',
            softwareArch: '소프트웨어 아키텍처',
            softwareArchDesc: '자체 개발 아키텍처, 게임 엔진과 클라우드 네이티브 아키텍처 간의 적응 격차를 돌파하고, 실시간 렌더링 및 인코딩의 기술적 병목 현상을 돌파합니다. 클라우드 데이터 통합, 지속적인 플랫폼 기반 개발 도구 반복.',
            networkOpt: '네트워크 최적화',
            networkOptDesc: '저지연 전송 알고리즘 + 약한 네트워크 저항 전략 알고리즘, 안정성 향상. 5ms 초저지연, 0 패킷 손실 안정적인 연결, 엣지 노드는 30개 이상의 성과 시를 커버할 예정입니다.',
            aiOptimization: 'AI 컴퓨팅 파워 최적화',
            aiOptimizationDesc: 'AI 컴퓨팅 파워 최적화, 정확한 인식 및 의사결정 배분. AI 기반 렌더링 향상 알고리즘, 동적 해상도 조정 알고리즘, 계층 인코딩 알고리즘, 동적 비트레이트 조정 알고리즘.',
            rndCapability: '연구 개발 능력',
            rndCapabilityDesc: '거의 10년의 하드웨어 연구 개발 경험, GPU 하드웨어 연구 개발 및 생산 관리 담당, 컴퓨팅 파워 공급 보장. 현재 특허 수: 15+, 팀 규모: 30+, 연구 개발 비율: ~40%.',
            coreAlgorithms: '핵심 기술 알고리즘',
            dynamicResolution: '동적 해상도 조정 알고리즘',
            dynamicResolutionDesc: '네트워크 상태에 따라 해상도를 동적으로 조정하여 부드러운 경험 보장',
            aiRender: 'AI 기반 렌더링 향상 알고리즘',
            aiRenderDesc: 'AI 기술을 활용하여 렌더링 품질과 효율성 향상',
            layeredEncoding: '계층 인코딩 알고리즘',
            layeredEncodingDesc: '지능형 계층 인코딩, 전송 효율 최적화',
            dynamicBitrate: '동적 비트레이트 조정 알고리즘',
            dynamicBitrateDesc: '실시간 비트레이트 조정, 네트워크 변화에 적응',
            zeroCopy: '제로 카피 인코딩 파이프라인 알고리즘',
            zeroCopyDesc: '메모리 복사를 줄여 인코딩 성능 향상',
            lowLatency: '저지연 전송 알고리즘',
            lowLatencyDesc: '전송 경로 최적화, 지연 감소',
            team: '연구 개발 팀',
            teamSize: '팀 규모',
            rndRatio: '연구 개발 비율',
            patents: '현재 특허 수',
            experience: '하드웨어 연구 개발 경험',
            experienceValue: '10년+',
            coreTeam: '핵심 팀 멤버',
            teamMember1: '샤추 - 하드웨어 연구 개발 책임자:',
            teamMember1Desc: '거의 10년의 하드웨어 연구 개발 경험, GPU 하드웨어 연구 개발 및 생산 관리 담당, 컴퓨팅 파워 공급 보장',
            teamMember2: '왕하오위 - CEO:',
            teamMember2Desc: '8년 이상의 업계 경험, Web3 컴퓨팅 인프라에 깊이 관여, 하드웨어 기술과 운영자 자원 통합, 7개의 관련 특허, 업계에서 잘 알려진 전문가',
            vision: '미래 비전',
            visionTitle: '비전: 분산형 AI 기반 클라우드 게임 플랫폼 업계 리더',
            visionDesc: '핵심 산업 체인을 장악하고 제품 정의 능력을 갖추는 것이 승리의 유일한 길입니다. 미래에는 높은 총이익률, 높은 프리미엄 능력, 높은 시장 점유율을 가진 업계의 절대적 선두가 되어 클라우드 게임 플랫폼을 수천 가구에 보급하고 기술로 세계를 변화시킬 것입니다.'
        }
    }
};

// 语言管理类
class LanguageManager {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'zh-CN';
        this.init();
    }

    init() {
        // 确保DOM已加载后再初始化
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.updateLanguage(this.currentLang);
                this.setupLanguageSwitcher();
            });
        } else {
            // DOM已加载，直接初始化
            this.updateLanguage(this.currentLang);
            // 延迟一点确保DOM完全渲染
            setTimeout(() => {
                this.setupLanguageSwitcher();
            }, 100);
        }
    }

    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage') || 'zh-CN';
    }

    setStoredLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getTranslation(key) {
        if (!key) return '';
        
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        if (!value) {
            console.warn(`Language ${this.currentLang} not found in translations`);
            return key;
        }
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // 如果当前语言找不到，尝试从中文获取
                if (this.currentLang !== 'zh-CN') {
                    const zhValue = translations['zh-CN'];
                    if (zhValue) {
                        let zhResult = zhValue;
                        let zhFound = true;
                        for (const k2 of keys) {
                            if (zhResult && typeof zhResult === 'object' && k2 in zhResult) {
                                zhResult = zhResult[k2];
                            } else {
                                zhFound = false;
                                break;
                            }
                        }
                        if (zhFound && zhResult && typeof zhResult === 'string') {
                            console.warn(`Translation key "${key}" not found for language ${this.currentLang}, using zh-CN fallback`);
                            return zhResult;
                        }
                    }
                }
                console.warn(`Translation key "${key}" not found for language ${this.currentLang}`);
                return key; // 如果找不到翻译，返回key
            }
        }
        
        // 如果value是字符串，返回它；否则返回key
        return (typeof value === 'string' ? value : key);
    }

    updateLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, using zh-CN`);
            lang = 'zh-CN';
        }
        
        this.currentLang = lang;
        this.setStoredLanguage(lang);
        document.documentElement.lang = lang;
        
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (!key) return;
            
            let translation = this.getTranslation(key);
            
            // 如果翻译失败（返回key本身），尝试从中文获取作为后备
            if (translation === key && this.currentLang !== 'zh-CN') {
                // 临时切换到中文获取翻译
                const originalLang = this.currentLang;
                this.currentLang = 'zh-CN';
                const zhTranslation = this.getTranslation(key);
                this.currentLang = originalLang; // 恢复原语言
                
                if (zhTranslation !== key) {
                    translation = zhTranslation; // 使用中文翻译作为后备
                } else {
                    // 如果中文也没有，记录警告但不显示key
                    console.warn(`翻译键 "${key}" 在 ${this.currentLang} 和 zh-CN 中都未找到`);
                    // 保持元素原有内容或使用空字符串
                    return; // 跳过更新，保持原样
                }
            }
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // 更新语言切换按钮文本
        this.updateLanguageButton();
        
        // 更新按钮文本
        this.updateLanguageButton();
        
        // 如果菜单正在显示，更新菜单内容
        const menu = document.getElementById('language-menu');
        if (menu && menu.style.display === 'block') {
            this.showLanguageMenu();
        }
        
        // 触发自定义事件
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
    }

    setupLanguageSwitcher() {
        const btn = document.querySelector('.lang-switch');
        if (!btn) {
            console.warn('语言按钮未找到，延迟重试...');
            setTimeout(() => this.setupLanguageSwitcher(), 100);
            return;
        }
        
        // 移除旧的事件监听器（如果存在）
        if (btn._mouseenterHandler) {
            btn.removeEventListener('mouseenter', btn._mouseenterHandler);
            btn._mouseenterHandler = null;
        }
        
        if (btn._mouseleaveHandler) {
            btn.removeEventListener('mouseleave', btn._mouseleaveHandler);
            btn._mouseleaveHandler = null;
        }
        
        // 创建或获取语言选择菜单
        let menu = document.getElementById('language-menu');
        if (!menu) {
            menu = document.createElement('div');
            menu.id = 'language-menu';
            menu.className = 'language-menu';
            document.body.appendChild(menu);
        }
        
        // 初始化菜单（如果还没有初始化）
        if (!menu.hasAttribute('data-initialized')) {
            this.initLanguageMenu(menu);
            menu.setAttribute('data-initialized', 'true');
            
            // 为菜单添加鼠标进入和离开事件
            menu._mouseenterHandler = () => {
                // 鼠标进入菜单，取消隐藏
                if (this._hideMenuTimeout) {
                    clearTimeout(this._hideMenuTimeout);
                    this._hideMenuTimeout = null;
                }
            };
            
            menu._mouseleaveHandler = () => {
                // 鼠标离开菜单，隐藏菜单
                menu.style.display = 'none';
            };
            
            menu.addEventListener('mouseenter', menu._mouseenterHandler);
            menu.addEventListener('mouseleave', menu._mouseleaveHandler);
        }
        
        // 鼠标进入按钮时显示菜单（确保始终在最上层）
        btn._mouseenterHandler = (e) => {
            e.stopPropagation();
            // 确保按钮在最上层
            btn.style.zIndex = '9999';
            this.showLanguageMenu();
        };
        
        // 鼠标离开按钮时，延迟隐藏菜单（给用户时间移动到菜单）
        btn._mouseleaveHandler = () => {
            // 延迟隐藏，如果鼠标移动到菜单上则取消隐藏
            this._hideMenuTimeout = setTimeout(() => {
                const menu = document.getElementById('language-menu');
                if (menu) {
                    // 检查鼠标是否在菜单上
                    const menuRect = menu.getBoundingClientRect();
                    const mouseX = this._lastMouseX || 0;
                    const mouseY = this._lastMouseY || 0;
                    
                    if (mouseX < menuRect.left || mouseX > menuRect.right ||
                        mouseY < menuRect.top || mouseY > menuRect.bottom) {
                        menu.style.display = 'none';
                    }
                }
            }, 200); // 200ms延迟
        };
        
        // 绑定事件
        btn.addEventListener('mouseenter', btn._mouseenterHandler);
        btn.addEventListener('mouseleave', btn._mouseleaveHandler);
        
        // 监听鼠标移动，用于判断鼠标位置
        if (!this._mouseMoveHandler) {
            this._mouseMoveHandler = (e) => {
                this._lastMouseX = e.clientX;
                this._lastMouseY = e.clientY;
            };
            document.addEventListener('mousemove', this._mouseMoveHandler);
        }
        
        // 更新按钮显示文本
        this.updateLanguageButton();
        
        console.log('语言切换按钮已绑定 (hover模式)');
    }
    
    initLanguageMenu(menu) {
        const languages = [
            { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
            { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'ja', name: '日本語', flag: '🇯🇵' },
            { code: 'ko', name: '한국어', flag: '🇰🇷' }
        ];
        
        menu.innerHTML = languages.map(lang => `
            <div class="language-option ${this.currentLang === lang.code ? 'active' : ''}" 
                 data-lang="${lang.code}">
                <span class="flag">${lang.flag}</span>
                <span class="name">${lang.name}</span>
            </div>
        `).join('');
        
        // 绑定语言选项点击事件
        menu.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                console.log('选择语言:', lang);
                if (lang && lang !== this.currentLang) {
                    this.updateLanguage(lang);
                }
                // 切换语言后隐藏菜单
                menu.style.display = 'none';
            });
        });
    }

    updateLanguageButton() {
        const switcher = document.querySelector('.lang-switch');
        if (switcher) {
            const langNames = {
                'zh-CN': '简体中文',
                'zh-TW': '繁體中文',
                'en': 'English',
                'ja': '日本語',
                'ko': '한국어'
            };
            // 使用textContent更新，不会影响事件监听器（因为我们使用事件委托）
            const newText = langNames[this.currentLang] || 'Language';
            if (switcher.textContent !== newText) {
                switcher.textContent = newText;
            }
            // 确保按钮始终可点击
            switcher.style.pointerEvents = 'auto';
            switcher.style.cursor = 'pointer';
            switcher.setAttribute('data-lang-bound', 'true');
        }
    }

    showLanguageMenu() {
        // 取消隐藏菜单的定时器
        if (this._hideMenuTimeout) {
            clearTimeout(this._hideMenuTimeout);
            this._hideMenuTimeout = null;
        }
        
        const menu = document.getElementById('language-menu');
        if (!menu) {
            console.warn('语言菜单未找到');
            return;
        }
        
        // 更新菜单内容（确保当前语言高亮）
        const languages = [
            { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
            { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'ja', name: '日本語', flag: '🇯🇵' },
            { code: 'ko', name: '한국어', flag: '🇰🇷' }
        ];
        
        menu.innerHTML = languages.map(lang => `
            <div class="language-option ${this.currentLang === lang.code ? 'active' : ''}" 
                 data-lang="${lang.code}">
                <span class="flag">${lang.flag}</span>
                <span class="name">${lang.name}</span>
            </div>
        `).join('');
        
        // 重新绑定语言选项点击事件
        menu.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                console.log('选择语言:', lang);
                if (lang && lang !== this.currentLang) {
                    this.updateLanguage(lang);
                }
                // 切换语言后隐藏菜单
                menu.style.display = 'none';
            });
        });
        
        // 获取按钮位置（使用fixed定位，相对于视口）
        const switcher = document.querySelector('.lang-switch');
        if (switcher) {
            const rect = switcher.getBoundingClientRect();
            // 使用fixed定位，位置相对于视口，不受滚动影响
            menu.style.position = 'fixed';
            menu.style.top = (rect.bottom + 10) + 'px';
            menu.style.right = (window.innerWidth - rect.right) + 'px';
            menu.style.left = 'auto';
            menu.style.bottom = 'auto';
        }
        
        // 显示菜单（使用requestAnimationFrame确保动画流畅）
        requestAnimationFrame(() => {
            menu.style.display = 'block';
            menu.style.zIndex = '10000';
            menu.style.position = 'fixed';
            // 强制重排，触发CSS动画
            void menu.offsetHeight;
        });
    }
}

// 初始化语言管理器
// 初始化语言管理器 - 确保DOM加载完成
let languageManager;

function initLanguageManager() {
    if (!languageManager) {
        languageManager = new LanguageManager();
        window.languageManager = languageManager;
        window.t = (key) => languageManager.getTranslation(key);
    }
}

// 如果DOM已加载，立即初始化；否则等待DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageManager);
} else {
    // DOM已加载，延迟一点确保所有元素都已渲染
    setTimeout(initLanguageManager, 50);
}