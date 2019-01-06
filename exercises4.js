let arrays = [[1, 2, 3], [4, 5], [6]];

let flatArray = arrays.reduce((total, current) => {
    return total.concat(current);
}, []);