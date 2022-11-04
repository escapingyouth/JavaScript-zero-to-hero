const btn = document.getElementById('v3');
btn.addEventListener('click', () => alert('CLICKED!'));

const tasButton = document.querySelector('#tas');
function twist() {
	console.log('TWIST');
}
function shout() {
	console.log('SHOUT');
}
tasButton.onclick = twist;
tasButton.onclick = shout;
// expected output: shout

tasButton.addEventListener('click', twist, { once: true });
tasButton.addEventListener('click', shout);
/*expected output: twist
                   shout */
