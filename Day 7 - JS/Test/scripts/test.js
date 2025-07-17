/** Objects
 * 1)BOM [Browser Object Model] [Window(Navigator - Screen - History - Location - Document)]
 * 2)DOM [Document Object Model]
 * 3)Built-In Objects[10] [Array - String - Boolean -...]
 * 4)User Defined Object
 */

//setTimeOut - setInterval

// setInterval('alert("Hi")',3000)

// setInterval(function (){
//     alert('Hi');
// },3000)

// function hi(){ //return undefined
//     alert('Hi');
// }

// var myInt;
// function StartInt(){
//     myInt = setInterval(hi,3000)
// }
// function StopInt(){
//     clearInterval(myInt);
// }


// //setTimeOut

// var myTime;
// function StartTime(){
//     myTime = setTimeout(function(){
//         alert("Hii");
//         StartTime();
//     },3000)
// }
// function StopTime(){
//     clearTimeout(myTime);
// }


// var myWin;//undefined ====> undefined() || unedefined.name XXXXX
// function openWin(){
//     myWin = open("profile.html","","width=100,height=300")
// }
// function closeWin(){
//     if(myWin)
//         myWin.close();
//     // close();//window.close();
// }

// function MoveWin(){
//     if(myWin){
//         myWin.moveTo(100,100)
//         myWin.focus();
//     }
// }

// function MoveByWin(){
//     if(myWin){
//         myWin.moveBy(50,50);
//         myWin.focus();
//     }
// }


//Navigator
// console.log(window.navigator);//{}
// console.log(navigator.language);//En
// console.log(navigator.userAgent);//......Chrome...
//Problem Solving [includes("") - indexOf('')(-1))]

// console.log("Hello".search("h"))

// console.log(navigator.userAgent.includes("Chrome"))

// if(navigator.userAgent.includes("Chrome")){
//     document.write("Keep Using Chrome")
// }else{
//     document.write("Please Download Chrome!!")
// }

// console.log(screen);//Screen {}


//Location
// console.log(location);//Location {}
// //properties
// console.log(location.pathname);// Port/file 
// console.log(location.port);// 5500
// console.log(location.protocol);// http
//methods [reload - assign - replace]


//History[go-back-forward]


//document [properties - methods]

/**Properties [bgColor - fgColor - title - cookie - ... ] */
/**Methods [write - writeln]  XXXXXXX */
/** Methods 
 * 1) getElementById() 
 * 2) getElementsByClassName() 
 * 3) getElementsByTagName() 
 * 4) getElementsByName() 
 * ----------------------------------
 * 5)querySelector()
 * 6)querySelectorAll()
 */


// onload = function(){
//     //code
//     document.bgColor = "red";
// }

// document.bgColor = "red";
// document.fgColor = "yellow";
// document.title = "Main";

// console.log(document.getElementById("hhh"));

// document.getElementById("hhh").style.color = "blue";
// document.getElementById("hhh").style.backgroundColor = "black";


//innerHTML - innerText [open close tag] [p - h1]
// document.getElementById("hhh").innerText += " <h1>Welcome</h1>"
// document.getElementById("hhh").innerHTML += " <h1>Welcome</h1>"


//.value ===> void tag [input]
// document.getElementById("i1").value = "Ahmed"
// document.getElementById("i1").style.color = "red"

// console.log(document.getElementsByClassName("myClass"))


// var arrOfElem = document.getElementsByClassName("myClass")//[p, h1, h5, div]
// // arrOfElem[0].style.color = "yellow";
// // arrOfElem[1].style.color = "yellow";
// // arrOfElem[2].style.color = "yellow";
// // arrOfElem[3].style.color = "yellow";
// for(var i=0; i<arrOfElem.length; i++){
//     arrOfElem[i].style.color = "yellow";
// }



//TagName - #ID - .className
// console.log(document.querySelector("#i1"))
// document.querySelector("#i1").style.color = "red"
// document.querySelector("input").style.color = "red"
// document.querySelector(".myClass").style.color = "red"

// console.log( document.querySelectorAll(".myClass") )