
// // // // var obj = {

// // // //     name: "Ahmed",
// // // //     age: 20,    
// // // //     disp: function(){console.log(obj.name)},
// // // //     disp2: function(){console.log(this.name)},
// // // //     disp3: function(){console.log(this.age)},
// // // //     disp3_5: function(){console.log(obj.age)},
// // // //     disp4: function(){
// // // //         // console.log(this);
// // // //         var that = this;
// // // //         setTimeout(function(){console.log(that.age)}, 1000)
// // // //     },
// // // //     disp5: function(){

// // // //         setTimeout(()=>{console.log(this.age)},1000)
// // // //     }

// // // // }

// // // // obj.disp4();
// // // // obj.disp3();
// // // // obj.disp3_5();
// // // // obj.disp5();


// // // // var result1 = function(x,y){
// // // //     return x+y;
// // // // };
// // // // var result = (x)=>x+20;
// // // // var result = (x,y)=>x+y;

// // // var result = x=>x+10;
// // // console.log(result(10));

// // // // console.log(w);
// // // // w=u=>u*2;

// // //1) Rest parameter
// // function Add(name, ...x){ //three dots fo2 hena 
// //     // console.log(x);
// //     // console.log(arguments);

// //     var result = 0;
    

// //     for(let i=0; i<x.length;i++)
// //     {
// //         result +=x[i];
// //     }

// //     return "Name: "+name+", result: "+ result;
// // }

// //  console.log(Add("khaled"))
// //  console.log(Add("Mina"))
// //  console.log(Add("Mostafa",5,6,7,8,6))

// // //2) Spread Operator
// // function FullName(fName, lName)
// // {
// //     return fName+" "+lName;
// // }
// // var arr = ["Ahmed","Osama"];
// // console.log(FullName(...arr)); //three dots wana bcall el function
// // //Destructing
// // var arr = [5,4,7];
// // var [,y,] = arr;
// // console.log(y);


// // var obj = {name:"Ahmed", age:20
// // };
// // var {name: username, age: userage} = obj;
// // console.log(username);


// //String updates
// //Template string
// var fName = "Ahmed";
// var lName = "lara";
// console.log(`Hello ${fName} ${lName}`);

// var myIndex = -1;
// var arr = [5,45,4,6,3,4];
// console.log(arr.find(function(num,i){
//     if(num == 46) myIndex=i;
//     // console.log(`index: ${myIndex}`)
//     return num == 46}))

// console.log("index: ", myIndex)


var arr = [5,15,60,40];
console.log(arr.find(num=>num==5));


console.log(arr.every(num=>num%5==0))
console.log(arr.some(num=>num%50==0))

console.log(arr.filter(num=>num%10==0))

arr.forEach(num=>console.log(num))

console.log(arr.map(num=>"Number: "+num
))