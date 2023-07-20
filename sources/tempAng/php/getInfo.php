<?php
include "configDB.php";
//----------------------------------формируем запрос к базе данных
$UsrName = $_POST["UserName"];
$UsrGameType = $_POST["UserGameType"];
$UsrTime = $_POST["UserTime"];
$UsrName=htmlspecialchars($UsrName);
//-----------------------------------
$query="SELECT * FROM  `testerresult`";
//--------------------------------- выполняем запрос к базе данных
$result = mysql_query($query) or die(mysql_error());
//-----------------------------------------------------------
$ColvoResStr=mysql_num_rows($result);
if ($ColvoResStr!=0)
{
	while($row = mysql_fetch_array($result,MYSQL_ASSOC))
	{
    	$resultAm[] = $row;
	}
	echo json_encode($resultAm);
}
else
{
	echo "0";
}
//----------------------------------------------------------
mysql_close($id_connect);  //закрываем соединение с базой данных
?>

