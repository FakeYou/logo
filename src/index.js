'use strict';

var _         = require('underscore');
var d3        = require('d3');
var Logo      = require('./logo');

var width  = 600;
var height = 600;

var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)

var logos = [];
var definitions = {
  // vertical: {
  //   A: [[0, 1],[0, 2],[0, 3],[0, 4],[1, 0],[1, 1],[2, 2]],
  //   N: [[0, 5],[0, 6],[0, 7],[0, 8],[1, 4],[1, 5],[2, 3],[2, 4],[2, 5],[2, 6]]
  // },
  // horizontal: {
  //   A: [[0, 3],[1, 2],[1, 1],[2, 2],[2, 3],[2, 4],[2,5]],
  //   N: [[3,1],[3,2],[3,3],[3,4],[4,2],[4,3],[5,2],[5,1],[5,0]]
  // },
  // horizontal: {
  //   A: [[1, 1],[1, 2],[1, 3],[1, 4],[2, 2],[2, 3],[3, 2]],
  //   // A: [[0, 3],[1, 2],[1, 1],[2, 2],[2, 3],[2, 4],[2,5]],
  //   N: [[3,1],[3,3],[3,4],[4,2],[4,3],[5,2],[5,1],[5,0]]
  // }
}

_.each(_.values(definitions), function(definition) {
  var logo = new Logo(svg, definition);
  logo.color('rgb(143, 228, 43)', 'rgb(228, 43, 49)');
});

svg.append('polygon')
  .attr('points', [[10, 53.3],[85, 10],[235, 96.6],[160, 139.9],[85, 96.6],[85, 183.2],[10, 226.5]].join(' '))
  .attr('stroke', '#8FE42B')
  .attr('stroke-width', 2)
  .attr('fill', '#FFF');


// svg.append('polygon')
//   .attr('points', [[10, 236.5],[85, 193.2],[160, 236.5],[160, 149.9],[235, 106.6],[235, 279.8],[160, 323.1],[85, 279.8],[85, 366.4],[10, 409.7]].join(' '))
//   .attr('stroke', '#E42B31')
//   .attr('stroke-width', 2)
//   .attr('fill', '#FFF');
