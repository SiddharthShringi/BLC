function addCard(list) {
    list.cardForm.style.display = 'block';
    const textCard = document.querySelector('.card-text')
        , submitCard = document.querySelector('.card-submit');
    submitCard.onclick = addNewCard;
    function addNewCard(e) {
        e.preventDefault();
        let cardTextValue = textCard.value;
        let card = new Card(cardTextValue, list);
        list.cardForm.style.display = 'none';
        textCard.value = ""
        list.cardNodes.insertBefore(card.node, list.cards[list.cards.length -1].node);

    }   
}