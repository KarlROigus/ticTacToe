function player(name, element) {
    const playerName = name;
    const marker = element;

    const getPlayerName = function() {
        return playerName;
    }

    const getMarker = function() {
        return marker;
    }

    return {getPlayerName, getMarker};
};


const gameBoard = (function() {

    const board = [["", "", ""], ["", "", ""], ["", "", ""]];

    const getBoardState = function() {
        return board;
    }


    const appendSymbolToBoard = function(symbolToBeAdded, row, column) {
        board[row][column] = symbolToBeAdded;
    }
    return {getBoardState, appendSymbolToBoard};

});

const game = function() {

    const playerOne = player("playerOne", "x");
    const playerTwo = player("playerTwo", "o");
    const board = gameBoard();
    let movesMade = 0;

    let whoseTurnItIs = playerOne;

    const changeWhoseTurnItIs = function() {
        whoseTurnItIs = (whoseTurnItIs === playerOne) ? playerTwo : playerOne;
    }

    const getWhoseTurnItIs = function() {
        return whoseTurnItIs.getPlayerName();
    }

    const playRound = function(row, column) {
        const marker = whoseTurnItIs.getMarker();
        board.appendSymbolToBoard(marker, row, column);
        movesMade++;
        if (somebodyHasWonTheGame(board.getBoardState())) {
            console.log(whoseTurnItIs.getPlayerName() + " has won!!!");
        } else if (movesMade == 9) {
            console.log("ITS A DRAW!");
        } else {
            changeWhoseTurnItIs();
            console.log(whoseTurnItIs.getPlayerName() + "s turn");
        }

    }

    function somebodyHasWonTheGame(boardState) {
        if (checkForWinByRows(boardState)) {
            return true;
        } else if (checkForWinByColumns(boardState)) {
            return true;
        } else if (checkForWinByDiagonals(boardState)) {
            return true;
        }
        return false;
    };

    function checkForWinByRows(board) {
        if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && isNotAnEmptyString(board[0][0])) {
            return true;
        } else if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && isNotAnEmptyString(board[1][0])) {
            return true;
        } else if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && isNotAnEmptyString(board[2][0])) {
            return true;
        }
        return false;
    };
    
    
    function checkForWinByColumns(board) {
        if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && isNotAnEmptyString(board[0][0])) {  
            return true;
        } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && isNotAnEmptyString(board[0][1])) {
            return true;
        } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && isNotAnEmptyString(board[0][2])) {
            return true;
        }
        return false;
    };
    
    function checkForWinByDiagonals(board) {
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && isNotAnEmptyString(board[0][0])) {
            return true;
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && isNotAnEmptyString(board[0][2])) {
            return true;
        }
        return false;
    };
    
    function isNotAnEmptyString(element) {
        return element != "";
    };

    const showArrayContentOnScreen = function() {
        const boardOnPage = document.querySelector(".board");
        boardOnPage.textContent = "";
        for (let i = 0; i < board.getBoardState().length; i++) {
            const currentRow = board.getBoardState()[i];
            for (let j = 0; j < currentRow.length; j++) {
                const runner = document.createElement("button");
                runner.dataset.row = i;
                runner.dataset.column = j;
                runner.className = "square";
                runner.textContent = currentRow[j];
                boardOnPage.appendChild(runner);
            }
        }
    };
    return {changeWhoseTurnItIs, getWhoseTurnItIs, playRound, showArrayContentOnScreen};
}

function ScreenController() {
    const boardGame = game();
    const announcer = document.querySelector(".announcer");
    announcer.textContent = boardGame.getWhoseTurnItIs() + "s turn";
    boardGame.showArrayContentOnScreen();

    addEventHandlersToCells();

    function handleTheClick(event) {
        const row = event.target.dataset.row;
        const column = event.target.dataset.column;
        boardGame.playRound(row, column);
        boardGame.showArrayContentOnScreen();
        addEventHandlersToCells();
    }

    function addEventHandlersToCells() {
        const gameCells = document.querySelectorAll(".square");
        gameCells.forEach(cell => {
            if (cell.textContent == "") {
                cell.addEventListener("click", handleTheClick);
            }
        });
    };

}

ScreenController();




// const squares = document.querySelectorAll(".square");
// squares.forEach(element => {
//     element.addEventListener("click", () => {
//         gameBoard.appendSymbolToBoard(game.getWhoseTurnItIs().marker, event.target.dataset.row, event.target.dataset.column);
//         let somebodyHasWonTheGame = checkIfSomebodyHasWonTheGame(board);
//         if (somebodyHasWonTheGame) {
//             -announce winner;
//         } else if (game.movesMade == 9) {
//             -announce viik
//         } else {
//             game.changeWhoseTurnItIs()
//         }

//     })
// });
