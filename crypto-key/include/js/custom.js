gsap.registerPlugin(ScrollTrigger);

var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {


  if (window.innerWidth > 768) {

    const image = document.querySelector('.sticky-top .features-img-wrap');
    gsap.fromTo(
      image, {
        transform: "perspective(1200px) translateX(0px) translateY(0px) scale(1.01702) rotate(-14.6166deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)",
      }, {
        transform: "perspective(1200px) translateX(0px) translateY(60px) scale(1.12156) rotate(0.0184805deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)",
        scrollTrigger: {
          trigger: ".features-container",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          toggleActions: "play pause resume pause",
          // markers: true,
        },
      }
    )
    const featuresBoxes = document.querySelectorAll(".features-box");
    const childWraps = document.querySelectorAll(".features-img-wrap .child-wrap");

    // Ensure the number of children matches the features-box count
    featuresBoxes.forEach((box, index) => {
      if (index < childWraps.length) {
        const child = childWraps[index];
        gsap.fromTo(
          child, {
            zIndex: 0,
            opacity: 1
          }, // Start invisible
          {
            zIndex: index + 1,
            opacity: 1, // Fade in
            scrollTrigger: {
              trigger: box,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      }
    });

  }


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