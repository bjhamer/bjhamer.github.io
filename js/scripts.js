window.addEventListener('scroll', function() {
  if(window.scrollY > 600) {
    $('#top').css("display", "block");
  } else if(window.scrollY < 250) {
    $('#top').css("display", "none");
  }
});

// funciton checkFrom(form) {
//   if(!form.capthca.value.match(/^\d{5}$/)) {
//     alert("Please enter the CAPTCHA digits in the box provided");
//     form.catpcha.focus();
//     return false;
//   }
//   return true;
// }
