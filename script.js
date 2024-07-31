const container = document.querySelector('.container');

function createGrid(size) {

	const totalSize = 700;
	const cellSize = totalSize / size;

	for(let i = 0; i < size; i++) {
		const divRow = document.createElement('div');
		container.append(divRow);
		divRow.setAttribute('class', 'row');

		for(let j = 0; j < size; j++) {
			const divCol = document.createElement('div');
			divRow.append(divCol);
			divCol.setAttribute('class', 'col');
			divCol.style.width = `${cellSize}px`;
			divCol.style.height = `${cellSize}px`;
		}
	}

	const highlight = document.querySelectorAll('.col');

	highlight.forEach((square) => {
		square.addEventListener('mouseover', function() {
			square.style.backgroundColor = 'blue';
		})
	})
}

createGrid(16);

const btn = document.getElementById('grid-size-btn');

btn.addEventListener('click', function() {
	let size = window.prompt('Choose between 1x1 - 100x100', 'Enter Size');
	size = parseInt(size);
	if (isNaN(size) || size < 1 || size > 100) {
		alert('Please choose a valid number between 1-100.');
		return;
	}
	container.innerHTML = null;
	createGrid(size);
})