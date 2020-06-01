var colr = [];

colr.unshift(prompt("Please enter the colour you want to enter at the beginning"));
colr.push(prompt("Please enter the colour want to enter at the end"));

document.write("List of First and Last color entered by the user "+colr+ "<br />"+"<br />");


colr.splice(0,0,"yellow","blue");
document.write("List of all the colors in the array: " +"<br />");
 
for (var i= 0; i < colr.length; i++)
{
    document.write(colr[i] + "<br />");
            
}

document.write("<br />"+"<br />");
var frrm = colr.shift();
document.write("The first color removed from array is : "+ frrm + "<br />"+"<br />");
document.write("After removing first color array list is :" + "<br />");

for (var j= 0; j < colr.length; j++)
{
    document.write(colr[j] + "<br />");
}

document.write("<br />"+"<br />");
var lsrem = colr.pop();
document.write("The last color removed from array is : "+ lsrem + "<br />"+"<br />");

document.write("After removing last color from array now the list is :" + "<br />");

for (var k= 0; k < colr.length; k++)
{
    document.write(colr[k] + "<br />");
}




var usrind= prompt("Please enter the index number where you want to enter the color");
var usrcol= prompt("Please enter the color");
document.write("<br />" + "<br />");
document.write("New entering  color are at array:" + usrind + " are " + usrcol)
colr.splice(usrind,0,usrcol);

document.write(colr[0] + "<br />");

//var spllist= [];
//spllist = colr.splice(usrind,0,usrcol);
document.write("After entering the new color now  list is :"+ colr + "<br />");

for (var l= 0; l < colr.length; l++)

{
    document.write(colr[l] + "<br />");
}



var remst= prompt("Please enter the index number from  where you want to start remove the color");
var remen= prompt("Please enter the last index umber untill that you want to remobe color");

document.write("<br />" + "<br />");

var latind = colr.slice(remst,remen);

document.write("NOW THE FINALL COLOR LIST IS :" + "<br />");

for (var m= 0; m < latind.length; m++)

{
    document.write(latind[m] + "<br />");
}





