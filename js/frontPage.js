document.addEventListener("DOMContentLoaded", function () {
  /* ここから記述します。*/

  const targets = document.querySelectorAll(".fadein");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 1回だけ実行したい場合
      }
    });
  });

  targets.forEach((target) => observer.observe(target));

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
