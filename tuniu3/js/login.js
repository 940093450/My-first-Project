/**
 * Created by Administrator on 2017/3/18.
 */
$(function(){
    $("#txt").focus(function(){
        $("#txt").css({"border":"1px solid #43B413"});
        $("#error").css({"display":"none"});
    }).blur(function(){
        $("#txt").css({"border":"1px solid #dddddd"})
    });
    $("#pwd").focus(function(){
        $("#pwd").css({"border":"1px solid #43B413"});
        $("#error").css({"display":"none"});
    }).blur(function(){
        $("#pwd").css({"border":"1px solid #dddddd"})
    });

    $(".login dl dd:eq(4)").click(function(){
        var txtVal=$("#txt").val();
        var pwdVal=$("#pwd").val();
        if(txtVal){
            //$("#error").html("请输入正确的手机号/会员名/昵称/邮箱");
            $("#error").css({"display":"none"});
            if(pwdVal){
                $(".login").css({"display":"none"});
                $("#mask").css({"display":"none"});
                $(".weiDengLu").css({"display":"none"});
                $(".yiDengLu").css({"display":"block"});
                //$("#yongHu span:eq(0)").html("苏凉丶");
                return true
            }else {
                $("#error span").html("请输入正确的密码");
                $("#error").css({"display":"block"});
                $("#pwd").css({"border":"1px solid red"})
            }
        }else {
            $("#error span").html("请输入正确的手机号/会员名/昵称/邮箱");
            $("#error").css({"display":"block"});
            $("#txt").css({"border":"1px solid red"})
        }
    });
    $("#login").click(function(){
        $(".login").css({"display":"block"});
        $("#mask").css({"display":"block"});
    });
    $("#vip span").click(function(){
        $(".login").css({"display":"none"});
        $("#mask").css({"display":"none"});
    });
    $("#zhuX span").click(function(){
        $(".weiDengLu").css({"display":"block"});
        $(".yiDengLu").css({"display":"none"});
        $(".lesGo").css({"display":"none"});
        $("#name input").val("");
        $("#reg_txt input").val("");
        $("#reg_pwd input").val("");
        $("#reg_pwdSure input").val("");
        $("#reg_yanZ input").val("");
        i=5;
        $(".lesGo p").html(i+"秒钟后将自动登录···");
    })
});