'use strict';

document.addEventListener("click", () => {
  const button = document.querySelector(".material-icons");
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.textContent = "close";
  } else {
    button.textContent = "menu";
  }
});