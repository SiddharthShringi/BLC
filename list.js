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
		let cardId = 0;
		this.nextCardId = function () {
			return cardId++;
		}

		if (!dummyList) {
			this.cards = [new Card('Add a card', this, true)];
			this.cardForm = cardForm();
			let lastCard = this.cards[this.cards.length - 1].node
			lastCard.appendChild(this.cardForm);
			this.cards.forEach(card => {
				this.cardNodes.appendChild(card.node);
			});
			this.node.appendChild(this.cardNodes);
			this.cards[this.cards.length - 1].cardTitleNode.addEventListener('click', () => addCard(this));
		}
	}
}