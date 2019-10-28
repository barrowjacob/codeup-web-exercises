"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isNegative(x) {
    return (x < 0);
}

function isTen(x) {
    return (x === 10);
}

function double(x) {
    return x*2;
}

function remove9s(arr) {
    return arr.filter(function (value) {
        return value !== 9;
    });
}

// or do it David's way:
/*
    function remove9s(arr) {
        var bucket = [];
        arr.forEach(function(el){
        if (el !== 9) {
            bucket.push(el);
        }
    });
    return bucket;
}
 */

function average(arr) {
    var total = 0;
    for (let x = 0; x < arr.length; x++) {
        total += arr[x];
    } return (total/(arr.length));
}

// or you can use REDUCE method //

function countOdds(arr) {
    var counting = 0;
    for (var i= 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            counting++;
        }
    } return counting;
}

function convertNameToObject(firstLast) {
    var lastArray = firstLast.split(' ').pop();
    var firstArray = firstLast.split(' ').shift();
    var newObject = {
        firstName: firstArray,
        lastName: lastArray
    };
    return newObject;
}

// or do it David's way:
/*
        var nameArray = firstLast.split(' ');
        return {
        firstName: nameArray[0],
        lastName: nameArray[1]
 */


function capitalizeName(namedString) {
    let firstString = namedString.split(' ').shift();
    let firstName = firstString.charAt(0).toUpperCase() + firstString.slice(1);
    let lastString = namedString.split(' ').pop();
    let lastName = lastString.charAt(0).toUpperCase() + lastString.slice(1);
    return firstName + " " + lastName;
}

// or do it David's way:
/*
    var nameArray = namedString.split(' ');
    nameArray.forEach(function(name, i, arr){
        var wordArr = name.split('');
        wordArr[0] = wordArr.toUpperCase();
        arr[i] = wordArr.join('');
    })
    return nameArray.join(' ');
}

 */


function capitalizeAllNames(array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        let firstString = array[i].split(' ').shift();
        let firstName = firstString.charAt(0).toUpperCase() + firstString.slice(1);
        let lastString = array[i].split(' ').pop();
        let lastName = lastString.charAt(0).toUpperCase() + lastString.slice(1);
        newArray.push(firstName + " " + lastName);
    } return newArray;
}
// or do it david's way:
// arr.forEach(function (str) {
// var bucket = [];
// bucket.push(capitalizeName(str));
// });
// return bucket;


function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[aeiouAEIOU]/)) {
            count++;
        }
    } return count;
}




function averageSales(array) {
    let total = 0;
    array.forEach(function(el){
        total += el.sales;
    }); return total/array.length;
}

function analyzeWord(str) {
    return {
        word: str,
        numberOfLetters: str.length,
        numberOfVowels: countVowels(str)
    };
}

function analyzeAllWords(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = {
            word: array[i],
            numberOfLetters: array[i].length,
            numberOfVowels: countVowels(array[i])
        }
    } return newArray;
}

