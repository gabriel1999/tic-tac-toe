// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = "player1"

var block1 = "empty"
var block2 = "empty"
var block3 = "empty"
var block4 = "empty"
var block5 = "empty"
var block6 = "empty"
var block7 = "empty"
var block8 = "empty"
var block9 = "empty"


function topLeft() {
  if(block1 == "empty"){
   if(turn == "player1"){
   var canvas = document.getElementById("game-board")
   var cross = document.createElementNS(namespace, "rect")
   cross.setAttribute("x", 30)
   cross.setAttribute("y", 30)
   cross.setAttribute("width", 140)
   cross.setAttribute("height", 140)
   cross.setAttribute("fill", "white")
   canvas.appendChild(cross)
   turn = "player2"
   block1 = "square"
   if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
     alert("Square Wins")
   }
 }else if (turn == "player2") {
   var canvas = document.getElementById("game-board")
   var circle1 = document.createElementNS(namespace, "circle")
   circle1.setAttribute("cx", 100)
   circle1.setAttribute("cy", 100)
   circle1.setAttribute("r", 60)
   circle1.setAttribute("fill", "white")
   canvas.appendChild(circle1)
   turn = "player1"
   block1 = "circle"
   if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
     alert("Circle Wins")
   }
  }
 }
}


function topCenter() {
    if(block2 == "empty"){
   if(turn == "player1"){
   var canvas = document.getElementById("game-board")
   var cross2 = document.createElementNS(namespace, "rect")
   cross2.setAttribute("x", 230)
   cross2.setAttribute("y", 30)
   cross2.setAttribute("width", 140)
   cross2.setAttribute("height", 140)
   cross2.setAttribute("fill", "white")
   canvas.appendChild(cross2)
   turn = "player2"
   block2 = "square"
   if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
     alert("Square Wins")
   }
 }else if (turn == "player2") {
   var canvas = document.getElementById("game-board")
   var circle2 = document.createElementNS(namespace, "circle")
   circle2.setAttribute("cx", 300)
   circle2.setAttribute("cy", 100)
   circle2.setAttribute("r", 60)
   circle2.setAttribute("fill", "white")
   canvas.appendChild(circle2)
   turn = "player1"
   block2 = "circle"
   if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
     alert("Circle Wins")
   }
  }
 }
}

function topRight() {
  if(block3 == "empty"){
  if(turn == "player1"){
  var canvas = document.getElementById("game-board")
  var cross3 = document.createElementNS(namespace, "rect")
  cross3.setAttribute("x", 430)
  cross3.setAttribute("y", 30)
  cross3.setAttribute("width", 140)
  cross3.setAttribute("height", 140)
  cross3.setAttribute("fill", "white")
  canvas.appendChild(cross3)
  turn = "player2"
  block3 = "square"
  if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
    alert("Square Wins")
  }
  if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
    alert("Square Wins")
  }
  if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
    alert("Square Wins")
  }
}else if (turn == "player2") {
  var canvas = document.getElementById("game-board")
  var circle3 = document.createElementNS(namespace, "circle")
  circle3.setAttribute("cx", 500)
  circle3.setAttribute("cy", 100)
  circle3.setAttribute("r", 60)
  circle3.setAttribute("fill", "white")
  canvas.appendChild(circle3)
  turn = "player1"
  block3 = "circle"
  if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
    alert("Circle Wins")
  }
  if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
    alert("Circle Wins")
  }
  if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
    alert("Circle Wins")
  }
  }
 }
}


function middleLeft() {
   if(block4 == "empty"){
   if(turn == "player1"){
   var canvas = document.getElementById("game-board")
   var cross4 = document.createElementNS(namespace, "rect")
   cross4.setAttribute("x", 30)
   cross4.setAttribute("y", 230)
   cross4.setAttribute("width", 140)
   cross4.setAttribute("height", 140)
   cross4.setAttribute("fill", "white")
   canvas.appendChild(cross4)
   turn = "player2"
   block4 = "square"
   if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
     alert("Square Wins")
   }
 }else if (turn == "player2") {
   var canvas = document.getElementById("game-board")
   var circle4 = document.createElementNS(namespace, "circle")
   circle4.setAttribute("cx", 100)
   circle4.setAttribute("cy", 300)
   circle4.setAttribute("r", 60)
   circle4.setAttribute("fill", "white")
   canvas.appendChild(circle4)
   turn = "player1"
   block4 = "circle"
   if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
     alert("Circle Wins")
   }
  }
 }
}


function middleCenter() {
   if(block5 == "empty"){
   if(turn == "player1"){
   var canvas = document.getElementById("game-board")
   var cross5 = document.createElementNS(namespace, "rect")
   cross5.setAttribute("x", 230)
   cross5.setAttribute("y", 230)
   cross5.setAttribute("width", 140)
   cross5.setAttribute("height", 140)
   cross5.setAttribute("fill", "white")
   canvas.appendChild(cross5)
   turn = "player2"
   block5 = "square"
   if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
     alert("Square Wins")
   }
 }else if (turn == "player2") {
   var canvas = document.getElementById("game-board")
   var circle5 = document.createElementNS(namespace, "circle")
   circle5.setAttribute("cx", 300)
   circle5.setAttribute("cy", 300)
   circle5.setAttribute("r", 60)
   circle5.setAttribute("fill", "white")
   canvas.appendChild(circle5)
   turn = "player1"
   block5 = "circle"
   if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
     alert("Circle Wins")
   }
  }
 }
}

