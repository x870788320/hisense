
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
			})
	}
	return {
		main:main
	}
})