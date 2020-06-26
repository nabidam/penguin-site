$(document).ready(function () {
  $(".products-carousel").owlCarousel({
    margin: 20,
    rtl: true,
    // nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
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

  var slide_imgs = $(".banners ul li");

  var counter = 0;
  $(slide_imgs[counter]).show();
  var all_captions = $(".banner-caption");
  for (var i = 0; i < all_captions.length; i++) {
    var self = $(all_captions[i]);
    self.hide();
  }

  var k = 0;
  var captions = $(slide_imgs[counter]).children("div");
  window.tt = captions.length * 2000 + 2000;
  console.log(captions.length);

  for (k; k <= captions.length; k++) {
    var self = $(captions[k]);
    showCaptions(self);
  }

  counter++;

  if (counter === slide_imgs.length) {
    counter = 0;
  }

  if (counter <= slide_imgs.length) {
    window.tt = 6000;

    setInterval(function () {
      for (var j = 0; j < slide_imgs.length; j++) {
        $(slide_imgs[j]).hide();
        // console.log($(slide_imgs[j]));
      }
      $(slide_imgs[counter]).show();

      var all_captions = $(".banner-caption");
      for (var i = 0; i < all_captions.length; i++) {
        var self = $(all_captions[i]);
        self.hide();
      }

      var k = 0;
      var captions = $(slide_imgs[counter]).children("div");
      window.tt = captions.length * 2000 + 2000;
      console.log(captions.length);

      for (k; k <= captions.length; k++) {
        var self = $(captions[k]);
        showCaptions(self);
      }

      counter++;

      if (counter === slide_imgs.length) {
        counter = 0;
      }
      // console.log(counter);
    }, window.tt);
  }
});

function showCaptions(self) {
  setTimeout(function () {
    self
      .css("position", "absolute")
      .css("top", self.data("y") + "%")
      .css("left", self.data("x") + "%")
      .fadeIn();
    // console.log(self);
  }, 2000);
}
