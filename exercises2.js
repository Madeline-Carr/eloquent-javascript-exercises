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
