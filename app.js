console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let userInput = Number(window.prompt("Guess my favorite number!"));
var myFavoriteNumber = 29;

if (userInput < myFavoriteNumber) {
    console.log('too low');
} else if (userInput > myFavoriteNumber) {
    console.log('too high');
} else  { 
    console.log('Congratulations!!!');
}

// Exercise 2

let color = window.prompt("What's your favorite color?");

switch(color.toLocaleLowerCase()) {
    case "blue":
       console.log("Blue like the sky!");
        break;
    case "red":
        console.log("Red is Red!");
        break;
    case "green":
        console.log("The color of my eyes!");
        break;
    case "yellow":
        console.log("The happy color!");
        break;
    case "purple":
        console.log("That's my favorit color, too!!!");
        break;
    default:
        console.log("Such a beautiful color!");
    }
