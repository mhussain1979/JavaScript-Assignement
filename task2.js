


var names = ["Michael","John","Tony"];
var score = [320,230,480];

var total= 500;


for (var i=0; i< names.length; i++) {

  document.write("Score of " + names[i]+ " is " + score[i]+ "." + " Percentage: " + (score[i] * 100/total) + "%"+ "<br />");

}

