const navbarTogglers = document.querySelectorAll('.navbar-toggler');

navbarTogglers.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    document.body.classList.toggle('show-menu');
  });
});