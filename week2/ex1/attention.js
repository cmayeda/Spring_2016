//alert("js is workin");

var name = prompt("What is your name?");

var payingAttention = true;

while(payingAttention) {  //don't need to set = true, becuase will automaticaally do this 
	document.write(name + " is paying attention at " + Date() + "! <br>");
	payingAttention = confirm("Are you paying attention?");
}

alert("done!");