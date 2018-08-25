<?php 
	header("Content-type:text/html;charset=utf-8");
	$id = $_GET['class'];
	$link = mysql_connect('localhost', 'root', '123456');
	if(!$link){
		echo '数据库链接失败';
		exit; //退出
	}else{ echo '成功'; };
	mysql_set_charset('utf8');
	mysql_select_db('hisense');
	$sql = "delete from user where id = {$id}";
	$res = mysql_query($sql);
	if($res){
		echo "删除成功<a href = 'user.php'>返回首页</a>";
	}else{
		echo '删除失败';
	}
	mysql_close($link);
 ?>