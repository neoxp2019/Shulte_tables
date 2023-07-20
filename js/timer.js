(function() 
{  
  "use strict";
  var timerV;
  var timerM;
  var timeStart;
  var currTime;
  var timeEnd;
  function init()  //указываем функции которые выполняются сразу после загрузки страницы
  {
    PrepareTimer();
  }
  //----------------------------------------------------------------------
  function PrepareTimer() 
  {    
    timerV=document.getElementById("Timer");
    timerV.innerHTML='00:00';
    timerV.onclick = function() //при первом клике вызов таймера, при втором остановка 
    {
      timerM=setInterval(UpdateTime,1000);
      timeStart=new Date;
    }  
    timerV.stoptimer = function() //при первом клике вызов таймера, при втором остановка 
    {
      clearInterval(timerM);
    }  
  }
  //------------------------------------------------------------------------
  function UpdateTime() 
  {
    var a=new Date;
    currTime=a.getTime();
    timeEnd=Math.floor((currTime-timeStart)/1000);
    var b=timeFormat(timeEnd);
    timerV.innerHTML=b;  
  }
  //-------------------------------------------------------------------------
  function timeFormat(sec)
  {
    var minutesOrig;
    var minutes;
    var second;
    minutesOrig=sec/60;
    if(minutesOrig<1)//если время меньше минуты
    {
      if(sec<10)
      {
        return "00:0"+sec;
      }
      else
      {
        return "00:"+sec;
      }
    }
    else //если время больше минуты
    {      
      minutes=Math.floor(minutesOrig);
      second=sec-(minutes*60);
      if(second<10)
      {
        if(minutes<10)
        {
          return "0"+minutes+":0"+second;
        }
        else
        {
          return minutes+":0"+second;
        }
      }
      else
      {
        if(minutes<10)
        {
          return "0"+minutes+":"+second;
        }
        else
        {
          return minutes+":"+second;
        }
      }
    }
  }
  //---------------------------------------------------------------------
  //запуск приложения
  init();
})();