//滚动时候为技能卡片添加渐显动画
window.addEventListener('scroll',()=>{
    const skillCards=document.querySelectorAll('.skill-card');
    skillCards.forEach(card=>{
        const cardTop=card.getBoundingClientRect().top;
        const windowHeight=window.innerHeight;
        //当卡片进入视口80%高度时候触发动画
        if(cardTop<windowHeight*0.8){
            card.style.opacity='1';
            card.style.transform='translateY(0)';
        }
    });
});
//页面加载触发一次（避免首屏卡片无动画）
window.addEventListener('load',()=>{
    window.dispatchEvent(new Event('scroll'));
});