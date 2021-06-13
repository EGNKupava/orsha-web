"use strict";

const burgerButtonElement = document.getElementById("burger-button");
const burgerMenuEl = document.getElementById("burger");

burgerButtonElement.addEventListener("click", () => {
  burgerMenuEl.classList.toggle("open");
});
