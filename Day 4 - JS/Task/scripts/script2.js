//Name
var regName = /^[a-zA-Z]{3,}$/;
var userName;
do {
    userName = prompt("Enter Name (only letters, at least 3 characters):");
    if (!regName.test(userName)) {
        alert("Please enter a valid name.");
    }
} while (!regName.test(userName));


//Phone 8 [0-9]
var regPhone = /^[0-9]{8}$/;
var phone;

do {
    phone = prompt("Enter phone (only 8 characters)):");
    if (!regPhone.test(phone)) {
        alert("Please enter a valid number.");
    }
} while (!regPhone.test(phone));


var regMobile = /^(010|011|012){1}[0-9]{8}$/
var mobile;
console.log( regPhone.test(phone) );//true
do {
    mobile = prompt("Enter Mobile (must start with 010 or 011 or 012 and add extra 8 characters)):");
    if (!regMobile.test(mobile)) {
        alert("Please enter a valid mobile number.");
    }
} while (!regMobile.test(mobile));


//Email
var regEmail = /^[a-zA-Z0-9]+\@{1}[a-zA-Z0-9]+(.com|.net|.eg){1}$/;
var Email;
do {
    Email = prompt("Enter email must look like this 123@goe.com)):");
    if (!regEmail.test(Email)) {
        alert("Please enter a valid email.");
    }
} while (!regEmail.test(Email));


document.write("<h1>Hello, "+userName+"</h1>");
document.write("<h1>Your phone is, "+phone+"</h1>");
document.write("<h1>Your mobile is, "+mobile+"</h1>");
document.write("<h1>Your email is, "+ Email+"</h1>");

