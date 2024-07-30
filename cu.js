function isValueEqualToAxisProperty(value, axis, property) {
    return value === axis[property];
}

// Example usage:
let axis = {
    length: 10,
    type: 'linear',
    minValue: 0,
    maxValue: 100
};

let value = 100;
let property = 'maxValue';

console.log(isValueEqualToAxisProperty(value, axis, property)); // Output: true
