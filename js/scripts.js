$(document).ready(function () {
  $(".products-carousel").owlCarousel({
    margin: 20,
    mouseDrag: false,
    rtl: true,
  });

  $(".others-carousel").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
    rtl: true,
  });

  $(".fancybox").fancybox();
});
