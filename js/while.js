
var x = 1;
while (x < 65536) {
    console.log(x *= 2);
}
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var reqCones = Math.floor(Math.random() * 5) + 1;
    if (reqCones < allCones) {
        allCones -= reqCones;
        console.log("You can buy your requested " + reqCones + " cones!");
    }
    else if (reqCones > allCones) {
        console.log("You can't buy " + reqCones + " cones, crazy!");
    }
    else if (reqCones === allCones) {
        allCones -= reqCones;
        console.log("You bought the last of our cones!");
    }
} while (allCones > 0);
//
// var i = 2;
// while (i < 65700) {
//     console.log(i);
//     i *= 2;
// }


// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     var reqCones = (Math.floor(Math.random() * 5) + 1);
//     if (reqCones < allCones) {
//         allCones -= reqCones;
//         console.log("I sold " + reqCones + " cones!");
//         console.log("remaining cones " + allCones);
//     } else if (reqCones > allCones) {
//         console.log("I cannot sell you " + reqCones + "when I only have " + allCones);
//     } else if (reqCones === allCones) {
//         allCones -= reqCones;
//         console.log("You have purchased my final cones!");
//     }
// } while (allCones > 0);
//

