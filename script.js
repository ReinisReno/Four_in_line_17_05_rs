const board = document.querySelector('.game_board');
const template = document.querySelector('#game_cell');

for (let index = 0; index < 100; index++) {
    const new_cell = template.content.firstElementChild.cloneNode(true);
    template.parentElement.append(new_cell);
}

