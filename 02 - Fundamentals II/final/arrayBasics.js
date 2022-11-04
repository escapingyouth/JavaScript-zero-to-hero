// 📌 JS ARRAYS

// 🔷 creating new arrays
const friends = ['Peter', 'Daniel', 'Gifty', 'Selorm', 'Nathan'];
const years = new Array(2000, 2001, 2002, 2003);

// 🔷 array indexing
console.log(friends[0]); // Peter
console.log(friends[1]); // Daniel;

// 🔷 length of an array
console.log(friends.length); // 5

// 🔷 mutating arrays
friends[2] = 'Afia';
console.log(friends); // ['Peter', 'Daniel', 'Afia', 'Selorm', 'Nathan']

// 🔷 multi-valued arrays
const newArray = [1, 'hello world', true];

// 🔷 array of arrays (multidimensional arrays)
const siblings = [
	['Ruby', 24],
	['Samuel', 27],
	['Elizabeth', 29]
];

// ⚡ Array Methods

// 🔷 push
friends.push('Kwaku'); // adds an element at the end of the array
console.log(friends); // ['Peter', 'Daniel', 'Afia', 'Selorm', 'Nathan', Kwaku]

// 🔷 unshift
friends.unshift('Abed'); // adds an element at the beginning of the array
console.log(friends); //['Abed','Peter', 'Daniel', 'Afia', 'Selorm', 'Nathan']

// 🔷 pop
friends.pop(); // removes elements at the end of the array
console.log(friends); //['Abed', 'Peter', 'Daniel', 'Afia', 'Selorm', 'Nathan']

// 🔷 shift
friends.shift(); // removes elements at the beginning of the array
console.log(friends); // ['Peter', 'Daniel', 'Afia', 'Selorm', 'Nathan']

// 🔷 indexOf - finds the index of an element in an array
console.log(friends.indexOf('Afia')); // 2

// 🔷 concat - merges arrays
let array1 = ['a', 'b', 'c', 'd', 'e'];
let array2 = ['f', 'g', 'h', 'i', 'j'];
let array3 = array1.concat(array2);
console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// 🔷 includes - looks for a value in an array
array3.includes('a'); //true
array3.includes('z'); //false

// 🔷 join - creates a string from an array
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // Fire,Air,Water
console.log(elements.join('')); // FireAirWater
console.log(elements.join('-')); // Fire-Air-Water

// 🔷 reverse - reverses an array
console.log(array3.reverse()); // ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

// 🔷 slice - copies a portion of an array
let colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'brown'];
console.log(colors.slice(3)); // ["blue","pink","brown"]
console.log(colors.slice(2, 4)); // ["yellow","blue"]

// 🔷 splice -removes/replaces elements of an array
// Syntax-  let spliceArray = array.splice(start, deletecount, item)
console.log(colors.splice(5, 1)); // ["red","orange","yellow","blue","pink"]
let days = ['Monday', 'Tuesday', 'Wednesday'];
console.log(days.splice(1, 2)); // ["Monday"]
console.log(colors.splice(1, 0, 'red-orange')); // ["red","red-orange","orange","yellow","blue","pink","brown"]

// 🔷 sort - sorts elements in an array
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const randArray = [1, 30, 4, 21, 100000];
randArray.sort();
console.log(randArray); // [1, 100000, 21, 30, 4]
