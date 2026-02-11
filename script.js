const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const navbar = document.querySelector("nav");

/* =========================
   Smooth Scroll (เฉพาะ #section)
========================= */
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // ถ้าเป็นลิงก์ภายในหน้า (#about)
    if (targetId.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(targetId);
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
    // ถ้าเป็นลิงก์ไปหน้าอื่น (report.html) จะไม่ไปยุ่ง
  });
});

/* =========================
   Scroll Reveal
========================= */
function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
      el.classList.add("active");
    }
  });
}

/* =========================
   Active Menu
========================= */
function activeMenu() {
  let current = "";

  sections.forEach((sec) => {
    const secTop = sec.offsetTop - 150;
    const secHeight = sec.offsetHeight;

    if (
      window.scrollY >= secTop &&
      window.scrollY < secTop + secHeight
    ) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
}

/* =========================
   Navbar Effect
========================= */
function navbarEffect() {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

/* =========================
   Page Fade In
========================= */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

/* =========================
   Scroll Event
========================= */
window.addEventListener("scroll", () => {
  revealOnScroll();
  activeMenu();
  navbarEffect();
});

/* =========================
   Initial Load
========================= */
revealOnScroll();
activeMenu();
navbarEffect();
