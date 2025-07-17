
// // // // var x = 10; //literal
// // // // console.log(x);

// // // // var x = new Number(10); //construction

// // // // console.log(x);
// // // // console.log(x.valueOf());

// // // // var n = 123.457;
// // // // console.log(n+"");
// // // // console.log(n.toLocaleString("ar-eg"));

// // // // console.log(n.toFixed(1));
// // // // console.log()

// // // // var textExp = 52000;
// // // // console.log(textExp.toExponential());

// // // // console.log(20.353.toPrecision(4));

// // // // Math.PI;




// // // /*-- ARRAY --*/
// // // //literal
// // // var arr1 = ["Mina",1,2, {}, [], function(){}, true];
// // // // console.log(arr1);


// // // //constructor
// // // var arr2 = new Array(3);

// // // //Dense array
// // // var arr4= new Array("Banana","Apple", "Orange");


// // // //References [Mutable]
// // // // var x = 10;
// // // // var y = x;

// // // var arr1 = [100,20,50,30];
// // // var arr2 = arr1;

// // // arr1[0] = "Hello";
// // // console.log(arr1);
// // // console.log(arr2);

// // var arr1 = [10,1,5,2,4];
// // var arr2 = [1,2,15,12,14];

// // console.log(arr2.sort(function(a,b){return a-b}));


// // //---Associative array
// // var arr5 = [5,10,20,30];
// // console.log(arr5.length);
// // console.log(arr5['length']);
// // arr5.push(100);
// // console.log(arr5);

// // arr5['push'](200);
// // console.log(arr5);


// // //Assycnhronous array

// // var aArry = [];
// // aArry['Name'] = "Ahmed";
// // aArry['Age'] = 10;
// // console.log(aArry);



// // for( var a in aArry)//a to3br 3n el keys
// // {
// //     console.log(a+": "+aArry[a]);
// // }

// var today = new Date();
// console.log(today);

// console.log(today.getMonth()+1);

var childWin;
console.log(window);
function openWindow(){
childWin = open("new.html","","width= 100, height=300");
}

function closeWindow()
{
    childWin.close();
}

