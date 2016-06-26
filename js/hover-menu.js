$('.link-proyect').mouseenter(function(){
  link = $(this);
  targetImg = link[0].dataset.img;
  $('#'+targetImg).fadeIn( "slow", function(){});

})
.mouseleave(function(){
   link = $(this);
  targetImg = link[0].dataset.img;
  $('#'+targetImg).fadeOut( "slow", function(){});
});




// $('#belmonte').mouseenter(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/belmonte.png")');
//   }
// );
// $('#belmonte').mouseleave(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/proyectos_fondo.png")');
//   }
// );
//
// $('#lindaraja').mouseenter(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/lindaraja.png")');
//   }
// );
// $('#lindaraja').mouseleave(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/proyectos_fondo.png")');
//   }
// );
//
// $('#castilla').mouseenter(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/castillanueva.png")');
//   }
// );
// $('#castilla').mouseleave(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/proyectos_fondo.png")');
//   }
// );
//
// $('#portafolio').mouseenter(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/portafolio.png")');
//   }
// );
// $('#portafolio').mouseleave(
//   function () {
//     $('#section1').css("background-image", 'url("../images/landing/proyectos_fondo.png")');
//   }
// );
