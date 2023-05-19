class Referee
{
  checkWinner(moves, symbol, id) {
    this.moves = moves;
    const x = id % 10;
    const y = (id - x) / 10;

    if (
      symbol == this.getSymbol(y, x + 1) &&
      symbol == this.getSymbol(y, x + 2) &&
      symbol == this.getSymbol(y, x + 3)
    ) {
      return true;
    }

    if (
      symbol == this.getSymbol(y, x - 1) &&
      symbol == this.getSymbol(y, x - 2) &&
      symbol == this.getSymbol(y, x - 3)
    ) {
      return true;
    }


    return false;
  }

  getSymbol(y, x) {
    if (y < 0 || y > 9 || x < 0 || x > 9) {
      return null;
    }

    const id = y * 10 + x;
    if (!moves.hasOwnProperty(id)) {
      return null;
    }

    return this.moves[id];
  }

}