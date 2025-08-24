/*详情收藏浏览模块*/
// console.log($('#manuscriptId'))
// var manuscriptId = $('#manuscriptId').html().trim();
var manuscriptId=$(location).attr("href");   
manuscriptId= manuscriptId.split("/").pop().split(".")[0];
var memberId = getcookie("uid");
var type = "2";

var url = "";

var isSc = false;

function alert(e,ts) {
    $("body").append('<div class="alertbox" id="alertbox">' +
        '<div class="alertclose">×</div>' +
        ' <div class="alerttit">省政府门户网站提醒您：</div>' +
        '<div class="alertnr">' + e + '</div>' +
        '<button class="alerbt">'+ts+'</button>' +
        ' </div>' +
        '<div class="alertyinying"></div>')
    $(".alertclose").click(function () {
        $(".alertbox").remove();
        $(".alertyinying").remove();
    })
    $(".alerbt").click(function(){
        window.open('http://www.sc.gov.cn/usercenter','_blank')
    })

}
if(memberId){
    checkSc();

    detailsc();
}

$("#sc").click(function(){
    if(memberId){
        if(isSc){
            cancelSc();
        }else{
            type = "1";
            detailsc();
        }
    }else{
        window.alert = alert;
        alert('请完成个人中心登录后进行相关操作。','立即登录')
    }
})

//浏览,收藏
var scsrc1="/10462/xhtml/images/consc.png"
var scsrc2="/10462/xhtml/images/conqxsc.png"

function detailsc(){
    var postData = {
        "manuscriptId":manuscriptId,
        "memberId":memberId,
        "type":type,
        "publishedTime":"",
        "linkurl":""
    };
    $.ajax({
        url:url + "/account-center/a/sys/sysMember/saveRecords",
        type:'post',
        data:postData,
         headers: {
            'token': getCookie('token')
          },
        dataType:'json',
        // contentType:'application/json',
        success:function(res){
            if(res.msg == "保存成功！"){
                if(postData.type == "1"){
                    isSc = true;
                    $("#sc img").attr("title","取消收藏");
                    $("#sc img").attr("src",scsrc1)
                    alert("收藏成功！",'立即查看');
                }
            }
        }
    })
}

function cancelSc(){
    var postData = {
        "manuscriptId":manuscriptId,
        "memberId":memberId,
        "type":"1"
    };
    $.ajax({
        url:url + "/account-center/a/sys/sysMember/updataRecordsByuserId",
        type:'post',
        data:postData,
         headers: {
            'token': getCookie('token')
          },
        dataType:'json',
        // contentType:'application/json',
        success:function(res){
            if(res.msg == "取消操作成功！"){
                isSc = false;
                //前台订阅样式修改
                //。。。
                $("#sc img").attr("title","收藏");
                 $("#sc img").attr("src",scsrc2)
                alert(res.msg,'立即查看');
            }
        }
    })
}

function checkSc(){
    var postData = {
        "manuscriptId":manuscriptId,
        "memberId":memberId,
        "type":"1"
    };
    $.ajax({
        url:url + "/account-center/a/sys/sysMember/qryRecordsByuserId",
        type:'post',
        data:postData,
         headers: {
            'token': getCookie('token')
          },
        dataType:'json',
        // contentType:'application/json',
        success:function(res){
            if(res.msg == "已经收藏过！"){
                isSc = true;
                //前台收藏样式修改
                //。。。
                $("#sc img").attr("title","取消收藏");
                 $("#sc img").attr("src",scsrc1)
                 $("#sc p").html("取消收藏")
            }
        }
    })
}

/*详情收藏浏览模块*/


function getcookie(name){  
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));  
    if(arr != null){  
        return (arr[2]);  
    }else{  
        return "";  
    }  
}