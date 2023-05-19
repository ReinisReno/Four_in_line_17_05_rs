const board = document.querySelector('.game_board');
const template = document.querySelector('#game_cell');
let count = 0;
let referee = new Referee();

for (let index = 0; index < 100; index++) {
    const new_cell = template.content.firstElementChild.cloneNode(true);
    new_cell.dataset.id = index;
    board.append(new_cell);
    new_cell.addEventListener('click', clickHandle);
}

function clickHandle() {
    if (this.textContent !== '') {
        return;
    }
    const id = Number(this.dataset.id);
    if (id < 90 && board.children[id + 10].textContent == "") {
        return;
    }

    const symbol = (++count % 2 == 0) ? 'o' : 'x';
    this.textContent = symbol;

    if (referee.checkWinner(moves, symbol)) {
        console.log("Player " + symbol + ' has won the game!');
    }
}