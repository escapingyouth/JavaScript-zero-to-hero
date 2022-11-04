const button = document.createElement('button');
const textArea = document.createElement('textarea');
document.body.append(textArea);
document.body.append(button);

button.textContent = 'Click Me!';
button.style.display = 'block';

button.addEventListener('click', () => {
	const input = textArea.value;
	const rows = input.split('\n');

	for (let [i, row] of rows.entries()) {
		underscore_to_camelCase(row);
		console.log(`${row.padEnd(20)}${'✅'.repeat((i += 1))}`);
	}
});

const underscore_to_camelCase = (input) => {
	const [first, second] = input.toLowerCase().trim().split('_');
	const camelCase = `${first}${second[0].toUpperCase() + second.slice(1)}`;
	return camelCase;
};
