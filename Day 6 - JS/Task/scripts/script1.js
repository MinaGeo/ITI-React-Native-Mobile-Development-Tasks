var myInt;
function moveByWin() {
    if (myWin) {
      myWin.moveBy(210, 100);
      
      var left = myWin.screenX || myWin.screenLeft;
      var top = myWin.screenY || myWin.screenTop;
  
      var screenWidth = window.screen.availWidth;
      var screenHeight = window.screen.availHeight;
  
      if (left + 200 >= screenWidth || top + 200 >= screenHeight) {
        closeWin(); // Close the window
      } else {
        myWin.focus();
      }
    }
  }

function startInt()
{
    myInt = setInterval(moveByWin,1000);
}


var myWin;
function openWin()
{
   myWin = open("moveWin.html","","width=100,height=100");
   startInt();
}

function closeWin()
{
    if(myWin){ 
  myWin.close();
    }
}

