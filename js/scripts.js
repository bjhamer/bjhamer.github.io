window.addEventListener('scroll', function() {
  if(window.scrollY > 600) {
    $('#top').css("display", "block");
  } else if(window.scrollY < 250) {
    $('#top').css("display", "none");
  }
});

$(document).ready(function() {
  $("a").on('click', function(event) {
    if(this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});
