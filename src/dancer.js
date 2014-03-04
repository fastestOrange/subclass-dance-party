// Creates and returns a new Dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};


  Dancer.prototype.step = function(){
    // the basic Dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(function(){
      that.step();
    }, that.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the Dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


