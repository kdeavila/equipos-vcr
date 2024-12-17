// Loader animation

let loader = document.getElementById("onload");
let body = document.querySelector("body");
window.onload = function () {
  setTimeout(() => {
    loader.style.visibility = "hidden";
    loader.style.opacity = "0";
    body.style.overflow = "auto";
  }, 100);
};

// Menu responsive

let menu = document.querySelector(".menu");
let subnavLinks = document.querySelector(".subnav__links--phone");
menu.addEventListener("click", () => {
  subnavLinks.classList.toggle("activeMenuPhone");
});

let linkPhone = document.querySelectorAll(".link--phone");

linkPhone.forEach((link) => {
  link.addEventListener("click", () => {
    subnavLinks.classList.toggle("activeMenuPhone");
  });
});

// Scroll to top

let btnTop = document.querySelector(".top");

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 300) {
    btnTop.style.transform = "translateY(0)";
  } else {
    btnTop.style.transform = "translateY(100px)";
  }
};

btnTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})