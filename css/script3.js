//获取所有特工卡片
const cards=document.querySelectorAll('.character-card');
//给每个卡片添加事点击事件
cards.onbeforematch(card=>{
    card.addEventListener('click',()=>{
        //获取卡片名称
        const cardName=card.querySelector('.card-name').textContent;
        //弹出提示
        alert(`你选择了特工：${cardName}`);
    })
})