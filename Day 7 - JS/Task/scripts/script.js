
function CreatePercookies(){
    var userName = document.getElementById("userName").value;
    var userAge = document.getElementById("userAge").value;
    var userColor = document.getElementById("userColor").value;
    var maleRadio = document.getElementById('maleGender');
    var femaleRadio = document.getElementById('femaleGender');
    CreateNewCookie("userName",userName,1);
    CreateNewCookie("userAge",userAge,1);
    CreateNewCookie("userColor",userColor,1);
    if (maleRadio.checked == true && femaleRadio.checked== false) {
        CreateNewCookie("userGender",maleRadio.value,1);
    } else if (maleRadio.checked == false && femaleRadio.checked== true) {
        CreateNewCookie("userGender",femaleRadio.value,1);
    }
  
  }

function toggleGender(gender) {
    var maleRadio = document.getElementById('maleGender');
    var femaleRadio = document.getElementById('femaleGender');

    if (gender === 'male') {
        maleRadio.checked = true;
        femaleRadio.checked = false;
    } else if (gender === 'female') {
        femaleRadio.checked = true;
        maleRadio.checked = false;
    }
}

function displayUserInfo() {
    var userName = getCookie("userName");
    var userAge = getCookie("userAge");
    var userColor = getCookie("userColor");
    var userGender = getCookie("userGender");
    var visitCounter = getCookie("visitCounter");
    var genderImage = document.getElementById("img");
    if (userGender === "male") {
        genderImage.src = "../images/1.jpg";
    } else if (userGender === "female") {
        genderImage.src = "../images/2.jpg";
    }
    var p1 = document.getElementById("p1");

    var colorStyle = "black"; // Default color if no match

    switch (userColor.toLowerCase()) {
        case "red":
            colorStyle = "red";
            break;
        case "blue":
            colorStyle = "blue";
            break;
        case "green":
            colorStyle = "green";
            break;
    }

    p1.innerHTML = `Welcome <span style="color: ${colorStyle};">${userName}</span>, age: ${userAge}, you have visited this page <span style="color: ${colorStyle};">${visitCounter}</span> times.`;
}

