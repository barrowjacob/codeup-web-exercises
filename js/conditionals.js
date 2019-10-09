"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function numberStuff() {
    var numbers = confirm("Would you like to enter a number?");
    if (numbers === true) {
        var typedNumber = parseInt(prompt("Please enter a number:"));
        if (!isNaN(typedNumber)) {
            if (typedNumber % 2 === 0) {
                alert("That number is even!");
            } else {
                alert("That number is odd!");
            }
            alert("Your number, plus one hundred, is " + (parseInt(typedNumber) + 100));
            if (typedNumber > 0) {
                alert("Your number is positive");
            } else {
                alert("Your number is negative");
            }
            if (isNaN(typedNumber)) {
                alert("That wasn't a number, gosh.")
            }
        } else {
            alert("That's not a number.");
        }
    } else {
        alert("gosh.");
    }
}





/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

    function analyzeColor(str) {
        if (str === "blue") {
            return "Wow, that's blue!"
        } else if ( str === "red") {
            return "wow, that's red!"
        } else if (str === "green") {
            return "Wow, that's green!"
        } else if (str === "orange") {
            return "Yep, that's orange."
        } else if (str === "yellow") {
            return "Wow, yellow!"
        } else {
            return "This doesn't fit within the confines of my understanding."
        }
    }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function colorPicker () {
    var returnMessage;
    switch (randomColor) {
        case (randomColor === "blue"):
            returnMessage = "Wow,that's blue!";
        case (randomColor === "red"):
            returnMessage = "Wow, taht's red!";
        case (randomColor === "green"):
            returnMessage = "Wow, that's green!";
        case (randomColor === "orange"):
            returnMessage = "Yep, that's orange.";
        case (randomColor === "yellow"):
            returnMessage = "yellow yellow yellow!";
        default:
            returnMessage = "This doesn't fit within the confines of my understanding.";
    }
    return returnMessage;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

    var colorPrompt  = prompt("What color should I type?");
    var newColor = analyzeColor(colorPrompt);
    alert(newColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
    function calculateTotal(luckyNumber, totalBill) {
        if (luckyNumber === 1) {
            return (totalBill - (totalBill * .1));
        }
        else if (luckyNumber === 2) {
            return (totalBill - (totalBill * .25));
        }
        else if (luckyNumber === 3) {
            return (totalBill - (totalBill * .35));
        }
        else if (luckyNumber === 4) {
            return (totalBill - (totalBill* .5));
        }
        else if (luckyNumber === 5) {
            return ("It's all free!!!!");
        }
        else {
            return totalBill;
        }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
//  */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("How much was your total bill?");
var realTotal = calculateTotal(luckyNumber, totalBill);
 alert("Your lucky number is " + luckyNumber);
 alert("Your price before discount was " + totalBill);
 alert("Your new, better-looking, discounted price is now " + realTotal);
