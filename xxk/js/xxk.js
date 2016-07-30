// $(function(){
// 	//第一步获取操作元素
// 	//选项卡
// 	var item=$(".item");
// 	var list=$(".list");
// 	for(var i=0;i<item.length;i++){
// 		item[i].index=;
//     item[0].onmouseover=function(){
//     	list[this.index].style.display="block";
//     }
//     ltem[0].onmouseout=function(){
//     	list[this.index].style.display="none";
//     }
//    }
// })

$(function(){
	var img=$("a",$("box")[0]);
	var lis=$("li",$("window")[0]);
	var windo=$(".window")[0];
	console.log(lis)
	img[0].style.zIndex=1;
	lis[0].style.background="#ccc";
	var num=0;
	
	
	function onmouR(){
		//更新一下下标，切换图片
        num++;
        //当前图片的层级调高让其他的下降，首先让所有图片在同一层级
        //所以要先便利一下
          if(num==img.length){
          	num=0;
          }
        for(var i=0;i<img.length;i++){
           animate(img[i],{opacity:0})
           lis[i].style.background="blue";
        }
        animate(img[num],{opacity:1})//调高其他图片层级
        lis[num].style.background="red";
	}
	t=setInterval(onmouR,1000)
      windo.onmouseover=function(){
	       //alert(1)
           clearInterval(t);
    }
		
		windo.onmouseout=function(){
		t=setInterval(onmouR,1000);
	}
   	for(var i=0;i<lis.length;i++){
      lis[i].index=i;
      lis.onclick=function(){
      	 alert(1)
      	for(var j=0;j<lis.length;j++){
         lis[j].style.background="#ccc";
         img[j].style.zIndex=0;
      	}
      	lis[this.index].style.background="red";
      	img[this.index].style.zIndex=10;
      	num=this.index;
      }
	}
	
})