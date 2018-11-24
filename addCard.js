function addCard(list) {
    list.cardForm.style.display = 'block';
    const textCard = list.node.querySelector('.card-text')
        , submitCard = list.node.querySelector('.card-submit');
    submitCard.onclick = addNewCard;
    function addNewCard(e) {
        e.preventDefault();
        let cardTextValue = textCard.value;
        let card = new Card(cardTextValue, list);
        textCard.value = ""
        list.cardNodes.insertBefore(card.node, list.cards[list.cards.length -1].node);
        list.cardForm.style.display = 'none';
    }   
}