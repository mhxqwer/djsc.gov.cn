 var esdGetParentsUntilArr = function( elem, until ) { 
 	var matched = [], 
 		truncate = until !== undefined; 
 	while ( ( elem = elem['parentNode'] ) && elem.nodeType !== 9 ) { 
 		if ( elem.nodeType === 1 ) { 
 			if ( truncate && elem.tagName===until ) { 
 				matched.push( elem ); 
 				break; 
 			} 
 			matched.push( elem ); 
 		} 
 	} 
 	return matched; 
 }; 
 var jumpIndexArray = [9,10,32]; 
 var jumpIndex = function(num){ 
 	var flag = false; 
 	for(var i=0;i<jumpIndexArray.length;i++){ 
 		if(num==jumpIndexArray[i]){ 
 			flag = true; 
 		} 
 	} 
 	return flag; 
 }
 var esdAddMd5 = function(){
	var arr = document.getElementsByTagName('a'); 
 	for(var i=0;i<arr.length;i++){ 
 		var tempE = arr[i]; 
 		if(tempE.getElementsByTagName('img').length>0){
			var inSetFlag = false;
			var classArray = tempE.className.split(' ');
			for(var ic=0;ic<classArray.length;ic++){
				if(esdRouteSet.has(classArray[ic])){
					inSetFlag = true;
					break;
				}
			}
			if(!inSetFlag){
				var ele;
				if(hasToolbar){
				    ele = tempE.outerHTML.replace('class="ESDAssetsTextCon"','').replace('tabindex="0"','');
				    if(ele.indexOf('ESDAssetsTextCon')>-1){
				       ele =  ele.replace('ESDAssetsTextCon','');
				    }
				}else{
					ele = tempE.outerHTML; 
				}
				var ol = 0; 
				for (var x = 0; x < ele.length; x++) { 
					var c = ele.charCodeAt(x); 
					if(jumpIndex(c)){ 
						continue; 
					} 
					ol = c + ol; 
				} 
				var md5Str = (md5(ol)); 
				if(hasToolbar){ 
					if(tempE.attributes.class===undefined){  
						tempE.className+=' _'+md5Str;  
						esdRouteSet.add('_'+md5Str); 
					}else{ 
						if(classArray.length==1&&classArray[0]=="ESDAssetsTextCon"){ 
							tempE.className+=' _'+md5Str;  
							esdRouteSet.add('_'+md5Str); 
						}else{ 
							tempE.className+=' _'+md5Str.substr(8,16);  
							esdRouteSet.add('_'+md5Str.substr(8,16)); 
						} 
					}  
				}else{ 
					if(tempE.attributes.class===undefined){  
						tempE.className+=' _'+md5Str;  
						esdRouteSet.add('_'+md5Str); 
					}else{  
						tempE.className+=' _'+md5Str.substr(8,16);  
						esdRouteSet.add('_'+md5Str.substr(8,16)); 
					}  
				} 
			}
 		} 
 	} 
 	var arrImg = document.getElementsByTagName('img'); 
 	for(var k = 0; k<arrImg.length;k++){ 
 		var imgE = arrImg[k]; 
		var inSetFlag = false;
		var classArray = imgE.className.split(' ');
		for(var ic=0;ic<classArray.length;ic++){
			if(esdRouteSet.has(classArray[ic])){
				inSetFlag = true;
				break;
			}
		}
		if(!inSetFlag){
			var parentsArr = esdGetParentsUntilArr( imgE, 'BODY' ); 
			var hasA = false; 
			for(var j = 0; j<parentsArr.length;j++){ 
				var parnetE = parentsArr[j]; 
				if(parnetE.tagName=='A'){ 
					hasA = true; 
					break; 
				} 
			} 
			if(hasA){ 
				continue; 
			}else{ 
				var ele;
				if(hasToolbar){
				    ele = imgE.outerHTML.replace('class="ESDAssetsTextCon"','').replace('tabindex="0"','');
				    if(ele.indexOf('ESDAssetsTextCon')>-1){
				       ele =  ele.replace('ESDAssetsTextCon','');
				    }
				}else{
					ele = imgE.outerHTML; 
				}
				var ol = 0; 
				for (var y = 0; y < ele.length; y++) { 
					var c = ele.charCodeAt(y); 
					if(jumpIndex(c)){ 
						continue; 
					} 
					ol = c + ol; 
				} 
				var md5Str = (md5(ol)); 
				if(hasToolbar){ 
					if(imgE.attributes.class===undefined){  
						imgE.className+=' _'+md5Str;  
						esdRouteSet.add('_'+md5Str); 
					}else{ 
						if(classArray.length==1&&classArray[0]=="ESDAssetsTextCon"){ 
							imgE.className+=' _'+md5Str;  
							esdRouteSet.add('_'+md5Str); 
						}else{ 
							imgE.className+=' _'+md5Str.substr(8,16);  
							esdRouteSet.add('_'+md5Str.substr(8,16)); 
						} 
					}  
				}else{ 
					if(imgE.attributes.class===undefined){  
						imgE.className+=' _'+md5Str;  
						esdRouteSet.add('_'+md5Str); 
					}else{  
						imgE.className+=' _'+md5Str.substr(8,16);  
						esdRouteSet.add('_'+md5Str.substr(8,16)); 
					}  
				} 
			} 
		} 
 	} 
 	var arrInput = document.getElementsByTagName('input'); 
 	for(var n = 0; n<arrInput.length; n++){ 
 		var tempInputE = arrInput[n]; 
		var inSetFlag = false;
		var classArray = tempInputE.className.split(' ');
		for(var ic=0;ic<classArray.length;ic++){
			if(esdRouteSet.has(classArray[ic])){
				inSetFlag = true;
				break;
			}
		}
		if(!inSetFlag){
			var ele;
			if(hasToolbar){
			    ele = tempInputE.outerHTML.replace('class="ESDAssetsTextCon"','').replace('tabindex="0"','');
			    if(ele.indexOf('ESDAssetsTextCon')>-1){
			       ele =  ele.replace('ESDAssetsTextCon','');
			    }
			}else{
				ele = tempInputE.outerHTML; 
			}
			var ol = 0; 
			for (var z = 0; z < ele.length; z++) { 
				var c = ele.charCodeAt(z); 
				if(jumpIndex(c)){ 
					continue; 
				} 
				ol = c + ol; 
			} 
			var md5Str = (md5(ol)); 
			if(hasToolbar){ 
				if(tempInputE.attributes.class===undefined){  
					tempInputE.className+=' _'+md5Str;  
					esdRouteSet.add('_'+md5Str); 
				}else{ 
					if(classArray.length==1&&classArray[0]=="ESDAssetsTextCon"){ 
						tempInputE.className+=' _'+md5Str;  
						esdRouteSet.add('_'+md5Str); 
					}else{ 
						tempInputE.className+=' _'+md5Str.substr(8,16);  
						esdRouteSet.add('_'+md5Str.substr(8,16)); 
					} 
				}  
			}else{ 
				if(tempInputE.attributes.class===undefined){  
					tempInputE.className+=' _'+md5Str;  
					esdRouteSet.add('_'+md5Str); 
				}else{  
					tempInputE.className+=' _'+md5Str.substr(8,16);  
					esdRouteSet.add('_'+md5Str.substr(8,16)); 
				}  
			} 
		}
 	} 
 	var arrTextarea = document.getElementsByTagName('textarea'); 
 	for(var m = 0; m<arrTextarea.length; m++){ 
 		var tempTextareaE = arrTextarea[m]; 
		var inSetFlag = false;
		var classArray = tempTextareaE.className.split(' ');
		for(var ic=0;ic<classArray.length;ic++){
			if(esdRouteSet.has(classArray[ic])){
				inSetFlag = true;
				break;
			}
		}
		if(!inSetFlag){ 
			var ele;
			if(hasToolbar){
			    ele = tempTextareaE.outerHTML.replace('class="ESDAssetsTextCon"','').replace('tabindex="0"','');
			    if(ele.indexOf('ESDAssetsTextCon')>-1){
			       ele =  ele.replace('ESDAssetsTextCon','');
			    }
			}else{
				ele = tempTextareaE.outerHTML; 
			}
			var ol = 0; 
			for (var o = 0; o < ele.length; o++) { 
				var c = ele.charCodeAt(o); 
				if(jumpIndex(c)){ 
					continue; 
				} 
				ol = c + ol; 
			} 
			var md5Str = (md5(ol)); 
			if(hasToolbar){ 
				if(tempTextareaE.attributes.class===undefined){  
					tempTextareaE.className+=' _'+md5Str;  
					esdRouteSet.add('_'+md5Str); 
				}else{ 
					if(classArray.length==1&&classArray[0]=="ESDAssetsTextCon"){ 
						tempTextareaE.className+=' _'+md5Str;  
						esdRouteSet.add('_'+md5Str); 
					}else{ 
						tempTextareaE.className+=' _'+md5Str.substr(8,16);  
						esdRouteSet.add('_'+md5Str.substr(8,16)); 
					} 
				}  
			}else{ 
				if(tempTextareaE.attributes.class===undefined){  
					tempTextareaE.className+=' _'+md5Str;  
					esdRouteSet.add('_'+md5Str); 
				}else{  
					tempTextareaE.className+=' _'+md5Str.substr(8,16);  
					esdRouteSet.add('_'+md5Str.substr(8,16)); 
				}  
			} 
		}
 	}
 } 
 var esdInterval;
 var esdIntervalIndex = 0;
 var esdRouteSet = new Set;
 var hasToolbar = typeof(top.jq_1_7_1)=='function'? true:false;
 var esd_md5_js = document.createElement('script'); 
 esd_md5_js.setAttribute('type', 'text/javascript'); 
 esd_md5_js.setAttribute('src', 'https://www.sc.gov.cn/10462/xhtml/js/cdn_md5.js'); 
 esd_md5_js.setAttribute('charset', 'utf-8'); 
 esd_md5_js.onload = function(){ 
 setTimeout(function(){ 
	esdAddMd5(); 
	esdInterval = setInterval(function(){ 
		esdAddMd5(); 
		esdIntervalIndex++; 
		if(esdIntervalIndex>1){ 
			clearInterval(esdInterval); 
 var esdRoute = {};
 esdRoute.serverUrl = 'https://www.yunmd.net/html/';
 esdRoute.currentPath = 'www.sc.gov.cn/';
 esdRoute.routeArray = [{'isDir':true,'fileName':'10462','isTempLate':false},{'isDir':false,'fileName':'www.sc.gov.cn','isTempLate':false}];
 var tempLocationHref = '';
 if (location.href.split('//').length >= 3) {
 	var tempLHArr = location.href.split('//');
 	for (var tlh_i = 0; tlh_i < tempLHArr.length; tlh_i++) {
 		if (tlh_i == 0) {
 			tempLocationHref += tempLHArr[tlh_i] + '//';
 		} else {
 			tempLocationHref += tempLHArr[tlh_i] + '/';
 		}
 	}
 } else {
 	tempLocationHref = location.href;
 }
 var temptemp = '';
 var tempLocationHrefArr = tempLocationHref.split(':');
 if(tempLocationHrefArr.length>2){
 	for(var tlha_i = 1; tlha_i<tempLocationHrefArr.length;tlha_i++){
 		if(tlha_i==1){
 			temptemp+=tempLocationHrefArr[0]+':'+tempLocationHrefArr[1];
 		}else{
 			temptemp+='_'+tempLocationHrefArr[tlha_i];
 		}
 	}
 	tempLocationHref = temptemp;
 }
 if(esdRoute.currentPath.indexOf(':')>-1){
 	esdRoute.currentPath = esdRoute.currentPath.split(':')[0]+'_'+esdRoute.currentPath.split(':')[1];
 }
 esdRoute.esdPageCurrentPath = tempLocationHref.split(esdRoute.currentPath)[1].split('/')[0];
 esdRoute.routeFlag = false;
 for(var i=0;i<esdRoute.routeArray.length;i++){
 	var tempObj = esdRoute.routeArray[i];
 	if(esdRoute.esdPageCurrentPath==''){
 		esdRoute.esdPageCurrentPath  = esdRoute.currentPath.split('/')[0];
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf('?')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split('?');
 		var tempStr = '';
 		for(var j=0; j<tempArr.length; j++){
 			tempStr = tempStr+tempArr[j];
 			if(j<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf(':')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split(':');
 		var tempStr = '';
 		for(var k=0; k<tempArr.length; k++){
 			tempStr = tempStr+tempArr[k];
 			if(k<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf('*')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split('*');
 		var tempStr = '';
 		for(var m=0; m<tempArr.length; m++){
 			tempStr = tempStr+tempArr[m];
 			if(m<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf('|')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split('|');
 		var tempStr = '';
 		for(var n=0; n<tempArr.length; n++){
 			tempStr = tempStr+tempArr[n];
 			if(n<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf(tempObj.fileName)>-1){
 		esdRoute.routeFlag = true;
 		var esd_index = location.href.split('/')[2];
 		var esd_js = document.createElement('script');
 		esd_js.setAttribute('type', 'text/javascript');
 		if(tempObj.isDir==true){
 			esd_js.setAttribute('src', esdRoute.serverUrl+esdRoute.currentPath+esdRoute.esdPageCurrentPath+'/route.js');
 		}else{
 			esd_js.setAttribute('src', esdRoute.serverUrl+esdRoute.currentPath+tempObj.fileName+'.js');
 		}
 		esd_js.setAttribute('charset', 'utf-8');
 		document.body.appendChild(esd_js);
 		break;
 	}
 }
 if(esdRoute.routeFlag == false){ 
 	var flag = false; 
 	for(var j=0;j<esdRoute.routeArray.length;j++){ 
 	  var tempObj = esdRoute.routeArray[j]; 
      if(tempObj.isTempLate){ 
 		flag = true; 
         var esd_js = document.createElement('script'); 
 		esd_js.setAttribute('type', 'text/javascript'); 
 		esd_js.setAttribute('src', esdRoute.serverUrl+esdRoute.currentPath+'template.js'); 
 		esd_js.setAttribute('charset', 'utf-8'); 
 		document.body.appendChild(esd_js); 
      } 
 	} 
 	if (flag == false) { 
 		window.esdDTGZ = {}; 
 		window.esdDTGZ.init = '准备开始'; 
 	} 
 } 
		} 
	},500); 
 },1000); 
 } 
 document.body.appendChild(esd_md5_js); 
