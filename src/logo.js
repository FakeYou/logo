'use strict';

var _         = require('underscore');
var triangle  = require('./triangle');
var tinycolor = require('tinycolor2');

var Logo = function(parent, definition) {
  this.definition = definition;

  this.group = parent.append('g');

  this.build();
};

Logo.prototype.build = function() {
  this.A = _.map(this.definition.A, function(t) {
    return triangle(this.group, t[0], t[1], 50);
  }, this);

  this.N = _.map(this.definition.N, function(t) {
    return triangle(this.group, t[0], t[1], 50);
  }, this);
};

Logo.prototype.color = function(colorA, colorN) {
  _.each(this.A, function(t) { d3.select(t).attr('fill', colorA).attr('stroke', colorA); });
  _.each(this.N, function(t) { d3.select(t).attr('fill', colorN).attr('stroke', colorN); });
}

Logo.prototype.gradient = function(colorA, colorN) {
  _.each(this.A, function(t) { 
    var color = tinycolor(colorA).lighten((Math.random() - 0.5) * 20).toString();
    d3.select(t).attr('fill', color).attr('stroke', color); 
  });
  
  _.each(this.N, function(t) { 
    var color = tinycolor(colorN).lighten((Math.random() - 0.5) * 20).toString();
    d3.select(t).attr('fill', color).attr('stroke', color); 
  });
}

module.exports = Logo;