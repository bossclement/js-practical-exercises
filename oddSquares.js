function oddSquares(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    }).map(function(num) {
        return num * num;
    });
}

console.log(oddSquares([1, 2, 3, 4, 5, 6])); // output [ 1, 9, 25 ]
console.log(oddSquares([10, 15, 20, 25, 30])); // output [ 225, 625 ]
