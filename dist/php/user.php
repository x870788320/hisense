<?php 
	header("Content-type:text/html;charset=utf-8");
	$link = mysql_connect('localhost', 'root', '123456');
	if(!$link){
		echo '数据库链接失败';
		exit; //退出
	}/*else{ echo '成功'; }*/
	mysql_set_charset('utf8');
	mysql_select_db('hisense');
	$sql = "select * from user";
	$res = mysql_query($sql);
	$i=1;
	echo "<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<title>Document</title>
	<style>
	*{margin:0;padding:0;}
	a{text-decoration: none;}
	#user{width: 800px;border: 1px solid #ccc;margin:50px auto;text-align: center;}
	ul{width: 100%;height: 30px;}
	li{width: 160px;float: left; ;list-style: none;font:16px/30px '';overflow: hidden;}
	#head li{background-color: #0ff;}
	#u-1 li{background-color: #eee;}
	#u-2 li{background-color: #fff;}
	button{margin:30px auto;width: 100px;height: 30px;border: 0;background: #aaa;color: #fff;}
	button:hover{background: #ccc;}
	</style>
</head>
<body>
	<div id = 'user'>
		<ul id = 'head'>
			<li>id</li>
			<li>用户名</li>
			<li>密码</li>
			<li>创建时间</li>
			<li>操作</li>
		</ul>";
		
	while ($result = mysql_fetch_assoc($res)) {
		$i++;
		if ($i%2==0) {
			echo "<ul id = 'u-1'>
			<li>{$result['id']}</li>
			<li>{$result['user']}</li>
			<li>{$result['password']}</li>
			<li>{$result['time']}</li>
			<li>
				<a href='#'>删除</a>/
				<a href='#'>修改</a>
			</li>
		</ul>";
		} else {
			echo "<ul id = 'u-2'>
			<li>{$result['id']}</li>
			<li>{$result['user']}</li>
			<li>{$result['password']}</li>
			<li>{$result['time']}</li>
			<li>
				<a href='#'>删除</a>/
				<a href='#'>修改</a>
			</li>
		</ul>";
		}
		
	}
	echo "<button>添加</button>
	</div>
</body>
</html>";
	mysql_close();
 ?>

		
