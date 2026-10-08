// window.addEventListener("DOMContentLoaded", () => {
//   requestAnimationFrame(() => {
//     document.querySelector(".info-text").classList.add("visible");
//   });
// });

const menuToggleButton = document.getElementById("menuToggleButton");

const navbar = document.querySelector(".navbar");

const navbarLinks = document.querySelector(".navbar-links");

const header = document.querySelector("header");

const socials = document.querySelector(".socials");

const locations = document.querySelector(".locations");

menuToggleButton.addEventListener("click", () => {
  menuToggleButton.classList.toggle("open");
  navbar.classList.toggle("open");
  navbarLinks.classList.toggle("open");
  header.classList.toggle("open");
  socials.classList.toggle("open");
  locations.classList.remove("show");
});

const allNavLinks = document.querySelectorAll(".navbar-links li a");

allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    navbarLinks.classList.remove("open");
    menuToggleButton.classList.remove("open");
    header.classList.remove("open");
    socials.classList.remove("open");
    locations.classList.remove("show");
  });
});

const container = document.querySelector(".main-content-2");
const backToTopBtn = document.querySelector("button.back-to-top");

if (backToTopBtn) {
  const amountScrolled =
    (container.scrollHeight - container.clientHeight) * 0.6;

  // Scroll event on .main-content-2
  container.addEventListener("scroll", function () {
    if (container.scrollTop > amountScrolled) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Click event for back-to-top button
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

document.querySelectorAll(".event").forEach((event) => {
  const srcUrl = event.getAttribute("data-img");
  if (srcUrl) {
    const img = new Image();
    img.src = srcUrl;
  }
});

// const locations = document.querySelector(".locations");
const locationsMenu = document.querySelector(".locations-menu");

locationsMenu.addEventListener("click", () => {
  locations.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!locations.classList.contains("show")) return;
  if (e.target.closest(".locations a") || e.target.closest(".locations-menu")) {
    return;
  }
  locations.classList.remove("show");
});

// locationsMenu.addEventListener("mouseenter", () => {
//   locations.classList.add("show");
// });

// locationsMenu.addEventListener("mouseleave", () => {
//   locations.classList.remove("show");
// });

const events = document.querySelectorAll(".event");
const image = document.querySelector(".hover-image");

events.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    srcUrl = e.target.getAttribute("data-img");
    image.setAttribute("src", srcUrl);
    image.classList.toggle("open");
  });
  el.addEventListener("mouseleave", (e) => {
    image.setAttribute("src", "");
    image.classList.toggle("open");
  });
});

events.forEach((el) => {
  el.addEventListener("touchstart", (e) => {
    srcUrl = e.target.getAttribute("data-img");
    image.setAttribute("src", srcUrl);
    image.classList.toggle("open");
  });
  el.addEventListener("touchend", (e) => {
    image.setAttribute("src", "");
    image.classList.toggle("open");
  });
});

document.querySelectorAll(".credits").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".toggle-content").forEach((content) => {
      content.classList.toggle("show");
    });
  });
});

window.matchMedia("(min-width: 901px)").addEventListener("change", (e) => {
  if (e.matches) {
    menuToggleButton.classList.remove("open");
    navbar.classList.remove("open");
    navbarLinks.classList.remove("open");
    header.classList.remove("open");
    socials.classList.remove("open");
  }
});
