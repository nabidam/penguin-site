$(document).ready(function () {
  $(".products-carousel").owlCarousel({
    margin: 20,
    rtl: true,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    pagination: false,
    rewindNav: false,
    items: 3,
    mouseDrag: false,
    itemsDesktop: [1200, 3],
    itemsDesktopSmall: [1024, 3],
    itemsTablet: [970, 2],
    itemsMobile: [767, 1],
  });

  $(".others-carousel").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
    rtl: true,
  });

  $(".fancybox").fancybox();

  $(".banner").revolution({
    delay: 9000,
    startwidth: 1170,
    startheight: 550,
    hideThumbs: 10,
  });

  $(".fullwidthbanner").revolution({
    delay: 9000,
    startwidth: 1170,
    startheight: 550,
    hideThumbs: 200,
    fullWidth: "on",
  });

  var navbar = $(".navbar"),
    pos = navbar.offset();

  $(window).scroll(function () {
    if (
      $(this).scrollTop() > pos.top + navbar.height() &&
      navbar.hasClass("default") &&
      $(this).scrollTop() > 100
    ) {
      navbar.fadeOut("fast", function () {
        $(this).removeClass("default").addClass("fixed").fadeIn("fast");
      });
    } else if (
      $(this).scrollTop() <= pos.top + 100 &&
      navbar.hasClass("fixed")
    ) {
      navbar.fadeOut(0, function () {
        $(this).removeClass("fixed").addClass("default").fadeIn(0);
      });
    }
  });
});
