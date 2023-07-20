//(function() 
//{  
	//"use strict";
	var masNumL=[]; // массив значений левой игровой области
  var masNumR=[]; // массив значений правой игровой области
  var SelRes='';  //переменные изпользуемые при выборе из меню опций
  var targObj;    // переменная для работы с ячейков по которой кликнули
  var targBgColour; // переменная для работы с цветом ячейки в которой кликнули
  var currStep;    // текущий ход игры
  var currStepPos="";   // право/лево - поле на котором уже засчитан текущий ход
  var optNum;      // номер выбранного пункта меню
  var gameStart;
  var counterL;
  var counterR;
  //-----------
  var winnerName;
  var winnerGameType;  
  var winnerTime;  
  //--------------------------------------------------------------------
  function init() {}  //указываем функции которые выполняются сразу после загрузки страницы
	function getRandomInt(min, max)	{  	return Math.floor(Math.random() * (max - min + 1)) + min; }  //функция генерации рандомного числа
  //----------------------------------------------------------------------------
	function truncateMass(mass, delpos)      //изменение массива
	{		
		if(delpos==0){	mass.shift();	} //если удаляемая позиция первая		
		else if(delpos==mass.length-1)	{	/*console.log("удаление последнего элемента"); */ mass.pop(); } //если удаляемая позиция последнияя
		else if (delpos>0&&delpos<mass.length-1)  //если удаляемая позиция внутри массива
			{
			  for(var i=delpos;i<mass.length-1;i++)
			  {
				  mass[i]=mass[i+1];
			  }
			  mass.pop();
			  return mass;
		  }	
		else {	console.log("некорректный номер удаляемой позиции"); }
	}
  //---------------------------------------------------------------------------
 	function generate(param)  //генерация массивов случайных чисел
  {
  		var i;
  		var randnum;
  		var randMax=24;
  		var masPos=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  		if(param==1)
  		{
  			for(i=0;i<25;i++)
  			{
  				randnum=getRandomInt(0,randMax);
  				randMax--;
  				masNumL[i]=masPos[randnum];
  				truncateMass(masPos,randnum);
  			}
  		}
  		else if(param==2)
  		{
        for(i=0;i<25;i++)
        {
          randnum=getRandomInt(0,randMax);
          randMax--;
          masNumR[i]=masPos[randnum];
          truncateMass(masPos,randnum);
        }
  		}	
  		else
  		{
  			console.log("задано неверное количество полей");
  		}
  }
  //---------------------------------------------------------------------------
  function SelOptionCheck()//проверка наличия выбора условия игры
  {
    if (optNum==undefined)
    {
      console.log('Ничего не выбрано');
      return false;
    }
    else
    {
      return true;
    }
  }
  //---------------------------------------------------------------------------
  function ClearFields()  //очищение игрового поля
  {
    var i;
    var CellId;
    var CurrObj;
    var ClassName;
    var ClassNum;
    //-------------------------------------------------
    for(i=1;i<=25;i++)
    {
      if (i<10) { CellId="LTC0"+i; }
      else { CellId="LTC"+i; }
      CurrObj=document.getElementById(CellId);
      ClassNum=CurrObj.classList.length;
      ClassName=CurrObj.classList.item(1);
      CurrObj.classList.remove(ClassName);  
    }
    //---------------------------------------------
    for(i=1;i<=25;i++)
    {
      if (i<10) { CellId="RTC0"+i; }
      else { CellId="RTC"+i; }
      CurrObj=document.getElementById(CellId);
      ClassNum=CurrObj.classList.length;
      ClassName=CurrObj.classList.item(1);
      CurrObj.classList.remove(ClassName);  
      //----------------------------------------------
    }
  }
  function GamerStepCheck()//проверка хода игрока в зависимости от выбранных параметров игры
  {
    var curr_id;
    var id_corrected;
    var a;
    var cellId;
    //------------
    if (optNum==1)      //одно поле прямой порядок
    {
      curr_id=targObj.id;
      id_corrected=curr_id.slice(3);
      a=masNumL[id_corrected-1];
      if (a==currStep)
      {
        DisplayStep();
        if (currStep==25)
        {
          console.log("Вы прошли тест!!!");
          gameStart=0;
          document.getElementById("Timer").stoptimer();
          //ViewResult();  
          //ДОБАВИТЬ ФУНКЦИЮ ЗАПИСИ РЕЗУЛЬТАТОВ
          WriteResult();
        }
        return true;        
      }
    }
    //----------------
    else if (optNum==2) //одно поле обратный порядок
    {
      curr_id=targObj.id;
      id_corrected=curr_id.slice(3);
      a=masNumL[id_corrected-1];
      if (a==currStep)
      {
        DisplayStep();
        if (currStep==0)
        {
          console.log("Вы прошли тест!!!");
          gameStart=0;
          document.getElementById("Timer").stoptimer(); 
          //ДОБАВИТЬ ФУНКЦИЮ ЗАПИСИ РЕЗУЛЬТАТОВ
          WriteResult();
        }
        return true;
      }
    }
    //----------------
    else if (optNum==3)  //два поля прямой порядок
    {
        curr_id=targObj.id;
        id_corrected=curr_id.slice(3);      
        cellId=curr_id.slice(0,3);   //получаем поцицию поля по которой выполнено клик(лево/право)
        //------------------
        if(cellId=="LTC")
        {          
            a=masNumL[id_corrected-1];
        }
        else
        {
            a=masNumR[id_corrected-1];
        }
        //------------------
        if(currStepPos=="") 
        {   
            if (a==currStep)
            {
                currStepPos=cellId;
            }
        } 
        //------------------
        else
        {    
            if(currStepPos!="RTC") { a=masNumR[id_corrected-1]; }
            else {  a=masNumL[id_corrected-1]; }
            if (a==currStep)
            {
                if(cellId!=currStepPos)
                {
                    DisplayStep();
                    currStepPos="";
                    console.log(currStepPos);
                    if (currStep==25)
                    {
                        console.log("Вы прошли тест!!!");
                        gameStart=0;
                        document.getElementById("Timer").stoptimer(); 
                        //ДОБАВИТЬ ФУНКЦИЮ ЗАПИСИ РЕЗУЛЬТАТОВ
                        WriteResult();
                    }
                    return true;
                }                
            }        
        }
        //-----------------
    }  
    //----------------
    else if (optNum==4)  //два поля обратный порядок
    {
        curr_id=targObj.id;
        id_corrected=curr_id.slice(3);      
        cellId=curr_id.slice(0,3);   //получаем поцицию поля по которой выполнено клик(лево/право)
        //------------------
        if(cellId=="LTC")
        {          
            a=masNumL[id_corrected-1];
        }
        else
        {
            a=masNumR[id_corrected-1];
        }
        //------------------
        if(currStepPos=="") 
        {   
            if (a==currStep)
            {
                currStepPos=cellId;
            }
        } 
        //------------------
        else
        {    
            if(currStepPos!="RTC") { a=masNumR[id_corrected-1]; }
            else {  a=masNumL[id_corrected-1]; }
            if (a==currStep)
            {
                //--------------------------------
                if(cellId!=currStepPos)
                {
                    DisplayStep();
                    currStepPos="";
                    console.log(currStepPos);
                    if (currStep==0)
                    {
                        console.log("Вы прошли тест!!!");
                        gameStart=0;
                        document.getElementById("Timer").stoptimer(); 
                        //ДОБАВИТЬ ФУНКЦИЮ ЗАПИСИ РЕЗУЛЬТАТОВ
                        WriteResult();
                    }
                    return true;
                }
                //----------------------------------
            }        
        }      
    }
    //-----------------
  }
  function FillFields(param)//заполнение игровых полей (param - переменная в которой содержится количество игровых полей в которых будет происходить игра)
  {
    //------------
    var i;
    var i;
    var CellId;
    var ClassId;
    //------------
    if(param==1)// если одно игровое поле
    {
      //----------------------------
      for(i=1;i<=25;i++)
      {
        if (i<10) 
        {
          CellId="LTC0"+i;
          if(masNumL[(i-1)]<10)
          {
            ClassId="Pic0"+(masNumL[(i-1)]);
          }
          else
          {
            ClassId="Pic"+(masNumL[(i-1)]);
          }
        }
        else
        {
          CellId="LTC"+i;
          if(masNumL[(i-1)]<10)
          {
            ClassId="Pic0"+(masNumL[(i-1)]);
          }
          else
          {
            ClassId="Pic"+(masNumL[(i-1)]);
          }
        }
        document.getElementById(CellId).classList.add(ClassId);
      }
      //-------------------------
    }
    else  //если два игровых поля
    {
      //-------------------------
      for(i=1;i<=25;i++)//заполнение левого игрового поля
      {
        if (i<10) 
        {
          CellId="LTC0"+i;
          if(masNumL[(i-1)]<10)
          {
            ClassId="Pic0"+(masNumL[(i-1)]);
          }
          else
          {
            ClassId="Pic"+(masNumL[(i-1)]);
          }
        }
        else
        {
          CellId="LTC"+i;
          if(masNumL[(i-1)]<10)
          {
            ClassId="Pic0"+(masNumL[(i-1)]);
          }
          else
          {
            ClassId="Pic"+(masNumL[(i-1)]);
          }
        }
        document.getElementById(CellId).classList.add(ClassId);
      }
      //---------------------------
      for(i=1;i<=25;i++) //заполнение правого игрового поля
      {
        if (i<10) 
        {
          CellId="RTC0"+i;
          if(masNumR[(i-1)]<10)
          {
            ClassId="Pic0"+(masNumR[(i-1)]);
          }
          else
          {
            ClassId="Pic"+(masNumR[(i-1)]);
          }
        }
        else
        {
          CellId="RTC"+i;
          if(masNumR[(i-1)]<10)
          {
            ClassId="Pic0"+(masNumR[(i-1)]);
          }
          else
          {
            ClassId="Pic"+(masNumR[(i-1)]);
          }
        }
        document.getElementById(CellId).classList.add(ClassId);      
      }
      //-----------------------------    
    }
  }
  //---------------------------------------------------------------------------------
  function StartTest(param)//доработка с учетом выбранных опций
  {   
    gameStart=1;                                           //значение хода игры - игра начата
    document.getElementById("DispRes").innerHTML='';       // очистка списка ходов
    //------------------------
    if (optNum==1||optNum==3) //начальное значение 1
    {
      currStep=1;
    }
    else                      //начальное значение 24
    {      
      currStep=24;
    }
    //---------------------------------------------------
    var StartOption=SelOptionCheck();   //проверка условия начала игры
    if (StartOption==true)              // если проверка успешна начинаем игру
    {
      ClearFields();
      document.getElementById("Timer").click(); //запускаем таймер
      if (optNum==1||optNum==2)                 //Выбрано одно поле для игры
      {
        generate(1);          
        FillFields(1);
      }
      else          //Выбрано два поля для игры
      {
        generate(1);
        generate(2);        
        FillFields(2);
      }
      //------------------------------
    }
    else
    {
      console.log('не выбраны условия начала игры!!!');
      alert("Не выбран режим игры!!!");
    }
  }
  //-----------------------------------------------------------------------------
  function CellClickCheck() //проверка на необходимость обрабатывать нажатие мыши(условия начало игры и нужное поле)
  {
    var cellId;
    var id
    //------------------------------------------
    if(gameStart==1)   //если игра запущена
    {     
      cellId=targObj.id; 
      var a=cellId.slice(0,3);      
      if(optNum==1||optNum==2) //если выбран режим одно игровое поле
      {        
        if(a=="LTC")  //если выбран режим 1 игровое поле обрабатываем только нажатия по ячейкам левого игрового поля
        {
          return true;
        }
        else
        {
          return false;
        } 
      }
      else // если выбран режим 2 игровых поля то проверка не нужна
      {        
        return true;  
      }
          
    }  
    //------------------------------------------ 
    else    //если игра не запущена
    {
      console.log("вы не стартовали тест!!!");
      return false;
    }
    //-----------------------------------------
  }
  //------------------------------------------------------------------------------
  function SelectOption(param) //выбор и визуализация выделения выбранной опции игры(выделение жирным)
  {    
    if (SelRes=='')  //если опция еще не выбиралась
    {
      param.style.font='italic bold 14px Comic Sans MS';
      param.style.listStyleType='disc';
      SelRes=param;
    }
    else      //если опция уже выбиралась
    {
      SelRes.style.font='italic 14px Comic Sans MS';
      SelRes.style.listStyleType='circle';
      param.style.font='italic bold 14px Comic Sans MS';
      param.style.listStyleType='disc';
      SelRes=param;
    }
    optNum=(SelRes.id).slice(3);
  }
  //---------------------------------------------------------------------------------
  function CellClick(param)  //обработка нажатия ячейки игрового поля
  {
    if (gameStart==1)
    {  
      targObj=param;  
      var check=CellClickCheck();    
      if (check)
      {
        targBgColour=targObj.style.backgroundColor;
        if(targBgColour!='red')
        {    
          targObj.style.backgroundColor ="red";
        } 
        ClickEffect(targObj);
      }
      else
      {
        alert('Некорректный выбор');
      }  
    }
  }
  //-----------------------------------------------------------------------------------
  function ClickEffect(param)  //исчезновение фона ячейки
  {    
    setTimeout(function() { param.style.backgroundColor ="";  },200);
    GamerStepCheck();
  }
  //-----------------------------------------------------------------------------------
  function DisplayStep()    //отображение теущего хода в поле результаты
  { 
    document.getElementById("DispRes").style.display="block";
    var time_value=document.getElementById("Timer").innerHTML;  //получаем значение времени
    var curr_id=targObj.id;
    var id_corrected=curr_id.slice(3);      //получаем номер ячейки которая сейчас в игре
    var uls = document.getElementById("DispRes");
    var newli = document.createElement("li");
    //----------------------
    if (optNum==3||optNum==4)  //вывод информации о текущем ходе, режим 2 игровых поля
    {
        if(currStepPos=="LTC")
        {
            newli.innerText = "Ход "+currStep+" "+time_value;
        }
        else
        { 
            newli.innerText = "Ход "+currStep+" "+time_value;
        }
    }    
    else  //вывод информации о текущем ходе, режим 1 игровое поле
    {
        newli.innerText = "Ход "+currStep+" "+time_value;
    }
    //----------------------
    uls.appendChild(newli);
    //----------------------
    if (optNum==1||optNum==3) //счетчик ходов прямой порядок
    {
        currStep++;    
    }
    else  //счетчик ходов обратный порядок
    {
        currStep--;
    }
    //----------------------
  }
  function WriteResult()    //запись результатов игры
  {
    //------------------------------подготовка данных для записи в базу данных----------------------
    winnerName = prompt("Введите ваше имя", "");
    winnerGameType=optNum;    
    var time=document.getElementById("Timer").innerText;
    winnerTime="00:"+time;
    console.log(winnerTime);
    //-----------------------------------запись результатов в базу данных---------------------------  
    $.ajaxSetup({
                  url: "php/getInfo.php",
                  type: "POST",
                  cache: false,  
                  data:{UserName:winnerName,UserGameType:winnerGameType,UserTime:winnerTime}      //Передать - Login имя пользователя, regLog переменная содержащая имя пользователя; Password пароль пользователя, regPwd переменная содержащая пароль пользователя;
                });
    $.ajax({ 
              success: function(resp) //получаем ответ
              {

                  //console.log('resp', resp);
                  //------------------
                  if (IsJsonString(resp)) //проверка на формат json
                  {
                      console.log('данные в формате json');
                      //переводим из json в рабочий формат понятный для js
                      var obj = JSON.parse(resp);                            
                      //console.log(obj);
                  }
                  else
                  {
                      console.log('не json '+resp);
                  }
                  //----------------
                  if (resp!=0) //Пользователь уже зарегистрирован                        
                  {
                      //document.getElementById("RegRes").style.color = "rgb(139,0,0)";    
                      //document.getElementById("RegRes").innerHTML='Логин '+regLog+' занят!'; 
                      alert('Логин занят');
                  }
                  else if (resp==0)//Пользователь не зарегистрирован, соотвественно записывает данные пользователя в базу данных
                  {
                      //document.getElementById("RegRes").style.Color = "rgb(139,0,0)";   
                      //document.getElementById("RegRes").innerHTML='Регистрация выполнена!'; 
                      var CheckLogRes=0; 
                      var CheckPwdRes=0;  
                      var FullCheckRes=0;
                      alert('Результаты сохранены');
                  }
                  //-----------------
              }  
          });
  }
  function IsJsonString(str)   //проверка на json
  {
      try 
      {   
          //попытка перевести строку из json
          JSON.parse(str);
      } 
      catch (e) 
      {   
          //не удалось, значит формат не json
          return false;
      }
      //успешно, значит формат json
      return true;
  }
  //------------------------------------------------
  function EditResults()   //проверка на json
  {
      var centerFrame;
      centerFrame=document.getElementById("CenterField");
       //---------------------------------------------------скрываем текущее поле показываем поле свойств
      if (centerFrame.style.visibility=='visible'||centerFrame.style.visibility=='')
      {
        centerFrame.style.visibility='hidden'; 
        centerFrame=document.getElementById("CenterFieldR");
        centerFrame.style.visibility='visible'; 
        centerFrame=document.getElementById("ResultEditor");
        centerFrame.value="Вернуться в окно игры";
      }
      else
      {
        centerFrame.style.visibility='visible'; 
        centerFrame=document.getElementById("CenterFieldR");
        centerFrame.style.visibility='hidden';
        centerFrame=document.getElementById("ResultEditor");
        centerFrame.value="Редактор результатов тестирования";

      }
  }
//------------------------------------------------

//---------------------------------------------------------------------------------------
  //init();//инициализация при запуске
//})();

//Замечания!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// доработка дизайна
// не очищается поле список результатов после нажатия кнопку закрыть в списке результатов
// в режиме "Две таблицы обратный порядок" не останавливаетя таймер по событию окончание игры
//проверит корректность работы остановку таймера сразу после победы перед вводом имени
//исправить ошибку препятствующую записи(сообщение логин занят)
//исправить содержимое поля с результатами