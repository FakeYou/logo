'use strict';

var triangle = function(svg, x, y, size) {
  var points = [];
  var direction = (y % 2 === 0) ? 1 : -1;
  var width = size * 2;
  var height = Math.sqrt(3) / 2 * width;

  var tx = x * width * 0.75;
  var ty = y * height * 0.5;

  if(y % 2) {
    tx = tx + width * 0.25;
  }
  if(x % 2) {
    ty += height / 2;
  }

  tx += size / 2;
  ty += 0;

  for(var i = 0; i < 3; i++) {
    var angle = Math.PI / 180 * (120 * i);

    points.push([
      (tx + (size * direction * Math.cos(angle))).toFixed(1),
      (ty + (size * direction * Math.sin(angle))).toFixed(1),
    ]);
  }

  var color = '#'+Math.floor(Math.random()*16777215).toString(16);

  var triangle = svg.append('polygon')
    .attr('stroke', color)
    .attr('stroke-width', 1)
    .attr('stroke-linecap', 'square')
    .attr('fill', color)
    .attr('points', points.join(' '));

  return triangle[0][0];
};

module.exports = triangle;