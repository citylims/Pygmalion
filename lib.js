$(document).ready(function() {
  var canvas = document.getElementById("album");
  var ctx = canvas.getContext("2d");
  //blur fix
  ctx.translate(0.5, 0.5);
  var green = "#548779";
  ctx.beginPath();
  ctx.rect(188, 50, 10, 10);
  ctx.fillStyle = green;
  ctx.fill();
  ctx.lineWidth = .4;
  ctx.strokeStyle = 'black';
  ctx.stroke();
});



// ctx.fillStyle = "#CD2322"
//     ctx.fillRect(90, 85, 100, 100);
//     ctx.strokeStyle = "#CD2322"
//     ctx.strokeRect(50, 50, 100, 100);
//
//     ctx.lineWidth = 10;
//     ctx.beginPath();
//     ctx.moveTo(100, 100);
//     ctx.lineTo(150, 350);
//     ctx.lineTo(350, 350);
//     ctx.closePath();
//     ctx.stroke();
//
//     ctx.lineWidth = 20;
//     ctx.strokeStyle = "#CD2322"
//     ctx.strokeRect(300, 360, 100, 100);
//
//     ctx.beginPath();
//     ctx.fillStyle = "#55ACEE"
//     ctx.arc(300, 100, 50, 0, Math.PI*2, false);
//     ctx.closePath();
//     ctx.fill();
//
//     ctx.lineWidth = 8;
//     ctx.beginPath();
//     ctx.strokeStyle = "#55ACEE"
//     ctx.moveTo(50, 150);
//     ctx.quadraticCurveTo(250, 50, 450, 150);
//     ctx.stroke();
