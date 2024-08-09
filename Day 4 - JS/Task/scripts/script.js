var palFlag = true; // Assume it's a palindrome until proven otherwise
var caseFlag = false;
var str = prompt("Please enter a string: ");
caseFlag = confirm("Do you want to have it case sensitive?");
// con

if (!caseFlag) {
    str = str.toUpperCase();
}

for (var i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
        palFlag = false;
    }
}

if (palFlag) {
    document.write("<h1>The word is a palindrome.</h1>");
} else {
    document.write("<h1>The word is not a palindrome.</h1>");
}
