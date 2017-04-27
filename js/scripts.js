window.addEventListener('scroll', function() {
  if(window.scrollY > 600) {
    $('#top').css("display", "block");
  } else if(window.scrollY < 250) {
    $('#top').css("display", "none");
  }
});
