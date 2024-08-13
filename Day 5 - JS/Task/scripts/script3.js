var numArray = [];
var number1, number2, number3, number4, number5;
do {
    number1 = Number(prompt("Enter Number 1"));
    if (isNaN(number1)) {
        alert("Please enter a valid number.");
    }
} while (isNaN(number1));

do {
    number2 = Number(prompt("Enter Number 2"));
    if (isNaN(number2)) {
        alert("Please enter a valid number.");
    }
} while (isNaN(number2));

do {
    number3 = Number(prompt("Enter Number 3"));
    if (isNaN(number3)) {
        alert("Please enter a valid number.");
    }
} while (isNaN(number3));
do {
    number4 = Number(prompt("Enter Number 4"));
    if (isNaN(number4)) {
        alert("Please enter a valid number.");
    }
} while (isNaN(number4));
do {
    number5 = Number(prompt("Enter Number 5"));
    if (isNaN(number5)) {
        alert("Please enter a valid number.");
    }
} while (isNaN(number5));

numArray.push(number1);
numArray.push(number2);
numArray.push(number3);
numArray.push(number4);
numArray.push(number5);

var arrAsc = numArray;
var arrDsc = numArray;


document.write("<h1> array you have entered: </h1>"+ "<h2>"+numArray +"</h2>" );
document.write("<h1> array you have entered: </h1>"+ "<h2>"+numArray.sort( function(a,b){return a-b}) +"</h2>" );
document.write("<h1> array you have entered: </h1>"+ "<h2>"+numArray.sort( function(a,b){return b-a}) +"</h2>" );

// //[1,2,15,25,30]Ass
// console.log( arr ) )
// //[30,25,15,2,1]Des
// console.log( arr.sort( function(a,b){return b-a} ) )