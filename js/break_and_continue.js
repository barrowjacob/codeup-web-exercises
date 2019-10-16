var userNum;
for (var x = 0; x < 50; x++) {
    userNum = parseFloat(prompt("Enter an odd number."));
    if (userNum % 2 !== 0) {
        console.log("enter an odd number.");
        break;
    }
}
for (var y = 1; y < 50; y+=2) {
    if (y === userNum) {
        console.log("Yikes!");
        continue;
    }console.log(y);
}




    // if (i === promptAnswer) {
    //     console.log("Yikes, skipping number 27!");
    //     continue;
    // } else if (i % 2 !== 0) {
    //     console.log(i);
    // }
// }