gsap.registerPlugin(ScrollTrigger);

var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {


  const headerHeight = document.getElementById("header").offsetHeight - 1;

  gsap.utils.toArray(".features-img").forEach((serviceBlock, index) => {
    ScrollTrigger.create({
      trigger: serviceBlock,
      pin: '.features-img',
      start: "top top",
      end: "bottom top",
      scrub: true,
      markers: true,
      // New properties for rotation and scaling
      onEnter: () => gsap.to(serviceBlock, { rotation: -15.1349, scale: 1 }),
      onLeave: () => gsap.to(serviceBlock, { rotation: 1.18485, scale: 1.2 }),
      });
    });

  gsap.utils.toArray(".features-content").forEach((serviceBlock, index) => {
    ScrollTrigger.create({
      trigger: serviceBlock,
      pin: '.features-content',
      start: "top top",
      end: "bottom top",
      scrub: true,
      markers: true,
      });
    });


  /*==========================*/
  /* Theme Switcher */
  /*==========================*/
  const bodyParent = document.querySelector('body');
  const button = document.querySelector('#theme-toggler');

  function toggleDark() {
    if (bodyParent.classList.contains('dark-theme')) {
      bodyParent.classList.remove('dark-theme');
      localStorage.setItem("theme", "light");
      button.checked = false;
    } else {
      bodyParent.classList.add('dark-theme');
      localStorage.setItem("theme", "dark");
      button.checked = true;
    }
  }
  if (localStorage.getItem("theme") === "dark") {
    bodyParent.classList.add('dark-theme');
    button.checked = true;
  }
  document.querySelector('#theme-toggler').addEventListener('click', toggleDark);

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