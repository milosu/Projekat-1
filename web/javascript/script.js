  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("nav-active");
      } else {
        $(".navbar").removeClass("nav-active");
      }
    });
  });


  // scrole with animation

$(document).ready(function () {
  $('body').scrollspy({ target: ".navbar", offset: 50 });

  $("#navbarNav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }  
  });
});
