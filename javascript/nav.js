const navSlide = () => {
  const optionsSelector = document.querySelector('.options-selector');
  const nav = document.querySelector('.links');

  optionsSelector.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();
