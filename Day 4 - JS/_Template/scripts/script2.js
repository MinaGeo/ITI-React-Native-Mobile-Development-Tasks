function fun(){
    alert("u Clicked at h1");
}


// function Add(x,y){
//     // console.log(x+y);
//     // alert(x+y);
//     var result = x+y;
//     console.log(result);
//     // return result;
// }

// Add(5,10);//15
// Add(5);//5+undefined = NaN
// Add();//undefined+undefined = NaN
// Add(5,10,20);//5+10 = 15

// console.log("Ended")

// var x = Add(5,10);

// console.log(x);// undefined ===> 15

// console.log( Add(50,20) );//70


// function Sum(x=0,y=0){
//     // x = x || 0;
//     // y = y || 0;
//     return x+y;
// }

// console.log( Sum() );//NaN ===> 0

// Sum(5,10,50)



// function Sum(){
//     // console.log(arguments);//[]
//     var result = 0;
//     for(var i = 0; i< arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }

// console.log(Sum())//0
// console.log(Sum(10))//10
// console.log(Sum(10,5))//10+5
// console.log(Sum(10,5,6))//10+5+6
// console.log(Sum(10,5,6,15))//10+5+6+15


// console.log(x);//undefined

var x = 10;//Global Scope
// console.log(x);//10

// hi();

// function hi(){
//     var y = 20;//Local Scope
//     // var x = 5;//Local Scope
//     x = 5;//Access Global Scope
//     z = 50;
//     console.log(x+y+z);//30 ===> 25 ===> 75
// }

// console.log(x);//10
// console.log(z);//Reference Error ==> z is not Defined
// hi();
// console.log(z);//50 ==> Global
// console.log(x);//10 ===> 5

// console.log(y);//ReferenceError ==> y is not Defined

// console.log(myFun);//undefined

// console.log( myFun(10,5) )//TypeError ==> myFun is not A Function

// Anonynimas Function [statement function]
// var myFun = function(t=0,u=0){return t+u};

// console.log( myFun(10,5) )//15



/** Main Objects in JS
 * 1)BOM [Browser Object Model]==> [Windwo] ==> [Location - Screen -  ....]
 * 2)DOM [Document Object Model] ==> document
 * 3)Built-In Objects [Number - String - Boolean - ....]
 * 4)User Defined Objects [var obj = {} ]
 */


// Any Object ==> [Properties - Methods]


/** 3)Built-In Objects
 * --------------------
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) Reg Exp [Regex]
 * 5) Array
 * 6) Function
 * 7) Math
 * 8) Date
 * 9) Error
 * 10) Object
 */


//--------------- String Object[Properties - Methods] ---------------
//Literal Creation
var str = "Hello World";
//Constructor Creation
var str2 = new String("Hello World");

// console.log(str.length);//Property
// console.log(str2.length);//Property

//String Methods
// console.log( str.charAt(1) );//e
// console.log( str.indexOf("H") );//0
// console.log( str.indexOf("h") );//-1
// console.log( str.indexOf("l") );//2
// console.log( str.lastIndexOf("l") );//9

// console.log( str.indexOf("World") );//6

// console.log( str.substr(2,5) )
// console.log( str.substring(2,5) )

// console.log( str.split() );//['Hello World']
// console.log( str.split(" ") );//['Hello', 'World']
// console.log( str.split("l") );//['He', '', 'o Wor','d']
// console.log( str.split("rl") );//['Hello Wo', 'd']


// console.log( str.replace("l","_") )//'He_lo World'
// console.log( str.replace("L","_") )//'Hello World'
// console.log( str.replace("rl","**") )//'Hello Wo*d'

//2)Built-in Object [Regex (Regular Expression)]
// console.log( str.replace(/l/,"_") )//'He_lo World'
// //Flags ==> [ i(ignore CaseSen)  g(global)   m(Multible Line)]
// console.log( str.replace(/l/g,"_") )//'He__o Wor_d'
// console.log( str.replace(/L/g,"_") )//'Hello World'
// console.log( str.replace(/L/ig,"_") )//'He__o Wor_d'



//REG
// //1) Literal Creation
// var reg = /L/ig;
// console.log( str.replace(reg,"_") )//'He__o Wor_d'

// //2) Constructor Creation
// var reg2 = new RegExp(/L/, "ig");
// console.log( str.replace(reg2,"_") )//'He__o Wor_d'


//User Name
// var regName = /^[a-zA-Z0-9]{3,}$/
// var regName = /^[a-zA-Z]{3,}[0-9]{1,3}$/

// var userName = prompt("Enter Name");//Ahmed

// console.log(regName.test(userName));//true|false
// if(regName.test(userName)){
//     alert("Welcome ya "+ userName)
// }else{
//     alert("Please Enter Valid userName [small Char] Without Any Space")
// }


//Phone 8 [0-9]

// var regPhone = /^(02|03){1}\-{1}[0-9]{8}$/
// var phone = "02-12345678";
// console.log( regPhone.test(phone) );//true


/**
 *     ? ==> Zero | One
 *     * ==> Zero | More
 *     + ==> One | More
 */

// //Email
// var regEmail = /^[a-zA-Z]+\@{1}[a-zA-Z]+(.com|.net|.eg){1}$/;
// var Email = "Ahmed@gmail.com";

// console.log( regEmail.test(Email) );//true




