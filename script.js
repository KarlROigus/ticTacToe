const gameBoard = (function() {

    const board = [["", "", ""], ["", "", ""], ["", "", ""]];

    const getBoardState = function() {
        return board;
    }

    const appendSymbolToBoard = function(symbolToBeAdded, row, column) {
        board[row][column] = symbolToBeAdded;
    }
    return {getBoardState, appendSymbolToBoard};
})();


function checkIfSomebodyHasWonTheGame(boardState) {
    if (checkForWinByRows(boardState)) {
        return "Win by row";
    } else if (checkForWinByColumns(boardState)) {
        return "Win by column";
    } else if (checkForWinByDiagonals(boardState)) {
        return "Win by diagonal";
    }
}

function checkForWinByRows(board) {

    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && isNotAnEmptyString(board[0][0])) {
        return true;
    } else if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && isNotAnEmptyString(board[1][0])) {
        return true;
    } else if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && isNotAnEmptyString(board[2][0])) {
        return true;
    }
    return false;
}


function checkForWinByColumns(board) {

    if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && isNotAnEmptyString(board[0][0])) {  
        return true;
    } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && isNotAnEmptyString(board[0][1])) {
        return true;
    } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && isNotAnEmptyString(board[0][2])) {
        return true;
    }
    return false;
}

function checkForWinByDiagonals(board) {
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && isNotAnEmptyString(board[0][0])) {
        return true;
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && isNotAnEmptyString(board[0][2])) {
        return true;
    }
    return false;
}

function isNotAnEmptyString(element) {
    return element != "";
}


console.log(gameBoard.getBoardState());
gameBoard.appendSymbolToBoard("o", 0, 2);
gameBoard.appendSymbolToBoard("o", 1, 1);
gameBoard.appendSymbolToBoard("o", 2, 2);
console.log(gameBoard.getBoardState());
console.log(checkIfSomebodyHasWonTheGame(gameBoard.getBoardState()));











// function createPlayer(name) {
//     const playerName = name;
//     const getPlayerName = function() {
//         return playerName;
//     }

//     return {
//         getPlayerName: getPlayerName
//     }
// }



// const playerOne = createPlayer("playerOne");
// const playerTwo = createPlayer("playerTwo");






