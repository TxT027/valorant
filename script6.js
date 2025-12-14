// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 示例：可扩展的交互功能（如图片点击放大、阵容复制等）
    const layoutImg = document.querySelector('.layout-img');
    // 点击布局图弹出提示（可替换为放大逻辑）
    layoutImg.addEventListener('click', function() {
        alert('查看完整布局图');
    });

    // 复制推荐阵容文本功能
    const teamContent = document.querySelector('.team-content');
    teamContent.addEventListener('click', function() {
        navigator.clipboard.writeText(this.textContent)
            .then(() => {
                alert('推荐阵容已复制到剪贴板！');
            })
            .catch(err => {
                console.error('复制失败：', err);
            });
    });
});