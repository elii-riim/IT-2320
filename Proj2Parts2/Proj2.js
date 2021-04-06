//Global area

let winningPos = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

window.onload = function () {
  
  let cells = document.getElementsByClassName("col");

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener(
      "click",
      function ($event) {
        userTurn($event);
      },
      false
    );
  }

  
  let btnReset = document.getElementById("reset");
  btnReset.addEventListener("click", function () {
    ResetGameBoard();
  });
};

/************** Function area *******************/

function userTurn(event) {
  let source = event.target || event.srcElement;


  let text = source.innerText;

  if (text === "") {
    source.innerText = "X";

    let val = source.id;
    let row = parseInt(val / 3);
    let col = val % 3;
    winningPos[row][col] = "X";

    if (!DetermineWinner("X")) {
      computerTurn();
    }
  } else {
    alert("Invalid Move! - Cell is occupied");
  }
}


function computerTurn() {

  let cells = document.getElementsByClassName("col");

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {

      let val = cells[i].id;
      let row = parseInt(val / 3);
      let col = val % 3;
      winningPos[row][col] = "O";
      cells[i].innerText = "O";


      DetermineWinner("O");
      break;
    }
  }
}


function ResetGameBoard() {

  let cells = document.getElementsByClassName("col");

  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    let message = document.getElementById("message");
    message.innerText = "";
    let status = document.getElementById("status");
    status.innerText =
      "This is a new game!!! Click on any of the squares to start the game";
  }


  winningPos = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}


function DetermineWinner(elem) {
  let winner = false;

  for (let row = 0; row < winningPos.length && !winner; row++) {
    if (
      winningPos[row][0] == elem &&
      winningPos[row][1] == elem &&
      winningPos[row][2] == elem
    ) {
      winner = true;
    }
  }


  if (!winner) {
    for (let col = 0; col < winningPos.length && !winner; col++) {
      if (
        winningPos[0][col] == elem &&
        winningPos[1][col] == elem &&
        winningPos[2][col] == elem
      ) {
        winner = true;
      }
    }
  }

  if (!winner) {
    if (
      winningPos[0][0] == elem &&
      winningPos[1][1] == elem &&
      winningPos[2][2] == elem
    ) {
      winner = true;
    }
  }


  if (!winner) {
    if (
      winningPos[0][2] == elem &&
      winningPos[1][1] == elem &&
      winningPos[2][0] == elem
    ) {
      winner = true;
    }
  }


  if (winner) {
    let message = document.getElementById("message");
    if (elem == "X") {
      message.innerText = "User is the winner!!!";
    } else {
      message.innerText = "Computer is the winner!!!";
    }

    let status = document.getElementById("status");
    status.innerText = "Game Over!";
  }

  return winner;
}
