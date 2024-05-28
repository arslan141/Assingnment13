// Function to calculate the sum of all elements in the array using reduce
function calculateSum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Function to calculate the average of all elements in the array using reduce
function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = calculateSum(arr);
    return sum / arr.length;
}

// Get input from the user and convert it to an array of numbers
let userInput = prompt("Enter numbers separated by commas:");
let inputArray = userInput.split(',').map(Number);

// Calculate the sum of all elements in the array
let sum = calculateSum(inputArray);
console.log("Sum of all elements:", sum);

// Calculate the average of all elements in the array
let average = calculateAverage(inputArray);
console.log("Average of all elements:", average.toFixed(2));

