const board = document.querySelector('.game_board');
const template = document.querySelector('#game_cell');
let count = 0;
let referee = new Referee();
let moves = {};

for (let index = 0; index < 100; index++) {
    const new_cell = template.content.firstElementChild.cloneNode(true);
    new_cell.dataset.id = index;
    board.append(new_cell);
    new_cell.addEventListener('click', clickHandle);
}

function clickHandle() {
    const id = Number(this.dataset.id);
    if (moves.hasOwnProperty(id)) {
        return;
    }
    if (id < 90 && !moves.hasOwnProperty(id + 10)) {
        return;
    }

    const symbol = (++count % 2 == 0) ? 'o' : 'x';
    moves[id] = symbol;
    this.textContent = symbol;

    if (referee.checkWinner(moves, symbol, id)) {
        console.log("Player " + symbol + ' has won the game!');
    }
}