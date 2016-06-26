$('.link-project').mouseenter(function(){
  link = $(this);
  targetImg = link[0].dataset.img;
  $('#'+targetImg).fadeIn( "slow", function(){});

})
.mouseleave(function(){
  link = $(this);
  targetImg = link[0].dataset.img;
  $('#'+targetImg).fadeOut( "slow", function(){});
});
