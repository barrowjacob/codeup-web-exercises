var x = 1;
while (x < 65536) {
    console.log(x *= 2);
}
var allCones = Math.floor(Math.random() * 50) + 50;

while (allCones > 0) {
    var reqCones = Math.floor(Math.random() * 5) + 1;
    if (reqCones < allCones) {
        allCones -= reqCones;
        console.log("You can buy your requested " + reqCones + " cones!");
    } if (reqCones > allCones) {
        console.log("You can't buy " + reqCones + " cones, crazy!");
    } if (reqCones === allCones) {
        allCones -= reqCones;
        console.log("You bought the last of our cones!");
    }
}

