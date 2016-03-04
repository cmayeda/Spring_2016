
// Function Definitions
// ======================================================================
var guessIndex;

var checkLetter = function(guess, check) { 
	if( guess == check ) { 
		return true; 
	} else if( guess != check ) { 
		return false; 
	} else { 
		alert("Wrong type of character. Try again.")
		return false; 
	}
}

var checkWord = function(answer, userKnows, guess) { 
	var inList = false;

	for(var i = 0; i < answer.length ; i++ ) { 
		if (checkLetter(guess, answer[i]) == true) { 
			inList = true;
			guessIndex = i;
		} 
	}
	return inList; 
}

var checkWin = function(answer, userAnswer) { 
	var win = false;

	if(answerArray == userAnswer) { 
		win = true;
	} else { 
		win = false;
	}
	return win;
}

var hide = function(answer) { 
	var hidden = answer.toString().split("");
	for(var i = 0; i < hidden.length; i++) { 
		hidden[i] = "_";
	}
	return hidden;
}

var playableWords = ["blank", "cat", "plane", "hero", 
	"pleasure", "parole", "grateful"];

var play = function() { 

	var guessNum = 3;
	var wrongGuess = [];
	var answerWord = playableWords[Math.floor(Math.random()*6) + 1];
	var answerArray = answerWord.toString().split("");
	var userKnows = hide(answerWord);
	var playing = true;

	while(playing == true) { 

		var currentGuess = prompt("You know " + userKnows + ", and you have " + guessNum + 
			" guesses left. You have already guessed: " + wrongGuess + ". What is your guess?");

		if(checkWin(answerArray, userKnows) == true) { 

			alert("Congratulations! You won. The word was, " + answerWord + ".");
			playing = false;

		} else if (checkWord(answerWord, userKnows, currentGuess) == false ) { 
			
			if(guessNum == 0) { 

				playing = false;
				alert("Sorry, you're out of guesses. You lost. The word was " + answerWord + ".");

			} else { 

				alert("Sorry, that letter isn't in the word.");
				guessNum--;
				wrongGuess.push(currentGuess);
			}

		} else if(checkWord(answerWord, userKnows, currentGuess) == true) { 

			alert("Nice. The letter " + currentGuess +" is in the word.");
			userKnows[guessIndex] = currentGuess;

		} else { 
			alert("Unknown Error!");
		}
	}
}




// Call the play function to make it all happen!
