"use strict";

const burgerMenu = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
  console.log("test");
  menu.classList.toggle("menu-active");
});
