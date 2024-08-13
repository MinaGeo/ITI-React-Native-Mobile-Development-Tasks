
// /** Document collection [Forms - links - Anchor - Images]
//  *  
//  * 
//  * 
//  */

// // console.log(document.forms);

// function chgImg()
// {
//   document.getElementById("img1").src = "../Images/2.jpg";
// }

// function chgImgBack()
// {
//   document.getElementById("img1").src = "../Images/1.jpg";

// }



// function selData()
// {
//   //#region One Select
//   // var mySelect = document.getElementById("sel1");
//   // var index = mySelect.selectedIndex;
//   // document.getElementById("div1").innerHTML = "Country: "+ mySelect.options[index].value;
//   //#endregion

//   //#region Multi Select
//   var mySelect = document.getElementById("sel1");
//   document.getElementById("div1").innerHTML ="";

//   for(var i =0; i<mySelect.length; i++)
//   {
//     if(mySelect.options[i].selected)
//     {
//       document.getElementById("div1").innerHTML += mySelect.options[i].value +", ";
//     }
//   }

//   //#endregion
// }


// console.log(document.cookie);
function CreateSessioncookies(){
CreateNewCookie("userName","Ahmed");
CreateNewCookie("userAge","22");
}


function CreatePercookies(){
  var uName = document.getElementById("inp1").value;
  CreateNewCookie("uName",uName,1);

}


















