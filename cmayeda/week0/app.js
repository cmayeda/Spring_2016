//alert('js working lol')

var userName = prompt("What's your username?");

alert("hi "+userName);

var coder = confirm('do you code?');

if(coder == true) { 
	document.write(userName + " is a coder!");
} else { 
	document.write(userName + " is not a coder!");
}

var age = parseInt(prompt("What's your age?"));

if(age > 30) { 
	var newAge = age + 10; 
	alert(newAge + ': the camera adds ten years');
} else { 
	alert("sweet");
}