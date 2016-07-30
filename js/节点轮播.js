// window.onload=function(){
	
// 	var win=$('.container');
// 	var box=$('.turn',win)[0];
// 	var as=$('turn-pic',box);
// 	var aw=parseInt(getStyle(as[0],'width'));
// 	var btn=$('.btn');
// 	var btnl=$('.btnl')[0];
// 	var btnr=$('.btnR')[0];
// 	var flag=true;
// 	var s;
// 		s=setInterval(moveL,2000);
// 	win.onmouseover=function(){
// 		clearInterval(s);
// 	}
// 	win.onmouseout=function(){
// 		s=setInterval(moveL,2000)
// 	}
	
// 	btnr.onclick=function(){
// 			if(flag){
// 			flag=false;
// 			moveR();
// 			}
// 	}
// 	btnl.onclick=function(){	
// 		if(flag){
// 			flag=false;
// 			moveL();
// 		}
// 	}
	
// 	function moveL(){
// 		//1.box左移      //animate的回调函数中2.第一张插入到最后3.box left=0
		
// 		animate(box,{left:-aw},function(){
// 			var first=firstChild(box);
// 			box.appendChild(first);	
// 			box.style.left=0;//用样式拉回更快些，可以没有视觉差
// 			flag=true;
// 		})
// 	}
// 	function moveR(){
			
// 			var last=lastChild(box);
// 				box.insertBefore(last,first);		
// 			box.style.left=-aw+'px';
// 				animate(box,{left:0},function(){
// 				flag=true;})	
				
// 		// animate(box,{left:0},function(){
// 		// 		flag=true;
// 		// 	})

// 	}

//  }





