let para = document.getElementById("para");
para.innerHTML = "Hello World!";
para.style.color = "tomato";

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 500, 100);