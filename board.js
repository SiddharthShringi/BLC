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

		this.listForm = listForm();
		this.lists.push(new List('Add a list', this, 0));
		this.lists.forEach(list => {
			this.listNodes.appendChild(list.node)
		});
		console.log(this.lists[this.lists.length - 1].node);
		this.lists[this.lists.length - 1].node.appendChild(this.listForm);
		this.lists[this.lists.length - 1].node.addEventListener('click', () => addList(this))
		this.node.appendChild(this.listNodes)
		console.log(this.listNodes);
	}
}

document.body.onload = function() {
	var newBoard = new Board('Task Manager');
	newBoard.render();
	let headElm = document.querySelector('#main');
	headElm.appendChild(newBoard.node);

}