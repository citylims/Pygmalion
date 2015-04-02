$(document).ready(function() {
  var canvas = document.getElementById("album");
  var ctx = canvas.getContext("2d");
  //blur fix
  ctx.translate(0.5, 0.5);
  var green = "#548779";
  var black = "#1D1F21";

  function threeGreen(x,y) {
    var pad = 25;
    for (i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.rect(x, y, 16, 16);
      ctx.fillStyle = green;
      ctx.fill();
      ctx.lineWidth = .4;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      y += pad
    }
  }

  function threeBlack(x, y) {
    for (i = 0; i < 3; i++) {
      if (i === 0) {
        square(40, x, y, black);
      }
      else if ( i === 1) {
        square(22, (x + 46), (y + 9) , black);
      }
      else {
        square(16, (x + 74), (y + 12), black);
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
  threeGreen(80, 110);
  threeGreen(103, 160);
  threeGreen(126, 160);
  threeGreen(149, 194);
  threeGreen(172, 160);
  threeGreen(195, 160);
  threeGreen(245, 194);

  //blackSquares
  threeBlack(295, 140);
  threeBlack(295, 186);
  threeBlack(295, 232);
  threeBlack(295, 278);

});
