const navBtn = document.getElementById("nav-btn");
const mobileNav = document.getElementById("mobile-nav");
const navItem = document.querySelectorAll(".nav-item");
const navArrow = document.querySelectorAll(".nav-arrow");
const mobileNavBar = document.getElementById("mobile-navbar");
const footer = document.getElementsByTagName("footer");
const navItemDesktop = document.querySelectorAll(".nav-item-desktop");
const desktopSubmenu = document.querySelectorAll(".desktop-submenu");

window.addEventListener("scroll", fixedNav);
window.addEventListener("scroll", hideNav);

navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("active")) {
    navBtn.children[0].setAttribute("src", "../images/icon-hamburger.svg");
    navBtn.classList.remove("active");
    mobileNav.classList.add("hidden");
  } else {
    navBtn.children[0].setAttribute("src", "../images/icon-close.svg");
    navBtn.classList.add("active");
    mobileNav.classList.remove("hidden");
  }
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    let active = item.children[1].classList.contains("hidden");

    navItem.forEach((inactiveItem) => {
      inactiveItem.children[1].classList.remove("flex");
      inactiveItem.children[1].classList.add("hidden");
      inactiveItem.children[0].children[1].classList.remove("rotate-180");
    });

    if (active) {
      item.children[1].classList.toggle("hidden");
      item.children[0].children[1].classList.toggle("rotate-180");
      item.children[1].classList.add("flex");
    }
  });
});

navItemDesktop.forEach((item) => {
  item.addEventListener("click", () => {
    let active = item.children[1].classList.contains("hidden");

    navItemDesktop.forEach((inactiveItem) => {
      inactiveItem.children[1].classList.remove("flex");
      inactiveItem.children[1].classList.add("hidden");
      inactiveItem.children[0].children[0].classList.remove("text-white");
      inactiveItem.children[0].children[0].classList.remove("underline");
      inactiveItem.children[0].children[0].classList.add("text-white/75");
      inactiveItem.children[0].children[1].classList.remove("rotate-180");
      inactiveItem.children[0].children[1].children[0].classList.remove(
        "opacity-100"
      );
    });

    if (active) {
      item.children[1].classList.toggle("hidden");
      item.children[0].children[0].classList.remove("text-white/75");
      item.children[0].children[0].classList.add("text-white");
      item.children[0].children[0].classList.add("underline");
      item.children[0].children[1].classList.toggle("rotate-180");
      item.children[0].children[1].children[0].classList.toggle("opacity-100");
      item.children[1].classList.add("flex");
    }
  });
});

function fixedNav() {
  if (window.scrollY > mobileNavBar.offsetHeight / 3) {
    mobileNavBar.classList.add("bg-[#24242C]");
    mobileNavBar.classList.remove("py-[3.5rem]");
    mobileNavBar.classList.add("py-[1rem]");
  } else {
    mobileNavBar.classList.remove("bg-[#24242C]");
    mobileNavBar.classList.remove("py-[1rem]");
    mobileNavBar.classList.add("py-[3.5rem]");
  }
}

function hideNav() {
  if (window.scrollY >= 8.5 * document.documentElement.clientWidth) {
    mobileNavBar.classList.add("hidden");
    mobileNav.classList.add("hidden");
  } else {
    if (navBtn.classList.contains("active")) {
      mobileNav.classList.remove("hidden");
    }
    mobileNavBar.classList.remove("hidden");
  }
}