function middleRight() {
  if(block6 == "empty"){
  if(turn == "player1"){
  var canvas = document.getElementById("game-board")
  var cross6 = document.createElementNS(namespace, "rect")
  cross6.setAttribute("x", 430)
  cross6.setAttribute("y", 230)
  cross6.setAttribute("width", 140)
  cross6.setAttribute("height", 140)
  cross6.setAttribute("fill", "white")
  canvas.appendChild(cross6)
  turn = "player2"
  block6 = "square"
  if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
    alert("Square Wins")
  }
  if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
    alert("Square Wins")
  }
  if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
    alert("Square Wins")
  }
}else if (turn == "player2") {
  var canvas = document.getElementById("game-board")
  var circle6 = document.createElementNS(namespace, "circle")
  circle6.setAttribute("cx", 500)
  circle6.setAttribute("cy", 300)
  circle6.setAttribute("r", 60)
  circle6.setAttribute("fill", "white")
  canvas.appendChild(circle6)
  turn = "player1"
  block6 = "circle"
  if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
    alert("Circle Wins")
  }
  if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
    alert("Circle Wins")
  }
  if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
    alert("Circle Wins")
  }
  }
 }
}

function bottomLeft() {
   if(block7 == "empty"){
   if(turn == "player1"){
   var canvas = document.getElementById("game-board")
   var cross7 = document.createElementNS(namespace, "rect")
   cross7.setAttribute("x", 30)
   cross7.setAttribute("y", 430)
   cross7.setAttribute("stroke-width", 3)
   cross7.setAttribute("width", 140)
   cross7.setAttribute("height", 140)
   cross7.setAttribute("fill", "white")
   canvas.appendChild(cross7)
   turn = "player2"
   block7 = "square"
   if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
     alert("Square Wins")
   }
 }else if (turn == "player2") {
   var canvas = document.getElementById("game-board")
   var circle7 = document.createElementNS(namespace, "circle")
   circle7.setAttribute("cx", 100)
   circle7.setAttribute("cy", 500)
   circle7.setAttribute("r", 60)
   circle7.setAttribute("fill", "white")
   canvas.appendChild(circle7)
   turn = "player1"
   block7 = "circle"
   if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
     alert("Circle Wins")
   }
  }
 }
}

function bottomCenter() {
   if(block8 == "empty"){
   if(turn == "player1"){
   var canvas = document.getElementById("game-board")
   var cross8 = document.createElementNS(namespace, "rect")
   cross8.setAttribute("x", 230)
   cross8.setAttribute("y", 430)
   cross8.setAttribute("stroke-width", 3)
   cross8.setAttribute("width", 140)
   cross8.setAttribute("height", 140)
   cross8.setAttribute("fill", "white")
   canvas.appendChild(cross8)
   block8 = "square"
   turn = "player2"
   if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
     alert("Square Wins")
   }
 }else if (turn == "player2") {
   var canvas = document.getElementById("game-board")
   var circle8 = document.createElementNS(namespace, "circle")
   circle8.setAttribute("cx", 300)
   circle8.setAttribute("cy", 500)
   circle8.setAttribute("r", 60)
   circle8.setAttribute("fill", "white")
   canvas.appendChild(circle8)
   turn = "player1"
   block8 = "circle"
   if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
     alert("Circle Wins")
   }
  }
 }
}

function bottomRight() {
   if(block9 == "empty"){
   if(turn == "player1"){
   var canvas = document.getElementById("game-board")
   var cross8 = document.createElementNS(namespace, "rect")
   cross8.setAttribute("x", 430)
   cross8.setAttribute("y", 430)
   cross8.setAttribute("stroke-width", 3)
   cross8.setAttribute("width", 140)
   cross8.setAttribute("height", 140)
   cross8.setAttribute("fill", "white")
   canvas.appendChild(cross8)
   turn = "player2"
   block9 = "square"
   if(block1 == "square" && block2 == "square" && block3 == "square" || block4 == "square" && block5 == "square" && block6 == "square" || block7 == "square" && block8 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block4 == "square" && block7 == "square" || block2 == "square" && block5 == "square" && block8 == "square" || block3 == "square" && block6 == "square" && block9 == "square"){
     alert("Square Wins")
   }
   if(block1 == "square" && block5 == "square" && block9 == "square" || block3 == "square" && block5 == "square" && block7 == "square"){
     alert("Square Wins")
   }
 }else if (turn == "player2") {
   var canvas = document.getElementById("game-board")
   var circle8 = document.createElementNS(namespace, "circle")
   circle8.setAttribute("cx", 500)
   circle8.setAttribute("cy", 500)
   circle8.setAttribute("r", 60)
   circle8.setAttribute("fill", "white")
   canvas.appendChild(circle8)
   turn = "player1"
   block9 = "circle"
   if(block1 == "circle" && block2 == "circle" && block3 == "circle" || block4 == "circle" && block5 == "circle" && block6 == "circle" || block7 == "circle" && block8 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block4 == "circle" && block7 == "circle" || block2 == "circle" && block5 == "circle" && block8 == "circle" || block3 == "circle" && block6 == "circle" && block9 == "circle"){
     alert("Circle Wins")
   }
   if(block1 == "circle" && block5 == "circle" && block9 == "circle" || block3 == "circle" && block5 == "circle" && block7 == "circle"){
     alert("Circle Wins")
   }
  }
 }
}

function reset(){
  window.location.reload();
}
