// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取轮播图核心元素
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    // 轮播图配置
    const slideCount = slides.length; // 图片数量
    let currentIndex = 0; // 当前显示的图片索引
    const autoPlayInterval = 3000; // 自动轮播间隔（3秒）
    let autoPlayTimer; // 自动轮播定时器
    
    // 1. 生成指示器小圆点
    function createIndicators() {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            // 初始第一个圆点为激活态
            if (index === 0) dot.classList.add('active');
            // 点击圆点切换对应图片
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            indicatorsContainer.appendChild(dot);
        });
    }
    
    // 2. 切换到指定索引的图片
    function goToSlide(index) {
        // 边界处理（循环）
        if (index < 0) {
            currentIndex = slideCount - 1;
        } else if (index >= slideCount) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        
        // 计算并设置滚动距离
        const slideWidth = slides[0].offsetWidth;
        carouselWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // 更新指示器激活态
        updateIndicators();
    }
    
    // 3. 更新指示器激活状态
    function updateIndicators() {
        const dots = document.querySelectorAll('.indicator-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // 4. 自动轮播函数
    function startAutoPlay() {
        autoPlayTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, autoPlayInterval);
    }
    
    // 5. 暂停自动轮播（鼠标悬停时）
    function pauseAutoPlay() {
        clearInterval(autoPlayTimer);
    }
    
    // 初始化
    function initCarousel() {
        if (slideCount <= 1) {
            // 只有1张图时隐藏按钮和指示器
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            indicatorsContainer.style.display = 'none';
            return;
        }
        
        // 创建指示器
        createIndicators();
        
        // 绑定按钮点击事件
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });
        
        // 鼠标悬停轮播图时暂停自动播放，离开后恢复
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', pauseAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
        
        // 启动自动轮播
        startAutoPlay();
        
        // 窗口大小变化时重新计算轮播宽度（适配响应式）
        window.addEventListener('resize', () => {
            goToSlide(currentIndex); // 重新定位当前图片
        });
    }
    
    // 执行初始化
    initCarousel();
});