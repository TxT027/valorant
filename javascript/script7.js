// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有枪械卡片
    const gunCards = document.querySelectorAll('.gun-card');
    // 获取头部元素
    const header = document.querySelector('.site-header');
  
    // 为每个卡片添加交互事件
    gunCards.forEach(card => {
      // 点击跳转详情页
      card.addEventListener('click', function() {
        const gunId = this.getAttribute('data-gun-id');
        // 模拟跳转，实际项目替换为真实详情页地址
        window.location.href = `gun-detail.html?id=${gunId}`;
      });
  
      // 鼠标悬停上浮效果
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
  
      // 鼠标离开恢复原位
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  
    // 滚动时头部透明度变化
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(30, 41, 59, 0.95)';
      } else {
        header.style.backgroundColor = 'rgba(30, 41, 59, 1)';
      }
    });
  });