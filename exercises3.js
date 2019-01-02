//The sum of a range
function sumOfRange(start, end) {
    let counter = 0;
    for (let index = start; index <= end; index++) {
        counter += index;
    }
    return counter;
}

console.log(sumOfRange(1, 8));

//   node exercises3.js