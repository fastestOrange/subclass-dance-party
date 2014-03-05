$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");


    var dancerMakerFunction = window[dancerMakerFunctionName];

    var rand = Math.random();
    var dancer = new dancerMakerFunction(
      $("body").height() * (Math.random() * 0.2 + 0.5),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $("body").append(dancer.$node)
  });

  $(".lineUp").on("click",function(){
    for(var i = 0 ; i < window.dancers.length; i ++){
      window.dancers[i].setPosition(this.top,100);
    }
  });
  $('body').on("click", '.dancer', function(e){
    console.log('clicked!',e, this)
    $(this).css("-webkit-transform", "rotateY(120deg)");
  });
});

