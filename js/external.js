"use strict";

console.log("Hola from external Javascript!");

alert("Bienvenidos a My Website!");

var color = prompt("What's your favorite color?!");

if (color !== "") {
    document.getElementById("colorId").innerHTML = color + " is my all-time best, most beloved favorite color, too!";
}

alert("Wow! " + color + " is my favorite color, too!");

var movieNum = prompt("How much was the rental cost each day?");

function movieCosts()
{
    var lm = 3;
    var bb = 5;
    var h = 1;
    return (lm + bb + h) * movieNum;
}
alert("Wow, that's $" + movieCosts());

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
alert("Wow, you made $" + makingBank());

function classTime() {
    var full = true;
    var conflict = true;
    if (!full && !conflict) {
        return "can enroll!"
    } else {
        return "can't enroll!"
    }
}
alert("Nice, you " + classTime());

function premium() {
    var moreThanTwo = true;
    var expired = true;
    var premium = true;
    if ((moreThanTwo || premium) && !expired) {
        return "full access granted";
    } else {
        return "denied, proletariat";
    }
}
alert(premium());

function canLogin() {
    var username = 'codeup';
    var password = 'notastrongpassword';

    if (password.length >= 5 && password.indexOf(username) === -1 && username.length <= 20 && username === username.trim() && password === password.trim()) ;
    {
        return "This login is awesome!";
    }
}

alert(canLogin());