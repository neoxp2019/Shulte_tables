<?php
$hostSyl='localhost';
$userSyl='root';
$passwordSyl='';
$nameDB='sysadmhelper';
//---------------------------------------
//Соединяемся с базой
$id_connect = mysqli_connect($hostSyl, $userSyl, $passwordSyl) or die("Не могу соединиться с MySQL.");
mysqli_select_db($id_connect,$nameDB) or die("Не могу подключиться к базе.");
mysqli_query($id_connect,'SET NAMES utf8;');	
?>