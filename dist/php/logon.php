<?php 
	header("Content-type:text/html;charset=utf-8");
	$username = $_POST['username'];
	$password = $_POST['password'];
	$time = time();
	$link = mysql_connect('localhost', 'root', '123456');
	if(!$link){
			echo '数据库链接失败';
			exit; //退出
		}
	mysql_set_charset('utf8');
	mysql_select_db('hisense');
	$sql = "select * from user";
	$res = mysql_query($sql);
	//$a = array();
	while($row = mysql_fetch_assoc($res)){
		//var_dump($arr);
		//array_push($a, $arr);
		//$str = json_encode($arr);
		//echo $atr;
		if ($row['user'] == $username) {	
			$sql2 = "select password from user where user='{$row['user']}'";
			//var_dump($sql2);
			$res2 = mysql_query($sql2);
			$row2 = mysql_fetch_assoc($res2);
			
			if ($row2['password'] == $password) {
				echo '1';
				exit;
			}else{
				echo '登录失败';
				exit;
			}	
		}
	};
	/*$arr = mysql_fetch_assoc($res);
	$str = json_encode($arr);
		echo $atr;*/
		//$arr = array('1','2','3 ');
		//$str = json_encode($arr);
		//echo $atr;
	//var_dump($a);
	//$str = json_encode($a);
	//echo $a;
	mysql_close();




 ?>