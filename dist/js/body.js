
define(['jquery','jquery-cookie'],function($){
	var main = function(){
		//console.log('加载完成')
		$(function(){
			$.ajax({
				method:'get',
				url:'../data/hot.json',
				success:function(arr){
					//alert(arr.length)
					for(var i = 0; i < arr.length; i++){
						$(`<li > <i>
						<a href="#">
							<img src="${arr[i].pic}" alt="">
							<div>
							<p class="hot-p1">${arr[i].title}</p>
							<p class="hot-p2">${arr[i].price}</p></div>
						</a> </i>
					</li>`).appendTo($('#hot-u'))
					}
					hotGo();
			public('.hover');

				},
				error:function(err){
					alert('加载失败')
				}
			})
			function hotGo(){
				var olis = $('#hot-u').find('li');
				//alert(olis.length)
				var i = 0;
				$('.hot-left').click(function(){
					$('#hot-u').stop().animate({'margin-left':'-480px'}, 500,function(){
						
						$('#hot-u').css('margin-left','-240px');
						olis.eq(i).appendTo($('#hot-u'));
					})
					i++;
					if(i == olis.length){
						i = 0;
					}
				})
				$('.hot-r').click(function(){
					$('#hot-u').stop().animate({'margin-left':'0px'}, 500,function(){
						
						$('#hot-u').css('margin-left','-240px');
						olis.eq(i).prependTo($('#hot-u'));
					})
					i--;
					if(i < 0){
						i = olis.length -1;
					}
				})
			}
			public('.hover');
			hotm('.hover1')
			function hotm(hov){
				$(hov).on('mouseover', 'i',function(ev){
					$(this).find('p').css('color','#f00');
					$(this).find('div').stop().animate({'margin-top':'-5px'}, 200);
					//alert(this.className)
					ev.stopPropagation();
					return false;
				});
				$(hov).on('mouseout', 'i',function(ev){
					
					$(this).find('p').css('color','#333');
					$(this).find('div').stop().animate({'margin-top':'0px'}, 200);
					ev.stopPropagation();
					return false;
				});
			}
			function public(hov){
				$(hov).on('mouseover', 'i',function(ev){
					$(this).find('img').stop().animate({'margin-top':'-10px'}, 200);
					
					//alert(this.className)
					ev.stopPropagation();
					return false;
				});
				$(hov).on('mouseout', 'i',function(ev){
					$(this).find('img').stop().animate({'margin-top':'0px'}, 200);
					
					ev.stopPropagation();
					return false;
				});
			}

		})
	}
	return {
		main:main
	}
})