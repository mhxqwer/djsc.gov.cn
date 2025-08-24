//链接替换原来的关于协议
$(function () {
        var sctv=document.getElementsByTagName('iframe');
        var sctvab='https://g.sctv.com/';
        var sctvcd='http://g.sctv.com/';
        for (var i = 0; i < sctv.length; i++) {
            var sctvwcm=sctv[i].src;
            var sctvpat = new RegExp("http://g.sctv.com/");
            var scrvres = sctvpat.test(sctvwcm);
            if(scrvres===true){
                var sctvsd=sctvwcm.replace(sctvcd,sctvab);//输出
		sctv[i].src=sctvsd;
            }
        }
		//四川公报
        // var wzycy=$("#wzycy").text();
        // if(wzycy){
        // }else{
        //     var srcArrq = document.getElementsByTagName('p'); //获取这个页面的所有A标签
        //     var abbq='';
        //     const cddq="[##page##]";
        //     for( var i=0; i<srcArrq.length; i++ ){
        //         let hrefsrcq = srcArrq[i].innerText;
        //         let patttq = new RegExp(cddq);
        //         let resulttq = patttq.test(hrefsrcq);
        //         if(resulttq===true){
        //             var sddq=hrefsrcq.replace(cddq,abbq);//输出
        //             srcArrq[i].innerText=sddq;
        //         }
        //     } 
        // }
		//四川公报结束
})
window.onload = function(){
        var slmm=document.getElementsByTagName('iframe');
       
        var abm='https://www.sc.gov.cn:8480/';
        var cdm='http://202.61.88.211:8480/';
        for (var i = 0; i < slmm.length; i++) {
            var wcmm=slmm[i].src;
           
            var patt1 = new RegExp("http://202.61.88.211:8480/");
            var result = patt1.test(wcmm);
          
            if(result===true){
                var sdm=wcmm.replace(cdm,abm);//输出
				slmm[i].src=sdm;
              
           }
     }
}
$(function () {
	    var srcArr = document.getElementsByTagName('img'); //获取这个页面的所有A标签
		var abb='http://www.sc.gov.cn/images/';
        var cdd='http://imgs.sc.gov.cn/';
		for( var i=0; i<srcArr.length; i++ ){
			hrefsrc = srcArr[i].src;
			 var pattt = new RegExp("http://imgs.sc.gov.cn/");
             var resultt = pattt.test(hrefsrc);
             if(resultt===true){
                var sdd=hrefsrc.replace(cdd,abb);//输出
				srcArr[i].src=sdd;
               
            }
			
	}
});

$(function () {
	    var hrefArra = document.getElementsByTagName('a'); //获取这个页面的所有A标签
		var abbA='http://www.sc.gov.cn/zcwj/xxgk/';
                var cddA='http://zcwj.sc.gov.cn/xxgk/';
		for( var i=0; i<hrefArra.length; i++ ){
			hrefA = hrefArra[i].href;
			 var patttA = new RegExp("http://zcwj.sc.gov.cn/xxgk/");
             var resulttA = patttA.test(hrefA);
             if(resulttA===true){
                var sddA=hrefA.replace(cddA,abbA);//输出
				hrefArra[i].href=sddA;
               
            }
			
	}
});

$(function () {
	    var hrefArraimg = document.getElementsByTagName('a'); //获取这个页面的所有A标签
		var abbAimg='http://www.sc.gov.cn/images/';
                var cddAimg='http://imgs.sc.gov.cn/';
		for( var i=0; i<hrefArraimg.length; i++ ){
			hrefAimg = hrefArraimg[i].href;
			var patttAimg = new RegExp("http://imgs.sc.gov.cn/");
             var resulttAimg = patttAimg.test(hrefAimg);
             if(resulttAimg===true){
                var sddAimg=hrefAimg.replace(cddAimg,abbAimg);//输出
				hrefArraimg[i].href=sddAimg;
              
            }
			
	}
});

//隐藏相关附件和文章

$(function () {
    var tblAppendix = document.getElementById("tblAppendix") || null;
    if (tblAppendix == null || tblAppendix.rows.length == 0) {
        var tblAppendixContainer = document.getElementById("tblAppendixContainer");
        tblAppendixContainer.style.display = "none";
    }
    var tblArticleLink = document.getElementById("tblArticleLink") || null;
    if (tblArticleLink == null || tblArticleLink.rows.length == 0) {
        var tblArticleLinkContainer = document.getElementById("tblArticleLinkContainer");
        tblArticleLinkContainer.style.display = "none";
    }
});


$(function () {

　　　　//添加 img
　　　　var img = document.createElement("img");
 
　　　　//设置 img 属性，如 id
　　　　img.setAttribute("id", "newImg");
 
　　　　//设置 img 图片地址
　　　　img.src = "/10462/xhtml/images/phone_sj_fx.jpg";

        img.style="width:0px;height:0px";

        document.body.appendChild(img);



});


$(function () {
window._bd_share_config = {
  "common" : {
   "bdSnsKey" : {},
   "bdText" : "",
   "bdMini" : "2",
   "bdMiniList" : false,
   "bdPic" : "http://www.sc.gov.cn/10462/xhtml/images/phone_sj_fx.jpg",
   "bdStyle" : "0",
   "bdSize" : "20"
  },
  "share" : {}
 };
 with (document)
  0[(getElementsByTagName('head')[0] || body)
    .appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='
    + ~(-new Date() / 36e5)];

});


$(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'apple-touch-icon';
    link.href = '/10462/xhtml/images/szfphone.png';
    document.getElementsByTagName('head')[0].appendChild(link);
	var link2 = document.createElement('link');
    link2.rel = 'manifest';
    link2.href = '/manifest.json';
    document.getElementsByTagName('head')[0].appendChild(link2);
});

//四川公报
    $(function (){
        
    });
	