
define(['bootstrap','jquery','jquery-cookie'],function(bootstrap,$){
	var main = function(){
			$(function(){
				var obtns = $('#banner').find('div').find('p');
				var oimgs = $('#banner').find('div').find('img');
				var inow = 0,timer = null;
				clearInterval(timer);
				timer = setInterval(bannergo, 4000);
				function bannergo(){
					inow++;
					if(inow == oimgs.length){
						inow = 0;
					}
					tab();
				}
				function tab(){
					obtns.attr('class','');
					obtns.eq(inow).attr('class','active');
					oimgs.stop().animate({'opacity':'0'}, 1000)
					oimgs.eq(inow).stop().animate({'opacity':'1'}, 1500)
				}
				obtns.click(function(){
						inow = $(this).index();
						tab();
					})
				/*oimgs.parents().stop().hover(function(){
					clearInterval(timer);
				},function(){
					var timer = setInterval(bannergo, 4000);
				})*/
				$('#banner').find('.img').mouseenter(function(){
					clearInterval(timer);
				});
				$('#banner').find('.img').mouseleave(function(){
					timer = setInterval(bannergo, 4000);
				})

				//侧边
				$('#fix').on('mouseover', 'div',function(){
					//alert(1)
					$(this).css('backgroundColor','#10a9a6');
					$(this).css('fontSize','16px');
					$(this).find('span').stop().animate({'lineHeight':"30px"}, 200);

				})
				$('#fix').on('mouseout', 'div',function(){
					//alert(1)
					$(this).css('backgroundColor','');
					$('.fix-te').css('backgroundColor','#10a9a6')
					$(this).css('fontSize','20px');
					$(this).find('span').stop().animate({'lineHeight':'44px'}, 200);
				})
				$('.fix-te').click(function(){
					$(window).scrollTop(0);
				})

				//下拉显示
				$(window).scroll(function(event) {
					if($(window).scrollTop() > $(window).height()){
						$('#scroll').css('display', 'block');
					}else{
						$('#scroll').css('display', 'none');
					}
					if($(window).scrollTop() > 1000){
						$('.fix-te').css('opacity', '1');
					}else{
						$('.fix-te').css('opacity', '0');
					}
				});
				
			})


	}
	return {
		main:main
	}
})