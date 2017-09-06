var dl=document.querySelector("#dl");
var zh=document.querySelector("#zh");
var tips=document.querySelectorAll(".tip");
var flag=false;
var flag1=false;
var mm=document.querySelector("#mm");
var cs=document.querySelector("#cs");
zh.onblur=function () {
    var val=zh.value;
    var reg=/^\w{6,10}$/;
    if(reg.test(val)){
        flag=true;
        ajax({
            url:"check.php",
            data:{user:zh.value},
            success:function (r) {
                if(r==1) {

                }else if (r==0){
                    tips[0].innerHTML="该用户名已存在";
                    tips[0].style.display='block';
                    flag=false
                }
            }
        })
    }else {
        tips[0].innerHTML="请输入正确的格式";
        tips[0].style.display='block';
        flag=false;
    }
};
zh.onfocus=function () {
    tips[0].style.display='none';
};
cs.onblur=mm.onblur=function () {
    if(cs.value==mm.value){
        flag1=true;
    }else {
        flag1=false;
        tips[2].innerHTML="请保持两次输入相同";
        tips[2].style.display='block';
    }
};
mm.onfocus=cs.onfocus=function () {
    tips[2].style.display='none';
};
dl.onclick=function () {
    if(flag&&flag1){
        ajax({
            url:"submit.php",
            data:{user:zh.value,pass:mm.value},
            success:function (r) {
                if(r==1) {
                    alert("注册成功");
                    location.replace("login.html");
                }
            }
        })

    }else {
        alert("请完善您的个人信息")
    }
};