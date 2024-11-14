var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {

  /*==========================*/
  /* Theme Switcher */
  /*==========================*/
  $('#flexSwitchCheckDefault').change(function () {
    if ($(this).is(':checked')) {
      $("body").addClass("dark-theme");
    } else {
      $("body").removeClass("dark-theme");
    }
  });


  /*==========================*/
  /* Header fix */
  /*==========================*/
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }

});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("body").addClass("fixed");
  } else {
    $("body").removeClass("fixed");
  }
});