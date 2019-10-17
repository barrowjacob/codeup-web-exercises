"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife)|| you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function increment(input) {
    if (typeof(input) === "number") {
        return input + 1;
    } else {
        return false;
    }
}

function decrement(input) {
    if (typeof(input) === "number") {
        return input - 1;
    } else {
        return false;
    }
}

function square(input) {
    if (typeof(input) === "number") {
        return input * input;
    } else {
        return false;
    }
}

function upperCase(input) {
    if (typeof (input) === "string") {
        if (isNaN(parseFloat(input))) {
            return input.toUpperCase();
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isPalindrome(input) {
    if (isNaN(parseFloat(input)) && typeof(input) === "string") {
        return input.toLowerCase().split('').reverse().join('') === input.toLowerCase();
    } else {
        return false;
    }
}


function getHighestNumber(x, y, z) {
    if (!isNaN(parseFloat(x)) && !isNaN(parseFloat(y)) && !isNaN(parseFloat(z))) {
        return Math.max(x, y, z);
    } else {
        return false;
    }
}

function containsVowel(input) {
    if (typeof(input) === "string") {
        return !!input.match(/[aeiouAEIOU]/g);
    } else {return false;}
}

// another way to do containsVowel >>

// function containsVowel(input) {
// if (typeof input === 'string' && !isNaN(parseFloat(input))) {
//     for (var i =0; i <input.length; i++) {
//         if (input[i] === "a" || input[i] === "e" || input[i]  === "i" || input[i] ==="o" || input[i] === "u") {
//             return true;
//         }
//     }
//      return false;
// } else {
//      return false;
// }



function add(x, y) {
    if (!isNaN(parseFloat(x) && !isNaN(parseFloat(y)))) {
        return parseFloat(x) + parseFloat(y);
    } else {
        return false;
    }
}


function multiply(x, y) {
    if (!isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
        return parseFloat(x) * parseFloat(y);
    } else {
        return false;
    }
}
function sumOfSquares(x, y) {
    if (!isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
        return (parseFloat(x) * x) + (parseFloat(y) * y);
    } else {
        return false;
    }
}


