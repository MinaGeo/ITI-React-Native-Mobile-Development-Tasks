var currentPicture = 1;
var totalPictures = 6;
var myInt;

function nextPic() {
    if (currentPicture < totalPictures) {
        currentPicture++;
        document.getElementById("pics").src = "../images/" + currentPicture + ".jpg";
    }
}

function previousPic() {
    if (currentPicture > 1) {
        currentPicture--;
        document.getElementById("pics").src = "../images/" + currentPicture + ".jpg";
    }
}

function startSlideShow()
{
    startInt();
}
function stopSlideShow()
{
    clearInterval(myInt); 
}

function startInt() {
    myInt = setInterval(function() {
        nextPic(); 
        if (currentPicture == totalPictures) {
            currentPicture = 0; 
        }
    }, 1000);


    
}