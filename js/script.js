'use strict';

document.addEventListener("click", () => {
  const button = document.querySelector(".material-icons");
  const navi = document.querySelector(".navigation")
  button.classList.toggle("active");


  if (button.classList.contains("active")) {
    navi.classList.add("active")
  } else {
    navi.classList.remove("active")
  }
});