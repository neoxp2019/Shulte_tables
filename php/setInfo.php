<?php
include "configDB.php";
$query="SELECT * FROM  `testerresult`";
//--------------------------------- выполняем запрос к базе данных
$result = mysqli_query($id_connect,$query) or die(mysql_error());
//-----------------------------------------------------------
$ColvoResStr=mysqli_num_rows($result);
if ($ColvoResStr!=0)
{
	while($row = mysqli_fetch_array($result,MYSQLI_ASSOC))
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
mysqli_close($id_connect);  //закрываем соединение с базой данных
?>

