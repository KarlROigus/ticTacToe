const gameBoard = (function() {

    let movesMade = 0;

    const board = [["x", "o", "x"], ["o", "x", "o"], ["x", "o", "x"]];

    const getBoardState = function() {
        return board;
    }

    const getAmountOfMovesMade = function() {
        return movesMade;
    }

    const appendSymbolToBoard = function(symbolToBeAdded, row, column) {
        board[row][column] = symbolToBeAdded;
        movesMade++;
    }
    return {getBoardState, appendSymbolToBoard, getAmountOfMovesMade};

})();


function checkIfSomebodyHasWonTheGame(boardState) {
    if (checkForWinByRows(boardState)) {
        return "Win by row";
    } else if (checkForWinByColumns(boardState)) {
        return "Win by column";
    } else if (checkForWinByDiagonals(boardState)) {
        return "Win by diagonal";
    }
    return "No win yet";
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

function createPlayer(name) {
    const playerName = name;
    
    const getPlayerName = function() {
        return playerName;
    }

    return {getPlayerName};
};

const showArrayOnDisplay = (function() {
    const stateOfBoard = gameBoard.getBoardState();
    const boardDiv = document.querySelector(".board");
    for (let i = 0; i < stateOfBoard.length; i++) {
        const row = stateOfBoard[i];
        for (let j = 0; j < row.length; j++) {
            const runner = document.createElement("div");
            runner.textContent = row[j];
            boardDiv.appendChild(runner);
        }
        
    };
})();




















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






