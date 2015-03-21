'use strict';

var d3        = require('d3');
var tinycolor = require('tinycolor2');

var width  = 225;
var height = 390;

var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);

var triangles = [];

var size = 50;
var width = size * 2;
var height = Math.sqrt(3) / 2 * width;


for(var x = 0; x < 3; x++) {
  var column = [];
  
  for(var y = 0 - (x % 2); y < 9 - (x % 2) ; y++) {
    var direction = (y % 2 === 0) ? 1 : -1;

    var tx = x * width * 0.75;
    var ty = y * height * 0.5;

    if(y % 2) {
      tx = tx + width * 0.25;
    }
    if(x % 2) {
      ty += height / 2;
    }

    var t = triangle(svg, tx, ty, size * direction);
    column.push(t);
  }

  triangles.push(column);
}

d3.select(triangles[0][0]).attr('fill', 'none');
d3.select(triangles[1][0]).attr('fill', 'none');
d3.select(triangles[1][3]).attr('fill', 'none');
d3.select(triangles[1][4]).attr('fill', 'none');
d3.select(triangles[1][7]).attr('fill', 'none');
d3.select(triangles[1][8]).attr('fill', 'none');
d3.select(triangles[2][0]).attr('fill', 'none');
d3.select(triangles[2][1]).attr('fill', 'none');
d3.select(triangles[2][7]).attr('fill', 'none');
d3.select(triangles[2][8]).attr('fill', 'none');

var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY;
}, false);

function triangle(svg, x, y, size) {
  x = x + 50 * 0.5;

  var points = [];

  for(var i = 0; i < 3; i++) {
    var angle = Math.PI / 180 * (120 * i);

    points.push([
      x + (size * Math.cos(angle)),
      y + (size * Math.sin(angle)),
    ]);
  }

  var color = '#'+Math.floor(Math.random()*16777215).toString(16);

  var triangle = svg.append('polygon')
    .attr('stroke', 'none')
    .attr('stroke-width', 2)
    .attr('stroke-linecap', 'square')
    .attr('fill', color)
    .attr('points', points.join(' '));

  return triangle[0][0];
}

function animate() {
  var dy = mouse.x - window.innerWidth / 2;
  var dx = mouse.y - window.innerHeight / 2;
  var angle = Math.atan2(dy, dx) * 180 / Math.PI; 

  var mainColor = tinycolor('#E42B6B').spin(angle).toString();
  var secColor = tinycolor(mainColor).tetrad()[3].toString();

  // green & pinkred
  mainColor = 'rgb(143, 228, 43)';
  secColor = 'rgb(228, 43, 49)';

  // purple & pink
  // mainColor = '#632665';
  // secColor = '#E42B6B';

  // // black and grey  
  // mainColor = '#222';
  // secColor = '#555';

  // // teal
  // mainColor = '#74CBD2';
  // secColor = '#AADEE2';


  d3.select(triangles[0][1]).attr('fill', mainColor).attr('stroke', mainColor);
  d3.select(triangles[0][2]).attr('fill', mainColor).attr('stroke', mainColor);
  d3.select(triangles[0][3]).attr('fill', mainColor).attr('stroke', mainColor);
  d3.select(triangles[0][4]).attr('fill', mainColor).attr('stroke', mainColor);
  d3.select(triangles[1][1]).attr('fill', mainColor).attr('stroke', mainColor);
  d3.select(triangles[1][2]).attr('fill', mainColor).attr('stroke', mainColor);
  d3.select(triangles[2][2]).attr('fill', mainColor).attr('stroke', mainColor);

  d3.select(triangles[0][5]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[0][6]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[0][7]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[0][8]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[1][5]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[1][6]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[2][3]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[2][4]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[2][5]).attr('fill', secColor).attr('stroke', secColor);
  d3.select(triangles[2][6]).attr('fill', secColor).attr('stroke', secColor);
  
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);