// Arrow function to convert a character to lower case
const charToLower = char => char.toLowerCase();

// Arrow function to convert a word to lower case using the charToLower function
const wordToLower = word => word.split('').map(charToLower).join('');

// Arrow function to convert an array of words to lower case using the wordToLower function
const arrayToLower = arr => arr.map(wordToLower);

// Sample input
const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

// Using the arrow function to convert the array of strings to array of lower case strings
const outputArray = arrayToLower(inputArray);

//result
console.log(outputArray);