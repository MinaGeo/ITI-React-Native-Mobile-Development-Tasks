/**
 * 1) BOM
 * 2) DOM
 * 3) Built-In Objects
 * 4) User Defined Objects
 */



/** Built-In
 * 1) Number ---> 
 * 2) String --->
 * 3) Boolean --->
 * 4) RegExp  --->
 * 5) Error
 * 6) Function
 * 7) Math --->
 * 8) Object
 * 9) Array --->
 * 10) Date --->
 */


//Number
// //1) Literal Creation
// var x = 10;

// //2) Constructor Creation
// var y = new Number(10);

// console.log(x);//10
// console.log(y);//Number {10}

// console.log( y.valueOf() )


// var n = 123.456;
// console.log( n )
// console.log( n+"" )
// console.log( n.toString() )
// console.log( n.toLocaleString("ar-eg") )
// console.log( n.toLocaleString("zh-Hans-CN-u-nu-hanidec") )
// // n = n.toString();
// console.log(n)


// var x = 10.5;
// var y = "10";
// console.log( isFinite(x) );//true
// console.log( isFinite(y) );//true

// console.log( Number.isFinite(x) );//true
// console.log( Number.isFinite(y) );//false
// console.log( Number.isInteger(x) );//true==>false


// var num = 10.479;
// console.log( num.toFixed(2) )
// console.log( num.toFixed(3) )
// console.log( num.toFixed(4) )
// console.log( num.toFixed(1) )

// var num = 552543;//5.5*10^4 === 55000
// console.log( num.toExponential(4) )

// var num = 20.35;
// console.log( num.toPrecision(3) );


//Math



//Array [Property(length) - Methods]
//1)Literal Creation
// var arr = [];
// arr = [1,2,3,4, "Hello", {} ,[], function(){}, true]

// arr[20] = "Hiiiii";//Assign New Value

// console.log(arr);
// console.log( arr[15] );//undefined [Default Value] [Getting Value]
// console.log( arr.length );//21 [0,......,20]

//2)Constructor Creation
// var arr2 = new Array();
// var arr3 = new Array(3);//Length
// console.log(arr3);

// arr3[5] = "Hello";
// console.log(arr3);//[5xempty, "Hello"]


// //3)Dense Array
// var arr4 = new Array("Apple","Banana","Orange")
// arr4[3] = "KIWI"
// console.log(arr4);


//References [Mutable]

//Primative Data Types ==> Immutable
// var x = 10;
// var y = x;
// // console.log(x);//10
// // console.log(y);//10

// x = 50;
// console.log(x);//50
// console.log(y);//10


// var arr1 = [100,20,50,30];
// var arr2 = arr1;
// console.log(arr1);//[100, 20, 50, 30]
// console.log(arr2);//[100, 20, 50, 30]

// arr1[0] = "Hello";
// console.log(arr1);//["Hello", 20, 50, 30]
// console.log(arr2);//["Hello", 20, 50, 30]

//push[Add to Last], pop[Remove From Last], shift[Remove From First], unshift[Add at First]
// var arr1 = [10,1,5,2,4,15];
// var arr2 = [7,8,9,20,30];

// console.log( arr1.concat(arr2) );
// console.log(arr1);
// var ConcatingArrays = arr1.concat(arr2);
// console.log(ConcatingArrays);
// console.log(arr1);
// console.log(arr1.join());
// console.log(arr1.join("*"));
// console.log(arr1.join(" hi "));

// var arr = [1,2,3];
// console.log( arr );
// console.log( arr.join() )
// console.log( arr.join().split(",") )

// //sort & Sol of reference Copy

// var arr = [15,1,2,25,30];
// // console.log( arr.sort() );//[1,15,2,25,30]
// // console.log(arr);//[1,15,2,25,30]

// //[15,1,2,25,30]
// //[1,15,2,25,30]
// //[1,2,15,25,30]

// //[1,2,15,25,30]Ass
// console.log( arr.sort( function(a,b){return a-b} ) )
// //[30,25,15,2,1]Des
// console.log( arr.sort( function(a,b){return b-a} ) )



//-------- Assocciative Array --------
// var arr = [5,10,20,30];
// //Dot Notation
// console.log( arr.length );//4
// //Subscribt Notation
// console.log( arr['length'] );//4

// arr.push(100);
// console.log(arr);//[5,10,20,30,100]

// arr['push'](200);
// console.log(arr);//[5,10,20,30,100,200]


// var assArray = [];//[Key Value Pair]
// assArray['name'] = 'Ahmed';
// assArray['age'] = 10;

// console.log(assArray);//[name:'Ahmed', age:10]

// console.log( assArray['name'] );//Ahmed
// console.log( assArray['age'] );//10

// console.log( assArray.length );//0
// console.log( assArray['length'] );//0

// // for(var i = 0; i< assArray.length; i++){
// //     console.log("Hiii");
// // }

// // assArray['address'] = "123 st";
// var a = 'address';
// assArray[a] = "123 st";

// //for in ==> Objects ==> 
// for(var i in assArray){
//     // console.log(i);//Keys
//     console.log( i+": "+ assArray[i] );
// }



//Cookies ==> AssArray ==> Key, Value Pair


//Date [properties - methods]
// var today = new Date();
// console.log(today);

// console.log( today.getMonth() );//7  [0-11]
// console.log( today.getYear() );//124 [0(1900)]
// console.log( today.getYear()+1900 );//124+1900=2024 [0(1900)]
// console.log( today.getFullYear() );//2024
// console.log( today.getDate() );//8
// console.log( today.getDay() );//4

// today.setMonth( today.getMonth()+1 )

// console.log(today);





/**1) BOM[Browser Object Model]===> [window]
 *      A) window ==> [Parent - Container]
 *            1)Navigator [Name - Version]
 *            2)Screen [Dimentions Of Screen]
 *            3)History [History per Page]
 *            4)Location [URL]
 *            5)Document ==> DOM Manipulation
 */

// var x = 10;
// console.log(window);//{alert:f, confirm:f, prompt: f, }
// console.log(window.chrome);//{}
// console.log(window.atob());//f(){//hidden code}
// console.log(window.atob);//f(){//Native code}
// window.prompt("Hello")
// window.confirm("Hello")
// window.alert("Hello")
// window.document.write("<h1>Hello</h1>")


// window.x = 10;

// console.log(window);//{....... ,  x:10}

//Methods [open - close - ....]

var childWin;
function openWin(){
    childWin = open("profile.html","", "width=100,height=300");
}

function closeWin(){
    childWin.close();
}




