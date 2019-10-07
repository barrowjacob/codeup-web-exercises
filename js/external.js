"use strict";

console.log("Hola from external Javascript!");

alert("Bienvenidos a My Website!");

var color = prompt("What's your favorite color?!");

alert("Wow! " + color + " is my favorite color, too!");

var movieNum = prompt("How much was it per day, again?");

function movieCosts()
{
    var lm = 3;
    var bb = 5;
    var h = 1;
    return (lm + bb + h) * movieNum;
}
console.log(movieCosts());

var gooHours = prompt("How many hours at Google?");
var amaHours = prompt("How many hours at Amazon?");
var fbHours = prompt("How many hours at Facebook?");
function makingBank()
{
    var goo = 400;
    var ama = 380;
    var fb = 350;
    return ((goo * gooHours) + (ama * amaHours) + (fb * fbHours));
}
console.log(makingBank());

function classTime() {
    var full = true;
    var conflict = true;
    if (full && !conflict) {
        return "enrolled"
    } else {
        return "can't enroll!"
    }
}
console.log(classTime());

function premium() {
    var moreThanTwo = true;
    var expired = true;
    var premium = true;
    if ((moreThanTwo && !expired) || premium) {
        return "full access granted";
    } else {
        return "denied, proletariat";
    }
}
console.log(premium());

function canLogin() {
    var atLeastFiveCharactersPw = true;
    var notIncludeUsername = true;
    var pwUnderTwenty = true;
    var hasWhiteSpace = true;
    if (atLeastFiveCharactersPw && notIncludeUsername && pwUnderTwenty && hasWhiteSpace) {
        return "This login is awesome!";
    }  else {
        return "You need to work on your login";
    }
}
console.log(canLogin());