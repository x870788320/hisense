console.log('加载完成');

require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'bootstrap':'bootstrap',
		'jquery-cookie':'jquery.cookie',
		'index' : 'index',
		'nav':'nav',
		'body':'body'
	},
	shim:{
		'jquery-cookie': ['jquery'],

	}
})


require(['index','nav','body'], function(index,nav,body){
	index.main();
	nav.main();
	body.main()
})








