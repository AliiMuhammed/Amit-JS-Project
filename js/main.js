const navbarBtnShow = document.getElementById("bars-btn");
const navbarBtnClose = document.getElementById("close-btn");
const navLinks = document.querySelector("nav .links");

function updateButtonVisibility() {
  if (window.innerWidth <= 992) {
    navbarBtnShow.style.display = "block";
    navbarBtnClose.style.display = "none";
    navLinks.classList.remove("active");
  } else {
    navbarBtnShow.style.display = "none";
    navbarBtnClose.style.display = "none";
    navLinks.classList.remove("active");
  }
}

// Initial update based on screen size
updateButtonVisibility();

navbarBtnShow.addEventListener("click", () => {
  navbarBtnShow.style.display = "none";
  navbarBtnClose.style.display = "block";
  navLinks.classList.add("active");
});

navbarBtnClose.addEventListener("click", () => {
  navbarBtnClose.style.display = "none";
  navbarBtnShow.style.display = "block";
  navLinks.classList.remove("active");
});

// Update button visibility on window resize
window.addEventListener("resize", updateButtonVisibility);
