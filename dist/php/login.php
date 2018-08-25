<?php 
	header("Content-type:text/html;charset=utf-8");
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$time = time();
	$link = mysql_connect('localhost', 'root', '123456');
	if(!$link){
		echo '数据库链接失败';
		exit; //退出
	}else{ echo '成功'; };
	mysql_set_charset('utf8');
	mysql_select_db('hisense');

	$sql = "insert into user(user, password, time) values('{$username}','{$password}',{$time})";
	$res = mysql_query($sql);

	if($res){
		echo "添加成功";
	}else{
		echo '添加失败';
		exit;
	}
	mysql_close($link);
 ?>