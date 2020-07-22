document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board =
{
  cells:
    [{
      row: 1,
      col: 1,
      isMine: true,
      hidden: true

    }, {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true

    }, {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true

    }, {
      row: 2,
      col: 1,
      isMine: true,
      hidden: true

    }, {
      row: 2,
      col: 2,
      isMine: true,
      hidden: true

    }, {
      row: 2,
      col: 3,
      isMine: false,
      hidden: true

    }, {
      row: 3,
      col: 1,
      isMine: false,
      hidden: true

    }, {
      row: 3,
      col: 2,
      isMine: true,
      hidden: true

    }, {
      row: 3,
      col: 3,
      isMine: true,
      hidden: true
    }
    ]
}

function startGame() {
  // console.log(board.cells.length)
  for (let i = 0; i < board.cells.length; i++) {
    let mineCount = countSurroundingMines(board.cells[i].row, board.cells[i].col)
    board.cells[i].surroundingMines = mineCount
  }
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
}


// Don't remove this function call: it makes the game work!

lib.initBoard()





// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  var youWon = true
  for (let i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
    if (cell.isMine && !cell.isMarked) {
      youWon = false
    }
    if (!cell.isMine && cell.hidden) {
      youWon = false
    }
  }
  if (youWon) {
    displayMessage("Shakas in the air like U just don care!")
  }
}








// var isWin = true
// for (let i = 0; i < board.cells.length; i++) {
//    var cell = board.cells[i]
//   //  console.log(board.cells[i].isMine)
//   if (cell.isMine && !cell.isMarked) {
//     // console.log(cell)
//     isWin = false
//   }
//   else if (cell.hidden && cell.isMine) {
//     console.log(cell)
//     isWin = false 
//   }
//   // if .isMine[i] && .isMarked[i] === true, the player has won.
//   //if .isMine && .Hidden === false, the player has won.
// //else return.
// //    if (isMine && isMarked === true){
//   //     displayMessage('You win!') 
//   //    } 
//   //    else if (isMine && hidden === false){


// }

// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines(row, col) {
  let count = 0
  let surroundingCells = getSurroundingCells(row, col)

  for (let i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      count++
    }





  }
  // }console.log(count)
  return count
}










  // let count = 0
  // for (i = 0; i < surrounding.length; i++) {
  //   if (surrounding[i].isMine) {
  //     count++
  //   }
  // }
  // return count

