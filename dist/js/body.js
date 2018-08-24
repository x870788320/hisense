
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
			$.ajax({
				method:'get',
				url:'../data/body.json',
				success:function(arr){
					//console.log('加载成功')
					//alert(arr.length)
					tv();
					air();
					img();
					phoneEN();
					function tv(){
						for(var i = 0; i < 2;i++){
							$(`<a href="#" class = 'tv-${arr[0].child[i].id} pub-a'>
								<i class= 'mi'><img src="${arr[0].child[i].pic}" alt=""></i>
								<div class="move">
									<p>${arr[0].child[i].title}</p>
									<span>${arr[0].child[i].price}</span>
								</div>
							</a>`).appendTo('.tv1')
						}
						for(var j = 2; j < 6;j++){
							$(`<a href="#" class = 'tv-${arr[0].child[j].id} pub-a'>
								<i class= 'mi'><img src="${arr[0].child[j].pic}" alt=""></i>
								<div class="move">
									<p>${arr[0].child[j].title}</p>
									<span>${arr[0].child[j].price}</span>
								</div>
							</a>`).appendTo('.tv2')
						}
					};
					function air(){
						for(var i = 0; i < 2;i++){
							$(`<a href="#" class = 'air-${arr[1].child[i].id} pub-a'>
								<i class= 'mi'><img src="${arr[1].child[i].pic}" alt=""></i>
								<div class="move">
									<p>${arr[1].child[i].title}</p>
									<span>${arr[1].child[i].price}</span>
								</div>
							</a>`).appendTo('.air1-t')
						}
						for(var j = 3; j < 6;j++){
							$(`<a href="#" class = 'air-1 pub-a'>
								<i class= 'mi'><img src="${arr[1].child[j].pic}" alt=""></i>
								<div class="move">
									<p>${arr[1].child[j].title}</p>
									<span>${arr[1].child[j].price}</span>
								</div>
							</a>`).appendTo('.air1-t')
						}
						$(`<a href="#" class = 'air-4799 pub-a'>
								<i class= 'mi'><img src="${arr[1].child[2].pic}" alt=""></i>
								<div class="move">
									<p>${arr[1].child[2].title}</p>
									<span>${arr[1].child[2].price}</span>
								</div>
							</a>`).appendTo('.air2')
					};
					function img(){
						for(var i = 2; i<5;i++){
							$(`<img src="${arr[i].pic}" alt="">`).appendTo(`.air-img${i}`)
						}
						for(var j =1;j<4;j++){
							$(`<a href="#"><img src="../images/body/080${j}.jpg" alt=""></a>`).appendTo('.v-img')
						}
					};	
					function phoneEN(){
						for(var i = 5; i<7; i++){
							for(var j = 0;j < arr[i].child.length;j++){
								$(`<i class= 'mi'><img src="${arr[i].child[j].pic}" alt=""></i>
									<div class="move">
										<p>${arr[i].child[j].title}</p>
										<span>${arr[i].child[j].price}</span>
									</div>`).appendTo(`#i-${i}-${j}`)
							}
						}
						
					}

				},
				error:function(){
					alert('加载失败')
				}
				
			})
			
		})
	}
	return {
		main:main
	}
})