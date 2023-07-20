
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
        <title>Тестер</title>
        <link rel="shortcut icon" href="pics/fav.ico" type="image/x-icon">
		<script type="text/javascript" src="js/jquery-1.4.4.min.js" defer></script>       
        <script type="text/javascript" src="js/timer.js" defer></script>  
        <script type="text/javascript" src="js/tablefields.js" defer></script>
		<link   href="css/style.css" rel="stylesheet"/>
        <script type="text/javascript" src="temp/script.js" defer></script>
        <link   href="temp/style.css" rel="stylesheet"/>
	</head>
	<body background="pics/background.jpg">
    <!--body-->
           <div id="TitleText">Тестирование внимательности</div><br>
           <div id="Timer">Timer</div><br>
           <!------------------------------------------------------------------------------->
           <div id="CenterField">
           <!------------------------------->            
           <table border="1" align="center" cellspacing=5px id="TableL">
                <?php 
                for($i=0;$i<5;$i++) {
                    echo "<tr>";
                    for($j=0;$j<5;$j++) {
                        $num = $i*5+1+$j;
                        $num = ($num<10)?'0'.$num:$num;                       
                        echo "<th id='LTC$num' onclick='CellClick(this)' class='Cell'></th>";
                    }
                    echo "</tr>";
                }
                ?>
            </table>
                <table border="1" align="center" cellspacing=5px id="TableR">
                 <?php 
                for($i=0;$i<5;$i++) {
                    echo "<tr>";
                    for($j=0;$j<5;$j++) {
                        $num = $i*5+1+$j;
                        $num = ($num<10)?'0'.$num:$num;                       
                        echo "<th id='RTC$num' onclick='CellClick(this)' class='Cell'></th>";
                    }
                    echo "</tr>";
                }
                ?>
            </table> 
            <!------------------------------>
            <div id="Option">
            Опции    
            <ul>                
                <li id="SEL1" onclick="SelectOption(this)">Одна таблица прямой порядок</li>
                <li id="SEL2" onclick="SelectOption(this)">Одна таблица обратный порядок</li>
                <li id="SEL3" onclick="SelectOption(this)">Две таблицы прямой порядок</li>
                <li id="SEL4" onclick="SelectOption(this)">Две таблицы обратный порядок</li>
            </ul>
            </div>
            <!------------------------------>
            <div id="Result">&nbspРезультаты:<ul id="DispRes"></ul></div> 
            <form id="SButton">
                <p>
                    <input type="button" value="НАЧАТЬ!" name="Operation6" onclick="StartTest()" id="StartButton">
                    <input type="button" value="РЕЗУЛЬТАТЫ!" name="Operation7" onclick="ShowResults()" id="ResultButton">
                    <!--input type="button" value="РЕЗУЛЬТАТЫ!" name="Operation7" onclick="WriteResult()" id="ResultButton"-->
                </p>
            </form>
            <!----------------------------------------------------------------------------->
            </div>
            <!----------------------------------------------------------------------------->
            <div id="CenterFieldR"></div>
            <!----------------------------------------------------------------------------->
            <div id="RegForm">
                <form method="post">
                    <div id="TitleTextW">Список результатов:</div>
                    <div id="VisResult"></div>
                    <div><p id="Pustota"></p></div>
                    <input id="Close" type="button" value="Закрыть" onclick="CloseResult()">            
                </form>
            </div>
            <!----------------------------------------------------------------------------->
            <div id="BottomText"><form ><input type="button" value="Редактор результатов тестирования" id="ResultEditor" onclick="EditResults()"></form></div>
            <!------------------------------------------------------------------------------>
	</body>	
</html>