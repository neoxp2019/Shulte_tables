<?php
$hostSyl='localhost';
$userSyl='root';
$passwordSyl='';
$nameDB='sysadmhelper';
//---------------------------------------
//Соединяемся с базой
$id_connect = mysql_connect($hostSyl, $userSyl, $passwordSyl) or die("Не могу соединиться с MySQL.");
mysql_select_db($nameDB) or die("Не могу подключиться к базе.");
mysql_query('SET NAMES utf8;');	
?>