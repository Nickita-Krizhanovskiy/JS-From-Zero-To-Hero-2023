document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("Open");
  });
});

const tabsBtn = document.querySelectorAll(".nav__item");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;

    currentBtn.classList.add("active");
  });
});
