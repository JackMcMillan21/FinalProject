const headerElement = document.getElementsByTagName("header")[0];
headerElement.innerHTML = `
            <nav>
            <div class="main-title">
                <h4>MWIS</h4>
            </div>
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Contracting</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
            <div class="options-selector">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
            </nav>`;

// Followed video on youtube https://www.youtube.com/watch?v=gXkqy0b4M5g changed things as nessecary
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
