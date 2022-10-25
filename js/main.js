document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal("#home");
ScrollReveal().reveal("#intro", { delay: 600 });
ScrollReveal().reveal(".features-card", { delay: 500 });
ScrollReveal().reveal(".contact-details", { delay: 500 });

/********************************************
JS Cursor-Custom
*********************************************/

var cursorinner = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});
document.addEventListener("mousedown", function () {
  cursorinner.classList.add("cursorinnerhover");
});
document.addEventListener("mouseup", function () {
  cursorinner.classList.remove("cursorinnerhover");
});
