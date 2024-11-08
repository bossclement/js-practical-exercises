function convertNullableValues(object) {
    for (const prop in object) {
        if (object[prop] === null) {
            object[prop] = 0;
        } else if (object[prop] === undefined) {
            object[prop] = '';
        }
    }
    return object;
}
const object = {name: "James", "is human": true, age: null, sex: undefined};
console.log(convertNullableValues(object)); // output { name: 'James', 'is human': true, age: 0, sex: '' }
