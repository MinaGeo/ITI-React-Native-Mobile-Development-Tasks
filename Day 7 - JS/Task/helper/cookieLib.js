function CreateNewCookie(key, value, expiryInMonth)
{
  if(expiryInMonth){ //persistent

    var today = new Date();
    today.setMonth(today.getMonth()+expiryInMonth);
    document.cookie = key+"="+value+"; expires="+today;
  }
  else{ //session
  document.cookie = key+"="+value;
  }

}
function DeleteCookie(key)
{
    var today = new Date();
    today.setMonth(today.getMonth()-10);
    document.cookie = key+"=; expires="+today;
}

function allCookies()
{
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    var aArray = [];
    for(var i = 0;i< arrCookie.length; i++)
    {
    var key = arrCookie[i].split("=")[0].trim();
    var val = arrCookie[i].split("=")[1];
    aArray[key] = val;
    }
return aArray; 

}

function getCookie(key) {
    var aArray = allCookies();  
    if(hasCookie(key)){
        return aArray[key];
    }
}
function hasCookie(key){
  var aArray = allCookies();  
  if(aArray[key]){
    return true;
  }
  return false;
}


function visitCounter() {
    var visitCounter = getCookie("visitCounter"); 

    if (visitCounter) {
        visitCounter = parseInt(visitCounter) + 1; 
    } else {
        visitCounter = 1; 
    }

    CreateNewCookie("visitCounter", visitCounter, 1);
}