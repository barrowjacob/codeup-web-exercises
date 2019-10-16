function showMultiplicationTable(x) {
    for (var i = 0; i < 11; i++) {
        console.log(x * i);
    }
}

    for (var i = 0; i < 10; i++) {
        var random = Math.floor(Math.random() * 20) + 100;
        console.log(random);
        if (random % 2 === 0) {
            console.log("It's even!");
        } else {
            console.log("It's odd!");
        }
    }

    // for (i = 1; i < 10; i++) {
    //     console.log(i);
    //     for (var j = 1; j < 100; j *= 11) {
    //     console.log(j);}
    //     console.log(i * j);
    //
    // }

    for (i = 100; i > 0; i-=5) {
        console.log(i);
    }

