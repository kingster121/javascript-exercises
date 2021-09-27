// FOR loop to create array from a to b of numbers
// method 1: loop through args and sum up
// (Chosen) method 2: recursively call sumAll till the last element
const sumAll = function (a, b) {
    // Removes special cases first
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR"
    }
    let arr = [];

    if (a < b) {
        for (; a <= b; a++) {
            arr.push(a);
        }
    }
    else if (a > b) {
        for (; b <= a; b++) {
            arr.push(b);
        }
    }

    let sum = arr.reduce((a, b) => {
        return a + b;
    }, 0)
    return sum;
};
console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
