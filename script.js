const board = document.querySelector('.game_board');
const template = document.querySelector('#game_cell');
const popup = document.querySelector('.popup');
const message_el = popup.querySelector('.message');
let count = 0;
let size = 10;
let referee = new Referee(size);
let storage = new Storage('four_in_line');
let moves = {};
let entries = storage.getEntries();

for (let index = 0; index < size*size; index++) {
  const new_cell = template.content.firstElementChild.cloneNode(true);
  new_cell.dataset.id = index;
  board.append(new_cell);
  new_cell.addEventListener('click', clickHandle);
}

for (const id in entries) {
  const entry = entries[id];
  board.children[id].textContent = entry.symbol;
  moves[id] = entry.symbol;
  count++;
}

document.querySelector('.reset').addEventListener('click', resetHandle);
document.querySelector('.reset_game').addEventListener('click', resetHandle);

function clickHandle () {
  const id = Number(this.dataset.id);
  if (moves.hasOwnProperty(id)) {
    return;
  }

  if (id < (size - 1) * size && !moves.hasOwnProperty(id + size)) {
    return ;
  }

  const symbol = (++count % 2 == 0) ? 'o' : 'x';
  moves[id] = symbol;
  this.textContent = symbol;

  storage.add(
    id,
    {symbol: symbol}
  );

  if (referee.checkWinner(moves, id)) {
    showMessage("Player " + symbol + ' has won the game!');
  }
}

popup.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup')) {
    hideMessage();
  }
})

function showMessage(message) {
  popup.classList.add('open');
  message_el.textContent = message;
}

function hideMessage() {
  popup.classList.remove('open');
}

function resetHandle () {
  for (const id in moves) {
    board.children[id].textContent = '';
  }
  storage.clear();
  count = 0;
  moves = {};
  hideMessage();
}