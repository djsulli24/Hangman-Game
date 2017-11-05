Hangman

//Object where keys are numbers 0 to x, and values are words
wordArray = [];
blanksArray = [];
remainingGuesses = 10;

function resetArray(array) {
    while (array.length > 0) {
        array.pop();
    }
}

function createWordArray() {

}

function createBlanksArray() {

}


function resetGame() {
    // Generate new random number between 0 number of words
    // Reset wordArray
    // Reset blanksArray
    // Create new wordArray
    // Create new blanksArray
    remainingGuesses = 10;
}

function gameFunction (enteredLetter) {
    var userGuess = enteredLetter;
    var startValue = 0;

    // This variable will be TRUE if the user's entered letter is in the wordArray
    var inTheArray = (wordArray.indexOf(userGuess, startValue) != -1);
    
    // If the 
    
    if (inTheArray) {

        // 

        while (wordArray.indexOf(userGuess, startValue) != -1) {
            blanksArray[wordArray.indexOf(userGuess, startValue)] = userGuess];
            startValue++;
        }

        // Now that all correct blanks have been filled in with the user's guess,
        // the number of available guesses is reduced by 1
        remainingGuesses--;

    }

    // Since the user's entered letter doesn't match any lettera in the wordArray,
    // The number of available guesses is reduced by 1

    else {
        remainingGuesses--;
    }

}

While (remainingGuesses > 0) {
    //When keystroke is hit, call game function
    

    
}

resetGame();
