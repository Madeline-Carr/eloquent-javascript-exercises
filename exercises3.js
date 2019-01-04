//The sum of a range
function sumOfRange(start, end, step = 1) {
    let arrayOfNumbers = [];
    let counter = 0;
    for (let index = start; index <= end; index++) {
        counter += step;
        arrayOfNumbers.push(counter);
    }
    return arrayOfNumbers;
}
//Uses the default step
console.log(sumOfRange(1, 6));
//Has its own step
console.log(sumOfRange(1, 6, 2));

