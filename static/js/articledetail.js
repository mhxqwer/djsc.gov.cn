// if($(location).attr("href").indexOf("/2021/11/8/92ca3c09d119477ead2b48588b70b102")!=-1){
//     window.open("http://www.sc.gov.cn/10462/zxftzb/Default2013.shtml","_self")
//   }

/*$.each($("#cmsArticleContent ucapcontent img"), function (indexInArray, valueOfElement) { 
  $(this).parents("p").css({"text-indent":"0px"});
});*/



function changefs(fsize) {
    var obj = document.getElementById("cmsArticleContent");
    var fontSizeStr = fsize + "px";
    setFontSize(obj, fontSizeStr);
}

//eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[02-9a-o]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('d send(){2 3,4,5,6;6=e;3="推荐新闻";4=9.a("7");5=9.a("5");b(!f(5.g)){6=h;alert(\'您输入的Email无效或者为空！\');c}b(6){2 i="四川省人民政府网站推荐新闻";2 j="您好!";2 k="您的朋友向您推荐四川省人民政府网站新闻。%0%0文章标题：%0";2 7=9.a("7").innerText;2 l="“"+7+"”%0%0链接网址：%0";2 m=this.n;4=j+"%0%0"+k+"%0"+l+"%0"+m+"%0";3=i;window.n.href="mailto:"+5.g+"?3="+3+"&amp;4="+4}}d f(8){b((8=="")||(8.o(\'@\')==-1)||(8.o(\'.\')==-1))c h;c e}',[],25,'0A||var|subject|body|email|validity|doctitle|address|document|getElementById|if|return|function|true|check_email|value|false|str0|str1|str2|str3|str4|location|indexOf'.split('|'),0,{}));
function send() {
    var email = document.getElementById("email").value;
    if (email.indexOf("@") < 1) {
        alert("邮件地址错误！");
        return;
    }
    window.location.href = "mailto:" + email + "?subject=" + document.getElementById("cmsArticleTitle").innerText;
}
//隐藏相关附件和文章
function HideTable() {
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
            }
        }
    }
}
var bigfsize=16;
function changefsbig(){
    var thisbigsize = $("#cmsArticleContent *").css("font-size");
    thisbigsize=thisbigsize||'16px';
    thisbigsize=thisbigsize.replace("px",'');
  if(thisbigsize<16){
    bigfsize=14;
  }
  bigfsize+=2;
  var obj = document.getElementById("cmsArticleContent");
  var fontSizeStr = bigfsize + "px";
  setFontSize(obj, fontSizeStr);
  if(bigfsize>=22){
      bigfsize=22
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
//title去除<br>标签
$(function () {
	var title = $('title').html();
	
	title = title.replace(/&lt;br&gt;/g,'');
	
	$('title').html(title);
});


//相关链接屏蔽的栏目
$(function(){
	var xglilen=$("#tblArticleLink .xgli").length;
	var sum=0;
    $.each($("#tblArticleLink .xgli"),function(index,val){
           var st=$(this).text();
             if(st.indexOf('1644c24033174b128cc18025b8cb722e')!==-1){
                 $(this).hide();
                 sum=sum+1;
             }
             if(xglilen==sum){
                var tblArticleLinkContainer = document.getElementById("tblArticleLinkContainer");
                   tblArticleLinkContainer.style.display = "none";
            }
         })
        
     })


//工具栏漂浮
$(function(){
    if($(location).attr("href").indexOf("79597717df964e74982dec14b8f8eff0")!=-1){
        var readingtit1=$("#articlecontent>h2").text()||'';
        var readingtit2='<div class="readingbox"><div class="container"><span class="span1">正在阅读：</span><span class="span2">'+readingtit1+'</span></div></div>'
        $("body").append(readingtit2);
        $(window).on('scroll',function(){
            var w=$(document).scrollTop();
            // var hw=$(".head").height()+$(".ssboxtop").height()
            // if(w>hw){
            if(w>0){
                $(".readingbox").show();
            }else{
                $(".readingbox").hide();
            }
    
        })
    }
    
    
})

$(function(){
	$('p').each(function(index, item){
		if($(item).text().indexOf('附件')!= -1){
			console.log($(item).text())
			$(item).css("text-justify",'auto')
		}
	})
})