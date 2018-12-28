//Looping a Triangle 
function triangle() {
    let tri = "#";
    for (let number = 1; number <= 7; number++) {
        console.log(tri);
        tri += "#";
    };
}
triangle();

//Another Solution 
function triangle2() {
    let tri = "#";
    while (tri.length < 7) {
        console.log(tri);
        tri += "#";
    }
}
triangle2();

//FizzBuzz
function fizzBuzz() {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + " FizzBuzz");
            continue;
        }
        if (i % 3 == 0) {
            console.log(i + " Fizz");
        }
        if (i % 5 == 0) {
            console.log(i + " Buzz");
        }
    }
}
fizzBuzz();

//FizzBuzz
function fizzBuzzBurp() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + " FizzBuzz");
            continue;
        }
        if (i % 3 == 0) {
            console.log(i + " Fizz");
        }
        if (i % 5 == 0) {
            console.log(i + " Buzz");
        }
        else {
            console.log(i + " Burp!!!");
        }
    }
}
fizzBuzzBurp();
