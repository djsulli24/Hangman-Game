// Hangman

//Object where keys are strings 0 to 49, and properties are titles of musicals:
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

var wordArray = [];
var blanksArray = [];
var remainingGuesses = 10;
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

    var randomNumber = Math.floor(Math.random()*50);

    createWordArray(randomNumber);
    createBlanksArray();
    remainingGuesses = 10;
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

// This function takes an entered letter, determines whether that letter is in the wordArray, then updates
// the blanksArray, replacing underscores where that letter goes

function gameFunction (enteredLetter) {
    var userGuess = enteredLetter.toLowerCase();
    var startValue = 0;
    var wordArrayLowerCase = convertArrayToLowerCase(wordArray);

    // This variable will be TRUE if the user's entered letter is in the lower case wordArrayLowerCase
    var inTheArray = (wordArrayLowerCase.indexOf(userGuess, startValue) != -1);
    
    // This replaces any underscores with the correct letter guess
    
    if (inTheArray) {

        while (wordArrayLowerCase.indexOf(userGuess, startValue) != -1) {
            var index = wordArrayLowerCase.indexOf(userGuess, startValue);            
            blanksArray[index] = wordArray[index];
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
    

    // If all letters are correctly guessed, display success message, then reset game.
}

resetGame();
