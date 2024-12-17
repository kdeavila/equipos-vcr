// Swiper JS

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// GSAP

gsap.from(".team__info", {
  x: -100,
  duration: .8,
});

gsap.from(".mySwiper2", {
  x: 100,
  duration: .8,
});

gsap.from(".team__sms", {
  x: -100,
  duration: 1,
});
