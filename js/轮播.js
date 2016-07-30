$(function(){
	var win=$('.container');
		nodeLunbo(win[0]);
 function nodeLunbo(obj){
	var turn=$('.turn',obj)[0];
	var pics=$('.turn-pic',turn);
	var aw=parseInt(getStyle(pics[0],'width'));	
	var jbtn=$('.jbtn')[0];
	var jbtnl=$('.jbtnl')[0];
	var jbtnr=$('.jbtnR')[0];
	var flag=true;
	var t;
		t=setInterval(tmoveL,1000);
	obj.onmouseover=function(){
		jbtn.style.display='block'
		clearInterval(t);
	}
	obj.onmouseout=function(){
		jbtn.style.display='none'
		t=setInterval(tmoveL,1000)
	}
	
	jbtnr.onclick=function(){
			if(flag){
			tmoveR();
			flag=false;
			}
	}
	jbtnl.onclick=function(){	
		if(flag){
			tmoveL();
			flag=false;
		}
	}
	
	function tmoveL(){
		//1.box左移      //animate的回调函数中2.第一张插入到最后3.box left=0
		
		animate(turn,{left:-aw-15},function(){
			var first=firstChild(turn);
			turn.appendChild(first);
			turn.style.left=10;//用样式拉回更快些，可以没有视觉差
			flag=true;
		})
	}
	function tmoveR(){
	  	var first=firstChild(turn)
	  	var last=lastChild(turn)
	  	turn.insertBefore(last,first)
	  	turn.style.left=-aw+"px"
	  	animate(turn,{left:10},function(){
	  		flag=true;
	  	})
	  }
	// function tmoveR(){

	// 	for(var i=0;i<num;i++){
	// 		var first=firstChild(turn);
	// 		var last=lastChild(turn);
	// 			turn.insertBefore(last,first);		
	// 	}
	// 		turn.style.left=(-aw-10)+'px';
	// 			animate(turn,{left:0},function(){
	// 			flag=true;})	
				
	// 	animate(turn,{left:0},function(){
	// 			flag=true;
	// 		})

	// }

 }



})



window.onload=function(){

			// var move66=$('#move1')
			// //记得写下标
			// move66.onmouseover=function(){
			// animate (move66,{width:100,height:30,right:25},100,Tween.Bounce)
			// }
			// move66.onmouseout=function(){
			// animate (move66,{width:60,height:30,right:0},100,Tween.Bounce)
			// }

			
		
			// var move3=$('#move3')
			// //记得写下标
			// move3.onmouseover=function(){
			// animate (move3,{width:100,height:30,right:25},100,Tween.Bounce)
			// }
			// move3.onmouseout=function(){
			// animate (move3,{height:30,width:60,right:0},100,Tween.Bounce)
			// }

			// var move20=$('#move2')
			// //记得写下标
			// move20.onmouseover=function(){
			// animate (move20,{width:100,height:30,right:25},100,Tween.Bounce)
			// }
			// move20.onmouseout=function(){
			// animate (move20,{height:30,width:60,right:0},100,Tween.Bounce)
			// }
//选项卡
		var re=$('#redcolor');
		var load=$('#load',re);
		var ch=$('.china',load);
		var wx=$('#wx',wxh)
		var wxh=$('#wxh')
		load.style.display='none'
		wx.style.display='none' 
		re.onmouseover=function(){
          load.style.display='block'             
          }
		re.onmouseout=function(){
          load.style.display='none'             
          }
		ch.onmouseover=function(){
          ch.style.background='red'            
          }
        ch.onmouseout=function(){
          ch.style.background='none'             
          }
        wxh.onmouseover=function(){
          wx.style.display='block'             
          }
		wxh.onmouseout=function(){
          wx.style.display='none'             
          }






			var item=$('.head1');
            var son=$('.son');
                for (var i = 0; i <item.length; i++) {
                  
                    son[i].style.display='none';
                     
                    
                }
                for(var i=0;i<item.length;i++){
                    item[i].index=i;//添加的属性不会删除
                    item[i].onmouseover=function(){
                        for(var j=1;j<son.length;j++){
                            son[j].style.display='none';
                        } 
                            son[this.index].style.display='block';
                        }

               //解析顺序的错误，需要添加一个属性
                item[i].onmouseout=function(){
                    for(var j=0;j<son.length;j++){
                    son[j].style.display='none'}
                 }
             }
//轮播动效
	var ban=$('.banner2')[0];
	var as=$('a',ban);
	var lis=$('li',ban);
	var len=as.length;
	var num=0;
	var lf=$('#lf');
	var btnf=$('.zz1')[0];
	var btnr=$('.zz2')[0];
	var flag=true;
//首次加载出现的情况
	for (var i = 0; i < len; i++) {
			if (i==0) {
				lis[0].style.background='red';
				animate(lf,{opacity:0})
				continue;
			} 
			animate(as[i],{opacity:0});
			lis[i].style.background='#ccc'
		}
//鼠标悬停
	var t=setInterval(move1,1500);
	ban.onmouseover=function(){
		animate(lf,{opacity:1})
		clearInterval(t);	
	}
	ban.onmouseout=function(){
		animate(lf,{opacity:0})
		t=setInterval(move1,1500)
	}
	btnr.onclick=function(){
			if(flag){
			move1();
			flag=false;
			}
	}
	btnf.onclick=function(){	
		if(flag){
			move2();
			flag=false;
		}
	}



function move1(){
		num++;
		if (num==len) {
				num=0
			}
		for (var i=0;i<len;i++) {
				animate(as[i],{opacity:0})
				lis[i].style.background='#ccc';
			}
				animate(as[num],{opacity:1},function(){flag=true;})
				lis[num].style.background='red';
}
function move2(){
		num--;
		if (num<0) {
				num=len-1
			}
		for (var i=0;i<len;i++) {
				animate(as[i],{opacity:0})
				lis[i].style.background='#ccc';
			}
				animate(as[num],{opacity:1},function(){flag=true;})
				lis[num].style.background='red';
		}




//点击时效果
	for(var i=0;i<len;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				for(var j=0;j<len;j++){
					animate(as[j],{opacity:0});
					lis[j].style.background='#ccc';
				}
					animate(as[this.index],{opacity:1});
					lis[this.index].style.background='red'
			}
		}


}
