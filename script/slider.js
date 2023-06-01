"use strict";

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide(n) {
  currentSlide += n;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[currentSlide].classList.add("active");
}
