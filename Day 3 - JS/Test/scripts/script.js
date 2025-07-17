
// var x= 10;

// var y = "10";
// console.log(x==y); //doesn't check for datatype
// console.log(y);

// var x = "123.56";
// var y = parseInt(x);
// var z = parseFloat(x);

// console.log(y);
// console.log(typeof y);
// console.log(z);
// console.log(typeof z);

// var t = Number(x);
// console.log(t);

// var u =+x;
// console.log(u);


// // isFinite isNaN()
// // Built-In Methods [parselnt -
// var x = "a123.56Ahmed" ;
// // var y = parselnt(x);
// var y = parseFloat(x)
// console.log(y) ; //NaN
// console.log(typeof y)
// console.log(isFinite(y));

// alert("HELLO")

var username = prompt("Please enter your name: "); //"String" || null


if(username)
{
    alert("Hello " + username)
}

var n1 = parseInt(prompt("Enter number1: "));
var n2 = parseInt(prompt("Enter number2: "));
var result  = (n1) + (n2);
alert("total number is: "+result);
