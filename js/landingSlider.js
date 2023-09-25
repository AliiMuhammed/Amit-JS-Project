var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay:6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
