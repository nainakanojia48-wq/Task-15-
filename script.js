// Dummy array 
const numbers = [4, 8, 2, 11, 6, 7, 10];
console.log("Array:", numbers);


// 1. Normal function - find maximum number
function findMaximum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Maximum Numbers:", findMaximum(numbers));

// 2. Anonymous function - findsum of elements
const findSum = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};
console.log("Sum of all elements:", findSum(numbers));

// 3. Arrow function - count odd numbers
const countOddNumbers = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        } 
    }
    return count;
};
console.log("Count of odd numbers:", countOddNumbers(numbers));



