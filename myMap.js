function myMap(callbackFn) {
    const newArray = [];
    for (const item of this.valueOf()) {
        newArray.push(callbackFn(item));
    }
    return newArray;
}
const arr = [1, 2, 3, 4];
arr.myMap = myMap;
console.log(arr.myMap(x => x*2)); // output [ 2, 4, 6, 8 ]
