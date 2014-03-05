var DizzyDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

};

DizzyDancer.prototype = new Dancer();
DizzyDancer.prototype.constructor = DizzyDancer;
DizzyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

  this.$node.addClass("dizzy");

};

