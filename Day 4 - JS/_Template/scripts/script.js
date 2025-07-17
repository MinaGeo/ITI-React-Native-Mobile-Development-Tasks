// function fun()
// {
//     alert("You clicked at h1");
// }
// function Add(x,y)
// {
//     console.log(x+y);
//     return x+y;

// }

// // function Sum(x = 0,y = 0)
// // {

// //     return x+y;

// // }



// // Add(10,10);
// // Add(5);
// // console.log("Hi: "+ Add());
// // Add(5,10,20);

// // var x = Add(5, 10); //global scope
// // console.log(x);

// var x = 10;

// //we can call functions before and after implementations 3ady 3lshan they call by reference+


// function Sum()
// {
//     var result = 0; //local scope
//     for(var i =0; i<arguments.length;i++)
//     {
//         result+=arguments[i];
//     }

//     return result;
//     // console.log(arguments);
// }

// console.log(Sum());
// console.log(Sum(10));
// console.log(Sum(10,5));
// console.log(Sum(10,5,6,15));


// console.log(myFun); undefined

// console.log(myFun(5,10)); typeError

//Anonymous function; statement function
var myFun = function(t=0, u = 0){return t+u};

console.log(myFun(5,10));