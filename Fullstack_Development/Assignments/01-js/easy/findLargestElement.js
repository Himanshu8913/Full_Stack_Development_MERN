/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!numbers.length)
        return undefined;
    
    return Math.max(...numbers);
}

console.log(findLargestElement([1,26,-7,-8.5,-3]));

module.exports = findLargestElement;