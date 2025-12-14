//轮番数据图
const carouselImgs=[
    "valorant-carousel1.jpg",
    "valorant-carousel2.jpg",
    "valorant-carousel3.jpg",
    "valorant-carousel4.jpg",
   " valorant-carousel5.jpg"
];

const imgElement=document.querySelector('.carousel-img img');

const indicators=document.querySelectorAll('.carousel-indicators span');
const prevBtn=document.querySelector('.carousel-prev');
const nextBtn=document.querySelector('.carousel-next');
let currentIndex=0;
// const imgCount=imgs.length;//自动识别图片数量（5张）
//切换
//轮番切换图
function changeCarousel(index){
    // //隐藏所有图片并移除指示器激活状态
    // imgs.forEach(img=>img.classList.remove('active'));
    // indicators.forEach(span=>span.classList.remove('active'));
    // //显示当前图片和指示器

    // imgs[index].classList.add('active');
    // indicators[index].classList.add('active');
   currentIndex=index;
   imgElement.src=carouselImgs[currentIndex];
//参数是几就是第几张图-1
//更新指示器
indicators.forEach((item,i)=> {
    item.classList.toggle('active',i===currentIndex);
    //当前小圆点高亮
    
      });
}
//下一张
nextBtn.addEventListener('click',()=>{
    currentIndex=(currentIndex+1)%carouselImgs.length;//取余，这样子在大于5时就循环了
    changeCarousel(currentIndex);
});
//上一张
prevBtn.addEventListener('click',()=>{
    currentIndex=(currentIndex-1+carouselImgs.lentgh)%carouselImgs.length;
    //这样子就是正数
    changeCarousel(currentIndex);
})
//指示器点击
indicators.forEach((item,i)=>{//forEach是遍历，i是从零开始的
    item.addEventListener('click',()=>{
        changeCarousel(i);
    });
});
//自动轮播（3秒切换）
setInterval(()=>{
    currentIndex=(currentIndex+1)%carouselImgs.length;
    changeCarousel(currentIndex);
},3000);