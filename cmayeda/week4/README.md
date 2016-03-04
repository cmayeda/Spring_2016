# hangman1
Create a hangman game, you wull use all the skills you have gained so far!



**checkLetter** 
- function that takes two parameters, a guess and a check 
- if the guess matches the check, return true, - otherwise return false


**checkWord**
- a function, take in three parameters, the answer(array), what the user knows(array), and a guess(string).
- set a variable called 'inList' to false
- loop through the answer, check each letter in the answer against the guess, use checkLetter
- if the letter is in the list, set inList to true
- return inList, it should be true if the value was found and false if it wasn't.


**checkWin** 
- function, take two parameters, an answer(array) and the users answer(array)
- if the what the user knows is equal to the answer, return true
- if the two are not equal, return false


**hide**
- a function, take in one parameter, the answer (array)
- make a copy of the answer and store in a var hidden
- loop through hidden, hit each letter with a "_"
- return the value of hidden


**play**
- Write a function called play, takes no parameters
- create need a list of words to play from
- create need a variabele to hold the number of guesses that a person is allowed to make
- create a list to hold the wrong guesses, so a user can know what they have already tried.
- use getRandom to get a random word from the list of words, assign it to a variable called answer, store as an array
- use the hide function to hide a copy of answer, assign to a new variable called userKnows
- create a variable called playing, set it to true
- while playing is true, run through the game play loop...
	+ show the user the hidden word
	+ show the user the number of guesses that they have left
	+ show the user the list of guesses that have already made.
	+ prompt the user for a letter
	+ check the users guess against the word, use the check function
	+ if the guess isn't in the list, remove 1 from the number of guesses.
	+ if there are no guesses left, console the user. reveal the word they didn't get. set playing to false to break the loop.
	+ use the checkWin function to see if the user solved the puzzle
	+ if the puzzle is solved, congratulate the user, set playing to false. 

**Call the play function to make it all happen!**

**Bonus**
- ask the user if they want to play again. play again if they confirm
- error check, only allow the user to input letters, exclude numbers and special characters
- Hint: That sounds like a nasty if else statment, is there a smarter way to attack this problem?

