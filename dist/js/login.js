
define(['jquery','jquery-cookie'],function($){
	var main = function(){
		//console.log('加载完成')
		$(function(){
			$('.tophone').click(function(){
				$('.lon-txt').css('display','none');
				$('.lon-phone').css('display','block');
			})
			$('.totext').click(function(){
				$('.lon-txt').css('display','block');
				$('.lon-phone').css('display','none');
			})
			$('.tologin').click(function(){
				$('.login').css('display','block');
				$('.logon').css('display','none');
			})
			$('.tologon').click(function(){
				$('.login').css('display','none');
				$('.logon').css('display','block');
			})
		})
	}
	return {
		main:main
	}
})