$(function () { // wait for document ready
      // init
      // var controller = new ScrollMagic.Controller({
      //   globalSceneOptions: {
      //     triggerHook: 'onLeave'
      //   }
      // });

      // // get all slides
      // var slides = document.querySelectorAll("section.panel-effect");

      // // create scene for every slide
      // for (var i=0; i<slides.length; i++) {
      //   new ScrollMagic.Scene({
      //       triggerElement: slides[i]
      //     })
      //     .setPin(slides[i])
      //     .addIndicators() // add indicators (requires plugin)
      //     .addTo(controller);
      // }
      var controller = new ScrollMagic.Controller();

// define movement of panels
var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.blue", 1, {
    y: "0"
}, {
    y: "-100%",
    ease: Linear.easeNone
}) // in from left
.fromTo("section.panel.turqoise", 1, {
    y: "0"
}, {
    y: "-100%",
    ease: Linear.easeNone
}) // in from left

// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "600%"
})
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
      
});

