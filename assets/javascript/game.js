// Hangman

//Object where keys are strings 0 to 49, and values are titles of musicals:
var wordObject = {
    0:	"Les Miserables",
    1:	"Wicked",
    2:	"The Phantom of the Opera",
    3:	"West Side Story",
    4:	"Blood Brothers",
    5:	"The Book of Mormon",
    6:	"Matilda",
    7:	"Miss Saigon",
    8:	"Rent",
    9:	"Sweeney Todd",
    10:	"Guys & Dolls",
    11:	"Priscilla Queen of the Desert",
    12:	"Jesus Christ Superstar",
    13:	"Once",
    14:	"Carousel",
    15:	"Cats",
    16:	"From Here to Eternity",
    17:	"Billy Elliot",
    18:	"Cabaret",
    19:	"Company",
    20:	"Hairspray",
    21:	"Merrily We Roll Along",
    22:	"My Fair Lady",
    23:	"Evita",
    24:	"Jersey Boys",
    25:	"Legally Blonde",
    26:	"Sunset Boulevard",
    27:	"The Lion King",
    28:	"Chess",
    29:	"Chicago",
    30:	"Gypsy",
    31:	"Hairspray",
    32:	"The Sound of Music",
    33:	"Spring Awakening",
    34:	"Starlight Express",
    35:	"Sunday in the Park with George",
    36:	"Into the Woods",
    37:	"The Producers",
    38:	"Top Hat",
    39:	"A Chorus Line",
    40:	"A Little Night Music",
    41:	"Avenue Q",
    42:	"Love Never Dies",
    43:	"Mary Poppins",
    44:	"Oklahoma",
    45:	"Oliver!",
    46:	"Chitty Chitty Bang Bang",
    47:	"Crazy For You",
    48:	"Fiddler on the Roof",
    49:	"Ghost"
}

wordArray = [];
blanksArray = [];
remainingGuesses = 10;
alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function resetArray(array) {
    while (array.length > 0) {
        array.pop();
    }
}

function createWordArray(randomNumber) {


    // Resets the wordArray so that it is empty.
    resetArray(wordArray);
    // Converts the random number to a string, so that it can be used to retrieve a new
    // musical from the wordObject Object
    var numberString = randomNumber.toString();
    // Sets the new "word" variable equal to the string retrieved from the wordObject
    var word = wordObject[numberString];
    // Sets the global variable wordArray equal to an array. where the the string retrieved from the
    // wordObject is split into individual characters
    wordArray = word.split("");

}

function createBlanksArray() {

    // Resets the blanksArray so that it is empty
    
    resetArray(blanksArray);
    
    // Fills in the global variable blanksArray with an underscore in each index where wordArray has
    // an alphabetical character. For indices of wordArray where there is a special character (comma,
    // exclamation point, etc.), that character is copied over

    for (i = 0; i < wordArray.length; i++) {
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


function resetGame() {

    var randomNumber = Math.floor(Math.random()*50);

    createWordArray(randomNumber);
    createBlanksArray();
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
            blanksArray[wordArray.indexOf(userGuess, startValue)] = userGuess;
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
    

    // If all letters are correctly guessed, display success message, then reset game
}

resetGame();
