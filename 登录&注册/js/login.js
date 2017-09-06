var zc=document.querySelector("#zc");
var dl=document.querySelector("#dl");
var zh=document.querySelector("#zh");
var mm=document.querySelector("#mm");
zc.onclick=function () {
    location.replace("zhuce.html")
};
dl.onclick=function () {
    ajax({
        url:"checkk.php",
        data:{user:zh.value,pass:mm.value},
        success:function (r) {
//                alert(r);

            if(r==1){
                alert("密码错误")
            }else if(r==2){
                alert("登录成功");
                document.cookie="user="+zh.value;
                location.replace("shouye.html")
            }else if(r==0){
                alert("账户不存在")
            }
        }
    })
}