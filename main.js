const gameBoard = document.getElementById('game');
const cells = document.querySelectorAll(".cell");


let currentPlayer = "X";


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
       /* if(currentPlayer==='X'){
            currentPlayer = 'O';
        }else currentPlayer = 'X';*/
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        checkWin();

    }
})


function checkWin(){
    if (cells[0].innerHTML== cells[1].innerHTML && cells[1].innerHTML==cells[2].innerHTML && cells[0].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
    else if (cells[3].innerHTML== cells[4].innerHTML && cells[4].innerHTML==cells[5].innerHTML  && cells[5].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
    else if (cells[6].innerHTML== cells[7].innerHTML && cells[7].innerHTML==cells[8].innerHTML  && cells[7].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
    else if (cells[0].innerHTML== cells[3].innerHTML && cells[3].innerHTML==cells[6].innerHTML  && cells[6].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
    else if (cells[1].innerHTML== cells[4].innerHTML && cells[4].innerHTML==cells[7].innerHTML  && cells[4].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
    else if (cells[2].innerHTML== cells[5].innerHTML && cells[5].innerHTML==cells[8].innerHTML  && cells[2].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
    else if (cells[0].innerHTML== cells[4].innerHTML && cells[4].innerHTML==cells[8].innerHTML  && cells[0].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
    else if (cells[2].innerHTML== cells[4].innerHTML && cells[4].innerHTML==cells[6].innerHTML  && cells[4].innerHTML!=''){
        currentPlayer = (currentPlayer=='X')? 'O': 'X';
        alert("Win : " + currentPlayer);
    }
}
