console.log("Number to skip is 27!");

for  (i = 1; i < 50; i++) {
    if (i === 27) {
        console.log("Yikes, skipping number 27!");
        continue;
    } if (i % 2 !== 0) {
        console.log(i);
    }
}