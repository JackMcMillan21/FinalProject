const navSlide = () => {
  const optionsSelector = document.querySelector('.options-selector');
  const nav = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links li');

  //Toggling the nav
  optionsSelector.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  //animating the links
  navLinks.forEach((link, index) => {
    link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 +0.3}s';
  });
}

navSlide();
