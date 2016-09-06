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

  $('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    // nav:true
    // responsive: true,
    // autoHeight: true
    // addClassActive: true,
    // singleItem : true,
    // autoHeight : true,
    // stagePadding: 50,
    // autoWidth:true,
    // autoplay: true,
  });

  var $contactForm = $('#contactform');

  $contactForm.submit(function(e) {
    e.preventDefault();
    var $submit = $('input:submit', $contactForm);
    var defaultSubmitText = $submit.val();

    $.ajax({
      url: '//formspree.io/juseve200@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
        //$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
        $submit.attr('disabled', true).val('Enviando mensaje…');
      },
      success: function(data) {
        //$contactForm.append('<div class="alert alert--success">Message sent!</div>');
        $submit.val('Mensaje enviado!');
        setTimeout(function() {
          //$('.alert--success').remove();
          $submit.attr('disabled', false).val(defaultSubmitText);
        }, 5000);
      },
      error: function(err) {
        //$contactForm.find('.alert--loading').hide();
        //$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
        $submit.val('Ops, hubo un error.');
        setTimeout(function() {
          //$('.alert--error').remove();
          $submit.attr('disabled', false).val(defaultSubmitText);
        }, 5000);
      }
    });
});

});

