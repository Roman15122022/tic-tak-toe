const gameBoard = document.getElementById('game');
const cells = document.querySelectorAll(".cell");
const playerTurn = document.getElementById('player');

let currentPlayer = "x";
let gameActive = true;

const winningPosition = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

addEventListener("click", function (event){
    if (event.target.className === "cell" && event.target.textContent===""){
        event.target.innerHTML = currentPlayer;
    }
})