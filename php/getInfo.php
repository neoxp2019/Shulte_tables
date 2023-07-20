<?php
include "configDB.php";
$UsrLog = $_POST["UserName"];
$UsrPwd = $_POST["UserGameType"];
$UsrTime = $_POST["UserTime"];
//--------------------------------- выполняем запрос к базе данных
//$result = mysqli_query($id_connect,$query) or die(mysqli_error());
//-----------------------------------------------------------
//$query="INSERT INTO `sysadmhelper`.`users` (`id`, `Login`, `Password`, `Name`, `SecondName`, `UserRights`) VALUES ('0', '".$UsrLog."', '".$UsrPwd."', 'new', 'new', '0')";
$query="INSERT INTO `testerresult`(`Id`, `UserName`, `GameType`, `Time`) VALUES ('','".$UsrLog."','".$UsrPwd."','".$UsrTime."')";
$res = mysqli_query($id_connect,$query) or die(mysqli_error($id_connect));
echo '1';
//------------------------------------------------------------
mysqli_close($id_connect);  //закрываем соединение с базой данных
?>

