// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika book-menu di klik
document.querySelector("#book-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik sidebar bair ilang
const book = document.querySelector("#book-menu");

document.addEventListener("click", function (e) {
  if (!book.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});