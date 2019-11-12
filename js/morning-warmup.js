

    "use strict";

    //11/12

    function evenNumbers(arr) {
        var evens = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(arr[i]);
            }
        } return evens;
    }
    console.log(evenNumbers([1,2,3,4,5]));

    //11/6
    function randomBoolean() {
        var randomBoo = (Math.floor(Math.random() * 1) +1);
        console.log(randomBoo);
        return randomBoo === 1;
    }
    console.log(randomBoolean());


        //11/5

    function soWelcome(obj) {
        if (obj.gratitude === "Thank You") {
            return "You're Welcome"
        } else {
            console.log("Darnit Nico get off my junk.");
        }
    }

    console.log(soWelcome({
        mario: "kart"
        }
    ));

    //11/4

    function writeNumbers(num) {
        var array = [0, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        return array[num];
    }
    console.log(writeNumbers(9));

    //10/30


    /* Google Docs. Store papers anywhere.
        Codepen. Uesful demonstrations.
        Neopets. Because science.
     */

//     var hamsters = [
//         {
//             name: "Hamtaro",
//             heightInMM: 86,
//             fur: ['orange', 'white'],
//             gender: "male",
//             dateOfBirth: "August 6"
//         } , {
//             name: "Bijou",
//             heightInMM: 75,
//             fur: ['white'],
//             gender: "female",
//             dateOfBirth: "July 10"
//         } , {
//             name: "Oxnard",
//             heightInMM: 100,
//             fur: ['grey', 'white'],
//             gender: "male",
//             dateOfBirth: "May 3"
//         } , {
//             name: "Boss",
//             heightInMM: 120,
//             fur: ['brown', 'white'],
//             gender: "male",
//             dateOfBirth: "Spetember 21"
//         } , {
//             name: "Snoozer",
//             heightInMM: 85,
//             fur: ['brown', 'white', "pink"],
//             gender: "male",
//             dateOfBirth: "January 14"
//         }
//     ];
//
//     function hamsterObjects(array) {
//        return array.sort(function(a,b) {
//             return a.heightInMM - b.heightInMM;
//         })
//
//     }
// console.log(hamsterObjects(hamsters));
//
//
//     //10/29
//
//     var students = [
//         {
//             name: "Mary",
//             grade: 10,
//             gpa: 3.7,
//             isRegistered: true
//         },
//         {
//             name: "Tim",
//             grade: 12,
//             gpa: 3.2,
//             isRegistered: false
//         },
//         {
//             name: "Ellie",
//             grade: 9,
//             gpa: 4.0,
//             isRegistered: false
//         },
//         {
//             name: "Alex",
//             grade: 10,
//             gpa: 3.9,
//             isRegistered: true
//         }
//     ];
//     function registeredStudents(arr) {
//         var unRegistered = [];
//        students.forEach(function(student){
//            if (student.isRegistered === false) {
//                unRegistered.push(student);
//            }
//        }); return unRegistered;
//     }
//     console.log(registeredStudents());
//
//
//
//         //10/28
//
//     var shoppingCarts = [
//         {
//             apples: 8,
//             bananas: 2,
//             oranges: 4,
//             grapes: 24
//         }, {
//             apples: 3,
//             bananas: 6,
//             oranges: 8,
//             grapes: 12
//         } , {
//             apples: 0,
//             bananas: 12,
//             oranges: 0,
//             grapes: 0
//         } , {
//             apples: 4,
//             bananas: 0,
//             oranges: 12,
//             grapes: 10
//         }
//     ];
//     var finalCart;
//     function mostOrangesShoppingCart(carts) {
//         var winner = carts[0];
//         carts.forEach(function(el){
//             if (carts.oranges > winner.oranges) {
//             winner = el;
//             }
//         });
//         return winner;
//     }
//
//     console.log(mostOrangesShoppingCart(shoppingCarts));
//
//        //10/25
//         function onlyFive(string) {
//             if (typeof(string) === "string" && string == 5) {
//                 console.log(parseInt(string));
//             } else {
//                 return "Not 5"
//             }
//         }
//         console.log(onlyFive("potato"));
//
//
//     //10/24
//      function fizzBuzz() {
//          for (var i = 1; i < 101; i++) {
//              if (i % 3 === 0 && i % 5 === 0) {
//                  console.log("fizzBuzz");
//              }
//             else if (i % 3 === 0) {
//                  console.log("fizz");
//              } else {
//                  if (i % 5 === 0) {
//                      console.log("buzz");
//                      } else {
//                          console.log(i);
//                      }
//                  }
//              }
//
//      }
//
//          console.log(fizzBuzz());
//
//          //10/23
//          var personObject = {};
//
//          function createPersonObject(name, age) {
//              personObject = {
//                  name: name,
//                  age: age
//              }
//          }
//
//          createPersonObject("jacob", 29);
//          console.log("my name is " + personObject.name + " and my age is " + personObject.age);
//
//          //10/21
//
//          function oneUp(x) {
//              for (var i = 1; i <= x; i++) {
//                  console.log(i);
//              }
//          }
//
//          oneUp(12);
//
//          // 10/18
//
//          function roundDown(x) {
//              if (typeof (x) === "number") {
//                  return Math.floor(x);
//              } else {
//                  return false;
//              }
//          }
//
//          // 10/17
//          function string(input) {
//              return (input.length === 8 && typeof (input) === "string");
//          }
//
//          console.log(string("thistest"));
//
// // 10/15
//
//          function logArray(arr) {
//              for (var i = 0; i < arr.length; i++) {
//                  console.log(arr[i]);
//              }
//          }
//
// // 10/11
//
//          function quotient(x, y) {
//              if (typeof x === "number" && typeof y === "number") {
//                  return (x / y);
//              } else {
//                  return false;
//              }
//          }
//
//          //i thought the prompt was for 2, not 3 or 4 numbers. lol.
//          // function onlyTwo(x, y) {
//          //     if (arguments.length === 2) {
//          //         return (x / y);
//          //     } else {
//          //         return false;
//          //     }
//          // }
//
// // 10/10
//
//          function lengthArray(arr) {
//              return arr.length;
//          }
//
//          console.log(lengthArray([7, 2, 3, 4]));
//
// // 10/9
//
//          function stranger() {
//              var yep = "Hello there, stranger.";
//              alert(yep);
//          }
//
//          function strangerer(str) {
//              return "Hello there" + str;
//          }
//
//          // var nice = prompt("input something here dawg");
//          // alert(strangerer(nice));
//
//
// // 10/8
//          function greaterThanFive() {
//              var userNum = parseInt(prompt("Please type a number here"));
//              return userNum > 5;
//          }
//
// // 10/7
//
//          function posEven(x) {
//              if (x > 0 && x % 2 === 0) {
//                  return "this is even and positive!!";
//              } else {
//                  return "this is odd or negative!"
//              }
//          }
//
//          console.log(posEven(5));
//
// // 10/4
//
//          function type(x) {
//              return typeof (x);
//          }
//
//          console.log(type(42));
//
// // 10/3
//
//          function quadrilateral(x, y, z, a) {
//              return x + y + z + a;
//          }
//
//          console.log(quadrilateral(1, 2, 3, 4));
//
// // 10/2
//
//          function circle(x) {
//              return ((Math.PI) * (Math.pow((x / 2), 2)));
//          }
//
//          console.log(circle(4));
//
// // 10/1
//
//          function upper(str) {
//              return str.toUpperCase();
//          }
//
//          console.log(upper("powwow"));
//
// // 9/30
//          function concatenate(str1, str2, str3) {
//              return str1 + str2 + str3;
//          }
//
//          console.log(concatenate("hello", "boom", "name"));
//
// // 9/27
//          function equilateral(x) {
//              return ((x * x) * ((Math.sqrt(3)) / 4));
//          }
//
//          console.log(equilateral(3));
//
// //9/26
//          function firstElement(arr) {
//              return arr[0];
//          }
//
//          console.log(firstElement([1, 2, 3, 4]));
//
// // 9/25
//          function hello1(name) {
//              return "hello " + name;
//          }
//
//          console.log(hello1(name));
//
// // 9/23
//          function hello() {
//              return "hi";
//          }
//
//          console.log(hello());
//
// // 9/19
//
//          function triArea(a, b, c) {
//              var half = (a + b + c) / 2;
//              var area = (Math.sqrt((half * (half - a) * (half - b) * (half - c))));
//              return area;
//          }
//
//          console.log(triArea(5, 6, 7));
//
// // 9/18
//
//          function sum(a, b) {
//              return a + b;
//          }
//
//          console.log(sum(2, 2));
//
//
// /* end of exercises */
//
//
