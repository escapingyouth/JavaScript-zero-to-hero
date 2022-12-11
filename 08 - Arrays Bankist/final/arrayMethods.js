'use strict';

// 📌 Simple Array Methods

// ⚡ slice - returns a new array with the elements extracted from the original array
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.slice(2); // ['c', 'd', 'e']
arr.slice(2, 4); // ['c', 'd']
arr.slice(-2); // ['d']
arr.slice(1, -2); // ['b', 'c']
arr.slice(); // ['a', 'b', 'c', 'd', 'e']

// ⚡  splice - mutates the original array, returns the removed elements, and can also add elements to the array.

// arr.splice(2); // ['c', 'd', 'e']
arr.splice(-1); // ['e']
arr.splice(1, 2); // ['b', 'c']
console.log(arr); // ['a', 'd']

// ⚡ reverse - mutates the original array, returns the reversed array
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
days.reverse(); // ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday']

// ⚡ concat - returns a new array with the elements of the original array and the elements of the array passed as an argument
let array1 = ['a', 'b', 'c', 'd', 'e'];
let array2 = ['f', 'g', 'h', 'i', 'j'];
let array3 = array1.concat(array2);
console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// ⚡ join -  returns a string with the elements of the array separated by the separator passed as an argument
const elements = ['Fire', 'Air', 'Water'];
elements.join(' - '); // 'Fire - Air - Water'

// ⚡ The new at method - returns the element at the specified index in the array
const nums = [1, 2, 3, 4, 5];
nums[0]; // 1
nums.at(0); // 1
nums.at(-1); // 5

// ⚡ forEach - loops over the array and calls the callback function for each element in the array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(movement => {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
});
// You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 3000
// You withdrew 650 ....

// forEach with maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(value, key, map => {
  console.log(`${key}: ${value}`);
});

// for each with sets
const uniqueCurrencies = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
uniqueCurrencies.forEach(value, key, set => {
  console.log(`${key}: ${value}`);
});

// ⚡ Map - returns a new array with the results of calling the callback function on each element in the array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2); // [2, 4, 6, 8, 10]

const eurToUsd = 0.99;
movements.map(movement => movement * eurToUsd);

// ⚡ filter - returns a new array with the elements that pass the test implemented by the callback function

const deposits = movements.filter(movement => movement > 0); // [200, 450, 3000, 70, 1300]

// ⚡ reduce - returns a single value after looping over the array and applying the callback function on each element in the array
// accumulator - the value returned by the callback function on the previous iteration

const balance = movements.reduce(
  (accumulator, movement) => accumulator + movement,
  0
); // 3840

// finding the maximum value in an array
const max = movements.reduce((accumulator, movement) => {
  if (accumulator > movement) return accumulator;
  else return movement;
}, movements[0]); // 3000

//  ⚡ The magic of chaining methods
const totalDepositsUSD = movements
  .filter(movement => movement > 0)
  .map(movement => movement * eurToUsd)
  .reduce((accumulator, movement) => accumulator + movement, 0); // 5522

// ⚡ find - returns the first element in the array that passes the test implemented by the callback function
movements.find(movement => movement > 0); // 200

// ⚡ findIndex - returns the index of the first element in the array that passes the test implemented by the callback function
movements.findIndex(movement => movement > 0); // 0

// ⚡ some - returns true if at least one element in the array passes the test implemented by the callback function
movements.some(movement => movement > 0); // true

// ⚡ every - returns true if all elements in the array pass the test implemented by the callback function
movements.every(movement => movement > 0); // false

// ⚡ flat - returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const newArr = [1, 2, [3, 4, [5, 6]]];
newArr.flat(); // [1, 2, 3, 4, [5, 6]]
newArr.flat(2); // [1, 2, 3, 4, 5, 6]

// ⚡ flatMap - returns a new array with the results of calling the callback function on each element in the array and flattening the result by one level
// flatMap is the same as map followed by flat with depth 1

// ⚡ sort - sorts the elements of the array in place and returns the sorted array
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
owners.sort(); // ['Adam', 'Jonas', 'Martha', 'Zach']

const sortNum = [2, 3, 1, 5, 4];
sortNum.sort((a, b) => a - b); // [1, 2, 3, 4, 5]

// ⚡ fill - fills all the elements of the array from a start index to an end index with a static value
const w = new Array(7); // [empty × 7]
w.fill(1); // [1, 1, 1, 1, 1, 1, 1]

const x = new Array(7);
x.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2]

// ⚡  Array.from - creates a new array from an array-like or iterable object
const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1]
const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7]
