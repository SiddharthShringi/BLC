class Board {
	constructor(title) {
		this.title = title;
		this.lists = [];

		this.node = createNode('div');
		this.node.classList.add('board');
		this.titleNode = createNode('h1');

		this.listNodes = createNode('div');
		this.listNodes.classList.add('lists');
	}
	render() {
		this.titleNode.textContent = this.title;
		this.node.appendChild(this.titleNode);
	}
}

document.body.onload = function() {
	var newBoard = new Board('Task Manager');
	newBoard.render();
	let headElm = document.querySelector('#main');
	headElm.appendChild(newBoard.node);

}