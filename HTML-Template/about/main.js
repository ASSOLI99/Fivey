let iconBurger = document.querySelector(".icon");
let burgerLinks = document.querySelector(".burger-links");

iconBurger.addEventListener("click", function () {
  burgerLinks.classList.toggle("show");
  iconBurger.classList.toggle("active-btn");
});

let catBtn = document.querySelectorAll(".cat-btn");
let category = document.querySelectorAll(".subCat");
console.log(category[1]);
catBtn[1].addEventListener("click", function () {
  category[1].classList.toggle("show-burger");
  catBtn[1].classList.toggle("active-btn");
});
