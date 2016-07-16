$(function () { // wait for document ready
      // init
      var controller_section6 = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave',
        }
      }); 
      
      var controller_section7 = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave',
          duration:"1%"
        }
      });

   
      var section6 = document.querySelectorAll("#section6");
      var section7 = document.querySelectorAll("#section7");

      // create scene for every slide
      
      new ScrollMagic.Scene({
        triggerElement: section6,
      })
      .setPin(section6)
      .addTo(controller_section6);    


      new ScrollMagic.Scene({
        triggerElement: section7,

      })
      .setPin(section7)
      .addTo(controller_section7);
      
  


    });

