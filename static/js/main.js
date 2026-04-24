/* OtakuVerse — main.js */
(function () {
  "use strict";

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));

  /* ── MOBILE NAV ── */
  const burger = document.querySelector(".nav__burger");
  const navLinks = document.querySelector(".nav__links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Close on link click
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  /* ── SMOOTH SCROLL for anchor hrefs ── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
