"use strict";

/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

var addArray = numbers.map((num) => num+1);
console.log(addArray);
//TO DO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.

var newArray = numbers.map((num) => num * 3);
console.log(newArray);



/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'

var ones = binary.filter((bins) => bins == true);
console.log(ones);

// TO DO: filter through binary again and this time, return all the false
// values.

var zeroes = binary.filter((bins) => bins != true);
console.log(zeroes);

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TO DO: filter through the array of objects and return all fruit type
// objects.

var fruits = fruitsAndVeggies.filter(fruit => fruit.type === "fruit")
console.log(fruits);

// TO DO: filter through the array of objects and return all vegetable type
// objects.
var veggies = fruitsAndVeggies.filter(veg => veg.type === "vegetable")
console.log(veggies);
/*********************************************
 *              .reduce
 ******************************************** */

const potatoes = [1,2,3,4,5];
const sum =potatoes.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
});
//acculmulation = 0;
//+ 1
//accumulation = 1;
// + 2
//accumulation = 3;
// + 3;
//accumulation = 6;
// +4;
//accumulation = 10;
// +5;
//accumulation = 15;
//FINAL ACCUMULATION = 15;

// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.
const sumber = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);
console.log(sumber);
// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.

const lessber = numbers.reduce((accumulation, currentNumber) => (accumulation - currentNumber), 100);
console.log(lessber);


const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TO DO: Using .reduce, return the total number of apples.
const totalApples = shoppingCarts.reduce((total, current) => {return total + current.apples},0);
console.log(totalApples);



const colors = ['red','orange','red','blue','blue','green','red'];

// TO DO: Count the number of times a color appears in this Array. Hint:
// your initial value should be an empty object.

    const colorCount = colors.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    console.log(colorCount);


const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TO DO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce((currentString, word) =>
{return `${currentString} ${word}`},"")
console.log(oneLine);

// Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];
