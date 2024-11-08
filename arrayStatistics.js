const arrayStats = function(arr) {
    const obj = {
        sum: arr.reduce(function(sum, num) { return sum + num }, 0),
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
    obj.average = obj.sum / arr.length;
    return obj;
}
console.log(arrayStats([1, 2, 3, 4, 5])); // output { sum: 15, min: 1, max: 5, average: 3 }
