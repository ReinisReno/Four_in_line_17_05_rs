const board = document.querySelector('.game_board');
const template = document.querySelector('#game_cell');

for (let index = 0; index < 100; index++) {
    const new_cell = template.content.firstElementChild.cloneNode(true);
    new_cell.dataset.id = index;
    board.append(new_cell);
    new_cell.addEventListener('click', clickHandle);
}

let count = 0;
function clickHandle() {
    if (this.textContent !== '') {
        return;
    }
    const symbol = (++count % 2 == 0) ? 'o' : 'x';
    this.textContent = symbol;
}
