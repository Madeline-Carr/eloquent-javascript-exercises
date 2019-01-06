//push pop : shift unShift
//Push and Pop work with the end of the array.
//Shift and UnShift work at the end. 
let arr = ["b", "c"];
//push adds to the end of an array.
arr.push("d");

//pop removes the last element. 
arr.pop();

//unshift adds element to the beginning. 
arr.unshift("a");

//shift removes the first element. 
arr.shift();

//Splice
//Parameters : 1: where elements should be added in 
//2: How many should be deleted
//3...: Elements to be added
arr.splice(2, 0, "d", "e")

//Join Turns the array into a sting, the parameter is the separator.
arr.join(" ");

//Concat
//NOTE THIS DOES NOT MODIFY THE ORIGINAL ARRAY
let arr2 = ["f", "g"];
let arr3 = arr.concat(arr2);

//Sort: sorts the array alphabetically
arr.sort();

//Reverse : reverses the order.
arr.reverse();

console.log(arr3);