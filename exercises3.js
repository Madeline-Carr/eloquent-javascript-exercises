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

//Reversing an Array
let myArr = ["1", "2", "3"];
function reverseArray(theArray) {
    let reversedArray = [];
    for (let item of theArray) {
        reversedArray.unshift(item);
    };
    console.log(reversedArray);
}
reverseArray(myArr);

let myArr2 = ["1", "2", "3", "4", "5"];
function reverseArrayInPlace(theArray) {
    //Gets the number for loop
    let arrayLength = theArray.length;
    let halfarrLength = Math.floor((arrayLength / 2));
    for (i = 0; i < halfarrLength; i++) {
        let first = theArray[i];
        let last = theArray[arrayLength - (i + 1)];
        theArray[i] = last;
        theArray[arrayLength - (i + 1)] = first;
    }
    console.log(myArr2);
}
reverseArrayInPlace(myArr2);

