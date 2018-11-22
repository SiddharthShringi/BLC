let listElement = document.querySelector('.list');

function Board(id, name) {
	this.id = id;
	this.name = name;
	this.list = [];
}

Board.prototype.addList = function () {
	let name = listText.value;
	var id = this.list.length
	var newList = new List(id, name, this.name);
	this.list.splice(id-1, 0, newList);
	this.render();
	this.buttonEvent();
}

Board.prototype.render = function() {
	let listValue = (this.list.map(value => value.name)).join(' ');
	listElement.innerHTML = listValue;
}

Board.prototype.displayBoard = function () {
	let startList = `<input type='text' id='listText' placeholder='Add a list'><button id='listButton'>Add</button>`
	this.list.push(new List(0, startList, this.name));
	this.render();
	this.buttonEvent();
}
Board.prototype.buttonEvent = function() {
	let button = document.querySelector('#listButton');
	button.addEventListener('click', this.addList.bind(this));
}

let newBoard = new Board(0, 'newBoard');