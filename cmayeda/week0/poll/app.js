var userName = prompt("What's your username?");

var age = parseInt(prompt("How old are you?"));

if(age >= 18) { 
	var voter = confirm("Are you registered to vote?");
	if( voter == true) {
		var candidate = prompt("Who will you vote for in the election? Bernie, Bernie Sanders, or Sanders?");
		document.write("Cool, you're voting for " + candidate); 
	} else { 
		document.write("Go here: http://www.rockthevote.com/");
	}
} else { 
	document.write("Sorry, you're not old enough to vote");
}
