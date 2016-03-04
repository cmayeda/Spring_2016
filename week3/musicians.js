/*make a list of 5 of your favorite bands/musicians and put it 
inside of an array and store that into a variable called myFavoriteMusicalArtists 
(make all your options lower case) ask the user for a 
band/artist, turn the user input lower case and then tell the user 
if you like the band too */


var myFavoriteMusicalArtists = ["beatles", "black keys", "kishi bashi", "coldplay", "vampire weekend"];

var userBand = prompt("What is a musician you like?"); 

/*
	userBand.toLowerCase();
	if(myFavoriteMusicalArtists.indexOf(userBand) != -1) { 
		alert("Cool, I like them too.");
	} else { 
		alert("Hm, guess I don't know them."); 
	}
*/


var findBand = function(string) { 
	string.toLowerCase();
	
}