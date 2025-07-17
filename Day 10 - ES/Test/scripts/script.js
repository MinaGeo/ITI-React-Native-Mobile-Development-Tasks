
// function Add(x,y){
//     x = x || 0;
//     y = y || 0;

// function Add(x=0,y=0){
    
//     return x+y;
// }

// console.log(Add());

// function displayInfo(msg="Hello ya ",{title="dr",name="Ahmed",age=30}){
//     return `${msg} ${title}.${name} of age = ${age}`
// }
// function displayInfo(msg="Hello ya",op={}){
//     var defaultOp={title:"dr",name:"Ahmed",age:30};
//     var newObj = Object.assign(defaultOp,op);
//     return `${msg} ${newObj.title}.${newObj.name} of age = ${newObj.age}`
// }
// console.log(displayInfo("Welcome ya",{name:"Mina"}));

/*--- AJAX ---*/

var xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET","../Data/data.json");
xhr.send();

//On Change [readyState = 0 | 1 | 2 | 3 | 4]
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    // console.log("Inside event {readyState}")
    if(xhr.readyState == 4){
        if(xhr.status == 200){

        // Json.Parse() ==> transfer data from text to {}|[]
        // console.log(`response: ${xhr.responseText}`);
        var Data = JSON.parse(xhr.responseText); 
        var studentsArr = Data.students;   
        // console.log(Data.students);    
        for(let i =0; i<studentsArr.length; i++)
        {
           document.getElementById("names").innerHTML+= 
           "<p>" + studentsArr[i].name + "</p>";
        }
    
    }
    }
}

function sendRequest(){
    xhr.send();
}









