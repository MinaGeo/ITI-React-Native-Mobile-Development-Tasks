var radius = Number(prompt("Enter the value of circle's radius: "));
var circleArea = Math.PI * Math.pow(radius,2);
window.alert("Total area of cirlce is: "+ circleArea);

var sqrNum = Number(prompt("Enter the number you want to sqrt: "));
var numAns = Math.sqrt(sqrNum);
window.alert("square root of " + sqrNum + " is "+ numAns);


var angleN = Number(prompt("What is the angle you want to calculate its cos value?"));
var cosAns = Math.cos(angleN * (Math.PI / 180)); 
window.alert("Cos of " + angleN + " is: " + cosAns.toFixed(4));

