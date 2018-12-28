//Looping a Triangle 
function triangle() {
    let tri = "#";
    for (let number = 1; number <= 7; number++) {
        console.log(tri);
        tri = tri + "#";
    };
}
triangle();

//Another Solution 
function triangle2() {
    let tri = "#";
    while (tri.length < 7) {
        console.log(tri);
        tri = tri + "#";
    }
}
triangle2();

