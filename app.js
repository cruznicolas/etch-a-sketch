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
	const cells = document.querySelectorAll('.cell');
	cells.forEach(cell => cell.classList.remove("hovered"));
}


function tint() {
this.classList.add("hovered");
}

function changeSize() {
	let newSize = 101;
	while (newSize > 100 || newSize < 2) {
		newSize = prompt("Enter new size (between 2 and 100");
	}
	createGrid(newSize, gridcontainer);
}


const gridcontainer = document.querySelector('.container');
let size = 10;
createGrid(size,gridcontainer);

// button = document.querySelector('button');
// button.addEventListener('click', function () {let size = prompt("Digite tamaño"); createGrid(size =5,gridcontainer);let cells = document.querySelectorAll('.cell');} );

buttonClear = document.querySelector('button.clear');
buttonClear.addEventListener('click', clearGrid);

buttonSize = document.querySelector('button.size');
buttonSize.addEventListener('click', changeSize);

