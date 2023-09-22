(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  /*     // HEADER
      $(".navbar").headroom(); */

  // PROJECT CAROUSEL
  $('#project').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 100
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();


  // 1. Scroll To Top 
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.return-to-top').fadeIn();
    } else {
      $('.return-to-top').fadeOut();
    }
  });
  $('.return-to-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });





  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [500])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })











  $("[id^=carousel-thumbs]").carousel({
    interval: false
  });
  
  if ($("[id^=carousel-thumbs] .carousel-item").length < 2) {
    $("#carousel-thumbs [class^=carousel-control-]").remove();
    $("#carousel-thumbs").css("padding", "0 5px");
  }
  
  $("#carousel").on("slide.bs.carousel", function (e) {
    var id = parseInt($(e.relatedTarget).attr("data-slide-number"));
    var thumbNum = parseInt(
      $("[id=carousel-selector-" + id + "]")
        .parent()
        .parent()
        .attr("data-slide-number")
    );
    $("[id^=carousel-selector-]").removeClass("selected");
    $("[id=carousel-selector-" + id + "]").addClass("selected");
    $("#carousel-thumbs").carousel(thumbNum);
  });

  var container = document.querySelector('[data-ref="test"]');

  var mixer = mixitup(container, {
      animation: {
          duration: 350,
          queueLimit: 1,
          easing: 'ease-in-out',
          clampHeight: false
      },
  });



  function filterByString(searchValue) {
      if (searchValue) {
          // Use an attribute wildcard selector to check for matches

          mixer.filter('[class*="' + searchValue + '"]');
      } else {
          // If no searchValue, treat as filter('all')

          mixer.filter('all');
      }
  }

})(jQuery);
