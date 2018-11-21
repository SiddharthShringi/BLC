function Board(id, name) {
	this.id = id;
	this.name = name;
	this.list = [];
}

Board.prototype.addList = function (name) {
	var id = this.list.length
	var newList = new List(id, name, this.name);
	this.list.push(newList);
}