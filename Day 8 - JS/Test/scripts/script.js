// // //for {this}
// // function calButtons(elem)
// // {

// //     document.getElementById("screen").value += elem.value.trim();
// // }


// // //closure - function gowa function
// // function add(x){
// //     return function(y){
// //         return x+y;
// //     }
// // }
// // var myFun= add(5);
// // console.log(myFun(6));


// // //user defined object{} properties - methods

// // // //1) literal creation
// // // var obj1 = {};

// // // //1) constructor creation
// // // var obj2 = new Object();


// // var obj = {};
// // //dot notation
// // obj.name = "Aly";
// // obj.age = 20;
// // obj.address = ['123 st. ', '456 st'];

// // //subscribt notation
// // obj['isStudent'] = true;

// // console.log(obj);
// // console.log(obj.name);
// // console.log(obj["age"]);



// // var obj2 = {
// //     name: "Hossam", 
// //     age:20,
// //     info: function(){
// //         return this.name + ",  Age= " +this.age;
// //     }
// // };


// // //create methods 
// // obj.info = function()
// // {
// //     return this.name + ", Age: "+this.age;

// // }

// // console.log(obj.info());
// // console.log(obj2.info());


// // var st1 = {name:"Ahmed",age:15, courses:["Math","Stat"]};
// // var st2 = {name:"Mina",age:17, courses:["Science","English"]};
// // var st3 = {name:"sara",agge:17, course:[""]};

// // var arr = [st1, st2, st3];
// // for(var i = 0; i<arr.length;i++){
// //     console.log(arr[i].name, arr[i].age, arr[i].courses);
// // }
// //1) factory function
// function student(name, age, courses)
// {
//    return {name: name,
//            age: age, 
//            courses: courses};
// }

// var st1 = student("Ahmed",15,["Math","Stat"]);
// var st2 = student("Mina",17,["Science","English"]);


// var arr = [st1, st2];
// for(var i = 0; i<arr.length;i++){
//     console.log(arr[i].name, arr[i].age, arr[i].courses);
// }


// //2) Constructor function [Class]
// function Student(name,age,courses)
// {
//     this.name = name;
//     this.age = age;
//     this.courses = courses;

// }

// var stc1 = new Student("lara",30,["Programming", "Logic"]);
// //1) show on for loop?
// for(var i in stc1)
// {
//     console.log(i,":",stc1[i]);
// }
// //2. Delete??
// delete stc1.age;
// //3. Change value?
// stc1.age = 10;



var obj = {};
// Object.defineProperty(obj,"name", { //default false
//     value: "Osama",
//     writable: true, //can reassign/override new value
//     enumerable: true, //keda n2dr n3mlaha for loop
//     configurable: true, //keda we can delete
// })

Object.defineProperties(obj,{
    name:{value:"mina", configurable: true},
    age: {value: 20, enumerable: true}, 
    courses: {value: ["science"],writable:true}
});
console.log(obj);