$(document).ready(function() {
  var canvas = document.getElementById("album");
  var ctx = canvas.getContext("2d");
  //blur fix
  ctx.translate(0.5, 0.5);
  var green = "#548779";

  function threeSquare(x,y) {
    var pad = 30;
    for (i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.rect(x, y, 20, 20);
      ctx.fillStyle = green;
      ctx.fill();
      ctx.lineWidth = .4;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      y += pad
    }
  }

  threeSquare(100, 100);

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
