  git$(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("nav-active");
      } else {
        $(".navbar").removeClass("nav-active");
      }
    });
  });