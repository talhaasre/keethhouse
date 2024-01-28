"use strict";

//mobile menu
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");

const elemArr = [navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navOpenBtn.classList.toggle("open");
  });
}

/* toggle navbar when click any navbar-link */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navOpenBtn.classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const hideLoader = () => {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.style.display = "none";
    }
  };

  const scrollToGallery = (gallerySelector) => {
    const gallery = document.querySelector(gallerySelector);
    if (gallery) {
      gallery.classList.add("active");
    }
  };

  const galleryClickHandler = (ctaClass, gallerySelector) => {
    const ctas = document.querySelectorAll(`.${ctaClass}`);
    ctas.forEach((cta) => {
      cta.addEventListener("click", () => scrollToGallery(gallerySelector));
    });
  };

  hideLoader();

  galleryClickHandler("phase-I-Cta", ".kh-phase-1-gallery");
  galleryClickHandler("phase-II-Cta", ".kh-phase-2-gallery");

  document
    .getElementById("gallery-1-close")
    .addEventListener("click", function () {
      document.getElementById("kh-phase-1-gallery").classList.remove("active");
    });
  document
    .getElementById("gallery-2-close")
    .addEventListener("click", function () {
      document.getElementById("kh-phase-2-gallery").classList.remove("active");
    });

  document.getElementById("year").innerHTML = new Date().getFullYear();
});

function openGallery(boxNumber, galleryNo) {
  const galleryContent = document.getElementById(`gallery-${boxNumber}`);
  if (galleryContent) {
    document.querySelectorAll(".gallery-content").forEach((gallery) => {
      gallery.style.display = "none";
    });

    galleryContent.style.display = "block";

    window.scrollTo({
      behavior: "smooth",
      top:
        document.querySelector(galleryNo).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        0,
    });
  }
}

const scrollHandler = (selector, offset) => {
  window.scrollTo({
    behavior: "smooth",
    top:
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
};
