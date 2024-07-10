const gameBoard = (function() {

    let movesMade = 0;

    const board = [["", "", ""], ["", "", ""], ["", "", ""]];

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

function Player(name) {
    const playerName = name;
    
    const getPlayerName = function() {
        return playerName;
    }

    const isHisTurn = false;



    return {getPlayerName, isHisTurn};
};

const showArrayContentOnDisplay = (function() {
    const stateOfBoard = gameBoard.getBoardState();
    const boardDiv = document.querySelector(".board");
    for (let i = 0; i < stateOfBoard.length; i++) {
        const row = stateOfBoard[i];
        for (let j = 0; j < row.length; j++) {
            const runner = document.createElement("button");
            runner.textContent = row[j];
            boardDiv.appendChild(runner);
        }
        
    };
});

const game = (function() {

    let playerOne;
    let playerTwo;

    const insertPlayers = function(first, second) {
        playerOne = first;
        playerTwo = second;
    }

    const getPlayerOne = function() {
        return playerOne;
    }

    const getPlayerTwo = function() {
        return playerTwo;
    }

    const togglePlayersTurn = function() {
        playerOne.isHisTurn = !playerOne.isHisTurn;
        playerTwo.isHisTurn = !playerTwo.isHisTurn;
    }

    const play = function() {
        showArrayContentOnDisplay();
        const gridButtons = document.querySelectorAll("button");

        const handleButtonClick = function(event) {
            const btn = event.target;
            setButtonsTextContent(playerOne, btn);
            game.togglePlayersTurn();
            btn.removeEventListener("click", handleButtonClick);
        };

        gridButtons.forEach(btn => {
            btn.addEventListener("click", handleButtonClick);
        });
    }

    return {play, insertPlayers, getPlayerOne, getPlayerTwo, togglePlayersTurn};
})();


function setButtonsTextContent(playerOne, btn) {
    if (playerOne.isHisTurn) {
        btn.textContent = "o";
    } else {
        btn.textContent = "x";
    }
}


const startButton = document.querySelector(".startGame");
startButton.addEventListener("click", () => {
    const playerOne = Player(document.querySelector("#playerOne").value);
    const playerTwo = Player(document.querySelector("#playerTwo").value);
    if (playerOne.getPlayerName() != "" && playerTwo.getPlayerName() != "") {
        game.insertPlayers(playerOne, playerTwo);
        game.play();
    }

})


























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






