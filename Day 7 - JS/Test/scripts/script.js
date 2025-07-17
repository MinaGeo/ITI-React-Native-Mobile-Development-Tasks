//Window Object

//SetTimeOut - setInterval

// setInterval('alert("Hi")',3000); //3000 - y3ml alert kol 3 seconds


// setInterval(function(){

//     alert('Hi');

// },3000);

function hi(){
    alert("hi");
}


var myInt;

function startInt()
{
    myInt = setInterval(hi,3000);
}
function stopInt()
{
    clearInterval(myInt);
}


var myTime;

function startTime()
{
    myTime = setTimeout(hi,3000);
}
function stopTime()
{
    clearTimeout(myTime);
}


var myWin;
function openWin()
{
   myWin = open("profile.html","","width=100,height=300");
}

function closeWin()
{
    if(myWin){ 
  myWin.close();
    }
}

function moveToWin()
{
    if(myWin){ 
  myWin.moveTo(100,100);
  myWin.focus();
    }
}
function moveByWin()
{
  if(myWin){  
  myWin.moveBy(100,100);
  myWin.focus();
  }
}

// var nav = navigator.userAgent;
// if(nav.includes("Chrome"))
// {
//     document.write("keep using chrome");
// }
// else{
//     document.write("Please download chrome");

// }

// console.log(location);




/*DOM*/
/* Properties [bgColor - fgColor - title - cooksies] */
/*Methods
1) getElementById()
2) getElementsByClassName()
3) getElementsByTagName()
4) getElementsByName()
*/

document.bgColor = "red";    
document.fgColor = "yellow";
document.title = "Main";

document.getElementById("hhh").style.color="blue";
document.getElementById("hhh").style.backgroundColor="Black";
document.getElementById("hhh").innerHTML += "<h2> Losers </h2>";


