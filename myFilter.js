function myFilter(callbackFn) {
    const newArray = [];
    for (const item of this.valueOf()) {
        if(callbackFn(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}
const arr = [1, 2, 3, 4];
arr.myFilter = myFilter;
console.log(arr.myFilter(x => x % 2 === 0)); // output [ 2, 4 ]
