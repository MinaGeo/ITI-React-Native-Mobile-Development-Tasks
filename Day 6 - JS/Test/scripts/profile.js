// console.log(location.search); //bygeeb el query string //?name=ahmed&age=21

var query = location.search.replace("?","");
var arr = query.split("&");
// console.log(query.split("&"));
var aArray = [];
for(var i=0; i<arr.length;i++)
{
    var key = arr[i].split("=")[0];
    var val = arr[i].split("=")[1];
    aArray[key] = val;
}

console.log(aArray);
// console.log(aArray["Name"]);

// var userName = arr[0].split("=")[1];
// console.log(userName);
// var age = arr[1].split("=")[1];
// console.log(age);

document.write("<h1> welcome "+aArray["Name"]+" at my profile! </h1>")
