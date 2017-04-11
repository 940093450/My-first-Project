/**
 * Created by Administrator on 2017/3/29.
 */
window.addEventListener("load",function(){
    var mask=document.querySelector("#mask");
    var login=document.querySelector(".login");
    var weiDengLu=document.querySelectorAll(".weiDengLu");
    var yiDengLu=document.querySelectorAll(".yiDengLu");
    var username=document.querySelector("#username");
    var logout=document.querySelector("#logout");
    var ckx=document.querySelector("#ckx input");
    var txt=document.querySelector("#txt");
    var login_But=document.querySelector("#login_But");


    /////更换头像//////
    var icon=document.querySelector("#icon");
    var btn=document.querySelector("#btn");
    var preview=document.querySelector("#txImg img");
    //点击btn触发上传文件的点击事件
    btn.addEventListener("click",function(){
        icon.click();
    });
    //给上传文件按钮加个change事件
    icon.addEventListener("change",function(){
        var fr=new FileReader;
        fr.readAsDataURL(icon.files[0]);
        //加载成功后
        fr.addEventListener("load",function(){
            //操作头像图片
            var src=this.result;
            preview.src=this.result;
            preview.style.width="80px";
            preview.style.height="80px";
            //将图片路径存到本地 下次登录头像保存
            localStorage.setItem("src",src);
        })
    });
    //console.log(login_But);
    //用Cookie实现7天免登录效果
    var d=new Date();
    //从登录的时间加上7天的时间
    var expires=new Date(d.setDate(d.getDate()+7));

    var imgSrc=localStorage.getItem("src");

    //如果本地有Cookie存的name值的话执行
    if(getCookie("name")){
        for(var i=0;i<weiDengLu.length;i++){
            weiDengLu[i].style.display="none";
            yiDengLu[i].style.display="block";
            if(imgSrc){
                preview.style.width="80px";
                preview.style.height="80px";
                preview.src=imgSrc;
            }
        }
        //用户名就等于上次登录的用户名
        username.innerText=getCookie("name");
    }else {
        //否则需要从新登陆
        for(var j=0;j<weiDengLu.length;j++){
            weiDengLu[j].style.display="block";
            yiDengLu[j].style.display="none";
        }
    }
    //点击登录
    login_But.addEventListener("click",function(){
        //如果勾选7天免登录
        if(ckx.checked){
            //cookie存上一个登入后7天到期的值
            setCookie("name",txt.value,expires)
        }else {
            //如果不勾选 cookie值也存储 但是关掉网页就会删除
            setCookie("name",txt.value)
        }
        //登录后显示输入的用户名
        username.innerText=getCookie("name");
    });
    //点击退出7天免登录 解除
    logout.addEventListener("click",function(){
        removeCookie("name");
    })

});