document.addEventListener("DOMContentLoaded", function () {
  /* ここから記述します。*/

  const hamburger = document.getElementById("header__hamburger");
  const overlay = document.getElementById("header__overlay");
  hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      hamburger.classList.add("active");
      overlay.classList.add("active");
    }
  });

 


});
