"use strict";

// 10/8
function greaterThanFive() {
    var userNum = parseInt(prompt("Please type a number here"));
    return userNum > 5;
}

// 10/7

function posEven(x) {
    if (x > 0 && x % 2 === 0) {
        return "this is even and positive!!";
    } else {
        return "this is odd or negative!"
    }
}
console.log(posEven(5));

// 10/4

function type(x) {
    return typeof(x);
}
console.log(type(42));

// 10/3

function quadrilateral(x,y,z,a) {
    return x + y + z + a;
}
console.log(quadrilateral(1,2,3,4));

// 10/2

function circle(x) {
    return ((Math.PI) * (Math.pow((x / 2), 2)));
}
console.log(circle(4));

// 10/1

function upper(str) {
    return str.toUpperCase();
}
console.log(upper("powwow"));

// 9/30
function concatenate(str1, str2, str3) {
    return str1 + str2 + str3;
}
console.log(concatenate("hello", "boom", "name"));
// 9/27
function equilateral(x) {
    return ((x * x) * ((Math.sqrt(3))/4));
}
console.log(equilateral(3));

//9/26
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1,2,3,4]));

// 9/25
function hello1(name) {
    return "hello " + name;
}
console.log(hello1(name));

// 9/23
function hello() {
    return "hi";
}
console.log(hello());

// 9/19

function triArea(a, b, c) {
    var half = (a + b + c)/2;
    var area = (Math.sqrt((half * (half - a) * (half - b) * (half - c))));
    return area;
}
console.log(triArea(5,6,7));

// 9/18

function sum(a, b) {
    return a + b;
}
console.log(sum(2,2));

/* end of exercises */