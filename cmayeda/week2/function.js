var min = function(num1, num2) { 
	if(num1 >= num2) {
		return num2;
	} else {
		return num1;
	}
}

var number = parseInt(prompt("First number"));
var number2 = parseInt(prompt("Second number"));

alert(min(number, number2));
