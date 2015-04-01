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
        square(50, x, y, black);
      }
      else if ( i === 1) {
        square(30, (x + 60), (y + 10) , black);
      }
      else {
        square(20, (x + 100), (y + 15), black);
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

  //greenSquares
  threeGreen(80, 100);
  threeGreen(110, 160);
  threeGreen(140, 160);
  threeGreen(170, 200);
  threeGreen(200, 160);
  threeGreen(230, 160);
  threeGreen(290, 200);

  //blackSquares
  threeBlack(600, 300);

});
