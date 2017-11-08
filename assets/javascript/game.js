// Hangman

//Object where keys are strings 0 to 49, and properties are titles of musicals:
var wordObject = [
    "Les Miserables",
    "Wicked",
    "The Phantom of the Opera",
    "West Side Story",
    "Blood Brothers",
    "The Book of Mormon",
    "Matilda",
    "Miss Saigon",
    "Rent",
    "Sweeney Todd",
    "Guys & Dolls",
    "Priscilla Queen of the Desert",
    "Jesus Christ Superstar",
    "Once",
    "Carousel",
    "Cats",
    "From Here to Eternity",
    "Billy Elliot",
    "Cabaret",
    "Company",
    "Hairspray",
    "Merrily We Roll Along",
    "My Fair Lady",
    "Evita",
    "Jersey Boys",
    "Legally Blonde",
    "Sunset Boulevard",
    "The Lion King",
    "Chess",
    "Chicago",
    "Gypsy",
    "Hairspray",
    "The Sound of Music",
    "Spring Awakening",
    "Starlight Express",
    "Sunday in the Park with George",
    "Into the Woods",
    "The Producers",
    "Top Hat",
    "A Chorus Line",
    "A Little Night Music",
    "Avenue Q",
    "Love Never Dies",
    "Mary Poppins",
    "Oklahoma",
    "Oliver!",
    "Chitty Chitty Bang Bang",
    "Crazy For You",
    "Fiddler on the Roof",
    "Ghost"
]
var wordArray = [];
var blanksArray = [];
var guessedLetters = [];
var remainingGuesses = 12;
var wins = 0;
var losses = 0;
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This function clears any array

function resetArray(array) {

    while (array.length > 0) {
        array.pop();
    }

}

// This function generates a new wordArray by taking an integer, pulling that integer's value from the 
// wordObject, which has a list of musicals. Then it splits that string into an array of characters, and sets
// the global variable wordArray equal to the array

function createWordArray() {

    // Generates a random number between 0 and 49, the number of musical titles in the wordObject
    var randomNumber = Math.floor(Math.random()*50);
    // Resets the wordArray so that it is empty.
    resetArray(wordArray);
    // Sets the new "word" variable equal to the string retrieved from the wordObject
    var word = wordObject[randomNumber];
    // Sets the global variable wordArray equal to an array. where the the string retrieved from the
    // wordObject is split into individual characters
    wordArray = word.split("");

}

// This function takes the wordArray Array, and creates a new array where all alphabet letters
// in the wordArray are converted to underscores _, but special characters are copied over. This
// new array is set equal to blanksArray

function createBlanksArray() {

    // Resets the blanksArray so that it is empty
    
    resetArray(blanksArray);
    
    // Fills in the global variable blanksArray with an underscore in each index where wordArray has
    // an alphabetical character. For indices of wordArray where there is a special character (comma,
    // exclamation point, etc.), that character is copied over

    for (var i = 0; i < wordArray.length; i++) {
        // The boolean isAlphabet is true if the value of the character at index i of wordArray (converted to lowercase)
        // is equal to a character of the alphabetArray.
        var isAlphabet = alphabetArray.indexOf(wordArray[i].toLowerCase()) != -1;
        
        if (isAlphabet) {
            blanksArray[i] = "_";
        }

        else {
            blanksArray[i] = wordArray[i];
        }
    }

}

// This function takes an array and returns the same array, but with all lowercase characters

function convertArrayToLowerCase(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        // The boolean isAlphabet is true if the value of the character at index i of wordArray (converted to lowercase)
        // is equal to a character of the alphabetArray.
        var isAlphabet = alphabetArray.indexOf(array[i].toLowerCase()) != -1;
        
        if (isAlphabet) {
            newArray[i] = array[i].toLowerCase();
        }

        else {
            newArray[i] = array[i];
        }
    }

    return newArray;

}

// This function generates a new random number between 0 and 49, creates a new wordArray,
// creates a new blanksArray, and resets remainingGuesses to 10;

function resetGame() {

    resetArray(guessedLetters);

    createWordArray();
    createBlanksArray();
    remainingGuesses = 12;
    displayValues();
}

// This function checks whether two arrays are an exact match

function checkArrayMatch(array1, array2) {

    if (array1.length != array2.length) {
        console.log("These arrays are different in length");
        return false;
    }

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;

}

// -------------------------------MAIN GAME FUNCTION------------------------------------------------------
// This function takes an entered letter, determines whether that letter is in the wordArray, then updates
// the blanksArray, replacing underscores where that letter goes

function gameFunction (enteredLetter) {

    var keyCode = enteredLetter.which || enteredLetter.keyCode;
    var userGuess = String.fromCharCode(keyCode).toLowerCase();
    var startValue = 0;
    var wordArrayLowerCase = convertArrayToLowerCase(wordArray);
    // This variable will be TRUE if the user's entered letter is in the lower case wordArrayLowerCase
    var inTheArray = (wordArrayLowerCase.indexOf(userGuess, startValue) !== -1);
    // This variable will be TRUE if the user's entered letter has already been guessed
    var inGuessedLetters = (guessedLetters.indexOf(userGuess) !== -1);
    // This variable will be TRUE if the user's pushed key is NOT in the alphabet
    var notInAlphabet = (alphabetArray.indexOf(userGuess) == -1)

    // This hits a break if the user has entered a letter that they've already guessed
    if (inGuessedLetters || notInAlphabet) {
        return;
    }
    
    // This adds the user's pushed letter to the array of guessedLetters
    guessedLetters.push(userGuess);

    // This replaces any underscores with the correct letter guess 
    if (inTheArray) {

        while (wordArrayLowerCase.indexOf(userGuess, startValue) != -1) {
            var index = wordArrayLowerCase.indexOf(userGuess, startValue);            
            blanksArray[index] = wordArray[index];
            startValue++;
        }

    }

    // Since the user's entered letter doesn't match any lettera in the wordArray,
    // The number of available guesses is reduced by 1

    else {
        remainingGuesses--;
    }

    displayValues();

    setTimeout(function() { checkGameOver(); }, 100);
}

// This function displays all the current game values on the page

function displayValues() {
    document.getElementById("output").innerHTML = blanksArray.join("");
    document.getElementById("remaining").innerHTML = "Remaining Guesses: " + remainingGuesses; 
    document.getElementById("guesses").innerHTML = "Guessed Letters: " + guessedLetters.join(", ");     
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;  
}

// This function checks two things: whether remaining guesses has reached 0, or whether the user guessed all the correct letters

function checkGameOver() {
    if (remainingGuesses == 0) {
        losses++;
        alert("You lost.");
        resetGame();
    }
    else if (checkArrayMatch(wordArray, blanksArray)) {
        wins++;
        alert("You won!");
        resetGame();
    }
}

// This function sets up the game upon pageload

function gameSetup() {

    resetGame();
    displayValues();

}
