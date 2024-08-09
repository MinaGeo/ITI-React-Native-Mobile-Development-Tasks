
var textToPrint = prompt("Please enter a text: "); //"String" || null


if(textToPrint)
{
    for(var i = 1; i<7; i++)
    {
        document.write("<h"+i+"> "+textToPrint+"</h"+i+">")
    }


}
else
{
    alert("Invalid string");
}

// var con = confirm("Go to page 2? ");
document.write("<a href=\"page2.html\" > go to page2 </a>")

    // window.location.href = 'page2.html';
