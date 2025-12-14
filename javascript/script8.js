// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 可选扩展功能：点击属性项复制属性值
    const propItems = document.querySelectorAll('.prop-item');
    propItems.forEach(item => {
        item.addEventListener('click', function() {
            // 提取属性值（去掉标签部分）
            const propValue = this.textContent.replace(this.querySelector('.prop-label').textContent, '').trim();
            // 复制到剪贴板
            navigator.clipboard.writeText(propValue)
                .then(() => {
                    // 临时提示复制成功
                    const oldColor = this.style.color;
                    this.style.color = '#00ff9d';
                    setTimeout(() => {
                        this.style.color = oldColor;
                    }, 1000);
                })
                .catch(err => {
                    console.error('复制失败：', err);
                });
        });
    });

    // 可选：图片点击放大预览（示例）
    const gunImg = document.querySelector('.gun-main-img');
    gunImg.addEventListener('click', function() {
        if (!this.classList.contains('img-enlarge')) {
            this.classList.add('img-enlarge');
            this.style.maxHeight = '80vh';
            this.style.position = 'fixed';
            this.style.top = '50%';
            this.style.left = '50%';
            this.style.transform = 'translate(-50%, -50%)';
            this.style.zIndex = '9999';
            this.style.cursor = 'zoom-out';
        } else {
            this.classList.remove('img-enlarge');
            this.style.maxHeight = '500px';
            this.style.position = 'static';
            this.style.transform = 'none';
            this.style.cursor = 'zoom-in';
        }
    });
});