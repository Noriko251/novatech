document.addEventListener("DOMContentLoaded", function () {
  /* ここから記述します。*/

  // Fade In-------------------------------------------------
  const targets = document.querySelectorAll(".fadein");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  targets.forEach((target) => observer.observe(target));

  // To Top Button--------------------------------------------
  const toTopBtn = document.getElementById("top__icon");
  const showPosition = 300;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > showPosition) {
      toTopBtn.classList.add("active");
    } else {
      toTopBtn.classList.remove("active");
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
