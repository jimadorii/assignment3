/*
// Part 1 - ROCK PAPER SCISSORS

var pickOption;
pickOption = prompt("Please pick 'Rock' 'Paper' or 'Scissors'.");

console.log(pickOption);
    if (pickOption <= 0.34) {
    pickOption = "rock";
    } else if (pickOption < 0.67) {
    pickOption = "paper";
    } else if (pickOption > 0.671) {
    pickOption = "scissors";
    } else if (pickOption !== "        ") {
    pickOption = "An incorrect entry (Reload and try again)";
        window.alert("You made an incorrect entry");
    } 


var computerChoice = Math.random();

    if (computerChoice <= 0.34) {
    computerChoice = "rock";
    } else if (computerChoice < 0.67) {
    computerChoice = "paper";
    } else if (computerChoice > 0.671) {
    computerChoice = "scissors";
    } window.alert("You chose: " + pickOption + "\n The computer chose: " + computerChoice);
console.log(computerChoice);

var decision;
    if (computerChoice === pickOption) {
        window.alert("It's a tie. \n Please reload and try again!");
    } else if (computerChoice > pickOption) {
        window.alert("You lose!");
    } else if (computerChoice < pickOption) {
        window.alert("You win!");
    }
    
// Part 1 - END ROCK PAPER SCISSORS    
*/


/*
// Part 2 - BEGIN BASIC CALCULATOR
var numberOne;
numberOne = prompt("Please pick your first number.", "Enter Number here");
var numberOne = parseInt(numberOne);

var numberTwo;
numberTwo = prompt("Please pick your second and last number.", "Enter Number here");
var numberTwo = parseInt(numberTwo);

var method;
method = prompt("Type in 'add', 'multiply', 'divide' or 'subtract'?");

function calculate() {
    
    // BEGIN Method string analysis and entry replacement
    switch(method) {
            
        case "add":
        window.alert(numberOne + numberTwo);
        break;
        
        case "multiply":
        window.alert(numberOne * numberTwo);
        break;
            
        case "divide":
        window.alert(numberOne / numberTwo);
        break;
        
        case "subtract":
        window.alert(numberOne - numberTwo);
        break;

        case "+":
        window.alert(numberOne + numberTwo);
        break;
        
        case "*":
        window.alert(numberOne * numberTwo);
        break;
            
        case "/":
        window.alert(numberOne / numberTwo);
        break;
        
        case "-":
        window.alert(numberOne - numberTwo);
        break;
            
        // If invalid operator is entered message below will display
        default :
        alert("You have entered an invalid arithmatic operator" + "\n \n Please reload and choose to either: \n 'add' 'multiply' 'divide' 'subtract'");
    }
    // END Method string analysis and entry replacement
    
    window.console.log()
};
calculate();

// Part 2 - END BASIC CALCULATOR
*/


// Part 3 - BEGIN DEATH BY JAVASCRIPT

/*
// BEGIN problem 1
var oneHere;

function displayHere ( oneHere ) {
    window.console.log(oneHere);
    console.log(oneHere.toLowerCase().split('').sort().join(''));
}
displayHere("Webmaster");
// END problem 1
*/


/*
// BEGIN problem 2
var oneHere;

function displayHere ( oneHere ) {
    window.console.log(oneHere);
    console.log(oneHere.charAt(0).toUpperCase().slice() + oneHere.slice(1,10) + oneHere.charAt(10).toUpperCase().slice() + oneHere.slice(11,13) + oneHere.charAt(13).toUpperCase().slice() + oneHere.slice(14,18));
}
displayHere("webmaster is hello");
// END problem 2
*/


/*
// BEGIN problem 3

var word;
word = prompt("Please enter a word or sentence");
function sentence() {
    var matches = word.match(/[aeiouy]/gi);
    var count = matches ? matches.length : 0;
    alert(count + " vowel(s)");
}
sentence("Hello");
// END problem 3
*/

/*
// BEGIN problem 4
function makePassword()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    window.alert("Here is a string of 8 random characters: \n" + text);
}
makePassword();
// END problem 4
*/

/*
// BEGIN problem 5

SKIPPED

// End problem 5
*/