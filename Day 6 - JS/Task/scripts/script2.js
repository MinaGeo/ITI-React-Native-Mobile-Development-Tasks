var myTextWin;
var textToPrint = "Hello, How are you?";
var counter = 0;
var myInt;

function openTextWin() {
    myTextWin = open("textWin.html", "", "width=300,height=300");
    startInt();
}

function startInt() {
    myInt = setInterval(function() {
        if (counter < textToPrint.length) {
            // Print one character at a time
            myTextWin.document.getElementById("hhh").innerHTML += textToPrint[counter];
            counter++;
        } else {
            clearInterval(myInt); 
            closeWin();

        }
    }, 500);


    
}

function closeWin()
{
    if(myTextWin){ 
        myTextWin.close();
    }
}
