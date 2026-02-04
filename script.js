// 子导航边框光点：悬浮某子项时光点跳动到该区域
document.querySelectorAll('.product-dropdown').forEach(function (dropdown) {
    dropdown.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            var y = link.offsetTop + link.offsetHeight / 2;
            dropdown.style.setProperty('--spot-y', y + 'px');
            dropdown.classList.add('has-hover');
        });
        link.addEventListener('mouseleave', function () {
            dropdown.classList.remove('has-hover');
        });
    });
});

// 导航菜单切换
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// 点击菜单项后关闭移动端菜单
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    });
});

// 导航高亮 - 当前页面
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = link.getAttribute('href');
        
        // 检查是否是当前页面
        if (linkPath) {
            // 处理相对路径
            if (linkPath.startsWith('../')) {
                const fullPath = new URL(linkPath, window.location.href).pathname;
                if (fullPath === currentPath || (currentPath.includes(linkPath.replace('../', '')) && linkPath !== '../index.html#product')) {
                    link.classList.add('active');
                }
            } else if (linkPath.startsWith('pages/')) {
                if (currentPath.includes(linkPath)) {
                    link.classList.add('active');
                }
            } else if (linkPath.startsWith('#')) {
                // 首页锚点：无 hash 时默认视为首页第一屏，高亮「首页」
                if (currentPath.endsWith('/index.html') || currentPath.endsWith('/') || currentPath === '/') {
                    if (currentHash === linkPath || (!currentHash && linkPath === '#home')) {
                        link.classList.add('active');
                    }
                }
            } else if (linkPath === currentPath || currentPath.endsWith(linkPath)) {
                link.classList.add('active');
            }
        }
    });
}

// 页面加载时高亮当前页面
document.addEventListener('DOMContentLoaded', highlightCurrentPage);
window.addEventListener('hashchange', highlightCurrentPage);

// 平滑滚动：支持从 #product 等点击「首页」滚动到 #home，并更新地址栏
document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        var offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname + href);
        }
        highlightCurrentPage();
    }
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// 滚动动画：首页区块揭示（section 进入视口时添加 .animate-in，由 CSS 做交错动画）
const revealOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in');
    });
}, revealOptions);
document.querySelectorAll('.reveal-section').forEach(function (section) {
    revealObserver.observe(section);
});

// 非首页的卡片单独做滚动揭示（不含 .reveal-section 内的卡片，避免重复）
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
const animateElements = Array.from(document.querySelectorAll('.product-card, .scenario-item, .resource-card, .token-card')).filter(function (el) {
    return !el.closest('.reveal-section');
});
animateElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 背景图片已替换为静态图片，移除动态背景代码

// 语言切换功能已在 languages.js 中实现
// 页面加载时自动应用语言
document.addEventListener('DOMContentLoaded', () => {
    // 确保语言管理器已初始化
    if (window.languageManager) {
        window.languageManager.updateLanguage(window.languageManager.getCurrentLanguage());
    } else {
        // 如果语言管理器还未初始化，等待一下再尝试
        setTimeout(() => {
            if (window.languageManager) {
                window.languageManager.updateLanguage(window.languageManager.getCurrentLanguage());
            }
        }, 100);
    }
});

// 按钮点击效果
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // 创建涟漪效果
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 添加涟漪效果样式
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// 数字计数动画
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 添加加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // 初始化所有功能
    console.log('PowerVerse Chain 网站已加载');
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('页面错误:', e.error);
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('页面加载时间:', pageLoadTime + 'ms');
        }, 0);
    });
}