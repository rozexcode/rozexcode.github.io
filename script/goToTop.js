"use strict";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var btn = document.getElementById("goToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.visibility = "visible";
    btn.style.opacity = "1";
  } else {
    btn.style.visibility = "hidden";
    btn.style.opacity = "0";
  }
}

function goToTop() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(goToTop);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}
