document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('#home');
  ScrollReveal().reveal('#intro', { delay: 600 });
  ScrollReveal().reveal('.features-card', { delay: 500 });
  ScrollReveal().reveal('.contact-details', { delay: 500 });
  ScrollReveal().reveal('#social', { delay: 500 });
