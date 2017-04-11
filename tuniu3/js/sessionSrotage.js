/**
 * Created by Administrator on 2017/3/28.
 */
window.addEventListener("load",function(){
    var login_But=document.querySelector("#login_But");
    var mask=document.querySelector("#mask");
    var login=document.querySelector(".login");
    var weiDengLu=document.querySelectorAll(".weiDengLu");
    var yiDengLu=document.querySelectorAll(".yiDengLu");
    var username=document.querySelector("#username");
    var logout=document.querySelector("#logout");
    var txt=document.querySelector("#txt");


    //  先判断
    if(sessionStorage.getItem("username")){
        for(var i=0;i<weiDengLu.length;i++){
            weiDengLu[i].style.display="none";
            yiDengLu[i].style.display="block";
        }
        username.innerText=sessionStorage.getItem("username");
    }else {
        for(var j=0;j<weiDengLu.length;j++){
            weiDengLu[j].style.display="block";
            yiDengLu[j].style.display="none";
        }
    }
    login_But.addEventListener("click",function(){
        //console.log(txt.value);
        /*mask.style.display="none";
        login.style.display="none";*/
        var name=txt.value;
        sessionStorage.setItem("username",name);
        username.innerText=name;
    });
    logout.addEventListener("click",function(){
        sessionStorage.removeItem("username");
        for(var j=0;j<weiDengLu.length;j++){
            weiDengLu[j].style.display="block";
            yiDengLu[j].style.display="none";
        }
    })

});