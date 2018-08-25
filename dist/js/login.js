
define(['jquery','jquery-cookie'],function($){
	var main = function(){
		//console.log('加载完成')
		$(function(){
			//基本样式
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
			// 注册
			$('#loginD').click(function(){
				//alert($('#log-user').val())
				//alert($('#log-pass'))
				$.ajax({
					method:'post',
					url:'../php/login.php',
					data:`username=${$('#log-user').val()}&password=${$('#log-pass').val()}`,
					success:function(data){
						location.assign('../php/user.php')
					},
					error: function(err){
						console.log(err)
					}
				})
			})
			// 登录
			$('#toind').click(function(){
				//alert($('#log-user').val())
				//alert($('#log-pass'))
				$.ajax({
					method:'post',
					url:'../php/logon.php',
					data:`username=${$('#username').val()}&password=${$('#password').val()}`,
					success:function(data){
						//console.log(data)
						//var arr = JSON.parse(data);
						//alert(data)
						if(data == 1){
							location.assign('../html/index.html')
						}else{
							alert('请正确输入')
						}
						//
						//alert(data)
					},
					error: function(err){
						console.log(err)
					}
				})
			})
			
		})
	}
	return {
		main:main
	}
})