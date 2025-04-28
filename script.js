
var heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
