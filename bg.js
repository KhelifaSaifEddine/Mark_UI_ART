const canvas = document.querySelector(".canvas0");
const ctx = canvas.getContext("2d");
let cw = canvas.style.width = document.querySelector(".doubledborder").clientWidth ;
let ch = canvas.style.height = document.querySelector(".doubledborder").clientHeight;

var grd = ctx.createRadialGradient(95, 0, 5, 90, 60, 100);
grd.addColorStop(0, "#febe7c");
grd.addColorStop(1, "#9c6e3f");
ctx.strokeStyle = "#febe7c"
ctx.lineWidth = 5
ctx.scale(0.2,0.2)
function drawShapeBefore1(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(288 + xoff, 54 + yoff);
    ctx.bezierCurveTo(291 + xoff, 98 + yoff, 250 + xoff, 144 + yoff, 212 + xoff, 204 + yoff);
    ctx.bezierCurveTo(271 + xoff, 257 + yoff, 360 + xoff, 324 + yoff, 436 + xoff, 426 + yoff);
    ctx.stroke();
  }
function drawShapeBefore(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(128 + xoff, 48 + yoff);
    ctx.bezierCurveTo(261 + xoff, 108 + yoff, 327 + xoff, 156 + yoff, 436 + xoff, 260 + yoff);
    ctx.stroke();
  }
function drawShapeAfter(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(361 + xoff, 49 + yoff);
    ctx.bezierCurveTo(326 + xoff, 51 + yoff, 140 + xoff, 163 + yoff, 48 + xoff, 264 + yoff);
    ctx.stroke();
  }
  function drawShapeAfter1(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(194 + xoff, 47 + yoff);
    ctx.bezierCurveTo(207 + xoff, 92 + yoff, 233 + xoff, 154 + yoff, 277 + xoff, 206 + yoff);
    ctx.bezierCurveTo(239 + xoff, 230 + yoff, 94 + xoff, 359 + yoff, 52 + xoff, 424 + yoff);
    ctx.stroke();

  }
drawShapeBefore(ctx,1108,-40)
drawShapeBefore1(ctx,1108,-40)
const canvas1 = document.querySelector(".canvas1");
const ctx1 = canvas1.getContext("2d");
let cw1 = canvas1.style.width = document.querySelector(".doubledborder").clientWidth ;
let ch1 = canvas1.style.height = document.querySelector(".doubledborder").clientHeight;
var grd1 = ctx1.createRadialGradient(75, 50, 5, 90, 60, 100);
grd1.addColorStop(0, "#febe7c");
grd1.addColorStop(1, "#9c6e3f");
ctx1.strokeStyle ="#febe7c"
ctx1.lineWidth = 5
ctx1.scale(0.2,0.2)
drawShapeAfter(ctx1,-90,-40)

drawShapeAfter1(ctx1,-100,-40)
