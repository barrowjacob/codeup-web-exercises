"use strict";

console.log("Hola from external Javascript!");

alert("Bienvenidos a My Website!");

var submitColor = prompt("What's your favorite color?!");

if (submitColor !== "") {
    document.getElementById("colorId").innerHTML = submitColor + ", nice!";
}
alert("Wow! " + submitColor + " is my favorite color, too!");

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

var full = confirm("Is your class full?");
var conflict = confirm("Is there a schedule conflict?");

function classTime() {

    if (!full && !conflict) {
        return "Great! You can enroll!"
    } else {
        return "Sorry, but you can't enroll!"
    }
}
alert(classTime());

var two = confirm("Did you buy at least two items?");
var expired = confirm("Is it expired?");
var premium1 = confirm("Do you have premium?");

function premium() {

    if ((two || premium1) && !expired) {
        return "full access granted";
    } else {
        return "Denied, proletariat. You do not get a discount.";
    }
}
alert(premium());

var password = prompt("Username?");
var username = prompt("Password?");
function canLogin() {
    if (password.length >= 5 && password.indexOf(username) === -1 && username.length <= 20 && username === username.trim() && password === password.trim()) ;
    {
        return "Your username and password are strong. This login is awesome!";
    }
}

alert(canLogin());