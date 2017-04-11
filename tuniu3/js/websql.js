/**
 * Created by Administrator on 2017/3/30.
 */
window.addEventListener("load",function(){
    var name=document.querySelector("#name input");
    var name_ts=document.querySelector("#name_ts");
    var mobile=document.querySelector("#reg_txt input");
    var mobile_ts=document.querySelector("#mobile_ts");
    var reg_zc=document.querySelector("#reg_Zc button");
    name.addEventListener("keyup",function(){
        name_ts.style.opacity=1;
        if (name.value!=0){
            name_ts.innerHTML="可以注册";
            name_ts.style.background="url('../tuniu2/regimg/4.png') 0 1px no-repeat";
        }else {
            name_ts.innerHTML="用户名不能为空";
            name_ts.style.background="url('../tuniu2/login/3.png') 0 1px no-repeat";
            reg_zc.style.background="#666666";
            reg_zc.disabled =true;
        }
    });
    mobile.addEventListener("keyup",function(){
        mobile_ts.style.opacity=1;
        if (call_validate(mobile.value)&&mobile.value!=0){
            mobile_ts.innerHTML="可以注册";
            mobile_ts.style.background="url('../tuniu2/regimg/4.png') 0 1px no-repeat";

        }else {
            mobile_ts.innerHTML="手机格式不正确";
            mobile_ts.style.background="url('../tuniu2/login/3.png') 0 1px no-repeat";
            //name_ts.style.background="red";
            reg_zc.style.background="#666666";
            reg_zc.disabled =true;
        }
    });



    //创建一个数据库
    var db=openDatabase("member","1.0","websql",2*1024*1024,function(){
        console.log("创建数据库成功")
    });
    reg_zc.addEventListener("click",function(){
        db.transaction(function(tx){
            //在数据库中创建表username和mobile
            tx.executeSql("create table if not exists member(id integer primary key asc,username text,mobile text)");
            //把提交的用户名和手机号通过sql语句，添加到member表中
            tx.executeSql("insert into member(username,mobile)values('"+name.value+"','"+mobile.value+"')");
        });
    });
    db.transaction(function(tx){
        //从表中查找对应的值
        tx.executeSql("select * from member order by id desc",[],function(tx,results){
            //每次输入提示用户 用户名是否已存在
            name.addEventListener("keyup",function(){
                name_ts.style.opacity=1;
                //用一个循环把用户输入的带到数据库中对应每一条数据
                for(var i=0;i<results.rows.length;i++){
                    //如果有相同的 则提示用户名已存在 并且跳出循环不再执行
                    if (name.value==results.rows[i].username){
                        name_ts.innerHTML="用户名已存在";
                        name_ts.style.background="url('../tuniu2/login/3.png') 0 1px no-repeat";
                        break;
                    }else {
                        //如果没有一样的结果 则提示用户名可用
                        name_ts.innerHTML="用户名可用";
                        name_ts.style.background="url('../tuniu2/regimg/4.png') 0 1px no-repeat";
                    }
                }

            });
            mobile.addEventListener("keyup",function(){
                mobile_ts.style.opacity=1;
                if (call_validate(mobile.value)&&mobile.value!=0){
                    for(var i=0;i<results.rows.length;i++){
                        if (mobile.value==results.rows[i].mobile){
                            mobile_ts.innerHTML="该手机号已注册";
                            mobile_ts.style.background="url('../tuniu2/login/3.png') 0 1px no-repeat";
                            //name_ts.style.background="red";
                            reg_zc.style.background="#666666";
                            reg_zc.disabled =true;
                            break;
                        }else {
                            mobile_ts.innerHTML="可以注册";
                            mobile_ts.style.background="url('../tuniu2/regimg/4.png') 0 1px no-repeat";
                        }
                    }
                }else {
                    //console.log(mobile.value);
                    //console.log(results.rows[i].username);
                    mobile_ts.innerHTML="手机格式不正确";
                    mobile_ts.style.background="url('../tuniu2/login/3.png') 0 1px no-repeat";
                    //name_ts.style.background="red";
                    reg_zc.style.background="#666666";
                    reg_zc.disabled =true;
                }

            })
        })

    });

    $("#reg_yanZ input,#name input,#reg_txt input,#reg_pwd input,#reg_pwdSure input").keyup(function(){
        var nameVal=$.trim($("#name input").val());
        var texVal=$.trim($("#reg_txt input").val());
        var pwdVal=$.trim($("#reg_pwd input").val());
        var sureVal=$.trim($("#reg_pwdSure input").val());
        var yzVal=$.trim($("#reg_yanZ input").val());
        var name_tsLen=$("#name_ts").html().length;
        var mobile_tsLen=$("#mobile_ts").html().length;
        //var name_ts=$("#name_ts").html();
        //console.log($("#name_ts").html().length);
        if(nameVal&&texVal&&pwdVal&&sureVal&&yzVal&&name_tsLen!=6&&mobile_tsLen!=7){
            if(pwdVal==sureVal){
                $("#reg_Zc button").css({"background":"#43B413"});
                $("#reg_Zc button").attr('disabled',false);
            }else {
                $("#reg_Zc button").css({"background":"#666666"}).attr('disabled',true)
            }
        }else {
            $("#reg_Zc button").css({"background":"#666666"}).attr('disabled',true)
        }
        //$("#reg_Zc button").css({"background":"#43B413"}).disabled(false)
    });



});