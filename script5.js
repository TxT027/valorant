// 等待DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有地图卡片元素
    const mapCards = document.querySelectorAll('.map-card');

    // 为每个卡片绑定点击事件
    mapCards.forEach(card => {
        card.addEventListener('click', function() {
            // 获取自定义属性中的跳转链接
            const targetHref = this.getAttribute('data-href');
            // 跳转到详情页（新标签页打开，如需当前页打开可去掉target）
            window.open(targetHref, '_blank');
        });
    });
});