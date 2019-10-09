"use strict";

console.log("hello from conditionals lec.js!");

/*
 ================ REAL WORLD SCENARIO ================
 If a user is an admin,show a specific navbar
 If weather is rainy, show rain icon
 If number of lives is 0, game is over
 ================ IF STATEMENT SYNTAX ================
 if(condition){
 code here runs if condition evaluates to true
 }
 ================ IF STATEMENT EXAMPLES ================
Together: Show a specific navbar if user is admin
     if(isAdmin) {
        show a specific navbar
     }
Together: Send a 20% off coupon if its users birthday
*/
// if(isBday) {
//         //send coupon email
//     }
//Together: Write an if statement that alerts "It's raining" if isRainy is true
// if(isRainy) {
//     var isRainy = false;
//     alert("It's raining!");
// }
//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

if(currentBalance > itemCost) {
    var itemCost = 100;
    var currentBalance = 200;
    alert("You can buy it!");
}


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10


// if (numberOfLives === 0) {
//     var numberOfLives = 0;
//     alert("Sorry, game over!");
// }
// if (snowing) {
//     var snowing = true;
//     alert("It's snowing!");
// }
// if (numberInput > 10) {
//     var numberInput = 11;
//     alert("true!");
// }


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

// function lives(x) {
//     if (x === 0) {
//         alert("Sorry, game over!");
//     }
// }
//
// function weather() {
//     var snowing = true;
//     if (snowing) {
//         alert("It's snowing!");
//     }
// }
//
// function input(x) {
//     if (x > 10) {
//         alert("True!");
//     }
// }




// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
//     var isAdmin = false;
//     if (isAdmin) {
//         alert("Admin Navbar");
//     } else {
//         alert("denied, proletariat.");
//     }

//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
//     var isRainy = true;
//     if (isRainy) {
//         alert("It's raining!");
//     } else {
//         alert("have a nice day!");
//     }



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 3;
//
//     if (numberOfLives === 0) {
//         alert("Sorry, game over!");
//     } else {
//         alert("Next Level!");
//     }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weatherly = "sunny";
//
//     if (weatherly === "snowing") {
//         alert("It's snowing!");
//     } else {
//         alert("Check back late for more details!");
//     }
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 11;
//
//     if (numberInput > 10) {
//         alert("Greater than 10!");
//     } else {
//         alert("Less than 10!");
//     }
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
//
// function checkIfGameIsOver() {
//     var numberOfLives = 3;
//        if (numberOfLives === 0) {
//            return "sorry, game over"
//        } else {
//            return "Next Level!"
//        }
// }


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// function weatherTime(str) {
//     var returnMessage;
//         if (str === "snowing") {
//             returnMessage = ("It's snowing!");
//         } else {
//             returnMessage = ("Check back later, gator!");
//         }
//         return returnMessage;
// }
// console.log(weatherTime("snowing"));

// SHOULD WE DELETE STUFF EXAMPLE
//
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
//
// var age = confirm("Are you at least 13 years old? (Don't lie!)")
// if (age) {
//     alert("You may proceed.");
// } else {
//     alert("Stranger danger! Get out crazy kid!");
// }
// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
//
//     if (weather === "snowing") {
//         alert("It's snowing!");
//     } else if (weather === "raining") {
//         alert("It's raining!");
//     } else {
//         alert("Have a nice day!");
//     }
//Together: refactor the above statement as a function

    function checkWeather(str) {
        if (str === "snowing") {
            alert("It's snowing!");
        } else if (str === "raining") {
            alert("It's raining!");
        } else {
            alert("Have a nice day!");
        }
    }
    checkWeather("rainbows");

// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function checkTrafficLight(trafficLight) {
    if (trafficLight === "red") {
        return "Stop the car!!";
    } else if (trafficLight === "yellow") {
        return "Speed up! No time!!";
    } else if (trafficLight === "green") {
        return "Lean mean green means go, go, go!"
    } else {
        alert("Pull over and consider your life.")
    }
}

console.log(checkTrafficLight("green"));




// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.

var userAge = 16;
var hasPermit = false;

if (userAge < 15) {
    alert("denied, proletariat.");
} else {
    if (userAge === 15) {
        alert("you can have a permit!");
    } else if (userAge >= 16 && !hasPermit) {
        alert("you cannot have a license");
    } else if (userAge >= 16 && hasPermit) {
        alert("You can have a license!!");
    }
}







// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)

//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

var weatherMessage = (weather === "rainy") ? "It's raining!" : "Missin' those clouds!";
console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var weather = "rainy";

switch(weather) {
    case "sunny":
        alert("It's darn sunny!");
        break;
    case "cloudy":
        alert("It's just great outside!");
        break;
    case "rainy":
        alert("It's so darn rainy!");
        break;
    default:
        alert("I don't even know what's up with this weather!");
        break;
}
console.log(weather);

//TODO: Rewrite the intersection function from earlier as a switch statement.

    function checkTrafficLight(trafficLightColor) {
        switch(trafficLightColor) {
            case "red":
                alert("Stop, it's red!");
                break;
            case "green":
                alert("go ahead, bro-head.");
                break;
            case "yellow":
                alert("get ready to stop!");
                break;
            default:
                alert("try again. error error.");
                break;
        }
    }
    console.log(checkTrafficLight("red"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//     if ("shopping") {
//         return "5 dollars";
//     } else {
//         return "10 dollars";
//     }

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
//     if ("sunny") {
//         return "sunny things";
//     } else if ("other") {
//       return "other things";
//     } else if ("other") {
//         return "other things";
//     } else {
//         return "final thing";
//     }

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
//     user chooses  black, changes background black, font white,
//     choose white it's opposite.