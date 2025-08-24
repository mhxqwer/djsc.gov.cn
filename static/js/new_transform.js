var converter = OpenCC.Converter({from: 'cn',to: 'tw'});
var rootNode = document.documentElement;
var defaultLang = document.documentElement.getAttribute('lang');
var FJTLink=document.getElementById("FJTLink");
if(defaultLang != 'zh-CN'){
    document.documentElement.setAttribute('lang','zh-CN');
}
var HTMLConvertHandler = OpenCC.HTMLConverter(converter, rootNode, 'zh-CN', 'zh-CN');
var isFt = 0;
function FtBody(){
	isFt = 1;
	HTMLConvertHandler.convert();
	localStorage.setItem("isFt", isFt);
}
function JtBody(){
	isFt = 0;
	HTMLConvertHandler.restore();
	localStorage.setItem("isFt", isFt);
}



if (FJTLink)
{
	isFt = localStorage.getItem('isFt') || isFt;
	// if(isFt!="1")isFt=isFt
	// with(FJTLink)
	// {
	// 	if(typeof(document.all)!="object") 	//非IE浏览器
	// 	{
	// 		href="javascript:FJTBody()"
	// 	}
	// 	else
	// 	{
	// 		href="#";
	// 		onclick= new Function("FJTBody();return false")
	// 	}
	// }
	if(isFt=="1"){
		setTimeout("FtBody()",50)
	}
}

