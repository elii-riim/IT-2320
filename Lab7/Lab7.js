
/*********************************************************************/
//Global Area



var a = 'http://www.tri-c.edu';

/***************** Function definition area *************/
//write a function to change the size of the box (css)



document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("demo").innerText = a;
  });

document.getElementById("btn2").addEventListener("click", function(){
      document.getElementById("demo").innerHTML = " ";
  });
document.getElementById("btn3").addEventListener("click", changedColor);
document.getElementById("btn4").addEventListener("click", newSquare);
document.getElementById("btn5").addEventListener("click", changeShape);





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
  
  