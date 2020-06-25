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

$(document).ready(function () {
  // var slide_imgs = $(".banners ul li");
  // console.log(slide_imgs);
  // // for (var i = 1; i < slide_imgs.length; i++) {
  // //   // var active_slide = i;
  // //   // for (var j = 1; j < slide_imgs.length; j++) {
  // //   //   slide_imgs[j].hide();
  // //   // }
  // //   // slide_imgs[i].show();
  // //   $(slide_imgs[i]).css(
  // //     "background-image",
  // //     "url(" + $(slide_imgs[i]).data("src") + ")"
  // //   );
  // // }
  // var counter = 0;
  // if (counter <= slide_imgs.length) {
  //   setInterval(function () {
  //     for (var j = 0; j < slide_imgs.length; j++) {
  //       $(slide_imgs[j]).hide();
  //       // console.log($(slide_imgs[j]));
  //     }
  //     $(slide_imgs[counter]).show();
  //     var captions = $(slide_imgs[counter]).children("div");
  //     console.log(captions);
  //     for (var i = 0; i < captions.length; i++) {
  //       var self = $(captions[i]);
  //       // console.log(self.data("wait"));
  //       // setTimeout(function () {
  //       // console.log(self);
  //       self
  //         .css("position", "absolute")
  //         .css("top", self.data("y"))
  //         .css("left", self.data("x"))
  //         .fadeIn(self.data("speed"));
  //       // }, self.data("wait"));
  //       setTimeout(function () {}, self.data("wait"));
  //     }
  //     counter++;
  //     if (counter === slide_imgs.length) {
  //       counter = 0;
  //     }
  //   }, 3000);
  // }
  // var captions = $(".banners ul li div");
  // // console.log(captions);
  // for (var i = 0; i < 2; i++) {
  //   var self = $(captions[i]);
  //   // console.log(self.data("wait"));
  //   // setTimeout(function () {
  //   console.log(self);
  //   self
  //     .css("position", "absolute")
  //     .css("top", self.data("y"))
  //     .css("left", self.data("x"))
  //     .fadeIn(self.data("speed"));
  //   // }, self.data("wait"));
  // }
});

function showCaptions(self) {
  setTimeout(function () {
    self
      .css("position", "absolute")
      .css("top", self.data("y"))
      .css("left", self.data("x"))
      .fadeIn();
    // console.log(self);
  }, 2000);
}
