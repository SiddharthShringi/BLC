function addList(board) {
    board.listForm.style.display = 'block';
    const listTextValue = document.querySelector('.list-text')
          , submitList = document.querySelector('.list-submit');
    console.log(submitList, listTextValue)
    submitList.onclick = addNewList;
    function addNewList(e) {
        e.preventDefault();
        let listValue = listTextValue.value
            , index = board.lists.length -1
            , list;
        if(listValue) {
            list = new List(listValue, board, index);
            console.log(list);
            console.log(board);
            board.lists.splice(index, 0, list.node);
            board.listNodes.insertBefore(list.node, board.lists[index + 1].node);
            listTextValue.value = "";
            board.listForm.style.display = 'none';
        }
    }
}