
/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)

function creatLink(){
var x = document.getElementById("myLink").href;
  document.getElementById("demo").innerHTML = x;
}
function removeLink(){
    var elem = document.getElementById('demo');
    elem.parentNode.removeChild(elem);
    return false;
}
function changedColor(){
    let color = document.getElementById('inputColor').value;
    document.getElementById('box').style.backgroundColor = color;
}
function newSquare(){
    var x = document.getElementsByClassName("square1");
    var i;
    var c = document.getElementsByClassName("square2");
    var a;

    for(i=0, a=0; i< x.length && a< x.length; i++, a++){
        c[a].style.backgroundColor = "red";
        x[i].style.backgroundColor = "black";
    }
}

function changeShape(){
    let radius = document.getElementById('inputRadius').value;
    var x = document.getElementsByClassName("square1");
    var i;
    for(i=0; i < x.length; i++){
        x[i].style.borderRadius =radius;
    }
}



