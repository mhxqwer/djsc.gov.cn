if($(location).attr("href").indexOf("?version=zzzh")!=-1){
	//长者模式
    
$(".toolbarSwitchli,.toolbarElderlySwitchli").empty();
// 头部id
    $("#toolbarSwitch").html("无障碍")
    $("#toolbarElderlySwitch").html("长者助手")
   $("#toolbarSwitch").appendTo(".toolbarSwitchli")
   $("#toolbarElderlySwitch").appendTo(".toolbarElderlySwitchli")
   // $("#StranLinkF").appendTo(".StranLinkFli")
   // $("#StranLinkJ").appendTo(".StranLinkJli")
   $("#toolbarSwitch").appendTo(".toolbarSwitchli")
   // 展示页面
	//$("#szfcontentwrap2022").css({"display":"none"});数字人
	$("zzzqcommonhead2022").show();
	$(".zzzqcontentwrap2022").show();
    $("#zzzqbody .newfootbox").show();
  $("#szfcontentwrap2022 #cmsArticleContent video").remove();
    // var zzzqobj = document.getElementById("cmsArticlezzzqContent");
    // setFontSize(zzzqobj,'26px')
    $("#szfcontentwrap2022 #Canvas").attr("id","Canvas2");
    $("#szfcontentwrap2022 #qr_container").attr("id","qr_container2");
    $("#szfcontentwrap2022 #div_div").attr("id","div_div2");
  /* $("#toolbarSwitch").attr("id","toolbarSwitchli")
   $("#toolbarElderlySwitch").attr("id","toolbarElderlySwitchli")
   $("#StranLinkF").attr("id","StranLinkFli")
   $("#StranLinkJ").attr("id","StranLinkJli")
   $("#toolbarSwitch").attr("id","toolbarSwitchli")*/
   $.each($("#xqygb22>*"), function (indexInArray, valueOfElement) { 
    $(this).appendTo(".zzzqjdbox")
});
	
	
}else{
    $(".szfcommonhead2022").show();
	$(".szfcontentwrap2022").show();
	//$("#szfcontentwrap2022").css({"opacity":"1"});数字人
    $("#zzzqbody .newfootbox").show();
  $("#zzzqcontentwrap2022 #cmsArticlezzzqContent video").remove();

	
}

function setFontSize(contentObj,fontSize) {
    if (!!contentObj) {
        if (contentObj.children.length > 0) {
            for (var i = 0; i < contentObj.children.length; i++) {
                var curObj = contentObj.children[i];
                curObj.style.fontSize = fontSize;
                setFontSize(curObj, fontSize);
            }
        } else {
            if (!!contentObj.innerText) {
                contentObj.style.fontSize = fontSize;
contentObj.style.cssText ='line-height:36px';
contentObj.style.cssText ='text-indent:2em';
            }
        }
    }
}