function createGrid (size, container) {
	container.innerHTML = "";
	for (let i = 0; i < size; i++) {
		let divrow = document.createElement("div");
		divrow.className = "row";
		for (let j= 0; j < size; j++) {
			divcell = document.createElement("div");
			divcell.className = "cell";
			divcell.addEventListener('mouseover', tint)
			//divcell.innerText = "celda";
			divrow.appendChild(divcell);
		}
		container.appendChild(divrow);
	}
}

function getSize () {
	size = prompt();
}

function clearGrid () {
	
}

function tint() {
this.classList.add("hovered");
}

gridcontainer = document.querySelector('.container');
createGrid(10,gridcontainer);

// button = document.querySelector('button');
// button.addEventListener('click', function () {let size = prompt("Digite tamaño"); createGrid(size =5,gridcontainer);let cells = document.querySelectorAll('.cell');} );





//cells.forEach(cell => cell.addEventListener('mouseover', tint()))


