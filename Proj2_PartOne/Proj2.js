//Global area
window.onload = function () {
  let cells = document.getElementsByClassName("col");

  for (let i = 0; i < cells.length; i++) {
    let id = cells[i].id;
    cells[i].addEventListener(
      "click",
      function ($event) {
        userTurn($event);
      },
      false
    );
  }
};

/************** Function area *******************/

function userTurn(event) {
  let source = event.target || event.srcElement;

  let text = source.innerText;

  if (text === "") {
    source.innerText = "X";
    computerTurn();
  } else {
    alert("Invalid Move! - Cell is occupied");
  }
}


function computerTurn() {
  let cells = document.getElementsByClassName("col");

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {
      cells[i].innerText = "O";
      break;
    }
  }
}
