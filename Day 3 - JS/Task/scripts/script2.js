var totalNumber = 0;
var n1 = 0;
var zeroFlag = false;

do {
    n1 = parseInt(prompt("Enter number please: "));

    if (isFinite(n1)) {
        if (n1 != 0) {
            totalNumber += n1;
        } else {
            zeroFlag = true;
        }
    } else {
        alert("Invalid number");
    }
} while (n1 != 0 && totalNumber <= 100);

if (totalNumber > 100) {
    document.write("<h1>Exceeded 100.</h1>");
} else if (zeroFlag) {
    document.write("<h1>0 is entered.</h1>");
}

document.write("<h2>Total number is: " + totalNumber + "</h2>");

// var con = confirm("Go to page 2? ");
document.write("<a href=\"page1.html\" > go to page1 </a>")