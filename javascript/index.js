// Hover effect

const elem = document.querySelector(".tour__card");

const height = elem.clientHeight;
const width = elem.clientWidth;

elem.addEventListener("mousemove", (e) => {
  const { layerX, layerY } = e;

  const yRotation = ((layerX - width / 2) / width) * 20;
  const xRotation = ((layerY - height / 2) / height) * 20;

  const string = `
    perspective(600px)
    scale(1.02)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)
  `;

  elem.style.transform = string;
});

elem.addEventListener("mouseout", () => {
  elem.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)
  `;
});

// Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

let tn1 = document.getElementById("tons1");
let tn2 = document.getElementById("tons2");
let tn3 = document.getElementById("tons3");
let tn1Load = 0;
let tn2Load = 0;
let tn3Load = 0;

const time1 = setInterval(() => {
  tn1.textContent = `${(tn1Load += 1)}Tn`;
  if (tn1Load === 25) {
    clearInterval(time1);
  }
}, 100);

let time2 = setInterval(() => {
  tn2.textContent = `${(tn2Load += 1)}Tn`;
  if (tn2Load === 120) {
    clearInterval(time2);
  }
}, 50);

let time3 = setInterval(() => {
  tn3.textContent = `${(tn3Load += 1)}Tn`;
  if (tn3Load === 23) {
    clearInterval(time3);
  }
}, 100);

// Map leaflet

var map = L.map("map").setView([11.0041072, -74.8069813], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([11.0041072, -74.8069813])
  .addTo(map)
  .bindPopup("Barranquilla, Atlántico.")
  .openPopup();

// GSAP animation scroll

gsap.from(".hero__text", {
  y: 200,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".hero__title", {
  y: 200,
  opacity: 0,
  duration: 1,
});

gsap.from(".hero__paragraph", {
  y: 200,
  opacity: 0,
  duration: 1.2,
});

gsap.from(".button--yellow", {
  y: 200,
  opacity: 0,
  duration: 1.4,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "60% center",
    end: "bottom center",
  },
});

tl.from(".card__cont", {
  opacity: 0,
  y: 100,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card",
    start: "90% center",
    end: "bottom center",
  },
});

tl2.from(".brand__cont", {
  opacity: 0,
  y: 100,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".brand",
    start: "90% center",
    end: "bottom center",
  },
});

tl3.from(".team__cont", {
  opacity: 0,
  y: 100,
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".team",
    start: "90% center",
    end: "bottom center",
  },
});

tl4.from(".video__cont", {
  opacity: 0,
  y: 100,
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video",
    start: "90% center",
    end: "bottom center",
  },
});

tl5.from(".services__cont", {
  opacity: 0,
  y: 100,
});
