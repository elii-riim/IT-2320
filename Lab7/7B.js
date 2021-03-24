/*********************************************************************/
//Global Area




/***************** Function definition area *************/

var btns = document.getElementsByClassName("btnOrig");
for(var i=0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        changeContentOfButton(this);
    })
}
function changeContentOfButton(btnOrig){
    btnOrig.innerHTML = "Active";
    console.log(btnOrig.id);
}

var squares = document.getElementsByClassName("square3");
for(var i=0; i < squares.length; i++){
    squares[i].addEventListener("click", changeColor);
}

function changeColor(event){
this.style.backgroundColor = "green";
}

