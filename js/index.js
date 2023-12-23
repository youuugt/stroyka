const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
document.querySelector(".burger__lines").addEventListener("click", () => {
  document.querySelector(".burger-menu").classList.toggle("active")
});
