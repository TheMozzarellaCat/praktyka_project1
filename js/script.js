'use strict';









const openMenu = document.querySelector(".material-icons");
const navi = document.querySelector(".navigation");
const closeMenu = document.querySelector(".close");
const btns = document.querySelectorAll("a")


openMenu.addEventListener("click", () => {
  navi.classList.add("active")
});

closeMenu.addEventListener("click", () => {
    navi.classList.remove("active")
})

btns.forEach(btn => {
  btn.addEventListener("click", () =>{
    navi.classList.remove("active")
  })
});