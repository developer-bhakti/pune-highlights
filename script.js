// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

//Filter
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide(1000);
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const home = document.querySelector(".home");
  const images = [
    "images/slider1.jpg",
    "images/slider2.webp",
    "images/slider3.jpg",
  ];

  let currentIndex = 0;

  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    home.style.setProperty(
      "--background-image",
      `url(${images[currentIndex]})`
    );
  }

  setInterval(changeBackground, 3000);
  changeBackground(); // Initial call to set the first image
});
