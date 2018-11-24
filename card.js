class Card {
	constructor(title, list) {
		this.cardTitle = title;
		this.list = list;
		this.node = createNode('div');
		this.node.classList.add('card');
		this.cardTitleNode = createNode('p');
		this.cardTitleNode.textContent = this.cardTitle;
		this.node.appendChild(this.cardTitleNode);
	}
}