let gameNumber = 0;
let winNumber = 0;
let drawNumber = 0;
let lossNumber = 0;
let playAgain = true;
let userName, player1, player2;

// getUserName checks that username is 10 characters or less and first char is capitalized, otherwise reprompts for username
function getUserName() {
    userName = prompt("Please enter a username:");
    let userNameAccepted = false;
    let onlyCapitalLetters = /^[A-Z]+$/;
    while (userNameAccepted === false) {
        if (onlyCapitalLetters.test(userName.charAt(0)) && userName.length <= 10) {
            userNameAccepted = true;
        } else {
            userName = prompt("Username must be less than 10 characters and start with a capital letter (e.g. Simon) Please enter another username:");
        }
    }
}

//getPlayerInput obtains the players move input through a prompt
function getPlayerInput() {
    let playerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
    let validInput = false;
    let playerInput = prompt("Make your move!");
    while(validInput === false) {
        if(playerOptions.includes(playerInput)) {
            validInput = true;
        } else {
            playerInput = prompt("Invalid move. Make another move (hint: use lower case)");
        }
    }
    return playerInput;
}

//computerModeSelection randomly selects whether the computer cheats or plays fair each move
//the likelihood of cheating can be adjusted by changing the cheatChance condition on line 41
function computerModeSelection() {
    let cheatChance = Math.random();
    if (cheatChance < 0.5) {
        return computerCheatMode();
    } else {
        return computerFairMode();
    }
}

//in computerFairMode, the computer play is selected entirely at random
function computerFairMode() {
    let computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomNum = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[randomNum];
}

//in computerCheatMode, the computer always selects a predetermined winning play
function computerCheatMode() {
    if (player1 = "rock" || player1 === "scissors") {
       return player2 = "spock";
    } else if (player1 = "paper" || player1 === "lizard") {
        return player2 = "scissors";
    } else {
        return player2 = "lizard";
    }
}

//getWinner determines whether the human player move wins or loses based on the computer move
function getWinner(player1, player2) {
    if(player1 === player2) {
        return "draw";
    } else if(player1 === "rock") {
        if(player2 === "scissors" || player2 === "lizard") {
            return "win";
        } else {
            return "loss"
        }
    } else if(player1 === "paper") {
        if(player2 === "rock" || player2 === "spock") {
            return "win";
        } else {
            return "loss"
        }
    } else if(player1 === "scissors") {
        if(player2 === "paper" || player2 === "lizard") {
            return "win";
        } else {
            return "loss"
        }        
    } else if(player1 === "lizard") {
        if(player2 === "paper" || player2 === "spock") {
            return "win";
        } else {
            return "loss"
        }
    } else if(player1 === "spock") {
        if(player2 === "rock" || player2 === "scissors") {
            return "win";
        } else {
            return "loss"
        }
    }
}

getUserName()

//code below increments the win, draw, loss and game counts, as well as calling the relevant gameplay functions
//results and current scores are displayed through an alert
while (playAgain === true) {
    player1 = getPlayerInput();
    player2 = computerModeSelection();
    let result = getWinner(player1, player2);
    if (result === "win") {
        winNumber++;
    } else if (result === "draw") {
        drawNumber++;
    } else if (result === "loss") {
        lossNumber++;
    }
    gameNumber++;
    alert(`Computer played ${player2}, so it's a ${result}`);
    let userChoice = confirm(
        `${userName}'s score after ${gameNumber} games: 
        Wins ${winNumber}, Draws ${drawNumber}, Losses ${lossNumber}. Click OK to play again`
        );
    if(userChoice === true){
        playAgain = true;
    } else {
        playAgain = false;
    }
}