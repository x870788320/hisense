define(['jquery','jquery-cookie'],function($){
	var main = function(){
		$(function(){
			$.ajax({
				method:'get',
				url:'../data/nav.json',
				success:function(arr){
					//alert('加载完成')
					//alert(arr[0].id)
					//alert(arr[8].child.length)
					for(var i = 0; i < arr.length; i++){
						$(`<div id="ul${i}" class = 'all-c'>
							<a href="#">
								<img src="${arr[i].pic}" alt="">
								<span>${arr[i].title}</span>
							</a>
							<div class = 'ul-c'>
								<a href="#" id = 'ula${i}'>
								</a>
							</div>
							<div class="ul-c2">
								<a href="#" id = 'ulb${i}'>
								</a>	
							</div>
						</div>`).appendTo($('.all'));
						if(arr[i].child){
							for(var j = 0; j < arr[i].child.length; j++){
								$(`<div id = 'li'>
									<img src="${arr[i].child[j].picw}" alt="">
									<span>${arr[i].child[j].title}</span>
								</div>`).appendTo($(`#ula${i}`));
							}
						}
						if(arr[i].child.length == 0){
							$(`#ul${i}`).find('.ul-c2').css('left','256px');
						}
						if(arr[i].childw){
							for(var k = 0; k < arr[i].childw.length; k++){
								$(`
										<div id = 'li2'>
											<img src="${arr[i].childw[k].pict}" alt="">
											
											<h4>${arr[i].childw[k].title}</h4>
											<p>￥<span>${arr[i].childw[k].price}</span></p>
										</div>
									`).appendTo($(`#ulb${i}`));
							}
						}
						
					}
					
				},
				error:function(msg){
					alert('加载失败')
				}
			})
		})
			
	}
	return {
		main:main
	}
})