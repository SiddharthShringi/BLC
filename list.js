class List {
	constructor(title, board, index) {
		this.title = title;
		this.board = board;
		this.index = index;

		this.node = createNode('div');
		this.node.classList.add('list');
		this.listTitleNode = createNode('h5');
		this.listTitleNode.textContent = this.title;
		this.node.appendChild(this.listTitleNode);
	}
}