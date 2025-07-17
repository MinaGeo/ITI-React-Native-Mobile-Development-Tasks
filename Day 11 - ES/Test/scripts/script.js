// //* Set [properties - methods]

// let mySet = new Set([1,"Hello",true,10]);
// console.log(mySet)

// mySet.add("welcome");
// console.log(mySet);
// console.log(mySet.has("welcome"));
// mySet.delete("welcome");
// console.log(mySet.has("welcome"));
// // mySet.clear();
// console.log(mySet.entries());
// console.log(mySet.keys());
// console.log(mySet.values());


//====================================================
/* Map [properties - Methods]
Methods [set(key, value) - get(key) - delete(key)]
Iterators Methods [entries() - values() - keys()]
*/

// let myMap = new Map([["name","Ahmed"],["userName","Ahmed"],["age",10],[20,10]]);
// console.log(myMap);
// // console.log(myMap.size);
// myMap.set("userAge",22);
// console.log(myMap);
// console.log(myMap.get("userAge"));


// let mySet = new Set([1,"Hello",true,10]);
// let myMap = new Map([["name","Ahmed"],["userName","Ahmed"],["age",10],[20,10]]);


// // for(let i of mySet){
// //     console.log(i);
// // }


// for(let [key,val] of myMap){
//     console.log(key+": "+val);
// }


// for (i=0) ==> indexes
// for (in) ==> enumerable properties ==> objects
// for (of) ==> iterable objects ==> set = map

//==================================
//Generator function ==> Itertable ==> next()

// function* hamada(){
//     //code
//     console.log("before 1");
//     yield 1;
//     //code 
//     console.log("before 0");
//     yield 0;
//     console.log("before Hello");
//     yield* "Hello";
//     console.log("before true");
//     yield true;
// }
// let iter = hamada();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function* EvenGenerator(arr){
//     for(let i =0; i < arr.length; i++){
//         if(arr[i]%2==0){
//             yield arr[i];
//         }
//     }
// }

// let  iter = EvenGenerator([2,3,4,5,6,7,8,9,9,10]);
// for(let i of iter){
//     console.log(i);
// }
// console.log(iter.next());

// console.log("this is a message".replace("e","_"));
// console.log("this is a message".replaceAll("e","_"));

// var a = 0;
// a &&=3;// a = a && 3
// console.log(a);

// var a = false;
// a ||= 3;
// console.log(a);

// var a;
// if( a==null || a == undefined){
//     a=3;
// }

// a??=3;
// console.log(a);
// var x = 10;
// var myPromise = new Promise(function(resolve, reject){
//     //if = true ==> fullfilled
//     //if = false ==> reject
//     if( x==10){
//         var students = [
//             {id:1,name:"Ahmed"},
//             {id:2,name:"Lara"},
//             {id:3,name:"Ali"}];
//         resolve(students);
//     }
//     else{
//         reject("7asal error");
//     }


// })

// myPromise
//         .then((data)=>{console.log(data)})
//         .catch((err)=>console.log(err));
// myPromise.catch(()=>{console.log("7asal error")});

// async function Test(){
//     var x = 10;
//     var p1 = new Promise(function(resolve,reject){
//         if( x == 10){
//            setTimeout(()=>{ resolve("success promise 1") }, 5000)
//         }else{
//             reject("Error promise 1")
//         }
//     })
//     var p2 = new Promise(function(resolve,reject){
//         if( x== 10){
//             setTimeout(()=>{ resolve("success promise 2") }, 1000)
//         }else{
//             reject("Error promise 2")
//         }
//     })

//     await p1;

//     p1.then((data)=>{console.log(data)})
//       .catch((err)=>{console.log(err)});

//     p2.then((data)=>{console.log(data)})
//       .catch((err)=>{console.log(err)});

// }

// Test();

// import * as cal from "../modules/Calc.js";
// console.log(cal.Add(10,20));

// import sub from "../modules/Calc.js";
// console.log(sub(10,20));

//object
// var obj = {name:"ahmed"};

// //Constructor
// function consObj(name, age){
//     this.name = name;
//     this.age = age;
// }
// var oo1 = new consObj("Ali",20);
// console.log(oo1);


class Person{
    #salary = 10_000;
    constructor(name="Person name", age=0){
        this.name = name;
        this.age = age;
    }    
    getSalary(){
        return this.#salary;
    }
    getName(){
        return this.name;
    }
    setSalary(salary){
        this.#salary=salary;
    }


}
var p0 = new Person();

var p1 = new Person("mina",20);
console.log(p0.getName());

console.log(p1.getSalary());
console.log(p1.setSalary(20000));
console.log(p1.getSalary());
