//Minimum

function min(x, y) {
    if (x === y)
        return "The values are the same!";
    if (x > y)
        return y;
    else
        return x;
}
console.log(min(2, 8));
console.log(min(8, 8));
console.log(min(8, 10));


//Recursion

function isEven(num) {
    if (num < 0) return false;
    if (num === 0) return true;
    if (num === 1) return false;
    else {
        return (isEven(num - 2));
    }
}
console.log(isEven(-13));

//