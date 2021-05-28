const navSlide = () => {
  const optionsSelector = document.querySelector(".options-selector");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  optionsSelector.addEventListener("click", () => {
    //Toggling the nav
    nav.classList.toggle("nav-active");

    //animating the links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //options selector annimation
    optionsSelector.classList.toggle('toggle');

  });
};

navSlide();
