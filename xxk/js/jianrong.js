//获取的兼容性
function getClass(classname,obj){
	var obj=obj||document
	if(obj.getElementsByClassName!=undefined){ 
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var ALL=obj.getElementsByTagName("*")
		for (var i = 0; i < ALL.length; i++) {
			   if(check(ALL[i].className,classname)){
			   	  arr.push(ALL[i])
			   }
		}
		return arr;
	}
}
//如果类名有多个的话，ie6——8不支持，必须将字符串分割成数组，
//然后遍历，一一比较，如果有一个类名相同返回真，否则返回假
  function check(oldclass,newclass){
  	var arr=oldclass.split(" ")
  	for (var i = 0; i < arr.length; i++) {
  		if(arr[i]==newclass){
  			return true
  		}
  	}
  	return false
  };
//兼容的获取和设置内容
function getText(obj,val){
  if(val==undefined){  
	if (obj.innerText==undefined) {
		return obj.textContent
	}else{
         return obj.innerText
	  }
}
  else{
  	if (obj.innerText==undefined) {
		 obj.textContent=val
	}else{
         obj.innerText=val
	  }
  }
}
 //兼容的获取 行内样式和外部样式
/*   对象.currentStyle.属性 IE 用来获得实际的样式属性
 getComputedStyle(对象,null).属性 FF 用来获得实际的样式属性
 只能获取不能设置*/
function getStyle(obj,attr){
    if (obj.currentStyle) {
    	return obj.currentStyle[attr]
    }else{
    	return getComputedStyle(obj,null)[attr]
    }
}
 //$函数  封装windo.onload 和 获取css 选择器
function $(selector,content){
	if(typeof selector=="string"){
		content=content||document;
		if (selector.charAt(0)=="#") {
			return  document.getElementById(selector.substr(1))
		}else if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),content)
		}else if (/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)) {
                  return content.getElementsByTagName(selector)
		}else if(/^<[a-zA-Z][A-Za-z1-6]{0,10}>$/.test(selector)){
                 return document.createElement(selector.slice(1,-1))
		 }

	} else if(typeof selector=="function"){
		 window.onload=function(){
			selector()
		}
	}
}
//去除字符串的空格 a 全部 l 左侧 r 右侧 lr 左右 （默认）

function trim(str,type){
	type=type||"rl"
	if (type=="a") {
       return str.replace(/\s*/g,"")
	}else if (type=="l") {m
       return str.replace(/^\s*/g,"")
	 }else if (type=="r") {
       return str.replace(/\s*$/g,"")
	   }else if(type=="rl"){
	   	return str.replace(/^\s*|\s*$/g,"")
	   }
}