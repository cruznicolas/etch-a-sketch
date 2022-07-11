function createGrid (size, container) {
	for (let i = 0; i < size; i++) {
		let divrow = document.createElement("div");
		divrow.className = "row";
		for (let j= 0; j < size; j++) {
			divcell = document.createElement("div");
			divcell.className = "cell";
			//divcell.innerText = "celda";
			divrow.appendChild(divcell);
		}
		container.appendChild(divrow);
	}
}

function getSize () {
	size = prompt();
}

function tint() {
this.classList.add("hovered");
}

gridcontainer = document.querySelector('.container');

button = document.querySelector('button');
button.addEventListener('click', function () {let size = prompt("Digite tamaño"); createGrid(size =5,gridcontainer);let cells = document.querySelectorAll('.cell');} );





cells.forEach(cell => cell.addEventListener('mouseover', tint()))


