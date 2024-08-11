// console.log(location.search); //bygeeb el query string //?name=ahmed&age=21

var query = location.search.replace("?", "");
query = query.replaceAll("+", " ");
query = query.replaceAll("%40", "@");

var arr = query.split("&");
// console.log(query.split("&"));
var aArray = [];
for(var i=0; i<arr.length;i++)
{
    var key = arr[i].split("=")[0];
    var val = arr[i].split("=")[1];
    aArray[key] = val;
}

document.getElementById("profInfo").innerHTML = "welcome, "+aArray["Name"]+"<br>";
document.getElementById("profInfo").innerHTML += "Age: "+aArray["Age"]+"<br>";
document.getElementById("profInfo").innerHTML += " Phone: "+aArray["Phone"]+"<br>";
document.getElementById("profInfo").innerHTML += " Email: "+aArray["Email"]+"<br>";
document.getElementById("profInfo").innerHTML += " Address: "+aArray["Address"]+"<br>";

