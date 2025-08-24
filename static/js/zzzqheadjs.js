var headsrc=document.getElementById('zzzqheadjs').getAttributeNode('src').value.split('js/')[0];
var url=$(location).attr("href");
var headstr='';
if($(location).attr("href").indexOf("?version=zzzh")!=-1){
	console.log(2)
	$("body").addClass("zzzqbody");
    //长者模式
	headstr='\
	<meta name="renderer" content="webkit"/>\
	<meta name="force-rendering" content="webkit"/>\
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\
	<meta name="viewport" content="" />\
	<meta name="keywords" content="">\
	<meta name="description" content="">\
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">\
	<link class="zzzqcss" href="'+headsrc+'css/zzzq_common.css" rel="stylesheet" type="text/css">\
	<script id="jqload" src="'+headsrc+'js/jquery.min.js" type="text/javascript" charset="utf-8"></script>\
	<script id="indexclick" src="'+headsrc+'js/traditional123.js" type="text/javascript" charset="utf-8"></script>\
	<script id="zzzqcommonjs" src="'+headsrc+'js/zzzq_common.js" type="text/javascript" charset="utf-8"></script>\
	';
	document.write(headstr);
}


if($(location).attr("href").indexOf("?version=zzzh")!=-1){
	//长者模式
	$("body").addClass("zzzqbody");
	$("body").attr("id","zzzqbody");

	
}else{
	$("body").addClass("szfoldbody");
	$("body").attr("id","szfoldbody")
}

// headstr='\
// <!--[if lt IE 9]>\
//     <script src="'+headsrc+'js/html5shiv.min.js"></script>\
//     <script src="'+headsrc+'js/respond.min.js"></script>\
// <![endif]-->\
// <!-- saved from url=(0014)about:internet -->\
// ';






// function loadJs(fun){ 
//     var script = document.getElementById('jqload'); 
//     if(typeof fun === "function"){ 
// 		if(script.onload===null){
// 			script.onload=function(){
// 				fun(); 
// 			}
// 		}else{
// 			script.onreadystatechange = function() { 
// 				var r = script.readyState; 
// 				if (r === 'loaded' || r === 'complete') { 
// 					script.onreadystatechange = null; 
// 					fun(); 
// 				} 
// 			};
// 		}
		
//     } 
// };
// loadJs(function(){
// 	$(function(){$(document.body).append(headstr);});
// });

