var numArray = [];
var number1;
var number2;
var number3;

do {
    number1 = Number(prompt("Enter Number 1"));
    if (isNaN(number1)) {
        alert("Please enter a valid number.");
    }
} while (isNaN(number1));

do {
    number2 = Number(prompt("Enter Number 2 (not zero)"));
    if (isNaN(number2) || number2 === 0) {
        alert("Please enter a valid number and not zero.");
    }
} while (isNaN(number2) || number2 === 0);

do {
    number3 = Number(prompt("Enter Number 3 (not zero)"));
    if (isNaN(number3) || number3 === 0) {
        alert("Please enter a valid number and not zero.");
    }
} while (isNaN(number3) || number3 === 0);

numArray.push(number1);
numArray.push(number2);
numArray.push(number3);

var sum = numArray[0] + numArray[1] + numArray[2];
var mul = numArray[0] * numArray[1] * numArray[2];
var div = numArray[0] / numArray[1] / numArray[2];

document.write("<h1> Sum of the 3 values: </h1>" + "<h2>"+ numArray.join(" + ") + " = " + sum + "</h2>");
document.write("<h1> Multiplication of the 3 values: </h1>" + "<h2>"+ numArray.join(" * ") + " = " + mul + "</h2>");
document.write("<h1> Division of the 3 values: </h1>" + "<h2>"+ numArray.join(" / ") + " = " + div + "</h2>");
