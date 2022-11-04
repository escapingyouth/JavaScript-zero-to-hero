const button = document.querySelector('button')
const h1 = document.querySelector('h1')



button.addEventListener('click', function () {
    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor;
    h1.textContent = newColor



})
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}

