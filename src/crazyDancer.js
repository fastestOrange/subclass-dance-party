var CrazyDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

};

CrazyDancer.prototype = new Dancer();
CrazyDancer.prototype.constructor = CrazyDancer;
CrazyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

  this.$node.addClass("crazy").css("-webkit-transform", "rotateY(120deg)");
  this.$node.toggle(function(){
    $(this).css("-webkit-transform", "rotateX(90deg)")},function(){
      $(this).css("-webkit-transform", "rotateY(90deg)");
    });
};

