$(document).ready(function() {
  var canvas = document.getElementById("album");
  var ctx = canvas.getContext("2d");
  //blur fix
  ctx.translate(0.5, 0.5);
  var green = "#548779";
  var black = "#1D1F21";

  function threeGreen(x,y) {
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

  function threeBlack(x, y) {
    var pad = 70;
    for (i = 0; i < 3; i++) {
      if (i === 0) {
        square(50, pad, y, black);
      }
      else if ( i === 1) {
        square(30, (pad + 60), (y + 10) , black);
      }
      else {
        square(20, (pad + 100), (y + 15), black);
      };
    }
  }

  function square(size, x, y, color) {
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = .4;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }

  // threeGreen(80, 100);
  // threeGreen(110, 160);
  // threeGreen(140, 160);
  // threeGreen(170, 200);
  // threeGreen(200, 160);
  // threeGreen(230, 160);
  // threeGreen(290, 200);
  threeBlack(300, 300);

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
