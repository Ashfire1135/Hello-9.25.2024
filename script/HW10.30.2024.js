let countDown = prompt("What number should I count down from 5 to 10?")


function countDownIf()  {
    
    if (countDown>10)
    {
      alert("That is too high try again (Reload the page).");
    }
    else if (countDown<5) 
    {
      alert("Too low (Reload the page).");
    }  else 
    {
      while (countDown) { 
        alert( countDown );
        countDown--;
      }
    } 
     
}

countDownIf();