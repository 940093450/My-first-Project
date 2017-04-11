/**
 * Created by admin on 2017/3/12.
 */
function qc(){
    for (var j=0;j<leftLis.length;j++){
        leftLis[j].className="";
    }
}
function clean(){
    for(var j=0;j<lis.length;j++){
        lis[j].className="";
    }
}


//给需要的元素加个鼠标事件
// 事件的功能是让自动轮播停止且
// 给两侧滑动按键加上不透明度 不透明度自定义
function block(element1,element2,element3,l,r){
    return element1.addEventListener("mouseover",function(){
        //clearInterval(scroll);
        element2.style.opacity=l;
        element3.style.opacity=r;
    });
}
//给需要的元素加个鼠标移开事件
// 事件的功能是让自动轮播继续且
//两侧滑动按键全透明
function none(element){
    return element.addEventListener("mouseout",function(){
        //scroll=setInterval(aa,3000);//鼠标移开继续执行自动轮播
        left.style.opacity=0;
        right.style.opacity=0;
    })
}

/*
 * 设置cookie
 * {string}_name:cookie
 *
 *
 * */
function setCookie(_name,_value,_expires,_path,_domain,_secure){
    var cookieText=_name+"="+_value;
    if (_expires instanceof Date){
        cookieText+=";expires="+_expires;
    }
    if (_path){
        cookieText+=";path="+_path;
    }
    if (_domain){
        cookieText+=";domain="+_domain
    }
    if (_secure){
        cookieText+=";secure"
    }
    document.cookie=cookieText;
    //return cookieText;
}
/**
 * 获取cookie
 * */
function getCookie(_name){
    _name+="=";
    var str=document.cookie;
    var strStart=str.indexOf(_name);
    var strEnd=str.indexOf(";",strStart);
    if (strEnd==-1){
        strEnd=str.length;
    }
    return decodeURI(str.substring(strStart+_name.length,strEnd));
}
function removeCookie(_name){
    document.cookie=_name+"=;expires="+new Date(0);
}
//手机号验证
function call_validate(content){
    var pattern=/(^(1)([3-5]|[7-8])(\d{9})$)/;
    if (content){
        if(!pattern.test(content)){
            return false
        }
    }
    return true
}