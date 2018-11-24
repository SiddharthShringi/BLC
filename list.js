class List {
	constructor(title, board, index, dummyList) {
		this.title = title;
		this.board = board;
		this.index = index;

		this.node = createNode('div');
		this.node.classList.add('list');
		this.listTitleNode = createNode('h5');
		this.listTitleNode.textContent = this.title;
		this.node.appendChild(this.listTitleNode);

		this.cardNodes = createNode('div');
		this.cardNodes.classList.add('cards');

		if(!dummyList) {
			this.cards = [new Card('Add a card', this)];
			this.cardForm = cardForm();
			this.cards[this.cards.length -1].node.appendChild(this.cardForm);
			this.cards.forEach(card => {
				this.cardNodes.appendChild(card.node);
			});
			this.node.appendChild(this.cardNodes);
			this.cards[this.cards.length -1].node.addEventListener('click', () => addCard(this));
		}
	}
}