export default class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = [];
    this.newGrid();
  }

  newGrid() {
    for (let row = 0; row < this.rows; row++) {
      const newRow = [];
      for (let col = 0; col < this.cols; cols++) {
        row[col] = 0;
      }
      this.grid[row] = newRow;
    }
  }

  set(row, col, value) {
    this.set({ row, col }, value);
  }

  set(cordinates, value) {
    const row = cordinates.row;
    const col = cordinates.col;
    const rowArray = this.grid[row];
    rowArray[col] = value;
  }

  get(row, col) {
    const rowArray = this.grid[row];
    const value = rowArray[col];
    return value;
  }

  get(cordinates) {
    const row = cordinates.row;
    const col = cordinates.col;

    this.get(row, col);
  }

  //   const grid = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //   ];

  //   const X = [0,0,0,0,0,0,0,0,0]

  indexFor(coordinates) {
    const row = coordinates.row;
    const col = coordinates.col;
    this.indexFor(row, col);
  }

  indexFor(row, col) {
    let index = -1;

    for (let rIndex = 0; rIndex < row; rIndex++) {
      for (const cIndex = 0; cIndex < col; cIndex++) {
        index++;
      }
    }

    return { index };
  }

  rowColFor(index) {
    if (index >= 0 && index < this.grid.length) {
      const row = Math.floor(index / this.cols);
      const col = index % this.cols;
      return { row, col };
    } else {
      return "Index not in grid!";
    }
  }

  neightbours(row, col) {
    const neightbours = [];
    for (let ri = -1; ri <= 1; ri++) {
      for (let ci = -1; ci <= 1; ci++) {
        if (ci != 0 && ci != 0) {
          const objectRow = row + ri;
          const objectCol = col + ri;
          const cordinates = {
            objectRow,
            objectCol,
          };
          neightbours.push(cordinates);
        }
      }
    }
    return neightbours;
  }

  neightbours(coordinates) {
    const row = coordinates.row;
    const col = coordinates.col;
    this.neightbours(row, col);
  }

  neightbourValues(row, col) {
    const neightbours = [];
    for (let ri = -1; ri <= 1; ri++) {
      for (let ci = -1; ci <= 1; ci++) {
        if (ci != 0 && ci != 0) {
          const value = this.grid[row + ri][col + ci];
          neightbours.push[value];
        }
      }
    }
    return neightbours;
  }

  neightbourValues(coordinates) {
    const row = coordinates.row;
    const col = coordinates.col;
    this.neightbourValues(row, col);
  }

  // nextInRow( row, col ) - returnerer cellen til højre efter denne, eller undefined hvis der ikke er flere i den row

  nextInRow(row, col) {
    const nextCell = this.grid[row][col + 1];
    if (nextCell != NaN) {
      return nextCell;
    }
    return undefined;
  }

  nextInRow(coordinates) {
    const nextRow = coordinates.row;
    const nextCol = coordinates.col;
    this.nextInRow(nextRow, nextCol);
  }

  nextInCol(row, col) {
    const nextRow = this.grid[row + 1];
    if (nextRow != undefined) {
      const nextCol = this.grid[row + 1][col];
      return nextCol;
    } else {
      return undefined;
    }
  }

  nextInCol(coordinates) {
    const nextRow = coordinates.row;
    const nextCol = coordinates.col;
    this.nextInCol(nextRow, nextCol);
  }

  north(row, col) {
    const north = this.grid[row - 1][col];
    if (north != NaN) {
      return north;
    } else {
      return undefined;
    }
  }

  north(coordinates) {
    const nextRow = coordinates.row;
    const nextCol = coordinates.col;
    this.north(nextRow, nextCol);
  }

  south(row, col) {
    const south = this.grid[row + 1][col];
    if (south != NaN) {
      return south;
    } else {
      return undefined;
    }
  }

  south(coordinates) {
    const nextRow = coordinates.row;
    const nextCol = coordinates.col;
    this.south(nextRow, nextCol);
  }

  west(row, col) {
    const west = this.grid[row][col - 1];
    if (west != NaN) {
      return west;
    }
    return undefined;
  }

  west(coordinates) {
    const nextRow = coordinates.row;
    const nextCol = coordinates.col;
    this.west(nextRow, nextCol);
  }

  east(row, col) {
    const east = this.grid[row][col + 1];
    if (east != NaN) {
      return east;
    }
    return undefined;
  }

  east(coordinates) {
    const nextRow = coordinates.row;
    const nextCol = coordinates.col;
    this.east(nextRow, nextCol);
  }

  rows() {
    return this.rows;
  }

  cols() {
    return this.cols;
  }

  size() {
    return this.cols * this.rows;
  }

  fill(value) {
    for (const row of this.grid) {
      for (const col of row) {
        row[col] = value;
      }
    }
  }
}

window.grid;
