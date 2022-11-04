'use strict';

// 📌 DOM Selecting
document.querySelector('.my-class'); //querySelector - selects a single instance of an element
document.querySelectorAll('p'); //querySelector - selects all instances of that element
document.getElementById('#my-id'); //getElementById - selects an element by its Id
document.getElementsByClassName('my-class'); //getElementByClassName - selects an element by its class name

// 📌 DOM Manipulating
document.querySelector('.my-class').textContent = '🎉Correct number!'; //The textContent property of the HTML Element interface represents the "rendered" text content of a node and its descendants;
document.querySelector('.my-number').innerText = 10; // similar to textContent
document.querySelector('.my-input').value = 23; // value - sets the value of an input field

// 📌 DOM Attributes
const firstInput = document.querySelectorAll('input')[0];
firstInput.setAttribute('type', 'text'); // setAttribute - sets the attribute of an element

document.querySelector('#my-id').id = 'whoops'; // id - sets the new id of an element

const firstLink = document.querySelector('a');
firstLink.getAttribute('href'); // get the attribute of an element
firstLink.setAttribute('href', 'http://www.google.com');

// 📌 Changing styles using the DOM
let h1 = document.querySelector('h1');
h1.style.color = 'green';
h1.style.fontSize = '60px';
const links = document.querySelectorAll('a');
for (let link of links) {
	link.style.color = 'cyan';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}
window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;

// 📌 Creating New JS Elements
const newImg = document.createElement('img'); // to create new elements use the createElement function
newImg.src =
	'https://images.unsplash.com/photo-1612914073562-9f2e8272fea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

// 📌 Adding Elements to DOM
document.body.appendChild(newImg); // using appendChild- appends as last child of an element
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new h3!!!!';
document.body.appendChild(newH3);

const paragraph = document.querySelector('p'); // using append - appends at the end of selected element
paragraph.append('I am new text!!!!', 'yayyyyyyyyy');

const newB = document.createElement('b'); // using prepend- appends at the beginning of selected element
newB.innerText = 'I am new bold!!!!';
paragraph.prepend(newB);

// 🔷 insertAdjacentElement - inserts elements before or after other elements
const h2 = document.createElement('h2');
h2.append('Are adorable chickens');
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2);

// 🔷 after
const h3 = document.createElement('h3');
h3.append('Why does colt like chickens so much');
h1.after(h3);

// 📌 Removing JS Elements

const firstLi = document.querySelector('li'); // removeChild - removes the child of an element
const ul = firstLi.parentElement;
ul.removeChild(firstLi);
const b = document.querySelector('b');
b.parentElement.removeChild(b);

const img = document.querySelector('img'); // remove - removes any element
img.remove();
