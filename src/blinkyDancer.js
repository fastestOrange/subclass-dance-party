var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);


  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

};


BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);


  //Dancer.call(this, step);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

};

