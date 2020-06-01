// Task1 to enter degrees in array 

var degrees = [];
degrees.push("SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD");
document.write("Qualifications:");
document.write("<br />"+"<br />" );


for (var i = 0; i < degrees.length; i++)
{
    document.write((i+1)+")" + " "+ degrees[i]+ "<br />" );
    

}
