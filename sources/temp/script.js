  var qResult;
  //var obj;
  function CloseResult()    //запись результатов игры
  {
  	var ResWindow = document.getElementById("RegForm");
  	ResWindow.style.visibility="hidden";
  }
  function ImportData()    //запись результатов игры
  {
  	var i;
  	var div;
    var childNum;
    
    //----------------------------------------------------------------------------------------------  
    $.ajaxSetup({
                    url: "temp/php/getInfo.php",
                    type: "POST",
                    cache: false,  
                    
                });
    $.ajax({ 
                success: function(resp) //получаем ответ
                {
                    //------------------
                    if (IsJsonString(resp)) //проверка на формат json
                    {
                        console.log('данные в формате json');
                        //переводим из json в рабочий формат понятный для js
                        obj = JSON.parse(resp); 
                        var obj = JSON.parse(resp);                
                    }
                    else
                    {
                      	console.log('не json ');
                        console.log(resp);
                    }
                    //----------------
                    if (resp!=0) //записи найдены (отбращаемся к блоку с инфой по ид и записываем информацию)                
                    {                     	
                  	    //---------
                  	    var resultField = document.getElementById("VisResult");
                        childNum=resultField.children.length;
                        if (childNum>0)
                        {
                          resultField.innerHTML = '';
                        }
                  	    console.log('Вхождение в условие 1'); 
                  	    //----------------------------
                  	    for (i=0;i<obj.length;i++)
                  	    {
                  	  	    //console.log(i);
                  	  	    div = document.createElement("div");
                  	  	    div.className = "temp";     
                  	  	    div.innerText = obj[i].Id+"\u00A0"+"\u00A0"+"\u00A0"+obj[i].UserName+"\u00A0"+"\u00A0"+"\u00A0"+obj[i].GameType+"\u00A0"+"\u00A0"+"\u00A0"+obj[i].Time;
                  	  	    resultField.appendChild(div);
                  	  	    //---------
                  	    }
                  	  //----------------------------                	                  		
                    }
                    else if (resp==0)//записи не найдены
                    {
                        alert('результатов не найдено');
                    }
                    //-----------------
                }  
          });
    console.log(qResult);
  }
  //-----------------------
  function ShowResults()   //проверка на json
  {
 	  var visWindow=document.getElementById("RegForm");
 	  visWindow.style.visibility='visible'; 
 	  ImportData();
  }
  //-----------------------
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

//https://javascript.ru/forum/jquery/46863-vyborka-iz-bd.html

