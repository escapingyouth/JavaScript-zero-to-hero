const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// Input only changes after you click outside or leave the input box
input.addEventListener('change', function (e) {
    console.log('You just changed the input')
})


input.addEventListener('input', function (e) {
    console.log('You just changing the input while typing')
})


// To update h1 as you're typimh
input.addEventListener('input', function (e) {
    h1.innerText = input.value
})


