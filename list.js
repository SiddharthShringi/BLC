function List(id, name, boardName) {
    this.id = id;
    this.name = name;
    this.boardName = boardName;
    this.cards = [];
}
List.prototype.addCard = function(name) {
    let id = this.cards.length;
    let newCard = new Card(id, name, this.name);
    this.cards.push(newCard);
}