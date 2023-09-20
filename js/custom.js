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



/*   $('#skills').owlCarousel({

    responsive: {
      0: {
        items: 2
      },
      415: {
        items: 2
      },
      600: {
        items: 4

      },
      1199: {
        items: 4
      },
      1200: {
        items: 8
      }
    }
  }); */


  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [500])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })



  // init Isotope

  $(function () {
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      easing: "linear",
      queue: true,
      duration: 500,
    });
    // bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');

      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });
  });





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

  $(window).resize(function(){
    $(".grid").masonry().masonry("reloadItems");
 });

})(jQuery);
