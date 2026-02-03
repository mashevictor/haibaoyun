import requests
import time
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import json

# 测试网站URL
base_url = "http://localhost:8000"

# 存储性能测试结果
performance_results = {
    "total_test_time": 0,
    "pages": {}
}

# 测试页面加载时间
def test_page_load_time(url, page_name):
    print(f"测试页面: {page_name}")
    print(f"URL: {url}")
    
    # 开始时间
    start_time = time.time()
    
    # 发送GET请求
    response = requests.get(url)
    
    # 结束时间
    end_time = time.time()
    
    # 计算加载时间
    load_time = end_time - start_time
    
    # 解析页面内容
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # 统计页面大小
    page_size = len(response.content) / 1024  # KB
    
    # 统计资源数量
    resources = {
        "images": len(soup.find_all('img')),
        "scripts": len(soup.find_all('script')),
        "stylesheets": len(soup.find_all('link', rel='stylesheet')),
        "links": len(soup.find_all('a'))
    }
    
    # 提取所有图片URL
    images = []
    for img in soup.find_all('img'):
        img_url = img.get('src')
        if img_url:
            images.append(urljoin(url, img_url))
    
    # 测试图片加载时间
    image_load_times = []
    for img_url in images[:5]:  # 只测试前5张图片
        try:
            img_start = time.time()
            img_response = requests.get(img_url)
            img_end = time.time()
            image_load_times.append({
                "url": img_url,
                "load_time": img_end - img_start,
                "size": len(img_response.content) / 1024  # KB
            })
        except:
            pass
    
    # 存储结果
    result = {
        "load_time": load_time,
        "status_code": response.status_code,
        "page_size": page_size,
        "resources": resources,
        "image_load_times": image_load_times
    }
    
    performance_results["pages"][page_name] = result
    
    print(f"加载时间: {load_time:.2f} 秒")
    print(f"页面大小: {page_size:.2f} KB")
    print(f"状态码: {response.status_code}")
    print(f"资源数量: {resources}")
    print(f"测试的图片数量: {len(image_load_times)}")
    print("-" * 50)
    
    return result

# 测试主页面
print("开始测试网站性能...")
print("=" * 50)

test_start_time = time.time()

# 测试首页
test_page_load_time(base_url, "首页")

# 测试几个重要页面
important_pages = [
    ("/pages/about.html", "关于我们"),
    ("/pages/product.html", "产品页面"),
    ("/pages/scenarios.html", "应用场景"),
    ("/pages/developer.html", "开发者中心")
]

for path, name in important_pages:
    url = urljoin(base_url, path)
    test_page_load_time(url, name)

test_end_time = time.time()
performance_results["total_test_time"] = test_end_time - test_start_time

# 分析性能瓶颈
def analyze_performance():
    print("\n性能分析报告")
    print("=" * 50)
    
    # 计算平均加载时间
    total_load_time = 0
    total_pages = len(performance_results["pages"])
    
    for page, data in performance_results["pages"].items():
        total_load_time += data["load_time"]
    
    average_load_time = total_load_time / total_pages if total_pages > 0 else 0
    
    print(f"总测试时间: {performance_results['total_test_time']:.2f} 秒")
    print(f"测试页面数量: {total_pages}")
    print(f"平均页面加载时间: {average_load_time:.2f} 秒")
    print("\n页面加载时间排行:")
    
    # 按加载时间排序
    sorted_pages = sorted(performance_results["pages"].items(), 
                        key=lambda x: x[1]["load_time"], reverse=True)
    
    for page, data in sorted_pages:
        print(f"{page}: {data['load_time']:.2f} 秒 ({data['page_size']:.2f} KB)")
    
    print("\n性能瓶颈分析:")
    
    # 找出加载时间最长的页面
    slowest_page = sorted_pages[0]
    print(f"加载最慢的页面: {slowest_page[0]} ({slowest_page[1]['load_time']:.2f} 秒)")
    
    # 分析图片加载时间
    total_image_time = 0
    total_images = 0
    
    for page, data in performance_results["pages"].items():
        for img in data["image_load_times"]:
            total_image_time += img["load_time"]
            total_images += 1
    
    if total_images > 0:
        average_image_time = total_image_time / total_images
        print(f"平均图片加载时间: {average_image_time:.2f} 秒")
    
    print("\n优化建议:")
    print("1. 压缩图片资源")
    print("2. 最小化CSS和JavaScript文件")
    print("3. 启用浏览器缓存")
    print("4. 优化HTML结构，减少DOM元素数量")
    print("5. 考虑使用CDN加速静态资源")
    print("6. 延迟加载非关键资源")
    print("7. 压缩响应内容 (gzip)")

# 生成性能报告
analyze_performance()

# 保存测试结果
with open('performance_results.json', 'w', encoding='utf-8') as f:
    json.dump(performance_results, f, ensure_ascii=False, indent=2)

print("\n性能测试结果已保存到 performance_results.json")
print("测试完成!")
