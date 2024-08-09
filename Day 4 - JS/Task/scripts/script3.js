
var text= prompt("Enter text: ");
var chars = prompt("Enter char: ");
var counter=0;
for(var i = 0; i<text.length; i++)
{
    if(text[i]==chars)

        {
            counter++;
        }
}

document.write("<h1>counter of char is: "+chars+"</h1");