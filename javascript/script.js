//获取元素
const accountInput=document.querySelector('input[type="text"]');
const pwdInput=document.querySelector('input[type="password"]');
const loginBtn=document.querySelector('.log-btn');
//监听输入，判断是否激活按钮
function checkInput(){
    if(accountInput.value&&pwdInput.value){
        loginBtn.style.background="#e63946";//红色激活 
        loginBtn.style.cursor="pointer";// 鼠标悬浮时显示“手型”（可点击）
        loginBtn.removeAttribute("disabled",true);// 移除disabled属性，按钮可点击

    }else{
        loginBtn.style.background="#666";//灰色置灰
        loginBtn.style.cursor="not-allowed";// 鼠标悬浮时显示“禁止符号”（不可点击）
        loginBtn.setAttribute("disabled",true); // 添加disabled属性，按钮禁用

    }
}
accountInput.addEventListener('input',checkInput);//前者是发生的事件，后者是事件发生时执行的函数
pwdInput.addEventListener('input',checkInput);